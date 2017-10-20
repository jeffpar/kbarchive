---
layout: page
title: "Q153270: XFOR: Internet Mail Connector Proxy Generator Options"
permalink: /kb/153/Q153270/
---

## Q153270: XFOR: Internet Mail Connector Proxy Generator Options

{% raw %}

	Article: Q153270
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Exchange Administrator program, the default SMTP site addressing is
	userformat@domainname, where the default user format is the mailbox. It is
	possible to specify other userformat strings.
	
	To change the SMTP proxy generator, open the Microsoft Exchange Administrator
	program and choose Configuration-Site Addressing-Site Addressing tab. Highlight
	the SMTP proxy and click the EDIT button.
	
	MORE INFORMATION
	================
	
	IMC Proxy generator options
	---------------------------
	
	The format is:
	
	userformat@domain
	
	the @domain is an '@' sign followed by the desired alphanumeric domain text.
	
	The userformat string is optional and can contain text as well as replacement
	strings. The default userformat string, if one is not specified, is "%m". The
	following replacement strings are available:
	
	  %% = a single percent sign
	  %s = surname
	  %g = given name
	  %i = middle initial
	  %d = display name
	  %m = mailbox
	  %rxy (Replace all subsequent characters x with character y in username.
	       If x == y,then the char will be deleted)
	
	Note: Invalid characters (per RFC 821/822 email address spec) are removed from
	user name (unless explicitly replaced using the %r).
	
	Examples for mailbox = "markc"
	
	  display name = "Mark M. Clark"
	  surname = "Clark"
	  given name = "Mark"
	
	Format String          Proxy Generated for sample user
	-------------          -------------------------------
	%d@microsoft.com       MarkMClark@microsoft.com
	%r._%d@microsoft.com   MarkM_Clark@microsoft.com
	%r..%d@microsoft.com   MarkM.Clark@microsoft.com
	%g.%s@microsoft.com    Mark.Clark@microsoft.com
	@microsoft.com         markc@microsoft.com
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q140933 XFOR: SMTP Proxy Address Generated Incorrectly
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
