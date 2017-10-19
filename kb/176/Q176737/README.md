---
layout: page
title: "Q176737: XADM: Key Management Server Fails to Start and Logs Event 5060"
permalink: /kb/176/Q176737/
---

## Q176737: XADM: Key Management Server Fails to Start and Logs Event 5060

	Article: Q176737
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Key Management Server service on a Microsoft
	Exchange server, the service may fail to start and log the following event in
	the Windows NT Event Viewer Application log:
	
	  Event ID: 5060
	  Source: MSExchangeIS
	  Type: Error
	  Description: KM Server was not able to verify signature on crypto service
	  provider.
	
	CAUSE
	=====
	
	There is an older version of EXCACSP.DLL in the <drive>:\Exchsrvr\bin
	directory.
	
	WORKAROUND
	==========
	
	Rename the existing EXCACSP.DLL file and copy a new file from the Microsoft
	Exchange Server compact disk. This file is located in the
	server\setup\<platform>\bin directory. You will need to remove the
	read-only attribute before attempting to start the Key Manager Server service.
	
	MORE INFORMATION
	================
	
	The correct size of EXCACSP.DLL is 248KB and the version is 5.5.1928.0.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbprb
	
	=============================================================================
	
