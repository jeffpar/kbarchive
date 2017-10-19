---
layout: page
title: "Q129202: PC Ext: Explanation of Opportunistic Locking on Windows NT"
permalink: /kb/129/Q129202/
---

## Q129202: PC Ext: Explanation of Opportunistic Locking on Windows NT

	Article: Q129202
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.0,3.2,3.2a,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbusage kbOSWinNT kbOSWin2000
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Exclusive Oplock, if a file is opened in a non-exclusive (deny none) mode,
	the redirector requests an opportunistic lock of the entire file. As long as no
	other process has the file open, the server will grant this oplock, giving the
	redirector exclusive access to the specified file. This will allow the
	redirector to perform read-ahead, write-behind, and lock caching, as long as no
	other process tries to open the file.
	
	When a second process attempts to open the file, the original owner will be asked
	to Break Oplock or Break to Level II Oplock. At that point, the redirector must
	invalidate cached data, flush writes and locks, and release the oplock, or close
	the file.
	
	Opportunistic Locking level II, provides a method for granting read access to a
	file by more than one workstation, and these workstations can cache read data
	locally (read-ahead). As long as no station writes to the file, multiple
	stations can have the file open with level II oplock.
	
	MORE INFORMATION
	================
	
	An illustration of how level II oplocks work:
	
	1. Station 1 opens the file, requesting oplock.
	
	2. Since no other station has the file open, the server grants station 1
	  exclusive oplock.
	
	3. Station 2 opens the file, requesting oplock.
	
	4. Since station 1 has not yet written to the file, the server asks station 1 to
	  Break to Level II Oplock.
	
	5. Station 1 complies by flushing locally buffered lock information to the
	  server.
	
	6. Station 1 informs the server that it has Broken to Level II Oplock
	  (alternatively, station 1 could have closed the file).
	
	7. The server responds to station 2's open request, granting it level II oplock.
	  Other stations can likewise open the file and obtain level II oplock.
	
	8. Station 2 (or any station that has the file open) sends a write request SMB.
	  The server returns the write response.
	
	9. The server asks all stations that have the file open to Break to None,
	  meaning no station holds any oplock on the file. Because the workstations can
	  have no cached writes or locks at this point, they need not respond to the
	  break-to-none advisory; all they need do is invalidate locally cashed
	  read-ahead data.
	
	The following registry entries are used to enable or disable oplocks for Windows
	NT Workstation or Server. These registry keys may not exist by default. To
	access the registry run REGEDT32.EXE from the File menu, choose Run in Program
	Manager or File Manager.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Workstation Service Entries
	---------------------------
	
	\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	  \Services\LanmanWorkstation\Parameters
	
	UseOpportunisticLocking   REG_DWORD   0 or 1
	Default: 1 (true)
	
	Indicates whether the redirector should use opportunistic-locking (oplock)
	performance enhancement. This parameter should be disabled only to isolate
	problems.
	
	Server Service Entries
	----------------------
	
	\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	  \Services\LanmanServer\Parameters
	
	EnableOplocks   REG_DWORD   0 or 1
	Default: 1 (true)
	
	Specifies whether the server allows clients to use oplocks on files. Oplocks are
	a significant performance enhancement, but have the potential to cause lost
	cached data on some networks, particularly wide-area networks.
	
	MinLinkThroughput   REG_DWORD   0 to infinite bytes per second
	Default: 0
	
	Specifies the minimum link throughput allowed by the server before it disables
	raw and opportunistic locks for this connection.
	
	MaxLinkDelay   REG_DWORD   0 to 100,000 seconds
	Default: 60
	
	Specifies the maximum time allowed for a link delay. If delays exceed this
	number, the server disables raw I/O and opportunistic locking for this
	connection.
	
	OplockBreakWait   REG_DWORD   10 to 180 seconds
	Default: 35
	
	Specifies the time that the server waits for a client to respond to an oplock
	break request. Smaller values can allow detection of crashed clients more
	quickly but can potentially cause loss of cached data.
	
	
	Additional query words: 3.00 3.20 3.20a
	
	======================================================================
	Keywords          : kbusage kbOSWinNT kbOSWin2000 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : :3.0,3.2,3.2a,3.5,3.51,4.0
	
	=============================================================================
	
