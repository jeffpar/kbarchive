---
layout: page
title: "Q121719: Running AMI Pro 3.0a QuickStart Tutorial with Windows 95"
permalink: /kb/121/Q121719/
---

## Q121719: Running AMI Pro 3.0a QuickStart Tutorial with Windows 95

	Article: Q121719
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the AMI Pro QuickStart Tutorial in Windows 95, you receive
	the following message:
	
	  QuickStart Tutorial will not run unless the AMI Pro window is maximized and
	  the Border Width is set to 3 in Control Panel.
	
	CAUSE
	=====
	
	In Windows 95, this error occurs when the Active Window Border is set to 3
	because the border proportions are different than in Windows 3.x. The border
	width in Windows 95 is wider than that of Windows 3.x. For example, a setting of
	1 inch in the Windows 95 Control Panel is equivalent to a setting of 3 in the
	Windows 3.x Control Panel.
	
	RESOLUTION
	==========
	
	To correct this problem, change the Active Window Border to 1. To do this:
	
	1. Use the right (secondary) mouse button to click the desktop.
	
	2. Click Properties.
	
	3. Click the Appearance tab.
	
	4. In the Item box, click Active Windows Border.
	
	5. Change the setting in the Size box to 1.
	
	6. Click Apply Now to accept the new setting, then click OK.
	
	The tutorial should now run correctly.
	
	MORE INFORMATION
	================
	
	AMI Pro is manufactured by Lotus Corporation, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3rdparty
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
