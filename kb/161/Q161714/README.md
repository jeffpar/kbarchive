---
layout: page
title: "Q161714: IPX Doesn't Function Correctly over Token Ring Source Routing"
permalink: kb/161/Q161714/
---

## Q161714: IPX Doesn't Function Correctly over Token Ring Source Routing

	Article: Q161714
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to a File and Print Services for NetWare (FPNW) server
	running on Windows NT 4.0 in a Token Ring environment where the client is
	separated from the server by multiple source routing bridges, the following
	error is returned:
	
	  Shell-332-76: Network Error on Server "servername":
	  Error Receiving from Network;
	  Abort, Retry, ?
	
	The above error is what you would get on a Novell-only client. A VLM client gives
	a similar error.
	
	CAUSE
	=====
	
	Not enough buffer space is allocated to accommodate the Routing Information
	Field on the FPNW server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
