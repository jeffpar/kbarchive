---
layout: page
title: "Q83915: NoTitle.exe - Adding and Removing Caption of a Window"
permalink: /kb/083/Q83915/
---

## Q83915: NoTitle.exe - Adding and Removing Caption of a Window

{% raw %}

	Article: Q83915
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbWndwProp kbOSWin300
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NoTitle.exe is a file in the Microsoft Software Library that demonstrates adding
	and removing the title (caption) of a window.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  NoTitle.exe
	  (http://support.microsoft.com/download/support/mslfiles/NoTitle.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	In the NoTitle.exe sample, when the window has a caption and the user selects
	NoTitle from the main menu, the caption is removed. When the user double- clicks
	the window without a caption by using the left mouse button, the caption is
	added to the window.
	
	NoTitle.exe removes the caption by performing the following five steps:
	
	1. Removes the menu from the window by calling the SetMenu() function with NULL
	  as the hMenu parameter.
	
	2. Retrieves the current window style by calling GetWindowLong with GWL_STYLE as
	  the nIndex parameter.
	
	3. Removes the caption bit.
	
	4. Calls SetWindowLong() with GWL_STYLE to change the style of the window.
	
	5. Calls InvalidateRect() to instruct the application to redraw the window.
	
	NoTitle.exe places the caption on the window by performing the following five
	steps:
	
	1. Adds the menu to the window by calling the SetMenu() function with the menu
	  handle as the hMenu parameter.
	
	2. Retrieves the current window style by calling GetWindowLong() with GWL_STYLE
	  as the nIndex parameter.
	
	3. Adds the caption bit.
	
	4. Calls SetWindowLong() with GWL_STYLE to change the style of the window.
	
	5. Calls InvalidateRect() to instruct the application to redraw the window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbWndwProp kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
