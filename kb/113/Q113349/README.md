---
layout: page
title: "Q113349: Client Files for Windows 3.x and Terminal Emulators"
permalink: kb/113/Q113349/
---

## Q113349: Client Files for Windows 3.x and Terminal Emulators

	Article: Q113349
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	Specific files and WIN.INI settings are required when you use independent
	vendor Windows-based terminal emulators with SNA Server for Windows NT.
	
	MORE INFORMATION
	================
	
	The following executable files should be located in the <snaroot>
	directory (where <snaroot> means the directory where your SNA Server for
	Windows NT client software is installed). Verify the <snaroot> directory
	is in the path statement in your AUTOEXEC.BAT file or put the files in a
	directory that is in the path.
	
	  WNAP.EXE     - SNA Windows client.
	
	  WPOPUP.EXE   - Displays popup messages if errors occur.
	
	  SNAVER.EXE   - Displays the version of SNA Server client components
	                 (optional).
	
	  WSHOWMEM.EXE - Displays the internal memory tables and settings for
	                 diagnostic purposes (optional).
	
	The following dynamic-link library (DLL) files should be located in the
	<winroot>\system directory (where <winroot> means the directory
	where your Windows 3.x, or Windows for Workgroups 3.xx software is installed).
	
	DLLs for a Novell Netware Network
	---------------------------------
	
	  NWCLI.DLL    - SNA client interface for Netware.
	
	  NWNETAPI.DLL - Netware Application Programming Interface (API).
	
	  NWIPXSPX.DLL - Netware IPX/SPX interface.
	
	DLLs for a LAN Manager or Windows for Workgroups Network
	--------------------------------------------------------
	
	  LMCLI.DLL    - SNA client interface for LAN Manager/WFW.
	
	Other DLLs
	----------
	
	  WDMOD.DLL    - SNA client interface used by WNAP, SNA API's and
	                 third-party vendors using the Emulator Interface
	                 Specification (EIS).
	
	  WLOGTR.DLL   - Required for logging and trace formatting.
	
	  TOOLHELP.DLL - Used by WNAP to determine if an SNA Server client
	                 application has ended.
	
	  WINTRC.DLL   - For message tracing when debugging (optional).
	
	  CTL3D.DLL    - For 3D support. Required by SNAVER.EXE and by SNA Server
	                 for Windows NT 3270 and 5250 applets.
	
	  YMGR.DLL     - Yield manager. Required for applications using the
	                 DCA/Microsoft Communications Server APPC API.
	
	DLLs for 5250 Terminal Emulation
	--------------------------------
	
	  WINAPPC.DLL  - APPC API support for transaction verbs (see Chapter 4 of
	                 the "APPC Programmer's Guide").
	
	  WINCSV.DLL   - Common Service Verbs API support.
	
	DLLs for SNA API Support
	------------------------
	
	NOTE: Specific DLL files are required for SNA applications which use specific
	APIs.
	
	  WINSLI.DLL   - LUA Session Level Interface API support.
	
	  WINRUI.DLL   - LUA Request Unit Interface API support.
	
	  WINCPIC.DLL  - CPI-C API support.
	
	  WINMGT.DLL   - APPC Management Verb API support (see Chapter 3 of the
	                 "PPC Programmers Guide").
	
	You also need to verify that the following entries are in the [Wnap] section of
	the client's WIN.INI file:
	
	  WBinPath=<snaroot>
	
	  Remote= [ <Netware domain name> | <SNA Server computer name>]
	
	     For a Netware network, this must be set to the domain name where the
	     SNA Server for Windows NT computer is running.
	
	  -or-
	
	  For a LAN Manager or Windows for Workgroups network, this entry is optional
	  unless the client is located in a different domain than the SNA Server for
	  Windows NT server. If this is the case, it must be set to the SNA Server for
	  Windows NT computer name.
	
	  NosType= [ LANMAN | NETWARE ] (Type of Network)
	
	  NosSetup= [ LANMAN | WFW | NETWARE ] (Type of client)
	
	  NetSetup=NO
	
	This is an example of a [Wnap] section of the WIN.INI file for Windows for
	Workgroups client on a LAN Manager network in the same domain as the SNA Server
	for Windows NT server:
	
	  [Wnap]
	  WBinPath=C:\SNA
	  Remote=
	  NosType=LANMAN
	  NosSetup=WFW
	  NetSetup=NO
	
	The Novell Netware products included here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: wfw wfwg prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
