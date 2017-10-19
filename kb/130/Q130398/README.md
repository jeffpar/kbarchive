---
layout: page
title: "Q130398: PC NTMMTA: Err Msg: Unable to Load Unicode Font"
permalink: /kb/130/Q130398/
---

## Q130398: PC NTMMTA: Err Msg: Unable to Load Unicode Font

	Article: Q130398
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit an INI file using the Edit INI option from Service Manager, the
	following error may occur:
	
	  Unable to load the Unicode Font.
	  Will not be able to display certain characters
	
	If you open the file with Notepad, the error will occur; however, Notepad will
	read the file correctly.
	
	CAUSE
	=====
	
	The above error may occur because the EXTERNAL.INI file was saved as a Unicode
	file format and no Unicode fonts are installed on the computer.
	
	RESOLUTION
	==========
	
	Save the EXTERNAL.INI as a text file.
	
	
	Additional query words: 3.20 unacode unified encode lucia lucid
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
