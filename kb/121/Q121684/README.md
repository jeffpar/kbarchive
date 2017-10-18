---
layout: page
title: "Q121684: PRB: Boxes in MS-DOS Reports Print Incorrectly on Macintosh"
permalink: kb/121/Q121684/
---

## Q121684: PRB: Boxes in MS-DOS Reports Print Incorrectly on Macintosh

	Article: Q121684
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a FoxPro for MS-DOS report containing box objects is printed under FoxPro
	for Macintosh without being transported, the borders of the box objects are
	displayed as characters instead of lines.
	
	NOTE: This behavior does not occur when untransported FoxPro for MS-DOS reports
	are printed under FoxPro for Windows.
	
	RESOLUTION
	==========
	
	To print the box objects correctly, use one of the following methods:
	
	- Before printing the report, set the printer font to FoxFont as follows:
	
	        SET PRINT FONT "FOXFONT",12
	
	  -or-
	
	- Transport the FoxPro for MS-DOS reports before printing them under FoxPro for
	  Macintosh.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: VFoxMac FoxMac cross- platform line rectangle xplat transporter converted translated transferred
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,2.6a,3.0b
	
	=============================================================================
	
