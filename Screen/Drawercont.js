import React from 'react';

function Drawercont(props) {
    return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
              />
              <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
              />
            </DrawerContentScrollView>
          );
        }
        
    
export default Drawercont;