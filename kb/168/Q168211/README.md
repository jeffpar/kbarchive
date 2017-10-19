---
layout: page
title: "Q168211: XFOR: How To Modify CC:Mail Connector Polling Frequency"
permalink: /kb/168/Q168211/
---

## Q168211: XFOR: How To Modify CC:Mail Connector Polling Frequency

	Article: Q168211
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article discusses the registry entries for modifying the polling
	frequencies of the Microsoft Exchange Connector for Lotus cc:Mail.
	
	CAUTION: The default settings have been set to give the cc:Mail Connector optimal
	performance. Please do not change these settings unless absolutely necessary.
	Modifying these settings could adversely affect the performance of the
	connector.
	
	MORE INFORMATION
	================
	
	Several registry values control when and how the cc:Mail connector service
	activates and the amount of processing it performs.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Registry entries that control the connector are found in the following registry
	location:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeCCMC\ 
	  Parameters
	
	The entry for the polling interval at which the Export.exe program runs is:
	
	  Second to wait before EXPORT
	
	and the default is 15 seconds.
	
	The entry for the polling interval at which the Import.exe program runs is:
	
	  Second to wait before IMPORT
	
	and the default is 15 seconds.
	
	The entry for the number of messages to request from cc:mail Export for each
	activation is:
	
	  Maximum number of messages to EXPORT
	
	and the default is 16.
	
	The entry for the number of messages to Import to cc:mail on each Import
	activation is:
	
	  Maximum number of messages to IMPORT
	
	and the default is 5.
	
	By default, the Connector service checks the Import directory and the cc:mail
	post office every 15 seconds, in accordance with the settings in the first two
	registry entries above (Second to wait before EXPORT and Second to wait before
	IMPORT). If there are messages awaiting delivery, the connector service requests
	16 or 5 messages to be delivered, in accordance with the second set of registry
	entries (Maximum number of messages to EXPORT and Maximum number of messages to
	IMPORT).
	
	If the maximum number of messages processed during the Import or Export session
	is equal to the registry value, the server immediately processes another
	session. By immediately processing again when the maximum number of messages are
	present, the connector can continually move messages when there is a backlog. If
	the number of messages is less than the default value, no additional processing
	occurs until the time interval expires.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
