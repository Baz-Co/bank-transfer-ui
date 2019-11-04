import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Sets all content outside the modal as aria-hidden for WIA-ARIA compliance
ReactModal.setAppElement('#root')

type Props = {
  isOpen: boolean
}

type State = {
  isOpen: boolean
}

export class Modal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // this.subtitle = React.createRef();
    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  readonly state: State = {
    isOpen: false
  };

  // openModal() {
  //   this.setState({isOpen: true});
  // }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  // closeModal() {
  //   this.setState({isOpen: false});
  // }

  render() {
    console.log('Modal - this.props.isOpen:', this.props.isOpen)
    return (
      <div>
        {/* <button onClick={this.openModal}>Open Modal</button> */}
        <ReactModal
          isOpen={this.props.isOpen}
          // onAfterOpen={this.afterOpenModal}
          // onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          {/* <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2> */}
          {/* <button onClick={this.closeModal}>close</button> */}
          {this.props.children}          
        </ReactModal>
      </div>
    );
  }
}

export default Modal