---
layout: page
title: "Q301310: IIS 5 Common Registry Parameters (1 of 2)"
permalink: kb/301/Q301310/
---

## Q301310: IIS 5 Common Registry Parameters (1 of 2)

	Article: Q301310
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 29-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is part 1 of 2 containing information regarding the common registry
	parameters for Internet Information Services (IIS) 5.0.
	
	The Internet Information Server contains the following three registry keys:
	
	- FTP
	
	- WWW (World Wide Web)
	
	- Internet Information Server (IIS)
	
	The registry keys for FTP and WWW use a few similar parameters and values, but
	are used independently of each other. The IIS registry key provides registry
	parameters and values that are global for the InetInfo process and the server.
	
	The parameters are classified into the following 2 catagories:
	
	- ADMIN CONFIGURABLE - These parameters are best configured using the Admin
	  tool to take effect immediately. If these parameters are manually configured,
	  all services should be stopped and restarted.
	
	- CONFIGURABLE - These parameters are optional. Currently no administration
	  support exists for changing these parameters. If any change is made to such
	  parameters, all services need to be stopped and restarted.
	
	MORE INFORMATION
	================
	
	IIS shares a common portion of registry in the following location for the
	InetInfo process. These parameters (and their values) are used for global
	control of the Internet Information Server.
	
	The parameter location is under the HKEY_LOCAL_MACHINE tree under the following
	keys:
	
	  \System\CurrentControlSet\Services\InetInfo\Parameters
	
	ListenBacklog                                   REG_DWORD 
	Range:1 - 250                                   Default:25
	Description:                                    ADMIN CONFIGURABLE
	
	This specifies the WinSock listen backlog for each IP address that the server is
	listening on. If many connections per second are being received, the WinSock
	listen backlog may become depleted and client?s connections may be refused.
	Servers that are under heavy loads may want to set this value to approximately
	50.
	
	BandwidthLevel                                  REG_DWORD 
	Range:0 - 0xFFFFFFFF                            Default:0xFFFFFFFF
	Description:                                    ADMIN CONFIGURABLE
	
	This specifies the amount of bandwidth on the network that the IIS server can
	use. The server comes with an automatic bandwidth throttler that makes
	intelligent decisions to meet user requirements. This helps to reduce
	overloading the network with IIS server activities. For administrators of small
	corporate servers, where a single server is used for multiple sites, this helps
	to reduce network usage for IIS servers. It is recommended that this parameter
	be set from Internet Server Admin Manager; otherwise, the server should be
	stopped and restarted for this value to take effect. A special value of
	0xFFFFFFFF means that you should not do any throttling.
	
	MemoryCacheSize                                 REG_DWORD 
	Range:0 - 0xFFFFFFFF                            Default:10% of Physical Memory
	Description:                                    CONFIGURABLE
	
	IIS caches system handles, directory listings, and several BLOBs of
	frequently-used data to improve performance of the system. This parameter
	specifies the amount of memory in bytes to allocate for such a cache. This
	cannot be configured by using Admin Manager. When this parameter is changed, the
	server should be stopped and restarted for the changes to take effect. A special
	value of 0 means that you should not do any caching. The performance may be low
	when caching is shut out. Certain sites that experience a large amount of file
	traffic can increase this size if there is sufficient RAM on the system.
	
	DisableMemoryCache                              REG_DWORD 
	Range:0 - 1                                     Default:1 (PWS)  0 (IIS)
	Description:                                    CONFIGURABLE
	
	This disables IIS server caching. This cannot be configured using Admin Manager.
	When this parameter is changed, the server should be stopped and restarted for
	the changes to take effect.
	
	ObjectCacheTTL                                  REG_DWORD 
	Range:0 - 0x7FFFFFFF, 0xFFFFFFFF                Default:30 seconds
	Description:                                    CONFIGURABLE
	
	Objects in the memory cache are phased out of the cache if there have been no
	references to an object after this period. If the number of data files is
	limited or clients only access a small portion of files, increasing this value
	may be of benefit (perhaps on the order of fifteen minutes). A value of
	0xFFFFFFFF disables the object cache scavenger. Units: Seconds.
	
	UserTokenTTL                                    REG_DWORD
	Range:0 - 0x7FFFFFFF                            Default:15*60 (10 minutes)
	Description:                                    CONFIGURABLE
	
	When a request is made to the server, the security credentials for the request
	(or the configured anonymous user) are used to create a user token on the server
	that the server impersonates when it accesses files or other system resources.
	The token is cached so that the NT logon only takes place the first time the
	user accesses the system or after the user?s token has fallen out of the cache.
	NTLM authentication tokens are not cached. Units: Seconds.
	
	LogFileBatchSize                                REG_DWORD 
	Range:1200 - 0xFFFFFFFF                         Default:64*1024 (64 KB)
	Description:                                    CONFIGURABLE
	
	This specifies the batch size for writing the log file. The server caches the
	last LogFileBatchSize bytes of data in memory buffers before it dumps the
	current buffer and moves on to the next buffer. Such batch processing reduces
	the amount of disk traffic that is created by log files. However, if a site
	needs the current up-to-date log records to be flushed to the disk, the batch
	size can be reduced.
	
	NOTE: For release 1.0 of Gibraltar servers, set this parameter to at least 1200
	bytes or the services will crash.
	
	LogFileFlushInterval                            REG_DWORD 
	Range:60 - 0xFFFFFFFF                           Default:5*60 (5 minutes)
	Description:                                    CONFIGURABLE
	
	This specifies the interval for flushing out the log file. The server
	periodically checks for outstanding log records and flushes them if necessary at
	the interval that is specified by this parameter. This is very useful in a
	low-volume server environment. In large-volume environments, LogFileBatchSize
	takes control of flushing the records after there is a critical mass of log
	data. The minimum interval that is permitted is 1 minute. If a value of INFINITE
	(0xFFFFFFFF) is specified, the periodic flushing is disabled. Units: Seconds.
	
	MaxPoolThreads                                  REG_DWORD 
	Range:0 - 0xFFFFFFFF                            Default:10
	Description:                                    CONFIGURABLE
	
	MaxPoolThreads specifies the number of pool threads to create per processor. Each
	pool thread watches for the network request and processes the same. Generally,
	you should not create more than 20 threads per processor.
	
	PoolThreadLimit                                 REG_DWORD 
	Range:0 - 0xFFFFFFFF                            Default:2 * # MB
	Description:                                    CONFIGURABLE
	
	PoolThreadLimit specifies the maximum number of pool threads that can be created
	in the system. Each pool thread watches for the network request and processes
	the same.
	
	MaxConcurrency                                  REG_DWORD 
	Range:0 - 0xFFFFFFFF                            Default:0
	Description:                                    CONFIGURABLE
	
	This specifies the amount of concurrency that a system should provide. Completion
	ports are used for handling IO. In general, you should not have more than one
	thread running and conflicting on shared memory or locks. This parameter
	specifies how many threads per processor should be allowed to run simultaneously
	if there is a pending IO operation. The specific value of 0 allows the system to
	make an intelligent choice about the number of threads to use. Any non-zero
	value specifies that the system should allow that many threads per processor to
	run simultaneously.
	
	ThreadTimeout                                   REG_DWORD 
	Range:0 - 0xFFFFFFFF                            Default:24*60*60 (24 hours)
	Description:                                    CONFIGURABLE
	
	This specifies the amount of time that an IO processing thread should be
	maintained even if there is no IO on the system. In general, when there is no IO
	activity and there are no requests outstanding, the server is idle and does not
	consume memory. However, if that situation prolongs and exceeds the
	ThreadTimeout interval, the thread is killed. Units: Seconds.
	
	UseAcceptEx                                     REG_DWORD 
	Range:0, 1                                      Default:1
	Description:                                    CONFIGURABLE
	
	Starting with NT 3.51 SP2, there is a new facility that listens and establishes
	connections at the server side. AcceptEx provides an inexpensive way to accept
	and receive initial chunks of data on a new incoming connection. By default, the
	server uses this method to accept new connections. If for experimental purposes
	you decide to turn off this fast IO path, this value can be set to 0. However,
	setting this value to 0 may cause potential performance degradation.
	
	AcceptExOutstanding                             REG_DWORD 
	Range:0-1000                                    Default:40
	Description:                                    CONFIGURABLE
	
	When you use AcceptEx, a certain number of sockets should be maintained to
	receive and process new connections. This parameter specifies the number of such
	outstanding connections to maintain. Whenever the number of outstanding sockets
	falls below this range, the server adds additional sockets to bring it back to
	this level.
	
	AcceptExTimeout                                 REG_DWORD 
	Range:0-0xFFFFFFFF                              Default:120
	Description:                                    CONFIGURABLE
	
	This specifies the time an accept ex socket is allowed to wait for a receive to
	complete before the server blows away the long-waiting connection. This helps to
	reduce the number of outstanding sockets and therefore conserve the system
	memory usage. Units: Seconds.
	
	UseTransmitFile                                 REG_DWORD
	Range:0 - 1                                     Default:1
	Description:                                    CONFIGURABLE
	
	This allows the user to disable the use of TransmitFile by the server. This is
	useful especially for the NTW version when users have more than one remote
	client connected over a slow link, because TransmitFile can tie up resources in
	the system during sends.
	
	NonTFBufferSize                                 REG_DWORD 
	Range:512 - 64K                                 Default:4096
	Description:                                    CONFIGURABLE
	
	This is used when TransmitFile is disabled by using the UseTransmitFile registry
	key. This allows the user to control the size of the I/O buffers that are used
	in the system.
	
	MimeMap                                         Key
	Description:                                    CONFIGURABLE
	
	This is a subkey that contains all of the Multipurpose Internet Mail Extensions
	(MIME) mappings for the Web servers. Note that each MIME type is a REG_SZ with
	the type information as the name of the value with an empty value. The format
	for each entry is as follows:
	
	<mime-type>,<file-extension>,<unused>
	
	For example, if the entry is the following
	
	image/gif,gif,,5
	
	when clients ask the Web server for a file that ends with a .gif extension, the
	MIME type that is returned to the client is "image/gif".
	
	MinFileKbSec                                    REG_DWORD
	Range: 1 - 8192                                 Default: 1000
	Description:                                    CONFIGURABLE
	
	When an IIS server sends a file to the client, a timeout is established for how
	long the server will allow the transfer to continue before aborting it. The
	timeout that is chosen is the maximum of the following two items:
	
	- The Connection Timeout that is specified in the Admin tool.
	
	- The size of the file divided by the value specified as MinFileKbSecs.
	
	For example, a file size of 100 KB is given a timeout of 100 seconds or the
	Connection Timeout if it is greater. Note that the registry name is misleading:
	the value is in bytes, not kilobytes (as the name might imply).
	
	CacheSecurityDescriptor	                        REG_DWORD
	Range:0 - 1                                     Default:0
	Description:                                    CONFIGURABLE
	
	This value specifies whether security descriptors are cached for file objects. If
	this is enabled ( 1 ), IIS retrieves security permissions when caching a file
	object and does not need to access the file object to check access rights for
	new users. This is only interesting if you have more than one user account (for
	example, if you are not using anonymous only). By default, IIS does not cache
	the security descriptor and checks the access rights against the file object for
	new user accounts.
	
	DebugFlags                                      REG_DWORD
	Range:  0 - 0xFFFFFFFF                          Default:0
	Description:                                    INTERNAL ANALYSIS
	
	DebugFlags specifies the bit mask for selectively enabling different checks in a
	debug binary of the server common DLL (Infocomm.dll). This bit mask applies to
	the common DLL only.
	
	  #define DEBUG_ERROR                                     0x00000008L
	  #define DEBUG_ODBC                                      0x00000010L
	  #define DEBUG_DLL_RPC                                   0x00000020L
	  #define DEBUG_GATEWAY                                   0x00010000L
	  #define DEBUG_INETLOG                                   0x00020000L
	  #define DEBUG_ATQ                                       0x00040000L
	  #define DEBUG_DLL_EVENT_LOG                             0x00100000L
	  #define DEBUG_DLL_SERVICE_INFO                          0x00200000L
	  #define DEBUG_DLL_SECURITY                              0x00400000L
	  #define DEBUG_DLL_CONNECTION                            0x00800000L
	  #define DEBUG_DLL_SOCKETS                               0x01000000L
	  #define DEBUG_HEAP_FILL                                 0x02000000L
	  #define DEBUG_HEAP_MSG                                  0x04000000L
	  #define DEBUG_HEAP_CHECK                                0x08000000L
	  #define DEBUG_MIME_MAP                                  0x10000000L
	  #define DEBUG_DLL_VIRTUAL_ROOTS                         0x20000000L
	
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
