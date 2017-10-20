---
layout: page
title: "Q282799: MPPE Attribute Required When Using Radius Server with RRAS"
permalink: /kb/282/Q282799/
---

## Q282799: MPPE Attribute Required When Using Radius Server with RRAS

{% raw %}

	Article: Q282799
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool tslic_tslic
	Last Modified: 26-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using a Radius server for authentication with Routing and Remote
	Access, the Radius server must return the Microsoft Point-to-Point Encryption
	(MPPE) keys.
	
	MORE INFORMATION
	================
	
	Returning the MPPE attribute is not a requirement as defined in Request for
	Comments (RFC) 2548 section 2.4. However, Windows NT 4 Routing and Remote Access
	will terminate the link when the MPPE attribute is missing in the Radius
	response.
	
	When RRAS terminates the link, receive the following error message in the event
	log:
	
	  Event ID 20073
	  The following error occurred in the point to point protocol module on port
	  [PORTNAME]. The parameter is incorrect.
	
	This only applies when you are using MS-CHAP as authentication protocol. In
	Windows 2000, the RAS server no longer terminates the connection when these keys
	are not available. However, MPPE is negotiated in the PPP Compression Control
	Protocol (CCP). Radius has no way of knowing if MPPE has been negotiated. If it
	has been agreed upon, but the encryption keys are not included in the Radius
	response, encryption does not work.
	
	If either side requires encryption, the connection will fail entirely. Because of
	this, it is recommended for Radius servers that support MS-CHAP always include
	the MPPE attribute.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool tslic_tslic 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNT400OptionPack
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
