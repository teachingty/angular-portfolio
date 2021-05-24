import { Component, OnChanges} from '@angular/core';

@Component({
  selector: 'project-card-bar',
  templateUrl: './project-card-bar.component.html',
  styleUrls: ['./project-card-bar.component.scss']
})
export class ProjectCardBarComponent implements OnChanges {
  public photo= "url( '../../../../assets/cameringo_20180630_121510.jpg')"

  public ngOnChanges(): void {
  }
}
