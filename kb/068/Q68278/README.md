---
layout: page
title: "Q68278: COMPAQ SLT Screen Blanks When Returning to MS-DOS Prompt"
permalink: /kb/068/Q68278/
---

## Q68278: COMPAQ SLT Screen Blanks When Returning to MS-DOS Prompt

	Article: Q68278
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a COMPAQ SLT286 with Microsoft Windows, the screen may go blank
	after you press ALT+TAB to switch between applications.
	
	CAUSE
	=====
	
	This symptom is directly related to the COMPAQ PowerCon utility.
	
	The PowerCon utility is used by the SLT286 to conserve battery life by shutting
	down the display and hard disk after a specified period of inactivity. The
	ALT+TAB combinations prematurely trigger the PowerCon utility.
	
	WORKAROUND
	==========
	
	You can set Windows to ignore the ALT+TAB key combination as follows:
	
	1. Start PIF Editor.
	
	2. Click the Advanced button.
	
	3. Under the Reserve Shortcut Keys, check ALT+TAB.
	
	MORE INFORMATION
	================
	
	The PowerCon function can be disabled by running the COMPAQ setup utility
	provided with the system. This alleviates the problem discussed above, but
	eliminates the power conservation features offered by PowerCon.
	
	The COMPAQ product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
