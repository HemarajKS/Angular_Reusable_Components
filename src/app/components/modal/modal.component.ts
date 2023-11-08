import { Component, Input } from '@angular/core';
import { modalAnimation } from 'src/app/animations/animations';
import { ModalService } from 'src/app/services/components/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [modalAnimation],
})
export class ModalComponent {
  isModalVisible: boolean = false;

  constructor(private modalService: ModalService) {
    this.modalService.modalVisibility$.subscribe((isVisible) => {
      this.isModalVisible = isVisible;
    });
  }

  @Input() closeIcon: boolean = false;
  @Input() closeOnOverlayClick: boolean = false;
  @Input() mobileFullPage: boolean = false;
  @Input() customStyle: object = {};

  stopPropogation(event: Event) {
    event.stopPropagation();
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
