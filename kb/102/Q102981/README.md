---
layout: page
title: "Q102981: REG: Workstation Service Entries"
permalink: kb/102/Q102981/
---

## Q102981: REG: Workstation Service Entries

	Article: Q102981
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	WORKSTATION SERVICE ENTRIES
	---------------------------
	
	You can modify the startup parameters for the Workstation service using the
	Registry Editor. Unless otherwise indicated, these value entries are found
	in the following Registry path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	  \Services\LanmanWorkstation\Parameters
	
	The parameters that control network bindings for this service are described
	in the article "NetRules Subkey Entries".
	
	BufFilesDenyWrite   REG_DWORD   0 or 1
	--------------------------------------
	
	Default: 1 (true)
	
	Specifies whether the redirector should cache files that are opened with
	only FILE_SHARE_READ sharing access. Usually, if a file is opened with
	FILE_SHARE_READ specified, the file cannot be buffered because other
	processes may also be reading that file. This optimization allows the
	redirector to buffer such files. This optimization is safe because no
	process can write to the file.
	
	Disable this parameter if it is necessary to preserve the strict semantics
	of the sharing modes specified.
	
	BufNamedPipes   REG_DWORD   0 or 1
	----------------------------------
	
	Default: 1 (true)
	
	Indicates whether the redirector should buffer character-mode named pipes.
	
	Disable this parameter to guarantee that all pipe write operations are
	flushed to the server immediately and to disable read ahead on character-
	mode named pipes.
	
	BufReadOnlyFiles   REG_DWORD   0 or 1
	-------------------------------------
	
	Default: 1 (true)
	
	...\CurrentControlSet\Services\LanmanWorkstation
	Specifies whether the redirector should cache files that are read-only.
	Usually, if a read-only file is opened, the file cannot be buffered because
	other processes may also be reading that file. This optimization allows the
	redirector to buffer such files. This optimization is safe because no
	process can write to the file. However, another user can modify the file to
	enable writing to the file, causing loss of data. Disable this parameter if
	it is necessary to preserve the strict semantics of the sharing modes
	specified.
	
	CacheFileTimeout   REG_DWORD   Number of seconds
	------------------------------------------------
	
	Default: 10
	
	Specifies the maximum time that a file will be left in the cache after the
	application has closed the file.
	
	Increase the value of this parameter if you are performing operations on
	the server that could cause files to be reopened more than 10 seconds after
	the application has closed them. For example, if you are performing a build
	over the network, you should increase this parameter's value.
	
	CharWait   REG_DWORD   0 to 65535 milliseconds
	----------------------------------------------
	
	Default: 3600
	
	Specifies time to wait for an instance of a named pipe to become available
	when opening the pipe. Increase this value if your pipe server application
	is typically very busy.
	
	CollectionTime   REG_DWORD   0 to 65535000 milliseconds
	-------------------------------------------------------
	
	Default: 250
	
	Specifies the maximum time that write-behind data will remain in a
	character-mode pipe buffer. Changing this value may cause a named pipe
	application's performance to improve (but it does not affect SQL Server
	applications).
	
	DormantFileLimit   REG_DWORD   Number of files
	----------------------------------------------
	
	Default: 45
	
	Specifies the maximum number of files that should be left open on a share
	after the application has closed the file. This parameter exists because
	the default configuration of LAN Manager servers only allow a total of 60
	open files from remote clients and 50 from each client workstation. Because
	the Windows NT redirector may keep files open in the cache after an
	application has closed the file, this means that the redirector may
	overload a misconfigured LAN Manager server. To correct this problem,
	either reduce this value, or increase the values for the LAN Manager
	server's maxSessopens and maxOpens parameters.
	
	IllegalDatagramResetTime   REG_DWORD   Number of seconds
	--------------------------------------------------------
	
	Default: 60
	
	Specifies the span of time during which the number of illegal datagram
	events is counted. Because Windows NT logs all illegal datagrams, it is
	possible for the event log to be filled with a proliferation of these in a
	short amount of time. This entry and the NumIllegalDatagramEvents entry
	work together to limit the number of illegal datagrams that are recorded in
	the log within a certain span of time.
	
	KeepConn   REG_DWORD   1 to 65535 seconds
	-----------------------------------------
	
	Default: 600
	
	Specifies the maximum amount of time that a connection can be left dormant.
	This parameter is the redirector equivalent of the Disc parameter in the
	Services\LanmanServer\Parameters subkey.
	
	As a general rule, try increasing this value if your application closes and
	opens UNC files to a server less frequently than 10 minutes apart. This
	decreases the number of reconnections made to a server.
	
	LockIncrement   REG_DWORD   Number of milliseconds
	--------------------------------------------------
	
	Default: 10
	
	This parameter is not used for Win32 applications. However, if OS/2-based
	applications request that a lock operation waits forever, and if the lock
	cannot be immediately granted on a non-LAN Manager version 2.0 server, this
	parameter controls the rate at which the redirector ramps back the failed
	lock operations.
	
	This parameter should not be changed unless you are running an OS/2-based
	application that requests lock operations that might fail.
	
	LockMaximum   REG_DWORD   Number of milliseconds
	------------------------------------------------
	
	Default: 500
	
	Used to configure the lock backoff package. This parameter exists to
	prevent an errant application from "swamping" a server with nonblocking
	requests where there is no data available for the application.
	
	LockQuota   REG_DWORD   Bytes of data
	-------------------------------------
	
	Default: 4096 (bytes)
	
	Specifies the maximum amount of data that is read for each file using this
	optimization if the UseLockReadUnlock parameter is enabled. Increase this
	value if your application performs a significant number of lock-and-read
	style operations. (This means performing lock operations and immediately
	reading the contents of the locked data.) It is conceivable that you could
	cause the system to run out of paged pool, but only by increasing this
	value to a few megabytes and by using an application that locks millions-of-
	byte ranges.
	
	LogElectionPackets   REG_DWORD   0 or 1
	---------------------------------------
	
	Default: 0 (false)
	
	Specifies whether the Browser should generate events when election packets
	are received.
	
	MailslotBuffers   REG_DWORD   Number of buffers
	-----------------------------------------------
	
	Default: 5
	
	Specifies the maximum number of buffers available to process mailslot
	messages. If your application uses many mailslot operations, set this
	higher to avoid losing mailslot messages.
	
	MaxCmds   REG_DWORD   0 to 255
	------------------------------
	
	Default: 15
	
	Specifies the maximum number of work buffers that the redirector reserves
	for performance reasons. Increase this value to increase your network
	throughput. If your application performs more than 15 simultaneous
	operations, you might want to increase this value. Because this parameter
	actually controls the number of execution threads that can be simultane
	usly outstanding at any time, your network performance will not always be
	improved by increasing this parameter. Each additional execution threads
	takes about 1K of nonpaged pool if you actually load up the network.
	Resources will not be consumed, however, unless the user actually makes use
	of them.
	
	MaxCollectionCount   REG_DWORD   0 to 65535 bytes
	-------------------------------------------------
	
	Default: 16
	
	Specifies the threshold for character-mode named pipes writes. If the write
	is smaller than this value, the write will be buffered. Adjusting this
	value may improve performance for a named-pipe application (but it will not
	affect SQL server applications).
	
	NumIllegalDatagramEvents   REG_DWORD   Number of events
	-------------------------------------------------------
	
	Default: 5
	
	Specifies the maximum number of datagram events to be logged within the
	span of time specified by the IllegalDatagramResetTime parameter. Because
	Windows NT logs all illegal datagrams, the event log can be filled with a
	proliferation of these in a short time. This entry and the
	IllegalDatagramResetTime entry work together.
	
	OtherDomains   REG_SZ   DomainNames
	-----------------------------------
	
	Default: (none)
	
	Specifies the Microsoft LAN Manager domains to be listed for browsing.
	
	PipeIncrement   REG_DWORD   Number of milliseconds
	--------------------------------------------------
	
	Default: 10
	
	Controls the rate at which the redirector "backs off" on failing
	nonblocking pipe reads.
	
	This parameter is used to prevent an errant application from swamping a
	server with nonblocking requests where there is no data available for the
	application. You can use the backoff statistics to tune this parameter to
	be more efficient for an application that uses nonblocking named pipes
	(except for SQL Server applications).
	
	PipeMaximum   REG_DWORD   Number of milliseconds
	------------------------------------------------
	
	Default: 500
	
	Controls the maximum time at which the redirector "backs off" on failing
	non-blocking pipe reads.
	
	This parameter exists to prevent an errant application from swamping a
	server with nonblocking requests where there is no data available for the
	application. You can use the backoff statistics to tune this parameter to
	be more efficient for an application that uses nonblocking named pipes
	(except for SQL Server applications).
	
	ReadAheadThroughput   REG_DWORD   Kilobytes per second
	------------------------------------------------------
	
	Default: 0xffffffff
	
	Specifies the throughput required on a connection before the cache manager
	is told to enable read ahead.
	
	ServerAnnounceBuffers   REG_DWORD   Number
	------------------------------------------
	
	Default: 20
	
	Specifies the maximum  buffers used to process server announcements. If
	your network has many servers, you can increase this value to avoid losing
	server announcements.
	
	This parameter is found under the LanmanWorkstation\Parameters\Static
	subkey.
	
	SessTimeout   REG_DWORD   10 to 65535 seconds
	---------------------------------------------
	
	Default: 45
	
	Specifies the maximum amount of time that the redirector allows an
	operation that is not long-term to be outstanding.
	
	SizCharBuf   REG_DWORD   64 to 4096 bytes
	-----------------------------------------
	
	Default: 512
	
	Specifies the maximum number of bytes that will be written into a character-
	mode pipe buffer. Adjusting this value may improve performance for a named-
	pipe application (but it will not affect SQL server applications).
	
	Transports   REG_MULTI_SZ   List
	--------------------------------
	
	Default: None
	
	Lists the transports that the redirector services and is found under the
	LanmanWorkstation\Linkage subkey. You should modify it by choosing the
	Network icon in Control Panel.
	
	Use512ByteMaxTransfer   REG_DWORD   0 or 1
	------------------------------------------
	
	Default: 0 (false)
	
	Specifies whether the redirector should only send a maximum of 512 bytes in
	a request to an MS-Net server regardless of the servers-negotiated buffer
	size. If this parameter is disabled, request transfers from the Windows NT
	redirector could cause the MS-Net server to crash.
	
	UseLockReadUnlock   REG_DWORD   0 or 1
	--------------------------------------
	
	Default: 1 (true)
	
	Indicates whether the redirector uses the lock-and-read and write-and-
	unlock performance enhancements.
	
	When this value is enabled, it generally provides a significant performance
	benefit. However, database applications that lock a range and don't allow
	data within that range to be read will suffer performance degradation
	unless this parameter is disabled.
	
	UseOpportunisticLocking   REG_DWORD   0 or 1
	--------------------------------------------
	
	Default: 1 (true)
	
	Indicates whether the redirector should use opportunistic-locking (oplock)
	performance enhancement. This parameter should be disabled only to isolate
	problems.
	
	UseRawRead   REG_DWORD   0 or 1
	-------------------------------
	
	Default: 1 (true)
	
	Enables the raw-read optimization. This provides a significant performance
	enhancement on a local area network
	
	UseRawWrite   REG_DWORD   0 or 1
	--------------------------------
	
	Default: 1 (true)
	
	Enables the raw-write optimization. On a LAN, this provides a significant
	performance enhancement.
	
	UseUnlockBehind   REG_DWORD   0 or 1
	------------------------------------
	
	Default: 1 (true)
	
	Indicates whether the redirector will complete an unlock operation before
	it has received confirmation from the server that the unlock operation has
	completed. Disable this parameter only to isolate problems or to guarantee
	that all unlock operations complete on the server before completing the
	application's unlock request.
	
	UseWriteRawData   REG_DWORD   0 or 1
	------------------------------------
	
	Default: 1 (true)
	
	Enables the raw-write-with-data optimization. This allows the redirector to
	send 4 KB of data with each write-raw operation. This provides a
	significant performance enhancement on a local area network.
	
	UtilizeNtCaching   REG_DWORD   0 or 1
	-------------------------------------
	
	Default: 1 (true)
	
	Indicates whether the redirector uses the cache manager to cache the
	contents of files. Disable this parameter only to guarantee that all data
	is flushed to the server immediately after it is written by the
	application.
	
	Reference: "The Windows NT Resource Kit for Operating System Version 3.1".
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
