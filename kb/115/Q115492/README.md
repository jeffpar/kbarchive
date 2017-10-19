---
layout: page
title: "Q115492: SMTP: Troubleshooting the TCP/IP Layer of the Mail Gateway"
permalink: /kb/115/Q115492/
---

## Q115492: SMTP: Troubleshooting the TCP/IP Layer of the Mail Gateway

	Article: Q115492
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the SMTP gateway cannot connect to the mail routing host or receive incoming
	mail, the TCP/IP layer may not be working properly. This article describes how
	to troubleshoot the IP and TCP layers.
	
	MORE INFORMATION
	================
	
	Testing the IP Layer
	--------------------
	
	To test the IP layer, use the PING command from the gateway computer up to the
	host and from the host down to the gateway computer:
	
	1. Test the network adapter with the loopback IP address:
	
	  ping 127.0.0.1
	
	  If this test fails, then the problem is related to the network interface card
	  (NIC).
	
	2. Test the connection on the local subnet:
	
	  ping <ip address>
	
	  where <ip address> is the IP address of a host on the same subnetwork.
	  If this fails, then the subnet mask is configured incorrectly.
	
	3. Test the connection to the default gateway:
	
	  ping <gateway ip address>
	
	  where <gateway ip address> is the IP address of the default gateway,
	  also known as a router. If this test fails, then you have an incorrect IP
	  address for the default gateway, or the gateway is down.
	
	4. Test the connection to a remote subnet:
	
	  ping <remote ip address>
	
	  where <remote ip address> is the IP address of a host on another subnet.
	  If this fails, then the connectivity problem is most likely on the remote
	  side.
	
	5. Test the DNS name resolution:
	
	  ping <host.domain>
	
	  where <host.domain> is something like smarthost.microsoft.com If this
	  fails, then either the DNS entry in the TCP/IP configuration is incorrect or
	  the DNS server is having problems providing name service at this time.
	
	If this works, you receive a response indicating how many packets were bounced
	off the destination host. Successful completion of these commands means the IP
	layer is working correctly.
	
	Testing the TCP Layer
	---------------------
	
	To test the TCP layer, use the TELNET command with a "25" after the host ID or IP
	address to specify the mail socket. Run it from the gateway computer up to the
	host and from the host down to the gateway computer:
	
	  telnet tcpiphost.company.com 25 telnet msmailgwy.company.com 25
	
	NOTE: You can't run the second command unless the gateway is running.
	
	If this succeeds, you receive the response "220 ...." from the destination host.
	Type "quit" (without the quotation marks) to end the test. Successful completion
	means the TCP layer is working.
	
	NOTE: If you use -cd (debug) and -lacsy (full logging) the 220 response is
	recorded in the LOG file.
	
	Additional query words: 3.00 errors
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
