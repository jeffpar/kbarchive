---
layout: page
title: "Q139297: Alternate Address on IBM Token Ring Card Results in Error"
permalink: /kb/139/Q139297/
---

## Q139297: Alternate Address on IBM Token Ring Card Results in Error

	Article: Q139297
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
	
	If you configure your IBM Token Ring 4/16 Mbs network adapter to use the
	Alternate (A24-A27) setting, Windows 95 properly detects that the adapter is
	using port A24, but the card does not function. You may receive the following
	error message:
	
	  Your network adapter IBM Token Ring (All Types) (0000) is not working
	  properly. You may need to set it up again. For more information, see Network
	  Troubleshooter in Windows for help.
	
	CAUSE
	=====
	
	Although Windows 95 correctly detects the IBM Token Ring 4/16 Mbs network
	adapter, it fails to communicate the detected alternate address setting to the
	Windows 95 adapter driver.
	
	RESOLUTION
	==========
	
	Configure the network adapter driver to use the alternate address setting. To do
	so, follow these steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Click IBM 4/16 Mbs Token Ring, and then click Properties.
	
	3. Click the Advanced tab.
	
	4. In the Property box, click "32 bit only - Primary/Alternate."
	
	5. In the Value box, click "Alternate (A24-A27)."
	
	6. Click OK or Close until you return to Control Panel. When you are prompted to
	  restart your computer, do so.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
