---
layout: page
title: "Q150575: HOWTO: Set Up a TCP/IP Peer-to-Peer Network Connection"
permalink: kb/150/Q150575/
---

## Q150575: HOWTO: Set Up a TCP/IP Peer-to-Peer Network Connection

	Article: Q150575
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbHWMAC kbVC400
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The process for setting up a TCP/IP peer-to-peer network connection between two
	computers is not intuitively obvious, especially if you have never set up
	networks before. This article describes how to put together a TCP/IP
	peer-to-peer network connection between your PC and your Macintosh quickly and
	easily.
	
	MORE INFORMATION
	================
	
	General Physical Network Connection Issues
	------------------------------------------
	
	There are three common types of network cabling: Twisted Pair, ThinNet, and
	ThickNet.
	
	If you are using twisted-pair, which is thin wire with wide phone connectors
	(RJ-45), both your PC and Macintosh need to be plugged into a network hub so
	power is flowing through the network cable to carry data. Depending on the
	manufacturer and model, hubs usually allow between four and 20 machines to
	network.
	
	Typically no extra hardware is required if you are using either ThinNet, which
	looks like Cable TV wiring with a round plug, or ThickNet, which is heavy, 1/4
	inch cable with D-shell 15-pin connectors. The network cards can be connected to
	each other directly.
	
	Several newer Macintosh models have a built-in network connector called
	FriendlyNet. You are required to obtain a network transceiver, such as Asante's
	10T Adapter, to use one of the cables mentioned above.
	
	Choosing IP Addresses for Your Machines
	---------------------------------------
	
	For simplicity, use class B IP addresses for your peer-to-peer network. The
	specifications for class B IP addresses are as follows:
	
	- The first digit of the IP address must be between 128 to 191 inclusively.
	
	- The subnet mask is: 255.255.0.0
	
	- The first two digits of the IP address must match on both machines. For
	  example:
	
	  machine1:  150.100.100.10
	  machine2:  150.100.250.20
	
	NOTE: When creating an IP address, avoid using 0 or 255 for any of the digits
	because these numbers are reserved for special use.
	
	Here's a good example of a set of IP address to use:
	
	  Macintosh:                            150.100.100.10
	  PC Running Windows NT or Windows 95:  150.100.100.20
	
	Configuring TCP/IP on the Macintosh
	-----------------------------------
	
	If you see MacTCP on your Macintosh control panel, you are running MacTCP. If you
	see TCP/IP instead, you are running Apple's Open Transport.
	
	The new PCI-based PowerMacs only come with Open Transport. Older models of the
	Macintosh come with MacTCP on the System 7.x installation media. Check Apple's
	documentation for installation details.
	
	To configure your system using MacTCP:
	
	1. From the MacTCP control panel, select Ethernet or Ethernet Built-In and enter
	  the following:
	
	  IP Address:     150.100.100.10
	
	2. Click More, and enter the following:
	
	  Obtain Address: Manually
	  Class:          B
	  Net:            38500
	  Subnet:         0
	  Node:           25610
	  Gateway:        0.0.0.0
	  Name Server:    <blank>
	
	3. Click OK, and close the control panel. Restart your Macintosh to ensure that
	  the settings take place.
	
	NOTE: MacTCP may not respond to network packets with its IP address until you
	initiate a TCP/IP network connection from the Macintosh end. Apple has a program
	available called MacTCP Ping that initializes your TCP/IP network connection on
	start up. Using MacTCP Ping allows your PC to see your Macintosh.
	
	To configure your system using Open Transport TCP/IP:
	
	1. Go to the TCP/IP control panel, and enter the following settings:
	
	  Connect Via:    ethernet
	  Configure:      manually
	  IP Address:     150.100.100.10
	  Domain Name:    <blank>
	  Subnet Mask:    255.255.0.0
	  Router Address: <blank>
	  Name Server:    <blank>
	
	2. Close the control panel, and restart your Macintosh to ensure the settings
	  take place.
	
	Configuring TCP/IP on Windows NT
	--------------------------------
	
	1. Go to the Network control panel.
	
	2. From the Installed Network Software list box, select TCP/IP Protocol, and
	  click Configure.
	
	3. Make sure the Enable Automatic DHCP Configuration is deselected, and enter
	  the following:
	
	  IP Address:   150.100.100.20
	  Subnet Mask:  255.255.0.0
	
	4. Make sure the Default Gateway and the Primary/Secondary WINS Server entries
	  are blank.
	
	5. Click DNS, and ensure everything is blank except for the Host Name, which
	  contains the name of your Windows NT machine. Click OK.
	
	6. Click Advanced, and ensure that Enable LMHOSTS Lookup is selected. Everything
	  else should be either blank or deselected. Click OK.
	
	7. Close the Network control panel, and restart Windows NT.
	
	8. Find the file named Hosts.sam in the \Winnt\System32\Drivers directory. Make
	  a copy and name it Hosts, leaving it in the same directory.
	
	9. Edit the Hosts file, and add the following line at the bottom:
	
	     150.100.100.10  mymac
	
	10. From the File menu, choose Save. You are now ready to test the connection.
	
	Configuring TCP/IP on Windows 95
	--------------------------------
	
	1. From the Network control panel, select TCP/IP, and click Properties.
	
	2. Go to WINS Configuration, and select Disable WINS resolution.
	
	3. Go to the IP Address, select Specify an IP Address, and enter:
	
	  IP Address:   150.100.100.20
	  Subnet Mask:  255.255.0.0
	
	4. Go to Gateway, and make sure it is empty.
	
	5. Go to DNS cofiguration, and select Disable DNS.
	
	6. Click OK, and close out the Network control panel. Restart Windows 95.
	
	7. In the main Windows directory, usually C:\Windows, find the file named
	  Hosts.sam. Copy the file, and name it Hosts. Place the file in the main
	  Windows directory.
	
	8. Edit the Hosts file, and add the following line at the bottom:
	
	  150.100.100.10  mymac
	
	9. From the File menu, choose Save. You are now ready to test the connection.
	
	NOTE: If the MSN login dialog box appears when you are connecting, click Cancel
	to continue. To disable this behavior, run the Internet applet from the control
	panel and clear the UseAutoDial option in the AutoDial Tab.
	
	Testing the TCP/IP Connection
	-----------------------------
	
	To test the network connection, use the Ping command line utility on the PC. Open
	an MS-DOS/Command window and type one of the following:
	
	  C:\>ping mymac
	
	  -or-
	
	  C:\>ping 150.100.100.10
	
	Replace 150.100.100.10 and mymac with whatever you set in the Hosts file. Using
	mymac causes the TCP/IP service to look up the name in the Hosts file to resolve
	it to an IP address. The expected output from Ping looks like the following:
	
	  C:\>ping 150.100.100.10
	
	  Pinging 150.100.100.10 with 32 bytes of data:
	
	  Reply from 150.100.100.10: bytes=32 time=10ms TTL=254
	  Reply from 150.100.100.10: bytes=32 time<10ms TTL=254
	  Reply from 150.100.100.10: bytes=32 time<10ms TTL=254
	  Reply from 150.100.100.10: bytes=32 time<10ms TTL=254
	
	If you receive a Bad IP address error, you need to check your Hosts file entry to
	ensure that the IP address and name match what is set on the Macintosh.
	
	If you receive a Request timed out error, you need to check the physical network
	connection and ensure that the IP address in the Hosts file matches what is set
	on the Macintosh. If you are running MacTCP, you can run MacTCP Ping to
	initialize the TCP/IP network.
	
	Additional query words: listbox mac peer to net
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbHWMAC kbVC400 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
