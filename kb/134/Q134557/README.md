---
layout: page
title: "Q134557: Problems with Finale 2.0 for Windows"
permalink: /kb/134/Q134557/
---

## Q134557: Problems with Finale 2.0 for Windows

	Article: Q134557
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Finale 2.0 for Windows may no longer work correctly after you restart Windows
	95. The notes may be displayed as characters, and you may receive an error
	message when you try to print.
	
	CAUSE
	=====
	
	Finale 2.0 for Windows Setup incorrectly references in the Win.ini file the
	fonts it installs.
	
	RESOLUTION
	==========
	
	You must manually install the Finale 2.0 for Windows fonts. To do so, follow
	these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double click the Fonts folder.
	
	3. On the File menu, click Install New Font.
	
	4. In the Folders box, double-click the Windows folder.
	
	5. Click Select All, and then click OK.
	
	MORE INFORMATION
	================
	
	If Windows 95 is installed first and Finale is installed afterwards, Finale
	works properly until Windows 95 is restarted. The incorrect font specification
	problem surfaces when Windows 95 restarts and tries to read the fonts.
	
	If you upgraded an existing copy of Windows or Windows for Workgroups to Windows
	95, and Finale was already installed, manual installation of the fonts is
	required.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
