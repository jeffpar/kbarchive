---
layout: page
title: "Q140977: Error When Copying Files from OS/2 2.x Client Computer"
permalink: /kb/140/Q140977/
---

## Q140977: Error When Copying Files from OS/2 2.x Client Computer

	Article: Q140977
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to copy files with extended attributes from an OS/2 2.x client
	computer to a Windows NT 3.5x Server, the server returns the following error
	message:
	
	  Access denied.
	
	The problem only occurs when extended attributes are applied on files to
	transfer. The problem does not occur when using the WinOS2 emulation on the
	client workstation or when using an OS/2 1.x LAN Manager client.
	
	CAUSE
	=====
	
	The LAN server OS/2 2.x redirector does not correctly activate the following
	bits in the Server Message Block (SMB) Transact2_open frame header:
	
	  SMB : Flags2 summary = 0 (0x0)
	
	The second bit (bit 1) should be 1 instead of 0 to indicate that extended
	attributes are supported during the transaction. Windows NT Server checks this
	flag, and if extended attributes are used without the flag's being activated,
	the SMB response frame is to return the access denied message.
	
	RESOLUTION
	==========
	
	Customers encountering this unexpected behavior should contact IBM technical
	support for further information.
	
	For information about how to contact IBM, query in the Knowledge Base for one of
	the following articles:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  ARTICLE-ID: ID: Q60781
	  TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  ARTICLE-ID: Q60782
	  TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words: prodnt OS2 OS/2 network
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
