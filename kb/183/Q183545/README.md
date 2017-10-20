---
layout: page
title: "Q183545: XWEB: NTLM Authentication Fails Between Two Computers with OWA"
permalink: /kb/183/Q183545/
---

## Q183545: XWEB: NTLM Authentication Fails Between Two Computers with OWA

{% raw %}

	Article: Q183545
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Microsoft Internet Explorer client connects to a Microsoft Internet
	Information Server (IIS) using NTLM authentication, the browser caches the
	security token. All subsequent connections to the server by this client that
	request an NTLM response are responded to with the information that is currently
	cached.
	
	Connections using Basic authentication are similar; however, only the username
	and password are cached. There is no checking of Windows NT credentials. When
	you attempt to connect to a remote mailbox during this session, authentication
	must be passed again; however, authentication is passed from the cache and is
	valid because it is only a username and password, thus allowing access.
	
	With NTLM, the client connects to the IIS computer and gains access to the
	Logon.asp page by generating a hashed password and obtaining a security token.
	This security token is only valid for that connection to that IIS computer. When
	you attempt to open a remote mailbox and you are prompted for logon credentials,
	the browser sends the security token that was cached, which being only valid for
	the connection to the IIS computer itself, results in denied access.
	
	This is called a double-hop impersonation. NTLM does not support double hop,
	because security tokens and hashes are only valid for the computer on which they
	are generated.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
