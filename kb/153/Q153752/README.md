---
layout: page
title: "Q153752: Incorrect Output Using HP DesignJet 650c and 750c"
permalink: /kb/153/Q153752/
---

## Q153752: Incorrect Output Using HP DesignJet 650c and 750c

	Article: Q153752
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print to a Hewlett-Packard (HP) DesignJet 650c and 750c from a Windows
	application that uses layers of text and graphics, portions of the text or
	graphics may be missing or placed incorrectly on the printed page. Hidden text
	or graphics may incorrectly appear in front of other objects, and parts of the
	printout may be offset.
	
	CAUSE
	=====
	
	This problem occurs when certain plotter-specific options on the DesignJet 650c
	and 750c are used. These include:
	
	1. Setting the plotter option to rotate plots.
	
	2. Using one of the four plotter-defined palettes instead of a software palette
	
	3. Enabling the special spooler options on the plotter designed to print
	  multiple small plots together on one page.
	
	
	Windows NT plotter drivers for most HP DesignJet series plotters are designed for
	use with margins set to Normal, paper size set to Software, and auto-rotation
	set to Off.
	
	WORKAROUND
	==========
	
	When you are troubleshooting problems, reset the plotter to the factory defaults
	and make only necessary changes from the defaults.
	
	STATUS
	======
	
	The HP DesignJet 650c and 750c is manufactured by Hewlett-Packard Company, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: 3.50 3.51 4.0 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
