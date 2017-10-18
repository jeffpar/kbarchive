---
layout: page
title: "Q246701: Configuring Index Server to Use the Neutral Word Breaker"
permalink: kb/246/Q246701/
---

## Q246701: Configuring Index Server to Use the Neutral Word Breaker

	Article: Q246701
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some searches against Microsoft Index Server may fail when using a language
	specific word breaker. he Neutral word breaker can be used as a workaround. This
	article explains removing the language specific word breaker ensuring that the
	Neutral word breaker is used.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following is an example on how to remove all word breakers except for the
	Neutral word breaker
	
	1. Run Regedt32.exe.
	
	2. Select:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\ContentIndex\Language
	
	3. Select the Language key and Save it to a backup file.
	
	4. Double-click on the InstalledLangs value and remove all lines except for the
	  one showing "Neutral". Click OK.
	
	5. Delete all keys except Neutral below Language.
	
	6. Stop and then restart the index service.
	
	7. Rebuild the catalog by doing a full build.
	
	There are some differences that should be noted when using only the Neutral word
	breaker:
	
	- In all languages, "advanced" normalization acts differently:
	
	   - Dates: 9/9/99 and 9-9-1999 will not match
	
	   - Numbers: 1,000 and 1000 will not match
	
	   - Hyphens: database and data-base will not match
	
	- In German compound decomposition will not work.
	
	- In other European languages lose clitic stripping is lost, which may reduce
	  the chances of matching.
	
	- Word stemming will no longer work. Word stemming is where a query on "flew**"
	  returns documents matching flew, fly, flown, and so forth.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
