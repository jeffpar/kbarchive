---
layout: page
title: "Q102907: How to Troubleshoot Local Logon Scripts with Windows NT"
permalink: /kb/102/Q102907/
---

## Q102907: How to Troubleshoot Local Logon Scripts with Windows NT

{% raw %}

	Article: Q102907
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a checklist of potential problems with local logon
	scripts. A logon script is similar to a batch file because it performs a series
	of commands when a user logs in to his or her account.
	
	MORE INFORMATION
	================
	
	If problems arise with a logon scripts, use the following list to troubleshoot
	the problem:
	
	- Make sure the logon script is in the following directory:
	
	  \winnt\system32\repl\import\scripts
	
	  The only valid path option is a subdirectory of the default logon script
	  directory. A path to any other directory or using the environment variable
	  %HOMEPATH% will cause the logon script to fail.
	
	- If the file system on the partition containing the logon script directory is
	  NTFS, make sure the user has read rights to the logon script directory. If no
	  rights have been explicitly assigned, the logon script may fail without
	  providing an error message.
	
	- Make sure the logon script has a filename extension of either "CMD" or "BAT."
	  A script with any other extension will fail. The "EXE" extension is also
	  supported, but only for genuine executable programs.
	
	  Attempting to use the .EXE extension for a script file will result in the
	  following error message:
	
	  NTVDM CPU has encountered an illegal instruction.
	
	  To remove the error, terminate the application or the virtual MS-DOS machine
	  (VDM).
	
	- If the logon script is to be set up for a Windows for Workgroups computer,
	  the Windows for Workgroups computer must have the Windows NT domain specified
	  in the LAN Manager domain portion of Control Panel networks, rather than just
	  assigned to that workgroup.
	
	- It will take a period of time for a recently created logon script to be
	  replicated from the Primary Domain Controller to all the member servers.
	  Thus, if a workstation is validated by a server other than the Primary Domain
	  Controller, recently created logon script changes may not be in effect.
	
	- Use Server Manager to view a list of Backup Domain Controller in the domain.
	  On EVERY Backup Domain Controller in the domain, verify that replication is
	  enabled and that the netlogon share contains current logon scripts.
	
	Additional query words: wfw wfwg prodnt tshoot
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
