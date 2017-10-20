---
layout: page
title: "Q191687: XIMS: Outlook Express POP3, Error 0x800ccc0e, Socket Err 10061"
permalink: /kb/191/Q191687/
---

## Q191687: XIMS: Outlook Express POP3, Error 0x800ccc0e, Socket Err 10061

{% raw %}

	Article: Q191687
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc5 exc55
	Last Modified: 22-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Outlook 2000, Service Release 1 (SR-1) 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send or receive messages using Outlook Express or Outlook, you
	may receive an error message. When you try to send a message to your Simple Mail
	Transfer Protocol (SMTP) server, you may receive the following error message:
	
	  The connection to the server has failed. Account: 'your_account',
	  Server:'your_SMTP_server', Protocol:SMTP, Port: 25, Secure(SSL): NO,
	  Socket error: 10061, Error Number: 0x800ccc0e
	
	Similarly, when you start the e-mail client or try to receive a message from your
	Post Office Protocol version 3 (POP3) server, you may receive the following
	error:
	
	  The connection to the server has failed. Account: 'your_account',
	  Server:'your_POP3_server', Protocol:POP3, Port: 110, Secure(SSL): NO,
	  Socket error: 10061, Error Number: 0x800ccc0e
	
	CAUSE
	=====
	
	The client connects to a port that is blocked or unavailable on the mail server.
	If the client is attempting to send a message, the blocked port is 25, and if
	the client is attempting to retrieve a message, the blocked port is 110. Refer
	to the error message for the protocol and port numbers.
	
	WORKAROUND
	==========
	
	To work around this behavior, make ports 110 and 25 available. Ports 110 and 25
	are available by default when the Exchange Server services start. The ports 110
	for POP3, 119 for Network News Transfer Protocol (NNTP), and 143 for Internet
	Message Access Protocol (IMAP) are automatically opened and made available on
	the Exchange Server computer when the Information Store service starts. Port 25
	is automatically made available when the Internet Mail Service starts. If these
	services do not start, then the ports are not available.
	
	If the services are running, you can verify that these ports are listening (open)
	on the server by using the Netstat utility that is included with Windows NT
	Server:
	
	1. Open a command prompt on the Exchange Server computer. You need to modify the
	  command prompt properties, because the data scrolls off the screen. Open the
	  command prompt, right-click the upper-left corner of the window, and then
	  click Properties. Click the Layout tab, and then change the screen buffer
	  size to 1,000. Apply the change. You are prompted to either modify the
	  current window or the shortcut that you used to start the command prompt. You
	  can modify the shortcut for future convenience.
	
	2. At the command prompt, type "netstat -an" (without the quotation marks).
	  Scroll back to the beginning of the data output, and look for the following
	  entries.
	
	  
	
	  Proto Local Address          Foreign Address        State
	 TCP    0.0.0.0:25             0.0.0.0:0              LISTENING
	 TCP    0.0.0.0:110            0.0.0.0:0              LISTENING
	
	If these entries are present, Exchange Server is listening on ports 110 and 25 on
	all interfaces. This is normal. If these ports are not available, you may need
	to further troubleshoot the following services or systems. The following general
	causes may "hold" these ports, or make them unavailable:
	
	- The Exchange Server information store service is not running, or the POP3
	  protocol is not enabled and listening to port 110. Verify that the
	  information store service is running.
	
	For additional information about troubleshooting the POP3 protocol, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q161118 XCLN: Troubleshooting POP3 Connections to Exchange Server
	
	- The Internet Mail Service is not running or is not listening on port 25.
	  Verify that the Internet Mail Service is running.
	
	For additional information about testing the Internet Mail Service and port 25,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q153119 XFOR: Telnet to Port 25 of IMC to Test IMC Communication
	
	- A proxy server located between the client and the server may be blocking
	  access to these ports to the Exchange Server computer.
	
	For additional information about configuring Exchange Server through a proxy
	server, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q148732 XADM: Setting TCP/IP Port Numbers for Internet Firewalls
	
	  Q176466 XGEN: TCP Ports and Microsoft Exchange: In-depth Discussion
	
	- Another application, such as virus-scanning software, has reassigned port 25
	  to another port. Disable all non-essential services, including antivirus
	  software, and then restart the server.
	
	MORE INFORMATION
	================
	
	It is also possible to receive this error message when you have antivirus e-mail
	protection enabled on your computer.
	
	
	Additional query words: exfaq
	
	======================================================================
	Keywords          : kberrmsg exc5 exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook2000SR1
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
