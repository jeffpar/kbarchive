---
layout: page
title: "Q109501: NETWORKS.WRI from Windows for Workgroups 3.11 (Part 2 of 4)"
permalink: /kb/109/Q109501/
---

## Q109501: NETWORKS.WRI from Windows for Workgroups 3.11 (Part 2 of 4)

	Article: Q109501
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.11 NETWORKS.WRI file.
	
	MORE INFORMATION
	================
	
	2.2 More Information about Using Novell NetWare with Windows for
	Workgroups 3.11
	
	- When you set up NetWare support in Windows for Workgroups, the
	  value of the lastdrive command in your CONFIG.SYS file is set to P.
	  When you restart your computer, your login directory is drive Q. If
	  you have any NetWare login scripts, make sure they reference the
	  correct drive letter for your login directory.
	
	  When the lastdrive command is set to P, you can use letters from A to
	  P to connect to other Windows for Workgroups computers or Windows NT
	  or Microsoft LAN Manager servers. Letters after P are reserved for
	  connecting to Novell NetWare servers.
	
	- Do not try to log in, log out, attach, or detach a Novell server
	  from MS-DOS Prompt within Windows. You should log in before you start
	  Windows for Workgroups, and attach or detach servers by using File
	  Manager or Print Manager.
	
	- When you set up NetWare support in Windows for Workgroups for
	  IPXODI.COM and LSL.COM, Setup adds the odihlp command to your
	  AUTOEXEC.BAT file. It inserts it on the line following the ipxodi
	  command. Do not change the order of these lines.
	
	- If you are using a token-ring network and the driver on your Novell
	  server does not support source routing (for example, IBM token-ring
	  drivers earlier than version 2.4), remove the ROUTE.COM statement
	  from your AUTOEXEC.BAT file.
	
	- If you have problems connecting to a Novell server, make sure the
	  Adapter Media Type setting in Network Setup matches your Novell
	  NetWare software configuration. For more information, see Appendix C,
	  "Troubleshooting," in The Microsoft Workgroup Add-On "User's Guide."
	
	- By default, NetWare allows you access to only 40 files at a time.
	  When you are running applications with Windows, you can exceed this
	  limit rather quickly. If you do, you might see unexpected error
	  messages. To increase the file access limit, add the following line
	  to the beginning of your NET.CFG file:
	
	     file handles=60
	
	  You should also add the following to your CONFIG.SYS file:
	
	     files=60
	
	- If you get unusable output (such as incorrect fonts, garbled text,
	  invalid page breaks, or blank lines) when you try to print to a
	  NetWare server, you may need to edit your print-job configuration.
	  Try using the NetWare PRINTCON utility to set the Auto Endcap and
	  Enable Timeout options to No.
	
	- Swapping to a drive on a NetWare 286 server might make starting
	  Windows for Workgroups take up to a minute. For information about
	  controlling the location of your swap file, see Chapter 11, "Managing
	  Memory and Performance," in the Microsoft Windows for Workgroups
	  "User's Guide."
	
	- A NetWare file server does not include the directory entries dot
	  (.) and double dot (..) as MS-DOS does. However, the NetWare shell
	  (version 3.01 or later) can emulate these entries when applications
	  attempt to list the files in a directory. If you have problems
	  listing files or deleting directories, turn on the Show Dots feature.
	  To do this, add the following line to the beginning of your NET.CFG
	  file:
	
	     show dots=on
	
	  Turning on Show Dots will cause problems with earlier versions of
	  some 80286-based NetWare utilities, such as BINDFIX.EXE and
	  MAKEUSER.EXE. Make sure you upgrade these utilities if you upgrade
	  your NetWare shell. For more information, contact your Novell dealer.
	
	- Redirected drives can look different in Windows for Workgroups than
	  without Windows for Workgroups. For example, a device mapped as
	  FileServerName/Volume:Directory will appear in Windows as
	  FileServerName/Volume:\, showing the root of the file server's shared
	  volume rather than the subdirectory. You can correct this with the
	  MAP ROOT entry, as explained in the following information.
	
	- In some cases, Windows-based applications may change the default
	  directory on a drive. This might cause problems if, for example, your
	  path includes the current directory on a network drive (that is, your
	  path includes a drive letter without a specific directory, such as z:
	  instead of z:\system).
	
	  You can prevent this problem by using MAP.EXE and LOGIN.EXE versions
	  3.0 and later to set up false roots, or by choosing the MAP ROOT
	  function when you are mapping a connection in File Manager. This
	  feature simulates the MS-DOS subst command, which sets the root of a
	  given drive to a directory designated by the user instead of to the
	  true root of the volume.
	
	  For example, suppose you normally mapped drive F to the HOME\TERRI
	  directory on the SERVER\SYS volume, and then included F: in your
	  path. You would do this by including the following command in your
	  AUTOEXEC.BAT file or by typing the command before you start Windows:
	
	     map f:=server\sys:home\terri
	
	  The default directory on drive F would then be HOME\TERRI. To prevent
	  Windows from changing this, you would replace that command with the
	  following:
	
	     map root f:=server\sys:home\terri
	
	  This command would make the directory HOME\TERRI appear to be the
	  root of drive F.
	
	- You can adjust the way Windows handles your network drive mappings
	  by using the Network option in Control Panel.
	
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
	
	- If you have applications or files that use extended characters
	  (ASCII characters above 128) and you have problems viewing or using
	  them, try adding the following line to your NET.CFG file:
	
	     special uppercase = on
	
	- When you connect or disconnect network resources from File Manager,
	  Print Manager, or Control Panel, pay attention to the state of the
	  Permanent check box. If this option is selected when you make a
	  connection, the connection is automatically made each time you
	  restart Windows for Workgroups. To stop reconnecting, disconnect from
	  the network resource with the Permanent check box selected. If the
	  option is not selected when you disconnect, the connection is removed
	  for the current Windows session but is reconnected when you restart
	  Windows for Workgroups.
	
	- If you were running Novell NetBIOS before you set up Windows for
	  Workgroups, the Setup program attempts to remove it. We do not
	  recommend using the Novell NetBIOS protocol. Instead, use the IPX/SPX
	  protocol that is compatible with NetBIOS.
	
	  To install the IPX/SPX protocol that is compatible with NetBIOS:
	
	  1. In the Networks group, choose the Network Setup icon.
	
	  2. In the Network Setup dialog box, choose the Drivers button. The
	     Network Drivers dialog box appears.
	
	  3. Choose the Add Protocol button. The Add Network Protocol dialog
	     box appears.
	
	  4. Choose "IPX/SPX Compatible Transport with NetBIOS"  from the drop
	     down list box. Then choose OK.
	
	2.3 Changes to System Files
	
	The following sections describe the changes that Setup makes to your
	system files when you set up Windows for Workgroups 3.11 with these
	common configurations.
	
	2.3.1 IPXODI.COM and LSL.COM support over Ethernet or Token Ring Networks
	
	When you install Windows for Workgroups 3.11 with IPXODI.COM and
	LSL.COM support, the following lines are added to your SYSTEM.INI
	file:
	
	[386Enh]
	network=*vnetbios,*vwc,vnetsup.386,vredir.386,vserver.386
	transport=nwlink.386,nwnblink.386,netbeui.386
	secondnet=vnetware.386, vipx.386
	netmisc=ndis.386,msodisup.386
	netcard=
	InDOSPolling=FALSE
	netcard3=
	OverlappedIO=Off
	
	[network]
	multinet=netware3
	winnet=wfwnet/00025100
	
	[NetWare]
	NWShareHandles=FALSE
	RestoreDrives=TRUE
	
	[network drivers]
	netcard=
	transport=
	devdir=C:\WINDOWS
	LoadRMDrivers=No
	
	[NWNBLINK]
	LANABASE=1
	
	The following sample PROTOCOL.INI file is for a computer that
	contains a DEC Etherworks Turbo/TP  Ethernet Network Adapter.
	
	Bold lines designate lines specific to this network adapter and its
	configuration.
	
	NOTE: When using Novell's ODI drivers, the "BINDINGS=" should equal
	the Novell MLID name.
	
	[network.setup]
	version=0x3110
	netcard=ms$ewtrbtp,1,MS$EWTRBTP,4
	transport=ms$nwlinknb,NWLINK
	transport=ms$netbeui,NETBEUI
	lana0=ms$ewtrbtp,1,ms$netbeui
	lana1=ms$ewtrbtp,1,ms$nwlinknb
	
	[net.cfg]
	PATH=C:\NOVELL\net.cfg
	
	[MS$EWTRBTP]
	
	[Link Driver DEPCA]
	Frame Ethernet_SNAP
	Frame Ethernet_802.2
	Frame Ethernet_II
	Frame Ethernet_802.3
	
	[NWLINK]
	
	BINDINGS=DEPCA
	
	[NETBEUI]
	BINDINGS=DEPCA
	LANABASE=0
	SESSIONS=10
	NCBS=12
	
	The following sample PROTOCOL.INI file is for a computer that
	contains a IBM Token Ring 16/4 Network Adapter.
	
	Bold lines designate lines specific to this network adapter and its
	configuration.
	
	NOTE: When using Novell's ODI drivers, the "BINDINGS=" should equal
	the Novell MLID name.)
	
	[network.setup]
	version=0x3110
	netcard=ms$ibmtr4,1,MS$IBMTR4,4
	transport=ms$nwlinknb,NWLINK
	transport=ms$netbeui,NETBEUI
	lana0=ms$ibmtr4,1,ms$netbeui
	lana1=ms$ibmtr4,1,ms$nwlinknb
	
	[net.cfg]
	PATH=C:\NOVELL\net.cfg
	
	[MS$IBMTR4]
	
	[Link Driver TOKEN]
	Frame Token-Ring
	Link Driver TOKEN
	
	[NWLINK]
	
	BINDINGS=TOKEN
	
	[NETBEUI]
	BINDINGS=TOKEN
	LANABASE=0
	SESSIONS=10
	NCBS=12
	
	The following sample NET.CFG is for a computer with a DEC Etherworks
	Turbo/TP Ethernet Network Adapter. You may need additional entries in
	your NET.CFG file, depending on the way your network is set up.
	
	Lines shown here in bold type are added when you install Windows for
	Workgroups 3.11.
	
	SHOW DOTS=ON
	FILE HANDLES=60
	Link Driver DEPCA
	  Frame Ethernet_802.3
	  INT 5
	  PORT 300
	  MEM D8000
	  Frame Ethernet_II
	  Frame Ethernet_802.2
	  Frame Ethernet_SNAP
	
	The following NET.CFG is for a computer with a IBM Token Ring 16/4
	Network Adapter. You may need additional entries in your NET.CFG
	file, depending on the way your network is set up.
	
	Lines shown here in bold type are added when you install Windows for
	Workgroups 3.11.
	
	SHOW DOTS=ON
	FILE HANDLES=60
	Link Driver TOKEN
	  Frame Token-Ring
	
	2.3.2 IPX.COM Support
	
	When you install Windows for Workgroups 3.11 with IPX.COM support,
	the following lines are added to your SYSTEM.INI file:
	
	[386Enh]
	network=*vnetbios,*vwc,vnetsup.386,vredir.386,vserver.386
	transport=
	secondnet=vnetware.386,vipx.386
	netmisc=
	netcard=
	InDOSPolling=FALSE
	netcard3=nwsup.386,nwnblink.386
	OverlappedIO=Off
	
	[network]
	multinet=netware3
	winnet=wfwnet/00025100
	DirectHost=No
	
	[NetWare]
	NWShareHandles=FALSE
	RestoreDrives=TRUE
	
	[network drivers]
	netcard=
	transport=
	devdir=C:\WINDOWS
	LoadRMDrivers=No
	
	[NWNBLINK]
	LANABASE=0
	
	The following lines are added to your PROTOCOL.INI file (example for
	a NE2000 network adapter):
	
	[network.setup]
	version=0x3110
	netcard=ms$nwsupnb,1,MS$NWSUPNB,2
	lana0=ms$nwsupnb,1,mono
	
	[MS$NWSUPNB]
	
	[NWSUP]
	Adapters=MS$NWSUPNB
	
	2.3.3 IPXODI.COM and LSL.COM support over an ArcNet Network
	
	When you install Windows for Workgroups 3.11 with IPXODI.COM and
	LSL.COM support over an ArcNet network, the following lines are added
	to your SYSTEM.INI file:
	
	[386Enh]
	network=*vnetbios,*vwc,vnetsup.386,vredir.386,vserver.386
	transport=
	secondnet=vnetware.386,vipx.386
	netmisc=
	netcard=
	InDOSPolling=FALSE
	netcard3=nwsup.386,nwnblink.386
	OverlappedIO=Off
	
	[network]
	multinet=netware3
	winnet=wfwnet/00025100
	directhost=no
	
	[NetWare]
	NWShareHandles=FALSE
	RestoreDrives=TRUE
	
	[network drivers]
	netcard=
	transport=
	devdir=C:\WINDOWS
	LoadRMDrivers=No
	
	[NWNBLINK]
	LANABASE=0
	
	The following lines are added to your PROTOCOL.INI file:
	
	[network.setup]
	version=0x3110
	netcard=ms$nwsupnb,1,MS$NWSUPNB,2
	lana0=ms$nwsupnb,1,mono
	
	[MS$NWSUPNB]
	
	[NWSUP]
	Adapters=MS$NWSUPNB
	
	2.3.4 IPX.COM Support with an ArcNet Network
	
	When you install Windows for Workgroups 3.11 with IPX/SPX support
	over an ArcNet network, the following lines are added to your
	SYSTEM.INI file:
	
	[386Enh]
	network=*vnetbios,*vwc,vnetsup.386,vredir.386,vserver.386
	transport=
	secondnet=vnetware.386,vipx.386
	netmisc=
	netcard=
	InDOSPolling=FALSE
	netcard3=nwsup.386,nwnblink.386
	OverlappedIO=Off
	
	[network]
	multinet=netware3
	winnet=wfwnet/00025100
	directhost=no
	
	[NetWare]
	NWShareHandles=FALSE
	RestoreDrives=TRUE
	
	[network drivers]
	netcard=
	transport=
	devdir=C:\WINDOWS
	LoadRMDrivers=No
	
	[NWNBLINK]
	LANABASE=0
	
	The following lines are added to your PROTOCOL.INI file:
	
	[network.setup]
	version=0x3110
	netcard=ms$nwsupnb,1,MS$NWSUPNB,2
	lana0=ms$nwsupnb,1,mono
	
	[MS$NWSUPNB]
	
	[NWSUP]
	Adapters=MS$NWSUPNB
	
	2.3.5 MSIPX support
	Although we recommend that you upgrade from the MSIPX protocol to
	either the IPXODI or IPX/SPX protocol, you can keep your MSIPX
	support. This section describes the changes that are made to your
	system files if you choose to keep MSIPX support when you upgrade
	from Windows for Workgroups 3.1 to Windows for Workgroups 3.11.
	
	The following lines are removed from CONFIG.SYS:
	
	C:\WINDOWS\PROTMAN.DOS /I:C:\WINDOWS
	C:\WINDOWS\WORKGRP.SYS
	C:\WINDOWS\<NDIS MAC driver>.DOS
	C:\WINDOWS\MSIPX.SYS
	
	       The above lines are replaced by:
	
	DEVICE=C:\WINDOWS\IFSHLP.SYS
	
	The following is an example of a typical AUTOEXEC.BAT file once you
	have upgraded to Windows for Workgroups 3.11
	
	C:\WINDOWS\SMARTDRV.EXE /X
	C:\WINDOWS\net start
	C:\WINDOWS\msipx
	C:\WINDOWS\netx
	PROMPT $p$g
	PATH C:\WINDOWS;C:\DOS
	SET TEMP=C:\WINDOWS\TEMP
	
	The following lines in SYSTEM.INI affect running Windows for
	Workgroups 3.11 with MSIPX:
	
	[386Enh]
	
	network=*vnetbios,*vwc,vnetsup.386,vredir.386,vserver.386
	transport=netbeui.386,nwlink.386,nwnblink.386
	secondnet=vnetware.386
	OverlappedIO=off
	netmisc=ndis.386,ndis2sup.386,vipx.386
	netcard=declan.386
	InDOSPolling=FALSE
	
	[network]
	
	multinet=netware3
	winnet=wfwnet/00025100
	DirectHost=No
	
	[NetWare]
	NWShareHandles=FALSE
	RestoreDrives=TRUE
	
	[network drivers]
	netcard=depca.dos
	transport=*netbeui,msipx.sys,ndishlp.sys
	devdir=C:\WINDOWS
	LoadRMDrivers=Yes
	
	[NWNBLINK]
	LANABASE=1
	
	This is a sample PROTOCOL.INI file for a computer using Windows for
	Workgroups 3.11 with MSIPX. The adapter is a DEC Etherworks Turbo/TP
	Network Adapter.
	
	[network.setup]
	version=0x3110
	netcard=ms$ewtrbtp,1,MS$EWTRBTP,3
	transport=ms$netbeui,NETBEUI
	transport=ms$ipx,MS$IPX
	transport=ms$nwlinknb,NWLINK
	transport=ms$ndishlp,MS$NDISHLP
	lana0=ms$ewtrbtp,1,ms$ipx
	lana1=ms$ewtrbtp,1,ms$netbeui
	lana2=ms$ewtrbtp,1,ms$nwlinknb
	lana3=ms$ewtrbtp,1,ms$ndishlp
	
	[protman]
	DriverName=PROTMAN$
	PRIORITY=MS$NDISHLP
	
	[MS$EWTRBTP]
	DriverName=DEPCA$
	RamAddress=0xD800
	Interrupt=5
	MaxMulticast=8
	MaxTransmits=16
	IOAddress=0x300
	AdapterName=DE200
	
	[MS$IPX]
	DriverName=IPX$
	MediaType=Novell/Ethernet
	BINDINGS=MS$EWTRBTP
	
	[LANCE]
	Adapters=MS$EWTRBTP
	
	[NETBEUI]
	DriverName=netbeui$
	SESSIONS=10
	NCBS=12
	BINDINGS=MS$EWTRBTP
	LANABASE=0
	
	[NWLINK]
	
	BINDINGS=MS$EWTRBTP
	[MS$NDISHLP]
	DriverName=ndishlp$
	BINDINGS=MS$EWTRBTP
	
	NOTE: Windows for Workgroups 3.11 Setup will detect MSIPX when
	upgrading from Windows for Workgroups 3.1 and install support for it.
	If you change your network configuration after upgrading to Windows
	for Workgroups 3.11, however, Setup may remove MSIPX support, and you
	will not be able to reinstall support for it. If this is the case,
	you will have to upgrade to either IPX.COM, or IPXODI.COM and
	LSL.COM.
	
	KBCategory: kbnetwork kb3rdparty kbref
	KBSubcategory:
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
