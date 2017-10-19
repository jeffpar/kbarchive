---
layout: page
title: "Q255991: XCON: How to Configure an X.400 Connector with RRAS over TCP/IP"
permalink: /kb/255/Q255991/
---

## Q255991: XCON: How to Configure an X.400 Connector with RRAS over TCP/IP

	Article: Q255991
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure that you understand how to restore it if
	a problem occurs. For information about how to do this, see the "Restoring the
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic
	in Regedt32.exe.
	
	SUMMARY
	=======
	
	To properly configure the X.400 connector to send mail via a Routing and Remote
	Access Server (RRAS) link, you must complete the following steps:
	
	- Configure the Demand Dial Interfaces using the provided wizard.
	
	- Create the static route.
	
	- Decide upon the TCP/IP networks you will use for the RAS pool.
	
	- Configure the X.400 connector.
	
	MORE INFORMATION
	================
	
	Complete the following steps on both servers.
	
	Step One: Configure the Demand Dial Interface (DDI)
	---------------------------------------------------
	
	1. Open the Routing and RAS Administrator.
	
	2. Right-click "LAN and Demand Dial Interfaces".
	
	3. Click Add New Interface. "Confirm that Use Demand Dial Wizard" check box is
	  selected.
	
	4. Select a name for the Demand Dial Interfaces (DDI). This will be the same
	  name used for the interface on the other side of the RRAS link.
	
	5. Click to select the following check boxes on the next dialog box:
	
	   - Route IP Packets on this interface
	
	   - Add a user account so a remote router can dial in
	
	   - Authenticate remote router when dialing out
	
	6. Enter the phone number for the remote server.
	
	7. Enter the credentials that this interface will use to authenticate when
	  dialing the remote server. These credentials must match the credentials
	  configured on the remote server.
	
	8. Set the credentials that the remote server will use to authenticate when it
	  dials this server.
	
	  For simplicity's sake, the credentials on both domains should have the same
	  name and password. Also, the user name will be the same as the name used for
	  the DDI.
	
	9. Click Finish to configure the interface.
	
	Step Two: Create the Static Route
	---------------------------------
	
	1. Open the Routing and RRAS Administrator.
	
	2. Expand IP Routing.
	
	3. Right-click Static Routes and click Add Static Route.
	
	4. Enter the following values:
	
	   - Destination: The Network ID for the remote server. For example, if the
	     remote server's NIC IP address is 192.168.100.15, the Network ID will be
	     192.168.100.0.
	
	   - Subnet Mask: 255.255.255.0
	
	   - Gateway: 1.1.1.1
	
	   - Interface: Select the DDI previously configured.
	
	Step Three: Configure the RAS Pool
	----------------------------------
	
	1. Open the Network tool in Control Panel and click the Services tab.
	
	2. Double-click "Routing and Remote Access".
	
	3. Click Network, and then click the Configure button next to the TCP/IP check
	  box.
	
	4. Click "Use static address pool" and type the network ID and subnet mask. A
	  good choice is a network address from the 192.168.0.0 private range. One
	  example would be 192.168.1.0 with a mask of 255.255.255.248. This would give
	  you 5 addresses for clients. For this scenario, only one client address is
	  required. If you require more, just adjust the last octet of the subnet mask.
	  A subnet mask of 255.255.255.0 would provide a pool of 253 client addresses.
	
	5. Click OK to save your changes and restart the server when prompted.
	
	Step Four: Configure the X.400 Connector
	----------------------------------------
	
	All settings for the X.400 connector are the same when connecting by RRAS instead
	of by LAN, except for the following:
	
	1. Use the IP address for the remote server on the Stack tab.
	
	2. Change the default settings for the following fields on the Override tab of
	  the connector.
	
	   - Checkpoint Size - 15
	
	   - Recovery Timeout - 30
	
	   - Max Open Retries - 7
	
	   - Open Interval - 120
	
	   - Lifetime 15
	
	   - Disconnect 15
	
	3. When RRAS is installed on a server, it is, in effect, dual-homed. If RRAS
	  and Exchange Server are on the same server you must add the following
	  registry setting so that the message transfer agent (MTA) specifies which IP
	  address the lower
	  layers of the IP Stack are to use as the destination address.
	
	  Without this registry setting, it is possible that the IP address of the
	  WAN-wrapper is what will be used as the destination address. In that case,
	  the X.400 connector on the remote server will compare the IP address it is
	  receiving to the one on its Stack tab. These will not match and the
	  association will fail. You will see an Event ID 9301 in the Application Log
	  of the remote server.
	
	  Your Exchange Server computer must have Service Pack 1 installed to
	  configure this setting. Refer to the following Microsoft Knowledge Base
	  article for more information.
	
	  Q197378 XCON: MTA Generates 9301 Events on Incoming Connections
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require that you reinstall your operating system. Microsoft cannot guarantee
	  that problems that result from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, see the "Changing Keys and
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Microsoft recommends that you back up the registry before you
	  edit it. If you are running Windows NT or Windows 2000, Microsoft also
	  recommends that you update your Emergency Repair Disk (ERD).
	
	  a. Start Registry Editor.
	
	  b. Find the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	  c. On the Edit menu, click Add Key, and add the following registry key value,
	     with no entry for class:
	
	  X400ConnectorName
	
	     This is the directory name of the X.400 Connector.
	
	  d. On the Edit menu, click Add Value and add the following value under the
	     key just created.
	
	  Name: Stack IP Address Override
	  Class: REG_SZ:
	  Value: The IP address for the NIC on this server
	
	  The value entered here will match the IP address on the Stack tab of the X.400
	  connector on the remote server. When that MTA compares the IP address in the
	  packet stream with what is on the Stack tab, it will find a match and an
	  association will be established.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
