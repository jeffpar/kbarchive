---
layout: page
title: "Q259112: XWEB: Error Message Occurs When You Download Attachments"
permalink: /kb/259/Q259112/
---

## Q259112: XWEB: Error Message Occurs When You Download Attachments

{% raw %}

	Article: Q259112
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kberrmsg exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open attachments while using Outlook Web Access (OWA), you may receive
	the following error message:
	
	  Internet Explorer cannot download... <Attachment ID> from <Web
	  site>. Internet Explorer was not able to open this Internet site. The
	  requested site is either unavailable or cannot be found. please try again
	  later.
	
	CAUSE
	=====
	
	This issue can occur if you are using an RSA Security Dynamics ACE server, and
	you selected the "Deny Client the Ability to Cache SSL Content" option.
	
	RESOLUTION
	==========
	
	To resolve this issue, click to clear the "Deny Client the Ability to Cache SSL
	Content" check box on the RSA Security Dynamics ACE server.
	
	MORE INFORMATION
	================
	
	For more information about the RSA Security ACE server, visit the following RSA
	Security Web site:
	
	  http://www.rsasecurity.com
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
