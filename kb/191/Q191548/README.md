---
layout: page
title: "Q191548: Troubleshooting Guide for the Internet Mail Connector/Internet M"
permalink: /kb/191/Q191548/
---

## Q191548: Troubleshooting Guide for the Internet Mail Connector/Internet M

{% raw %}

	Article: Q191548
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines steps to troubleshoot common problems with the Internet
	Mail Connector (IMC) for Microsoft Exchange Server.
	
	MORE INFORMATION
	================
	
	1. QUESTION:
	
	  Is the IMC installed and viewable from the Exchange Server Administration
	  program?
	
	  ANSWER:
	
	   - Yes. Proceed to step 2.
	
	   - No. Run Setup from the Enterprise version to install; select Add/Remove,
	     select Microsoft Exchange Server, and click Change Option. Select
	     SMP/Internet Mail Connector. If you have the standard version of Exchange
	     Server, install the IMC from the IMC Connector disk.
	
	     Run the Exchange Server Administration program when you finish and
	     configure the IMC as outlined in Chapter 11 of the Microsoft Exchange
	     Server Administrator's Guide.
	
	2. QUESTION:
	
	  Does the IMC start?
	
	  VERIFY:
	
	   - At a command prompt, type:
	
	  "net start" (without the quotation marks)
	
	     Look for "Microsoft Exchange Internet Mail Connector." If you do not see
	     it, type:
	
	  "net start msexchangeimc" (without the quotation marks)
	
	     -or-
	
	   - In Control Panel, double-click Services, and start the Microsoft Exchange
	     Internet Mail Connector.
	
	  ANSWER:
	
	   - Yes, the IMC starts. Proceed to step 3.
	
	   - No, it does not start.
	
	     Has the IMC ever started successfully?
	
	      - No. What error is encountered when the IMC attempts to start, and where
	        is the error found?
	
	        Event ID 1075 and 7003 in the Event Viewer.
	
	  Verify that the IMC computer has TCP/IP installed and was restarted.
	
	        Event ID 2140 in the Event Viewer.
	
	  Go back to step 1. For additional information, see the following article in
	  the Microsoft Knowledge Base:
	
	  Q148727 XFOR: Internet Mail Connector Fails to Start
	
	        Dr. Watson on the monitor and %SystemRoot%\Drwtsn32.log file. For
	        additional information, please see the following article in the
	        Microsoft Knowledge Base:
	
	  Q149542 XFOR: IMC Error 1067, Dr. Watson on MSEXCIMC.EXE
	
	      - Yes. What error is encountered when the IMC attempts to start, and
	        where is the error found?
	
	        Dr. Watson on the monitor and %SystemRoot%\Drwtsn32.log file. See
	        Q149542.
	
	        Event ID=4092 error, 4018, and 4086 in the Event Viewer.
	
	
	Event ID=4026: "MAPI init has failed" in the Event Viewer.
	
	
	3. QUESTION:
	
	  Has the IMC ever started successfully?
	
	  ANSWER:
	
	   - No. What error is encountered when the IMC attempts to start, and where is
	     the error found?
	
	     If Event ID 1075 and 7003 are in the Event Viewer, verify that the IMC
	     computer has TCP/IP installed correctly (that is, with the correct IP
	     address and subnet mask) and was restarted.
	
	     Event ID 2140 in the Event Viewer.
	
	4. QUESTION:
	
	  Can Exchange Server users receive messages from a telnet session?
	
	  VERIFY:
	
	  Verify that in the IMC, on the Connection tab, in Transfer Mode, either
	  Inbound or Inbound & Outbound is selected, and set up Diagnostics Logging
	  for SMTP Protocol Logging; see page 576 in the Microsoft Exchange Server
	  Administrator's Guide.
	
	  a. Test for basic SMTP functionality to the IMC with telnet. For additional
	     information, please see the following article in the Microsoft Knowledge
	     Base:
	
	  Q153119 XFOR: Telnet to Port 25 of IMC to Test IMC Communication
	
	  b. Run the Exchange Client, read the message, and verify that mail is
	     received. If the message is not received, try the telnet session again,
	     and verify that the message is sent to a valid user's SMTP address in
	     accordance with the intended recipients' SMTP E-mail Address property
	     page.
	
	5. QUESTION:
	
	  Can Exchange Server users receive messages from an SMTP host?
	
	  VERIFY:
	
	  In step 4 you used Q153119 to verify that the IMC can receive mail.
	
	  Now you need to see the actual production host that is intended to "relay," or
	  "forward" messages to the IMC communicate with the IMC. From this host repeat
	  the Telnet instructions above.
	
	  Generally if there are problems telneting to the IMC from this host there is
	  most likely a network or protocol problem. The following steps help verify a
	  network issue.
	
	  a. At a command prompt, ping the IMC computer's IP address from the mail host
	     to verify connectivity. If the ping fails:
	
	      - Check to see if you have the correct IP addresses.
	
	      - Verify that the IP address of the default gateway is correct; type the
	        following at a command prompt:
	
	  "IPCONFIG.exe /All |more" (without the quotation marks)
	
	      - Make sure IP routing is enabled between physical segments.
	
	      - Verify that the link between routers is operational.
	
	  b. After a successful ping to the IP address, try to ping the host name of
	     the IMC from the mail host. To find the host name of the IMC, at a command
	     prompt, type:
	
	  "IPCONFIG /All |more" (without the quotation marks)
	
	     Sample Ipconfig file
	
	Windows NT IP ConfigurationHost Name . . . . . . . .  :
	Hostname.DomainName.com
	DNS Servers . . . . . . . : 254.25.25.31
	Node Type . . . . .. . . . :  Hybrid
	NetBIOS Scope ID. . . . . . : IP Routing Enabled. . . . . : No WINS Proxy
	Enabled. . . . . : No NetBIOS Resolution Uses DNS : No
	Ethernet adapter EE161:Description . . . . . . . . : Intel EtherExpress 16
	Physical Address. . . . . . : 00-AA-00-42-5A-50DHCP Enabled. . . . . . . .
	: Yes IP Address. . . . . . . . . : 254.25.10.190 Subnet Mask . . . . . . .
	. : 255.255.248.0 Default Gateway . . . . . . : 254.25.8.1 DHCP Server . .
	. . . . . . : 254.54.16.157 Primary WINS Server . . . . : 254.54.16.157
	Secondary WINS Server . . . : 254.54.16.159 Lease Obtained. : Wednesday,
	July 24, 1996 1:24:10 PM Lease Expires: Sunday, July 28, 1996 1:24:10 PM
	  Ethernet adapter NdisWan8:   Description . . . . . . . . : NdisWan
	Adapter   Physical Address. . . . . . : 00-00-00-00-00-00   DHCP Enabled. .
	. . . . . . : No   IP Address. . . . . . . . . : 0.0.0.0   Subnet Mask . .
	. . . . . . : 0.0.0.0   Default Gateway . . . . . . :
	
	  Ethernet adapter NdisWan5:   Description . . . . . . . . : NdisWan
	
	Adapter   Physical Address. . . . . . : 00-00-00-00-00-00   DHCP Enabled. .
	. . . . . . : No   IP Address. . . . . . . . . : 0.0.0.0   Subnet Mask . .
	. . . . . . : 0.0.0.0   Default Gateway . . . . . . :
	
	  c. If the ping of the IP address works but the ping of the HOST NAME fails,
	     Domain Name System (DNS) or Windows Internet Naming Service (WINS) does
	     not function correctly. Refer to the Microsoft Exchange Server
	     Administrator's Guide, and see "Adding the Internet Mail Connector
	     Computer to DNS" in Chapter 11. Specifically, you need to check the "A"
	     (address record.)
	
	
	Only after a telnet from the production host is successful can you address the
	particulars of the production environment. Occasionally telnet messages are
	successful, however, specific messages from the production host or outbound to
	the production host (for example, message with body text, message with many
	users on the To line, or messages with attachments that exceed a size limit of
	the production host) fail. In these cases it is necessary to use Microsoft
	Systems Management Server's Network Monitor to do protocol trace between hosts.
	
	
	For instructions on how use the software, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q148942 How to Capture Network Traffic with Network Monitor
	
	6. QUESTION:
	
	  Can Exchange Server users send messages to an Internet (SMTP) host?
	
	  VERIFY:
	
	  Verify that in the IMC, on the Connections tab, in Transfer Mode, either
	  Outbound or Inbound & Outbound is selected, and set up Diagnostics
	  Logging for SMTP Protocol Logging; see page 576 in the Microsoft Exchange
	  Server Administrator's Guide.
	
	  a. Run Exchange Client and compose a message to an SMTP address (one from the
	     example).
	
	      - Does the message leave the Outbox of the active user?
	
	  Yes, it leaves the Outbox.
	
	      - Does the message get returned to the user quickly?
	
	  Yes, The message comes back. A copy is in the Sent folder.
	
	      - Check the Address Space (remove/ Regen).
	
	      - Disable ResolverSearchList, and refer to the following article in the
	        Microsoft Knowledge Base:
	
	  Q150969 XFOR: All Messages Sent Over IMC Result in NDRs
	
	  b. Stop and then restart IMC and message transfer agent (MTA).
	
	  No, there is no return message.
	
	      - Does the message stay in the Outbox?
	
	  Yes, the message stays in the Outbox.
	
	      - If the message stays in Outbox this is an MTA issue.
	
	  No, the message leaves the Outbox.
	
	      - Is the message in the IMC Outbound Queue?
	
	        The details say Host Unreachable.
	
	         - Verify that the IP address is correct.
	
	         - Check Email Domain Button for incorrect entries.
	
	         - Verify that port 25 is available and active on the destination host
	           using Q153119.
	
	        The Properties say TCP/IP timeout use netmon.
	
	         - No, the message is not in the outbound queue.
	
	Check the GWART for other installations of the IMC. (That is, this could be a MS
	Mail Connector with a SMTP address configured.)
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
