---
layout: page
title: "Q189587: XFOR: How the Internet Mail Service Handles Low Disk Space"
permalink: /kb/189/Q189587/
---

## Q189587: XFOR: How the Internet Mail Service Handles Low Disk Space

	Article: Q189587
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The Internet Mail Service (Internet Mail Connector in version 4.0) periodically
	(every 15 seconds) checks the amount of free disk space available on the drive
	that holds the spool directories. If free disk space drops below the configured
	threshold value (default = 10 MB), the Internet Mail Service goes into the Flush
	Mode until the free space rises above the threshold value.
	
	This article discusses the Flush Mode and some registry values that can be
	modified to adjust the threshold value.
	
	MORE INFORMATION
	================
	
	The Flush Mode prevents acceptance of new messages both from the Internet and
	the MTS-OUT queue. This does not affect the SMTP service or the content
	conversion algorithms. When the default threshold is met, the following events
	are logged in the application event log:
	
	  SymbolicName=MSG_ENTERING_FLUSH_MODE
	  EventType = Warning
	  Category = Message Transfer
	  LogLevel = 0
	  The available disk space on the spool drive has dropped below %1
	  kilobytes.
	  The Internet Mail Connector will not accept messages for inbound and
	  outbound conversion. Inbound and outbound message conversion will
	  continue when the available disk space has increased above %1 kilobytes.
	
	When the available disk space rises above the threshold, Flush Mode is turned off
	and the following event log message is logged:
	
	  SymbolicName=MSG_LEAVING_FLUSH_MODE
	  EventType = Warning
	  Category = Message Transfer
	  LogLevel = 0
	  The available disk space on the spool drive has increased above %1
	  kilobytes. The Internet Mail Connector is once again accepting messages
	  for inbound and outbound conversion.
	
	The threshold value can be reconfigured by adding the following registry value,
	using the procedure below:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC
	  \Parameters\DiskSpaceLowWaterMark  (DWORD).
	
	Default Value: 0x00A00000 (10 meg in hex). When entering a new value, it should
	be done in Number of Bytes.
	
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
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC
	     \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	  (Example: 20 megs 20 x 1,024,000 bytes = 20,480,000)
	
	     Value Name: DiskSpaceLowWaterMark
	     Data Type:  REG_DWORD
	     Value:      20480000
	
	4. Quit Registry Editor.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
