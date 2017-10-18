---
layout: page
title: "Q121559: WFWSYS.CFG Remote Update from Windows NT 3.5 Fails"
permalink: kb/121/Q121559/
---

## Q121559: WFWSYS.CFG Remote Update from Windows NT 3.5 Fails

	Article: Q121559
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups 3.11 clients use a null session to remotely update the
	local WFWSYS.CFG security file. Windows NT 3.1 supports null sessions by
	default. However, Windows NT 3.5 does not provide this support unless
	specifically configured to do so. This change was made to provide a higher
	default level of security.
	
	Thus, when you try to remotely update WFWSYS.CFG from Windows NT 3.5, it fails.
	If you use the Windows for Workgroups 3.11 ADMINCFG.EXE utility to update
	Windows for Workgroups 3.11 clients remotely, it will fail if the Update
	Security Configuration from Server check box is selected and the Network Path is
	directed to a share on a Windows NT 3.5 computer.
	
	MORE INFORMATION
	================
	
	To enable remote updating of WFWSYS.CFG from Windows NT 3.5, null session
	support must be configured on a per-share basis as follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor.
	
	2. In the HKEY_LOCAL_MACHINE subtree, locate the following subkey:
	
	  \System\CurrentControlSet\Services\LanmanServer\Parameters
	
	3. Choose the NullSessionShares value.
	
	4. On a new line, type in the share name you want NULL sessions to succeed to
	  (for example, PUBLIC).
	
	5. Stop and restart the server.
	
	Additional query words: prodnt wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : :3.11,3.5
	Issue type        : kbinfo
	
	=============================================================================
	
