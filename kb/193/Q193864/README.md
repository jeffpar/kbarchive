---
layout: page
title: "Q193864: XFOR: Problems with FX!32 and Exchange's cc:Mail Connector"
permalink: /kb/193/Q193864/
---

## Q193864: XFOR: Problems with FX!32 and Exchange's cc:Mail Connector

{% raw %}

	Article: Q193864
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Exchange Server to send an e-mail message to a Lotus
	cc:Mail custom recipient, you may get a non-delivery report (NDR) message in
	your inbox stating:
	
	  -----Original Message-----
	  From:   postmaster
	  Sent:   Jueves 20 de Agosto de 1998 05:44 PM
	  To:   e-mail, Recipient
	  Subject:   RE: test
	
	  ***  Disk error in creating message item  ***
	
	CAUSE
	=====
	
	This problem is caused by a known bug in FX!32 that causes the cc:Mail connector
	in Exchange Server to fail while running on an ALPHA server.
	
	The cc:Mail connector uses Lotus' Import.exe and Export.exe, both 16-bit DOS
	applications. FX!32 is trapping calls made by these two programs and incorrectly
	generating the NDR back to the end user.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Move the cc:Mail connector to an Intel server.
	
	  -OR-
	
	- Disable or uninstall the FX!32 component.
	
	Additional query words: FX!32, ccmail, NDR, disk error
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
