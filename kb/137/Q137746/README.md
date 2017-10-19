---
layout: page
title: "Q137746: Microsoft Plus! Internet.txt File Contents"
permalink: /kb/137/Q137746/
---

## Q137746: Microsoft Plus! Internet.txt File Contents

	Article: Q137746
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is a copy of the information in the Microsoft Plus!
	for Windows 95 Internet.txt file.
	
	MORE INFORMATION
	================
	
	--------
	CONTENTS
	--------
	
	INSTALLING PC CARD (PCMCIA) MODEMS
	USING SERIAL LINE INTERNET PROTOCOL (SLIP) SUPPORT
	MANUALLY LOGGING ONTO AN INTERNET CONNECTION
	USING SCRIPTING FOR DIAL-UP NETWORKING
	USING A LOCAL AREA NETWORK PROXY OR FIREWALL
	USING PROGRESSIVE NETWORKS' REALAUDIO SUPPORT
	USING INTERNET EXPLORER WITH VIRTUAL MEMORY
	
	INSTALLING PC CARD (PCMCIA) MODEMS
	==================================
	
	If you are using a PC card (PCMCIA) modem for your Dial-up Networking
	connection to the Internet and have not yet installed the modem,
	you may have to enable Windows 95 PC card socket support before
	running the Internet Setup wizard.
	
	To enable PCMCIA socket support:
	
	1. Click the Start button, point to Settings, and then click
	  Control Panel.
	
	2. Double-click the PC Card (PCMCIA) icon to start the PC Card
	  Wizard, and then follow the instructions on your screen.
	
	  NOTE: If you can't find the PC Card icon, you may need to install
	  the PC card (PCMCIA) drivers. To do this, double-click the
	  Add New Hardware icon, click No, click PCMCIA Support from
	  the list of hardware items, and then follow the instructions
	  on your screen.
	
	USING SERIAL LINE INTERNET PROTOCOL (SLIP) SUPPORT
	==================================================
	
	Setting Up A SLIP or CSLIP Connection
	-------------------------------------
	
	The Internet Jumpstart Kit supports three kinds of Dial-up Networking
	connection protocols: point-to-point protocol (PPP), serial line
	Internet protocol (SLIP), and compressed SLIP (CSLIP). The Internet
	Setup wizard creates only PPP dial-up connections. If your Internet
	service provider requires you to use a SLIP or CSLIP connection, do
	the following:
	
	1. Create the Dial-Up Networking connection by running the Internet
	  Setup wizard while setting up Microsoft Plus!.
	
	  You can also do this after setting up Microsoft Plus! by clicking
	  the Start button, pointing to Programs, then pointing to
	  Accessories, then pointing to Internet Tools, and then double-
	  clicking Internet Setup Wizard.
	
	  If your Internet service provider requires you to enter a sequence
	  of commands to establish the SLIP or CSLIP connection, make sure
	  the "Bring Up Terminal Window After Dialing" box is checked.
	
	  TIP: You may also be able to use Dial-Up Scripting to automate
	  entering the required sequence of commands. See "Using Scripting
	  For Dial-Up Networking" below for more information.
	
	2. Double-click the My Computer icon, and then double-click the
	  Dial-Up Networking folder.
	
	3. Click the connection you created in step 1, and then click
	  Properties on the File menu.
	
	4. Click Server Type, click either SLIP or CSLIP in the Type Of
	  Dial-Up Server list, and then click OK.
	
	Running the Internet Setup Wizard If You Have an Existing SLIP Connection
	-------------------------------------------------------------------------
	
	If you have set up an existing Internet Dial-Up Networking connection
	to use SLIP as the server type and you run the Internet Setup Wizard,
	the wizard will change the server type for the existing connection to
	PPP.
	
	To change the server type for the connection back to SLIP:
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. Using the right mouse button, click the connection you want to
	change, and then click Properties.
	
	3. Click Server Type.
	
	4. In the Type of Dial-Up Server list, click SLIP: UNIX Connection,
	and then click OK.
	
	5. In the Properties dialog box, click OK to save your changes.
	
	MANUALLY LOGGING ONTO AN INTERNET CONNECTION
	============================================
	
	Some Internet service providers require you to manually log on in
	order to establish an Internet connection. If you are running the
	Internet Setup Wizard to create such a connection, make sure you
	check the Bring Up Terminal Window After Dialing box.
	
	You can also select this option after you have run the wizard by
	doing the following:
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. Using the right mouse button, click the connection you want to
	change, and then click Properties.
	
	3. Click Configure, and then click Options.
	
	4. Make sure the Bring Up Terminal Window After Dialing box is
	checked, and then click OK.
	
	5. In the Properties dialog box, click OK to save your changes.
	
	TIP: You can also use Scripting for Dial-Up Networking to automate
	logging onto the Internet. For more information, see the following
	topic.
	
	USING SCRIPTING FOR DIAL-UP NETWORKING
	======================================
	
	You can use Scripting for Dial-Up Networking to automate the manual
	steps required by certain Internet service providers to establish a
	connection to the Internet. If your Internet service provider
	recommends using an automated connection script, after running the
	Internet Setup wizard, you can create a script file, and then Use the
	Dial-Up Scripting Tool to associate this file with the Dial-Up
	Networking connection you created.
	
	For more information about creating a Dial-Up Networking script and
	associating it with your Internet Dial-Up Networking connection:
	
	1. Click the Start button, and then click Help.
	
	2. Double-click the Microsoft Plus! For Windows 95 book.
	
	3. Double-click the Using The Network And The Internet book, and
	  then click Automating A Dial-Up Networking Connection.
	
	4. Follow the instructions in the Help topic.
	
	USING A LOCAL AREA NETWORK PROXY OR FIREWALL
	============================================
	
	If you want to use a proxy or firewall to protect your Local Area
	Network from being accessed by other on the Internet, follow these
	steps:
	
	1. Run the Internet Setup wizard while setting up Microsoft Plus!.
	
	  You can also run the wizard after setting up Microsoft Plus! by
	  clicking the Start button, pointing to Programs, then pointing to
	  Accessories, then pointing to Internet Tools, and then double-
	  clicking Internet Setup Wizard.
	
	2. Configure your computer to connect to the Internet by using TCP/IP
	  on your local area network.
	
	3. When asked for the gateway address, type the address supplied by
	  your network administrator only if your organization uses gateways
	  for routing information over the network.
	
	  NOTE: The gateway computer is not the same as the proxy or firewall
	  computer which protects your local area network from the Internet,
	  so do not type your proxy or firewall address here.
	
	4. Click the Start button, point to Settings, and then click Control
	  Panel.
	
	3. Click the Internet icon, and then click the Advanced tab.
	
	5. Make sure the Use Proxy Server box is checked.
	
	6. Type the Http server address and the port number for the computer
	  you want to use as the proxy server in the Proxy Server box. The
	  following is an example of a proxy server address and port number:
	
	  HTTP://MYPROXY.MYCOMPANY.COM:80
	
	  In the Bypass Proxy On box, type the names of the computers,
	  domains, and ports on the Internet that, when accessed, will
	  not go through the proxy server. Separate each item you type
	  with a comma.
	
	  If you do not know what to type in the Proxy Server, or Bypass
	  Proxy On boxes, see your network administrator. For Help on these
	  items, click the ? in the title bar, and then click the item.
	
	USING PROGRESSIVE NETWORKS' REALAUDIO SUPPORT
	=============================================
	
	The Internet Jumpstart Kit includes support for Progressive Networks'
	RealAudio. This enables you to listen to audio files in real time over
	a dial-up modem or direct-network Internet connection. To use
	RealAudio, you must have a Windows 95-supported sound card installed
	in your computer. RealAudio works best on 486/33 or faster processors.
	
	To try RealAudio, connect to HTTP://WWW.REALAUDIO.COM.
	
	NOTE: RealAudio will not work if your connection is routed through
	a local area network proxy or firewall.
	
	USING INTERNET EXPLORER WITH VIRTUAL MEMORY
	===========================================
	
	Internet Explorer requires you to use virtual memory. Otherwise,
	Internet Explorer will not run properly. To make sure you are using
	virtual memory:
	
	1. Click the Start button, then point to Settings, and then click
	  Control Panel.
	
	2. Double-click the System icon, and then click the Performance tab.
	
	3. Click the Virtual Memory button.
	
	4. If you are specifying your own virtual memory settings, make
	  sure the Disable Virtual Memory box is unchecked. If this box
	  is checked, then you are not using virtual memory and Internet
	  Explorer won't run.
	
	  TIP: You can let Windows manage virtual memory for you by
	  selecting the Let Windows Manage My Virtual Memory Settings option.
	
	Additional query words: pnfront.exe pnclient.exe progressive networks
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : 95
	
	=============================================================================
	
