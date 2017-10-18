---
layout: page
title: "Q104362: PC Win: CHKMMF Creates a Backup File on Each Run"
permalink: kb/104/Q104362/
---

## Q104362: PC Win: CHKMMF Creates a Backup File on Each Run

	Article: Q104362
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the CHKMMF utility from version 3.0b and 3.2 of Microsoft Mail for
	Windows, files with extensions other than .MMF may exist in the MMF subdirectory
	of the Microsoft Mail for PC Networks database.
	
	CAUSE
	=====
	
	Mail for Windows can repair a damaged Mail message file (MMF) when you start
	Mail. During this process, the original .MMF is renamed with a .BAK extension.
	On subsequent rebuilds, if the file with a .BAK extension already exists, the
	MMF file is renamed with a .001, .002, .003 (and so on) extension.
	
	RESOLUTION
	==========
	
	These files (with extensions other than .MMF) may be deleted if the consistency
	check (CHKMMF) was completed successfully. The file POPULATE.MSM should be the
	only file without an .MMF extension.
	
	NOTE: Do not delete the POPULATE.MSM file. For backup purposes, it is used to
	ensure the directory is not completely empty.
	
	Additional query words: 3.00b 3.20 extra numbered
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	
