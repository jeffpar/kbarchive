---
layout: page
title: "Q107632: Using Novell's ODINSUP and NETx with Windows"
permalink: kb/107/Q107632/
---

## Q107632: Using Novell's ODINSUP and NETx with Windows

	Article: Q107632
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	This article provides instructions on how to install the Novell ODINSUP driver
	to work with Windows for Workgroups 3.11. Novell's ODINSUP driver allows NDIS 2
	protocols (such as MS TCP/IP) to run on top of Novell's ODI drivers. This
	behavior is similar to that of the MSODISUP driver that comes with Windows for
	Workgroups 3.11. The only difference is that the MSODISUP driver allows only
	NDIS 3 protocols to run on top of it.
	
	MORE INFORMATION
	================
	
	The following instructions assist you in setting up Windows for Workgroups 3.11
	to run on the Novell ODINSUP driver with NetWare clients that are using Novell's
	NETx redirector. By doing this, you can use NDIS 2 protocols (such as MS TCP/IP
	or MS DLC) to run on top of the Novell ODI drivers. The steps below outline
	setting up Windows for Workgroups 3.11 with the MS TCP/IP, NetBEUI, and NWLink
	protocols in addition to Novell's real-mode IPX protocol. The network card used
	throughout this article is the 3COM 3c509 Etherlink III.
	
	Before You Begin:
	
	Since this configuration requires the Novell IPXODI drivers, you must have your
	machine set up and attached to a Novell server using IPXODI.COM at MS- DOS
	before proceeding to the "Setup Instructions" section below. You should also set
	up a working NET.CFG file in the same directory from which you load LSL.COM
	
	Be sure to back up your AUTOEXEC.BAT file so that you can restore this
	configuration later if necessary.
	
	Setup Instructions:
	
	1. Install Windows for Workgroups using the Custom Setup option. In the Network
	  Setup dialog box, select the Other option button, select Novell, and then
	  choose the Drivers button. Select the network card driver for your adapter
	  along with both the NetBEUI and the IPX/SPX Compatible Transport with NetBIOS
	  protocols. (Note that for the examples in this article, we chose the
	  Etherlink III network adapter.) Next, in the same Network Drivers dialog box,
	  choose Setup and choose Real Mode NDIS Driver. This is important because even
	  though you are actually running an ODI driver with ODINSUP, Windows for
	  Workgroups thinks you are running an NDIS driver. Choose OK and continue with
	  Setup. Ignore the error messages about ODI drivers. After you finish Setup,
	  reboot your computer and start Windows by using the /N switch (WIN /N), then
	  install MS TCP/IP according to the directions that come with the MS TCP/IP
	  package.
	
	  NOTE: If there are any other NDIS 2 protocols (such as MS DLC) you want to
	  install, install those now. Also, make sure that you choose which protocol
	  you want to be the default protocol in the Network Drivers dialog box.
	
	2. After completing the MS TCP/IP installation, edit the SYSTEM.INI file and
	  remove the NDIS 2 driver, <ELNK3.DOS>, from the netcard= line of the
	  [Network Drivers] section.
	
	  NOTE: If you are using a different network card, the NDIS network card driver
	  (<ELNK3.DOS> in the above example) will be different.
	
	3. Edit the CONFIG.SYS file and set LASTDRIVE=P. This allows you to use the
	  drive letters before P to connect to other Windows for Workgroups servers and
	  driver letters after P to connect to NetWare servers. You can adjust this to
	  fit your needs; however, Windows for Workgroups drives can map only up to and
	  including the drive to which LASTDRIVE has been set.
	
	4. Edit the AUTOEXEC.BAT file so that it contains the following lines:
	
	  C:\WINDOWS\NET INIT
	           <==This loads protman and NDIS protocols>
	        C:\<PATH>\LSL.COM
	        C:\<PATH>\<your network card's ODI MAC driver>.COM
	        C:\<PATH>\ODINSUP.COM
	        C:\WINDOWS\NET START NETBIND (This binds the protocols to ODINSUP.)
	        C:\<PATH>\IPXODI.COM
	        C:\<PATH>\NETX.EXE
	           (The rest of these files are for MS TCP/IP.)
	        C:\WINDOWS\UMB
	        C:\WINDOWS\TCPTSR
	        C:\WINDOWS\TINYRFC
	        C:\WINDOWS\NMTSR.EXE
	        C:\WINDOWS\EMSBFR.EXE
	
	5. Edit the NET.CFG file and verify that it contains the following lines. If
	  these lines don't exist, add them to the appropriate sections of the NET.CFG
	  file. If you do not have a NET.CFG file, create one using a text editor (such
	  as Microsoft Windows Notepad), and save it in the directory from which
	  LSL.COM is executed. Note that some of the lines in the NET.CFG file are
	  indented; this indentation must be maintained.
	
	        PB BUFFERS 7
	        PROTOCOL ODINSUP
	           BIND <3c509> (where <3C509> is the filename of your network
	                         card's ODI driver.)
	           BUFFERED
	        LINK DRIVER <3c509> (where <3C509> is the filename of your network
	                             card's ODI driver.)
	           INT <n> (where <n> is the one-digit interrupt number.)
	           MEM <nnnnn> (where <nnnnn> is the five-digit memory address.)
	           PORT <nnn> (where <nnn> is the three-digit I/O port address.)
	           FRAME ETHERNET_802.2
	           FRAME ETHERNET_802.3
	           FRAME ETHERNET_II
	           FRAME ETHERNET_SNAP
	           PROTOCOL IPX 0 ETHERNET_802.3
	
	  NOTE: If you have been using ODI to attach to a Novell server at DOS and you
	  haven't specified the parameters INT, MEM, PORT, DMA, SLOT, and so forth in
	  the NET.CFG file, you probably don't need to add them now. However, depending
	  on the ODI MAC driver you are using (Novell refers to this as the "MLID"),
	  you may need to place these parameters after the FRAME lines. Additionally,
	  list your network's frame type FIRST in the list of "FRAME
	  ETHERNET_<xxxx>" entries (where <xxxx> will probably be
	  <802.3> or <II>).
	
	6. Edit the PROTOCOL.INI file by replacing the BINDINGS= lines in the [NWLINK],
	  [NETBEUI], [MS$NDISHLP], and [TCPIP] sections with the Novell ODI MAC driver
	  (MLID) as follows:
	
	     [NWLINK]
	     ;BINDINGS=<MS$ELNK3> (where <MS$ELNK3> corresponds to your NDIS MAC
	                           driver; in this case, ELINK3.DOS. The semicolon
	                           comments out this line.)
	     BINDINGS=<x3c509> (where <x3c509> corresponds to your ODI MLID;
	                        in this case, 3c509.COM. The "x" must be added if the
	                        ODI MLID filename begins with a numeral.)
	
	     [NETBEUI]
	     ;BINDINGS=<MS$ELNK3> (where <MS$ELNK3> corresponds to your NDIS MAC
	                           driver; in this case, ELINK3.DOS. The semicolon
	                           comments out this line.)
	     BINDINGS=<x3c509> (where <x3c509> corresponds to your ODI MLID;
	                        in this case, 3c509.COM. The "x" must be added if the
	                        ODI MLID filename begins with a numeral.)
	     LANABASE=0
	     SESSIONS=10
	     NCBS=12
	     DriverName=netbeui$
	
	     [MS$NDISHLP]
	     DriverName=ndishlp$
	     ;BINDINGS=<MS$ELNK3> (where <MS$ELNK3> corresponds to your NDIS MAC
	                           driver; in this case, ELINK3.DOS. The semicolon
	                           comments out this line.)
	     BINDINGS=<x3c509> (where <x3c509> corresponds to your ODI MLID;
	                        in this case, 3c509.COM. The "x" must be added if the
	                        ODI MLID filename begins with a numeral.)
	
	     [TCPIP]
	     IPAddress0=<130 25 40 20> (where <130 25 40 20> corresponds to your own
	                                IP Addresses.)
	     DefaultGateway0=130 25 0 1
	     SubNetMask0=255 255 0 0
	     NBSessions=6
	     NetFiles=C:\WINDOWS
	     DriverName=TCPIP$
	     ;BINDINGS=<MS$ELNK3> (where <MS$ELNK3> corresponds to your NDIS MAC
	                           driver; in this case, ELINK3.DOS. The semicolon
	                           comments out this line.)
	     BINDINGS=<x3c509> (where <x3c509> corresponds to your ODI MLID;
	                        in this case, 3c509.COM. The "x" must be added if the
	                        ODI MLID filename begins with a numeral.)
	     LANABASE=2
	
	  NOTE: If you are using the Microsoft 32-bit TCP/IP dated 11/21/94, you must
	  change the "bindings=" setting in the network card section of the SYSTEM.INI
	  file to match the ODI MLID name.
	
	  IMPORTANT: If the ODI MLID filename begins with a numeral, you must preface
	  the filename with an "x" (without the quotation marks) in the BINDINGS=
	  statement. For example, 3COM's 3C509 network adapter card uses an ODI MLID
	  with the filename 3C509.COM. In the PROTOCOL.INI file, the BINDINGS=
	  statements would need to be:
	
	  BINDINGS=x3C509
	
	  WARNING: After you make these modifications, do NOT make any changes in the
	  Network dialog box of Control Panel. If you do, the AUTOEXEC.BAT, SYSTEM.INI
	  and PROTOCOL.INI files will be overwritten. You should make backup copies of
	  these files in case this occurs.
	
	EXAMPLES
	--------
	
	Below are samples of what modified CONFIG.SYS, AUTOEXEC.BAT, NET.CFG, and
	PROTOCOL.INI files look like if you are using Novell's ODINSUP with Windows for
	Workgroups 3.11 Setup with the MS TCP/IP, NetBEUI and "NWLink with NetBIOS"
	protocols.
	
	CONFIG.SYS:
	
	DEVICE=C:\WINDOWS\HIMEM.SYS
	DOS=HIGH
	BUFFERS=30
	FILES=50
	DEVICE=C:\DOS\SETVER.EXE
	SHELL=C:\DOS\COMMAND.COM C:\DOS\  /p /e:2048
	STACKS=9,256
	LASTDRIVE=P
	DOS=UMB
	DEVICE=C:\WINDOWS\IFSHLP.SYS
	
	AUTOEXEC.BAT:
	
	C:\WINDOWS\NET INIT
	C:\NOVELL\LSL
	C:\NOVELL\3C509
	C:\NOVELL\ODINSUP
	C:\WINDOWS\NET START NETBIND
	C:\NOVELL\IPXODI
	C:\NOVELL\NETX
	C:\WINDOWS\UMB
	C:\WINDOWS\TCPTSR
	C:\WINDOWS\TINYRFC
	C:\WINDOWS\NMTSR.EXE
	C:\WINDOWS\EMSBFR.EXE
	PATH=C:\WINDOWS;C:\DOS;C:\ 
	SET TEMP=C:\TEMP
	C:\WINDOWS\SMARTDRV.EXE /X
	
	NET.CFG:
	
	SHOWDOTS=ON
	PB BUFFERS 7
	PROTOCOL ODINSUP
	  BIND 3c509
	  BUFFERED
	LINK DRIVER 3c509
	  port 300
	  int 5
	  frame ethernet_802.3
	  frame ethernet_802.2
	  frame ethernet_II
	  frame ethernet_SNAP
	  PROTOCOL IPX 0 ETHERNET_802.3
	
	PROTOCOL.INI:
	
	[network.setup]
	version=0x3110
	netcard=ms$elnk3,1,MS$ELNK3,1
	transport=ms$nwlinknb,NWLINK
	transport=ms$netbeui,NETBEUI
	transport=ms$ndishlp,MS$NDISHLP
	transport=tcpip,TCPIP
	lana0=ms$elnk3,1,ms$netbeui
	lana1=ms$elnk3,1,ms$nwlinknb
	lana2=ms$elnk3,1,ms$ndishlp
	lana3=ms$elnk3,1,tcpip
	
	[MS$ELNK3]
	DriverName=ELNK3$
	MAXTRANSMITS=6
	
	[NWLINK]
	BINDINGS=x3C509
	
	[NETBEUI]
	BINDINGS=x3C509
	LANABASE=0
	SESSIONS=10
	NCBS=12
	DriverName=netbeui$
	
	[protman]
	DriverName=PROTMAN$
	PRIORITY=MS$NDISHLP
	<BR/><BR/>
	[MS$NDISHLP]
	DriverName=ndishlp$
	BINDINGS=x3C509
	<BR/><BR/>
	[TCPIP]
	DefaultGateway0=130 25 0 1
	SubNetMask0=255 255 0 0
	IPAddress0=130 25 40 20
	NBSessions=6
	NetFiles=C:\WINDOWS
	DriverName=TCPIP$
	BINDINGS=x3C509
	LANABASE=2
	
	For additional information concerning the Novell ODINSUP.COM driver, contact
	Novell Technical Support or on the Novell CompuServe forums.
	
	The third-party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : :3.11
	
	=============================================================================
	
