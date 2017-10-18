---
layout: page
title: "Q102630: LAN Manager Heuristics and Windows NT Registry Entries"
permalink: kb/102/Q102630/
---

## Q102630: LAN Manager Heuristics and Windows NT Registry Entries

	Article: Q102630
	Product(s): Microsoft Windows NT
	Version(s): 3.1,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Several of the wrkheuristic and srvheuristic values in the Microsoft LAN Manager
	LANMAN.INI file directly correspond to Registry entry values on a Microsoft
	Windows NT or Microsoft Windows NT Advanced Server machine. Some of those values
	are described below.
	
	WORKSTATION HEURISTICS
	----------------------
	
	The following LAN Manager workstation heuristics map to Windows NT workstation
	parameters in the Registry at HKEY_LOCAL_MACHINE\System\
	CurrentControlSet\Services\LanmanWorkstation\Parameters:
	
	WRKHEURISTIC: 0
	UseOpportunisticLocking
	
	Indicates whether the redirector should use opportunistic-locking performance
	enhancement. This parameter should be disabled only to isolate problems.
	
	  Default: 1 (True)
	
	WRKHEURISTIC: 2
	UseUnlockBehind
	
	Indicates whether the redirector will complete an unlock operation before it has
	received confirmation from the server that the unlock operation has completed.
	Disable this parameter only to isolate problems or to guarantee that all unlock
	operations complete on the server before completing the application's unlock
	request.
	
	  Default: 1 (true)
	
	WRKHEURISTIC: 4
	BufNamedPipes
	
	Indicates whether the redirector should buffer character-mode named pipes.
	Disable this parameter to guarantee that all pipe write operations are flushed
	to the server immediately and to disable read ahead on character-mode named
	pipes.
	
	  Default: 1 (True)
	
	WRKHEURISTIC: 5
	UseLockReadUnlock
	
	Indicates whether the redirector will use the lock-and-read and write-and-unlock
	performance enhancements.
	
	When this value is enabled, it generally provides a significant performance
	benefit. However, database applications that lock a range and don't allow data
	within that range to be read will suffer performance degradation unless this
	parameter is disabled.
	
	  Default: 1 (True)
	
	WRKHEURISTIC: 11
	UseRawRead and UseRawWrite
	
	Enables the raw-read and write optimization. This provides a significant
	performance enhancement on a local area network.
	
	  Default: 1 (True)
	
	WRKHEURISTIC: 19
	Use512ByteMaxTransfer
	
	Specifies whether the redirector should only send a maximum of 512 bytes in a
	request to an MS-Net server regardless of the servers- negotiated buffer size.
	If this parameter is disabled, request transfers from the Windows NT redirector
	could cause the MS-Net server to crash.
	
	  Default: 0 (False)
	
	WRKHEURISTIC: 23
	BufFilesDenyWrite
	
	Specifies whether the redirector should cache files that are opened with only
	FILE_SHARE_READ sharing access. Usually, if a file is opened with
	FILE_SHARE_READ specified, the file cannot be buffered because other processes
	may also be reading that file. This optimization allows the redirector to buffer
	such files. This optimization is safe because no process can write to the file.
	Disable this parameter if it is necessary to preserve the strict semantics of
	the sharing modes specified.
	
	  Default: 1 (true)
	
	WRKHEURISTIC: 24
	BufReadOnlyFiles
	
	Specifies whether the redirector should cache files that are read- only. Usually,
	if a read-only file is opened, the file cannot be buffered because other
	processes may also be reading that file. This optimization allows the redirector
	to buffer such files. This optimization is safe because no process can write to
	the file. However, another user can modify the file to enable writing to the
	file, causing loss of data. Disable this parameter if it is necessary to
	preserve the strict semantics of the sharing modes specified.
	
	  Default: 1 (true)
	
	SERVER HEURISTICS
	-----------------
	
	The following LAN Manager server heuristics map to Windows NT Registry entries at
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ LanmanServer\Parameters:
	
	SRVHEURISTIC: 5
	EnableFCOpens
	
	Specifies whether MS-DOS file control blocks (FCBs) are folded together so that
	multiple remote opens are performed as a single open on the server. This saves
	resources on the server.
	
	  Range: Boolean
	  Default: 1 (True)
	
	SRVHEURISTIC: 6
	ThreadPriority
	
	Specifies the priority of all server threads in relation to the base priority of
	the process. Higher priority can give better server performance at the cost of
	local responsiveness. Lower priority balances server needs with the needs of
	other processes on the system.
	
	  Range: 5-50 secs (LAN Manager); 0-15 secs (Windows NT)
	  Default: 5 secs (LAN Manager); 5 secs (Windows NT)
	
	SRVHEURISTIC: 10
	ScavTimeout
	
	Specifies the time that the scavenger remains idle before waking up to service
	requests. A smaller value for this parameter improves the response of the server
	to various events, but costs CPU cycles.
	
	  Range: 5-50 secs (LAN Manager); 1-300 secs (Windows NT)
	  Default: 5 secs (LAN Manager); 30 secs (Windows NT)
	
	SRVHEURISTIC: 11
	EnableSoftCompat
	
	Specifies whether the server maps it to a normal open request with shared-read
	access when the server receives a compatibility open request with read access.
	Mapping such requests allows several MS-DOS computers to open a single file for
	read access.
	
	  Range: 0, 1, 2, 3(LAN Manager); 0 (False), 1 (True) (Windows NT)
	  Default: 2 (LAN Manager); 1 (Windows NT)
	
	SRVHEURISTIC: 15
	OplockBreakWait
	
	Specifies the time that the server waits for a client to respond to an oplock
	break request. Smaller values can allow detection of crashed clients more
	quickly, but can potentially cause loss of cached data.
	
	  Range: 35-640 secs (LAN Manager); 10-180 secs (Windows NT)
	  Default: 35 secs (LAN Manager); 35 secs (Windows NT)
	
	REFERENCES
	==========
	
	Documentation from MS LAN Manager Upgrade to Windows NT Advanced Server LAN
	Manager documentation
	
	Additional query words: prodnt wrkheuristic srvheuristic
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,4.0
	
	=============================================================================
	
