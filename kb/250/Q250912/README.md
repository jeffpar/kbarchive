---
layout: page
title: "Q250912: &quot;C:&#92;Windows&#92;System&#92;Timedate.cpl&quot; Error Starting Date/Time Tool"
permalink: /kb/250/Q250912/
---

## Q250912: &quot;C:&#92;Windows&#92;System&#92;Timedate.cpl&quot; Error Starting Date/Time Tool

{% raw %}

	Article: Q250912
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95 win98 win98se
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to start the Date/Time tool in Control Panel, you may receive
	the following error message:
	
	  An error occurred while Windows was working with the Control Panel file
	  C:\WINDOWS\SYSTEM\TIMEDATE.CPL
	
	CAUSE
	=====
	
	This behavior occurs if the Time Zones registry key is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, reinstall Windows.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, create a registry script file to add an Eastern
	Standard Time value to the Time Zones key in the registry using the following
	steps:
	
	1. Open Notepad.
	
	2. Copy the following text and paste it into Notepad.
	
	REGEDIT4
	
	[HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Time Zones]
	@="Pacific Standard Time"
	
	[HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Time Zones\Eastern]
	"Display"="(GMT-05:00) Eastern Time (US & Canada)"
	"Dlt"="Eastern Daylight Time"
	"Std"="Eastern Standard Time"
	"MapID"="38,39"
	"TZI"=hex:2c,01,00,00,00,00,00,00,c4,ff,ff,ff,00,00,0a,00,00,00,05,00,02,00,00,\ 
	 00,00,00,00,00,00,00,04,00,00,00,01,00,02,00,00,00,00,00,00,00
	
	3. Save the file with a .reg extension.
	
	  NOTE: When you save the file, use the Save As option on the File menu. In the
	  "Save as type" box, click All Files.
	
	4. After you create the file, double-click the file to add the information into
	  the registry.
	
	Additional query words: corrupt corrupted
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 win98 win98se 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
