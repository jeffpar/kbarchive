---
layout: page
title: "Q165971: XADM: Error Message Applying Service Pack on Alpha Computer"
permalink: /kb/165/Q165971/
---

## Q165971: XADM: Error Message Applying Service Pack on Alpha Computer

	Article: Q165971
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs when you attempt to apply a Microsoft Exchange Server 4.0
	Service Pack to a Digital Alpha server running the Digital Alpha version of
	Windows NT Server. When you run the Update.exe program, the following error
	message may appear:
	
	  Could not open file named c:\Exchsrvr\bin\Address.dll.
	
	When you click OK the following error message appears:
	
	  Could not open the file named c:\Exchsrvr\Xxx.xxx"
	
	where Xxx.xxx is the name of a file to be copied from the Service Pack Setup
	directory to the Exchsrvr directory. This happens with every file that is
	supposed to be copied from the Service Pack Setup directory to the Exchsrvr
	directory.
	
	CAUSE
	=====
	
	This error message can occur if the Digital Equipment FX!32 Intel emulation
	Service is running on the Exchange Server computer that the Exchange Server
	Service Pack is being installed on.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Stop the FX!32 Service before you attempt to apply any Exchange Server
	  Service Packs. After the Exchange Service Pack has been applied the FX!32
	  service can be restarted.
	
	  If stopping the service doesn't keep the error from recurring, remove the
	  FX!32 service from the system and restart the server. Then, install the
	  service packs and reinstall the FX!32 service.
	
	MORE INFORMATION
	================
	
	The Digital Alpha server is manufactured by Digital Equipment Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: SP2 SP1
	
	======================================================================
	Keywords          : kbsetup kbtshoot 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
