---
layout: page
title: "Q222134: XADM: Unable to Establish Proxy Functionality"
permalink: kb/222/Q222134/
---

## Q222134: XADM: Unable to Establish Proxy Functionality

	Article: Q222134
	Product(s): Microsoft Exchange
	Version(s): winnt:2.0,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 01-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An installation of Exchange Server behind Proxy Server requires modification of
	MX records and configuration of the Wspcfg.ini files on the Exchange Server
	computer as explained in the following Microsoft Knowledge Base article:
	
	  Q181847 XADM: How to Configure Microsoft Exchange Server with Proxy Server
	
	On some occasions when the Winsock Proxy client is installed after Exchange
	Server has been configured, you may experience some of the problems listed
	below. In other instances, the Winsock Proxy client and Exchange Server may
	appear to work correctly, however, some anomalous behavior such as a temporary
	loss of connection to the ISP may occur.
	
	Symptoms of this Behavior
	-------------------------
	
	- Can send mail but not receive mail, or vice versa.
	
	- Can neither send nor receive mail.
	
	- May have had perfect functionality before installing Winsock Proxy Client.
	
	- Can telnet to Port 25 or 110 but still cannot send or receive mail.
	
	These symptoms may occur even though all of the following conditions are true:
	
	- Chkwsp32 confirms a connection and Mspclnt.ini is configured properly on the
	  Exchange Server computer.
	
	- Wspcfg.ini is configured properly on the Exchange Server computer.
	
	- Files may have been renamed and recreated without success.
	
	CAUSE
	=====
	
	It is possible that the Internet Mail Service (Internet Mail Connector in
	Exchange Server 4.0) isn't bound properly to the WinSock Proxy client.
	
	RESOLUTION
	==========
	
	First, attempt to remove and reinstall the Internet Mail Service, renaming and
	reconfiguring the .ini files mentioned in the "Symptoms" section. If, however,
	this does not resolve the issue, try the following steps:
	
	1. Record all Internet Mail Service settings or do an Admin dump in the
	  Microsoft Exchange Server Administrator program.
	
	2. Remove the Internet Mail Service.
	
	3. Remove the WinSockProxy client.
	
	4. Reboot.
	
	5. Reinstall the WinSockProxy Client.
	
	6. Reboot.
	
	7. Reinstall the Internet Mail Service.
	
	8. Modify the Wspcfg.ini as described in Q181847, and confirm functionality.
	
	9. Telnet to Port 25 and port 110.
	
	10. Send and receive mail.
	
	Additional query words: IMS IMC
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Component         : IMC
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbProxyServSearch kbProxyServ200
	Version           : winnt:2.0,4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
