---
layout: page
title: "Q163325: XCON: MTA: Text Event Log (Evo.log)"
permalink: /kb/163/Q163325/
---

## Q163325: XCON: MTA: Text Event Log (Evo.log)

{% raw %}

	Article: Q163325
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The Evo.log file is a non-localized, textual copy of the MSExchangeMTA events
	that are logged to the Windows NT Application Event Log. The categories and
	levels of events written are controlled as for the standard binary Application
	Event logs.
	
	MORE INFORMATION
	================
	
	Setting the Text Event Log registry value to 1 will generate Ev*.log files in
	the Exchsrvr\Mtadata directory. The current log is always named Evo.log. Prior
	logs are named Ev<number>.log with the number increasing with the age of
	the log. When a log reaches 5 MB in size it is renamed and a new log is begun.
	If, after the MTA is stopped, it is then restarted the current Evo.log file will
	be overwritten with a new zero-byte file. Any logged data will be lost unless
	the file was saved or renamed.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To edit the registry so that Text Event Logging is turned on:
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_ SYSTEM\CurrentControlSet\Services\MSExchangeMTA
	  \Parameters\
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: Text Event Log
	     Data Type: REG_DWORD
	     Value:      1
	
	4. Exit Registry Editor.
	
	Evo.log files are often easier to read, search, and clip from when
	troubleshooting Exchange Server message transfer agent (MTA) issues than the
	corresponding Application Event Log. Evo.log files do use more technical
	vocabulary, though, than the Application Event Log.
	
	
	Additional query words: whitepaper
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
