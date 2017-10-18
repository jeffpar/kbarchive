---
layout: page
title: "Q105966: PC Adm: FIXFLD Utility Incorrectly Gives Syntax for DUMPFLD"
permalink: kb/105/Q105966/
---

## Q105966: PC Adm: FIXFLD Utility Incorrectly Gives Syntax for DUMPFLD

	Article: Q105966
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Mail administrator for versions 2.1, 3.0, and 3.2 of Microsoft Mail for
	PC Networks invokes the Folder Repair utility (FIXFLD.EXE) by typing FIXFLD at
	the MS-DOS prompt, the program incorrectly displays the usage as follows:
	
	  Usage: DUMPFLD -args <indexfile>.
	
	The correct syntax for FIXFLD.EXE is documented in the FIXFLD.TXT file as
	follows:
	
	  FIXFLD <saved folder file> <new folder file>
	
	The FIXFLD.EXE and FIXFLD.TXT files are provided as part of the Database
	Maintenance Utilities document. To obtain these utilities, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	Additional query words: 2.10 3.00 3.00b 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN210
	Version           : :2.1,3.0,3.0b,3.2
	
	=============================================================================
	
