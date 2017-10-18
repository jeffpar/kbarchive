---
layout: page
title: "Q189840: XWEB: OWA Installation Fails with 0xC002041D Error"
permalink: kb/189/Q189840/
---

## Q189840: XWEB: OWA Installation Fails with 0xC002041D Error

	Article: Q189840
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Exchange, versions 5.0, 5.5 
	- Microsoft Exchange, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Outlook Web Access (OWA) component for Microsoft
	Exchange Server, the installation may fail with the following error:
	
	  The service did not respond to the start or control request in a timely
	  fashion.
	  Microsoft Windows NT
	  ID no: 0xc002041d
	
	The following event may be found in event viewer as well:
	
	  Event ID 5
	  Active Server Pages, 6:07pm 10/15/97
	  Error: File /Exchange/USA/logon.asp  Unexpected error
	
	CAUSE
	=====
	
	This problem can occur if the Worldwide Web Publishing service fails to start
	after the installation process for OWA.
	
	WORKAROUND
	==========
	
	Reinstallation of the OWA component from the Microsoft Exchange Server compact
	disc should eliminate the error. In some cases, corruption or problems may
	require reinstallation of Internet Information Server prior to installation of
	OWA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Issue type        : kbbug
	
	=============================================================================
	
