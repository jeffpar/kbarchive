---
layout: page
title: "Q94893: DOSSHELL.INI Archive Attribute Is Not Set"
permalink: /kb/094/Q94893/
---

## Q94893: DOSSHELL.INI Archive Attribute Is Not Set

	Article: Q94893
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The archive attribute (a) on the MS-DOS Shell file DOSSHELL.INI is not set when
	modifications are made to the MS-DOS Shell that require rewriting the
	DOSSHELL.INI file.
	
	MORE INFORMATION
	================
	
	The archive attribute is used to mark files that have changed. The MS-DOS
	commands BACKUP, RESTORE and XCOPY can use the archive attribute.
	
	Configuration information is written to DOSSHELL.INI when changes are made to the
	MS-DOS Shell.
	
	WORKAROUND
	==========
	
	To set the archive attribute on the DOSSHELL.INI, type the following at the
	MS-DOS command prompt
	
	  " attrib +a <path>\dosshell.ini" (without the quotation marks)
	
	where <path> is the drive and directory where your MS-DOS files currently
	reside. For example, if your MS-DOS files are on drive C in the DOS directory,
	type the following:
	
	  " attrib +a c:\dos\dosshell.ini" (without the quotation marks)
	
	Reference(s):
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, Chapter 14
	
	Additional query words: 5.00 5.00a ATTRIB
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
