---
layout: page
title: "Q123417: Err Msg: 530 User &lt;User Name&gt; Cannot Log In"
permalink: kb/123/Q123417/
---

## Q123417: Err Msg: 530 User &lt;User Name&gt; Cannot Log In

	Article: Q123417
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	If you attempt to log on anonymously, the following error message appears:
	
	  530 User <user name> cannot log in.
	
	You cannot configure FTP Server for anonymous logins if you use an account
	name from a trusted domain. It must be an account in either the local or
	domain security database of the host computer.
	
	If the ftp server is a member server of a domain, the user ID must be an
	account local to the machine.  Domain accounts cannot be used.  It is
	necessary to create a local account for the user on the domain member
	server.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
