---
layout: page
title: "Q196421: XADM: SMTP Proxies are Set to &quot;@site.org.com&quot; by Default"
permalink: /kb/196/Q196421/
---

## Q196421: XADM: SMTP Proxies are Set to &quot;@site.org.com&quot; by Default

	Article: Q196421
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use the Microsoft Move Server Wizard the wizard will, by default,
	generate new SMTP proxies which have a "@site.org.com" format. All the
	recipients of SMTP addresses are then modified to this format. The newly
	generated proxy addresses are set as reply address. This may not be the expected
	result if the server is moved within the same organization.
	
	Changing the site addressing object to what it was before the move (for example,
	"@org.com"), will not set the proxy addresses as Reply address because the proxy
	already exists.
	
	MORE INFORMATION
	================
	
	To work around this problem, the administrator should Export recipients and
	specify the original SMTP proxy "@org.com" as the reply address before
	reimporting.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
