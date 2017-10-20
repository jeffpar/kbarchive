---
layout: page
title: "Q135895: Windows 95 CD-ROM Faq.txt File (2 of 2)"
permalink: /kb/135/Q135895/
---

## Q135895: Windows 95 CD-ROM Faq.txt File (2 of 2)

{% raw %}

	Article: Q135895
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95kbfaq
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Faq.txt file from the
	Windows 95 CD-ROM. Setup copies this file to the Windows folder. This article is
	the second of two articles.
	
	MORE INFORMATION
	================
	
	 --------------------------------------------------------------------
	      Microsoft Windows 95 README for Frequently Asked Questions
	                   August 1995
	 --------------------------------------------------------------------
	
	          (c) Copyright Microsoft Corporation, 1995
	
	This document provides complementary or late-breaking information to
	supplement the Microsoft Windows 95 documentation.
	
	[Q: I am installing Windows 95 from CD-ROM, and the system hangs on
	the first boot. Why?]
	
	The most likely reason is that there may be a real-mode and protected-
	mode conflict with the CD-ROM driver, and Setup is unable to continue.
	Try remarking out the CD-ROM drivers in Config.sys. If this doesn't
	solve the problem, then try these troubleshooting procedures:
	
	*Can you boot into Windows in Safe mode? If not, reinstall.
	
	If you can:
	- Create a Bootlog.txt file to see where it failed.
	- Look for the Detcrash.log file. If it is present, the problem is
	 with hardware detection.
	- Check Ios.ini and remark out the drivers that are loading in
	 Config.sys in case there is a problem with these protect-mode
	 drivers.
	- Check device manager for any conflicts. Don't be afraid to remove
	 any device from here if you suspect it is the troublemaker.
	- Change the display driver to standard VGA.
	- Try the step-by-step boot.
	- Rename Autoexec.bat and Config.sys so they don't load on the next
	 boot.
	
	Copy System.cb to System.ini; very few drivers load here (not even the
	mouse). If this solves the problem, check your System.ini for any
	entries made by any third party applications; for example, Adobe Type
	Manager.
	
	[Q: How do I install MS Fax?]
	
	To install Microsoft Fax during Setup, when the Accessories screen is
	displayed, make sure MS Fax is checked. If you have not selected
	MS Exchange, you will see a prompt to select it as well.
	
	To install Microsoft Fax after Setup, go to Control Panel, double
	click the Add/Remove Programs icon, and then click the Windows Setup
	tab. In the Accessories box, scroll to MS Fax, and make sure it is
	checked. If you have not selected MS Exchange, you will see a prompt
	to select it also.
	
	NOTE: MS Exchange and MS Fax require at least 10 MB of free space to
	install.
	
	[Q: After running Setup I can no longer access my CD-ROM, why?]
	
	If your CD-ROM is proprietary, (Sony, Mitsumi, and Panasonic), Windows
	95 will install the drivers. If the CD-ROM is not detected, there is a
	conflict with the device or the controller, and you should check the
	settings for conflicts in the Device Manager in Control Panel. Add new
	devices by double-clicking the Install New Hardware icon in Control
	Panel.
	
	[Q: I am having a problem with the refresh rate of my monitor. How do
	I fix it?]
	
	To adjust the refresh rate, you must specify your monitor type in an
	adapter setup program supplied by your display adapter or PC
	manufacturer. Some utilities must be run in Autoexe.bat. On some PCs,
	monitor type is set in BIOS configuration programs. Examples of
	utilities from adapter manufacturers include:
	
	ATI                INSTALL.EXE
	Cirrus Logic        MONTYPE.EXE, CLMODE.EXE, WINMODE.EXE
	Diamond Stealth    STLMODE.EXE
	Diamond Stealth 64   S64MODE.EXE
	Matrox             \MGA\SETUP\SETUP.EXE
	Tseng Labs         VMODE.EXE
	Western Digital    VGAMODE.EXE
	
	=======
	MS-DOS
	=======
	
	[Q: How do I boot to an MS-DOS prompt ( C:\> )?]
	
	You can find this information in Windows Help Index. Look up
	"Restarting your computer, in MS-DOS mode."
	
	[Q: How do I boot to my previous version of DOS?]
	
	To boot to the previous operating system, you need a version of
	MS-DOS 5.0 or greater on your system.
	
	Modify the MSDOS.sys file as follows:
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	2. Type CD\ and then press Enter.
	3. Type attrib -r -s -h msdos.sys and then press Enter.
	4. Type edit msdos.sys, and then press Enter.
	
	OR
	
	1. Click the Start button, point to Find, and then click Find/File or
	  Folders.
	2. In the Named box, type msdos.sys and press Enter.
	3. Use your right mouse button to click the msdos.sys file, and then
	  select Properties.
	4. Click the Hidden and Read Only attributes so their check boxes are
	  cleared.
	5. Click OK.
	6. Double-click the Msdos.sys file in the results window.
	
	Find the [Options] section, place your cursor after the last bracket,
	and then press Enter. You now have a blank line to add the following
	string:
	
	Bootmulti=1.
	
	Then save the file.
	
	When you turn the computer on, or restart from within Windows 95,
	press F8 when you see the message, "Starting Windows 95...". Then,
	select the option, "Previous Version of MS-DOS."
	
	[Q: Will I be able to multiboot PC-DOS 7.0?]
	
	Yes, PC-DOS 7.0 supports multiboot.
	
	=================
	Disk Compression
	=================
	
	[Q: Will Windows 95 work if I have compressed my hard drive using Stac
	Electronics Stacker software?]
	
	Yes, Windows 95 is fully compatible with Stacker versions 2.x and
	greater, as well as all versions of Superstore. Older compression
	drivers from third party disk compression utilities function in real-
	mode only. For upgraded Windows 95 drivers, contact your software
	compression vendor.
	
	Windows 95 supplies a built-in disk compression utility called
	DriveSpace that runs in protected mode. The advantages of DriveSpace
	are that compression is faster, and it is built into the operating
	system. See Windows 95 Help for more information on DriveSpace.
	
	=============================
	Using CD-ROMs with Windows 95
	=============================
	
	[Q: Windows 95 does not detect my CD-ROM. Why is this? How do I get my
	CD-ROM to work?]
	
	CD-ROMs may be SCSI, proprietary, or IDE controller based.
	
	Windows 95 only detects proprietary controller-based CD-ROMS
	(specifically Panasonic, Mitsumi, and Sony brands). Windows 95 also
	detects the SCSI controllers; however, drivers for the SCSI bus will
	enumerate the CD-ROMs.
	
	1. Open Control Panel, and then double-click the System icon.
	2. Select the Device Manager tab.
	3. Verify that a SCSI or IDE controller exists in the device tree.
	  (If the SCSI or IDE controller branch is not available look up
	  "Adding, Hardware" in the Help Index.)
	4. Open the branch for SCSI or IDE controller by clicking the plus (+)
	  sign.
	5. Click the controller, and then click Properties.
	6. In the General Tab, verify that the Device Status message states
	  "This device is working properly" and that the Device Usage
	  check box is enabled for "Current Configuration"
	7. Click the Resources tab, and then verify  that the "Conflicting
	  Device List" displays "No Conflicts."
	  - If a conflict exists, the conflicting devices are listed.
	  -Verify that the Resource Settings match the actual hardware
	   settings of the controller. Refer to the SCSI or IDE controller
	   documentation.
	8. If multiple devices are connected to a SCSI or IDE controller, and
	  any of the SCSI or IDE devices are not supported by Windows 95 with
	  a protected mode driver, then access to all devices connected to
	  the controller will be provided via manufacturer-supplied MS-DOS
	  drivers only. Contact the device manufacturer for information on
	  protected-mode Windows 95 drivers.
	
	==========
	Networking
	==========
	[Q: How do I set up my Windows 95 computer for a TCP/IP network?]
	
	First, find out from your system administrator if your network is
	using a DHCP server to allocate IP addresses automatically, or if you
	have been assigned a specific IP address. Once you have this
	information, follow these steps:
	1. In Control Panel, double-click the Network icon.
	2. On the Configuration tab, click Add, and then double-click
	  Protocol.
	3. Click Microsoft, and then click TCP/IP.
	
	After it is installed, click TCP/IP on the Configuration tab of
	Network properties, and then click Properties.
	Configure your protocol per instructions from your system
	administrator.
	
	[Q: How do I set up Netware support?]
	
	There are three ways to access a Novell network with Windows 95. If
	you are using Novell Netware 3.x, or if you have bindery services
	enabled with 4.x, you can use the Microsoft Client for Netware. This
	is installed from the Network properties by clicking Add, clicking
	Client, clicking Microsoft, and then clicking Microsoft Client for
	Netware.
	
	If you need to load real-mode TSRs from your login script, you must
	use the real-mode shell NETX or VLM, available from Novell. If you are
	using NDS services with 4.x, you must install the VLM client.
	
	If you are using NETX, you need to install the Novell Workstation
	Shell 3.x from Network properties. Click Add, click Client, and then
	click the Novell properties dialog box. If you are using the VLM
	client, install the Novell Workstation Shell 4.x client.
	
	NOTE: You must have the proper version of the Windows support files
	from Novell to use either Workstation Shell option.
	
	[Q: I am running a non-Microsoft network, and I can't connect to my
	network resources, why?]
	
	If it is a real-mode network, the network client must be loaded from
	Autoexec.bat and/or Config.sys before Windows 95 loads. If it is a
	network that Windows 95 does not recognize, then all drive mappings
	and resource connections may need to be done before starting Windows
	95. Resource mappings done in an MS-DOS Prompt may only be accessible
	while that MS-DOS Prompt is running. If it is a supported network,
	make sure the client support is installed in Network Properties.
	
	[Q: Why do the applications from my Novell server give an "Incorrect
	MS-DOS version" message?]
	
	There are two possible reasons. Novell Netware login scripts can use a
	Netware login script variable, OSVersion, to track which versions of
	MS-DOS the clients are running and to map a drive to a directory on
	the Novell server that contains a copy of that version of MS-DOS. Your
	network administrator needs to ensure that the same has been done for
	Windows 95, which will report MS-DOS version 7.0. You should also
	check the SETVER table, and see what version is being reported for the
	particular programs. You may need to modify the table to have the
	correct version reported to the system.
	
	[Q:How do I set up Windows 95 with Lantastic 6.0?]
	
	To configure Windows 95 to support an Artisoft LANtastic network,
	contact the vendor and request a Windows 95 LANtastic *.inf.
	
	NOTE: You cannot use Network Neighborhood to view LANtastic resources.
	You must use the LANtastic utilities in the LANtastic program group.
	
	[Q: How do I install a PPP dial-up network connection?]
	
	You will need a modem installed and configured correctly. If the Dial-
	up Networking option is not installed, add it by opening Control Panel
	and then double-clicking Add/Remove Programs. Click the Windows Setup
	tab, and then follow the instructions on your screen.
	
	Once installed, open the Dial-up Networking folder in My Computer.
	Start the connection wizard. The PPP protocol is installed by default
	because it is the most flexible, being able to work over NetBeui,
	IPX/SPX and TCP/IP.
	
	[Q: How do I set up Dial-Up Networking to connect to a Novell server?]
	
	Install the following components from the Network icon in Control
	Panel:
	
	-Microsoft Client for Netware Networks
	-IPX/SPX compatible protocol bound to the Microsoft Dial-up Adapter
	driver.
	
	To use Dial-up Networking to connect to a Netware Connect Server, you
	must specify Netware Connect as the server type in a Dial-up
	Networking connection's properties.
	
	[Q: Why does my system stop at the login script?]
	
	If the connection to the server is lost, the login script processor
	for NetWare may appear to stop, the Microsoft Client for NetWare will
	timeout, and an error will appear. Contact your network administrator
	if you experience problems with the network and the login script.
	
	[Q: How do I configure my computer to answer Dial Up Networking
	calls?]
	
	If you have Microsoft Plus! you can configure your computer to answer
	Dial-Up Networking calls.
	
	1. Start running Dial-Up Networking.
	2. On the Connections menu, click Dial-Up Server.
	3. Click Allow caller access.
	
	If you do not have Microsoft Plus!, you can only use Dial-Up
	Networking to call out from your computer, not receive Dial-Up
	Networking calls.
	
	======================================
	Accessing the Internet with Windows 95
	======================================
	
	[How do I connect to the Internet with Windows 95?]
	
	There is a Help topic that can walk you through the necessary steps.
	In the Help index, look up "Internet, connecting to."
	
	[Q: How do I configure TCP/IP to connect to the Internet?]
	
	There is a Help topic that can walk you through the necessary steps.
	In the Help Index, look up "Internet, connecting to."
	
	=======
	Desktop
	=======
	
	[How do I create shortcuts on the desktop?]
	
	There are two ways to create a shortcut on the desktop:
	
	Use your right mouse button to click the desktop, click New, and then
	click Shortcut. Type the correct command along with any special
	parameters, or browse to find the application you want the shortcut
	to. Click Next, and you will be prompted for a shortcut name. Enter a
	name, and then click Finish.
	
	OR
	
	Open Windows Explorer, and find the program you want to create a
	shortcut for. Click and hold the icon while dragging it to the
	desktop. This creates a shortcut on the desktop named "Shortcut to
	<program name>."
	
	[Q: How do I get animated cursors?]
	
	Animated cursors require a Windows 95 version display driver running
	at 256 or more colors. They are not supported for the following
	display types in this release: ATI Ultra (mach8), Chips &
	Technologies, XGA.
	
	Animated cursors are available in Microsoft Plus!
	
	============
	PCMCIA Cards
	============
	
	[Q: What socket services do I need to use with my PCMCIA network
	adapter?]
	
	To use a protected mode PCMCIA network card, your socket services must
	match your network card.  If you use a real mode network card driver,
	you must use real mode socket services. If you use a protected mode
	net card driver, you must use protected mode socket services. To
	determine what kind of network card driver you're using, go to the
	Driver Type properties for your network adapter, in the Network
	Control Panel. Choose a driver type. To enable protected mode socket
	services, run the PCMCIA wizard from Control Panel.
	
	[Q: How do I get my PCMCIA cards to work in protected mode?]
	
	Double click the PCMCIA wizard and then follow the instructions on
	the screen. You may be asked to select your PCMCIA network or SCSI
	card during this process. After the wizard runs, you will no longer be
	loading the device drivers in your configuration files, and you will
	be running with protected mode drivers from within Windows 95.
	
	======
	Modems
	======
	
	[Q: Setup didn't detect my modem, how do I install it?]
	
	To install a modem in Windows 95, go to Control Panel, and double
	click the Modem icon. Start the Modem installation wizard which will
	guide you through the installation of your modem.
	
	NOTE: This procedure is for internal or external modems. PCMCIA modems
	automatically install when inserted (requires protected mode PCMCIA
	drivers).
	
	[Q: My modem won't dial or connect. Why?]
	
	NOTE: There is a troubleshooter for modem problems in Windows Help.
	
	If your modem is not set up correctly, communications features may not
	function properly. The following procedures list steps to verify the
	correct operation of your modem and Windows 95 communications.
	
	Because some communications programs designed for Windows 3.1 install
	incompatible driver files, which may cause COM ports and modems to
	stop working, first verify that the correct Windows 95 files are being
	loaded.
	
	To verify that the required communications files are present:
	1. Verify the files sizes and dates of COMM.DRV and SERIAL.VXD in the
	  System directory against the original versions from the Windows 95
	  floppy disks or CD-ROM.
	2. Confirm that the following lines are present in System.ini:
	  [boot]
	  Comm.drv=Comm.drv
	  [386enh]
	  device=*vcd
	3. To revert to the default communications drivers for Windows 95,
	  select communications port entries in Device Manager.
	4. Run the Add New Hardware wizard in Control Panel to detect and
	  install the Windows 95 drivers.
	
	NOTE: Windows 95 does not load the SERIAL.VXD driver in System.ini.
	Rather, Windows 95 loads it on demand using the registry. Also, there
	is no corresponding file for the *vcd entry in System.ini. This is
	an internal file built into VMM32.VXD.
	
	To verify the modem configuration
	1. In Control Panel, double-click the Modems icon.
	2. Verify that the manufacturer and model for your modem is correct.
	  If not, run the Install New Modem wizard to detect the modem and
	  confirm it with the current registry configuration.
	3. If your current modem does not appear in the list of installed
	  modems, click Add, and then select the appropriate modem.
	4. If the manufacturer and model are not correct and are not available
	  from the list, try the Hayes-compatible option for Generic Modem
	  driver, set to the maximum baud rate supported by the modem, and
	  then click OK. Remove any other modem entries in the list of
	  eliminate conflicts.
	
	To verify the modem is enabled
	1. Double-click the System icon in Control Panel, and then click the
	  Device Manager tab.
	2. Select your modem from the list and click Properties.
	3. Make sure the option, The Device Is Present, Please Use It, is
	  checked.
	
	To verify that the port is correct
	1. Double-click the Modems icon in the Control Panel.
	2. Select your modem, and then click Properties.
	3. On the General tab, verify that the listed port is correct. If not,
	  select the correct port, and then click OK.
	
	To determine if a serial port I/O address and IRQ settings are
	properly
	defined
	1. Double-click the System icon in the Control Panel.
	2. Click the Device Manager tab, and then click Ports.
	3. Select a specific port, and click the Properties button.
	4. Click the Resources tab to display the current resource settings
	  for that port. To find out the correct settings, consult the modem
	  manual.
	5. In the Resources dialog box, check the Conflicting Devices List to
	  see if the modem is using resources in conflict with other devices.
	6. If the modem is in conflict with other devices, click Change
	  Settings, and then click a configuration that does not have
	  resource conflicts.
	
	Note: Do not try to use a modem on COM3 if there is a serial mouse or
	other device on COM1. Usually, COM1 and COM3 ports use the same IRQ
	and cannot be used simultaneously on most computers. The COM2 and COM4
	ports have the same problem. If possible, change the COM3 and COM4
	port to an IRQ setting that is not in conflict. Also, some display
	adapters have an address conflict with COM4 ports. To work around this
	conflict, use another COM port; or, replace your graphics adapters.
	
	To check the port settings
	1. Double-click the Modems icon in Control Panel, click a modem, and
	  then click Properties.
	2. Click the Connection tab to check the current port settings, such
	  as baud rate, data bits, stop bits, and parity.
	3. Click Advanced to check error control and flow control. If you are
	  using Win 16-based programs, turn off these advanced features.
	3. Verify the UART type.
	
	Data transmission problems may occur when a baud rate greater than
	9600 is selected on a slower 8036-based computer not equipped with a
	16550 UART, or when performing other tasks during a file download. If
	problems or errors occur during transmission, try lowering the baud
	rate. Attempting to use baud rates greater than 9600 on computers
	equipped with 8250 or 16450 UARTs will probably result in dropped
	characters.
	
	To check modem baud rate
	1. Double-click the Modems icon in Control Panel.
	2. Select the modem, and then click Properties.
	3. Click the General tab, and then set the baud rate to the correct
	  speed. Lower speeds may work, especially when using an older
	  computer.
	5. Click Only Connect At This Speed if it is not already selected.
	
	NOTE: If the host system you are calling cannot communicate at the
	initial baud rate, it may or may not be able to negotiate a slower
	baud rate.
	
	Tip: To optimize communications performance, you can set the baud rate
	higher if your computer has an 80486 or a Pentium(TM) processor.
	
	To disable hardware flow control if your modem cable doesn't support
	it:
	1. Double-click the Modems icon in Control Panel.
	2. Click a modem, and then click Properties.
	3. Click the Connections tab, and then click Advanced.
	4. Make sure the option Use Flow Control is unchecked.
	
	=============
	Miscellaneous
	=============
	
	[Q: Is NTFS supported by Windows 95?]
	
	NTFS is not directly supported under Windows 95. NTFS volumes can only
	be accessed by Windows NT locally. If Windows 95 is installed on a
	computer already running Windows NT with an NTFS volume, it will not
	be able to access any information that volume contains. Windows 95 can
	access NTFS volumes across a network connection.
	
	Additional query words: superstor superstore
	
	======================================================================
	Keywords          : win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
