---
layout: page
title: "Q100455: PC WRmt CONN: Using Gateway Address Lists"
permalink: /kb/100/Q100455/
---

## Q100455: PC WRmt CONN: Using Gateway Address Lists

	Article: Q100455
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2; :3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	Microsoft Mail Remote for Windows does not provide remote access to
	gateway address lists.
	
	To access SMTP, X400, FAX, MHS, and MCI gateways
	------------------------------------------------
	
	From the postoffice, copy the .NME and .GLB files that have the same
	name as the gateway to the data disk. Setup then installs the files in
	the directories with the same name as those file types found in the
	Windows MSMAIL\MSRMT subdirectory. The gateway appears in the address
	book.
	
	This procedure does not work for OfficeVision, PROFS, or SNADS
	gateways. However, it is possible to add all PROFS or SNADS users to a
	Custom View.
	
	To create a Custom View, use the following procedure with the
	Microsoft Mail for PC Networks Administrator program:
	
	1. Highlight the gateway (PROFS or SNADS) with the SPACEBAR.
	
	2. Press ESC (rather than ENTER) to choose individual names.
	
	NOTE: Custom Views are NOT automatically updated. Your mail
	administrator must modify each custom view as users are needed to be
	added, deleted or modified in your mail system.
	
	To get your updated view, select Update Address Lists when you connect
	to your postoffice. This downloads a complete address listing, not
	merely the new changes. If you have a large address list on your
	postoffice, this can take some time.
	
	NOTE: You might send mail to your mail administrator and ask that he
	notify you when he has updated the address list. In this way, you do
	not waste time downloading lists that have not been changed.
	
	Additional query words: 3.20 Admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320 kbMailRemote320
	Version           : WINDOWS:3.2; :3.2
	
	=============================================================================
	
