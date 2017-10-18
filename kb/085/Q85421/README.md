---
layout: page
title: "Q85421: NETWORKS.WRI: Microsoft Windows &amp; MS-DOS 5 for IBM PS/2"
permalink: kb/085/Q85421/
---

## Q85421: NETWORKS.WRI: Microsoft Windows &amp; MS-DOS 5 for IBM PS/2

	Article: Q85421
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Windows & MS-DOS 5 for IBM PS/2
	NETWORKS.WRI file.
	
	MORE INFORMATION
	================
	
	Notes About Networks and Microsoft Windows 3.1
	----------------------------------------------
	
	This document contains information about specific networks. If you are looking
	for additional information about Windows version 3.1 that does not pertain to
	networks, see "Other Online Documents" at the end of this file for a description
	of the Windows 3.1 online documents.
	
	Important Note: The information in this file should only be used if you are
	installing Microsoft Windows 3.1 alone. If you are installing both Windows 3.1
	and MS-DOS 5.0, you should refer to the information in the NETWORKS.TXT file.
	Look at the PACKING.LST, Setup Disk 1, for the location of NETWORKS.TXT.
	
	Using Write to View This Document
	---------------------------------
	
	If you enlarge Write to its maximum size, this document will be easier to read.To
	do so, click the Maximize button in the upper-right corner of the Write window.
	Or open the Control menu in the upper-left corner of the Write window and choose
	the Maximize command.
	
	To move through the document, press PAGE UP and PAGE DOWN or click the arrows at
	the top and bottom of the scroll bar along the right side of the Write window.
	
	To print the document, choose the Print command from the File menu.
	
	For Help on using Write, press F1.
	
	To read other online documents, choose Open from the File menu.
	
	Contents
	--------
	
	This document contains the following topics about networks:
	1.0 General Notes
	2.0 Notes About Specific Networks
	   2.1  3Com Networks
	   2.2  Artisoft LANtastic
	        2.2.1  Artisoft LANtastic 3.x
	        2.2.2  Artisoft LANtastic 4.x
	   2.3  Banyan VINES
	        2.3.1  Banyan VINES 4.0x
	        2.3.2  Banyan VINES 4.1x
	   2.4  DEC Pathworks
	   2.5  IBM OS/2 LAN Server
	        2.5.1 IBM LAN Server 1.2 and 1.3
	        2.5.2 IBM LAN Server 2.x
	   2.6  IBM PC LAN Program
	   2.7  Invisible Software - NET/30 for Windows
	   2.8  Microsoft LAN Manager Networks
	        2.8.1  Using the Ungermann-Bass XNS Transport Stack
	        2.8.2  Using LAN Manager and Expanded Memory
	        2.8.3  Using Pop-up Services
	        2.8.4  LAN Manager Basic
	        2.8.5  LAN Manager 1.x\177
	        2.8.6  LAN Manager 2.0 Enhanced
	        2.8.7  LAN Manager 2.1 Basic
	        2.8.8  LAN Manager 2.1 Enhanced
	   2.9  Microsoft Network and Compatibles
	   2.10 Novell NetWare
	   2.11 TCS 10Net
	   2.12 Ungermann-Bass Net/One
	3.0 Other Online Documents
	
	1.0  General Notes
	------------------
	
	- There are many settings in the SYSTEM.INI file that affect the way
	Windows interacts with a network. You can change these settings to
	correct most problems you might have operating Windows with your
	network. See the SYSINI.WRI online document for information about
	changing the following SYSTEM.INI settings:
	
	[Boot]
	Network.drv=
	
	[Standard]
	Int28Filter=
	NetHeapSize=
	
	[386Enh]
	AllVMsExclusive=
	EMMExclude=
	FileSysChange=
	InDOSPolling=
	Int28Critical=
	NetAsyncFallback=
	NetAsyncTimeout=
	NetDMASize=
	NetHeapSize=
	Network=
	PSPIncrement=
	ReflectDOSInt2A=
	TimerCriticalSection=
	TokenRingSearch=
	UniqueDOSPSP=
	
	- Many networks require the TimerCriticalSection entry in the [386Enh]
	section of the SYSTEM.INI file to be set to a value of 10000 or
	greater. For more information, see the SYSINI.WRI file.
	
	- The default value for the NetHeapSize entry in the [Standard]
	section of the SYSTEM.INI file is 8K. Although some applications
	require this value, in most cases you can decrease the value to 4K in
	order to increase the amount of memory available to your applications.
	A few applications require the value to be 4K.
	
	- If for some reason you use Setup to change your network
	configuration after you have already set up Windows, Setup might not
	remove all support for your previous network selection. Unnecessary
	files might be left in your Windows directory, and entries might be
	left in your WIN.INI or SYSTEM.INI files that could harm your system's
	performance. If you change your network configuration, check the notes
	about both your previous and new selections to see if any previous
	entries are no longer required.
	
	- Some network adapter cards require the ExcludeHighRegion (or
	EMMExclude) entry in the [386Enh] section of the SYSTEM.INI file to be
	set to the memory range used by the card. For more information, see
	your network-adapter documentation and the SYSINI.WRI file.
	
	These cards may also require an X= option on the EMM386 command line
	in your CONFIG.SYS file. For more information, see chapter 14,
	"Optimizing Windows," in the Microsoft Windows User's Guide.
	
	- Some network cards and some network transport stacks require special
	handling. Consult the following sections not only for the manufacturer
	of your network but also for the manufacturer of your network adapter
	and your transport stack.
	
	- Many networks have pop-up message facilities that allow you to see
	messages sent from other servers or workstations. In most cases, these
	pop-up programs will cause the Windows part of Setup to fail if a
	message is received while setting up. Many networks provide additional
	utilities that allow them to work with Windows once Windows is set up,
	but these are generally not available during Setup. You should make
	sure any such pop-up service is disabled before setting up Windows.
	Please consult specific entries regarding your network in the
	following sections, or consult your network documentation for
	instructions.
	
	- If you configured your remote-boot workstation to run Windows
	version 3.0, you may be loading a program called RIPLMEM.EXE or
	RPLMEM.EXE
	in your AUTOEXEC.BAT. This program is no longer required for running
	Windows version 3.1.
	
	- The Windows Resource Kit for the Microsoft Windows Operating System
	Version 3.1 contains additional information about setting up and
	configuring Windows for use with a network, and information for system
	administrators. This kit provides complete technical information about
	Windows version 3.1 for the support professional. It includes a
	technical reference manual, and a disk containing helpful utilities,
	system resource viewers, drivers, and accessories.
	
	To order the Windows Resource Kit within the United States, dial:
	
	  1-800-642-7676
	
	To order outside of the United States, dial the phone number for your
	area. You can find this number on the International Subsidiary card.
	
	- If you are running a shared copy of Windows from a network drive,
	make sure both your personal Windows directory and the shared network
	directory are included on the PATH command line in your AUTOEXEC.BAT
	file.
	
	- If you receive sharing violations while running a shared copy of
	Windows, make sure that all of the files in the shared network
	directory are marked as read-only.
	
	- If you have problems running a shared copy of Windows, remove the
	MS-DOS SHARE command from your system. With some networks, the MS-DOS
	SHARE utility must not be loaded on a workstation to run a shared copy
	of Windows.
	
	- If you have problems and your network software is loaded high (in
	the upper memory area between 640K and 1 MB), try loading the network
	in conventional memory.
	
	- Windows Print Manager spools print jobs to the location specified by
	the MS-DOS environment variable TEMP. If TEMP is not set, Print
	Manager will use the root of drive C. For diskless workstations, set
	the TEMP variable either to a RAM disk or to the location of a network
	directory (you must have full access to this directory). The TEMP
	variable may be set by placing a SET TEMP= statement in the
	AUTOEXEC.BAT file or network login script. For example, to spool to
	the network directory X:\USERNAME\WINUSER\TEMP, you would use the
	statement SET TEMP=x:\username\winuser\temp. Each user must have a
	personal TEMP directory.
	
	- On some diskless workstations, you will not be able to start Windows
	in standard mode unless you have a TEMP environment variable set or
	you have added a swapdisk entry in the [NonWindowsApp] section of the
	SYSTEM.INI file. For more information about the swapdisk entry, see
	the SYSINI.WRI file.
	
	- If you are running a peer-to-peer network, you may not be able to
	format a floppy disk by using File Manager. You can use the format
	command at the MS-DOS prompt instead.
	
	- Some networks ship with their own copies of files that are included
	with Windows version 3.1. Usually Windows includes a newer version,
	and upgrades the one provided with the network when you run Setup.
	However, if you install the network after installing Windows 3.1, some
	network installation programs will overwrite the newer file provided
	with Windows with their own, older version. This older version may
	lack features provided in the newer version, or it may not function
	properly with Windows 3.1.
	
	You should back up your network and Windows files before upgrading
	your network software. If problems occur, you may need to restore the
	previous version of some files.
	
	2.0  Notes About Specific Networks
	----------------------------------
	
	This section contains information about specific networks. The
	networks are
	listed in alphabetical order by vendor. If your network is not listed
	here, it may
	be based on or equivalent to one of the networks listed here. For
	example,
	many networks are based on Microsoft LAN Manager.
	
	2.1  3Com Networks
	------------------
	
	The Windows part of Setup recognizes the following 3Com networks:
	
	- The 3Com 3+Share network is based on the Microsoft Network product
	and will be handled as such by Windows. See the "Microsoft Network and
	Compatibles" section later in this document.
	
	- The 3Com 3+Open LAN Manager network is based on Microsoft LAN
	Manager and will be handled as such by Windows. See the "Microsoft LAN
	Manager Networks" section later in this document.
	
	When you install for 3Com 3+Share or 3Com 3+Open LAN Manager, Setup
	adds the following entries to the [386Enh] section of your SYSTEM.INI
	file:
	
	TimerCriticalSection=10000
	UniqueDOSPSP=TRUE
	PSPIncrement=5
	
	See SYSINI.WRI for more information on these entries.
	
	In addition:
	
	- Some copies of 3Com 3+Open LAN Manager version 1.1 require a
	maintenance upgrade to work with Windows. If you encounter problems,
	contact your network customer-support organization.
	
	- When you install Windows, Setup modifies your AUTOEXEC.BAT file to
	make sure the Windows directory appears in your path ahead of any
	conflicting directories. However,  the 3+Share network might change
	this path when you log in. If so, your system administrator must
	modify the network log-in procedure so that the path is set correctly
	to run Windows.
	
	- On a 3Com 3+Open network, the user's name displayed by Windows Print
	Manager might not match the user's actual log-in name.
	
	- Some 3Com 3Station diskless workstations come with an All
	ChargeCard. Make sure your machine is not configured to load the
	network into the upper memory area between 640K and 1 megabyte, as
	this will not work reliably with Windows version 3.1 in standard mode.
	You will not be able to set up Windows if your system is configured in
	this way.
	
	- If you use the 3C505 Network Adapter Card, you must disable the Link
	Plus Optimizer to run Windows in 386 enhanced mode. You can disable it
	by removing the following lines from your CONFIG.SYS file:
	
	device=psh.sys <arguments>
	device=pth.sys
	
	In addition, remove the following line from your AUTOEXEC.BAT (or any
	other batch file you use to start your network):
	
	ldr
	
	- Windows does not support the 3Com network aliasing scheme (three-
	part names).
	
	2.2  Artisoft LANtastic
	-----------------------
	
	LANtastic versions below 3.0 are not compatible with Microsoft
	Windows.
	
	For information about LANtastic versions 3.x or 4.x, see the specific
	sections
	that follow. The following notes apply to both versions.\177
	
	- The EMMExclude setting, added to the SYSTEM.INI file during Setup,
	is required for the default configuration of the Artisoft LANtastic
	Enhanced 2mbps network adapter. If you have changed the memory address
	setting on your adapter, modify this entry in SYSTEM.INI to reflect
	the appropriate address range. If you are not using this network
	adapter, you can remove this entry.
	
	- Some commands require the NetHeapSize entry in the SYSTEM.INI file
	to be set higher than the default value; for example, xcopy requires
	NetHeapSize=128. Increasing the NetHeapSize value leaves less memory
	available for non-Windows applications, so only increase this value if
	necessary. For more information about the NetHeapSize entry, see the
	SYSINI.WRI file.
	
	- You cannot create a permanent swapfile while running Windows on a
	LANtastic server. To create a permanent swapfile, restart your
	computer without loading the server software, and create the swapfile
	in Windows. If a dialog box appears asking you to restart Windows, you
	must restart Windows in 386 enhanced mode before you start the server
	software.
	
	- If you are running a LANtastic server, you cannot use Windows File
	Manager to format a floppy disk. You can use the format command at the
	MS-DOS prompt instead.
	
	2.2.1  Artisoft LANtastic 3.x
	-----------------------------
	
	When you set up Windows for use with LANtastic 3.x, the following
	entries are added to the [386Enh] section of SYSTEM.INI:
	
	EMMExclude=D800-DFFF
	INDOSPolling=TRUE
	NetHeapSize=76
	NetAsynchFallback=TRUE
	NetAsynchTimeout=50
	
	In addition:
	
	To print from any mode of Windows across LANtastic 3.x, it is
	necessary to do one of the following:
	
	- Turn off the Fast Printing Direct To Port option in Control Panel.
	To do this, choose the Printers option in Control Panel, and then
	choose the Connect button. In the Connect dialog box, clear the Fast
	Printing Direct To Port check box.
	
	When you turn off this option, it affects all of your ports.
	
	If you want to turn this option off for one port only, follow these
	steps:
	
	1. If you are printing using LPT3, add the following entry to the
	[ports] section of the WIN.INI file:
	
	LPT3.DOS=
	
	If you are using LPT1 or LPT2, you can use the LPT1.DOS or LPT2.DOS
	entries already in your WIN.INI file.
	
	2. Quit Windows, and then redirect the LPTx.DOS port (where x is the
	port you are using) by using the LANtastic net use command.
	
	3. Restart Windows.
	
	4. Using Control Panel, change your printer port to LPTx.DOS.
	
	- If you are running LANtastic version 3.x, you cannot run Windows in
	386 enhanced mode on a non-dedicated server.
	
	- If you have a network connection on LPT1, it will not be displayed
	in Print Manager or Control Panel.
	
	2.2.2  Artisoft LANtastic 4.x
	-----------------------------
	
	When you set up Windows for use with LANtastic 4.x, the following
	entries are added to the [386Enh] section of SYSTEM.INI:
	
	EMMExclude=D800-DFFF
	NetAsynchFallback=TRUE
	NetAsynchTimeout=50
	NetHeapSize=64
	PerVMFiles=0
	
	In addition:
	
	- If you set up Windows for use with LANtastic 4.x, you must have the
	LANTASTI.386 file somewhere on your path. This file should be located
	in your LANtastic directory. If LANTASTI.386 is not in your path, the
	Windows part of Setup adds *dosnet to the [386Enh] section of the
	SYSTEM.INI. To use Windows with LANtastic 4.x, remove this entry and
	add the entries shown above, and make sure LANTASTI.386 is somewhere
	on your path.
	
	2.3  Banyan VINES
	-----------------
	
	Setup will correctly handle the following Banyan VINES versions:
	
	- Banyan VINES 4.0 is compatible with Microsoft Network and will be
	handled as such by Windows.
	
	- Banyan VINES 4.1 and later come with additional Windows components,
	which are installed when you set up Windows for use with Banyan VINES
	4.1.
	
	See the following sections for information about running these
	versions of VINES with Windows.
	
	Note: You should start VINES and log in before starting Windows.
	Banyan does not support logging in while Windows is running. If you
	start Windows when the network is not loaded or you are not logged in,
	you will receive one or more error messages indicating that you will
	not be able to use VINES functions from within Windows.
	
	2.3.1  Banyan VINES 4.0x
	
	When you set up Windows for use with Banyan VINES 4.0x, the following
	entries are added to the [386Enh] section of your SYSTEM.INI file:
	
	       TimerCriticalSection=5000
	       UniqueDOSPSP=TRUE
	       PSPIncrement=5
	
	See SYSINI.WRI for more information on these settings.
	
	- To use Windows printing functions with VINES 4.0, you must have
	VINES 4.00(5) or later and must have the NetBIOS support loaded. If
	you cannot print to a network printer, ask your network administrator
	to verify that you are loading NetBIOS and that you are running the
	proper version of VINES.
	
	- If you are running VINES 4.0 with Windows running in 386 enhanced
	mode and want to run non-Windows applications that use NetBIOS, you
	must install VINES 4.00(5) or later. In addition, you will need to
	start NetBIOS before starting Windows.
	
	If you start VINES NetBIOS support before starting Windows in standard
	mode, you may not be able to start any non-Windows applications. If
	you have this problem, load NetBIOS from within Windows, or contact
	your Banyan dealer for more information.
	
	- Versions below site-specific patch 0H will not support Windows
	running in 386 enhanced mode.
	
	- If you are running VINES version 4.0x and you have a problem with
	print jobs that time-out intermittently, you can either update to
	VINES 4.1x, or use the VINES SETPRINT utility to remove the timeout on
	your printer port by specifying the following:
	
	  SETPRINT lptn servicename /D:INFINITE
	
	Lptn is the printer port and servicename is the name of the network
	print queue.
	
	2.3.2  Banyan VINES 4.1x
	------------------------
	
	When you set up Windows for use with Banyan VINES 4.1, the following
	entries are added to the [386Enh] section of your SYSTEM.INI file:
	
	       Network=*dosnet, *vnetbios, vvinesd.386
	       TimerCriticalSection=5000
	       UniqueDOSPSP=TRUE
	       PSPIncrement=5
	
	See SYSINI.WRI for more information on these settings.
	
	In addition:
	
	- If you are running VINES 4.10 or 4.11 (below 4.11(5)) and you have
	problems printing, you may need to upgrade your VINES.DRV. This driver
	is available from Banyan.
	
	- If you are running Banyan VINES 4.10 or 4.11, you do not need to
	load
	NetBIOS unless you are running NetBIOS-specific applications.  (It is
	not required for printing, as it is with VINES 4.0x.)
	
	If you are running version 4.10 and you want to run NetBIOS-specific
	applications with Windows running in 386 enhanced mode, you must start
	NetBIOS before starting Windows. However, you can only run a single
	NetBIOS application at a time.
	
	If you are running version 4.11, you can load NetBIOS either before
	starting Windows or after starting Windows in 386 enhanced mode.\177
	
	If you want to run NetBIOS with Windows running in standard mode, you
	must load NetBIOS from within Windows.  If you load NetBIOS before
	starting Windows, you will not be able to start any non-Windows
	applications.
	
	For more information on running memory-resident applications after
	starting Windows, see Chapter 7, "Non-Windows Applications," in the
	Microsoft Windows User's Guide.
	
	2.4  DEC Pathworks
	------------------
	
	Windows version 3.1 supports DEC Pathworks versions 4.0 and above.
	
	When you set up Windows for use with a DEC Pathworks network, the
	following entries are added to the [386Enh] section of your SYSTEM.INI
	file:
	
	Network=*dosnet, decnet.386, decnb.386
	TimerCriticalSection=10000
	
	For more information about these settings, see the SYSINI.WRI file.
	
	In addition:
	
	- DEC Pathworks supports additional API that are not supported by the
	files installed by Windows 3.1.
	
	- If you have problems starting Windows, or copying or opening files,
	you may need to increase the value of the FILES= command in your
	CONFIG.SYS file. Try setting the value to 30.
	
	- If you have problems running NetBIOS applications, try replacing the
	decnb.386 entry with *vnetbios in the network=  line in the [386Enh]
	section of the SYSTEM.INI file.
	
	2.5  IBM OS/2 LAN Server
	------------------------
	
	IBM OS/2 LAN Server, which is also known as IBM DOS LAN Requester, is
	based on Microsoft LAN Manager. Windows supports LAN Server versions
	1.2 and higher.
	
	- LAN Server versions 1.2 and 1.3 are equivalent to Microsoft Network
	and are handled as such by Windows.
	
	- LAN Server version 1.3 CSD 5015 or higher is equivalent to Microsoft
	LAN Manager version 2.0 and is handled as such by Windows.
	
	- LAN Server version 2.0 comes with its own Windows components which
	are automatically used by the Windows part of Setup.
	
	In addition:
	
	- If the network Browse functions in Windows File Manager and Control
	Panel do not show all the available servers, you may need to increase
	the LAN Server /NVS option. You can do this by adding the following
	line to the DOSLAN.INI file in your LAN Server directory:
	
	  /NVS:1
	
	Set the value to a number at least as large as the number of servers
	in your domain.
	
	- If you want to receive pop-up messages while working in Windows,
	make sure the following lines are included in the DOSLAN.INI file in
	your LAN Server directory:
	
	/NMS:2
	/RCV
	/POP
	
	The value of /NMS may be set higher but must be a minimum of 2.
	
	You must also make sure the entry load=WinPopup is included in the
	[windows] section of your WIN.INI file.
	
	2.5.1  IBM LAN Server 1.2 and 1.3
	---------------------------------
	
	- Running Windows with LAN Server 1.3 with CSD 5015 or later requires
	the files LANMAN.DRV, LANMAN.HLP, WINPOPUP.EXE, WINPOPUP.HLP,
	NETAPI.DLL, and PMSPL.DLL. These files should be located in your LAN
	Server directory. If your version of LAN Server does not provide these
	files, the Windows part of Setup will copy them to your Windows SYSTEM
	directory.
	
	- LAN Server versions below 2.0 do not allow you to use the IBM OS/2
	LAN Server aliasing scheme from inside Windows applications.
	
	- LAN Server versions below 2.0 do not allow you to log on through
	Windows Control Panel. Doing so may cause your machine to lock up.
	Always log on at an MS-DOS prompt, either before starting Windows or
	while Windows is running.
	
	- Windows includes updated versions of the NETAPI.DLL and PMSPL.DLL
	files shipped with LAN Server. These files are installed during Setup
	for versions 1.3 with CSD 5015 or higher.
	
	2.5.2  IBM LAN Server 2.x
	-------------------------
	
	- Running Windows with LAN Server version 2.x requires the files
	LANSRV.DRV, LANSRV.HLP, WINDLR.DLL, NETAPI.DLL, PMSPL.DLL,
	WINPOPUP.EXE, and WINPOPUP.HLP be located on your path. These files
	should be located in your LAN Server directory.
	
	2.6  IBM PC LAN Program
	-----------------------
	
	The IBM PC LAN Program is based on the Microsoft Network product and
	will be handled as such by Windows.
	
	When setting up Windows for use with IBM PC LAN Program, the following
	entry is added to the [386Enh] section of the SYSTEM.INI file:
	
	INDOSpolling=TRUE
	
	See the online document, SYSINI.WRI, for more information on this
	setting.
	
	In addition:
	
	- When you connect to a network share by using File Manager, that
	redirection will not be detected by non-Windows applications.
	
	- The IBM PCLP Extended Services refers to network drives and printers
	by two different names. Usually, when connecting to a network, you
	select connections from a list containing descriptive names, but
	internally connections are made using hidden names such as
	\\SERVER\IBMXS001.
	
	With PCLP Extended Services, you must type the same name as the hidden
	names in Control Panel or File Manager to make new network
	connections. Consult your network administrator to learn the proper
	names to use.
	
	- Some versions of PCLP lock up your system if you receive a broadcast
	message while running Windows. You can disable these messages with the
	net pause messenger command. Or you can start up your network with net
	start rdr instead of net start rcv or net start msg commands.
	
	- When you connect to a network printer by using Control Panel, the
	connection will not be detected by non-Windows applications. It will,
	however, still be usable by Windows and Windows applications.
	
	2.7  Invisible Software - NET/30 For Windows
	--------------------------------------------
	
	To use NET/30 For Windows, choose the Custom Setup option when you run
	Setup. For your network configuration, choose Other Network (Requires
	disk from OEM). You are prompted for a path to the directory
	containing your NET/30 files. Your SYSTEM.INI and WIN.INI files will
	automatically be updated.
	
	If you are setting up Windows on a nondedicated file server and you
	are sharing a serial printer, you must add a line to the SYSTEM.INI
	file. If you are sharing COM1, add the following line in the [386Enh]
	section:
	
	COM1AutoAssign=0
	
	If you are sharing COM2, add the following line to the [386Enh]
	section:
	
	COM2AutoAssign=0
	
	2.8 Microsoft LAN Manager Networks
	----------------------------------
	
	Many networks, such as IBM LAN Server, Digital Pathworks, and 3Com
	3+Open are based on Microsoft LAN Manager. Consult your network
	documentation, network distributor, or system administrator to learn
	whether your network belongs in this category, and if so, on which
	version of LAN Manager it is based.
	
	The following notes include general information about using LAN
	Manager networks and information about specific versions of LAN
	Manager.
	
	2.8.1  Using the Ungermann-Bass XNS Transport Stack
	---------------------------------------------------
	
	If you are using the Ungermann-Bass XNS transport stack and running
	Windows in 386 enhanced mode, you must make sure the transport stack
	is not using expanded memory. If your system is configured to provide
	expanded memory with a memory manager such as EMM386, you can disable
	that product's expanded-memory option. Or, if you want to continue
	using expanded memory, you can disable its use by the Ungermann-Bass
	transport stack as follows:
	
	1. Open your PROTOCOL.INI file by using a text editor such as Windows
	  Notepad. PROTOCOL.INI is located in your LAN Manager directory.
	
	2. Find the section [XNS_XIF].
	
	  If you're using Notepad, you can find this section by choosing Find
	  from the Search menu, typing [XNS_XIF], and then choosing the OK
	  button.
	
	3. Add a line NOEMM, or, if the line already exists, make sure that it
	  is not commented out with a semicolon (;) at the beginning of the
	  line.
	
	4. Save your PROTOCOL.INI file.
	
	5. Restart your workstation.
	
	2.8.2  Using LAN Manager and Expanded Memory
	--------------------------------------------
	
	If you are running Windows in 386 enhanced mode, it is recommended
	that you not use expanded memory with LAN Manager. If you do, you may
	find that your system slows down considerably or it may lock up
	occasionally. If this is a problem, turn off the use of expanded
	memory by modifying your LANMAN.INI and PROTOCOL.INI files. The exact
	procedure will vary depending on what components you are running. See
	your LAN Manager documentation for further details.
	
	1. Open your LANMAN.INI file by using a text editor such as Notepad.
	  LANMAN.INI is located in your LAN Manager directory.
	
	2. Find or add the section [workstation].
	
	  If you're using Notepad, you can find this section by choosing Find
	  from the Search menu, typing [workstation], and then choosing the
	  OK button.
	
	3. Find or add the lim= line in this section, and then add the
	  following line:
	
	    lim=no
	
	4. Save your LANMAN.INI file.
	
	5. Restart your workstation.
	
	Or you can stop your workstation and restart it again using the net
	stop workstation and net start workstation commands.
	
	In addition, you may want to configure other network components (such
	as protocol stacks) to avoid using expanded memory. Consult your
	network documentation for the specific component for instructions on
	how to do this.
	
	2.8.3  Using Pop-up Services
	----------------------------
	
	LAN Manager Enhanced includes pop-up services you can use to see
	incoming broadcast messages. These pop-up services can disrupt the
	Windows screen display, so you must either disable them or run the LAN
	Manager WinPopup utility so they can coexist with Windows.
	
	The WinPopup utility should be located in your LAN Manager NETPROG
	directory, included in your path. To automatically start the utility
	when you start Windows, include the following entry in the [windows]
	section of your WIN.INI:
	
	load=winpopup.exe
	
	If you set up Windows for use with LAN Manager version 2.0 or 2.1
	Enhanced, the Windows part of Setup adds this line to your WIN.INI
	file. If you are running LAN Manager 1.x Enhanced, you must insert
	this line yourself. See WININI.WRI for information on modifying your
	WIN.INI file. If you are using LAN Manager 1.x, you also need to
	obtain an updated version of NETPOPUP.EXE from your network dealer.
	
	Note: Windows version 3.1 includes an updated version of the WinPopup
	utility. This utility may not be compatible with all networks that are
	based on Microsoft LAN Manager. If you are running AT&T/NCR StarGroup
	LAN Manager version 2.0 Release 3.5, you should use the WNETMSG
	utility provided instead of WinPopup.
	
	Alternatively, if you want to disable the pop-up services, use the
	following procedure:
	
	1. Find your LAN Manager root directory.
	
	2. Use Notepad to open the LANMAN.INI file, and locate the line that
	  begins with wrkservices=.
	
	3. Remove the netpopup or minipop entry from this line.
	
	If you remove the netpopup and minipop entries but leave the messenger
	entry, messages will still be received but will be recorded in the
	MESSAGES.LOG file in your LAN Manager directory rather than being
	displayed on the screen. If you do not want to log your messages, you
	can also remove the messenger entry from this same line.
	
	4. Save the file.
	
	5. Quit Windows, and then restart your workstation.
	
	2.8.4  LAN Manager Basic
	------------------------
	
	When you set up Windows for use with LAN Manager Basic (all versions),
	the following entry is added to the [386Enh] section of your
	SYSTEM.INI file:
	
	network=*dosnet, *vnetbios, lanman10.386
	
	See the SYSINI.WRI file for more information on this entry.
	
	Network software based on LAN Manager Basic, or on LAN Manager
	Enhanced without full API support, must not be loaded in the high
	memory area (the first 64K of extended memory).
	
	You need to modify the LANMAN.INI file in your network directory to
	prevent the network from loading in the HMA. Find all lines that begin
	with redir and add the following command-line option to each:
	
	/HIMEM:NO
	
	2.8.5  LAN Manager 1.x
	----------------------
	
	Some early copies of LAN Manager 1.x require a maintenance upgrade to
	run with Windows. If you experience problems, contact your network
	vendor for an upgrade.
	
	2.8.6  LAN Manager 2.0 Enhanced
	-------------------------------
	
	When you set up Windows for use with LAN Manager 2.0 Enhanced, the
	following entry is added to the [386Enh] section of your SYSTEM.INI
	file:
	
	network=*vnetbios, *dosnet
	
	See the SYSINI.WRI file for more information on this entry.
	
	For Windows to support LAN Manager 2.0 Enhanced, you must have the
	files NETAPI.DLL, PMSPL.DLL, LANMAN.DRV, LANMAN.HLP, WINPOPUP.EXE, and
	WINPOPUP.HLP. These files are located in your LAN Manager NETPROG
	directory, which should be in your path. Windows also includes updated
	versions of these files, which will be automatically installed on some
	older versions of LAN Manager.
	
	2.8.7  LAN Manager 2.1 Basic
	----------------------------
	
	If you upgrade from an earlier version of LAN Manager Basic to version
	2.1 Basic using the Over-the-Network Upgrade process, your SYSTEM.INI
	and WIN.INI files may be left with incorrect information. This will
	only happen if your upgrade procedure has been configured to update
	Windows installations.
	
	This problem will cause you to receive a warning that "WinPopup"
	cannot be found, and all network functions in Windows File Manager,
	Print Manager, and Control Panel will be unavailable.
	
	To correct this problem, follow these steps:
	
	1.  Open your WIN.INI file by using a text editor such as Notepad.
	   WIN.INI is located in your Windows directory.
	
	2.  Find or add the load= line in the file.
	
	   If you're using Notepad, you can find this section by choosing
	   Find from the Search menu, typing load=, and then choosing the OK
	   button.
	
	3.  Remove the word WinPopup or WinPopup.exe from this line.
	
	4.  Save your WIN.INI file.
	
	5.  Quit Windows.
	
	6.  Change to the Windows directory.
	
	7.  Start Windows Setup by typing setup at the MS-DOS prompt.\177
	
	8.  Choose the Network entry to display a list of network options.
	
	9.  Choose the option Microsoft LAN Manager (version 2.1 Basic).
	
	10. Choose to accept the configuration shown.
	
	11. Restart Windows.
	
	2.8.8  LAN Manager 2.1 Enhanced
	-------------------------------
	
	When you set up Windows for use with LAN Manager 2.1 Enhanced, the
	following entry is added to the [boot] section of your SYSTEM.INI
	file:
	
	Network.drv=lanman21.drv
	
	See the SYSINI.WRI file for more information on this entry.
	
	For Windows to support LAN Manager 2.1 Enhanced, you must have the
	files NETAPI.DLL, PMSPL.DLL, LANMAN21.DRV, LM21_W31.HLP, WINPOPUP.EXE,
	and WINPOPUP.HLP. These files are usually located in your LAN Manager
	NETPROG directory, which is on your path. If Windows cannot find any
	of these files, you may receive warning messages when starting
	Windows, or be unable to use Windows network functions.
	
	2.9  Microsoft Network and Compatibles
	--------------------------------------
	
	If a network is present and detected, but cannot be identified during
	Setup, the Microsoft Network is the default network that may be set
	up. The following notes apply to the general category of networks that
	support the MS-DOS network interface and NetBIOS protocols.
	
	When you set up Windows for use with Microsoft Network, the following
	entries are added to the [386Enh] section of the SYSTEM.INI file:
	
	TimerCriticalSection=10000
	UniqueDOSPSP=TRUE
	PSPIncrement=5
	
	For some networks, you may be able to remove one or more of these
	entries to improve performance. For more information about these
	entries, see the SYSINI.WRI file.
	
	In addition:
	
	- If the path to your network software is not included in the path in
	your AUTOEXEC.BAT file, Setup does not detect a network and proposes
	"No Network Installed" for your system configuration. Use Custom Setup
	to specify that the Microsoft Network is installed.
	
	- Due to the way some networks handle print queues, Print Manager
	cannot distinguish multiple print queues on the same server. The lists
	of print jobs in these queues might be displayed improperly. In
	addition, Print Manager might not be able to display the job title
	when displaying queue information.
	
	- The Microsoft network driver does not support any vendor's name-
	aliasing scheme.
	
	2.10  Novell NetWare
	--------------------
	
	Windows version 3.1 includes updated versions of several Novell
	NetWarefiles that are required to run with Windows 3.1. If you are
	running Novell NetWare, the Windows part of Setup will copy the
	following files to the SYSTEM subdirectory of your Windows directory
	(or the shared network directory if you set up a shared copy of
	Windows by using setup /n).
	
	NETX.COM (version 3.26)
	IPX.OBJ (version 3.10)
	TBMI2.COM (version 2.1)
	IPXODI.COM (version 1.20)
	LSL.COM (version 1.21)
	
	Before running Windows you may need to do the following:
	
	- Replace your current NetWare shell with the NETX.COM provided (if
	your current NetWare shell is older than the version provided).
	Windows 3.1 requires that the NetWare shell components on your
	workstation (such as NET5.COM) be version 3.01 or higher. You can use
	these shell components even if your servers are running older versions
	of NetWare (as early as NetWare 2.10).
	
	Your current shell may have one of the following names:
	
	NET3.COM        XMSNET3.EXE     EMSNET3.EXE
	NET4.COM        XMSNET4.EXE     EMSNET4.EXE
	NET5.COM        XMSNET5.EXE     EMSNET5.EXE
	NETX.COM       XMSNETX.EXE     EMSNETX.EXE
	
	NETX.COM will run on MS-DOS versions 3.1 or higher. The EMS and
	XMS versions of the shell are available from your Novell dealer.
	
	Note: The EMS NetWare shells (EMSNETX.EXE, etc.) are not supported
	when Windows is running in 386 enhanced mode.
	
	- If you are running Novell IPXODI.COM and LSL.COM, you need to
	upgrade these to versions 1.20 or higher. Use the files provided with
	Windows and copy them from the SYSTEM subdirectory of your Windows
	directory (or your shared network directory) to the directory where
	your existing versions are located.
	
	- To run Windows in standard mode, load the TBMI2.COM memory-resident
	utility when running Windows. Novell recommends that you create a
	batch file that will load this utility, start Windows, and then unload
	the utility when you quit Windows. The batch file could be named
	RUNWIN.BAT and look like this:
	
	TBMI2
	WIN
	TBMI2 /U
	
	TBMI2 enables you to safely run applications that use the NetWare IPX
	and SPX functions in standard mode Windows or the MS-DOS 5.0 task
	switcher.
	
	- If you are running Novell IPX.COM, you need to have your system
	administrator build you a new version using the IPX.OBJ provided with
	Windows.
	
	In addition:
	
	- If you enable 32-bit disk access and you are running the XMS shell
	rather than one of the standard NetWare shells (NETX.COM, etc.), you
	can further improve performance by setting the OverlappedIO entry in
	the [386Enh] section of your SYSTEM.INI file to on.
	
	- Do not try to log in, log out, attach, or detach a Novell server
	from MS-DOS Prompt within Windows. You should log in before starting
	Windows, and attach or detach servers by using File Manager or the
	Printers option in Control Panel.
	
	- If you experience problems starting applications while running
	Windows or Windows applications from a file server, make sure you are
	not running the MS-DOS SHARE utility. Current versions of the NetWare
	shell are not fully compatible with SHARE.
	
	- If you have a Western Digital Ethercard Plus and have problems
	accessing drives by using the MAP ROOT command, contact Western
	Digital for an updated driver.
	
	- By default, NetWare gives you access to only 40 files at a time.
	When you are running applications with Windows, you can exceed this
	limit rather quickly. If so, you might see unexpected error messages.
	To increase the file access limit, add the following line to your
	SHELL.CFG file:
	
	file handles = 60
	
	You should also add the following to your CONFIG.SYS file:
	
	files = 60
	
	- If you get unusable output when printing to a NetWare server (such
	as incorrect fonts, garbled text, invalid page breaks, or blank
	lines), you may need to edit your print-job configuration. Try using
	the NetWare PRINTCON utility to set the Auto Endcap and Enable Timeout
	options to No.
	
	- When running Windows in 386 enhanced mode, swapping to a drive on a
	NetWare 286 server might make starting Windows take up to a minute.
	See Chapter 14, "Optimizing Windows," in the Microsoft Windows User's
	Guide for information about controlling the location of your swap
	file.
	
	- A NetWare file server does not include the directory entries dot (.)
	and double dot (..) as MS-DOS does. However, the NetWare shell
	(version 3.01 or higher) can emulate these entries when applications
	attempt to list the files in a directory. If you have problems listing
	files or deleting directories, turning on the Show Dots feature will
	help. Add the following line to your SHELL.CFG file:
	
	show dots = on
	
	Turning on Show Dots will cause problems with earlier versions of some
	286-based NetWare utilities, such as BINDFIX.EXE and MAKEUSER.EXE.
	Make sure you upgrade these utilities if you upgrade your NetWare
	shell. For more information, contact your Novell dealer.
	
	- Redirected drives can look different in Windows than they did
	without Windows. For example, a device mapped as
	FileServerName/Volume:Directory will appear in Windows as
	FileServerName/Volume:\, showing the root of the file server's shared
	volume, rather than the subdirectory you expected. You can correct
	this with the MAP ROOT entry explained in the following information.
	
	- In some cases, Windows applications may change the default directory
	on a drive. This might cause problems if, for example, your path
	includes the current directory on a network drive (that is, your path
	includes a drive letter without a specific directory, such as z:
	instead of z:\system).
	
	You can prevent this problem by using MAP.EXE and LOGIN.EXE versions
	3.0 and later to set up fake roots, or by choosing the MAP ROOT
	function when mapping a connection in File Manager. This feature
	simulates the MS-DOS subst command, which sets the root of a given
	drive to a directory designated by the user instead of to the true
	root of the volume.
	
	For example, suppose you normally mapped drive F to the HOME\TERRI
	directory on the SERVER\SYS volume, and then included F: in your path.
	You would do this by including the following command in your
	AUTOEXEC.BAT file or by typing the command before starting Windows:
	
	map f:=count\sys:home\terri
	
	The default directory on drive F would then be HOME\TERRI. To prevent
	Windows from changing this, you would replace the command above with
	the one shown below:
	
	map root f:=count\sys:home\terri
	
	This command would make the directory HOME\TERRI appear to be  the
	root drive F.
	
	- If you are running Windows in 386 enhanced mode, you can adjust the
	way Windows handles your network drive mappings by using the Network
	option in Control Panel.
	
	Normally, when you quit Windows, all of your drive mappings are
	restored to the way they were before you started Windows, and all
	changes you made inside Windows are lost. If you clear the Restore
	Drives option, the mappings you made inside Windows will remain when
	you quit Windows.
	
	Typically, each instance of MS-DOS Prompt you start from Windows has
	its own set of drive mappings. Changes you make in one instance do not
	affect another. If you set the NWShareHandles option, drive mappings
	will instead be global, and changes made in one instance of MS-DOS
	Prompt will affect all other applications. If you are running a
	NetWare 286 server, setting NWShareHandles increases the number of
	workstations that can be connected to the server before the server
	runs out of available connections.
	
	See the Help available in the Network dialog box in Control Panel for
	more information on these options.
	
	- When setting up Windows for use with Novell NetWare, the following
	entry is added to the [windows] section of your WIN.INI file:
	
	load=nwpopup.exe
	
	This automatically starts the NetWare pop-up utility, which displays
	your incoming broadcast messages.
	
	- If you are running Novell NetBIOS, you may need to specify
	TimerCriticalSection=10000 in the [386Enh] section of the SYSTEM.INI
	file.
	
	- If you have applications or files that use extended characters
	(ASCII characters above 128) and you have problems viewing or using
	them, try adding the following line to your SHELL.CFG file:
	
	       special uppercase = on
	
	- When connecting or disconnecting network resources from File
	Manager, Print Manager, or Control Panel, pay attention to the state
	of the Permanent check box. If this option is checked when you make a
	connection, the connection is automatically made each time you restart
	Windows. To stop reconnecting, disconnect with the Permanent option
	checked. If the option is not checked when you disconnect, the
	connection is removed for the current Windows session, but is
	reconnected when you restart Windows.
	
	2.11  TCS 10Net
	
	Tiara Computer Systems 10Net (formerly known as DCA 10Net) versions
	4.1 and above are compatible with Windows version 3.1. The Windows
	part of Setup treats these as Microsoft Network compatible.
	
	When setting up Windows for use with TCS 10Net, the following entry is
	added to the [386Enh] section of your SYSTEM.INI file:
	
	TimerCriticalSection=10000
	
	The TimerCriticalSection value may be set lower on some versions of
	10Net. For more information about this entry, see the SYSINI.WRI file.
	
	To set up Windows for use with TCS 10Net version 4.1x with the DCA 1Mb
	card, run Custom Setup and choose the TCS 10Net (versions 4.1X with
	DCA 1M card) network option. The Windows part of Setup adds the
	following entries to the [386Enh] section of your SYSTEM.INI file:
	
	INDOSPolling=TRUE
	PSPIncrement=5
	TimerCriticalSection=10000
	UniqueDOSPSP=TRUE
	
	For more information about these settings, see the SYSINI.WRI file.
	
	In addition:
	
	- If you purchase 10Net for Windows, it will install additional
	Windows components that will enhance the functionality available in
	Windows File Manager, Control Panel, and Print Manager.
	
	- You cannot use File Manager to format floppy disks when running
	versions of 10Net prior to 5.0.
	
	2.12  Ungermann-Bass Net/One
	----------------------------
	
	Make sure you choose the proper network option when you set up
	Windows.
	
	- Ungermann-Bass Net/One is based on Microsoft Network. Choose the
	Microsoft Network Or 100% Compatible option when running the Windows
	and MS-DOS Setup program.
	
	- Ungermann-Bass Net/One LAN Manager is based on Microsoft LAN
	Manager. Choose the Microsoft LAN Manager option when running the
	Windows and MS-DOS Setup program. Setup should correctly identify
	your network and the proper version number.
	
	In addition:
	
	If you are using an Ungermann-Bass network card with any network,
	including networks not produced by Ungermann-Bass, your system may not
	run correctly in 386 enhanced mode unless you have the proper settings
	in your SYSTEM.INI file.
	
	If you experience problems, follow these steps:
	
	1. Open your SYSTEM.INI file by using a text editor such as Notepad.
	  SYSTEM.INI is located in your Windows directory.
	
	2. Find or add the [386Enh] section in the file.
	
	  If you're using Notepad, you can find this section by choosing Find
	  from the Search menu, typing [386Enh], and then choosing the OK
	  button.
	
	3. Find or add the TimerCriticalSection=10000 line in this section.
	
	4. Save your SYSTEM.INI file.
	
	5. Quit and restart Windows.
	
	- If you are using an Ungermann-Bass XNS transport stack, you must
	make sure it is configured not to use expanded memory when running
	Windows version 3.1 in 386 enhanced mode.
	
	3.0  Other Online Documents
	---------------------------
	
	The following table describes other online documents that contain
	important information about Windows version 3.1 that is not included
	in the Microsoft Windows User's Guide or in online Help.
	
	Document       Information
	--------       -----------
	
	APPS.HLP:      Information about updating some older Windows
	              applications for use with Windows version 3.1. You can
	              view this file by starting Windows Help from any
	              application, and then using the Open command on the
	              File menu to open the file. For more information about
	              using Help, see Chapter 1, "Windows Basics," in the
	              Microsoft Windows User's Guide.
	
	SETUP.TXT:     Information about problems that may occur when you are
	              setting up Windows.
	
	README.WRI:    Information about using Windows with Multimedia
	              Extensions 1.0, specific displays and system
	              configurations, and non-Windows applications, and
	              information that was unavailable when the Microsoft
	              Windows User's Guide was printed.
	
	PRINTERS.WRI:  Information about particular printers and fonts.
	
	SYSINI.WRI:    Information about the settings in the SYSTEM.INI file.
	
	WININI.WRI:    Information about the settings in the WIN.INI file.
	
	Additional query words: 3.10 3.1 5.00a 5.0a NOVELL.EXE NOUPD
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbMSDOSSearch kbMSDOS500
	Version           : :
	
	=============================================================================
	
