---
layout: page
title: "Q263042: How to remove the MSN 5.x icon from the Internet Explorer window"
permalink: kb/263/Q263042/
---

## Q263042: How to remove the MSN 5.x icon from the Internet Explorer window

	Article: Q263042
	Product(s): The Microsoft Network
	Version(s): 2000,5,5.0,5.1,5.2,5.3,5.5,95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Explorer versions 5, 5.5 for Windows 98 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 98 Second Edition 
	- the operating system: Microsoft Windows 2000 
	- MSN versions 5.0, 5.1, 5.2, 5.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To remove the MSN 5.x icon from the Internet Explorer toolbar
	-------------------------------------------------------------
	
	1. On Internet Explorer toolbar click View, select Toolbars, and then click
	  Customize.
	
	2. In the Current toolbar buttons window select MSN, click Remove, and then
	  click Close.
	
	To remove the MSN 5.x icon from the Internet Explorer toolbar by editing the registry keys:
	-------------------------------------------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start and click Run.
	
	2. Type regedit and click OK.
	
	3. In the left window click HKEY_CURRENT_USER, click Software, and then click
	  Microsoft.
	
	4. Click Internet Explorer and click Toolbar.
	
	5. Select and delete the following key names in the right hand pane:
	
	   - BrandBitmap
	
	   - SmBrandBitmap
	
	   - BigBitmap
	
	   - SmallBitmap
	
	6. Restart the computer.
	
	See also Q263043 - How to remove an MSN 5.x icon from the Windows desktop.
	
	MORE INFORMATION
	================
	
	Caution: Removing the MSN 5.x icon from the Internet Explorer toolbar by editing
	the registry keys is not supported by MSN or any MSN support personnel. Please
	use extreme caution. Please note Terms of Use: NOTICE SPECIFIC TO DOCUMENTS
	AVAILABLE ON THIS WEBSITE.
	
	Additional query words: kbimu
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin2000 kbOSWin98 kbOSWin95 kbIEsearch kbOSWin98SE kbOSWinSearch kbMSNSearch kbIE500Search kbZNotKeyword3 kbIE98Search kbIE500Win98 kbIE550Win98 kbMSN520 kbMSN530 kbMSN510 kbMSN500 kbIE550Search
	Version           : :2000,5,5.0,5.1,5.2,5.3,5.5,95,98,98 Second Edition
	Issue type        : kbhowto
	
	=============================================================================
	
