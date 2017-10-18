---
layout: page
title: "Q282502: Encarta 2001: How to Manually Uninstall Encarta 2001"
permalink: kb/282/Q282502/
---

## Q282502: Encarta 2001: How to Manually Uninstall Encarta 2001

	Article: Q282502
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	- Microsoft Encarta Reference Suite 2001 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to manually uninstall Microsoft Encarta 2001 from
	your computer.
	
	MORE INFORMATION
	================
	
	When you attempt to uninstall Encarta 2001 by using the Add/Remove Programs tool
	in Control Panel, Encarta 2001 may not be completely uninstalled.
	
	If Encarta 2001 is not completely uninstalled, use the following methods to
	manually delete all of the Encarta folders and registry entries.
	
	NOTE: The Encarta Language Learning programs use many of the same folders and
	registry entries as Encarta 2001. Therefore, after you complete the methods in
	this article, you may need to reinstall the Encarta Language Learning programs.
	
	Delete the Encarta Folders
	--------------------------
	
	Delete the following Encarta folders:
	
	- C:\Program Files\Common Files\Microsoft Shared\Information Retrieval
	
	- C:\Program Files\Common Files\Microsoft Shared\Reference 2001
	
	- C:\Program Files\Common Files\Microsoft Shared\Reference Titles
	
	- C:\Program Files\Microsoft Encarta
	
	- C:\Windows\Start Menu\Programs\Microsoft Encarta
	
	- All of the Encarta folders that are contained in the following folder:
	
	  C:\WINDOWS\Application Data\Microsoft
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Delete the Encarta Registry Entries:
	
	Delete the following Encarta registry entries:
	
	- HKEY_CURRENT_USER\Software\Microsoft\Microsoft Reference
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Microsoft Reference
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ReferenceTitles
	
	- HKEY_USERS\.DEFAULT\Software\Microsoft\Microsoft Reference
	
	Additional query words: multi multi-media media mm encarta ers ee reinstall remove
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaReference2001
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
