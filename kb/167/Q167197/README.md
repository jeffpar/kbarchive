---
layout: page
title: "Q167197: XFOR: Using Imcext.dll May Incorrectly Format Message Headers"
permalink: kb/167/Q167197/
---

## Q167197: XFOR: Using Imcext.dll May Incorrectly Format Message Headers

	Article: Q167197
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the IMC Sample Extension DLL (Imcext.dll) included in the Microsoft
	Exchange Server 4.0 Technical Resource Kit to reroute messages by way of the
	Internet Mail Connector (IMC), messages to some domains may fail, generating
	errors in the SMTP protocol log. Depending on the mailer, the result error codes
	may be:
	
	  invalid address in SMTP envelope, '<' missing
	
	  -or-
	
	  501 strangeness between : and <
	
	CAUSE
	=====
	
	RFC 821 states that all envelope information should be enclosed in angle
	brackets. When you use the Imcext.dll in conjunction with the IMC, these
	brackets are stripped from the RCPT TO field. This is not a problem with the
	majority of SMTP mailers, but some later implementations do not allow this.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the IMC Sample Extension DLL
	included in the Microsoft Exchange Server 4.0 Technical Resource Kit. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	
	=============================================================================
	
