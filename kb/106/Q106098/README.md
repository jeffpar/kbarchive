---
layout: page
title: "Q106098: PC Adm: Err Msg: Failure to Read Record"
permalink: /kb/106/Q106098/
---

## Q106098: PC Adm: Err Msg: Failure to Read Record

	Article: Q106098
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Mail administrator for versions 2.1, 3.0, and 3.2 of Microsoft Mail for
	PC Networks invokes the DUMPFLD.EXE utility with the -M option, as DUMPFLD -ML
	00000001.FLD, the following error message may be displayed at the end of the
	diagnostic dump:
	
	  Error: Failure to read record
	
	RESOLUTION
	==========
	
	This error message is only displayed when you use the -M option. You can ignore
	the error message.
	
	The DUMPFLD.EXE and DUMPFLD.TXT files are included as part of the "Database
	Maintenance Utilities" document. To obtain these utilities, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	
	Additional query words: 2.10 3.00 3.00b 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.0b,3.2
	
	=============================================================================
	
