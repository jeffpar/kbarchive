---
layout: page
title: "Q149284: XADM: PC Mail Shared Folders not Converted To Public Folders"
permalink: /kb/149/Q149284/
---

## Q149284: XADM: PC Mail Shared Folders not Converted To Public Folders

	Article: Q149284
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Migration Wizard for Microsoft Mail for PC Networks fails
	to migrate shared folders from Mail for PC Networks postoffices; however,
	everything else migrates.
	
	The application log in Event log reads:
	
	  Could not migrate shared folders Event 168
	
	CAUSE
	=====
	
	The Information Store Site Configuration does not have the Microsoft Exchange
	Service Account specified under Top Level Folder Creation tab in the Microsoft
	Exchange Administrator program.
	
	RESOLUTION
	==========
	
	Start the Microsoft Exchange Administrator program. Under Configuration,
	double-click the Information Store Site Configuration tab and select the Top
	Level Folder Creation tab. Change the Allowed to Create Top Level Folder radio
	button to All and migrate the users. After migration users can be limited to who
	can create top level folders.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
