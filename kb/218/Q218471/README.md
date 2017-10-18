---
layout: page
title: "Q218471: ISM/MMC Does Not Work Through a Firewall"
permalink: kb/218/Q218471/
---

## Q218471: ISM/MMC Does Not Work Through a Firewall

	Article: Q218471
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Service Manager (ISM), which loads the Internet Information Server
	snap-in for the Microsoft Management Console (MMC) does not work through a
	firewall.
	
	CAUSE
	=====
	
	This is by design. If the MMC ISM was configured to operate through a firewall
	using TCP port-based security alone, particularly by opening additional TCP
	ports, it could potentially expose sensitive configuration information to the
	Internet.
	
	The HTMLA uses TCP port 80, which is open on most firewalls for Web traffic and
	sites.
	
	HTTP and FTP are well defined by firewalls, which make these protocols more
	secure.
	
	RESOLUTION
	==========
	
	To resolve this issue, do one of the following:
	
	Use HTMLA over SSL
	------------------
	
	Use the HTML version of the Internet Service Manager (also known as the HTML
	Administration or HTMLA) over SSL. This uses HTTP-based security, which will
	require additional configurations mentioned in the online documentation for the
	Windows NT Option Pack.
	
	-OR-
	
	Use the ISM MMC over PPTP
	-------------------------
	
	Use Point-to-Point Tunneling Protocol (PPTP) to tunnel through the firewall. The
	ISM MMC can be used on the secure PPTP connection. This will also require
	additional configurations.
	
	MORE INFORMATION
	================
	
	The following error messages may occur when you attempt to specify TCP ports for
	the ISM MMC to use through a firewall:
	
	  The World Wide Web Publishing Service service is starting.
	  The World Wide Web Publishing Service service could not be started.
	  A system error has occurred.
	  System error 1721 has occurred.
	  Not enough resources are available to complete this operation.
	
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
