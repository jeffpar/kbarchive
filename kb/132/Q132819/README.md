---
layout: page
title: "Q132819: DynaComm 3270 Quick Start May Lock Up the System."
permalink: /kb/132/Q132819/
---

## Q132819: DynaComm 3270 Quick Start May Lock Up the System.

	Article: Q132819
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
	
	When you run the DynaComm 3270 Quick Start program in Windows 95 to configure a
	host session, the Quick Start program stops at the Transfer File menu. The
	pointer becomes locked, and even if you quit the program, the pointer remains
	frozen and the system is unstable.
	
	CAUSE
	=====
	
	The problem is directly related to the pulldown menus being at different offsets
	(a different menu font) in Windows 95 than in Windows 3.x.
	
	RESOLUTION
	==========
	
	Instead of using the Windows 95 default menu font (MS Sans Serif), change the
	menu font to System. To do so, follow these steps:
	
	1. Click the Start button, point to settings, and then click Control Panel.
	
	2. In Control Panel, double-click Display.
	
	3. In the Display Properties dialog box, click the Appearance tab.
	
	4. Under Item, select Menu.
	
	5. Under Font, select System, and then click the OK button.
	
	MORE INFORMATION
	================
	
	DynaComm 3270 Quick Start is manufactured by Future Soft Engineering, Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: hang freeze
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
