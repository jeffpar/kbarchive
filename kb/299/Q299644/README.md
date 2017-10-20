---
layout: page
title: "Q299644: Address Bar Has Long Query String Upon Return from Login Server"
permalink: /kb/299/Q299644/
---

## Q299644: Address Bar Has Long Query String Upon Return from Login Server

{% raw %}

	Article: Q299644
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user is returned to your site from the Passport Login server, a long
	query string may be appended to the address bar of the browser.
	
	CAUSE
	=====
	
	The extra query string parameters may be the encoded Passport Ticket and Profile
	information as sent by the Passport Login server for the user.
	
	RESOLUTION
	==========
	
	As soon as Ticket (the t parameter on the query string) and Profile (the p
	parameter on the query string) are received, the Passport Manager object writes
	cookies using these values and you can clear the query string by redirecting the
	page to itself minus most of the query string.
	
	NOTE: You may have your own custom parameters in the query string; if so, you
	must isolate and re-add these parameters.
	
	For more information on how to detect whether the query string contains
	Passport-relevant information, and for sample script for cleaning up the query
	string, see the following Microsoft Passport Software Development Kit (SDK) Web
	site:
	
	  FromNetworkServer
	  http://www.passport.com/sdkdocuments/sdk14/reference/scriptreference/ifaces/ipassportmanager/fromnetworkserver.htm
	
	It is strongly recommended that Passport participant sites clean up the query
	string in this way to improve both user experience and security.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
