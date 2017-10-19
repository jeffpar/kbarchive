---
layout: page
title: "Q140424: ErrMsg: &quot;Invalid port command&quot; AS400 Client FTP to NT 3.51 SP2"
permalink: /kb/140/Q140424/
---

## Q140424: ErrMsg: &quot;Invalid port command&quot; AS400 Client FTP to NT 3.51 SP2

	Article: Q140424
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IBM AS400 FTP client fails with the error "Invalid port command" when you try to
	ftp to Windows NT version 3.51 Service Pack 2 server.
	
	CAUSE
	=====
	
	Windows NT 3.51 Server Service Pack 2 has added a new feature that rejects a
	client request for a TCP port number that is less than 1024. When this feature
	is implemented, an FTP session from an AS/400 client to the Windows NT 3.51
	server may fail due to this added security feature."
	
	
	Ports numbers up to 1024 are reserved and used by well known applications. Port
	numbers above 1024 can be used arbitrarily by the user. When an ftp session is
	initiated from AS400 client, it might request for a TCP port number less than
	1024 when a command is issued. This request is rejected by the Windows NT server
	and the client gets the above error. If more commands are issued from the
	client, it increments the TCP port number requested for every command issued and
	eventually when it reaches 1024, the request is accepted by the server.
	
	
	STATUS
	======
	
	This is by design.
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
