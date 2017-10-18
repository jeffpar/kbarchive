---
layout: page
title: "Q121050: How to Automate Logon Procedures for Windows NT Mail"
permalink: kb/121/Q121050/
---

## Q121050: How to Automate Logon Procedures for Windows NT Mail

	Article: Q121050
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two ways to automate the logon procedure for the MSMail32 application
	included in Windows NT Workstation and Server:
	
	  - Modifying the Registry
	  - Modifying Program Item Properties
	
	MORE INFORMATION
	================
	
	Modifying the Registry
	----------------------
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (REGEDT32.EXE)
	
	2. Find the following key:
	
	  \HKEY_CURRENT_USER\Software\Microsoft \Mail\Microsoft Mail
	
	3. From the Edit menu, select Add Value.
	
	4. For the Value Name field, type "Password" (without quotation marks). Select
	  REG_SZ for Data Type and choose OK. For the String value, type the user's
	  password and choose OK.
	
	5. Close the Registry Editor, and restart Mail32.
	
	Modifying Program Item Properties
	---------------------------------
	
	1. Highlight the MSMail32 program item.
	
	2. Press ALT+ENTER to display the MSMail32 program item properties.
	
	3. On the command line, change it to the following:
	
	  MSMAIL32.EXE <username> <password>
	
	4. Restart MSMail32.
	
	Additional query words: 3.10 prodnt workgroup
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
