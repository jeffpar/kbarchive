---
layout: page
title: "Q131625: Multiple APPN-capable Connections to Same AS/400 Not Supported"
permalink: /kb/131/Q131625/
---

## Q131625: Multiple APPN-capable Connections to Same AS/400 Not Supported

{% raw %}

	Article: Q131625
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbfile kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While SNA Server does support one or more connections to the same host system
	(see Q107192), the AS/400 does not support more than one concurrent APPN-capable
	connection from a single SNA Server 2.x system (acting as a LEN node), over any
	link type (802.2 Token Ring, Ethernet, SDLC, or X.25).
	
	SNA Server 3.0 does support multiple APPN-capable connections to the same
	AS/400.
	
	For additional information on how SNA Server 3.0 supports multiple APPN-capable
	connections to an AS/400, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q162133 SNA Server 3.0 Supports Multiple Connections To Same AS/400
	
	For additional information on how to define a non-APPN capable connection, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q145714 How to Establish Two 802.2 Connections To AS/400
	
	To increase the number of sessions from SNA Server to an AS/400, multiple local
	APPC LUs can be defined and partnered with the AS/400s remote APPC LU, or the
	QPCSUPP mode's session limit can be increased in both SNA Server and the
	AS/400.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q126395 Ways to Increase the Number of AS/400 LU6.2 Sessions
	
	MORE INFORMATION
	================
	
	For SNA Server to connect to an AS/400, an APPC controller definition must exist
	for SNA Server's local control point name. The APPC controller may be
	autocreated by the AS/400 or manually created by the AS/400 administrator.
	
	The AS/400 allows only a single APPC controller, with a given control point name,
	over any line it supports. If two connections are defined in SNA Server to the
	same AS/400 (for example, two 802.2 connections, or one 802.2 and one SDLC,
	etc.), the AS/400 rejects the second connection request unless the first APPC
	controller definition is deleted.
	
	SNA Server 2.x can only be configured with one local control point name
	(configured in SNA Admin from the Session Properties dialog box).
	
	For 802.2 connections, the AS/400 allows only a single APPC controller to have a
	specific network adapter address. So, if an SNA Server connects to an AS/400
	with one local control point name configured (over an 802.2 connection), and the
	local control point name is later changed, the AS/400 will refuse the connection
	attempt with the new name because an APPC controller definition already exists
	with the same network adapter address.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbfile kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
