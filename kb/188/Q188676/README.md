---
layout: page
title: "Q188676: XADM: Log Stalls/sec Are Regularly Greater Than 0 (Zero)"
permalink: /kb/188/Q188676/
---

## Q188676: XADM: Log Stalls/sec Are Regularly Greater Than 0 (Zero)

	Article: Q188676
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	MORE INFORMATION
	================
	
	Exchange often sets this value too low for large computers (less than 80). It is
	recommended that a significantly larger number like 256 or 512 be used.
	
	Log stalls can have a significant impact on performance. Each log stall results
	in a call Sleep ( 1 ). This continues to be called until the log operation does
	not return the stall error.
	
	SYMPTOMS
	========
	
	When monitoring the Performance Monitor counter "Database - Log Record
	Stalls/sec", you may notice that the value is regularly greater than zero on
	large computers that are under heavy load.
	
	Performance Monitor describes this counter as: "Log Record Stalls/sec is the
	number of log records that cannot be added to the log buffers per second because
	they are full. If this counter is non- zero most of the time, the log buffer
	size may be a bottleneck."
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	You can reduce Log Record Stalls/sec by increasing the number of log buffers
	available to Microsoft Exchange. To do this, you must add the following registry
	parameter:
	
	  " HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \MSExchangeIS\ParametersSystem " (without the quotation marks)
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	   HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	   \MSExchangeIS\ParametersSystem
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  " Value Name: Log Buffers
	  Data Type: REG_DWORD
	  Value: > 80 decimal (see MORE INFORMATION below) " (without the quotation
	  marks)
	
	4. Quit Registry Editor.
	
	Each buffer holds one log sector. Each log sector is equal to the sector size of
	your log disk (almost always 512 bytes).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
