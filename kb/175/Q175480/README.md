---
layout: page
title: "Q175480: XADM: ERR: Unable to Generate an E-mail Address for Type ccMail"
permalink: /kb/175/Q175480/
---

## Q175480: XADM: ERR: Unable to Generate an E-mail Address for Type ccMail

{% raw %}

	Article: Q175480
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to create a new mailbox or custom recipient in the Microsoft
	Exchange Administrator program, you may get the following error messages:
	
	  E-mail addresses for address type "CCMAIL" were not generated because an
	  error occurred. To view details of the error see the application event
	  log in the Windows NT Event Viewer on the Microsoft Exchange Server
	  computer.
	
	  An error occurred while processing an e-mail address. To view details of
	  the error, see the application event log in the Windows NT Event Viewer
	  on the Microsoft Exchange Server computer.
	
	  Microsoft Exchange Administrator
	  ID no: c1030637
	
	Also, the application log, viewed in the Windows NT Event Viewer, contains the
	following entry:
	
	  Event ID: 2034
	  Source: MSExchangeSA
	  Type: Error
	  Category: General
	  Description:
	  Unable to generate an e-mail address. The 'CCMAIL - General Error (code
	  1)'
	  Address type was returned by address generation DLL
	  'D:\exchsrvr\address\CCMAIL\i386\ccmproxy.dll'.
	
	CAUSE
	=====
	
	The above problem occurred on a computer running Exchange Server 4.0. This
	server is part of an Exchange Server site that also contains computers running
	Exchange Server 5.0 in it. That is why the Lotus cc:Mail address was being
	generated. Even though the above messages indicate problems generating the
	cc:Mail address, the same errors could occur with any other proxy address type
	(MS, X400, SMTP, and so on).
	
	The above error messages are generated when the Gateway-Proxy attribute of the
	Site Addressing object in the Configuration container has been modified, and a
	proxy address type has been removed from the list of proxy address types.
	Another way of modifying the Site addressing attribute is to perform it using
	the Exchange Administrator program running in raw mode (/r).
	
	The above errors were generated because even though the proxy address type has
	been removed from the Site Addressing object, the actual proxy address generator
	has not been removed from the E-mail Address Generators object in the
	Configuration Addressing container.
	
	RESOLUTION
	==========
	
	Add the proxy address back to the Gateway-Proxy attribute of the Site Addressing
	object.
	
	If you do want to prevent the proxy address from being generated, both the proxy
	address type and the proxy address generator must be removed.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
