---
layout: page
title: "Q252148: How to Troubleshoot ETRN Using Telnet"
permalink: /kb/252/Q252148/
---

## Q252148: How to Troubleshoot ETRN Using Telnet

{% raw %}

	Article: Q252148
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0a,4.5,5.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	- Microsoft BackOffice Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During troubleshooting, there may be situations in which you want to manually
	dequeue e-mail messages (for example, when it is not apparent whether the e-mail
	server of the Internet service provider is accepting the ETRN command, or to
	expedite the ETRN command without having to wait for Exchange Server to issue
	the command).
	
	MORE INFORMATION
	================
	
	Use the following procedure to troubleshoot the ETRN connection:
	
	1. Click Start, click Run, and then type the following command (where
	  <example.microsoft.test> is the name of your Internet service
	  provider's e-mail server):
	
	  telnet <example.microsoft.test> 25
	
	NOTE: If you are using a computer running Microsoft Windows 95, Microsoft Windows
	98, or Microsoft Windows NT 4.0, turn on local echo using the following steps:
	
	  a. On the Terminal menu, click Preferences.
	
	  b. Click to select the Local Echo check box.
	
	If you are using a computer running Microsoft Windows 2000, turn on local echo
	using the following steps:
	
	  a. Press CTRL + ] to start the Telnet program's configuration mode.
	
	  b. Type the following command:
	
	  set local_echo
	
	  c. Press ENTER once on a blank line to quit the configuration and return to
	     the Telnet session. The server responds with a message similar to the
	     following example:
	
	  220 example.microsoft.test ESMTP SMTP Server V. 1.0 Fri, 7 Jan 2000 19:40:59
	  -0500
	
	2. Identify yourself by typing the following command (where <domainname>
	  is the domain name of the site your are testing):
	
	  ehlo <domainname>
	
	3. The server responds with a message similar to the following example:
	
	  250-example.microsoft.test Hello machine.<domainname> [x.x.x.x]
	  250-SIZE 10485760
	  250-ETRN
	  250-EXPN
	  250-PIPELINING
	  250 HELP
	
	NOTE: If you do not see the response "250-ETRN," that specific server does not
	support the ETRN command.
	
	4. To start dequeuing e-mail messages, type the following command (where
	  <domainname> is the domain name of the site your are testing):
	
	  etrn <domainname>
	
	5. The server responds with a message similar to the following examples:
	
	  250 queuing for node <domainname> started
	
	  251 No mail messages waiting for node <domainname>
	
	  458 Node <domainname> does not store mail here
	
	  502 Sorry, we do not allow this operation
	
	NOTE: The first entry (250) indicates that e-mail messages were waiting and are
	now being forwarded to the server. The second response (251) indicates that the
	server is configured to send e-mail messages to the host, but no e-mail messages
	have been received. The third entry (458) indicates that the server is not
	configured to store e-mail messages for the indicated domain. The final entry
	(502) is self-explanatory (the server is not configured to accept ETRN
	commands).
	
	6. To end the session, type "quit" (without the quotation marks) on a line by
	  itself.
	
	Additional query words: smallbiz isp
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbBackOfficeServ450 kbSBServ400 kbSBServ400a kbSBServ450
	Version           : :4.0,4.0a,4.5,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
