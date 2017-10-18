---
layout: page
title: "Q142614: Internet Information Server SMTP Gateway Troubleshooting"
permalink: kb/142/Q142614/
---

## Q142614: Internet Information Server SMTP Gateway Troubleshooting

	Article: Q142614
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Server SMTP connectivity can be tested with the
	TELNET utility.
	
	MORE INFORMATION
	================
	
	For additional information on how to test the TCP layer of the connection,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q115492 : SMTP: Troubleshooting the TCP/IP Layer of the Mail Gateway
	
	Use the TELNET command with a "25" after the host ID or IP address to specify the
	mail socket. Run the TELNET command from the gateway PC to the host, and from
	the host to the gateway PC. For example:
	
	  TELNET tcpiphost.company.com 25
	  TELNET msmailgwy.company.com 25
	
	NOTE: You cannot run the second command unless the gateway is running.
	
	If these commands are successful, you will receive the response "220...." from
	the destination host. Successful completion means the TCP layer is working. Type
	QUIT to end the test.
	
	
	Additional query words: prodiis1
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
