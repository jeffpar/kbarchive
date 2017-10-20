---
layout: page
title: "Q201339: Unable to Multilink Using Third-Party Authentication Schemes"
permalink: /kb/201/Q201339/
---

## Q201339: Unable to Multilink Using Third-Party Authentication Schemes

{% raw %}

	Article: Q201339
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is not possible to bundle multiple channels using Routing and Remote Access
	Service (RRAS), Remote Authentication Dial-In User Service (RADIUS), and
	third-party "one time password" authentication schemes, such as Security
	Dynamic's SecurID.
	
	Even if credentials are accepted for the first channel, the second channel fails
	authentication and does not come up. Upon failure, the first channel remains
	connected.
	
	CAUSE
	=====
	
	Windows NT is designed to always sends the same set of credentials for every
	channel on a multilink connection. SecurID is designed never to accept the same
	set of credentials twice. By design, they are incompatible.
	
	RESOLUTION
	==========
	
	To work around this problem, you can do either of the following:
	
	- If "one time password" is mandatory due to security issues, disable multilink
	  at the client.
	
	- If multilinking is desired, use Windows NT/Radius authentication.
	
	MORE INFORMATION
	================
	
	The RRAS Radius client is designed to always send the same set of credentials
	for links bonded in a multilink connection, and it will always send one Access
	Request for each link to the RADIUS server independent of the media or
	authentication used. This assumes a static value for ID and password, which is
	typical of Windows NT authentication.
	
	SecurID generates a unique password every 60 seconds, and it will not accept the
	same set of credentials more than once.
	
	Therefore, if Windows NT is designed to always sends the same set of credentials,
	and SecurID is designed never to accept the same set of credentials twice, these
	products will not work together by design.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: multi-link multi link
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
