---
layout: page
title: "Q123373: PC DOS: DrivesNovell Not Support Novell 4.0 Special Characters"
permalink: kb/123/Q123373/
---

## Q123373: PC DOS: DrivesNovell Not Support Novell 4.0 Special Characters

	Article: Q123373
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Novell NetWare version 4.0 and later, you can use special characters in user
	login and server names that will not work with the DrivesNovell option.
	
	MORE INFORMATION
	================
	
	DrivesNovell option requires the following:
	
	  SERVERNAME/VOLUME:\MAILDATA LOGINNAME PASSWORD.
	
	In case of NetWare 4.0 and later, this SERVERNAME and LOGINNAME can contain the
	following special characters:
	
	  / Slash
	  \ Backslash
	  : Colon
	  , Comma
	  * Asterisk
	  ? Question mark
	
	These special characters will not work if used with the DrivesNovell option.
	Instead, a non-NetWare version 4.0 client workstation naming standard must be
	used.
	
	For more information see the "Supervising the Network" manual, pages 34-37.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
