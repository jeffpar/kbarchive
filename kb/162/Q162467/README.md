---
layout: page
title: "Q162467: AppleTalkClientSupport and VinesClientSupport May Not Work"
permalink: kb/162/Q162467/
---

## Q162467: AppleTalkClientSupport and VinesClientSupport May Not Work

	Article: Q162467
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt.32.exe.
	
	SYMPTOMS
	========
	
	Password changes using Apple Talk or Vines Protocol do not work as expected even
	though the AppleTalkClientSupport and/or VinesClientSupport registry values have
	been entered as a REG_DWORD set to 0x1 on the following key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa
	
	CAUSE
	=====
	
	A logic error in the Lsass.exe process prevents either of these two registry
	values from functioning properly unless TcpipClientSupport and/or
	NetwareClientSupport is added as a registry value as well.
	
	
	RESOLUTION
	==========
	
	In addition to AppleTalkClientSupport and/or VinesClientSupport, also add
	NetwareClientSupport (if NWLINK is installed) and/or TcpipClientSupport (if
	TCPIP is installed) as directed in the MORE INFORMATION section below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Password changes using Remote Procedure Calls (RPC) over sockets to communicate
	directly to Lsass.exe on the primary domain controller (PDC) is possible by
	enabling appropriate registry values on the LSA key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa
	
	The registry values are based on the protocol being enabled, (not the type of
	client) that socket support is intended for. (In other words, a Novell Netware
	client using TCP/IP as its network protocol would require TcpipClientSupport
	enabled on the PDC, not NetwareClientSupport.)
	
	TcpipClientSupport is required for support of TCP/IP (ncacn_ip_tcp)
	NetwareClientSupport is required for support of NWLINK protocol (ncacn_spx)
	AppleTalkClientSupport is required for support of AppleTalk protocol
	(ncacn_at_dsp)
	VinesClientSupport is required for support of Vines protocol (ncacn_vns_spp)
	
	These registry values must be created on the PDC (and should be created on all
	BDCs) as REG_DWORD values set to 0x1. Also, the registry value should only be
	created if the protocol it is intended to support has been installed on the
	Windows NT server.
	
	Additional query words: password change failures
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
