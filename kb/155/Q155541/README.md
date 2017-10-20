---
layout: page
title: "Q155541: INFO: Configure Multiple SNA Servers to Use Single Distributed L"
permalink: /kb/155/Q155541/
---

## Q155541: INFO: Configure Multiple SNA Servers to Use Single Distributed L

{% raw %}

	Article: Q155541
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The distributed link service is a feature added in Service Pack 1 for Microsoft
	SNA Server version 2.11 that allows SNA Servers to be deployed in a new
	distributed model, which combines the benefits of the branch and central models
	of deployment. For details on the distributed model and link service, please see
	the SNA Open Gateway Architecture (SOGA) document.
	
	Information on SOGA can be found in the following locations:
	
	  http://www.microsoft.com/PressPass/press/1996/jan96/sna211pr.asp
	
	  http://www.microsoft.com/sna/soga.htm
	
	
	MORE INFORMATION
	================
	
	The original SOGA document indicated that a distributed link service could not
	be used by multiple SNA Servers simultaneously. The intent of this was to
	prevent you from trying to configure a distributed link service on the local SNA
	Server for a local connection. A distributed link service can only be used by
	remote SNA Servers. However, it is possible to have multiple remote systems
	using a single distributed link service.
	
	To do this, each remote system must be assigned a unique Service Access Point
	(SAP). SNA SAPs must be a hexadecimal multiple of four and must be defined on
	both ends of the connection. Assuming you had three remote systems you intended
	to use the distributed link service, you would use SAPs '04', '08', and '0C'.
	
	The SAPs are defined in the communications line description on the AS/400. Your
	AS/400 administrator can help you with this. Using the example of three systems,
	you would add '08' and '0C' to the SAPs already defined on the line. SAP '04' is
	defined by default.
	
	Additional query words: sna prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
