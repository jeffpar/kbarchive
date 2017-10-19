---
layout: page
title: "Q75468: ATM Fonts and PostScript Fonts Don't Match in Windows"
permalink: /kb/075/Q75468/
---

## Q75468: ATM Fonts and PostScript Fonts Don't Match in Windows

	Article: Q75468
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a Windows application capable of printing or when you try to print
	from some Windows applications, the following error message is displayed:
	
	  ATM fonts and Postscript fonts don't match on Fontname
	
	CAUSE
	=====
	
	This error message means that there is a mismatch in the ATM.INI and/or the
	WIN.INI files. The two most common mismatches are:
	
	- More font entries are in the ATM.INI than in the PostScript printer section
	  of the WIN.INI file.
	
	- More line entries for fonts are in the Postscript printer fonts section of
	  the WIN.INI file than on the softfonts=## line in the same section.
	
	RESOLUTION
	==========
	
	Edit your WIN.INI fileso that the mismatches are corrected.
	
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
