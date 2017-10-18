---
layout: page
title: "Q124599: Trumpet PPP Client Can Hang RAS"
permalink: kb/124/Q124599/
---

## Q124599: Trumpet PPP Client Can Hang RAS

	Article: Q124599
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Trumpet WinSock Point-to-Point Protocol (PPP) client that connects to Windows
	NT Server version 3.5 Remote Access Service (RAS) can cause RAS to stop
	responding (hang) if the client doesn't log off gracefully using the Trumpet
	logoff script.
	
	CAUSE
	=====
	
	The Trumpet WinSock PPP client sends a password authentication protocol (PAP)
	packet to establish a new connection on an established connection. Windows NT
	Server version 3.5 RAS does not handle this condition properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt FTP exception
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
