---
layout: page
title: "Q95346: Problem with Proteon 1390 and 1392 Network Interface Cards"
permalink: kb/095/Q95346/
---

## Q95346: Problem with Proteon 1390 and 1392 Network Interface Cards

	Article: Q95346
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows for Workgroups for use with the Proteon 1390 or 1392
	token-ring network interface card (NIC) and restart your system, you may receive
	one of the following error messages:
	
	  Bad PROTOCOL.INI - Drivername not found.
	
	  -or-
	
	  The Protocol Manager has reported an incomplete binding.
	
	CAUSE
	=====
	
	These error messages may be caused by an incorrect setting in the PROTOCOL.INI
	file.
	
	WORKAROUND
	==========
	
	To make sure the Proteon settings are correct, do the following:
	
	1. Open the PROTOCOL.INI file in a text editor such as Notepad. If the
	  DRIVERNAME= setting reads as follows
	
	        DRIVERNAME=NDISXR39$
	
	  -or-
	
	        DRIVERNAME=NDIS39XR$
	
	  change it to read
	
	  DRIVERNAME=NDI39XR$
	
	2. If you made changes to PROTOCOL.INI, save them and restart your computer.
	
	NOTE: If you change your network settings from Control Panel, you must edit
	PROTOCOL.INI again to prevent the error from occurring.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1.
	
	
	Additional query words: 3.10 netcard nic
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
