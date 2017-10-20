---
layout: page
title: "Q24600: AddMenu.exe Demonstrates Adding Menus Dynamically"
permalink: /kb/024/Q24600/
---

## Q24600: AddMenu.exe Demonstrates Adding Menus Dynamically

{% raw %}

	Article: Q24600
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbMenu kbOSWin2000 kbResource kbGrpDSUser kbOSWin310 kbWndw kbOSWin300
	Last Modified: 09-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two different methods that you can use to add a pop-up menu to the
	menu bar at run time.
	
	The first method is to define a version of the application's main menu that
	includes the pop-up. This is done in the resource (RC) file with any other menus
	that the application uses. To add the menu to the menu bar, use the following
	sequence of code:
	
	     hMenu = LoadMenu(hInst, (LPSTR)"<menu name>");
	     SetMenu(hWnd, hMenu);
	     DrawMenuBar(hWnd);
	
	The second method creates the pop-up menu dynamically at run time. To use this
	method, place the following code in the application:
	
	     hPopup = CreateMenu();
	     AppendMenu(hPopup, MF_ENABLED, ID1, (LPSTR)"text 1");
	     AppendMenu(hPopup, MF_ENABLED, ID2, (LPSTR)"text 2");
	     hMenu = GetMenu(hWnd);
	     AppendMenu(hMenu, MF_POPUP, hPopup, (LPSTR)"new pop-up");
	     DrawMenuBar(hWnd);
	
	AddMenu.exe is a sample of this dynamic-creation method.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  AddMenu.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbMenu kbOSWin2000 kbResource kbGrpDSUser kbOSWin310 kbWndw kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
