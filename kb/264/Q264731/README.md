---
layout: page
title: "Q264731: XADM: MAPI Tasks Don't Work with Virus API Anti-Virus Software"
permalink: kb/264/Q264731/
---

## Q264731: XADM: MAPI Tasks Don't Work with Virus API Anti-Virus Software

	Article: Q264731
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kberrmsg exc55sp3
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP3, 5.5 SP4 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to perform Messaging Application Programming Interface (MAPI)
	operations on an Exchange Server computer that is running an anti-virus software
	that is based on anti-virus application programming interface (API), you may
	receive a MAPI time-out error message.
	
	These MAPI operations include the following:
	
	- Performance of an offline folder synchronization (.ost synchronization).
	
	  When an .ost synchronization does not work, if you view the .ost
	  synchronization log it includes the following error message:
	
	  
	
	  12:51:31 Error synchronizing folder
	  12:51:31 [80004005-501-0-550]
	  12:51:31 The client operation failed.
	  12:51:31 Microsoft Exchange Server Information Store
	
	In addition, in Microsoft Outlook 2002, the following error message is displayed
	during the synchronization:
	
	  The Microsoft Exchange server reported error 0x00040820
	
	- Performance of a Move Mailbox operation.
	
	- Use of the Microsoft Exchange Mailbox Merge program (Exmerge).
	
	- Export to a personal folder file (.pst file).
	
	When you move messages from a mailbox to a .pst file, you may receive the
	following error message:
	
	  Some items could not be copied. They were either moved or deleted, or access
	  was denied.
	
	CAUSE
	=====
	
	This issue can occur if these MAPI operations gain access to a large number of
	attachments that have not been scanned by using the current virus signatures.
	The MAPI operations do not determine that the attachments are waiting to be
	scanned; therefore a time-out error message is displayed if the scans are not
	completed to make the attachments available to the MAPI request in a sufficient
	amount of time.
	
	NOTE: Any Microsoft Outlook user or any third-party package (for example a backup
	package) that needs to access messages or attachments may encounter this problem
	if the anti-virus software package uses VAPI 1.0.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, make sure that the BackgroundScanning value is enabled
	and increase the OpenRetryDelay value from the default setting.
	
	NOTE: These procedures reduce, but may not eliminate, the number of error
	messages that are displayed during MAPI operations.
	
	To enable the BackgroundScanning value, you need to edit the registry:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the BackgroundScanning value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\VirusScan
	
	3. If the value is set to 0, change the value to 1; double-click the entry and
	  change the value to 1 Binary.
	
	4. Quit Registry Editor.
	
	The BackgroundScanning process begins one minute after you change this key.
	
	After you enable the BackgroundScanning value, Microsoft recommends that you
	allow approximately one hour to pass for each gigabyte (GB) of attachments that
	is stored in your private information store before you perform a MAPI operation,
	to ensure that all attachments have been scanned. After that amount of time,
	MAPI error messages are greatly reduced or may be eliminated.
	
	To increase the OpenRetryDelay value:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the OpenRetryDelay value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\VirusScan
	
	3. On the Edit menu, click DWORD, type "5000" (without the quotation marks), and
	  then click OK (This is a decimal entry).
	
	4. Quit Registry Editor.
	
	If the OpenRetryDelay value does not exist, create it:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\VirusScan
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: OpenRetryDelay
	  Data Type: REG_DWORD
	  Radix: Decimal
	  Value: 5000
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	Attachments are scanned when they are sent or received by the Exchange Server
	computer if the anti-virus API is enabled. However, those attachments that are
	already present when you install the anti-virus software or update the virus
	signature file need to be rescanned when an operation gains access to those
	attachments, unless the BackgroundScanning process has scanned those
	attachments. This ensures that those attachments have been checked with the
	latest virus signature file. The BackgroundScanning process begins a full scan
	of all attachments in the information store when virus signatures change or the
	vendor of the virus software changes.
	
	The BackgroundScanning process is disabled by default on many types of
	third-party anti-virus software.
	
	In addition, the OpenRetryDelay value that the anti-virus software uses
	determines the time interval, in milliseconds, that the information store pauses
	before the information store attempts to reopen attachments that are being
	scanned when they are requested by the client. If the attachment is not scanned
	and made available to the MAPI request within this time interval, a time-out
	error message is displayed.
	
	By default, the information store uses a setting of 500 milliseconds (msec), or
	one-half of a second, unless otherwise specified in the registry.
	
	All attachments are rescanned after virus signatures are updated. Before an
	operation can gain access to these attachments, it is important that you plan a
	signature update to occur during off-peak hours. This allows time for the
	attachments to be scanned and made available to MAPI operations. Due to the way
	that some anti-virus vendors update their product, stop and restart the
	information store after a virus signature upgrade to re-initiate the background
	scanning task.
	
	
	Additional query words: VAPI 80004005-501-0-550 exch2kp2w ol2000 ol2k ol2002
	
	======================================================================
	Keywords          : kberrmsg exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	
