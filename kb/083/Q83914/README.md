---
layout: page
title: "Q83914: HotKeyed.exe Creates a Shortcut-Key Edit Control"
permalink: /kb/083/Q83914/
---

## Q83914: HotKeyed.exe Creates a Shortcut-Key Edit Control

{% raw %}

	Article: Q83914
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbInput kbGrpDSUser kbOSWin310
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	HotKeyed.exe is a sample that demonstrates how to implement a shortcut-key edit
	control so a user can define a shortcut key for your application. When the user
	presses the shortcut key, Windows activates the corresponding application.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	HotKeyed.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	HotKeyed.exe demonstrates how an application can implement a shortcut-key (hot
	key) edit control. The application contains a dialog box in which the user can
	specify which shortcut key the application will use. This dialog box uses a
	subclassed edit control to display the name of the shortcut key entered by the
	user. The edit control verifies that the shortcut key is valid before displaying
	its name, and the control does not permit the user to enter an invalid shortcut
	key. HOTKEYED calls the GetKeyNameText function to retrieve the names of the
	specified keys.
	
	After the user enters a valid shortcut key, the application will install the
	shortcut key. Hotkeyed.exe installs a shortcut key by calling the
	SetWindowsHookEx function to install a task-specific keyboard hook. The
	application provides a menu selection to remove the shortcut key. Closing the
	application also removes the shortcut key.
	
	Once the shortcut key is installed, the application's window caption flashes to
	inform the user that a shortcut key is active. The caption continues to flash
	until the shortcut key is removed. When the user presses the shortcut key, the
	background color of the main window changes.
	
	A shortcut key must use the ALT key and/or the CTRL key as a modifier. The SHIFT
	key can also be specified as a modifier, but only in combination with the ALT
	and/or CTRL keys. The ESC, ENTER, TAB, and PRINT SCREEN keys and the SPACEBAR
	are not valid shortcut keys.
	
	The user can erase a key combination from the shortcut key edit control with the
	BACKSPACE key. Alternatively, the user can enter a different shortcut key.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbInput kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
