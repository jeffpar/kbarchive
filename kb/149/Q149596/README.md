---
layout: page
title: "Q149596: XCLN: Configuring Mac Client for TCP/IP"
permalink: kb/149/Q149596/
---

## Q149596: XCLN: Configuring Mac Client for TCP/IP

	Article: Q149596
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If MacTCP is not configured correctly, an error is displayed when you try to
	check a name using a Transmission Control Protocol/Internet Protocol (TCP/IP)
	connection type.
	
	The following errors may be generated:
	
	  The name could not be resolved. Network problems are preventing connection to
	  the Microsoft Exchange Server computer. Contact your system administrator if
	  this condition persists.
	
	  The name could not be resolved. The action could not be completed.
	
	WORKAROUND
	==========
	
	1. Verify the account name using the Microsoft Exchange Administrator program.
	
	2. From the Mac workstation, ensure the Microsoft Exchange Server and name are
	  entered correctly. Do not use the Appletalk name if it is different from the
	  Microsoft Exchange Server name.
	
	  NOTE: The Appletalk name is setup through MacFile control panel on the Windows
	  NT Server.
	
	3. Ensure MacTCP Ping can successfully ping the Microsoft Exchange server. If
	  not, MacTCP is not correctly set up on the workstation or TCP/IP is not
	  correctly set up on the Microsoft Exchange Server computer.
	
	4. If Appletalk routing is enabled, check the Appletalk Connection option
	  instead of TCP/IP. If the name can be resolved, then the behavior is a MacTCP
	  or DNS (hosts) issue.
	
	5. If MacTCP is using DNS, ensure MacTCP has the correct IP addresses in the DNS
	  configuration. Ensure a default DNS has been selected. Also, verify that the
	  DNS has the correct name resolution entered for the Microsoft Exchange Server
	  (appropriate A and MX records).
	
	6. If a local Mac hosts file is used, a CNAME and A record must be entered.
	  "Hosts" file is located in the "System folder" by default (and should be
	  located in the System sub-directory to use with MacTCP).
	
	  Mac hosts file format:
	
	  <<Exchange server name>> CNAME <<IP domain name>>
	  <<IP domain name>> A <<corresponding IP address>>
	
	  For Example:
	
	  EXCH1 CNAME exch1.business.com.
	  exch1.business.com. A 157.54.16.157
	
	  NOTE: If the Exchange Server name resolves to a name other than the name in
	  the hosts file, change the Exchange Server name in the hosts file to match
	  the resolved name. If the user is not sure about the Internet Protocol (IP)
	  domain name, they can run IPConfig at a command prompt on the server and find
	  the domain suffix. The IP domain name should consist of the server name with
	  the domain suffix (as in the example above). All domain names should end with
	  a period (or dot).
	   - Using the earlier example, create hosts files.
	
	   - Navigate to Apple (menu), Control Panels, and then TCP/IP
	
	   - Navigate to Edit (menu), and then User Mode. Select Advanced, and click
	     OK.
	
	   - Click "Select Hosts File"; highlight the hosts file already created, and
	     then click Open.
	
	   - Close the TCP/IP Control Panel, and then click Save when prompted.
	
	   - Restart the computer.
	
	
	MORE INFORMATION
	================
	
	- Microsoft Exchange uses name resolution to check the name.
	
	- Microsoft recommends you use the DNS setup instead of a local Hosts file for
	  ease of administration, setup, and troubleshooting.
	
	NOTE: Apple File Protocol defaults to port 548.
	
	
	Additional query words: MacTCP IP TCP/IP DNS networking problems Mac Client TCPIP exclnfaq outlook ol97 ol98
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : :4.0,5.0
	
	=============================================================================
	
