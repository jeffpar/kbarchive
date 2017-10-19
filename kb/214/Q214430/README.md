---
layout: page
title: "Q214430: Multihomed SNA NT Client Can't Find Local Server over IP"
permalink: /kb/214/Q214430/
---

## Q214430: Multihomed SNA NT Client Can't Find Local Server over IP

	Article: Q214430
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbsna400sp3fea kbFEA kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an SNA Server Windows NT client is configured to use the TCP/IP transport to
	communicate with a "local" SNA Server (that is, if the SNA client "locates"
	servers in an SNA Server subdomain), the SnaBase service may fail to start, and
	displays the following error message:
	
	  SNA Server - ERROR # 1004
	  SnaBase didn't find any SNA Servers in your domain
	
	This problem can occur if the Windows NT computer is multihomed (that is, is
	configured with more than one IP address), where the first client IP address is
	not on the same IP network as an SNA Server.
	
	NOTE: The above error can also occur if the client is separated from the server
	by an IP router. To solve that problem, configure the SNA Windows NT client as
	"remote" (that is, "Client locates server by name").
	
	CAUSE
	=====
	
	When configured to connect to a local SNA Server over TCP/IP, the SNA Windows NT
	client sends out its first client IP address. If the server or servers are
	located on a different IP network, the client fails to receive the server's
	response.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	If Windows NT 4.0 Service Pack 4 is being used, the following articles may help
	work around the problem by forcing TCP/IP to return a specific IP address to SNA
	Server:
	
	  Q171320 How to Change the IP Address List Order Returned
	
	  Q164023 Fix for Gethostbyname() IP Address Order on Local Multihomed Mac
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server. This
	problem was first corrected in SNA Server version 4.0 Service Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fea kbFEA kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
