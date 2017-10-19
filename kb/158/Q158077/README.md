---
layout: page
title: "Q158077: XCLN: Using ShivaRemote w/ Exchange (Windows 3.x/Real-Mode IPX)"
permalink: /kb/158/Q158077/
---

## Q158077: XCLN: Using ShivaRemote w/ Exchange (Windows 3.x/Real-Mode IPX)

	Article: Q158077
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbusage
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A white paper on ShivaRemote is located on Microsoft TechNet and can also be
	found on the following World Wide Web location:
	
	  http://www.microsoft.com/ExchangeSupport/
	
	The ShivaRemote 3.59 software (which ships with Microsoft Exchange) can be used
	with the Microsoft Exchange Windows 3.x client to allow users to remotely access
	a computer running Microsoft Exchange Server (via dial-in to a Windows NT RAS
	server or Shiva LanRover). This article discusses the necessary steps to install
	and configure the ShivaRemote software that ships with Microsoft Exchange to
	work under Windows 3.x. (Additional informationn on Shiva can be found in the
	Reference section below).
	
	MORE INFORMATION
	================
	
	To install ShivaRemote on Windows 3.x:
	
	1. Select the ShivaRemote component during Microsoft Exchange client Setup; this
	  will install the Shiva Setup program.
	
	2. Run the Shiva Setup program from the icon located in the Microsoft Exchange
	  program group.
	
	3. Install and configure ShivaRemote Dial-In Driver and protocols (Shiva's
	  software configuration notes, CONFIG.HLP, have additional information).
	
	Shiva is not installed by default; however, when a typical installation is
	performed, an icon for setting up ShivaRemote is created in the Exchange program
	group. This Setup program for the Windows 3.x version of ShivaRemote modifies
	the Autoexec.bat, Win.ini, and System.ini files.
	
	Note: The ShivaRemote setup icon that is added to the Microsoft Exchange Windows
	3.x client program group only adds the DIAL.386 driver to the System.ini; some
	manual steps are necessary.
	
	ShivaRemote Setup copies all of its files to the directory ShivaRemote is being
	installed into, except for VNB.386 and CTL3D.DLL. These two files are copied to
	the \<Windir>\System directory.
	
	Configuration of ShivaRemote
	----------------------------
	
	To configure ShivaRemote for use with the Microsoft Exchange Windows 3.x client:
	
	1. Test the modem connection from Terminal.exe to ensure the modem itself is
	  able to dial out and to verify the proper comm port.
	
	  For more information about using terminal to test your modem, see the
	  following article from the Microsoft Knowledge Base:
	
	  Q105940 Troubleshooting Serial Port Problems in Windows [win3x]
	
	  a. Set up your Autoexec.bat and Config.sys as follows:
	
	     NOTE: the Novell client software must be licensed from Novell.
	
	     Config.sys
	     ----------
	     device=c:\dos\setver.exe
	     device=c:\dos\himem.sys
	     device=c:\dos\emm386.exe noems
	     shell=c:\dos\command.com /p
	     dos=high,umb
	     lastdrive=z
	
	     autoexec.bat
	     ------------
	     lsl
	     c:\exchange_dir\dialodi.exe
	     ipxodi
	     vlm (or netx)
	
	     The net.cfg (nwclient directory)
	     --------------------------------
	      preferred server=servername
	      Link Driver DIALODI
	
	  b. Ensure you receive no error messages when booting with the newly
	     configured Autoexec.bat and Config.sys.
	
	2. Install the Microsoft Exchange Windows 3.x client software. (Run Setup from
	  the Microsoft Exchange 3.x client compact disc or from a sharepoint).
	
	  Select Custom install and verify that Shiva is selected. (Setup will create a
	  "ShivaRemote setup" icon in the Microsoft Exchange Program group).
	
	3. If possible, verify a valid exchange mailbox/account exists while connected
	  to the LAN. (start the Exchange client, create a profile and make sure you
	  can log on to your mailbox and send a piece of mail to yourself).
	
	4. Run "ShivaRemote setup" from the Microsoft Exchange Program group.
	
	5. Click OK to install ShivaRemote.
	
	6. Select the port and your specific modem manufacturer/model.
	
	7. Specify a Description, Dial-in-Name (NT account that has been granted dial-in
	  access on the server), Password (Password for the NT Account you are dialing
	  in on), and Phone number.
	
	8. Dial the computer running RAS. (Microsoft Exchange is supported dialing into
	  either a computer running Windows NT Server with RAS or a Shiva LanRover).
	
	  (For additional server configuration information, see the Reference section
	  below.)
	
	9. Once connected, minimize ShivaRemote Connect.
	
	10. Start the Microsoft Exchange Windows 3.x client. Enter the User Name
	  (Exchange Mailbox Name), the Password (Windows NT Domain Password), and the
	  Domain (Windows NT Domain Name that your Account is in) and verify you can
	  be properly logged in.
	
	If the above step allows you to properly send/receive mail, ShivaRemote and
	Microsoft Exchange are configured correctly.
	
	The Exchange Client remote capabilities can now be configured (remote mail or
	offline folders).
	
	To set up the Microsoft Exchange Windows 3.x client to automatically dial:
	
	1. In Control Panel/Mail-Fax, select the properties for Exchange Server in the
	  profile and on the "Dial-Up Networking" tab.
	
	2. Select the Shiva connection name that was tested in step 1 under "dial using
	  the following connection."
	
	3. Type the user name, password, and domain name in the dialog box.
	
	The Microsoft Exchange Windows 3.x client can be started offline and when either
	remote mail/connect or "sync this folder" is selected, ShivaRemote will dial and
	transmit necessary information (depending on which option you select).
	
	Possible Error Messages :
	-------------------------
	
	  Warning: Your IPX network number changed during connection. IPX services may
	  not function properly.
	
	If you receive this error in the Exchange DOS client, simply press the Enter key
	and continue.
	
	If you are using the Exchange client for Windows 3.x or Windows for Workgroups
	3.x, the IPX network number assigned to your computer may have changed while you
	were connected to the remote access server. This can happen if you dial-in to
	two different remote networks in one session without restarting your computer
	between connections.
	
	If you are using the Novell NetWare VLMs Version 1.2 or later and ShivaRemote
	3.5, you can ignore this error message, and your IPX-dependent software will
	function without errors. (Later versions of the VLMs have been designed to
	handle this problem correctly.) This warning message can be turned off by
	editing the SREMOTE.INI file and changing the following line:
	
	  [Options]
	  NotifyIPXAddress=No
	
	If you are not using the NetWare VLMs, or if you are using VLMs prior to Version
	1.2, close the Dial-In connection and restart your computer, then dial-in to the
	remote network again.
	
	  The MS Exchange directory service could not be opened. A network error has
	  occurred. Quit and restart MS Exchange. Microsoft Exchange for MS- DOS ID no:
	  5866-80040115.
	
	To resolve this issue, test RPCs over the connection by running "rpings.exe"
	(located on the Exchange server CD in the Support directory) on the Exchange
	Server and rpingdos.exe on the DOS client machine. If you are loading
	dialodi.exe, VLM or NETX must also be loaded, even though you are not connecting
	to the LAN.
	
	REFERENCES
	==========
	
	Updated modem scripts for use with ShivaRemote can be found on Shiva's web page
	at www.shiva.com under "support"/modem scripts.
	
	Additional configuration information may also be found in the config.hlp file
	installed during installation of the ShivaRemote software.
	
	For more information about specific remote options with the Microsoft Exchange
	Windows 3.x client, see the following article in the Microsoft Knowledge Base:
	
	  Q139934 XCLN: The Microsoft Exchange Client and Mobile Users
	
	The following articles in the Microsoft Knowledge Base describe additional
	supported Shiva configurations for use with Microsoft Exchange:
	
	  Q158124 XCLN: ShivaRemote with Exchange - RAS Server Considerations
	
	  Q158074 XCLN: Using ShivaRemote with Exchange (DOS/real-mode IPX)
	
	  Q157740 XCLN: Using ShivaRemote with Exchange (DOS/LanMan TCP/IP)
	
	  Q158095 XCLN: Using ShivaRemote with Exchange (Windows 3.x/LanMan NetBEUI)
	
	  Q158111 XCLN: ShivaRemote with Exchange (WFW 3.11/WFW TCP/IP or NetBEUI)
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	Additional query words: remote mail ost deliver now ras
	
	======================================================================
	Keywords          : kbenv kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
