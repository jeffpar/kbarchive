---
layout: page
title: "Q181793: XADM: MAPI_E_Failoneprovider Error from LOADSIM"
permalink: kb/181/Q181793/
---

## Q181793: XADM: MAPI_E_Failoneprovider Error from LOADSIM

	Article: Q181793
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use LOADSIM and run the userinit test, the following error may occur:
	
	  IMAPISession::OpenMsgStore:
	  Error: MAPI_E_FAILONEPROVIDER(The attempt to log on to the Microsoft
	  Exchange Server computer has failed.)
	
	CAUSE
	=====
	
	This error occurs when the userinit test is run before generating a user list
	and importing it into the directory.
	
	WORKAROUND
	==========
	
	The proper procedure for running the userinit test in LoadSim is as follows:
	
	1. Start LoadSim.
	
	2. Generate a user list file by opening the Configuration menu and clicking
	  Generate Directory Import Files.
	
	3. Click Import Users on the Configuration menu.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
