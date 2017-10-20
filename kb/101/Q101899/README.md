---
layout: page
title: "Q101899: Recreating the Windows NT Mail Postoffice"
permalink: /kb/101/Q101899/
---

## Q101899: Recreating the Windows NT Mail Postoffice

{% raw %}

	Article: Q101899
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	When you first run Workgroups Mail in Windows NT, you have to option to
	connect to an existing post office or to create a new post office. After
	you make your choice, you cannot make a different choice.
	
	Windows NT 4.0
	--------------
	
	Use Windows NT 4.0 Add/Remove Program under Control Panel to recreate the
	post office. Steps to recreate the post office under Windows NT 4.0:
	
	1. Select Add/Remove Program under Control Panel
	
	2. Select Windows NT Setup
	
	3. Select Windows Messaging
	
	4. Uncheck the check box
	
	Windows NT 3.x
	--------------
	
	To recreate the post office or to change your initial selection
	under Windows NT 3.x, you must perform the following nine steps to edit
	the Registry database.
	
	WARNING: Using Registry Editor incorrectly can cause serious,
	system-wide problems that may require you to reinstall Windows NT to
	correct them. Microsoft cannot guarantee that any problems resulting
	from the use of Registry Editor can be solved. Use this tool at your
	own risk.
	
	1. Start REGEDT32.
	
	2. Select the HKEY_CURRENT_USER subtree and search for the following subkey:
	  Software\Microsoft\Mail\Microsoft Mail
	
	3. From the right side of the window, choose the Login:REG_SZ: value.
	
	4. From the Edit menu, choose String.
	
	5. Edit the string to remove any references; leave it blank.
	
	6. From the right side of the window, choose the ServerPath:REG_SZ: value.
	
	7. From the Edit menu, choose String.
	
	8. Edit the string to remove any references; leave it blank.
	
	9. Exit REGEDT32. When you start Mail it presents you with the initialization
	  screens.
	
	MORE INFORMATION
	================
	
	The Mail initialization procedure stores information in the HKEY_CURRENT_USER on
	Local Machine subkey. When you start Mail, it determines if the Login:REG_SZ:
	and ServerPath:REG_SZ: keys exist. If values exist for these keys, Mail attempt
	to execute the initialization procedure. If initialization fails because the
	WGPOMG32 dynamic-link library (DLL) is not found or is corrupted, Mail gives the
	following error message and asks if you would like to work offline:
	
	  Mail could not connect to your Mail server. The configuration for the Mail
	  server path is missing or invalid.
	
	A procedure in WGPOMG32 displays the Connect Or Create dialog box to allow you to
	either connect to an existing remote post office or to create a new workgroup
	post office. If you choose Cancel, WGPOMG32 closes Mail. If you choose OK,
	WGPOMG32 creates the following subkeys in the HKEY_CURRENT_USER on Local Machine
	subtree of the Registry database and returns to Mail which signs you in to the
	postoffice.
	
	  Software\Microsoft\Mail\Custom Commands
	
	    EXF:REG_SZ:3.0;File;&Export Folder...;11;IMPEXP32.DLL;0;;Exports
	    folder to a backup file;MSMAIL32.HLP;2860
	    IMEX:REG_SZ:3.0;File;;10
	    IMF:REG_SZ:3.0;File;&Import Folder...;12;IMPEXP32.DLL;1;;Imports
	    folder from a backup file;MSMAIL32.HLP;2861
	    WGPOMgr1:REG_SZ:3.0;Mail;;13
	    WGPOMgr2:REG_SZ:3.0;Mail;&Postoffice Manager...;14;WGPOMG32.DLL;
	    0;;Manage Workgroup Postoffice;MSMAIL32.HLP;2870
	
	  Software\Microsoft\Mail\Custom Messages
	
	    IPM.Microsoft Schedule.MtgCncl:REG_SZ:3.0;;;;SchMsg32.DLL;;
	    1100100000000000;;;;
	    IPM.Microsoft Schedule.MtgReq:REG_SZ:3.0;;;;SchMsg32.DLL;;
	    1111100000000000;;;;
	    IPM.Microsoft Schedule.MtgRespA:REG_SZ:3.0;;;;SchMsg32.DLL;;
	    1100100000000000;;;;
	    IPM.Microsoft Schedule.MtgRespN:REG_SZ:3.0;;;;SchMsg32.DLL;;
	    1100100000000000;;;;
	    IPM.Microsoft Schedule.MtgRespP:REG_SZ:3.0;;;;SchMsg32.DLL;;
	    1100100000000000;;;;
	
	  Software\Microsoft\Mail\Microsoft Mail
	
	  DemosEnabled:REG_SZ:0
	  LocalMMF:REG_SZ:1
	
	  a Login:REG_SZ:username
	
	  MAPIHELP:REG_SZ:MSMAIL32.HLP
	  NetBios::REG_SZ:1
	  ServerPassword:REG_SZ:
	
	  b ServerPath:REG_SZ:<drive>:\<path>\WGPO or
	  \\<server>\<share>
	
	  WG:REG_SZ:1
	
	  c Windows:REG_SZ:198 189 796 522 1 1 1 0
	
	NOTES
	-----
	
	  a Login:REG_SZ is the Mailbox name for a particular user.
	
	  b ServerPath:REG_SZ can a <logical drive>:\<path> or a UNC
	  connection to the workgroup postoffice.
	
	  c In Windows:REG_SZ:, the first and second number give the size of the Mail
	  window, the third and fourth numbers give the position of the Mail window,
	  the fifth number is the zoom value (minimized, maximized, or normal), the
	  sixth number is the toolbar value (enabled or disabled), the seventh number
	  is the status bar value (enabled or disabled), and the eighth value is the
	  scrollbar value (enabled when required or disabled).
	
	Additional query words: prodnt postoffice Post Office Manager po
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
