---
layout: page
title: "Q137041: SMTP: Recommended Environments for the SMTP Gateway"
permalink: kb/137/Q137041/
---

## Q137041: SMTP: Recommended Environments for the SMTP Gateway

	Article: Q137041
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you have the SMTP Mail Gateway functional, you need to address several
	factors to get reliable performance. If you overlook the factors, the gateway
	may intermittently hang and refuse inbound connections.
	
	The issues listed below are usually involved when the gateway stops working with
	no error message recorded in the SMTPGATE.LOG, and the following is repeatedly
	displayed in this file:
	
	  Spawning SMTPGET
	  Spawn(SMTPGET)=0
	  Idling: 48258 bytes, largest 47234
	
	MORE INFORMATION
	================
	
	The following five configuration issues can decrease the reliability of the SMTP
	gateway.
	
	1. The postoffice (PO) and gateway should be on the same physical network.
	  Because the gateway's temporary files are written on the postoffice
	  (M:\MAILDATA\SMTP\), and not its local hard disk, the performance of the
	  gateway is dependent on file input/output. The most effective way to ensure
	  fast file input/output is to have both the gateway and postoffice on the same
	  physical network.
	
	2. Use a Mail Relay Host for inbound SMTP mail. It is not mandatory to have Mail
	  Relay Host configured for Inbound mail, but it is highly recommended. The
	  SMTP Gateway is dependent on a MS-DOS redirector and the reliability of a
	  UNIX to MS-DOS connection is not as robust as that of a UNIX to UNIX
	  connection (UNIX is multithreaded; MS-DOS is single threaded). Therefore, you
	  should control the UNIX to MS-DOS connection by storing all messages going to
	  the Microsoft Mail on a Host before they get forwarded to Microsoft Mail.
	
	  You want to have as much control over the less reliable UNIX to MS-DOS
	  connection as possible. The optimum way to control this is by putting a Mail
	  Relay Host on the same network segment as the gateway and PO server. Not only
	  does this increase the reliability of the UNIX to MS-DOS connection from a
	  physical perspective, but it also allows the Host to be configured to
	  open/close the connections more effectively.
	
	3. Routers should use static routing. If the Smart Host (Mail Relay Host) is not
	  on the same network segment as the gateway and PO, then static routes should
	  be configured on the router that separates the gateway and host. The IP
	  addresses for the gateway and the Smart Host should be added to the static
	  table on the router.
	
	  NOTE: Most routers use dynamic routing by default, a static table needs to be
	  manually created and maintained.
	
	4. Use a 16-bit network interface card (NIC) When you use a 16-bit NIC, it is a
	  good way to get fast file input/output. Additionally, it is recommended to
	  use a 16-bit NIC with RAM disabled.
	
	5. Use one protocol per NIC (IPX/SPX) When the PO is on a Novell NetWare server,
	  and IPX/SPX is used to access the PO and TCP/IP is used to access the Host,
	  it may be necessary to isolate each protocol on a separate NIC.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
