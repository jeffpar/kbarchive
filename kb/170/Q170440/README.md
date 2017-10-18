---
layout: page
title: "Q170440: SMS: Remote Controlling a Multihomed Windows NT Client Computer"
permalink: kb/170/Q170440/
---

## Q170440: SMS: Remote Controlling a Multihomed Windows NT Client Computer

	Article: Q170440
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some situations, it may be difficult to establish a Remote Control session
	with a Windows NT system that contains more than one network adapter. These
	multihomed systems add a certain degree of complexity to the process required to
	establish a remote control session.
	
	Please note that Microsoft is working to develop solutions to the variety of
	issues that result from the added complexity of multihomed systems. In some
	cases, hotfixes have been developed to resolve these issues. The workarounds
	described in this article should be tried as a last resort.
	
	On multihomed systems, it is not uncommon for the Systems Management Server
	Remote Control agent to "listen" on a IP address that is different from the IP
	address that was reported in the Systems Management Server inventory. When this
	occurs, an attempt to establish a remote control session may fail with the
	following message:
	
	  Unable to locate <machine name>.
	
	To establish any remote control session, it is necessary for the Remote Control
	agent (Wuser32.exe) to listen on one of the "network paths" that the Systems
	Management Server Administrator program will attempt to use. To achieve this,
	you can either make changes to the way the Remote Control agent functions
	(client side) or make changes in the way that the Administrator program locates
	the client (administrator side).
	
	The actual change that you should make depends on the network environment and the
	configuration of the client you are attempting to remote control.
	
	WORKAROUND
	==========
	
	To work around these problems, try any one of the following (each workaround is
	described in more detail below):
	
	- Apply Systems Management Server 1.2 Service Pack 3.
	
	- Configure the Remote Control agent to use a NetBIOS session.
	
	- Manually override the IP address reported by the Systems Management Server
	  inventory.
	
	Apply Systems Management Server 1.2 Service Pack 3
	--------------------------------------------------
	
	Systems Management Server 1.2 Service Pack 3 contains an enhancement that allows
	the Administrator program to perform NetBIOS name resolution to locate the
	Systems Management Server client if the IP address in the Systems Management
	Server database fails to locate the client successfully. Try installing the
	service back before attempting the other workarounds.
	
	In a situation where the IP address in the database fails to successfully
	establish a remote control session, the Administrator program will query on the
	NetBIOS name registered by the Remote Control agent. This name appears as
	"machine name <43h>" in the WINS database.
	
	To gain this functionality, you must run the service pack setup on the same
	system that is running the Administrator utility. Doing this updates the Systems
	Management Server Administrator program on that system.
	
	Configure the Remote Control Agent to Use a NetBIOS Session
	-----------------------------------------------------------
	
	By default, the Remote Control agent is configured to use IP sockets for a remote
	control session. You can use the Administrator program to configure this
	site-wide setting. To view these settings, open the Site Properties window,
	click Clients, and then click Options.
	
	NOTE: You must upgrade the Systems Management Server client on computers running
	Windows NT to propagate any changes made to the Remote Troubleshooting Options
	screen. You can do this by running Upgrade.bat from the SMS_SHR share on a
	Systems Management Server logon server.
	
	It is possible to override these site-wide settings on a per-client basis by
	changing a registry value on the client you are attempting to remote control.
	Before changing this value, it is necessary to determine which Lana number (a
	NetBIOS network path) would be suitable for a Remote Control session.
	
	I. View the Lana numbers defined on the client computer running Windows NT.
	
	1. Open Control Panel Network.
	
	2. From the installed services, select the NetBIOS Interface, and then click
	  Properties.
	
	From the list of defined Lana numbers, you may see something like "NetBT - >
	El90x -> El90x1" defined for Lana 0. This can be interpreted as NetBIOS
	encapsulated in TCP/IP over the Ethernet adapter. This is normally the most
	desirable choice for a remote control session. As long as a name resolution
	method (such as WINS) is being used in the network environment, this is a
	reliable choice.
	
	  NetBT = NetBIOS encapsulated in TCP/IP
	  NwlnkNB = NetBIOS encapsulated in IPX
	  NBF = NetBIOS encapsulated in NetBEUI
	
	For systems that use a dial-up connection as well, other Lana numbers may appear
	something like "NetBT -> NdisWan4".
	
	II. Configure the Remote Control agent to listen on a specific Lana number.
	
	1. Open the Registry Editor (Regedt32.exe) and find the following registry key:
	
	        HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client Services
	        \Remote Control\Parameters
	
	2. Change the "CommandLine" value from "-IP" (IP Sockets) to "-L0" (Lana 0). To
	  permanently override the site-wide setting, set the "Override Site
	  CommandLine" value under the Remote Control key to a value of "1" as well.
	  This ensures that the CommandLine value is not overwritten if the Systems
	  Management Server client components are ever upgraded.
	
	NOTE: Another option would be to set the CommandLine value to "-IPX". This forces
	a remote control to occur over NWLink IPX/SPX Compatible Transport.
	
	Manually Override the IP Address Reported by the SMS Inventory
	--------------------------------------------------------------
	
	In some situations where it is absolutely necessary to establish a remote control
	session over IP sockets, it is possible to replace the IP address normally
	inventoried by Systems Management Server with the one that the remote control
	agent is listening on.
	
	I. Determine which IP address the Remote Control agent is listening on.
	
	1. At the Systems Management Server client, start the Help Desk Options utility.
	  You will see the following message at the bottom of the window:
	
	  WUSER is listening on TCP/IP address xxx.xxx.xxx.xxx
	
	2. Verify that this is NOT the IP address that is recorded in the Systems
	  Management Server database for this client. If it is, no further action is
	  required.
	
	3. Cut and paste the following text into a Notepad text file. The file should
	  begin with the "Start Component" statement on the first line and end with
	  "End Component" on the last line.
	
	           Start Component
	              Name = "Machine"
	              Start Group
	                 Name = "Network"
	                 ID = 1
	                 Class = "MICROSOFT|NETWORK|1.0"
	                 Start Attribute
	                    Name = "Network Active"
	                    ID = 1
	                    Access = READ-ONLY
	                    Storage = SPECIFIC
	                    Type = Int
	                    Value = 1
	                 End Attribute
	                 Start Attribute
	                    Name = "Major Version"
	                    ID = 2
	                    Access = READ-ONLY
	                    Storage = COMMON
	                    Type = Int
	                    Value = 3
	                 End Attribute
	                 Start Attribute
	                    Name = "Minor Version"
	                    ID = 3
	                    Access = READ-ONLY
	                    Storage = COMMON
	                    Type = Int
	                    Value = 5
	                 End Attribute
	                 Start Attribute
	                    Name = "Network Type"
	                    ID = 4
	                    Access = READ-ONLY
	                    Storage = COMMON
	                    Type = String(64)
	                    Value = "Microsoft Windows Network"
	                 End Attribute
	                 Start Attribute
	                    Name = "IPX Address"
	                    ID = 5
	                    Access = READ-ONLY
	                    Storage = SPECIFIC
	                    Type = String(24)
	                    Value = "[IPX address]"
	                 End Attribute
	                 Start Attribute
	                    Name = "IP Address"
	                    ID = 6
	                    Access = READ-ONLY
	                    Storage = SPECIFIC
	                    Type = String(20)
	                    Value = "[IP address]"
	                 End Attribute
	                 Start Attribute
	                    Name = "Subnet Mask"
	                    ID = 7
	                    Access = READ-ONLY
	                    Storage = COMMON
	                    Type = String(16)
	                    Value = "[subnet mask]"
	                 End Attribute
	                 Start Attribute
	                    Name = "Default Gateway"
	                    ID = 8
	                    Access = READ-ONLY
	                    Storage = COMMON
	                    Type = String(16)
	                    Value = "[default gateway]"
	                 End Attribute
	                 Start Attribute
	                    Name = "DNS Machine Name"
	                    ID = 9
	                    Access = READ-ONLY
	                    Storage = COMMON
	                    Type = String(128)
	                    Value = "[DNS name]"
	                 End Attribute
	                 Start Attribute
	                    Name = "LogOn Name"
	                    ID = 10
	                    Access = READ-ONLY
	                    Storage = COMMON
	                    Type = String(48)
	                    Value = "[logon name]"
	                 End Attribute
	              End Group
	           End Component
	
	4. Enter the correct values for all of the attributes. Remove all the brackets
	  from inside the double quotation marks. For example, the IP Address value
	  should look something like:
	
	  Value = "123.45.67.89"
	
	  NOTE: If any of the defined attributes are removed from this file, its
	  corresponding value in the Systems Management Server database will appear as
	  "null".
	
	5. Save the file with the name Network.mif (the name is flexible, but it must
	  end with a .mif extension).
	
	6. Copy the Network.mif file to the Ms\Sms\Noidmifs directory on the client
	  computer.
	
	The next time this server is inventoried, this Noidmif file will be appended to
	its normal inventory and will override the IP address that is normally
	collected. This should allow a remote control session to be established.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Systems Management Server version 1.2. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
