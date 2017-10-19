---
layout: page
title: "Q163727: XADM: IMC Logs Event ID 1008"
permalink: /kb/163/Q163727/
---

## Q163727: XADM: IMC Logs Event ID 1008

	Article: Q163727
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You might see the following stop error in a Windows NT Event Viewer Application
	log:
	
	  Event ID: 1008
	  Source: Perflib
	  Type: Error
	  Catefory: None
	  Description: The Open Procedure for service "MSExchangeIMC" in DLL
	  "C:\exchsrvr\bin\gwperf.dll" failed. Performance data for this service
	  will not be available. Status code returned is DWORD 0.
	
	CAUSE
	=====
	
	The Microsoft Exchange Server, version 4.0 Internet Mail Connector (IMC) or the
	Microsoft Exchange Server, version 5.0 Internet Mail Service (IMS) is not
	installed on the computer that you are attempting to gather performance date on.
	
	MORE INFORMATION
	================
	
	The performance counters for the IMC or IMS are loaded, whether the IMC or IMS
	is installed or not. These errors will occur on a Windows NT Server that does
	not have the IMC installed.
	
	Additional query words: perfmon
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
