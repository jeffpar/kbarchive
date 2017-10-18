---
layout: page
title: "Q134600: RPL Setup Err Msg: Missing Batch File"
permalink: kb/134/Q134600/
---

## Q134600: RPL Setup Err Msg: Missing Batch File

	Article: Q134600
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a server-based setup of Windows 95 created using an RPL image on
	a Novell NetWare diskless workstation, you may receive the following error
	message:
	
	  MISSING BATCH FILE
	
	After you receive this message, the workstation seems to work correctly.
	
	CAUSE
	=====
	
	Novell's NETX and VLM drivers search for an Autoexec.bat file in the Home\Suboot
	directory on the server. This file is deleted by an RPL Setup, and must be
	manually copied by the network administrator.
	
	RESOLUTION
	==========
	
	You can safely ignore this error message. To prevent the error message from
	occurring, use either of the following methods:
	
	- Have the network administrator create a new Autoexec.bat file in each user's
	  Home directory.
	
	- Prevent Setup from deleting the Suboot directory and the Autoexec.bat file by
	  adding the following line to the [Network] section of the Msbatch.inf file in
	  the shared installation directory:
	
	     savesuboot=1
	
	  Then, MAP ROOT the A drive to the Home directory on the server, and copy the
	  Autoexec.bat file from the Suboot directory to the Home directory.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
