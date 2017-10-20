---
layout: page
title: "Q299306: Client Browser Returns to Site w/ f=6 Attached to Query String"
permalink: /kb/299/Q299306/
---

## Q299306: Client Browser Returns to Site w/ f=6 Attached to Query String

{% raw %}

	Article: Q299306
	Product(s): Microsoft Developer Network
	Version(s): 1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, version 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The client browser returns to my site with an "f=6" attached to the query
	string.
	
	CAUSE
	=====
	
	Either the Passport Manager object on your Web server is configured to be in
	stand-alone mode, or the Passport Login server cannot reach its own Secure
	Sockets Layer (SSL) pages and cannot write the ticket-granting cookie. Neither
	the domain authority nor the Passport Manager object will write cookies, and the
	user will not be signed in.
	
	RESOLUTION
	==========
	
	Check to see if the Passport Manager object is configured to be in stand-alone
	mode. If it is, turn stand-alone mode off to see if the Passport server can be
	reached. If the same results occur, there is a problem on the Passport network.
	Use the Passport Administration Utility to turn stand-alone mode off.
	
	MORE INFORMATION
	================
	
	Other "f=" values in the query string also indicate a possible Passport network
	problem. For more information, see the following Microsoft Passport Web site:
	
	  Passport SDK Errors
	  http://www.passport.com/sdkdocuments/sdk14/reference/scriptreference/ifaces/ipassportmanager/error.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassportSearch
	Version           : :1.4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
