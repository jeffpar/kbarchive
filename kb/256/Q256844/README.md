---
layout: page
title: "Q256844: XCON: Routing and RAS Connection Doesn't Work with 9301 Warning"
permalink: /kb/256/Q256844/
---

## Q256844: XCON: Routing and RAS Connection Doesn't Work with 9301 Warning

	Article: Q256844
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp1 exc55sp2 exc55sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Exchange Server computer attempts to initiate a Routing and Remote
	Access Service (RAS) connection to another Exchange Server computer, the
	receiving server may refuse the connection and log the following 9301 warning
	
	  The message transfer gateway that uses the network address %2 and the
	  transport stack %1 could not be found. Check the configuration of the mail
	  gateway.
	
	where %2 is the hexadecimal representation of an Internet Protocol (IP) address
	that is pulled from the IP RAS pool on the receiving server.
	
	CAUSE
	=====
	
	This problem can occur because when you use a modem to send a message, the modem
	queries the receiving server to receive an IP address. When you use Routing and
	RAS over X.400, this query causes problems. X.400 compares the IP address of the
	message to the IP address that is displayed in the Stack tab of the connector,
	which is the IP address of the originating server. Because the two IP addresses
	do not match, the connector refuses the connection attempt and generates the
	9301 warning.
	
	RESOLUTION
	==========
	
	Exchange Server 5.5 Service Pack 1 and later versions of Exchange Server allow
	you to define an IP address to use for outbound X.400 connections over Routing
	and RAS. To implement this feature, perform the following steps on the
	originating Routing and RAS Exchange Server computer:
	
	1. Identify the Relative Distinguished Name (RDN) of the X.400 Connector by
	  using the Microsoft Exchange Server Administrator program in raw mode. You
	  need this name to implement the necessary registry modifications on the
	  server:
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	  a. Start the Exchange Server Administrator program in raw mode by typing the
	     following at a command prompt:
	
	  c:\exchsrvr\bin\admin /r
	
	  b. Double-click Site, double-click Configuration, double-click Connectors,
	     and then select the X.400 Connector object in the right pane.
	
	  c. On the File menu, click Raw Properties to open the raw properties of the
	     X.400 Connector.
	
	  d. In the Object Attribute column, click Obj-Dist-Name, and in the Attribute
	     Value box, scroll to the right until you locate the last "cn=" value. This
	     is the RDN that you use to create the registry key name. For example, if
	     the X.400 Connector object is named "TCP to MTA B," the value for the
	     Obj-Dist-Name object attribute is displayed similar to the following:
	
	  /o=Organization/ou=Site/cn=Configuration/cn=Connection/cn=TCP to MTA B
	
	     In this example, the RDN value is "TCP to MTA B." Select this value, and
	     copy the value.
	
	2. Use the RDN value ("TCP to MTA B" in this example) that you copied from the
	  Exchange Server Administrator program in raw mode to create a registry key:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  a. Start Registry Editor (Regedt32.exe).
	
	  b. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	  c. On the Edit menu, click Add Key, and then add a registry key. In the Key
	     Name box, paste the RDN value that you copied from the Exchange Server
	     Administrator program in raw mode, and leave the Class box blank. In this
	     example, the Key Name is "TCP to MTA B."
	
	  d. Select the new registry key. On the Edit menu, click Add Value, and then
	     add the following registry value:
	
	  Value Name: Stack IP Address Override
	  Data Type: REG_SZ
	  Value: The IP address of the originating server, in standard dot notation (for
	  example, 123.123.123.123)
	
	     This IP address is now used as the From IP address when you create a
	     connection to the recipient server.
	
	  e. Quit Registry Editor.
	
	3. Stop and then restart the Exchange Server message transfer agent (MTA)
	  service so that the changes take effect.
	
	Note that these changes are only required for X.400 Connectors that create
	outbound Routing and RAS connections. This change does not affect incoming
	messages.
	
	For additional information and troubleshooting on occurrences of 9301 warnings,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q197378 XCON: MTA generates 9301 Events on Incoming Connections
	
	  Q189345 XCON: MTA Logs Event 9301 Though X.400 Connector is identified
	
	  Q193380 XCON: Mail Does Not Flow over X.400 Connector; Event 9301 Logged
	
	  Q169113 XCON: Using an X.400 Connector with TCP/IP in a Cluster Environment
	
	  Q234962 XCON: Certain Builds of the MTA Do Not Generate 9301 Event ID
	
	Additional query words: XMRP
	
	======================================================================
	Keywords          : exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
