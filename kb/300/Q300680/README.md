---
layout: page
title: "Q300680: INFO: Loading Multilingual Resource on Windows 2000"
permalink: kb/300/Q300680/
---

## Q300680: INFO: Loading Multilingual Resource on Windows 2000

	Article: Q300680
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbNLS kbResource kbSDKPlatform kbLocalization kbGrpDSIntl kbgrpdsvc
	Last Modified: 27-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When developing globalized software on previous versions of an operating system,
	developers used to depend on the operating system to load the preferred resource
	copy from the multi-lingual resource file. Due to a design change in Microsoft
	Windows 2000, the preceding approach may behave differently on a Windows 2000
	computer. There is a new parameter, User Interface Language (UILanguage), which
	may also affect the resource loading.
	
	MORE INFORMATION
	================
	
	On a Microsoft Windows NT 4.0-based computer and Microsoft Windows 95, or a
	Microsoft Windows 98-based computer, without changing the thread locale, the
	resource copy that matches the user locale in regional settings is likely to be
	loaded from the multilingual resource file. Resource loading works differently
	on Windows 2000, where the one that matches the user default UILanguage is
	loaded. On a non-Multilingual user interface (MUI) version of Windows 2000, the
	user default UILanguage is the language of the installed operating system. The
	following scenario describes the difference. Assume the multilingual resource
	file includes both English (United States) and French (France) resources, on an
	English Windows NT 4.0 computer with regional settings set to French (France),
	and the French resource is loaded. On a Windows 2000-based computer, the English
	resource is loaded when the settings are set to French (France), because the
	English resource matches the user default UILanguage. Although changing the
	thread locale can change the resource loading, it will not be the same behavior
	as that of Windows NT 4.0.
	
	The standard solution is to build a resource-only DLL for each different
	language, and load the preferred DLL when necessary.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q169483 INFO: Resource Language Loading Order
	
	You may also want to refer to:
	
	  http://www.microsoft.com/globaldev/articles/muiapp.asp
	  (http://www.microsoft.com/globaldev/articles/muiapp.asp)
	
	  -and-
	
	  www.microsoft.com/globaldev (www.microsoft.com/globaldev)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbNLS kbResource kbSDKPlatform kbLocalization kbGrpDSIntl kbgrpdsvc 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000
	Issue type        : kbinfo
	
	=============================================================================
	
