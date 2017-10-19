---
layout: page
title: "Q311948: SNA LU6.2 Resync TP Service Logs Event 131 and Fails to Start"
permalink: /kb/311/Q311948/
---

## Q311948: SNA LU6.2 Resync TP Service Logs Event 131 and Fails to Start

	Article: Q311948
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA LU6.2 Resync TP service (Resyncsvc.exe) fails to start on a Host
	Integration Server (HIS) 2000 server that is operating in client mode when
	configured to connect to an SNA Server 4.0 system. In addition, the following
	event will be logged in the Application Event Log on the HIS 2000 system:
	
	  Event ID: 131
	  Source: SNA LU6.2 Resync TP
	  Description: (131) The Resynchronization Service was unable to initialize
	  interfaces to the WMI Provider.
	
	  EXPLANATION
	  The Resynchronization Service encountered HRESULT 8004100E when trying to
	  obtain SNA configuration information from the Host Integration Server WMI
	  namespace. The service is unable to initialize its environment and prepare
	  for transactions. This may indicate that the primary SNA configuration server
	  or other SNA server service has become inactive or unreachable on the
	  network, or that the Host Integration Server was not installed properly.
	
	The HRESULT listed in the explanation of the Event 131 may vary. The following
	are common HRESULT errors that may be returned:
	
	- 8004100E - WBEM_E_INVALID_NAMESPACE
	
	- 80040154 - REGDB_E_CLASSNOTREG
	
	CAUSE
	=====
	
	The SNA LU6.2 Resync TP in HIS 2000 needs to read the HIS 2000 configuration
	file (COM.cfg) to determine which Advanced Program-to-Program Communications
	(APPC) Logical Units (LUs) are configured for SyncPoint support. The SNA LU6.2
	Resync TP is designed to use Windows Management Instrumentation (WMI) to read
	the HIS 2000 configuration.
	
	SNA Server 4.0 (and earlier) does not support WMI, so the SNA LU6.2 Resync TP is
	unable to read an SNA Server 4.0 configuration to obtain the APPC LU information
	that it requires. This results in the Event 131 and the service's failure to
	start.
	
	This behavior is by design since SNA Server 4.0 and ealier do not support WMI.
	
	STATUS
	======
	
	This behavior is by design because SNA Server 4.0 (and earlier) does not support
	WMI.
	
	MORE INFORMATION
	================
	
	The SNA LU6.2 Resync TP service works with Distributed Transaction Coordinator
	(DTC) to perform automatic recovery to a consistent state in the face of
	failures at any point in a two-phase commit (2PC) transaction.
	
	The SNA LU6.2 Resync TP service is installed by default when an HIS 2000 Server
	is installed. This service is not available when you install either the HIS 2000
	End-User Client or the HIS 2000 Admin Client.
	
	An HIS 2000 Server can be installed in client (or "Nodeless") mode if the SNA
	Service component under "SNA Application Support" is deselected during the
	installation process. The SNA LU6.2 Resync TP service is still installed when
	you are installing HIS 2000 Server in client mode.
	
	When HIS 2000 Server is installed in client mode, the SNA Resource Location
	Wizard will be presented at the end of the installation process to allow the HIS
	2000 Server in client mode to be configured to locate an HIS 2000 or SNA Server
	server. If the HIS 2000 server in client mode is configured to connect to an SNA
	Server 4.0 system, the SNA LU6.2 Resync TP service will fail to start as
	described previously.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
