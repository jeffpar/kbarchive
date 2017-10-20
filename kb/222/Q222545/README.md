---
layout: page
title: "Q222545: X.25 Connection Appears Active After Cable Disconnected"
permalink: /kb/222/Q222545/
---

## Q222545: X.25 Connection Appears Active After Cable Disconnected

{% raw %}

	Article: Q222545
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An X.25 connection to a remote device (that is, mainframe) may not generate a
	connection outage when the X.25 cable is disconnected from a X.25 adapter
	installed in an SNA Server system. SNA Server Manager continues to show the
	connection in an Active state even after the cable is disconnected. The
	following event may be logged in the Windows NT Application Event Log on the SNA
	Server system when this occurs:
	
	  Event ID: 325
	  Source: SNA X.25 Link Service
	  Description: Driver <link service driver name> DSR has gone OFF:
	  probable modem failure.
	
	All active sessions using the X.25 connection will be lost when the X.25 cable is
	disconnected from the X.25 adapter even though the connection appears to be
	active when looking at its status in SNA Server Manager.
	
	NOTE: This problem may occur with any X.25 adapter that uses SNA Server's
	Ibmx25.dll "dumb card" driver interface. This driver interface is published in
	the appendix of the SNA Device Interface Specification (SNADIS) guide, which is
	included in the SNA Server SDK.
	
	
	CAUSE
	=====
	
	A connection outage is not generated when the X.25 cable is disconnected from
	the X.25 adapter because an incorrect variable is passed to the function that is
	responsible for generating the outage. The result is that an outage is not
	generated, which means that the X.25 link service does not inform the SNA Server
	service that the connection has been lost. Therefore, the connection appears to
	remain active even though it is no longer active.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, and 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Host connection failures normally result in a connection outage error. When a
	connection outage is generated, the status of the connection will change to
	either Pending or Inactive when viewed in SNA Server Manager. In addition, an
	Event 23 message is logged in the Windows NT Application Event Log when a link
	service detects an outage. The Event 23 message includes a connection specific
	qualifier (that is, return code) that indicates the type of failure that
	occurred. The following are some of the common X.25 connection outages that may
	occur:
	
	- X'37' - Loss of a virtual circuit.
	
	- X'60' - The switched virtual circuit to the host has been cleared down
	  (broken) either by the host or by the X.25 network itself.
	
	- X'61' - The permanent virtual circuit to the host has been cleared down
	  (broken) either by the host or by the X.25 network itself.
	
	- X'62' - An attempt to connect to the host through a switched virtual circuit
	  has failed.
	
	As an example, an X.25 link service will log the following message when the cable
	between the modems is disconnected:
	
	  Event ID: 23
	  Source: SNA X.25 Link Service
	  Description: Connection <connection_name> using Link Service
	  <link_service_name> failed.
	
	  Qualifier = X'61'
	
	After applying this update, the X.25 link service will generate an outage when
	the X.25 cable is disconnected from the X.25 adapter.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
