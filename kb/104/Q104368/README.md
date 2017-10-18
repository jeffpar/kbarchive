---
layout: page
title: "Q104368: PC Win: Lotus 1-2-3 Does Not Launch Mail Attachment"
permalink: kb/104/Q104368/
---

## Q104368: PC Win: Lotus 1-2-3 Does Not Launch Mail Attachment

	Article: Q104368
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 3.0 and 3.2 of Microsoft Mail for Windows, you cannot launch Lotus
	1-2-3 version 3.0 or 3.1 mail attachments by double-clicking the attached icon.
	
	CAUSE
	=====
	
	Lotus 1-2-3 does not allow you to load files directly by using a filename as a
	command-line parameter.
	
	RESOLUTION
	==========
	
	This is a limitation of Lotus 1-2-3 versions 3.0 and 3.1 and is not a Microsoft
	Windows or Mail problem.
	
	Lotus works around this problem by using a 123.BAT batch file and an AUTO123.WK3
	autoexecute macro. The 123.BAT file creates a text file with the name and path
	of the file to be loaded and then loads 123.EXE. The AUTO123.WK3 file reads the
	filename and path information from the text file and loads the desired file.
	
	In Windows File Manager, the File Associate command associates .WK3 files with
	123.BAT instead of 123.EXE.
	
	Specific information on the creation of the 123.BAT and AUTO123.WK3 files is
	available from Lotus in a technical note titled, "Loading a 123 3.0 File from
	the Command Line."
	
	For more information, contact Lotus Technical Support at (617) 253-9150.
	
	Lotus 1-2-3 is manufactured by Lotus Development Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
