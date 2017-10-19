---
layout: page
title: "Q132711: Configuring Windows NT for WWW Clients To Browse FTP Server"
permalink: /kb/132/Q132711/
---

## Q132711: Configuring Windows NT for WWW Clients To Browse FTP Server

	Article: Q132711
	Product(s): Microsoft Windows NT
	Version(s): 3.50,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.50, 3.51 
	- Microsoft Windows NT Server versions 3.50, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Most World Wide Web (WWW) client software programs expect the output of the LIST
	command from an FTP server to appear like the output of the UNIX LS command.
	When the WWW client software attempts to view the contents of the Windows NT FTP
	server, the output of the LIST command appears like the output of the MS-DOS DIR
	command. As a result, the WWW clients are not be able to view some file names
	when browsing the Windows NT FTP server.
	
	RESOLUTION
	==========
	
	To allow WWW clients to view files in the Windows NT FTP server like the output
	of the UNIX LS command, modify the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     \SYSTEM\CurrentControlSet\Services\Ftpsvc\Parameters
	
	3. From the Edit menu, select Add Value.
	
	4. Add the following:
	
	  Value Name: MsdosDirOutput
	  Data Type:  REG_DWORD
	  String:     0
	
	5. Choose OK and quit the Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	Additional query words: prodnt directory
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.50,3.51
	Issue type        : kbprb
	
	=============================================================================
	
