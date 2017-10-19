---
layout: page
title: "Q95964: PC Win: Version 3.0b Installs as 3.1 with Shared Windows"
permalink: /kb/095/Q95964/
---

## Q95964: PC Win: Version 3.0b Installs as 3.1 with Shared Windows

	Article: Q95964
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail version 3.0b for PC Networks installs as version 3.1 and the
	following version 3.0b features are not available:
	
	- The Spelling Checker is not available.
	
	- There are no demos available.
	
	- The Wastebasket is a folder with an "X" on it.
	
	CAUSE
	=====
	
	The following configuration produces the problem:
	
	A shared version of Windows installed on a network server with the local user's
	Windows directory located on the workstation. The MSMAIL directory can be either
	on the server or local.
	
	RESOLUTION
	==========
	
	One of the following procedures will correct the problem:
	
	- Upgrade to Mail 3.2a, which contains the updated Microsoft Mail SETUP.EXE
	  file.
	
	  For information on obtaining this update, query on the following word in the
	  Microsoft Knowledge Base:
	
	  mailupd
	
	
	- Run Windows Setup and install the local user's Windows directory on the
	  server.
	
	- Copy the MSMAIL.EXE file from a local installation of Windows and Mail into
	  the user's directory on the server.
	
	  Note: If a local installation is not available, the Network Administrator can
	  install one for installation purposes only.
	
	Additional query words: 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300b
	Version           : WINDOWS:3.0b
	
	=============================================================================
	
