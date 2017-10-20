---
layout: page
title: "Q178202: Fix for Loss of Data Records or Partial Records Written to Disk"
permalink: /kb/178/Q178202/
---

## Q178202: Fix for Loss of Data Records or Partial Records Written to Disk

{% raw %}

	Article: Q178202
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Internet Information Server 3.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) 3.0 logging supports periodic flushing of log
	file data to disk. By default this interval is five minutes, however you can
	modify this setting by changing the following registry entry:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\InetInfo
	\Parameters\LogFileFlushInterval
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	In certain circumstances, data may be lost if the buffer is prematurely flushed.
	Overall, this leads to a loss of data records or partial records written to
	disk.
	
	CAUSE
	=====
	
	This problem occurs if the lock that protects file data in the periodic flush
	path is not acquired. This problem happens specifically in the case where the
	log flush size registry value is set to a large buffer size (for example, 32MB
	instead of the default 64k).
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\InetInfo
	\Parameters\LogFileBatchSize
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	RESOLUTION
	==========
	
	The fix is to acquire the file-data lock and hence protect against premature
	flushes or loss of log data.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	This problem does not occur in Internet Information Server version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 3.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	Additional query words: 4.00 3.00
	======================================================================
	Keywords          : kbinterop kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis300
	Version           : WinNT:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
