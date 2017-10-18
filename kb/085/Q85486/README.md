---
layout: page
title: "Q85486: CTRL+ALT+DEL Requires Reboot in Windows Version 3.1"
permalink: kb/085/Q85486/
---

## Q85486: CTRL+ALT+DEL Requires Reboot in Windows Version 3.1

	Article: Q85486
	Product(s): Microsoft Programming Utilities
	Version(s): 3.07,4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	Microsoft Windows version 3.1 supports a local reboot feature. This
	feature allows a user to press the CTRL+ALT+DEL key combination, which
	brings up a menu that gives the user the choice of returning to
	Windows, ending the current application, or rebooting the computer.
	
	While using Microsoft CodeView for Windows version 3.07, 4.0, 4.01,
	4.1, or 4.25, the reboot option must be selected if local reboot is
	used. Returning to Windows or ending the current application could
	result in Windows becoming unstable.
	
	Note that Windows 3.1 requires the use of CodeView for Windows version
	3.07 or later.
	
	Additional query words: kbinf 4.00 4.10 hangs
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC 
	Technology        : kbAudDeveloper kbCodeView kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.07,4.0,4.01,4.1
	
	=============================================================================
	
