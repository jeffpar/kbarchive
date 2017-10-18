---
layout: page
title: "Q133219: Connecting to the Internet Using a Service Provider"
permalink: kb/133/Q133219/
---

## Q133219: Connecting to the Internet Using a Service Provider

	Article: Q133219
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; Win2000:95
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup dun win95 kbDialUpkbfaq
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to set up one or more Internet service providers and
	Internet mail for use with Microsoft Exchange in Windows 95.
	
	MORE INFORMATION
	================
	
	Before you can use Windows 95 to access the Internet you must have an account
	with an Internet service provider.
	
	Requirements
	------------
	
	To configure Dial-Up Networking to work with an Internet service provider, you
	must obtain the following information from the service provider:
	
	- User name
	
	- Password
	
	- Access phone number
	
	- Required protocol
	
	- Host and domain name
	
	- DNS (Name Service) if an IP address
	
	- Logon procedure
	
	If the service provider requires that you use a dedicated static IP address each
	time you log on, you will also need the following information:
	
	- Your IP address
	
	- Subnet mask (optional)
	
	- IP address for the default gateway (optional)
	
	NOTE: Not all of the above information is required with all service providers.
	
	Setting Up the Dial-Up Adapter
	------------------------------
	
	To set up the Dial-Up adapter, follow these steps:
	
	1. Use the right mouse button to click Network Neighborhood, then click
	  Properties on the menu that appears.
	
	2. Check to see if the dial-up adapter is installed. If it is not, go to step 3.
	  If the dial-up adapter is already installed, go to step 4.
	
	3. Click the Add button, double-click Adapter, click Microsoft in the
	  Manufacturer box, click Dial-Up Adapter in the Network Adapters box, then
	  click OK.
	
	4. Check to see if "TCP/IP -> Dial-Up Adapter" is installed in the network
	  components box. If it is not, follow these steps:
	
	  a. Click the Add button.
	
	  b. Double-click Protocol.
	
	  c. In the Manufacturer box, click Microsoft.
	
	  d. In the Network Protocols box, click TCP/IP.
	
	  e. Click OK.
	
	5. Click OK. When you are prompted to restart your computer, click Yes.
	
	Setting up the Service Provider
	-------------------------------
	
	Once you have set up the dial-up adapter, use the following steps to create a
	connectoid for each service provider:
	
	1. Click the Start button, point to Programs, point to Accessories, then click
	  Dial-Up Networking.
	
	2. Double-click Make New Connection.
	
	3. Proceed through the Make New Connection Wizard to create the connectoid.
	
	4. Use the right mouse button to click the new connectoid, then click Properties
	  on the menu that appears.
	
	5. Click Server Type. In the Allowed Network Protocols area, click the NetBEUI
	  and IPX/SPX Compatible check boxes to clear them (unless they are required)
	  and then click TCP/IP settings.
	
	6. If a static IP address is required, click Specify An IP Address and type the
	  address.
	
	7. If a dynamic address is required (this is the case for most providers), click
	  Server Assigned IP Address.
	
	8. If a DNS name server is provided, click Specify Name Server Address and type
	  the appropriate address.
	
	9. Click OK until you exit connectoid properties.
	
	To create multiple connectoids (for multiple service providers) repeat steps 1-9
	for each service provider.
	
	Microsoft does not recommend that you configure the address information using the
	TCP/IP Dial-Up Adapter entry in Network Properties. Properties for the Dial-Up
	Adapter override the per connection settings and unexpected results can occur.
	
	If you modify the TCP/IP Dial-Up Adapter properties, you are prompted with the
	following dialog box:
	
	  TCP/IP Properties Information
	
	  You have asked to change TCP/IP properties for a dial-up adapter. In most
	  cases, these properties are unique to the specific network which you are
	  calling. For this reason, it is better to set TCP/IP properties in each
	  connection icon which calls a network. Otherwise, properties set for the
	  adapter will override the per-connection settings.
	
	  Connection icons can be found in the Dial-Up networking folder under Start
	  Accessories. Right click an icon to see its properties sheet; select Server
	  Type, and then TCP/IP settings.
	
	Setting up Internet Mail
	------------------------
	
	To use Internet mail with Microsoft Exchange you must install Microsoft Plus! for
	Windows 95. You set host names for Internet mail services in the Internet Mail
	profile. To set up the Internet Mail profile, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click Mail And Fax.
	
	3. Click Add, click Internet Mail, and then click OK.
	
	4. Add Personal Address Book and Personal Folders to the profile. You can
	  combine the files with existing PST and PAB folders, or you can rename them
	  and place them where you want them.
	
	5. When Internet Mail, Personal Address Book, and Personal Folders are included
	  in the profile, click Internet Mail and then click Properties.
	
	6. On the General tab, modify the settings for the connection. Make sure that
	  all the necessary information is included. The Domain Server Name (DNS)
	  information is required for most service provider mail connections. This is
	  placed under Mailbox Information in the Internet Mail Server box.
	
	7. Click OK to finish the profile.
	
	NOTE: The Internet Mail service is also available in the Windows Messaging Update
	for Exchange, Internet Explorer 3.0 or later, or by downloading the Inetmail.exe
	file from the Microsoft FTP site.
	
	Prompting for a Profile
	-----------------------
	
	If you have multiple service providers, you can cause Microsoft Exchange to
	prompt you for the profile to use when you start Microsoft Exchange. To do so,
	follow these steps:
	
	1. Start Microsoft Exchange.
	
	2. On the Tools menu, click Options.
	
	3. On the General tab, click "Prompt for a profile to be used."
	
	4. Click OK.
	
	Additional query words: w95cn
	
	======================================================================
	Keywords          : kbnetwork kbsetup dun win95 kbDialUp kbfaq
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : WINDOWS:95; Win2000:95
	
	=============================================================================
	
