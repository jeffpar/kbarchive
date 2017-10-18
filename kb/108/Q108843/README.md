---
layout: page
title: "Q108843: PC Ext: Err Msg: Invalid Option Specified in .INI"
permalink: kb/108/Q108843/
---

## Q108843: PC Ext: Err Msg: Invalid Option Specified in .INI

	Article: Q108843
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.2 of Microsoft Mail for PC Networks, the External Mail program
	(EXTERNAL.EXE) may exit with the following error:
	
	  Invalid option specified in .INI:
	
	CAUSE
	=====
	
	This error is caused by a comment line that does not have a semicolon (;) in the
	first column of the INI file, or does not follow a valid INI option. A comment
	line of the form
	
	  ; This is a comment
	  ThisIsAValidOption     ; This is a comment
	
	does not cause the error. A line of the form
	
	            ; This is a comment
	
	is incorrect and causes the error.
	
	This error can also be caused by a corrupt .INI file.
	
	RESOLUTION
	==========
	
	Place a semicolon in the first column of every comment line that does not follow
	a valid INI option. Thus the line
	
	  ;           This is a comment
	
	is correct. Several sample configurations for the External Mail program in the
	Microsoft Mail for PC Networks version 3.2 "Administrator's Guide" incorrectly
	display comment lines. Any comment line that does not follow a valid INI option
	must have a semicolon in the first column.
	
	If you have double checked the .INI file and are certain that the entries are all
	valid, try creating a new one. Do not copy and paste from the old one, instead
	use Notepad or another ASCII editor and create a new .INI file.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
