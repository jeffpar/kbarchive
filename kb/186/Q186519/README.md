---
layout: page
title: "Q186519: Terminal Server Application Error: Duplicate NetBIOS Name"
permalink: /kb/186/Q186519/
---

## Q186519: Terminal Server Application Error: Duplicate NetBIOS Name

{% raw %}

	Article: Q186519
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help
	topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you run an application on a Terminal Server computer, you may see the
	following error message:
	
	  Duplicate NetBIOS Name In Use
	
	CAUSE
	=====
	
	Some applications make use of a NetBIOS function to discover the computer name
	of the computer the application is running on. When more than one user runs the
	application, Terminal Server can return each user's logon name rather than the
	computer name to an application that is making this NetBIOS call.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Log on to the Terminal Server computer as an administrator, start Registry
	  Editor (Regedt32.exe), and go to the following subkey to create a key for
	  your application's executable file name:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	     \Terminal Server\Compatibility\Application.
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. To add a key for your application, select the "..\Application" subkey, and
	  from the Edit menu, click Add Key.
	
	3. Type the name of your application's executable file (less the extension and
	  leave the "Class" field empty), and then press Enter.
	
	4. Select the application name subkey you just created, and from the Edit menu,
	  click Add value.
	
	5. Type the following information, and then press Enter.
	
	  "Value Name: flags Data Type: REG_DWORD" (without the quotation marks)
	
	6. You will be prompted for data at this point. Type "1F" so that whenever the
	  application you specified is run, Terminal Server will report the username
	  instead of the computer name.
	
	NOTE: This list of application compatibility flags can be used to determine the
	value to be put into the above requested "flag value" to set the compatibility
	parameter you need. These are hexadecimal values and should be added together to
	create the appropriate flag value.
	
	- DOS 0x00000001 - An MS-DOS application
	- OS2 0x00000002 - An OS/2 application
	- WIN16 0x00000004 - A Win16 application
	- WIN32 0x00000008 - A Win32 application
	- ALL 0x0000000F
	- USERNAME 0x00000010 - return user name for computer name (In the above case,
	  then, the flag value of 1F is a combination of the ALL applications value
	  0x0000000F and the USERNAME value of 0x00000010)
	- BLDNUM 0x00000020 - return Terminal Server build number
	- INISYNC 0x00000040 - sync user .INI file to system
	- ININOSUB 0x00000080 - Do not substitute the user's system directory for
	  Terminal Server's system directory
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
