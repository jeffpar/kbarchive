---
layout: page
title: "Q162544: Troubleshooting Remote Function of Exchange and Schedule+"
permalink: /kb/162/Q162544/
---

## Q162544: Troubleshooting Remote Function of Exchange and Schedule+

{% raw %}

	Article: Q162544
	Product(s): Microsoft Exchange
	Version(s): MS-DOS:4.0; WINDOWS:4.0,97,98; winnt:5.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbusage exc5
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses troubleshooting steps for remote issues in the Microsoft
	Exchange Client and Schedule+.
	
	Table of Contents
	-----------------
	
	1. Introduction
	
	2. Types of Users
	
	3. Using Specific Remote Protocols
	
	4. Modes of Operation
	
	5. Dial-Up Networking Solutions for Each Operating System
	
	6. Microsoft Schedule+
	
	7. Deliver Now
	
	8. Remote Support for the Microsoft Exchange Macintosh client
	
	9. Outlook and the Microsoft Exchange client, version 5.0
	
	10. Specific Windows 95 Remote Considerations
	
	11. References
	
	Introduction
	------------
	
	This article discusses troubleshooting remote functionality in Microsoft Exchange
	Clients and Schedule+. A user is considered remote if something other than a
	physical network interface card (NIC) is being used to access Microsoft Exchange
	Server (in most cases this means a modem is being used, but ISDN and wireless
	solutions would also fall into this category).
	
	The Exchange Client provides a number of slow-link optimizations, including the
	ability to work offline. Users can download all of their mail or selectively
	download items using the Remote Mail window, which lists only preview header
	information for each message. In addition, users can choose to have only
	important messages downloaded over the modem and download the other messages
	when a LAN connection is available. Also available in the Remote Mail window is
	the ability to set up scheduled connections that can remotely connect to an
	Exchange Server computer at a pre-set time, download new mail, and disconnect
	automatically.
	
	Before you set up or test any Exchange Server remote functionality, set up a
	persistent connection scenario. This quickly helps determine if the problem is
	an underlying remote transport issue (RAS/DUN/Shiva/and so forth), or a problem
	with something in the Exchange Client (configuration, OST, PST problems, and so
	forth).
	
	If it is determined that there are problems just connecting outside of Exchange
	Server, contact the support group that handles the underlying transport before
	you continue with Exchange Client troubleshooting. For Windows 95, the transport
	is DUN, for Windows NT it is RAS, for Windows 3.x, it is Shiva. For additional
	information about Shiva, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q158124 XCLN: ShivaRemote with Exchange - RAS Considerations
	
	Types of Users
	--------------
	
	Before you configure Exchange Server to allow remote access to mail, determine
	the type or types of users in your organization. This information helps
	determine how you configure Exchange Server.
	
	Users typically fall into one of the following categories:
	
	- Laptop User: Typically works both from the office LAN (docked when at the
	  office) and when away from the office, dials into the corporate network using
	  the same computer.
	
	- Desktop Home User: Works mostly from home but, when in the office, may log
	  into the corporate network using a different computer.
	
	- Roving User: Uses either multiple computers at the office and/or one computer
	  at the office and a laptop when on the road.
	
	- Hybrid User: A combination of two or more of the above.
	
	Using Specific Remote Protocols
	-------------------------------
	
	NOTE: Because of the way named pipes passes the Windows logon credentials to
	Exchange Server for troubleshooting purposes, it is recommended that you remove
	named pipes from the Exchange Server binding order. For additional information,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q146188 XCLN: Use Network Security Option not Working as Expected
	
	NetBEUI:
	
	NetBEUI is not routable. Therefore, the Primary Domain Controller (PDC), RAS
	server, and the computer running Exchange Server must all be located on the same
	network segment for the Exchange Client to connect over DUN with NetBEUI (only).
	If the PDC, RAS server, and the computer running Exchange Server are one and the
	same, NetBEUI is the best option.
	
	Possible Exchange Server RPC bindings:
	
	  Ncacn_nb_nb
	  Netbios
	  ncacn_np
	
	TCP/IP:
	
	The IP addresses of both the PDC and the computer running Exchange Server must
	resolve over IP. After you connect by using DUN, attempt to ping the machine
	name of the PDC and the computer running Exchange Server. If pinging the machine
	name is unsuccessful, add the entries to the local Hosts file as a test.
	
	Possible Exchange Server RPC bindings:
	
	  ncacn_ip_tcp
	  netbios
	  ncacn_np
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q108295 TCP/IP Name Resolution
	
	IPX/SPX:
	
	For the Exchange Client to connect over IPX/SPX, there must be a Novell Server OR
	File and Print Services for NetWare must be installed on a computer running
	Windows NT Server to respond to the "find_nearest_server" query.
	
	Possible RPC bindings:
	
	  Ncacn_spx,
	  ncacn_np (under Windows 95 only)
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q163329 Fatal Exception 0E in WSIPX Using Windows Sockets Program
	
	  Q162010 XCLN: Exchange Server Name Resolution on a Novell Network
	
	  Q164848 XCLN: Transmitting Over SPX via Dialup Connection
	
	Modes of Operation
	------------------
	
	Two basic modes of operation are available for the remote use of Exchange
	Clients: a batch connection and a persistent (continuous) connection.
	
	Batch Mode:
	
	Batch mode is useful for those users who either want to minimize phone connect
	time charges or work with the Exchange Client when it is disconnected from the
	network (for example, when the users are away from a LAN connection or flying on
	a plane).
	
	The Exchange Client and the Outlook client offer two solutions for mobile
	computing: remote mail (downloading headers only and then selecting messages)
	and offline folders. The Remote Mail feature is available for use with most
	services, and offline folders are available ONLY for use with the Exchange
	Server service.
	
	Persistent Connection:
	
	Establishing a persistent connection remotely simply means that you connect FIRST
	with RAS/DUN or Shiva (for Windows NT, Windows 95, and Windows 3.x
	respectively), and then you start the Exchange Client in Online mode over this
	connection, exactly as if it were on the LAN.
	
	In the persistent connection scenario, the Exchange Client reacts exactly as if
	it is connected over an NIC. Deal with error messages that appear during the
	initial modem connection BEFORE you troubleshoot any Exchange Server
	remote-specific problems.
	
	To test a persistent connection by accessing Exchange Server remotely:
	
	1. Dial and connect with the underlying transport (RAS, DUN, Shiva, and so
	  forth).
	
	2. Create a new Exchange Server profile:
	
	  a. In Control Panel, double-click Mail, and then click Add.
	
	  b. Add ONLY the Exchange Server Service.
	
	  c. When you are prompted "Do you travel with this computer?" click No.
	
	  d. Finish creating the profile.
	
	  e. Set this newly created profile as the default profile.
	
	Some troubleshooting steps for persistent connection problems are:
	
	- Switch to a different protocol for testing.
	
	- Change the RPC binding order for Exchange Server.
	
	- Use utilities like Ping or "net use" to ensure that there is a valid
	  connection after you dial the connection.
	
	- Dial in to a different RAS Server (device) to ensure that the problem is not
	  on the RAS server.
	
	The following Microsoft Knowledge Base articles may also be helpful if the
	Microsoft Exchange Client stops responding over a persistent connection:
	
	  Q155048 Troubleshooting Startup of Windows Client
	
	  Q161468 Troubleshooting Client Memory Issues on Windows 3.x
	
	  Q136516 Improving Windows Client Startup Times
	
	  Q161626 Troubleshooting IPX/SPX Connections
	
	  Q163576 Changing the RPC Binding Order
	
	NOTE: Remember that when you troubleshoot any Exchange Client remote issues, you
	must always test with the persistent connection method FIRST.
	
	If you want both Exchange Client and Schedule+ to behave exactly as they do on a
	LAN, you need to use a persistent connection. However, because the dial-up
	connection must be connected the entire time that Exchange Client and Schedule+
	are in use, the persistent connection is not a good idea when connection time
	charges are a concern.
	
	Remote Mail:
	
	Remote mail enables you to connect remotely to your mail service. You can use it
	with Internet Mail, Microsoft Mail, Exchange Server, and some online services.
	One notable service that does not support remote mail (with Outlook) is the
	cc:Mail service that ships with the Microsoft Office 97 ValuPack.
	
	The purpose of remote mail is to allow absolutely minimal total connection time.
	Initially, remote mail connects and downloads only the message headers for
	display in the mail preview window. Then specific messages can be marked for
	full retrieval (either by leaving a copy on the server (mark to retrieve a copy)
	or by downloading the message locally (mark to retrieve).
	
	Calendar appointments, contacts, and other private folder information (except for
	the Inbox) are not available by means of remote mail. This means that if there
	are server-based rules that move messages to other private folders, these
	messages are not retrievable using the remote mail option.
	
	If you want to access information in folders other than the Inbox (public
	folders, other private folders, calendar information in the case of Outlook, and
	so on), use offline folders OR a persistent connection.
	
	NOTE: For remote mail to work properly, a local personal store file (PST file)
	must be present and delivery in the properties for Exchange Server must be set
	to the PST file. If delivery is not set to a PST file, the Mark to Retrieve
	option, which removes the mail from the server, leaves a copy on the server
	instead.
	
	To set up a profile for use with remote mail:
	
	1. Test the persistent connection scenario as outlined above.
	
	2. Add a personal folder to the existing profile; in Control Panel, double-click
	  Mail, click Properties for the profile, click Add, and then click Personal
	  Folders.
	
	3. Click the Delivery tab, and in the Deliver New Mail to the Following Location
	  box, type the name of the PST that was just added.
	
	4. In the Properties for Microsoft Exchange Server, click "Choose Connection
	  Type when Starting".
	
	5. Start the client offline. On the Tools menu, click Remote Mail. In the Remote
	  Mail window, click Connect.
	
	6. Headers are downloaded into the remote window. Click to select either the
	  "Mark to Retrieve" or "Mark to Retrieve a Copy" check box (this option leaves
	  a copy on the server).
	
	7. After the appropriate messages have been selected, click Connect again.
	
	8. Close the Remote Preview window, and the marked messages now appear in the
	  Inbox of the Exchange Client.
	
	  NOTE: This process can be automated somewhat by using the Remote Mail tab in
	  the properties of the profile.
	
	Considerations for using remote mail:
	
	- Use in conjunction with a PST file.
	
	- If connection time charges are high you may want to use remote mail.
	
	- Remote mail is also used for remote access with services other than those in
	  Exchange Server, for example, Microsoft Mail, Internet Mail, and so on.
	
	- If you only need access to the Inbox folder, use remote mail.
	
	Offline Folders:
	
	Offline Folders (OST files) are the recommended setup option for users who use
	the Exchange Server service. Offline folders are not an option for people who
	use the Internet service, Microsoft Mail, or other online information services.
	The OST keeps a replica of all of the folders (public or private) on the server
	that have been marked to be available when both online and offline (by default
	these are the Inbox, Sent Items, Deleted Items, and Outbox).
	
	Offline folders allow a laptop user, for instance, to synchronize all folders
	prior to leaving the office (while still connected with a fast LAN connection),
	then reply, delete, and compose new mail while flying to the new destination,
	then synchronize the folders by means of a modem when the laptop user reaches
	the destination (or wait until the user returns to the office to synchronize
	folders).
	
	For additional information about offline folders, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q161725 OL97: What Are Offline Folders and How Do You Use Them?
	
	  Q161889 XCLN: OST and PST Quick Reference
	
	Offline folders are the best option if:
	
	- The Exchange Server service is being used.
	
	- You need public folder information when you work offline.
	
	- Ease of use is a priority.
	
	NOTE: Create an OST either by answering YES to 'do you travel with this computer'
	in the profile wizard, OR by clicking Offline Folder file settings in the
	Advanced tab of the properties for Exchange Server. Note that you MUST
	synchronize a new OST one time before you can use that OST (in other words,
	start the Exchange Client OFFLINE). If you only have access to Exchange Server
	by means of a modem, you must follow the steps for a persistent connection
	first, and then synchronize the folders to make the OST useable.
	
	NOTE: If you start the Exchange Client online, the client automatically
	synchronizes only the folder hierarchy (just the folder names themselves) and
	then sends any mail that was left in the Outbox when you were offline. Outlook
	has an option to "synchronize folders on exit" - the Exchange Client does not.
	The preview pane does have some OST features that some users may find useful.
	For instance, you can set a schedule to dial every hour to synchronize folders.
	
	Dial-Up Networking Solutions for Each Operating System
	------------------------------------------------------
	
	MS-DOS:
	
	Use Shiva Remote version 3.59 from Exchange Client.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q158074 XCLN: Using ShivaRemote w/ Exchange (MS-DOS/Real-Mode IPX)
	
	  Q157740 XCLN: Using ShivaRemote w/ Exchange (MS-DOS/LanMan TCP/IP)
	
	Windows 3.x, Windows for Workgroups 3.1x:
	
	Use Shiva Remote version 3.59 from Exchange Client.
	
	NOTE: For laptop users who want to be docked and undocked (require multiple
	NICs), use Windows 95 or Windows NT so that you can use multiple hardware
	profiles.
	
	NOTE: The version of Remote Access Service (RAS) that ships with Windows for
	Workgroups can be used to access a computer running Exchange Server; however,
	the remote mail features of Exchange Server (offline folders and remote mail)
	cannot be used with Windows for Workgroups RAS (Windows for Workgroups RAS does
	not support the APIs necessary for remote mail). Also, if you use Windows for
	Workgroups RAS, you must first make a connection with Windows for Workgroups RAS
	before you start the Exchange Client.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q158124 XCLN: ShivaRemote with Exchange - RAS Considerations
	
	  Q158095 XCLN: Using ShivaRemote with Exchange (Win 3.x/LanMan NetBEUI)
	
	  Q158077 XCLN: Using ShivaRemote w/ Exchange (Windows 3.x/Real-Mode IPX)
	
	  Q158111 XCLN: ShivaRemote with Exchange (WFW 3.11/WFW TCP/IP or NetBEUI)
	
	Windows 95:
	
	Use Microsoft Dial-up Networking (DUN) (included with the operating system).
	
	
	Windows NT Server:
	
	Use Microsoft remote access service (RAS) (included with the operating system).
	
	
	Microsoft Schedule+
	-------------------
	
	Schedule+ has two modes of operation: offline and group-enabled mode.
	
	Group-enabled mode requires a persistent (continuous) connection to the computer
	running Exchange Server, (either on the LAN or with a persistent connection over
	a modem). If a local .scd file is present, synchronization is performed
	automatically by default every 15 minutes, or it can be performed manually (In
	Schedule+, on the Tools menu, click Options, and then click Synchronize). Only
	changes are sent over the wire during the synchronization process.
	
	In Offline mode you work directly from the local .scd file. Free and busy time is
	not available to users offline, and it is stored in a hidden public folder on
	the computer running Exchange Server. If you start Schedule + offline,
	synchronization cannot take place. You must quit and log off Schedule +,
	establish a dial-in connection, and then start Schedule+ ONLINE to synchronize
	the local .scd file with the server.
	
	One of the major remote improvements in Microsoft Outlook is the Calendar. The
	Outlook Calendar is now simply another folder. Because of this, you can set it
	up to be synchronized with an offline folder, like any other private or public
	folder. This makes synchronizing all of the data extremely easy.
	
	NOTE: Whenever you start Schedule+ offline OR if problems prevent Schedule+ from
	contacting the computer running Exchange Server, the "work primarily from local
	file" check box is automatically selected and will remain selected until it is
	manually cleared. Even if you start Schedule+ ONLINE, the local .scd file is
	still displayed (which may not yet be synchronized).
	
	Deliver Now
	-----------
	
	On the Tools menu, if you click Deliver Now, you download all of the new mail to
	the Inbox and send any mail currently queued in the Outbox. The Deliver Now
	command does NOT synchronize folders and is not nearly as efficient for use with
	an OST as the Sync All/This Folder command. In fact, if delivery of mail is set
	to an OST (instead of a PST), Deliver Now re-counts all of the messages in the
	Inbox, even though they have already been downloaded; this can be time
	consuming.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q165113 XCLN: Deliver Now from Client Counts Every Message
	
	The Deliver Now command is appropriate if an Exchange Server profile has multiple
	services and you want to force delivery through a specific service, for example,
	fax or MSN.
	
	If offline folders (OST) are being used, educated users about how to use the
	"sync all/this folder(s)" option and not use the deliver now feature.
	
	Remote Support for the Microsoft Exchange Macintosh Client
	----------------------------------------------------------
	
	The general conditions for dial-up access on an Exchange Macintosh client are:
	
	TCP/IP:
	
	1. The user must have valid TCP/IP set up on Macintosh. To facilitate name
	  resolution, the network must have either Hosts files for each Macintosh or
	  DNS servers.
	
	  NOTE: DHCP is supported by Open Transport for dynamic IP addressing only; it
	  does not support WINS name resolution, hence the need for DNS servers. It is
	  strongly recommended that you use the latest versions of Open Transport on
	  the Macintosh, MacOS 7.5.3 or later.
	
	2. Connection must be established independently of Exchange Macintosh client.
	  This is different than the Exchange Windows client that can automatically
	  dial for you (on the Tools menu, click Sync Folders, or on the Remote Mail
	  menu, click Connect). In other words, Macintosh "remote" support only works
	  with the "persistent connection" scenario outlined above).
	
	3. You must be able to ping servers by name (this is critical), including any
	  public folder servers. (Remember, these are often separately named servers
	  that you do not see.)
	
	If any of the above conditions do not exist, the Exchange Client is unable to
	connect.
	
	Appletalk:
	
	1. Connection must be established independently of Exchange Client (a persistent
	  connection must be established, as outlined above).
	
	2. You must be able to see Exchange Server (and public folder servers) in the
	  Chooser.
	
	Outlook and the Microsoft Exchange Client, version  5.0
	-------------------------------------------------------
	
	There are no major changes to Exchange Client version 5.0 in the way remote users
	configure and use Exchange Client and Schedule+ remotely.
	
	Outlook does have some major enhancements that can make remote operation easier
	for users who need remote access to mail, calendar, and contact information.
	Because the new Outlook Calendar and contact list are simply folders, they too
	can be marked as available when online and offline and synchronized to the OST
	(offline folder). The Outlook client does not have a separate "preview" window
	for retrieving remote mail as Exchange Client does; instead it is integrated
	into the Inbox itself.
	
	Specific Windows 95 Remote Considerations
	-----------------------------------------
	
	Under Windows 95, if an NIC driver is loaded in addition to the dial- up adapter
	in Control Panel Network, either remove the NIC driver or set up an additional
	hardware profile for remote use.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q141600 How to Manually Create Hardware Profiles for Laptop Computers
	
	Update to Windows 95 Service Pack 1 and download the Windows 95 Password List
	Update to repair the existing PWL file. can be downloaded The update
	Mspwlupd.exe from the following location:
	
	  http://www.microsoft.com/windows95/downloads/contents/wurecommended/s_wuservicepacks/w95password/default.asp
	
	Ensure "Log On to Windows NT Domain" is selected in the properties for Client for
	Microsoft Networks in Control Panel Networks.
	
	References
	----------
	
	The following additional Microsoft Knowledge Base articles may be helpful with
	Microsoft Exchange client and Schedule+ remote issues:
	
	  Q154607 XCLN: Folder Deleted From Offline Store Removes Online Folder
	
	  Q154607 Folder Deleted From Offline Store Removes Online Folder
	
	  Q152983 XCLN: Win95 Client Can't Send Fax When Offline Using .OST
	
	  Q152865 XCLN: Last Update Time not Saved Using Remote Mail
	
	  Q152722 XCLN: ErrMsg: Need Additional Space to Complete This Operation
	
	  Q148493 XCLN: How to Change Location of Offline Address Book Files
	
	  Q146566 XCLN: Info Available from the Exchange Offline Address Book
	
	  Q146436 XCLN: Offline Address Book Files Not Removed w/ Remove All
	
	  Q146186 XCLN: Delayed Action Message Rules Don't Work With Remote
	
	  Q145965 XCLN: Remote Mail 3.x Client Uses All Processor Time
	
	  Q157079 XCLN: How to Move the Location of an OST File
	
	  Q158295 XCLN: Remote Mail: The Mail Headers Could Not Be Displayed
	
	  Q163589 XCLN: Restoring from an OST after Deleting the Mailbox
	
	  Q165327 XCLN: Replacing a Damaged Offline Folder (OST)
	
	  Q236111 XCLN: Client Unable to Change Windows NT Password
	
	Additional query words: exfaqclnt exclnfaqold
	
	======================================================================
	Keywords          : kbenv kbsetup kbusage exc5 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : MS-DOS:4.0; WINDOWS:4.0,97,98; winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
