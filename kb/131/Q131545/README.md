---
layout: page
title: "Q131545: IBM DIAGS.COM Token Ring Utility Must Run in MS-DOS Mode"
permalink: /kb/131/Q131545/
---

## Q131545: IBM DIAGS.COM Token Ring Utility Must Run in MS-DOS Mode

	Article: Q131545
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the IBM DIAGS.COM utility in a windowed MS-DOS prompt
	session, the utility does not run and you receive the following error message:
	
	  This program has performed an illegal operation and will be terminated. Quit
	  all programs, and then restart your computer.
	
	If you click the Details button you receive the following information:
	
	  The program tried to execute an invalid instruction.
	
	CAUSE
	=====
	
	This error occurs because the DIAGS.COM utility tries to access the Token Ring
	adapter directly. This adapter is protected by the Windows 95 protected-mode
	network adapter driver.
	
	RESOLUTION
	==========
	
	To work around this problem, run the DIAGS.COM utility in MS-DOS mode. To do so,
	follow these steps:
	
	1. Locate the DIAGS.PIF file.
	
	2. Use the right mouse button to click the DIAGS.PIF file, then click Properties
	  on the menu that appears.
	
	3. Click the Program tab, then click the Advanced button.
	
	4. Click the MS-DOS Mode check box, then click OK.
	
	MORE INFORMATION
	================
	
	The DIAGS.COM utility is used to test IBM 16/4 Token Ring adapters.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: tr token-ring token/ring 16-4
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
