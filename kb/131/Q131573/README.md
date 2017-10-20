---
layout: page
title: "Q131573: Windows 95 Does Not Disable Third-Party Screen Savers"
permalink: /kb/131/Q131573/
---

## Q131573: Windows 95 Does Not Disable Third-Party Screen Savers

{% raw %}

	Article: Q131573
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
	
	When you try to return to the desktop after a Windows 95 screen saver has
	activated, the display may become garbled or unintelligible.
	
	CAUSE
	=====
	
	This problem can occur if both a third-party screen saver and a Windows 95
	screen saver are running on your computer at the same time.
	
	RESOLUTION
	==========
	
	Use either the third-party screen saver or the Windows 95 screen saver, but not
	both.
	
	To use the Windows 95 screen saver, disable the entry that starts the third-
	party screen saver in the WIN.INI file. Typically, third-party screen savers are
	loaded from the "Load=" or "Run=" line in the WIN.INI file. Use any text editor
	(such as Notepad) to edit the WIN.INI file and remove the portion of the "Load="
	or "Run=" line that loads the third-party screen saver application.
	
	To use the third-party screen saver, follow these steps:
	
	1. Use the right mouse button to click the desktop, then click Properties on the
	  menu that appears.
	
	2. Click the Screen Saver tab.
	
	3. In the Screen Saver box, click None.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	Windows 95 Setup does not recognize or disable third-party screen saver
	applications.
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
