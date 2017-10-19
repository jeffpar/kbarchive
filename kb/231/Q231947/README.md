---
layout: page
title: "Q231947: How to Modify Network Monitor Capture Buffer Settings"
permalink: /kb/231/Q231947/
---

## Q231947: How to Modify Network Monitor Capture Buffer Settings

	Article: Q231947
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:3.11,95,98,98 Second Edition; winnt:3.1,3.5,3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server versions 4.0, 4.5 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	- Microsoft Cluster Server 
	- Microsoft Windows 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Microsoft Network Monitor to capture network traffic, the capture
	buffer size must be large enough to save the desired traffic.
	
	MORE INFORMATION
	================
	
	The capture buffer in Network Monitor is based on a first-in, first-out (FIFO)
	system, and its size is limited to 1 MB by default. Captured data is stored in
	RAM until you save the capture. If the data is larger than the allocated RAM,
	data is discarded using FIFO logic.
	
	You can adjust the capture buffer size to as high as 120 MB. However, increasing
	the capture buffer to a size larger than the available memory can cause the tool
	to swap data to the hard disk, which may result in lost or dropped frames.
	
	To increase the capture buffer size:
	
	1. Click Start, point to Programs, point to Network Analysis Tool, and then
	  click Network Monitor.
	
	2. On the Capture menu, click Buffer Settings.
	
	3. In the Buffer Size (in MB) box, type a value between 1-120, and then click
	  OK.
	
	Network Monitor allocates the necessary memory immediately. You can make the
	capture buffer larger than available memory, but the following warning message
	may be displayed:
	
	  The buffer size you have requested may cause frames to be dropped due to
	  swapping. Are you sure you want to allocate a buffer of this size?
	
	If you receive this warning message, you can decrease the capture buffer size to
	a value smaller than the available memory on your computer.
	
	If you experience problems capturing data and have increased the buffer to the
	maximum limit, you can decrease the frame size to allow for more frames:
	
	1. Click Start, point to Programs, point to Network Analysis Tool, and then
	  click Network Monitor.
	
	2. On the Capture menu, click Buffer Settings.
	
	3. In the Frame Size (in bytes) box, click a value from the available frame
	  sizes, and then click OK.
	
	NOTE: If your troubleshooting methodology requires detailed information from each
	frame, you cannot use this option. An example of when this method is feasible is
	if you are looking only at Transmission Control Protocol (TCP) header
	information to analyze TCP traffic. The entire frame is not needed for just the
	header information.
	
	Additional query words: netmon
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTW310 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbClustServSearch kbWin3xSearch kbWin95search kbWin98search kbWin98SEsearch kbWinNT310Search kbWinNTW310Search kbBackOfficeSearch kbSBServSearch kbZNotKeyword3 kbWin311 kbWin98 kbWin98SE kbBackOfficeServ400 kbBackOfficeServ450 kbSBServ400 kbSBServ400a kbSBServ450
	Version           : WINDOWS:3.11,95,98,98 Second Edition; winnt:3.1,3.5,3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0a,4.5
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
