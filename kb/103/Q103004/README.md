---
layout: page
title: "Q103004: REG: Network Services Entries, Part 8"
permalink: kb/103/Q103004/
---

## Q103004: REG: Network Services Entries, Part 8

	Article: Q103004
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The article contains Registry entries for network services, Part 8. These
	subgroups are included.
	
	- Replicator service
	
	- Remote Procedure Call (RPC) and RPCLocator software
	
	    - ClientProtocols and ServiceProtocols entries for RPC
	    - NameService entries for RPC
	
	For a listing of the contents of network services entries articles 1-8, see
	"Network Services Entries, Part 1."
	
	Replicator Service Entries
	--------------------------
	
	The Registry path that contains entries for the Replicator service is the
	following:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	       \Replicator\Parameters
	
	CrashDir REG_SZ First-Level Directory Name
	
	  This item is temporarily recorded in the Registry by the Replicator
	  service. If it remains after a system repair, you can delete this
	  entry using Registry Editor.
	
	ExportList REG_SZ List
	
	  Lists an unlimited number of servers or domains that receive
	  notices when the export directory is updated. These servers
	  subsequently replicate from the export server. If no List value is
	  specified, the export server sends a notice to its domain. Separate
	  multiple List names with a semicolon (;). This value is ignored if
	  the value of Replicate is 2 (Import).
	
	  Do not use the UNC name when you specify a computer name; that is,
	  do not include two backslashes (\\) at the beginning of the name.
	
	  Use the Replicator controls in Server Manager or the Server icon in
	  Control Panel to set this value. Default: none.
	
	ExportPath REG_SZ or REG_EXPAND_SZ Pathname
	
	  Specifies the export path. All files to be replicated must be in a
	  subdirectory of the export directory. This value is ignored if the
	  value of Replicate is set to 2 (Import). Use the Replicator
	  controls in Server Manager or the Server icon in Control Panel to
	  set this value, which cannot be a UNC name.
	  Default: %SystemRoot%\System32\Repl\Export.
	
	GuardTime REG_DWORD 0 to one-half of Interval minutes
	
	  Sets the number of minutes an export directory must be stable (no
	  changes to any files) before import servers can replicate its
	  files. This option applies only to directories with tree integrity.
	  Default: 2 minutes.
	
	ImportList REG_SZ List
	
	  Lists an unlimited number of servers or domains that receive
	  notices when the import directory is updated. These servers
	  subsequently replicate from the import server. If no List value is
	  specified, updates come from the import server's domain. Separate
	  multiple List names with a semicolon (;). This value is ignored if
	  the value of Replicate is 1 (Export).
	
	  Do not use the UNC name when you specify a computer name; that is,
	  do not include two backslashes (\\) at the beginning of the name.
	
	  Use the Replicator controls in Server Manager or the Server icon in
	  Control Panel to set this value.
	
	ImportPath REG_SZ or REG_EXPAND_SZ Pathname
	
	  Specifies the path on the import server to receive replicas from
	  the export servers. This value is ignored if the value of Replicate
	  is 1 (Export). Use the Replicator controls in Server Manager or the
	  Server icon in Control Panel to set this value, which cannot be a
	  UNC name. Default: %SystemRoot%\System32\Repl\Import.
	
	Interval REG_DWORD 1 to 60 minutes
	
	  Sets how often an export server checks the replicated directories
	  for changes. This option is ignored on import servers. Default: 5
	  minutes.
	
	PulseConcurrency REG_DWORD 1 to 10 cycles
	
	  Specifies how often the export server repeats sending the last
	  update notice. These repeat notices are sent even when no changes
	  have occurred, so that import servers that missed the original
	  update notice can receive the notice. The server waits the
	  equivalent of (Pulse * Interval) minutes before sending each repeat
	  notice. Default: 3.
	
	Random REG_DWORD 1 to 120 seconds
	
	  Specifies the maximum time that the import servers can wait before
	  requesting an update. An import server uses the export server's
	  value of Random to generate a random number of seconds (from 0 to
	  the value of Random). The import server waits this long after
	  receiving an update notice before requesting the replica from the
	  export server. This prevents the export server from being
	  overloaded by simultaneous update requests. Default: 60.
	
	Replicate REG_DWORD 1, 2, or 3
	
	  Specifies the Replicator action, according to the following:
	
	  Value          Meaning
	  ----------------------
	
	    1            Export-the server maintains a master tree to be
	                 replicated.
	    2            Import-the server receives update notices from the export
	                 server.
	    3            Both-the server is to export and import directories or
	                 files.
	
	  Use the Replicator controls in Server Manager or the Server icon in
	  Control Panel to set this value. Default: 3.
	
	  The Replicator does not use the REPL.INI file as does LAN Manager
	  2.0. The integrity and extent values (among other items) are stored
	  as REG_SZ values under the Exports and Imports subkeys, which are
	  found under the Replicator\Parameters key. These values are used
	  only by the software and should be maintained only by the system.
	
	RPC and RPCLocator Software Entries
	-----------------------------------
	
	There are no definable parameters of note in the Services subkey for Remote
	Procedure Call (RPC) and RPCLocator.
	
	The important value entries governing RPC are found under the Software key. There
	are four subkeys: ClientProtocols, NameService, NetBIOS, and ServiceProtocols.
	Entries are described in this section.
	
	ClientProtocols and ServiceProtocols Entries for RPC:
	
	The ClientProtocols subkey contains the mappings from client-side RPC protocol
	name to DLL name. This is the Registry path:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\ClientProtocols
	
	The default values are as follows. All data types are REG_SZ.
	
	  ncacn_np =  rpcltc1.dll
	  ncacn_ip_tcp =  rpcltc3.dll
	  ncacn_nb_nb =  rpcltc5.dll
	  ncacn_nb_tcp =  rpcltc5.dll
	  ncacn_nb_ipx =  rpcltc5.dll
	  ncacn_spx =  rpcltc6.dll
	  ncalrpc =  ncalrpc
	
	The ServerProtocols subkey does the same for server-side protocols in this
	Registry path:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\ServerProtocols
	
	The default values are:
	
	  ncacn_np =  rpclts1.dll
	  ncacn_ip_tcp =  rpclts3.dll
	  ncacn_nb_nb =  rpclts5.dll
	  ncacn_nb_tcp =  rpclts5.dll
	  ncacn_nb_ipx =  rpclts5.dll
	  ncacn_spx =  rpclts6.dll
	  ncalrpc =  ncalrps
	
	These subkeys are present for all supported RPC transports, but the mappings for
	the ncacn_np and ncalrpc protocols are not used. For these transports, the
	mapping is hardcoded in the RPC run-time code.
	
	In the naming convention for the RPC dynamic-link libraries (DLLs): RPC indicates
	this is an RPC DLL; LT indicates a loadable transport; C or S indicates
	client-side or server-side; and the number indicates which transport, where 1 =
	named pipes, 2 = undefined, 3 = TCP/IP, 4 = DECNet, 5 = NetBIOS, and 6 = SPX.
	
	NOTE: On 16-bit Windows for MS-DOS systems, these entries in C:\RPCREG.DAT are a
	subset of this information. For 16-bit systems, we rely upon the user to give
	the proper LANA's to Setup. In addition, all information in the ClientProtocols
	section is hardcoded into the run-time, so the section will typically not be
	present in RPCREG.DAT. Finally, a Windows-based application running under the
	WOW subsystem will still reference RPCREG.DAT for its parameters, because it
	does not have access to the Windows NT Registry.
	
	NameService Entries for RPC:
	
	The NameService subkey contains information used by the RPC Locator service and
	the client-side RPC NSI calls. This is the Registry path:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\NameService
	
	The subkeys have the following default values when the Locator is the name
	service provider. All are REG_SZ data types.
	
	  DefaultSyntax  =  3
	  Protocol =  ncacn_np
	  NetworkAddress =  \\.
	  ServerNetworkAddress =  \\.
	  Endpoint  =  \pipe\locator
	
	Because the Locator only listens to \pipe\locator, it is unwise to change any of
	the name service values when the Locator is the name service provider.
	
	When CDS is the name service provider (via NSID), these entries have the
	following values. Again, all are REG_SZ data types.
	
	  DefaultSyntax  =  3
	  Protocol =  ncacn_ip_tcp
	  NetworkAddress =  hostname.organization.edu
	  ServerNetworkAddress =  hostname.organization.edu
	  Endpoint =
	
	The value for Endpoint is intentionally left blank in this case.
	
	For these value entries, DefaultSyntax specifies the OSF name syntax to use when
	RPC_C_NS_SYNTAX_DEFAULT is specified as the name service syntax to one of the
	name service functions. The Locator and NSID support only the value of 3.
	Because NSID forwards requests to CDS, it is possible that NSID actually
	supports other syntaxes.
	
	Protocol, NetworkAddress, ServerNetworkAddress, and Endpoint are used by the
	system to construct a binding handle to the name service database and then to
	make an RPC call to fetch the requested binding handles.
	
	When CDS is the provider, the NetworkAddress and ServerNetworkAddress entry
	values should be identical. The other entries can be changed, depending upon the
	requirements of the NSID implementation. For the current Digital NSID, the
	defaults are the best values.
	
	NetBIOS Entries for RPC:
	
	The NetBIOS subkey describes the mapping of NetBIOS-based protocol sequences to
	LANA numbers. The Registry path is:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\NetBIOS
	
	Each value has the following form:
	
	  ncacn_nb_baseindex      REG_DWORD     lana
	
	In the format for these value entries, base is either nb, ipx, or tcp, and index
	and lana are zero-based integers. For example, a computer might have these
	entries:
	
	  ncacn_nb_nb0  = 0
	  ncacn_nb_ipx0 = 1
	  ncacn_nb_tcp0 = 2
	
	In this example, IPX is on LANA 1, TCP is on LANA 2, and NetBEUI is on LANA 0. As
	another example, if a computer has two network adapter cards using NetBEUI, the
	configuration would be the following:
	
	  ncacn_nb_nb0 = 0
	  ncacn_nb_nb1 = 1
	
	This information is updated by Windows NT Setup to match the installed network
	transports, so it should never need to be altered.
	
	Schedule Service Entries
	------------------------
	
	There are no parameters that can be added for the Schedule service in this path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	       \Schedule
	
	You use the Schedule service to submit a job such as an executable or batch file
	to run at a later time. You must define access controls on the Schedule key
	itself if you want to run in an account that is not an Administrator account.
	
	Reference: "The Windows NT Resource Kit for Operating System Version 3.1."
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
