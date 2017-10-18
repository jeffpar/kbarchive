---
layout: page
title: "Q80130: DOCERR: L1008 Error from Incorrect /SEGMENTS Option Syntax"
permalink: kb/080/Q80130/
---

## Q80130: DOCERR: L1008 Error from Incorrect /SEGMENTS Option Syntax

	Article: Q80130
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1x,5.2,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.2, 5.3x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  LINK : fatal error L1008 : Segment limit set too high.
	
	CAUSE
	=====
	
	The LINK command line includes the /SE[GMENTS] option and the :<number>
	parameter is missing, or white space appears before or after the colon (:)
	character.
	
	RESOLUTION
	==========
	
	Modify the LINK command line to use the correct syntax for the option, as
	follows:
	
	     /SE[GMENTS]:number
	
	MORE INFORMATION
	================
	
	The following references document the /SEGMENTS option incorrectly:
	
	- Microsoft FORTRAN "Environment and Tools" manual for version 5.1, page 384.
	
	- Microsoft FORTRAN version 5.1 for MS-DOS online help.
	
	- Microsoft Macro Assembler "Programmer's Guide" manual for version 6.0, page
	  359.
	
	- Microsoft Macro Assembler version 6.0 for MS-DOS (MASM) online help.
	
	- Microsoft QuickC for Windows "Toolkit" manual for version 1.0, page 217.
	
	- Microsoft QuickC version 1.0 for Windows (QC/Win) online help.
	
	Each of these references document the /SEGMENTS option as follows
	
	     /SE[GMENTS][:number]
	
	indicating that the :<number> parameter is optional.
	
	Additional query words: 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.60 3.61 3.64 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1x,5.2,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
