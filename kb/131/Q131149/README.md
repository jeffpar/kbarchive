---
layout: page
title: "Q131149: PC Gen: Err Msg: Unknown User with MOVEFOLD.EXE"
permalink: kb/131/Q131149/
---

## Q131149: PC Gen: Err Msg: Unknown User with MOVEFOLD.EXE

	Article: Q131149
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the MOVEFOLD.EXE utility, included in the Database Maintenance
	Utilities for Microsoft Mail for PC Networks, you may receive the error
	
	  Unknown User
	
	after you enter the command to create the export archive.
	
	CAUSE
	=====
	
	This error will be displayed if the postoffice has Enhanced Security installed.
	
	RESOLUTION
	==========
	
	To determine if Enhanced Security is installed, run ESCNTLR.EXE, included with
	the Database Utilities. If the postoffice has Enhanced Security installed, you
	must uninstall Enhanced Security. Run the MOVEFOLD, and then reinstall Enhanced
	Security.
	
	To remove Enhanced Security you will need to use UPDATE.EXE for version 3.0 of
	Microsoft Mail for PC Networks and SETUP.EXE for version 3.2 of Microsoft Mail
	for PC Networks. You may also use the ESCNTLR.EXE utility provided with the
	Database Maintenance Utilities.
	
	
	MORE INFORMATION
	================
	
	For additional information on the Database Maintenance Utilities, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
