---
layout: page
title: "Q128929: LAN Manager Logon Script Window Placement in WFW"
permalink: /kb/128/Q128929/
---

## Q128929: LAN Manager Logon Script Window Placement in WFW

{% raw %}

	Article: Q128929
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11; :2.2b; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft LAN Manager, version 2.2b 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on from a Windows for Workgroups 3.11 client computer to a LAN
	Manager or Windows NT domain and your logon script (defined on the server)
	executes, two windows with identical LAN Manager Logon Script title bars appear.
	The window in the foreground states the following, and displays a Cancel
	button:
	
	  Please wait while your logon script executes...
	
	If you press Enter, the logon script on the background window stops with the
	following error messages:
	
	  Batch file missing
	  Bad command or file name
	
	NOTE: The error messages above disappear very quickly. To view the error
	messages, ensure that LMSCRIPT.PIF file does not have the Close Window On Exit
	check box selected. The LMSCRIPT.PIF file is located in the WINDOWS\SYSTEM
	subdirectory.
	
	CAUSE
	=====
	
	An additional window for the logon script with a Cancel button appears in front
	of the actual logon script window when:
	
	- WinPopup is enabled for Startup Settings in Control Panel Network.
	
	-and-
	
	- Domain Logon password is saved in the user's password list (PWL) file.
	
	The above error messages occurs when you press Enter during the execution of the
	logon script in the second background window. This operation cancels the logon
	script execution.
	
	RESOLUTION
	==========
	
	To work around this problem, select the window running the logon script to place
	it in the foreground.
	
	To correct this problem:
	
	1. Reset the cached Domain Logon password by deleting the <username>.PWL
	  file in the WINDOWS directory.
	
	2. Log on to the Domain again. When the Domain Logon dialog box appears, enter
	  the logon information, but do not select "Save this Password in Your Password
	  List."
	
	3. Run Control Panel, choose Network. Disable WinPopup.
	
	  If your require WinPopup, add the following in the [windows] section of the
	  WIN.INI file:
	
	        load=winpopup.exe
	
	Additional query words: prodnt 3.10 3.11 2.20b wfw wfwg lanman user name
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbLanManSearch kbWFWSearch kbWFW311 kbLanMan220b
	Version           : WINDOWS:3.11; :2.2b; winnt:3.5
	
	=============================================================================
	

{% endraw %}
