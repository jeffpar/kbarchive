---
layout: page
title: "Q102590: Using ReplaceItem() Command in Program Manager DDE"
permalink: /kb/102/Q102590/
---

## Q102590: Using ReplaceItem() Command in Program Manager DDE

{% raw %}

	Article: Q102590
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Program Manager has a dynamic-data exchange (DDE) command-string interface that
	allows other applications to manipulate its group windows. Windows version 3.1
	has a new command called ReplaceItem(), which instructs Program Manager to
	delete an item and replace it with a new item when Program Manager receives a
	subsequent AddItem() command.
	
	MORE INFORMATION
	================
	
	The syntax for the ReplaceItem() command is
	
	     ReplaceItem(ItemName)
	
	where ItemName is the name of the item that is to be replaced.
	
	The ReplaceItem() command instructs Program Manager to delete the given ItemName
	and record the position of the deleted item. The next time Program Manager
	receives an AddItem() command, it adds the new item to this previously recorded
	position, effectively replacing the deleted item with the new one.
	
	For example, Program Manager has a group called "MAIN" with an item called
	"TEST". To replace the item TEST with a new item "NEW", the following commands
	must be executed:
	
	     ShowGroup ("MAIN", 1);    //Activate the group first.
	     ReplaceItem ("TEST");
	     AddItem ("NEW");
	
	The position of the newly added item will be the same as the deleted item (TEST)
	regardless of what parameters are passed in the AddItem() command. Given that
	the position (xpos, ypos) of item TEST was (10, 10) in the group MAIN before it
	was replaced by item NEW, specifying a new (xPos, yPos) position for NEW in the
	AddItem() command has no effect. Program Manager adds the NEW item at the
	recorded position (10, 10) in MAIN.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
