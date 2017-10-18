---
layout: page
title: "Q139425: Windows Printing System Prints Incorrect Characters"
permalink: kb/139/Q139425/
---

## Q139425: Windows Printing System Prints Incorrect Characters

	Article: Q139425
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a local Windows Printing System (WPS) printer on a Windows
	95-based computer, incorrect characters may be printed at the top of the first
	page, followed by several blank pages. Print jobs sent to a remote shared
	printer are printed correctly.
	
	CAUSE
	=====
	
	Windows 95 requires that bidirectional communication be enabled when you are
	using WPS.
	
	This setting must be enabled even if the port you are printing to is not
	bidirectional.
	
	RESOLUTION
	==========
	
	To resolve this problem follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the Windows Printing System icon, and
	  then click Properties on the menu that appears.
	
	3. On the Details tab, click Spool Settings.
	
	4. In the Spool Data Format box, click "Enable bidirectional support for this
	  printer."
	
	  NOTE: This setting is unavailable if you are using a shared WPS printer on the
	  network. You must perform these steps on the computer to which the printer is
	  connected.
	
	5. Click OK, and then click OK again.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
