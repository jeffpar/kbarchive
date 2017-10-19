---
layout: page
title: "Q104147: PC Forms: Extended Characters Lost When Saving Forms"
permalink: /kb/104/Q104147/
---

## Q104147: PC Forms: Extended Characters Lost When Saving Forms

	Article: Q104147
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 1.0 of the Microsoft Electronic Forms Designer, when you save a
	form that contains an extended character (such as an umlaut), the form may lose
	the extended character.
	
	CAUSE
	=====
	
	The function responsible for expanding the character does not convert the
	records from CP850 (MS-DOS code page for multi-lingual keyboard sets) to ANSI.
	As a result, the extended characters are lost.
	
	RESOLUTION
	==========
	
	Non-English versions of Microsoft Mail for Windows must be upgraded with new
	libraries to correctly support the development and use of E-forms. Disk 2 of the
	Electronic Forms Designer contains upgraded versions of MAILSPL.EXE, MSSFS.DLL,
	and MAPI.DLL for the German and French versions of Microsoft Mail. Upgraded
	versions of these files for other languages will be available from local
	Microsoft subsidiaries.
	
	The files are provided on Disk 2 in compressed format. The French versions of the
	upgraded files are in the INTL\FRN directory. The German versions are in the
	INTL\GER directory.
	
	For more information, please see the Electronic Forms Designer README.WRI file.
	
	Additional query words: 1.00 foreign country ascii
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
