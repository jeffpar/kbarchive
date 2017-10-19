---
layout: page
title: "Q102737: Differences Between FTP and TFTP"
permalink: /kb/102/Q102737/
---

## Q102737: Differences Between FTP and TFTP

	Article: Q102737
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.10 3.11 3.11a 3.11b 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	Windows NT supports both file transfer protocol (FTP) and trivial file
	transfer protocol (TFTP) under its implementation of TCP/IP. Both of these
	protocols can be used for transferring files across the Internet. The
	differences between the two protocols are explained below:
	
	- FTP is a complete, session-oriented, general purpose file transfer protocol.
	  TFTP is used as a bare-bones special purpose file transfer protocol.
	
	- FTP can be used interactively. TFTP allows only unidirectional transfer of
	  files.
	
	- FTP depends on TCP, is connection oriented, and provides reliable control.
	  TFTP depends on UDP, requires less overhead, and provides virtually no
	  control.
	
	- FTP provides user authentication. TFTP does not.
	
	- FTP uses well-known TCP port numbers: 20 for data and 21 for connection
	  dialog. TFTP uses UDP port number 69 for its file transfer activity.
	
	- The Windows NT FTP server service does not support TFTP because TFTP does not
	  support authentication.
	
	- Windows 95 and TCP/IP-32 for Windows for Workgroups do not include a TFTP
	  client program.
	
	Additional query words: prodnt 3.10 3.11 3.11a 3.11b unix
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWin95search kbWinNT310Search kbWinNTW310Search kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : 3.10 3.11 3.11a 3.11b 3.50 3.51
	
	=============================================================================
	
