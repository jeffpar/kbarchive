---
layout: page
title: "Q97767: Using Novell's ODI Drivers with Windows for Workgroups"
permalink: /kb/097/Q97767/
---

## Q97767: Using Novell's ODI Drivers with Windows for Workgroups

{% raw %}

	Article: Q97767
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	
	The following article contains information about using Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, use a supported configuration or contact the manufacturer of
	the third-party product for more information.
	
	SUMMARY
	=======
	
	Some Novell NetWare network-based applications require the Novell open data-link
	interface (ODI) transport/media-access-control drivers to operate. Windows for
	Workgroups version 3.1 uses MSIPX to emulate IPX and does not support Novell's
	ODI drivers. Novell has developed a workaround using ODINSUP.COM to enable the
	ODI drivers with Windows for Workgroups.
	
	Microsoft can ensure connectivity between Windows for Workgroups version 3.1 and
	Novell NetWare only while running MSIPX.COM. If Novell's procedure for enabling
	the ODI drivers does not work, contact Novell Technical Support for more
	information or possible solutions.
	
	NOTE: Microsoft Windows for Workgroups version 3.11 works well with Novell
	NetWare. You must have ODI working first. If you have ODI working and connecting
	to your Novell server, all you need to do under Windows for Workgroups version
	3.11 is add ODI support to your Network Setup (no MSIPX is needed).
	
	The remainder of this article applies to Windows for Workgroups 3.1 only.
	
	MORE INFORMATION
	================
	
	While the specification of Windows for Workgroups version 3.1 is MSIPX, an
	exclusively NDIS-compliant protocol, Novell's ODINSUP.COM, allows NDIS protocol
	stacks to run unmodified over the ODI LSL and talk to an ODI LAN driver.
	Novell's LSL can be accessed by adding the ODINSUP driver. Novell makes these
	files available on its bulletin board service (BBS) and in the Novell CompuServe
	forum. The current filename is DOSUP7.ZIP; however, it may change from time to
	time. Contact your Novell service person or the Novell CompuServe forum for more
	information on availability.
	
	Below are the steps to configure Windows for Workgroups 3.1 using an NE2000
	network card with Novell's ODINSUP driver. The modified configuration files
	include the following:
	
	  CONFIG.SYS
	  AUTOEXEC.BAT
	  NET.CFG
	  PROTOCOL.INI
	
	Before You Begin
	----------------
	
	Since this configuration requires the Novell IPXODI drivers, you must have your
	machines set up and attached to a Novell server using IPXODI.COM at MS-DOS
	before proceeding to the "Setup Instructions" below.
	
	Be sure to back up your AUTOEXEC.BAT file so that you can restore this
	configuration later if necessary.
	
	Setup Instructions
	------------------
	
	1. Install Windows for Workgroups with your network card and Novell NetWare as a
	  secondary network.
	
	2. Edit the CONFIG.SYS file and remove or remark out the following lines:
	
	  DEVICE=C:\WINDOWS\<NE2000.DOS><BR/>
	        DEVICE=C:\WINDOWS\MSIPX.SYS
	
	  NOTE: If you are using a different network card, the NDIS network card driver
	  (<NE2000.DOS> in the above example) will be different.
	
	3. Edit the AUTOEXEC.BAT file as follows.
	  a. Remove or remark out the following lines:
	
	          C:\WINDOWS\NET START
	
	     -and-
	
	          C:\WINDOWS\MSIPX.COM
	
	  b. Verify that your AUTOEXEC.BAT contains these lines:
	
	           C:\<PATH>\LSL.COM
	           C:\<PATH>\<your netcard's ODI MAC driver>.COM
	           C:\<PATH>\ODINSUP.COM
	           C:\WINDOWS\Net Start Netbind
	           C:\<PATH>\IPXODI.COM
	           C:\<PATH>\NETX.EXE
	
	4. Edit the NET.CFG file and verify that it contains the following lines. If
	  these lines don't exist, add them to the appropriate sections of the NET.CFG
	  file. If you do not have a NET.CFG file, create one using a text editor (such
	  as Microsoft Windows Notepad), and save it in the directory that LSL.COM is
	  executed from.
	
	        PROTOCOL ODINSUP
	            BIND NE2000
	            BUFFERED
	        LINK DRIVER NE2000 <== where NE2000 is the filename of your
	                                  netcard's ODI driver>
	
	            INT n        <== where "n" is the one-digit interrupt number
	            MEM nnnnn    <== where "nnnnn" is the five-digit memory address
	            PORT ###     <== where "nnn" is the three-digit I/O port address
	            FRAME ETHERNET_802.2
	            FRAME ETHERNET_802.3
	            FRAME ETHERNET_II
	            FRAME ETHERNET_SNAP
	            PROTOCOL IPX 0 ETHERNET_802.3
	
	  NOTE: if you've been using ODI to attaching to a Novell server at DOS and you
	  haven't specified the INT, MEM, PORT, DMA, SLOT, etc., parameters in the
	  NET.CFG file, you probably don't need to add them now. However, depending on
	  the ODI MAC driver (Novell refers to this as the "MLID") you are using, you
	  may need to place the INT, MEM, PORT, etc., lines after the FRAME lines.
	  Additionally, list your network's frame type FIRST in the list of "FRAME
	  ETHERNET_xxxx" entries. (This probably will be "ETHERNET_802.3" or
	  "ETHERNET_II.")
	
	5. Edit the PROTOCOL.INI file as follows:
	
	  Replace the "BINDINGS=" lines in the [MS$NETBEUI] and [IPX$] sections with the
	  Novell ODI MAC driver (MLID) as follows:
	
	        [MS$NETBEUI]
	        DRIVERNAME=NETBEUI$
	        SESSIONS=10
	        NCBS=32
	        ;BINDINGS=MS$NE2000  <== NDIS MAC driver, NE2000.DOS
	        BINDINGS=NE2000      <== ODI MLID, NE2000.COM
	        LANABASE=1
	
	        [IPX$]
	        DRIVERNAME=IPX$
	        MEDIATYPE=NOVELL/ETHERNET
	        ;BINDINGS=MS$NE2000  <== NDIS MAC driver, NE2000.DOS
	        BINDINGS=NE2000      <== ODI MLID, NE2000.COM
	
	IMPORTANT: If the ODI MLID filename begins with a numeral, you must preface the
	filename with an "X" (without the quotation marks) in the "BINDINGS=" statement.
	For example, 3COM's 3C509 network adapter card uses an ODI MLID with a filename
	of "3C509.COM." In the PROTOCOL.INI file, the "BINDINGS=" statements would need
	to be
	
	       BINDINGS=x3C509
	
	WARNING: After you make these modifications, do NOT make any changes in the
	Networks dialog box of Control Panel. If you do, the CONFIG.SYS, AUTOEXEC.BAT,
	and PROTOCOL.INI files will be overwritten.
	
	EXAMPLES
	--------
	
	Below are samples of what modified CONFIG.SYS, AUTOEXEC.BAT, NET.CFG, and
	PROTOCOL.INI files look like if you are using Novell's ODINSUP driver.
	
	CONFIG.SYS
	----------
	
	  FILES=30
	  BUFFERS=30
	  DEVICE=C:\WINDOWS\PROTMAN.DOS /I:C:\WINDOWS
	  DEVICE=C:\WINDOWS\WORKGRP.SYS
	  LASTDRIVE=P
	  DEVICE=C:\WINDOWS\HIMEM.SYS
	  STACKS=9,256
	
	AUTOEXEC.BAT
	------------
	
	  PATH=C:\WINDOWS
	  C:\WINDOWS\SMARTDRV.EXE
	  LSL
	  NE2000
	  ODINSUP
	  C:\WINDOWS\NET START NETBIND
	  IPXODI
	  NETX
	  SET TEMP=C:\WINDOWS\TEMP
	  Q:
	  LOGIN SUPERVISOR
	
	NET.CFG
	-------
	
	  PROTOCOL ODINSUP
	  BIND NE2000
	  BUFFERED
	  LINK DRIVER NE2000
	  ;The following 4 lines are required with ODINSUP and ethernet cards.
	     FRAME ETHERNET_802.3
	     FRAME ETHERNET_802.2
	     FRAME ETHERNET_II
	     FRAME ETHERNET_SNAP
	
	PROTOCOL.INI
	------------
	
	  [NETWORK.SETUP]
	  VERSION=0X3100
	  NETCARD=NE2000,1,NE2000
	  TRANSPORT=MS$NETBEUI,MS$NETBEUI
	  TRANSPORT=IPX,IPX
	  LANA0=NE2000,1,IPX
	  LANA1=NE2000,1,MS$NETBEUI
	  [PROTMAN]
	  DRIVERNAME=PROTMAN$
	  PRIORITY=MS$NETBEUI
	  [NE2000]
	  DRIVERNAME=NE2000
	  IOBASE=0X300
	  INTERRUPT=3
	  [MS$NETBEUI]
	  DRIVERNAME=NETBEUI$
	  SESSIONS=10
	  NCBS=32
	  BINDINGS=NE2000
	  LANABASE=1
	  [IPX]
	  DRIVERNAME=IPX
	  MEDIATYPE=NOVELL/ETHERNET
	  BINDINGS=NE2000
	
	For additional information concerning Novell's ODINSUP.COM, contact Novell
	Technical Support at (800) 638-9273.
	
	Novell NetWare and ODINSUP.COM are manufactured by Novell, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: 3.10 3.1 tcp/ip lsl.com
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
