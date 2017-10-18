---
layout: page
title: "Q133409: Checking Recovery Options for a Remote Windows NT Computer"
permalink: kb/133/Q133409/
---

## Q133409: Checking Recovery Options for a Remote Windows NT Computer

	Article: Q133409
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	To check the recovery options for a remote computer running Windows NT, run
	Registry Editor (REGEDT32.EXE), connect to the remote computer, and look
	for the recovery options:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	1. From the Registry menu, choose Select Computer and type the remote computer
	  name.
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  \SYSTEM\CurrentControlSet\Control\CrashControl
	
	3. Verify the following entries are present:
	
	  Value Name: AutoReboot
	  Data Type: REG_DWORD
	  Default: 1
	  Description: Specifies whether the system is to automatically reboot upon
	  failure or lock-up.
	
	  Value Name: CrashDumpEnabled
	  Data Type: REG_DWORD
	  Default: 1
	  Description: Specifies whether debugging information is to be written to a log
	  file.
	
	  Value Name: DumpFile
	  Data Type: REG_EXPAND_SZ
	  Default: %SystemRoot%\MEMORY.LOG
	  Description: Specifies the file to which debugging information is to be
	  written.
	
	  Value Name: LogEvent
	  Data Type: REG_DWORD
	  Default: 1
	  Description: Tells the system to write events to a system log.
	
	  Value Name: Overwrite
	  Data Type: REG_DWORD
	  Default: 1
	  Description: Specifies whether an existing log file is to be overwritten by
	  the new one.
	
	  Value Name: SendAlert
	  Data Type: REG_DWORD
	  Default: 1
	  Description: Controls whether an administrative alert is sent.
	
	  NOTE: The String value of 1 indicates that the entry value is enabled.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
