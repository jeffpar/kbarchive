---
layout: page
title: "Q135922: Windows NT Registry Parameters for WINS"
permalink: /kb/135/Q135922/
---

## Q135922: Windows NT Registry Parameters for WINS

	Article: Q135922
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives a list of configuration parameters for Windows Internet Name
	Service (WINS) for Windows NT versions 3.5 and 3.51 that can be modified through
	the Registry Editor (REGEDT32.EXE). Some of these parameters can also be
	configured through WINS Manager. Some of the given parameters are applicable
	only for Windows NT version 3.51.
	
	
	WINS Registry Parameters
	------------------------
	
	The Registry parameters for WINS servers are specified under the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins\Parameters
	
	This key lists all the non-replication related parameters needed to configure a
	WINS server. It also contains a \Datafiles key, which lists all the files that
	should be read by WINS to initialize or reinitialize its local database.
	
	BackupDirPath
	-------------
	
	Data Type : REG_SZ
	Range : path name
	Default : %SystemRoot%\system32\wins\backup
	
	Specifies the path to the backup directory.
	
	DbFileNm
	--------
	
	Data Type : REG_EXPAND_SZ
	Range : path name
	Default : %SystemRoot%\system32\wins\wins.mdb
	
	Specifies the full path name for the WINS database file.
	
	DoBackupOnTerm
	--------------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : 0
	
	Specifies that the database will be backed up automatically when the WINS service
	is stopped.
	
	DoStaticDataInit
	----------------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : 0 (false. that is, the WINS server does not initialize its db)
	
	If this parameter is set to a non-zero value, the WINS server will initialize its
	database with records listed in one or more files listed under the \Datafiles
	key. The initialization is done at process invocation and whenever a change is
	made to one or more values of the \Parameters or \Datafiles keys (unless the
	change is to change the value of DoStaticDataInit to 0).
	
	InitTimePause
	-------------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : 0
	
	Set to 1 to instruct WINS to remain in the paused state until the first
	replication. If set to 1, it is recommended that WINS\Partners\Pull
	\InitTimeReplication be either set to 1 or removed. Either method ensures that
	WINS replicates with its listed partners on starting. Paused state means that
	WINS will not accept any name registrations/releases until the above replication
	happens.
	
	LogDetailedEvents
	-----------------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : 0
	
	Specifies whether logging events is verbose.
	
	LoggingOn
	---------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : 1
	
	Specifies whether logging of database changes to JET.LOG is turned on.
	
	LogFilePath
	-----------
	
	Data Type : REG_SZ or REG_EXPAND_SZ
	Range : Directory
	Default : %SystemRoot%\System32\WINS
	
	Specifies the directory for WINS log files.
	
	MigrateOn
	---------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : 0
	
	Specifies that static unique and multihomed records in the database are treated
	as dynamic when they conflict with a new registration or replica.
	
	McastIntvl
	----------
	
	Data type : REG_DWORD
	Range : The minimum allowable value is 2400 seconds (40 minutes)
	Default : 2400 (seconds)
	
	This parameter specifies the time interval (in seconds) at which the WINS server
	sends a multicast announcement to announce its presence to other WINS servers.
	Applicable only to Windows NT version 3.51.
	
	McastTtl
	--------
	
	Data type : REG_DWORD
	Range : 1 - 0x22
	Default value : 6
	
	This parameter specifies the number of jumps across a router that a WINS
	multicast announcement can take. Applicable only to Windows NT version 3.51.
	
	NoOfWrkThds
	-----------
	
	Data Type : REG_DWORD
	Range : 1 - 0x28
	Default : Number of processors on the system
	
	Specifies the number of worker threads (to handle name query packets from
	clients). This can be changed without restarting the WINS computer.
	
	PriorityClassHigh
	-----------------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : 0
	
	Specifies the priority class of WINS. Set to 1 for high priority class. This can
	be changed without restarting the WINS computer.
	
	Also, the HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins
	\Parameters\Datafiles subkey lists one or more files that the WINS server should
	read to initialize or reinitialize its local database with static records. If
	the full path of the file is not listed, the directory of execution for the WINS
	server is assumed to contain the data file. The parameters can have any names
	(for example, DF1 or DF2). Their data types must be REG_SZ or REG_EXPAND_SZ.
	
	The HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins\Partners key has
	two subkeys, \Pull and \Push, under which are subkeys for the IP addresses of
	all push and pull partners, respectively, of the WINS server.
	
	A push partner, listed under the \Partners\Pull key, is one from which a WINS
	server pulls replicas and from which it can expect update notification messages.
	The following parameter appears under the IP address for a specific push
	partner. This parameter can be set only by changing the value in Registry
	Editor:
	
	OnlyDynRecs
	-----------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : 0
	
	If set to 1, specifies that only dynamically registered records be replicated to
	WINS pulling replicas. The default setting of 0 means that all records (dynamic
	and static) be replicated.
	
	RefreshInterval
	---------------
	
	Data Type : REG_DWORD
	Range : 0x960 - 0x7fffffff
	Default : 0x54600 (96 hrs)
	
	Specifies how often a client registers its name. This can be configured through
	WINS Manager as Renewal Interval.
	
	RplOnlyWCnfPnrs
	---------------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : 1
	
	If "RplOnlyWCnfPnrs" is set to TRUE, replication will be performed only with
	those partners that are listed under the Pull/Push key. If not set to TRUE,
	replication can be initiated even with unlisted partners as a result of
	administrative action or as a result of receiving an update notification.
	
	TombStoneInterval
	-----------------
	
	Data Type : REG_DWORD
	Range : 0x12C0 - 0x7fffffff
	Default : 0x54600 (96 hrs)
	
	Specifies the interval between when an entry is marked as released and when it is
	marked as extinct. Same as Extinct Interval configured through WINS Manager.
	Must be at least two times the minimum Refresh Interval.
	
	TombStoneTimeOut
	----------------
	
	Data Type : REG_DWORD
	Range : 0x15180 - 0x7fffffff
	Default : 0x54600 (96 hrs)
	
	Specifies the interval between when an entry is marked extinct and when the entry
	is finally scavenged from the database. Same as Extinction Timeout configured
	through WINS Manager. The default is the same as the Refresh Interval or 24
	hours whichever is higher.
	
	UseSelfFndPnrs
	--------------
	
	Data type : REG_DWORD
	Range : 0 or 1
	Default value : 0
	
	If this parameter is set to 1 and network routers support multicasting, the WINS
	server automatically finds other WINS servers on the network and configures them
	as push and pull partners. If the parameter is set to 1 and network routers do
	not support multicasting, the WINS server finds only those WINS servers that are
	on its own subnetwork. Only applicable to Windows NT version 3.51.
	
	VerifyInterval
	--------------
	
	Data type : REG_DWORD
	Range: 0x1FA400 - 0x7fffffff
	Default: 0x1FA400 (576 hrs)
	
	Specifies the interval after which the WINS server must verify that old names it
	does not own are still active. The default minimum is 576 hours (24 days) or 3
	times TombStoneInterval whichever is higher.
	
	VersCounterStartVal_LowWord
	---------------------------
	
	Data type : REG_DWORD
	Range: 0 - 0x7fffffff
	Default: 0
	
	Specified the low DWORD of the highest version ID number for the database.
	
	VersCounterStartVal_HighWord
	----------------------------
	
	Data type : REG_DWORD
	Range: 0 - 0x7fffffff
	Default: 0
	
	Specifies the high DWORD of the highest version ID number for the database.
	
	REGISTRY PARAMETERS FOR REPLICATION PARTNERS
	--------------------------------------------
	
	Parameters for Push Partners include the following:
	
	InitTimeReplication
	-------------------
	
	Data type : REG_DWORD
	Range : 0 or 1
	Default : 0
	Path : ..\SYSTEM\CurrentControlSet\Services\Wins\Partners\Push
	
	Specifies whether this WINS server will inform pull partners of the database
	status when the system is initialized.
	
	MemberPrec
	----------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : None
	Path : ..\SYSTEM\CurrentControlSet\Services\Wins\Partners\Push
	
	Specifies the relative precedence of addresses in an Internet group (name with
	16th byte being 0x1c). Addresses in the 0x1c names pulled from a WINS partner
	will be given the precedence assigned to the WINS. The value can be 0 (low) or 1
	(high). The locally registered addresses always have a high precedence. Set this
	value to 1 if this WINS partner is serving a geographic location that is
	nearby.
	
	RplOnAddressChg
	---------------
	
	Data Type : REG_DWORD
	Range : 0 or 1
	Default : 0
	Path : ..\SYSTEM\CurrentControlSet\Services\Wins\Partners\Push
	
	Specifies whether this server will inform pull partners of the database status
	when an address changes in a mapping record.
	
	UpdateCount
	-----------
	
	Data Type : REG_DWORD
	Range : 0x14 - 0x7fffffff
	Default : None
	Path : ..\SYSTEM\CurrentControlSet\Services\Wins\Partners\Push
	
	  \<IP address>
	
	Specifies a number for how many updates are made to locally owned records in the
	database before partners are informed of changes.
	
	Parameters for Pull Partners include the following:
	
	CommRetryCount
	--------------
	
	Data Type : REG_DWORD
	Range : 0 - 0x7fffffff
	Default : 3
	Path : ..\SYSTEM\CurrentControlSet\Services\Wins\Partners\Pull
	
	Specifies the number of times the server should attempt to connect with a partner
	for pulling replicas.
	
	InitTimeReplication
	-------------------
	
	Data type : REG_DWORD
	Range : 0 or 1
	Default : 0
	Path : ..\SYSTEM\CurrentControlSet\Services\Wins\Partners\Pull
	
	Specifies whether this WINS server pulls replicas from known partners whenever
	the system is initialized or whenever a replication related parameter is
	changed.
	
	SpTime
	------
	
	Data Type : REG_SZ
	Default : None
	Path : ..\SYSTEM\CurrentControlSet\Services\Wins\Partners\Pull
	
	  \<Ip Address>
	
	Specifies the start time for replication. For SpTime, WINS replicates at the set
	time if it is in the future for that day. After that, it replicates every number
	of seconds specified by TimeInterval. If SpTime is in the past for that day,
	WINS replicates every number of seconds specified by TimeInterval, starting from
	the current time (if InitTimeReplication is set to 1).
	
	TimeInterval
	------------
	
	Data Type : REG_DWORD
	Default : None
	Path : ..\SYSTEM\CurrentControlSet\Services\Wins\Partners\Pull
	
	  \<Ip Address>
	
	Specifies the replication time interval.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
