---
layout: page
title: "Q240314: INFO: Concurrent I/O Requests Number Setting Restrictions"
permalink: /kb/240/Q240314/
---

## Q240314: INFO: Concurrent I/O Requests Number Setting Restrictions

	Article: Q240314
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbDDK kbOSWinNT400 kbStorageDev kbDSupport kbGrpDSNTDDK kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT 4.0 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The registry subkey to specify the maximum number of outstanding requests on a
	bus is:
	
	HKEY_LOCAL_MACHINE\ 
	 System\ 
	   CurrentControlSet\ 
	     Services\ 
	       DriverName\ 
	         Parameters\ 
	           DeviceX\ 
	             NumberOfRequests
	
	DriverName is the name of the miniport driver, such as AIC78xx, and X (from
	DeviceX) is the bus number assigned at initialization. This subkey is a
	REG_DWORD between 16 and 255. Use this adjustment sparingly because the
	per-request storage allocations consume nonpaged memory.
	
	The Windows NT 4 Device Driver Kit (DDK) documentation stated that the number of
	outstanding requests (NumberOfRequests) could be between 16 and 512. However,
	for optimum performance, the setting should be between 16 and 255. Values above
	255 will consume additional nonpaged memory and will not produce more concurrent
	requests than the 255 registry setting.
	
	The Windows NT 4 Scsiport.sys driver uses a byte tag value to identify I/O
	requests sent to each SCSI miniport. Because the tag value is limited to a byte,
	the number of concurrent requests is also limited to a byte value.
	
	Additional query words: SCSI miniport
	
	======================================================================
	Keywords          : kbhw kbDDK kbOSWinNT400 kbStorageDev kbDSupport kbGrpDSNTDDK kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbWinDDKSearch kbWinNT400DDK
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
