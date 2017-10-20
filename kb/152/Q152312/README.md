---
layout: page
title: "Q152312: Windows NT 3.5x Resource Kit Documentation Errors"
permalink: /kb/152/Q152312/
---

## Q152312: Windows NT 3.5x Resource Kit Documentation Errors

{% raw %}

	Article: Q152312
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article lists known documentation errors in the Microsoft Windows NT
	version 3.5 and 3.51 Resource Kits.
	
	The following known documentation errors are described in this article:
	
	- Resource Kit packaging
	
	- Page 431, Volume 1: LPR Print Monitor Control Entries
	
	- Page 514, Volume 1: NWLink Entries for IPX/SPX: NWLink Parameters for the
	  Network Adapter Card
	
	- Page 523, Volume 1: RAS NetBIOSGateway Subkey Entries
	
	- Page 694, Volume 1: Common Printing Problems
	
	- Page 80, Volume 2: Specifying a Browser Computer
	
	- Page 251, Volume 2: Restoring the DHCP Database Regentry.hlp
	
	- Online Help: Other Entries for RAS NetBIOSGateway
	
	- Online Help: Winlogon Registry Entries Rktools.hlp
	
	- Online Help: REGREST.EXE: Registry Restoration
	
	MORE INFORMATION
	================
	
	Resource Kit Packaging
	----------------------
	
	The Windows NT 3.5 Resource Kit box states the following:
	
	  The CD-ROM includes a set of utilities, accessories, and value-
	  added software, with tools for managing users and groups of
	  servers. You'll find a computer profile setup to easily
	  configure large groups of workstations an adapter Help file,
	  and online Registry database, network chess, and much more.
	
	Network Chess was not included on the Windows NT 3.5 Resource Kit CD-ROM.
	
	Page 431, Volume 1: LPR Print Monitor Control Entries
	-----------------------------------------------------
	
	The stated location for the PrintSwitch registry entry is:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	  \Print\Monitors\LPR Port\Ports\<portname>\Timeouts
	
	The PrintSwitch registry entry is actually located in the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	  \Print\Monitors\LPR Port\Ports\<portname>
	
	Page 514, Volume 1: NWLink Entries for IPX/SPX: NWLink Parameters for the
	
	Network Adapter Card
	--------------------
	
	The registry entry for SourceRouting states:
	
	SourceRouting  REG_DWORD   Boolean
	
	  Specifies whether to use source routing. This parameter is only
	  used if the adapter is a Token Ring adapter. If there are no
	  source routing bridges on the Token Ring, disable this entry to
	  disable all of the source routing logic. Related parameters:
	  SourceRouteBcast, SourceRouteDef, and SourceRouteMCast.
	
	  Default:  0 (false-do not use source routing)
	
	Actually, this entry is set to 1 by default and is enabled.
	
	Page 523, Volume 1: RAS NetBIOSGateway Subkey Entries
	-----------------------------------------------------
	
	The resource kit states that the registry location for the NetBIOSGateway entries
	is the following:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \RemoteAccess\Parameters
	
	However, the above location is correct only for the AutoDisconnect entry. The
	remaining entries are located in the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \RemoteAccess\Parameters\NetBIOSGateway
	
	Page 694, Volume 1: Common Printing Problems
	--------------------------------------------
	
	The last paragraph on this page states the following:
	
	  To find out what number should be entered in the Printer Memory
	  text box, copy the file PS.TXT, included with this resource
	  kit, to the printer.
	
	The correct file name is Testps.txt. When you copy Testps.txt to your postscript
	printer, the output displays the values for the maximum printer virtual memory
	and maximum suggested virtual memory.
	
	Page 80, Volume 2: Specifying a Browser Computer
	------------------------------------------------
	
	The browser information on page 80 states:
	
	  Value: Yes
	  Meaning: This computer will become a browser. At startup, the
	           server tries to contact the master browser to get a
	           current browse list. If the master browser cannot be
	           found, this computer forces a browser election, and
	           can become the master browser. For more information on
	           browser elections, see "Determining Browser Roles,"
	           later in this chapter.
	           This is the default value for Windows NT Server
	           computers.
	
	The last sentence of the above meaning should be:
	
	  This is the default value for Windows NT Server computers that
	  are acting as Domain Controllers.
	
	NOTE: Windows NT Server computers that are non-Domain Controllers have a default
	MaintainServerList value of Auto.
	
	Page 251, Volume 2: Restoring the DHCP Database
	-----------------------------------------------
	
	The Windows NT 3.5 Resource Kit "Networking Guide" incorrectly states that there
	is a Reconcile button in the Active Leases dialog box of DHCP Manager. The
	picture on page 244 is also incorrectly showing a Reconcile button.
	
	This feature has been added to the Windows NT 3.51 DHCP Manager.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q130478Reconcile Feature Fixes Inconsistent IP Addresses
	
	Online Help: Other Entries for RAS NetBIOSGateway
	-------------------------------------------------
	
	The registry entry for AutoDisconnect states:
	
	AutoDisconnect   REG_DWORD
	
	  Range:  0 to 60000 seconds (1000 minutes)
	  Default: 1200 seconds (20 minutes)
	
	  Sets the time interval after which inactive connections are
	  terminated. Inactivity is measured by lack of NetBIOS session
	  data transfer, such as copying files, accessing network
	  resources, and sending and receiving electronic mail. You may
	  want to set this value to 0 seconds if clients are running
	  NetBIOS datagram applications. Setting this value to 0 turns
	  off AutoDisconnect.
	
	The actual range is 0 to 1,000 minutes with a default of 20 minutes. This value
	is correctly documented in the following resources:
	
	- Microsoft Windows NT Server Remote Access Service version 3.5, Appendix C.
	
	- Microsoft Windows NT Resource Kit Volume 1: Resource Guide, version 3.1,
	  Chapter 14.
	
	Online Help: Winlogon Registry Entries
	--------------------------------------
	
	The information for the ParseAutoexec registry entry has it grouped with other
	registry values under the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT
	  \CurrentVersion\Winlogon
	
	The ParseAutoexec information actually belongs in the following subkey:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT
	  \CurrentVersion\Winlogon
	
	REGREST.EXE: Registry Restoration
	---------------------------------
	
	The information for Regrest.exe states:
	
	  To restore all active Registry hive files in the CONFIG
	  directory:
	
	     At the command prompt, type:
	
	        regback newDirectory saveDirectory
	
	It should read:
	
	  To restore all active Registry hive files in the CONFIG
	  directory:
	
	     At the command prompt, type:
	
	        regrest newDirectory saveDirectory
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	
	=============================================================================
	

{% endraw %}
