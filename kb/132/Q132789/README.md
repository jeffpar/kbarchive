---
layout: page
title: "Q132789: &quot;Network Drive No Longer Exists&quot; Error with NetFlex Card"
permalink: /kb/132/Q132789/
---

## Q132789: &quot;Network Drive No Longer Exists&quot; Error with NetFlex Card

	Article: Q132789
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client computers connecting to a server that is using a NetFlex network card may
	receive the following error message:
	
	  Network Drive no longer exists. Abort, Retry, Fail.
	
	The client computers continue to function properly. Trying to reconnect to the
	server is sometimes successful, although a restart of the server may be
	necessary.
	
	CAUSE
	=====
	
	The error message is caused by heavy file I/O (Input/Output) stress, similar to
	that of benchmark utilities.
	
	RESOLUTION
	==========
	
	The server must be restarted, and the heavy file I/O stress must be offloaded
	from that server to one or more alternate servers.
	
	
	MORE INFORMATION
	================
	
	The NetFlex network card is manufactured by Compaq Computer Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
