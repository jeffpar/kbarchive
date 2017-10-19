---
layout: page
title: "Q93452: NETWORKS.WRI from Windows for Workgroups Version 3.1"
permalink: /kb/093/Q93452/
---

## Q93452: NETWORKS.WRI from Windows for Workgroups Version 3.1

	Article: Q93452
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.1 NETWORKS.WRI file.
	
	MORE INFORMATION
	================
	
	This document contains information about specific networks. For
	additional information about Windows for Workgroups that does not
	pertain to networks, see "Other Online Documents" at the end of this
	document.
	
	Using Write to View This Document
	---------------------------------
	
	If you enlarge the Write window to its maximum size, this document
	will be easier to read. To do so, click the Maximize button in the
	upper-right corner of the window. Or open the Control menu in the
	upper-left corner of the Write window (press ALT+SPACEBAR), and then
	choose the Maximize command.
	
	To move through the document, press PAGE UP or PAGE DOWN. Or click the
	arrows at the top and bottom of the scroll bar along the right side of
	the Write window.
	
	To print the document, choose Print from the File menu.
	
	For Help on using Write, press F1.
	
	To read other online documents, choose Open from the File menu.
	
	Contents
	--------
	
	This document contains information about the following topics:
	
	  1.0  General Notes
	  2.0  Using Novell NetWare
	  3.0  Other Online Documents
	
	1.0  General Notes
	------------------
	
	There are many settings in the SYSTEM.INI file that affect the way
	Windows for Workgroups works. You can change these settings to correct
	most problems you might have while using Windows for Workgroups and
	other networks. See the SYSINI.WRI online document for information
	about changing the following SYSTEM.INI settings:
	
	  [Boot]
	  Network.drv=
	  SecondNet.drv=
	
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
	  ReflectDOSInt2A=
	  SecondNet=
	  TimerCriticalSection=
	  Transport=
	  TokenRingSearch=
	  V86ModeLANAs=
	  UniqueDOSPSP=
	
	  [network]
	  Exclude=
	  LANAs=
	
	The Windows for Workgroups Setup program places the following lines in
	your SYSTEM.INI file that are required for Windows for Workgroups to
	run correctly. Do not remove any of the following entries:
	
	  [boot]
	  network.drv=wfwnet.drv
	
	  [386Enh]
	  network=vnetbios.386,vnetsup.386,vredir.386,vserver.386,vbrowse.386,
	  vwc.386
	
	If you have upgraded over a previous version of Windows 3.0 or 3.1
	with an installed network, Setup may leave entries that may be
	unnecessary, causing performance problems or incorrect network
	behavior.  If you experience network problems and have any of these
	lines in your SYSTEM.INI file (or WIN.INI file), try removing the
	lines to see if the problem can be corrected.
	
	In the SYSTEM.INI file:
	
	  [386Enh]
	  INDOSPolling=TRUE
	  EMMExclude=D800-DFFF (or other memory range)
	  TimerCriticalSection=5000 (or other value)
	  UniqueDOSPSP=TRUE
	  PSPIncrement=5
	  NetHeapSize=76 (or other value)
	  NetAsynchTimeout=50
	  NetAsynchFallback=true
	  PerVMFiles=0
	  OverlappedIO=off
	  device=baninst.386
	  device=vvinesd.386
	  device=decnet.386
	  device=decnb.386
	  device=lantasti.386
	  device=vnetware.386
	  device=vipx.386
	  device=lanman10.386
	
	In the WIN.INI file:
	
	  load=winpopup.exe
	  load=nwpopup.exe
	
	  [ports]
	  LPT1.DOS=
	  LPT2.DOS=
	  LPT3.DOS=
	
	Many protocols and other networks require the TimerCriticalSection
	line in the [386Enh] section of the SYSTEM.INI file to be set to a
	value of 10000 or greater. For more information, see the SYSINI.WRI
	online document.
	
	The default value for the NetHeapSize line in the [Standard] section
	of the SYSTEM.INI file is 8K. Although some applications require this
	value, in most cases you can decrease the value to 4K in order to
	increase the amount of memory available to your applications. A few
	applications require the value to be 4K.
	
	If you want to change your network configuration, use Control Panel to
	make the changes.
	
	Some network adapters require the ExcludeHighRegion (or EMMExclude)
	line in the [386Enh] section of the SYSTEM.INI file to be set to the
	memory range used by the adapter. For more information, see your
	network-adapter documentation and the SYSINI.WRI online document.
	
	These cards may also require an x= option on the EMM386 command line
	in your CONFIG.SYS file. For more information, see Chapter 11,
	"Managing Memory and Performance," in the Microsoft Windows for
	Workgroups User's Guide. If you are using 386Max, QEMM, or another
	memory manager, see your memory-manager documentation to find out
	whether you need to exclude this area.
	
	The Windows for Workgroups Resource Kit for the Microsoft Windows for
	Workgroups Operating System Version 3.1 contains additional
	information about setting up and configuring Windows for Workgroups
	for use with other networks and information for system administrators.
	This kit provides complete technical information about Windows for
	Workgroups for the support professional. It includes a technical
	reference manual and a disk containing helpful utilities, system-
	resource viewers, drivers, and accessories.
	
	To order the Windows for Workgroups Resource Kit within the United
	States, call (800) 642-7676.
	
	To order outside the United States, dial the phone number for your
	area. You can find this number on the International Subsidiary card.
	
	If you are running a shared copy of Windows for Workgroups from a
	network drive, make sure both your personal Windows directory and the
	shared network directory are included on the path command line in your
	AUTOEXEC.BAT file. To run a shared copy of Windows for Workgroups, you
	must start the network before starting Windows for Workgroups. (When
	you start the network before you start Windows for Workgroups, about
	100K less conventional memory is available.)
	
	If you used setup /n to set up a shared copy of Windows for
	Workgroups, and you specified a network directory for your personal
	Windows directory, you cannot start the network (real-mode redirector)
	before starting Windows for Workgroups unless you first copy your
	SYSTEM.INI file to the directory on your hard disk where NET.EXE is
	located. NET.EXE should be located in the root directory of your
	startup drive.
	
	If you receive sharing violations while running a shared copy of
	Windows for Workgroups, make sure that all of the files in the shared
	network directory are marked as read-only.
	
	Windows Print Manager spools print jobs to the location specified by
	the MS-DOS environment variable TEMP. If TEMP is not set, Print
	Manager will use the root of drive C. The TEMP variable may be set by
	placing a set temp= statement in the AUTOEXEC.BAT file or network
	login script. For example, to spool to the network directory
	C:\WINDOWS\TEMP, you would use the statement set temp=c:\windows\temp.
	Each user must have a personal TEMP directory.
	
	2.0  Using Novell NetWare
	-------------------------
	
	For information about setting up Novell NetWare support in Windows for
	Workgroups, see Appendix B, "Using Windows for Workgroups with Other
	Networks," in the Microsoft Windows for Workgroups User's Guide.
	
	Windows for Workgroups includes the following NetWare files:
	
	  NETX.COM (version 3.26)
	  MSIPX.SYS
	  MSIPX.COM
	
	Windows for Workgroups uses NDIS network-adapter drivers. ODI network-
	adapter drivers are not supported.
	
	In addition:
	
	When you set up NetWare support in Windows for Workgroups, the value
	of the LASTDRIVE command in your CONFIG.SYS file is set to P (unless
	the command already exists and has a value less than P). When you
	restart your computer, your login directory is drive Q. If you have
	any NetWare login scripts, make sure they reference the correct drive
	letter for your login directory.
	
	When the LASTDRIVE command is set to P, you can use letters from A to
	P to connect to other Windows for Workgroups computers or Microsoft
	LAN Manager servers. Letters after P are reserved for connecting to
	Novell NetWare servers.
	
	Do not try to log in, log out, attach, or detach a Novell server from
	MS-DOS Prompt within Windows. You should log in before starting
	Windows for Workgroups and attach or detach servers by using File
	Manager or Print Manager.
	
	If you are using a token-ring network and the driver on your Novell
	server does not support source routing (for example, IBM token-ring
	drivers prior to version 2.4), remove the ROUTE.COM statement from
	your AUTOEXEC.BAT file.
	
	If you have problems connecting to a Novell server, make sure the
	Adapter Media Type setting in Control Panel matches your Novell
	NetWare software configuration. For more information, see Chapter 6,
	"Troubleshooting," in the "Getting Started" manual.
	
	By default, NetWare allows you access to only 40 files at a time. When
	you are running applications with Windows, you can exceed this limit
	rather quickly. If so, you might see unexpected error messages. To
	increase the file access limit, add the following line to your
	SHELL.CFG file:
	
	  file handles = 60
	
	You should also add the following to your CONFIG.SYS file:
	
	  files = 60
	
	If you get unusable output when printing to a NetWare server (such as
	incorrect fonts, garbled text, invalid page breaks, or blank lines),
	you may need to edit your print-job configuration. Try using the
	NetWare PRINTCON utility to set the Auto Endcap and Enable Timeout
	options to No.
	
	If you run Windows for Workgroups in 386 enhanced mode, swapping to a
	drive on a NetWare 286 server might make starting Windows for
	Workgroups take up to a minute. For information about controlling the
	location of your swap file, see Chapter 11, "Managing Memory and
	Performance," in the "Microsoft Windows for Workgroups User's Guide."
	
	A NetWare file server does not include the directory entries dot (.)
	and double dot (..) as MS-DOS does. However, the NetWare shell
	(version 3.01 or higher) can emulate these entries when applications
	attempt to list the files in a directory. If you have problems listing
	files or deleting directories, turning on the Show Dots feature will
	help. Add the following line to your SHELL.CFG file:
	
	  show dots = on
	
	Turning on Show Dots will cause problems with earlier versions of some
	80286-based NetWare utilities, such as BINDFIX.EXE and MAKEUSER.EXE.
	Make sure you upgrade these utilities if you upgrade your NetWare
	shell. For more information, contact your Novell dealer.
	
	Redirected drives can look different in Windows for Workgroups from
	the way they did without Windows for Workgroups. For example, a device
	mapped as FileServerName/Volume:Directory will appear in Windows as
	FileServerName/Volume:\, showing the root of the file server's shared
	volume rather than the subdirectory. You can correct this with the MAP
	ROOT entry, as explained in the following information.
	
	In some cases, Windows-based applications may change the default
	directory on a drive. This might cause problems if, for example, your
	path includes the current directory on a network drive (that is, your
	path includes a drive letter without a specific directory, such as z:
	instead of z:\system).
	
	You can prevent this problem by using MAP.EXE and LOGIN.EXE versions
	3.0 and later to set up false roots, or by choosing the MAP ROOT
	function when mapping a connection in File Manager. This feature
	simulates the MS-DOS SUBST command, which sets the root of a given
	drive to a directory designated by the user instead of to the true
	root of the volume.
	
	For example, suppose you normally mapped drive F to the HOME\TERRI
	directory on the SERVER\SYS volume, and then included F: in your path.
	You would do this by including the following command in your
	AUTOEXEC.BAT file or by typing the command before starting Windows:
	
	  map f:=server\sys:home\terri
	
	The default directory on drive F would then be HOME\TERRI. To prevent
	Windows from changing this, you would replace the command above with
	the following:
	
	  map root f:=server\sys:home\terri
	
	This command would make the directory HOME\TERRI appear to be the root
	of drive F.
	
	If Windows for Workgroups is running in 386 enhanced mode, you can
	adjust the way Windows handles your network drive mappings by using
	the Network option in Control Panel.
	
	Usually, when you quit Windows for Workgroups, all of your drive
	mappings are restored to the way they were before you started Windows
	for Workgroups, and all changes you made while running Windows are
	lost. If you clear the Restore Drives option in the settings dialog
	box for NetWare, the mappings you made in Windows for Workgroups will
	remain when you quit.
	
	Typically, each instance of MS-DOS Prompt you start from Windows for
	Workgroups has its own set of drive mappings. Changes you make in one
	instance do not affect another. If you set the NWShareHandles option,
	drive mappings will instead be global, and changes to the mappings or
	the current drive made in one instance of MS-DOS Prompt will affect
	all other applications. If you are running a NetWare 286 server,
	setting NWShareHandles increases the number of workstations that can
	be connected to the server before the server runs out of available
	connections.
	
	See the Help available in the Network dialog box in Control Panel for
	more information on these options.
	
	If you have applications or files that use extended characters (ASCII
	characters above 128) and you have problems viewing or using them, try
	adding the following line to your SHELL.CFG file:
	
	  special uppercase = on
	
	When connecting or disconnecting network resources from File Manager,
	Print Manager, or Control Panel, pay attention to the state of the
	Permanent check box. If this option is selected when you make a
	connection, the connection is automatically made each time you restart
	Windows for Workgroups. To stop reconnecting, disconnect with the
	Permanent check box selected. If the option is not selected when you
	disconnect, the connection is removed for the current Windows session
	but is reconnected when you restart Windows for Workgroups.
	
	If you want to use IPX-based applications with Windows for Workgroups
	running in standard mode, you must be sure to load the TBMI2.COM
	memory-resident program before starting Windows for Workgroups.
	
	This file is included on the Windows for Workgroups Setup disks. You
	can use the MS-DOS expand command to copy it to your hard disk if it
	is not already there.
	
	If you were running Novell NetBIOS before you set up Windows for
	Workgroups, the Setup program attempts to remove it when you set up
	Windows for Workgroups. The following procedure describes how to
	install Novell NetBIOS after you have set up Windows for Workgroups.
	
	Note: This example assumes that you have one network adapter running
	Microsoft NetBEUI. For information about the settings used in this
	example and how to change them, see the SYSINI.WRI online document.
	
	To install Novell NetBIOS after you have set up Windows for
	Workgroups:
	
	1. Add the following line to the [network] section of your SYSTEM.INI
	  file:
	
	     exclude=0
	
	2. Add the following line to the [386Enh] section of your SYSTEM.INI
	  file:
	
	     V86ModeLANAs=0
	
	3. If you plan to start the network before you start Windows (run the
	  real-mode network), this line should read as follows:
	
	     V86ModeLANAs=0,1
	
	  You should also add the following line to the [network] section of
	  your SYSTEM.INI file:
	
	     LANAs=0,1
	
	  You should also add the following line to your AUTOEXEC.BAT file:
	
	     net start netbeui
	
	This line should come after the NET START command and after the line
	that loads NETBIOS.EXE, but before any other network commands.
	
	4. In your AUTOEXEC.BAT file, make sure that the line that loads
	  NETBIOS.EXE comes after the initial NET START command and after the
	  MSIPX and NETX commands but before any other commands that load
	  components of the Windows for Workgroups networking software (for
	  example, commands such as NET START NETBEUI or NET LOGON).
	
	After Windows for Workgroups is installed, applications that use named
	pipes to communicate with NetWare servers may no longer work
	correctly. Applications that use named pipes to communicate with
	Microsoft LAN Manager servers will work with Windows for Workgroups.
	
	Many network applications that use named pipes can also be configured
	to use another method of communicating on the network, such as IPX or
	SPX. Contact your network-application vendor for additional details.
	
	3.0  Other Online Documents
	---------------------------
	
	The following table describes other online documents that contain
	important information about Windows for Workgroups that is not
	included in the Microsoft Windows for Workgroups User's Guide or in
	Help.
	
	SETUP.TXT
	---------
	
	Information about problems that may occur when you set up Windows for
	Workgroups.
	
	README.WRI
	----------
	
	Information about using Windows for Workgroups with the Multimedia
	Extensions version 1.0, specific display-adapter and system
	configurations, and MS-DOS-based applications, and information that
	was unavailable when the Microsoft Windows for Workgroups User's Guide
	was printed.
	
	PRINTERS.WRI
	------------
	
	Information about specific printers and fonts.
	
	SYSINI.WRI
	----------
	
	Information about the settings in the SYSTEM.INI file.
	
	WININI.WRI
	----------
	
	Information about the settings in the WIN.INI file.
	
	Additional query words: 3.10 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
