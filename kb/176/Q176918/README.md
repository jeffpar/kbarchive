---
layout: page
title: "Q176918: Cannot Change Network Printer Location from a Command Prompt"
permalink: kb/176/Q176918/
---

## Q176918: Cannot Change Network Printer Location from a Command Prompt

	Article: Q176918
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork kbprint win95
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to change the network path for a printer (LPT) port by using the
	NET USE command at a command prompt, the path changes for MS-DOS-based programs,
	but not for Windows-based programs.
	
	RESOLUTION
	==========
	
	To work around this issue, change the network path in Control Panel instead of
	using the NET USE command. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer whose network path you want to change, and then click
	  Properties.
	
	3. Click the Details tab, click End Capture, and then click the LPT port you
	  want to release.
	
	4. Click Capture Port, and then click the LPT port you want to capture in the
	  Device box.
	
	5. In the Path box, type the path to your network printer.
	
	6. Click OK, click OK, and then close the Printers window.
	
	STATUS
	======
	
	This behavior is by design.
	
	======================================================================
	Keywords          : kbnetwork kbprint win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
