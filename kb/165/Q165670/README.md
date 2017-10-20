---
layout: page
title: "Q165670: NetScape Navigator Hangs Connecting to Secure IIS Server"
permalink: /kb/165/Q165670/
---

## Q165670: NetScape Navigator Hangs Connecting to Secure IIS Server

{% raw %}

	Article: Q165670
	Product(s): Internet Information Server
	Version(s): Winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use IIS 2.0 or 3.0, and you secure the site with a 128-bit key from
	Verisign (or some other legitimate provider), Netscape Navigator version 3.0
	appears to hang.
	
	CAUSE
	=====
	
	If the computer hosting the IIS server was originally set with 128-bit security,
	and then a Service Pack was applied that overwrote the 128-bit Schannel.dll file
	then Navigator will not connect if it is set to use Secure Sockets Layer (SSL) 3
	security.
	
	WORKAROUND
	==========
	
	By default, Navigator installs with SSL 3 security enabled. To connect to the
	site, either disable SSL 3 security or replace the newer 40-bit Schannel.dll
	file on the server with the proper 128-bit file.
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : Winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
