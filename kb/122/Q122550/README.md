---
layout: page
title: "Q122550: How to Disable Persistent Connections for Network Client 3.0"
permalink: kb/122/Q122550/
---

## Q122550: How to Disable Persistent Connections for Network Client 3.0

	Article: Q122550
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	To disable persistent connections for Microsoft Network Client version 3.0
	for MS-DOS, do the following before you log on:
	
	1. Using a text editor, change the RECONNECT entry in the [Network] section of
	  SYSTEM.INI to the following:
	
	  " RECONNECT=NO" (without the quotation marks)
	
	2. Rename or delete the CONNECT.DAT file.
	
	NOTE: Both SYSTEM.INI and CONNECT.DAT are located in the Network Client
	directory, which is usually called C:\NET.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : winnt:3.0
	
	=============================================================================
	
