---
layout: page
title: "Q296821: External Clocking and Sangoma S514/S508 SDLC PCI Adapter Driver"
permalink: /kb/296/Q296821/
---

## Q296821: External Clocking and Sangoma S514/S508 SDLC PCI Adapter Driver

{% raw %}

	Article: Q296821
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Host Integration Server 2000 (HIS2000) is installed and running on a
	Microsoft Windows NT 4.0 Server system, a Synchronous Data Link Control (SDLC)
	connection that is using the Sangoma SDLC link service (SANSDLC1) stays pending
	when it is configured for external clocking.
	
	CAUSE
	=====
	
	Incorrect SDLC drivers are installed for the Sangoma SDLC PCI adapter.
	
	RESOLUTION
	==========
	
	Contact Sangoma and request the drivers for Host Integration Server 2000 running
	in Windows NT 4.0 Server.
	
	MORE INFORMATION
	================
	
	External clocking is configured in the SANSDLC1 link properties when line speed
	is set for 0 (zero). External clocking is essentially clocking that is handled
	by the Data Communications Equipment (DCE); in this case, it is handled
	externally by the Channel Service Unit/Data Service Unit (CSU/DSU) instead of
	internally by the SDLC adapter.
	
	If the line speed is configured to 56000 in the SANSDLC1 link properties, the
	SDLC connection becomes active. However, with this configuration, clocking is
	handled both internally by the SDLC adapter and externally by the CSU/DSU,
	causing transmission of data to become out of sync.
	
	When the SDLC connection is pending, an event 23 with an outage code of 25 is
	logged in the Windows NT 4.0 Server application log. The following is an example
	of the event:
	
	Event Type:	Warning
	Event Source:	SNA Server
	Event Category:	None
	Event ID:	23
	Date:		4/12/2001
	Time:		1:00:54 PM
	User:		S-1-5-21-1915688249-670910532-2033415169-500
	Computer:	MYCOMPUTER
	Description:
	Connection Failure
	  Connection   = MYCONNECTION 
	  Link Service = SANSDLC1
	  Outage Code  = 0025
	
	EXPLANATION
	A link service reported a connection failure to the node. See below for more information on the outage code that caused the connection to fail.
	
	SDLC
	
	0025
	
	Idle timeout retry exceeded. The SNA connection has not received an SDLC response from the remote system, causing a connection timeout. 
	Common causes include: (1) wrong duplexing (2)  wrong NRZI value, (3) a bad SDLC cable, (4) line is too fast for adapter,(5) a modem 
	configuration issue (6) a bad SDLC adapter.
	
	You can obtain the drivers for this adapter for SNA Server and Host Integration
	Server 2000 from the following Web site:
	
	  ftp://ftp.sangoma.com/SNA%20Server/S514-S508%20code/
	  (ftp://ftp.sangoma.com/SNA%20Server/S514-S508%20code/)
	
	Sangoma's FTP site has drivers for the following configurations:
	
	- SNA Server and Host Integration Server 2000 running in Microsoft Windows 2000
	  Server. The following files are listed under the Win2000 folder:
	
	   - Sanglink_w2k.msi
	
	   - Sangsync.inf
	
	   - Sangsync.sys
	
	- SNA Server running in Windows NT 4.0 Server. The following files are listed
	  under the Winnt folder:
	
	   - Readme.txt
	
	   - Sanglink.msi
	
	Sangoma's FTP site has not released the SDLC driver for Host Integration Server
	2000 running in Windows NT 4.0 Server.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
