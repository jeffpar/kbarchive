---
layout: page
title: "Q176967: WinNT Error Message: TCP/IP CP Reported Error 1214"
permalink: /kb/176/Q176967/
---

## Q176967: WinNT Error Message: TCP/IP CP Reported Error 1214

	Article: Q176967
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Windows NT Remote Access Service (RAS) Server
	from a Windows 95 Dial-Up Networking (DUN) Client or from a Windows NT version
	4.0 RAS Client, you may receive the following error message:
	
	  TCP/IP CP reported error 1214: The format of the specified network name is
	  invalid.
	
	NOTE: Other clients may or may not exhibit the same problems and may connect
	without error.
	
	CAUSE
	=====
	
	The preceding error may be caused by one or more of the following:
	
	- The Autodial feature of DUN may have conflicting entries for the resource you
	  are attempting to connect to.
	
	-or-
	
	- The DUN Client with which you are attempting to connect is using a statically
	  defined IP address that is either illegal, or already in use on the Local
	  Area Network (LAN).
	
	-or-
	
	- The RAS Server has corrupt IP Address cache information.
	
	-or-
	
	- The DUN or RAS components on the client may be corrupt.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following options:
	
	- The Autodial feature of DUN may need to be disabled.
	
	  For more information, see the following article in the Microsoft Knowledge
	  base:
	
	  Q152220 How to View and Remove Information from AutoDial
	
	-or-
	
	- Reconfigure the phonebook entry on the RAS Client to use a server- assigned
	  IP Address instead of a statically defined address.
	
	-or-
	
	- Force the RAS Server to reset its IP address cache, using the following
	  article in the Microsoft Knowledge Base:
	
	  Q124358 RAS Server Assigns Cached IP Addresses to RAS Clients
	
	-or-
	
	- Remove and reinstall DUN or RAS on the client from which you are dialing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5, 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	
	=============================================================================
	
