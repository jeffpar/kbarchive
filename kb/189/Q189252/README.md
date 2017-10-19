---
layout: page
title: "Q189252: Close Combat 1.0: Contents of the Network.doc File"
permalink: /kb/189/Q189252/
---

## Q189252: Close Combat 1.0: Contents of the Network.doc File

	Article: Q189252
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbreadme cc kbimu msgame
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for Windows 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains the contents of the Network.doc file located in the root
	folder of the Close Combat for Windows CD-ROM.
	
	MORE INFORMATION
	================
	
	Playing Microsoft Close Combat Head-to-Head
	-------------------------------------------
	
	Head-to-head play in Close Combat utilizes TCP/IP. If two players can "see" each
	other via a TCP/IP connection (LAN, Internet, PPP, SLIP, etc.) then those two
	players can play Head-to-Head with Close Combat.
	
	To play a two-player game in Close Combat you must have either a modem, to play
	via serial or Internet connection; or a network card to play via a network.
	
	If you're playing over the Internet, you need to know your or your opponent's IP
	address when playing in two-player mode. To find out what your IP address is,
	see the section later in this document that pertains to your networking
	software.
	
	Contact your Internet Service Provider for further instructions on how to install
	the appropriate TCP/IP software in order to use your modem to connect to the
	Internet.
	
	Confirming Your IP Address
	--------------------------
	
	When you start Close Combat and click on the two-player button, a screen will
	appear that displays your IP Address. This is your current IP address that your
	opponent can use to establish a connection with you. To exchange your IP
	addresses, you need to use IRC (Internet Relay Chat) or some other Internet
	communication software in order to communicate your address to another
	individual.
	
	NOTE: The IP addresses often change each time you call up and connect to the
	Internet. So you need to stay connected to the Internet once you have your IP
	address and want to give it to someone else. In most cases you cannot, for
	example, connect, get your IP address, disconnect, call them with the IP
	address, and then reconnect.
	
	Confirming that You Can "See" the Other Player
	----------------------------------------------
	
	On the Start Menu in Windows 95 select Programs and MS-DOS Prompt. Find out the
	other player's IP address, and type the following at the MS-DOS Command Prompt:
	
	  ping <address>
	
	where <address> is the other player's IP address. If packets are returned
	from the other player's computer but you still cannot start a head-to-head game
	in Close Combat, contact your Network provider.
	
	Using Winipcfg to Review Your IP Address
	----------------------------------------
	
	Using the Winipcfg tool to review your current TCP/IP network protocol settings.
	This can be useful when you are troubleshooting problems, such as problems
	connecting to your Internet provider.
	
	To view your current TCP/IP settings using Winipcfg, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. Type the following line in the Open box, and then click OK:
	
	  winipcfg
	
	Your current TCP/IP settings are displayed. To view additional information, click
	More Info.
	
	NOTE: The settings in the Winipcfg display are not updated dynamically. To view
	changes, quit Winipcfg and then run it again.
	
	If your IP address was dynamically allocated by a Dynamic Host Configuration
	Protocol (DHCP) server, you can use the Release and Renew buttons to release and
	renew the IP address.
	
	If Your IP Address Is Not Displayed:
	
	If an IP address is not being displayed, then you do not have access to the
	Internet and cannot play Close Combat in two-player mode.
	
	To configure Dial-Up Networking to work with an Internet service provider, you
	must obtain the following information from the service provider:
	
	- User name
	- Password
	- Access phone number
	- Required protocol
	- Host and domain name
	- DNS (Domain Name Server) if you are using an IP address
	- Logon procedure
	
	If the Internet service provider requires that you use a dedicated static IP
	address each time you log on, you also need the following information:
	
	- Your IP address
	- Subnet mask (optional)
	- IP address for the default gateway (optional)
	
	NOTE: Not all Internet service providers require all of this information.
	
	Setting Up the Dial-Up Adapter
	------------------------------
	
	Confirm that the TCP/IP protocol is installed for the adapter you use to connect
	to the Internet. In most cases, this is the Dial-Up Networking Adapter. To do
	this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. In the list of installed network components, verify that the TCP/IP protocol
	  for the adapter you use to access the Internet (for example, TCP/IP ->
	  Dial-Up Adapter) is present.
	
	Confirm that DNS is not enabled for the TCP/IP protocol. To do this, follow these
	steps:
	
	1. Click the TCP/IP protocol in the list of installed network components, and
	  then click Properties.
	
	2. On the DNS Configuration tab, click the Disable DNS option, and then click
	  OK.
	
	  NOTE: Disabling DNS does not remove any settings that are already populated
	  for this screen, it only grays them, thus stopping the TCP/IP protocol from
	  using them. If another application requires the use of DNS, simply re-enable
	  DNS when you are not using Close Combat.
	
	3. Click OK, and then close Control Panel.
	
	Connecting to Your ISP (Internet Service Provider)
	--------------------------------------------------
	
	Setting Up the Service Provider:
	
	Once you have set up the dial-up adapter, follow these steps to create a
	connection for each service provider:
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Double-click Make New Connection.
	
	3. Step through the Make New Connection Wizard to create the connection.
	
	4. Right-click the new connection, and then click Properties.
	
	5. Click Server Type. In the Allowed Network Protocols area, click the NetBEUI
	  and IPX/SPX Compatible check boxes to clear them (unless they are required)
	  and then click TCP/IP settings.
	
	6. If a static IP address is required, click Specify An IP Address and type the
	  address.
	
	7. If a dynamic address is required (this is the case for most providers), click
	  Server Assigned IP Address.
	
	8. If a DNS name server is provided, click Specify Name Server Address and type
	  the appropriate address.
	
	9. Click OK until you close the Connection Properties window.
	
	Further Information:
	
	Windows 95 includes support for connecting to an Internet service provider using
	either a PPP (Point-to-Point Protocol) or SLIP (Serial Line Internet Protocol)
	account.
	
	SLIP support is available in the CD-ROM version of Windows 95, the CD-ROM Extras
	for Windows 95 upgrade, and the Internet Jumpstart Kit component of Microsoft
	Plus! for Windows 95.
	
	Getting Started:
	
	To connect to the Internet, you need a PPP or SLIP account with an Internet
	provider. You also need the following information from your Internet service
	provider:
	
	- User name
	- Password
	- Local access phone number
	- Your host and domain name
	- DNS server IP address
	- Authentication technique (whether or not a terminal window is used)
	
	Your Internet service provider may also provide you with an IP address and an IP
	subnet mask. These are needed only if your provider gives you a dedicated IP
	address to use every time you dial in.
	
	How to Set Up Dial-Up Networking
	--------------------------------
	
	Before you set up your Internet connection, make sure Dial-Up Networking is
	installed on your computer. To do so, double-click the My Computer icon on the
	desktop and check if a Dial-Up Networking folder is present inside the My
	Computer window.
	
	If a Dial-Up Networking folder is present, proceed to the "How to Install the
	TCP/IP Protocol" section below.
	
	If a Dial-Up Networking folder is not present, install Dial-Up Networking by
	following these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click Communications (do not click the check box),
	  and then click Details.
	
	4. Click the Dial-Up Networking check box to select it, and then click OK.
	
	5. Click OK. Insert your Windows 95 CD-ROM or disks if you are prompted to.
	
	If Dial-Up Server is not listed on the Dial-Up Networking Connections menu,
	follow these steps:
	
	1. Install Dial-Up Networking from your Windows 95 CD-ROM or disks.
	
	2. Copy the file named RNASERV.DLL from the Goodies folder on the Close Combat
	  CD-ROM to the Windows\System folder on your hard disk.
	
	3. Double-click My Computer, and then double-click the Dial-Up Networking
	  folder. Dial-Up Server should now be available on the Connections menu.
	
	If You Are Using a SLIP Account:
	
	If you plan to use a SLIP account to connect to an Internet service provider,
	follow these steps to install SLIP support:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click Have Disk.
	
	4. Insert the appropriate disk or CD-ROM, and then point to the folder that
	  contains SLIP.
	
	How to Install the TCP/IP Protocol
	----------------------------------
	
	Once Dial-Up Networking is installed, follow these steps to install the TCP/IP
	protocol:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click the Network.
	
	3. On the Configuration tab, click Add, click Protocol, and then click Add.
	
	4. In the Manufacturers box, click Microsoft.
	
	5. In the Network Protocols box, click TCP/IP, and then click OK.
	
	6. If you want to connect only to the Internet, you need only the following
	  network components:
	
	   - Client for Microsoft Networks
	   - Dial-Up Adapter
	   - TCP/IP
	
	  NOTE: You can have additional protocols bound to the dial-up adapter if you
	  need them for connection to other Dial-Up Networking servers.
	
	7. Once you have installed the necessary components, click OK. When you are
	  prompted to restart the computer, do so.
	
	NOTE: You do not need to configure any TCP/IP settings at this time. Instructions
	for configuring these settings are included later in this article. The default
	TCP/IP settings are as follows:
	
	- IP address set to Obtain An IP Address Automatically
	- WINS Configuration set to Use DHCP For WINS Resolution
	- Installed Gateways: None
	- DNS Configuration set to Disable DNS
	
	How to Create and Configure a New Connection for PPP Accounts
	-------------------------------------------------------------
	
	NOTE: If you have a SLIP account, please go to the "How to Create and Configure a
	New Connection for SLIP Accounts" section below.
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. If this is the first time you have used Dial-Up Networking, the Welcome To
	  Dial-Up Networking wizard appears. If the wizard does not appear,
	  double-click Make New Connection, and then follow the instructions for
	  creating a Dial-Up Networking connection.
	
	3. Once you have created the connection, an icon appears in the Dial-Up
	  Networking folder. Double-click this icon to connect to the Internet.
	
	If your Internet service provider requires you to manually log in to your PPP
	account after you have connected, you must enable the necessary support. Follow
	these steps to enable this support:
	
	1. Right-click the newly created icon in the Dial-Up Networking folder, and then
	  click Properties.
	
	2. On the General tab, click Configure.
	
	3. On the Options tab, click the "Bring up terminal window after dialing" check
	  box to select it, and then click OK.
	
	4. On the General tab, click Server Type.
	
	5. Click "PPP: Windows 95, Windows NT 3.5, Internet" in the Type Of Dial-Up Up
	  Server box.
	
	6. Click the TCP/IP check box in the Allowed Network Protocols area to select
	  it. The TCP/IP selection allows you to connect to the Internet more quickly
	  after you dial your Internet service provider. The other options are not
	  relevant to connecting to the Internet.
	
	7. Click TCP/IP Settings.
	
	To use resources on the Internet you need to enter your DNS server address. You
	can also enter your IP address if your Internet service provider supplied you
	with a fixed IP address.
	
	How to Connect to Your PPP Account
	----------------------------------
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Double-click the Dial-Up Networking icon you created in the section above.
	
	3. In the Connect To dialog box, type your user name and password, and then
	  click Connect.
	
	If you clicked the "Bring up terminal window after dialing" check box, a terminal
	window appears in which you can type your logon information. After you type your
	user name and password, click Continue. The order in which you logon and the
	information that you must provide may vary for your Internet service provider.
	Please contact your provider if you have any questions about the logon
	procedure.
	
	When the Connected To dialog box appears on the screen, you are connected to the
	Internet.
	
	How to Create and Configure a New Connection for SLIP Accounts
	--------------------------------------------------------------
	
	NOTE: If you do not have a SLIP account, you do not need to follow the steps in
	this section.
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. If this is the first time you have used Dial-Up Networking, the Welcome To
	  Dial-Up Networking wizard appears. If the wizard does not appear,
	  double-click Make New Connection, and then follow the instructions for
	  creating a Dial-Up Networking connection.
	
	3. Once you have created the connection, an icon appears in the Dial-Up
	  Networking folder. Double-click this icon to connect to the Internet.
	
	4. Right-click the newly created icon in the Dial-Up Networking folder, and then
	  click Properties.
	
	5. On the General tab, click Server Type.
	
	6. Click SLIP: UNIX Connection in the Type Of Dial-Up Server box.
	
	7. Click the TCP/IP check box in the Allowed Network Protocols area to select
	  it. The TCP/IP selection allows you to connect to the Internet more quickly
	  after you dial your Internet service provider. The other options are not
	  relevant to connecting to the Internet.
	
	  NOTE: If you have a CSLIP (compressed SLIP) account, click "CSLIP: UNIX
	  Connection with IP Header Compression." Your Internet service provider can
	  tell you which type of SLIP account you have.
	
	8. Click TCP/IP Settings.
	
	To use resources on the Internet you need to enter your DNS server address. You
	can also enter your IP address if your Internet service provider supplied you
	with a fixed IP address.
	
	How to Connect to Your SLIP Account
	-----------------------------------
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Double-click the Dial-Up Networking icon you created in the section above.
	
	3. In the Connect To dialog box, type your user name and password, and then
	  click Connect.
	
	4. After modem negotiation, a terminal window appears in which you type your
	  logon information. After you type your user name and password in the terminal
	  window, you should receive a message from your Internet service provider
	  informing you of your IP address for the session. The order in which you
	  logon and the information that you must provide may vary for your Internet
	  service provider. Please contact your provider if you have any questions
	  about the logon procedure.
	
	  NOTE: Most service providers use a message such as "Your IP address is" or
	  "SLIP session from ###.###.###.### to ###.###.###.###" where the second set
	  of numbers is your IP address.
	
	5. Make a note of your IP address, and then click Continue.
	
	6. Confirm your IP address in the SLIP Connection IP Address dialog box by
	  typing the IP address you noted in step 5, and then click OK.
	
	  If you are not sure what your IP address is, please contact your Internet
	  service provider and ask how to determine your IP address for your SLIP
	  account.
	
	Troubleshooting Tips
	--------------------
	
	If you experience problems connecting to the Internet:
	
	- Make sure your server type is correct. For example, if you have a PPP
	  account, make sure the server type is set to PPP, not SLIP or CSLIP.
	- If you have a SLIP account, make sure you type the correct IP address when
	  you are prompted to do so during the logon process.
	
	If you experience problems after you connect to the Internet:
	
	- If you use a SLIP account and you can successfully ping another computer but
	  you cannot use Close Combat to connect to Internet resources, change the
	  server type from SLIP to CSLIP (or from CSLIP to SLIP).
	
	To make sure your Internet connection is working properly, ping a known IP
	address by typing the following command at an MS-DOS prompt
	
	  ping <IP address>
	
	where <IP address> is a known IP address. The IP address of the Microsoft
	FTP server is 207.46.133.140.
	
	If you can ping a known IP address successfully, TCP/IP connectivity is working
	properly. Next, try to ping the Microsoft FTP server using the
	"ftp.microsoft.com" address instead of the IP address. To do so, type the
	following command at an MS-DOS prompt:
	
	  ping ftp.microsoft.com
	
	If this works, your DNS settings are functioning properly.
	
	Additional query words: 1.00 closecombat cc multiplayer readme
	
	======================================================================
	Keywords          : kbenv kbreadme cc kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbCloseCombatSearch kbCloseCombat
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
