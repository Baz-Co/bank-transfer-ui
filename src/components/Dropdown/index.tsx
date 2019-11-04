import React from 'react'
import Downshift from 'downshift'

import Label from "../Label";
import Input from "../Input";

import "./Dropdown.css";

import { IAccounts } from "../../types";

type IProps = {
  label?: string,
  onChange: (item: IAccounts) => void,
  items?: IAccounts[],
}

export const Dropdown: React.FC<IProps> = ({ label, onChange, items }) => { 
  return (
    <Downshift
      onChange={onChange}
      itemToString={item => (item ? item.name : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        openMenu
      }) => (
        <div>
          <Label {...getLabelProps()} text={label} />
          <Input
            {...getInputProps()}
            className="Dropdown__input"
            placeholder="Select an Account"
            onFocus={()=>{openMenu()}}
            style={{padding: '5px', width: '100%'}}
          />
          <div className="Dropdown__Panel">
            <ul {...getMenuProps()} style={{width: '100%'}}>
              {isOpen && items
                ? items
                    .filter(item => !inputValue || item.name.includes(inputValue))
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item._id,
                          index,
                          item,
                          style: {
                            padding: '5px',
                            backgroundColor:
                              highlightedIndex === index ? 'lightgray' : 'white',
                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                          }
                        })}
                      >
                        {item.name}
                      </li>
                    ))
                : null}
            </ul>
          </div>
        </div>
      )}
    </Downshift>
  )
}

export default Dropdown