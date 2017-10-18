---
layout: page
title: "Q190709: XFOR: Internet Mail Service Does Not Clean Up Temp Files"
permalink: kb/190/Q190709/
---

## Q190709: XFOR: Internet Mail Service Does Not Clean Up Temp Files

	Article: Q190709
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Administrators of Microsoft Exchange server version 5 will notice that when the
	Internet Mail Service is cycled during an open, inbound session with another
	host, the temporary file used for the message in transit will not be removed
	when the service is restarted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0.
	
	MORE INFORMATION
	================
	
	Although these temporary files are "stranded," they do not represent lost mail.
	The sending host will try to deliver the mail later, because the entire
	transaction was not completed. These stranded files can be deleted if necessary,
	without impacting the Internet Mail Service performance.
	
	Below is a sample of what you should see in the stranded temporary file:
	
	  [ASCII 247]   ImCr        [ASCII 160][ASCII 216]MK[ASCII 250][ASCII
	  233][ASCII 188]        test.dns.microsoft.com test.dns.microsoft.com
	  <user@ms.com>   c=US;a= ;p=Microsoft;l=RAYDEN9711051951WKA6D6YM
	  X            9B        h[ASCII 216] h[ASCII 216]
	  <administrator@charlotte.microsoft.com>  DEN> roEwLsReceived: from
	  test.dns.microsoft.com by Rayden.Microsoft.Com with SMTP (Microsoft
	  Exchange Internet Mail Service Version 5.0.1458.49)
	  id WKA6D6YM; Wed, 5 Nov 1997 14:51:27 -0500
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	
	=============================================================================
	
