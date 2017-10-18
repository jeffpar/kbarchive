---
layout: page
title: "Q170034: XFOR: IMC Causes Stop Error in Windows NT"
permalink: kb/170/Q170034/
---

## Q170034: XFOR: IMC Causes Stop Error in Windows NT

	Article: Q170034
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A multiprocessor computer running Windows NT Server with Microsoft Exchange 4.0
	Internet Mail Connector (IMC) service may give a bluescreen with the following
	error:
	
	  Stop 0x0000000A (0xbad0b0e4; 0x00000002; 0x00000001; 0x80012a9c)
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The parameters in parenthesis will be the same.
	
	CAUSE
	=====
	
	Msexcimc.exe attempts to acquire a spin lock on a handle that has already been
	de-referenced. The first parameter in parenthesis is a flag from Object Manager
	indicating the object was de- referenced.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	Although a fix is not yet available, you can work around this problem by
	upgrading to Microsoft Exchange Server version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
