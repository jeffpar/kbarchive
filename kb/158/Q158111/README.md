---
layout: page
title: "Q158111: XCLN: ShivaRemote with Exchange (WFW 3.11/WFW TCP/IP or NetBEUI)"
permalink: kb/158/Q158111/
---

## Q158111: XCLN: ShivaRemote with Exchange (WFW 3.11/WFW TCP/IP or NetBEUI)

	Article: Q158111
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbusage
	Last Modified: 24-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A white paper on ShivaRemote is located on Microsoft TechNet and can also be
	found on the following World Wide Web location:
	
	  http://www.msdn.microsoft.com (http://www.msdn.microsoft.com)
	
	ShivaRemote 3.59 (which ships with Microsoft Exchange) can be used with the
	Microsoft Exchange Windows 3.x client to allow users to remotely access a
	computer running Microsoft Exchange Server (either through a computer running
	Windows NT Server with RAS or Shiva LanRover). This article shows you how to
	install and configure the ShivaRemote software to run under Windows for
	Workgroups 3.11 with either Microsoft NetBEUI or Microsoft TCP/IP version 3.11b.
	
	MORE INFORMATION
	================
	
	Note that the version of Remote Access Service (RAS) that ships with Windows for
	Workgroups can be used to access a computer running Microsoft Exchange Server;
	however, the remote mail features of Microsoft Exchange (offline folders and
	remote mail) cannot be used with Windows for Workgroups RAS (Windows for
	Workgroups RAS does not support the APIs necessary for remote mail). Also, if
	you are using Windows for Workgroups RAS, you must first make a connection with
	Windows for Workgroups RAS prior to starting the Microsoft Exchange client.
	
	The ShivaRemote software that ships with Microsoft Exchange will allow full
	remote mail functionality with Microsoft Exchange.
	
	Attempting to use ShivaRemote in conjunction with other network card adapter
	drivers (for example, for users who want to be "docked" and "undocked" with a
	laptop) may result in error messages or the computer may stop responding when
	starting Windows for Workgroups. This is due to the fact that Windows for
	Workgroups loads drivers for all configured network adapters on startup. If a
	network adapter is present in the docking station but not available when the
	laptop is undocked, this may cause the computer to stop responding while
	attempting to locate the non-existent LAN adapter.
	
	This overall problem has been addressed in Windows 95 and Windows NT 4.0 with the
	concept of Hardware Profiles. Hardware profiles allow for seamless
	docking/undocking for mobile users and will be most appropriate for users who
	require this feature.
	
	For troubleshooting purposes, first follow the procedures in this article and set
	up ShivaRemote as the only netcard driver in network setup. Once this is set up
	and working, you can attempt to add an additional netcard driver. If adding the
	additional driver prevents starting of Windows for Workgroups or causes problems
	with ShivaRemote, it may be necessary to create an MS-DOS multiconfig boot
	(reference your MS-DOS 6.x manual for information on creating multiple
	configurations) and dynamically rename Protocol.ini and System.ini, depending on
	the boot option selected.
	
	NOTE: Whether both the netcard driver and ShivaRemote driver can "coexist" will
	depend on the netcard and the netcard driver involved.
	
	NOTE: With Protocol.ini and System.ini being renamed dynamically on startup, BOTH
	files will need to be updated whenever a new application is installed.
	
	Depending on your environment, an upgrade to Windows 95 or Windows NT 4.0 may
	offer a much smoother solution to the above problem.
	
	NOTE: ShivaRemote is unnecessary for Windows 95 or Windows NT. Microsoft Exchange
	will use the built-in Dial-up Networking (Windows 95) or RAS (Windows NT)
	features of the operating system in these scenarios).
	
	(For information about setting up Shiva for use over other protocols, see the
	Reference section below).
	
	To configure ShivaRemote and Microsoft Exchange:
	
	1. Test the modem connection from Terminal.exe to ensure the modem itself is
	  able to dial out and to verify the proper comm port.
	
	  For more information about using terminal to test your modem, see the
	  following article from the Microsoft Knowledge Base:
	
	  Q105940 Troubleshooting Serial Port Problems in Windows
	
	2. Install the Microsoft Exchange client software (run Setup from the Microsoft
	  Exchange client compact disc or from a sharepoint). Select Custom install and
	  verify that the Shiva component is selected. (Setup will create a
	  "shivaremote setup" icon in the Microsoft Exchange program group.)
	
	3. If possible, verify a valid Microsoft Exchange mailbox/account exists while
	  connected to the LAN. (Start the Microsoft Exchange client, create a profile
	  and make sure you can log into your mailbox and send a piece of mail to
	  yourself.)
	
	4. Run "shivaremote setup" from the Microsoft Exchange program group.
	
	5. When prompted to Install ShivaRemote dial-in software and Update Windows for
	  Workgroups files, select both and click OK.
	
	6. Select the port and your specific modem manufacturer/model.
	
	  NOTE: http://athena.shiva.com/prod/ccl/index.html has updated scripts for many
	  modems.
	
	7. At the Protocol Configuration dialog, select "enable netbeui" or "enable ip,"
	  or both, but NOT "enable IPX." Microsoft IPX/SPX protocol is not compatible
	  with ShivaRemote.
	
	  Note: TCP 3.11 b can be installed from the Windows NT 3.51 Server compact disc
	  under Clients/TCP32WFW/netsetup.
	
	8. Configuration files will be changed (backups are saved). Click OK to each.
	
	9. Click OK to the message prompting you to configure your network.
	
	10. Answer "no" to rebooting.
	
	11. Add the ShivaRemote Dial In Adapter to Windows for Workgroups:
	
	  a. Open the "Network" group in Windows for Workgroups.
	
	  b. Click the Network Setup icon, cl;ick the Drivers button, and click the Add
	     Adapter button.
	
	  c. Select "unlisted or updated network adapter," and click OK.
	
	  d. Click "browse," and browse to the directory where the Microsoft Exchange
	     client was installed.
	
	  e. Select the Shiva subdirectory and click OK.
	
	  f. Click OK in the install driver dialog box.
	
	  g. "ShivaRemote dial-in driver" should then be an option under Network
	     Adapters. Click OK, then "close". (You can safely remove IPX/SPX as a
	     protocol and leave only NetBEUI). Click OK.
	
	  h. When you are prompted "The files for enhanced mode protocol manager are
	     currently installed on your computer," click "yes to all."
	
	  i. Insert the appropriate Windows for Workgroups disks when prompted.
	
	  j. When prompted "Insert Shivaremote Dial-In Software Disk or a disk with the
	     updated or vendor-provided DialNDIS.exe file," browse to the
	     Exchange_Install_Point/Shiva directory and click OK.
	
	  k. Your System and Protocol.ini files will be modified (and backups saved as
	     well).Click OK.
	
	  l. Click Restart Computer.
	
	12. Ensure that the files Ndis2sup.386 and Netbeui.386 are properly extracted
	  from the exchange cab files during Setup. The correct dates and sizes are:
	
	     ndis2sup.386 dated 3/4/96, size 23736
	     netbeui.386 dated 3/4/96, size 37043
	
	  If these files are NOT updated by Shiva, Windows for Workgroups will appear
	  to stop responding for about two minutes when booting. To manually update
	  the files, do the following:
	
	  From the Microsoft Exchange client compact disc (Eng/Win16 dir), carry out
	  the following command(from the Eng/win16 directory):
	
	  extract /a /l c:\windows_dir\system exchng1.cab netbeui.386
	
	(where windows_dir is your Windows for Workgroups directory)
	
	  extract /a /l c:\windows_dir\system exchng1.cab ndis2sup.386
	
	You can also use Cabview or another extraction utility to do this.
	
	NOTE: Extract.exe is not on the Exchange compact discs; you will have to obtain
	Extract.exe either from a Windows 95 or Microsoft Office install.
	
	13. Once you have the above setup, reboot and ensure you receive no error
	  messages when booting with the newly configured autoexec.bat and Config.sys.
	
	14. Specify a Description, Dial-in-Name (NT account that has been granted
	  dial-in access on the server), Password (Password for the NT Account you are
	  dialing in on), and Phone number in the Shiva connect utility.
	
	15. Dial the computer running RAS. (Microsoft Exchange is supported dialing into
	  either a Windows NT RAS server or a Shiva LanRover.)
	
	16. Once connected, minimize ShivaRemote Connect.
	
	17. Prior to starting Exchange, verify that you have network connectivity over
	  the Shiva connection by attempting to connect to a network share on the
	  computer running Microsoft Exchange server from File Manager (if using
	  NetBEUI) or attempting to ping the machine name of the computer running
	  Microsoft Exchange Server (if using TCP).
	
	18. If using TCP/IP, edit the local HOSTS file and add the Microsoft Exchange
	  Server name and IP address.
	
	  For more information on the HOSTS file, see the following article in the
	  Microsoft Knowledge Base:
	
	  Q105997 Differences Between the HOSTS and LMHOSTS Files in Windows NT
	
	19. Start the Microsoft Exchange Windows 3.x client (online, as a test). Type
	  the User Name (Exchange Mailbox Name), the Password (Windows NT Domain
	  Password), and the Domain (Windows NT Domain Name of your Mailbox Account).
	  Verify you can be properly logged on to Microsoft Exchange and send mail to
	  yourself.
	
	If the above steps allow you to properly send/receive mail, ShivaRemote and
	Microsoft Exchange are configured correctly.
	
	The Microsoft Exchange client remote capabilities can now be configured (remote
	mail or off-line folders). To set up the Microsoft Exchange client to
	automatically dial while working offline :
	
	1. In Control Panel/Mail-Fax, select the properties for Microsoft Exchange
	  Server in the profile and on the "dial up networking" tab.
	
	2. Select the Shiva connection name that was tested in step 1 under "dial using
	  the following connection."
	
	3. Type the user name, password, and domain name in the dialog box.
	
	You can start the Microsoft Exchange client offline and click either remote
	mail/connect or "sync this folder." ShivaRemote will dial and transmit necessary
	information (depending on whether offline folders [.ost files] or .pst files are
	being used).
	
	REFERENCES
	==========
	
	Updated modem scripts for use with ShivaRemote can be found on Shiva's web page
	at www.shiva.com under "support"/modem scripts.
	
	Additional configuration information can also be found in the Config.hlp file
	installed with the ShivaRemote software.
	
	For more information about specific remote options with the Microsoft Exchange
	client, see the following article in the Microsoft Knowledge Base:
	
	  Q139934 XCLN: The Microsoft Exchange Client and Mobile Users
	
	The following articles in the Microsoft Knowledge Base describe additional
	supported Shiva configurations for use with Microsoft Exchange:
	
	  Q158124 XCLN: ShivaRemote with Exchange - RAS Considerations
	
	  Q158074 XCLN: Using ShivaRemote with Exchange (DOS/Real-Mode IPX)
	
	  Q157740 XCLN: Using ShivaRemote with Exchange (DOS/LanMan TCP/IP)
	
	  Q158095 XCLN: ShivaRemote with Exchange (Windows 3.x/LanMan NetBEUI)
	
	  Q158077 XCLN: Using ShivaRemote with Exchange (Windows 3.x/Real-Mode IPX)
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	Additional query words: remote mail
	
	======================================================================
	Keywords          : kbenv kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
