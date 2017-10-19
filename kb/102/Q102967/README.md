---
layout: page
title: "Q102967: REG: Server Service Entries, PART 1"
permalink: /kb/102/Q102967/
---

## Q102967: REG: Server Service Entries, PART 1

	Article: Q102967
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	This is the first of two articles on these entries; for the other entries,
	see "Server Service Entries, Part 2".
	
	SERVER SERVICE ENTRIES
	----------------------
	
	With Registry Editor, you can modify the startup parameters for the Server
	service. Unless otherwise noted, these parameters are found in this path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet \Services\LanmanServer\Parameters
	
	The parameters that control network bindings for this service are described
	in the article on "NetRules Subkey Entries."
	
	This is the first of two articles on these entries; for the other entries,
	see "Server Service Entries, Part 2".
	
	AlertSched REG_DWORD 1 to 65535 minutes:
	
	Default: 5
	
	Specifies in Microsoft LAN Manager and in Windows NT how often the server
	checks alert conditions and sends needed alert messages.
	
	Announce REG_DWORD 1 to 65535 seconds:
	
	Default: 240
	
	Specifies how often a nonhidden server announces itself to the network.
	More frequent announcements keep client server tables more up to date, but
	cost network overhead and processing on client computers, because clients
	must process every announcement.
	
	AnnDelta REG_DWORD 0 to 65535 milliseconds:
	
	Default: 3000
	
	Specifies the time by which the announcement period can vary. This helps to
	prevent several servers from continuously announcing simultaneously,
	thereby reducing network load peaks.
	
	Comment REG_SZ Text string:
	
	Default: NULL
	
	Provides the server's comment. This is sent in announcements and returned
	to NetServerGetInfo requests.
	
	Disc REG_DWORD 0 to infinite minutes:
	
	Default: 15 minutes
	
	Specifies the amount of idle time that a circuit is allowed before being
	disconnected. If the virtual circuit has any open files or searches, it is
	not automatically disconnected. If this parameter is set to a low value, it
	saves server resources but hinders performance because of clients' overhead
	in reconnecting. This is equivalent to autoDisconnect in Microsoft LAN
	Manager.
	
	DiskSpaceThreshold REG_DWORD 0 to 99 percent:
	
	Default: 10 percent
	
	Specifies the percentage of free disk space remaining before an alert is
	sent.
	
	EnableFCBopens REG_DWORD 0 or 1:
	
	Default: 1 (true)
	
	Specifies whether MS-DOS File Control Blocks (FCBs) are folded together, so
	multiple remote opens are performed as a single open on the server. This
	saves resources on the server.
	
	EnableOplockForceClose REG_DWORD 0 or 1:
	
	Default: 0 (false)
	
	If a client has an opportunistic lock (oplock) and does not respond to an
	oplock break, there are two possible behaviors that this parameter selects:
	
	Value Meaning:
	
	0 (false)   Fail the second open, thereby limiting access to the file.
	
	  (This is typical behavior for a client running LAN Manager version 2.0.)
	
	1 (true)    Force closed the open instance of the client that has the
	
	  oplock, risking the loss of cached data. (This is typical behavior for a
	  client running LAN Manager version 2.1.)
	
	EnableOplocks REG_DWORD 0 or 1:
	
	Default: 1 (true)
	
	Specifies whether the server allows clients to use oplocks on files.
	Oplocks are a significant performance enhancement, but have the potential
	to cause lost cached data on some networks, particularly wide-area
	networks.
	
	EnableRaw REG_DWORD 0 or 1:
	
	Default: 1 (true)
	
	Specifies whether the server processes raw Server Message Blocks (SMBs). If
	enabled, this allows more data to be transferred per transaction and
	improves performance. However, it is possible that processing raw SMBs can
	impede performance on certain networks. This parameter is automatically
	tuned by the server.
	
	EnableSoftCompat REG_DWORD 0 or 1:
	
	Default: 1 (true)
	
	Specifies whether the server maps a request to a normal open request with
	shared-read access when the server receives a compatibility open request
	with read access. Mapping such requests allows several MS-DOS computers to
	open a single file for read access. However, this feature can potentially
	cause functionality problems with some MS-DOS applications.
	
	ErrorThreshold REG_DWORD 1 to 65535:
	
	Default: 10
	
	Sets the number of errors that can occur within an AlertSched interval
	before the server sends an altert message.
	
	Hidden REG_DWORD 0 or 1:
	
	Default: 0 (false)
	
	If this parameter is disabled, the server's name and comment can be viewed
	by others on the domain. If enabled, the server's name and comment will not
	be announced.
	
	InitConnTable REG_DWORD 1 to 128:
	
	Default: 8
	
	Specifies the initial number of tree connections to be allocated in the
	connection table. The server automatically increases the table as
	necessary, so setting the parameter to a higher value is an optimization.
	
	InitFileTable REG_DWORD 1 to 256:
	
	Default: 16
	
	Specifies the initial number of file entries to be allocated in the file
	table of each server connection.
	
	InitSearchTable REG_DWORD 1 to 2048:
	
	Default: 8
	
	Specifies the initial number of entries in the connection's search table.
	
	InitSessTable REG_DWORD 1 to 64:
	
	Default: 4
	
	Specifies the initial number of session entries to be allocated in the
	session table of each server connection.
	
	InitWorkItems REG_DWORD 1 to 512:
	
	Default: (depends on configuration)
	
	Specifies the initial number of receive buffers, or work items, used by the
	server. Allocating work items costs a certain amount of memory initially,
	but not as much as having to allocate additional buffers later.
	
	IRPstackSize REG_DWORD 1 to 12:
	
	Default: 4
	
	Specifies the number of stack locations in I/O Request Packets (IRPs) used
	by the server. It may be necessary to increase this number for certain
	transports, MAC drivers, or local file system drivers. Each increment costs
	36 bytes of memory per work item (that is, #work items * 36 bytes = total
	memory cost).
	
	LinkInfoValidTime REG_DWORD 0 to 100,000 seconds:
	
	Default: 60
	
	Specifies the amount of time during which the transport link information is
	still valid. If more than this amount of time has passed since the last
	query, the server requires transport link information.
	
	MaxFreeConnections REG_DWORD 2 to 8 items:
	
	Default: Depends upon configuration
	
	Specifies the maximum number of free connection blocks maintained per
	endpoint.
	
	MaxLinkDelay REG_DWORD 0 to 100,000 seconds:
	
	Default: 60
	
	Specifies the maximum time allowed for a link delay. If delays exceed this
	number, the server disablesraw I/O for this connection.
	
	MaxKeepSearch REG_DWORD 10 to 10000 seconds:
	
	Default: 1800
	
	Specifies the maximum time during which an incomplete MS- DOS search will
	be kept by the server. Larger values ensure better interoperability with MS-
	DOS utilities such as tree-copy and delete-node. However, larger values can
	cause unusual local behavior (such as a failure of a local directory-delete
	operation) and higher memory use on the server.
	
	MaxMpxCt REG_DWORD 1 to 100 requests:
	
	Default: 50
	
	Provides a suggested maximum to clients for the number of simultaneous
	requests outstanding to this server. A higher value can increase server
	performance but requires higher use of server work items.
	
	MaxNonpagedMemoryUsage REG_DWORD 1 MB to infinite bytes:
	
	Default: (depends on system and server configuration)
	
	Specifies the maximum size of nonpaged memory that the server can have
	allocated at any time. Adjust this parameter if you want to administer
	memory quota control.
	
	MaxPagedMemoryUsage REG_DWORD 1 MB to infinite bytes:
	
	Default: (depends on system and server configuration)
	
	Specifies the maximum size of pageable memory that the server can have
	allocated at any time. Adjust this parameter if you want to administer
	memory quota control.
	
	MaxWorkItems REG_DWORD 1 to 512 items:
	
	Default: (depends on configuration)
	
	Specifies the maximum number of receive buffers, or work items, the server
	can allocate. If this limit is reached, the transport must initiate flow
	control at a significant performance cost.
	
	MaxWorkItemIdleTime REG_DWORD 10 to 1800 seconds:
	
	Default: 300
	
	Specifies the amount of time that a work item can stay on the idle queue
	before it is freed.
	
	Reference: "The Windows NT Resource Kit for Operating System Version 3.1".
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
