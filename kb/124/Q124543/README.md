---
layout: page
title: "Q124543: Resource Conflict in Event Viewer with Diamond Viper Video Card"
permalink: kb/124/Q124543/
---

## Q124543: Resource Conflict in Event Viewer with Diamond Viper Video Card

	Article: Q124543
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Diamond Viper VLB video card (BIOS revision 2) installed, the card
	does not initialize with the Diamond Viper driver. Event Viewer reports a
	resource conflict.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. In the Control Panel window, choose the Display icon.
	
	2. Choose the Change Display Type button.
	
	3. In the Adapter Type box, choose the Change button.
	
	4. Select the Weitek P9000 Graphics Adapter (not one of the Diamond devices).
	
	5. Set the hex memory to 80 000 000 (not the first choice of 04 000 000).
	
	6. Install one of the following BIOS revisions: 3.09, 2.04, or 1.14.
	
	The Diamond Viper video card discussed here is manufactured by Diamond Computer
	Systems, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	Additional query words: prodnt rev
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
