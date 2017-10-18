---
layout: page
title: "Q89974: Setup Detects Incorrect Space Available on WFWG Server"
permalink: kb/089/Q89974/
---

## Q89974: Setup Detects Incorrect Space Available on WFWG Server

	Article: Q89974
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run Windows Sound System Setup from a client machine to install Windows
	Sound System on a Windows for Workgroups server, Setup detects 0 bytes available
	on the server.
	
	MORE INFORMATION
	================
	
	Windows Sound System Setup does not support remote installation on a Windows for
	Workgroups server. However, Setup does run and install the software to the
	server as long there is enough space available.
	
	Microsoft does not recommended installing Windows Sound System in this manner. If
	you do, make sure you have at least 10 MB of free space on the server before
	running Setup.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWinSoundSysSearch kbWFW310 kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	
