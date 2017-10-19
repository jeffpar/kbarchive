---
layout: page
title: "Q176979: Event 2000 Errors with STATUS_DELETE_PENDING Status"
permalink: /kb/176/Q176979/
---

## Q176979: Event 2000 Errors with STATUS_DELETE_PENDING Status

	Article: Q176979
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): Win95;WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT System Event log may write Event 2000 errors with a status code
	of C0000056 (STATUS_DELETE_PENDING). A network trace reveals that errors occur
	when a Server Message Block (SMB) C transact2 Findnext file returns an invalid
	handle. This error condition can result when you use the DELTREE command from a
	DOS or Windows 95 client.
	
	CAUSE
	=====
	
	Applications that do not or cannot use the CloseSearch SMB (DOS applications or
	older applications that do not make Win32 calls) do not have a method for
	closing searches after they complete. In order to handle this situation, the
	LanmanServer service uses several search time parameters to clear the search
	handle and reclaim the memory allocated to the search buffers.
	
	For a complete discussion on these and other parameters, please see the following
	Microsoft Knowledge Base article:
	
	  Q165815 How To Troubleshoot Event ID 2009 Errors
	
	RESOLUTION
	==========
	
	The only resolution is to use a client that uses the Win32 API and properly
	handles the CloseSearch SMB. For example, the Windows NT Workstation "del
	directory_name /s" command does not have this problem.
	
	For DOS or Windows 95 clients using the DELTREE command, an Event 2000 may be
	written to the System Event log. These errors may be ignored as the server
	recovers from the error properly.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbZNotKeyword kbZNotKeyword3 kbNetworkClientSearch kbNetworkClient300DOS
	Version           : Win95;WinNT:3.5,3.51,4.0
	Hardware          : x86
	
	=============================================================================
	
