---
layout: page
title: "Q130822: Must Use Windows 95 Client for NetWare with DBCS-Named Server"
permalink: /kb/130/Q130822/
---

## Q130822: Must Use Windows 95 Client for NetWare with DBCS-Named Server

	Article: Q130822
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The File and Print Sharing for NetWare Networks network service (NWSERVER.VXD)
	that is included with Windows 95 supports double-byte character set (DBCS)
	naming of NCP servers. However, while the Microsoft Client for NetWare Networks
	(NWREDIR.VXD) also supports DBCS server names, the Novell NetWare VLM client
	does not.
	
	Therefore, to connect to a Windows 95 computer that is running the File and Print
	Sharing for NetWare Networks network service and has a DBCS server name, you
	must be using the Microsoft Client for NetWare Networks.
	
	MORE INFORMATION
	================
	
	Double-byte character sets include character sets such as Japanese and Kanji
	that use 16 bits to store each character. Single-byte character sets (such as
	the English character set) use only 8 bits to store each character.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
