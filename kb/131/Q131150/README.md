---
layout: page
title: "Q131150: SMTP: Causes of Hangs on Mail Gateway to SMTP"
permalink: /kb/131/Q131150/
---

## Q131150: SMTP: Causes of Hangs on Mail Gateway to SMTP

{% raw %}

	Article: Q131150
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Once the Microsoft Mail Gateway to SMTP is functional, several factors still
	need to be addressed before the gateway can be expected to perform reliably. If
	these factors are overlooked, the gateway may intermittently hang and refuse
	inbound connections.
	
	The configuration issues listed below are usually involved if the gateway stops
	working with no error messages recorded in the SMTPGATE.LOG file, and the
	following message is repeatedly displayed in this file:
	
	  Spawning SMTPGET
	  Spawn(SMTPGET)=0
	  Idling: 48258 bytes, largest 47234
	
	MORE INFORMATION
	================
	
	The following five configuration issues are known for hindering the reliability
	of the SMTP gateway.
	
	1. Postoffice (PO) and Gateway should be on the same physical network.
	
	  Because the gateway's temporary files are written on the postoffice
	  (M:\MAILDATA\SMTP\), and not its local hard disk, the performance of the
	  gateway is dependent on file input/output. The most effective way to ensure
	  fast file input/output is to have both the gateway and postoffice on the same
	  physical network.
	
	2. Use a Mail Relay Host for inbound SMTP mail.
	
	  It is not mandatory to have Mail Relay Host configured for inbound mail, but
	  it is highly recommended. Because the SMTP gateway is dependent on a DOS
	  redirector, and the reliability of a UNIX to DOS connection is not as robust
	  as the reliability of a UNIX to UNIX connection (UNIX is multithreaded; DOS
	  is single threaded), it is recommended to control the required UNIX to DOS
	  connection by storing all messages destine for MS Mail on a Host before they
	  get forwarded to MS Mail.
	
	  In other words, the Mail Administrators need to have as much control over the
	  less reliable UNIX to DOS connection as possible. The optimum way to control
	  this is by putting a Mail Relay Host on the same network segment as the
	  gateway and PO server. Not only does this increase the reliability of the
	  UNIX to DOS connection from a physical perspective, but it allows the Host to
	  be configured to open/close the connections more effectively.
	
	3. Have routers use static routing.
	
	  If the Smart Host (Mail Relay Host) is not on the same network segment as the
	  gateway and PO, then static routes should be configured on the router that
	  separates the gateway and host. The IP addresses for the Gateway and the
	  Smart Host should be added to the static table on the router.
	
	  NOTE: Most routers use dynamic routing by default; a static table needs to be
	  manually created and maintained.
	
	4. Use a 16-bit Network Interface Card (NIC).
	
	  You should use a 16-bit NIC to get fast file input/output. Additionally, it is
	  recommended to use a 16-bit NIC with the RAM disabled.
	
	5. Use one protocol per NIC (IPX/SPX).
	
	  When the postoffice is on a Novell NetWare server and IPX/SPX is used to
	  access the postoffice when TCP/IP is used to access the Host, it might be
	  necessary to isolate each protocol on a separate NIC.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q101461 Microsoft Mail SMTPGATE.EXE Version 3.0.9 Update
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
