---
layout: page
title: "Q130153: No Printout with Adobe PostScript Printer Driver 2.1.1"
permalink: kb/130/Q130153/
---

## Q130153: No Printout with Adobe PostScript Printer Driver 2.1.1

	Article: Q130153
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print to a PostScript printer on the network, either of the
	following problems may occur:
	
	- Nothing is printed.
	
	- You receive a general protection (GP) fault error message similar to the
	  following error message:
	
	  SPOOL32 caused a general protection fault in module ADOBEPS.DRV
	
	CAUSE
	=====
	
	These problems can occur if you are using the Adobe PostScript printer driver
	version 2.1.1. This printer driver cannot print over a network.
	
	The Adobe PostScript printer driver version 2.1.1 appends a colon (:) to the end
	of the network path before it calls OpenJob(). The colon causes the network path
	to the print spooler to be invalid.
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the following methods:
	
	- Update to a Windows 95 PostScript printer driver.
	
	- Print to a file, then copy the file to the network printer port. For
	  information about how to do so, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q128345 Troubleshooting Printing Problems in Windows 95/98
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
