---
layout: page
title: "Q160865: XCLN: Schedule+ Error Granting Permissions to Users from PAB"
permalink: /kb/160/Q160865/
---

## Q160865: XCLN: Schedule+ Error Granting Permissions to Users from PAB

	Article: Q160865
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	7.00
	WINDOWS
	kbusage kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding users from a personal address book (PAB) to the Access Permissions
	list in Microsoft Schedule+ for Windows, version 7.0 you may receive the
	following error message when you click OK:
	
	  All your access permissions could not be set on the server. Those that were
	  not set have been removed from your shared schedule file. Choose set access
	  permissions from the tools menu to see which permissions could not be set.
	
	If you log off and re-enter Schedule+, you receive the following error message:
	
	  Unable to modify access permissions. The item has been deleted.
	
	If you then view access permissions for the account, the addresses will no longer
	be listed.
	
	CAUSE
	=====
	
	The error occurs when users are chosen from the personal address book (PAB). If
	the addresses are chosen from the Global Address List this feature works as
	expected, and you do not receive the error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Schedule+ version 7.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 7.00 Exchange MSEXCHANGE
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
