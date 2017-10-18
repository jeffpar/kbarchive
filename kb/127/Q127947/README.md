---
layout: page
title: "Q127947: Application Error with Logging Enabled in FTP Server Service"
permalink: kb/127/Q127947/
---

## Q127947: Application Error with Logging Enabled in FTP Server Service

	Article: Q127947
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have daily logging of file accesses for File Transfer Protocol (FTP)
	Server service enabled and you access the server using an FTP command, the
	following Dr. Watson for Windows NT error message appears:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  EXE\TCPSVCS.DBG
	  Exception: access violation (0xc0000005)
	
	CAUSE
	=====
	
	This problem occurs if the directory name for the logging of the FTP Server
	service is incorrect or does not exist. The error message above appears with the
	first file access using an FTP command after the second midnight since the FTP
	Server service restarted. In between that time period the FTP Server service
	operates normally, but no log files are created.
	
	WORKAROUND
	==========
	
	To work around this problem, verify the FTP Server service configuration in the
	Registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\FTPSVC\Parameters
	
	3. Ensure that the LogFileDirectory entry is correct and exists. To change the
	  LogFileDirectory:
	
	  a. Select the LogFileDirectory entry.
	
	  b. From the Edit menu, select String.
	
	  c. From the String Editor, change the directory name.
	
	  d. Change the LogFileDirectory name.
	
	  e. Choose OK.
	
	4. Quit Registry Editor.
	
	5. Restart the FTP Server service in Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information on other FTP server logging options added to Windows NT
	version 3.5, query the following words in the Microsoft Knowledge Base:
	
	  ftpsvr and ftptcp
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
