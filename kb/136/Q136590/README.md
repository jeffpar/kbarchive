---
layout: page
title: "Q136590: AST StarCom Program Reports &quot;Modem Hardware Failure&quot;"
permalink: /kb/136/Q136590/
---

## Q136590: AST StarCom Program Reports &quot;Modem Hardware Failure&quot;

	Article: Q136590
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the StarCom program included with AST Works, you may receive the
	following error message:
	
	  Modem Hardware Failure
	
	CAUSE
	=====
	
	The drivers that StarCom uses are incompatible with Windows 95.
	
	RESOLUTION
	==========
	
	To use StarCom in Windows 95, use one of the following methods:
	
	Method 1
	--------
	
	  Restart your computer in MS-DOS mode, and then copy all the files from the
	  Drivers\Audio\Ast folder on the Windows 95 CD-ROM to the Windows\System
	  folder on the hard disk. After you copy these files, restart your computer.
	
	Method 3
	--------
	
	  In Windows 95, install the driver by following these steps:
	
	  1. Click on the Windows 95 Start Button and select Settings. Then choose the
	  Control Panel folder.
	
	  2. Choose the Add New Hardware icon, click Next and then the No button to
	  prevent autodetection.
	
	  3. Select the Sound, video, and game controllers option from the list of
	  hardware types.
	
	  4. Insert the disk containing the driver in drive A: and click the Have Disk
	  button.
	
	  5. The name of the modem will be displayed. Choose OK and then click Finish.
	
	  6. A setup dialog box will be displayed. Follow the manufacturer's directions
	  supplied with the modem for configuring the driver.
	
	MORE INFORMATION
	================
	
	The StarCom program provides support for voice mail, caller ID, and other
	functions through your computer.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
