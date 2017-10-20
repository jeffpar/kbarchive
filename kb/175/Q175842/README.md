---
layout: page
title: "Q175842: XFOR: EXPN Command Not Supported By Internet Mail Service"
permalink: /kb/175/Q175842/
---

## Q175842: XFOR: EXPN Command Not Supported By Internet Mail Service

{% raw %}

	Article: Q175842
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RFC 821 EXPN (expand) command is used to identify and return members of a
	named mailing list. This option is not supported by the Microsoft Exchange
	Internet Mail Service. If you attempt to use this command against an Exchange
	Internet Mail Service via a Telnet session or SMTP client session, you will
	receive the following error:
	
	  502 command not implemented
	
	This is by product design.
	
	Additional query words: imc connector
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
