---
layout: page
title: "Q295649: XADM: You May Be Unable to Start the Information Store"
permalink: kb/295/Q295649/
---

## Q295649: XADM: You May Be Unable to Start the Information Store

	Article: Q295649
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you run Performance Optimizer in Verbose mode, the information store may
	not start. Also, the following 5000, 1120, and 188 events may be logged in the
	Application log in Event Viewer:
	
	  Event ID: 1120
	  Source: MSExchangeIS
	  Description:
	  Error 0xfffffad0 initializing the MS Exchange information store database.
	
	  Event ID: 5000
	  Source: MSExchangeIS
	  Description:
	  Unable to initialize the MS Exchange information store service. Error
	  0xfffffad0.
	
	  Event ID: 188
	  Source: Ese97
	  Description:
	  MSExchangeIS (359) System parameter stop clean flush threshold (5700) is less
	  than start clean flush threshold (9500).
	
	CAUSE
	=====
	
	This behavior can occur because the Buffer Threshold Low Percent value is
	missing from the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, you must add the missing DWORD value in the following
	registry location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	1. Start the registry editor (Regedit.exe).
	
	2. Open the following subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	3. Add the DWORD value: Buffer Threshold Low Percent.
	
	4. Add a hexadecimal value of 3.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
