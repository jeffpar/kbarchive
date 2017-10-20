---
layout: page
title: "Q271818: Configuring Windows 2000 Indexing Service to Use the Neutral Wor"
permalink: /kb/271/Q271818/
---

## Q271818: Configuring Windows 2000 Indexing Service to Use the Neutral Wor

{% raw %}

	Article: Q271818
	Product(s): Internet Information Server
	Version(s): ; WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Indexing Service 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Some searches against Indexing Service may fail when you use a language-specific
	word breaker; however, you can use the Neutral word breaker to work around this
	issue. This "More Information" section of this article explains how to remove
	the language-specific word breaker so that the Neutral word breaker is used.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To remove all word breakers except for the Neutral word breaker, perform the
	following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\ContentIndex\Language
	
	3. Delete all registry keys except Neutral.
	
	4. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\ContentIndex
	
	5. Select the DLLsToRegister registry key and save it to a backup file.
	
	6. Double-click the DLLsToRegister value and remove the line with the
	  Infosoft.dll file to prevent re-registering the other languages. Click OK.
	
	7. Quit Registry Editor.
	
	8. Stop, and then restart Indexing Service.
	
	9. Rebuild the catalog by doing a full build.
	
	Please note the following differences that occcur when use only the Neutral word
	breaker:
	
	- In all languages, "advanced" normalization acts differently:
	
	   - Dates: 9/9/99 and 9-9-1999 do not match.
	
	   - Numbers: 1,000 and 1000 do not match.
	
	   - Hyphens: database and data-base do not match.
	
	- In German, compound decomposition does not work.
	
	- In other European languages, clitic stripping is lost, which may reduce the
	  chances of matching.
	
	- Word stemming no longer works. Word stemming is when a query on "flew**"
	  returns documents matching flew, fly, flown, and so on.
	
	For additional information on similar issues with Index Server 2.0, which is
	included in Windows NT Option Pack, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q246701 Configuring Index Server to Use the Neutral Word Breaker
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbIdxServSearch kbAudDeveloper kbWinAdvServSearch kbIdxServ100
	Version           : :; WINDOWS:2000
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
