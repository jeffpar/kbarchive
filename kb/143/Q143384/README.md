---
layout: page
title: "Q143384: XCLN: PST Compaction Settings in the MSPST.INI"
permalink: /kb/143/Q143384/
---

## Q143384: XCLN: PST Compaction Settings in the MSPST.INI

{% raw %}

	Article: Q143384
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists and explains the entries for the [NDB] section of the
	Microsoft Exchange Windows client initialization file, MSPST.INI.
	
	NOTE: The MSPST.INI file must be in the root of the Microsoft Windows
	installation, by default C:\WINDOWS.
	
	MORE INFORMATION
	================
	
	[NDB]
	
	CompactDelay=<number of seconds>
	--------------------------------
	
	This sets the minimum amount of delay in seconds before it starts compaction.
	
	The default is value 300 seconds, which equals 5 minutes.
	
	CompactDisable=<0/1>
	--------------------
	
	Set this value to 1 to disable idle time compaction.
	
	The default value is 0 (idle time compaction enabled).
	
	CompactInterval=<number of centiseconds>
	----------------------------------------
	
	Sets the number of seconds of system inactivity before compaction is started.
	
	The default is 100 centiseconds, which equals 1 second.
	
	CompactQuantum=<number of centiseconds>
	---------------------------------------
	
	Sets the idle time for Quantum compaction.
	
	The default is 20 centiseconds, which equals .2 seconds.
	
	CompactStopPct=<number>
	-----------------------
	
	The background compaction will stop when the amount of recoverable space falls
	below this percentage of the total PST.
	
	The default is 4%.
	
	CompactStopFree=<number of kilobytes>
	-------------------------------------
	
	The background compaction will stop when there is less than this much recoverable
	space in your PST.
	
	The default is 16.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
