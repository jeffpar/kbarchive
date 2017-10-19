---
layout: page
title: "Q95981: BUG: ProgMan DDE Reload() Command Does Not Work Properly"
permalink: /kb/095/Q95981/
---

## Q95981: BUG: ProgMan DDE Reload() Command Does Not Work Properly

	Article: Q95981
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Program Manager DDE Reload() command that is new for Windows 3.1 does not
	work as documented.
	
	SYMPTOMS
	========
	
	Attempting to use the Reload() command in Windows version 3.1 for a particular
	GroupName causes that Program Manager group to disappear. On the other hand, not
	specifying any GroupName, which supposedly instructs the Program Manager to
	unload all groups and reload the [Groups] section of PROGMAN.INI, causes all the
	groups to disappear.
	
	RESOLUTION
	==========
	
	After all necessary modifications have been made, the Program Manager DDE
	ReplaceItem() command may be used to delete the group items that have changed;
	add them back again with the AddItem() command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. This problem is
	scheduled to be corrected in the next Windows version.
	
	MORE INFORMATION
	================
	
	The DDE Reload() command documented in the Microsoft Windows version 3.1
	Software Development Kit (SDK) "Programmer's Reference, Volume 1: Overview"
	instructs Program Manager to remove and reload an existing group. An application
	that modifies group files can use this command to cause the Program Manager to
	update the groups when it has finished making modifications.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
