---
layout: page
title: "Q169227: Windows 95 Logon Script does not Process Correctly"
permalink: /kb/169/Q169227/
---

## Q169227: Windows 95 Logon Script does not Process Correctly

{% raw %}

	Article: Q169227
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows 95 client does not process your logon script, terminates the script
	prematurely, or the script stops responding (hangs) during processing.
	
	CAUSE
	=====
	
	There are several reasons that your client may not be properly processing your
	script file.
	
	- There is an environment variable such as %USERNAME% specified in the logon
	  script. Windows 95 does not understand all of the environment variables that
	  Windows NT does. In order to have this type of functionality, you must use a
	  third-party script application, such as KiXtart.
	
	- There may be a batch file that has been called that has not terminated
	  properly.
	
	- User Manager for Domains is not configured to launch the Script file such as
	  the file name is mistyped. This is configured in User Manager from
	  User/Properties on the menu bar and selecting the Profile button.
	
	- The file does not exist in the Netlogon share on every domain controller in
	  the logon domain.
	
	MORE INFORMATION
	================
	
	You may see different behavior on a computer running Windows NT Workstation or
	Windows NT Server. For full Environment Variable functionality, upgrade to
	Windows NT Workstation or Windows NT Server.
	
	NOTE: For more information on KiXtart, see the following article in the Microsoft
	Knowledge Base:
	
	  Q162793 How to Setup KiXtart Logon Scripts for a Windows 95 Client
	
	Additional query words: Win95 Global Set Winset.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
