---
layout: page
title: "Q265001: PRB: SNA Server Invokable Transaction Programs Are Not Supported"
permalink: /kb/265/Q265001/
---

## Q265001: PRB: SNA Server Invokable Transaction Programs Are Not Supported

{% raw %}

	Article: Q265001
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When more than one SNA Server client or Host Integration Server 2000 client are
	hosted on a single Windows NT 4.0 or Windows 2000 Terminal Server computer,
	invokable transaction programs fail to receive incoming conversation requests.
	Instead, incoming requests may be routed to the wrong client, or the incoming
	attach requests may be rejected with sense code 084C0000 = Transaction Program
	Not Available - No Retry. When this occurs, SNA Server logs the following
	event:
	
	  Event ID: 60
	  Source: SNA Server Service
	  Description: Failed to invoke APPC TP [TP name], local LU [LU name], sense
	  data = 084C0000
	
	CAUSE
	=====
	
	SNA Server and Host Integration Server do not support the configuration of
	invokable transaction programs on multiple SNA clients running on Windows NT 4.0
	Terminal Server or Windows 2000 Terminal Server. SNA Server does not distinguish
	between multiple SNA client connections running on the same Terminal Server
	computer. Therefore, incoming attach requests are not routed properly to the
	correct client instance.
	
	STATUS
	======
	
	If there is a customer need for this feature, please contact Microsoft through
	the regular SNA Server support channels. The request will be considered by the
	product team for inclusion in the product.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	
	=============================================================================
	

{% endraw %}
