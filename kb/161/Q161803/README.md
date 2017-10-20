---
layout: page
title: "Q161803: XGEN: Installation Guide Shows Incorrect SMTP Address Format"
permalink: /kb/161/Q161803/
---

## Q161803: XGEN: Installation Guide Shows Incorrect SMTP Address Format

{% raw %}

	Article: Q161803
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Installation Guide states on page 38 that the default
	SMTP site address is obtained from the user, organization, and site names. It
	illustrates this with an incorrect SMTP address format, as shown below:
	
	  user@organization.site.com
	
	The site name should precede the organization name in order to work properly. The
	correct format for the default SMTP address of a recipient should appear as
	follows:
	
	  user@site.organization.com
	
	Additional query words: internet domain
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
