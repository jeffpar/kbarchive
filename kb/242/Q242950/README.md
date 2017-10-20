---
layout: page
title: "Q242950: Registry Settings Are Not Migrated During Upgrade"
permalink: /kb/242/Q242950/
---

## Q242950: Registry Settings Are Not Migrated During Upgrade

{% raw %}

	Article: Q242950
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; Win2000:95
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFA
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use migration dynamic link library (.dll) files and custom Migrate.inf
	files to upgrade your Windows 98/95-based computer to Windows 2000, some
	registry entries may not be migrated to the Windows 2000 registry.
	
	CAUSE
	=====
	
	This issue can occur if the registry settings in the [HANDLED] section of the
	Migrate.inf file have an identifier type of "Registry".
	
	RESOLUTION
	==========
	
	To resolve this issue, edit the appropriate Migrate.inf file and set the
	appropriate registry entry identifier types to "Report".
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Windows 2000 Migration DLLs use the [HANDLED] section of a Migrate.inf file to
	specify files and registry entries that the migration .dll file will migrate
	during Windows 2000 Setup. When registry entries are placed in the [HANDLED]
	section of the Migrate.inf file, the associated key and all sub-keys are removed
	from the registry after the upgrade to Windows 2000 finishes.
	
	The [HANDLED] section of the Migrate.inf file behaves differently when working
	with registry entries and files. When a file is specified, Setup does not move
	that file or generate any incompatibility error messages. The file is not
	deleted. However, any registry entries specified in the [HANDLED] section of the
	Migrate.inf file whose identifier type is set to "Registry" are not copied to
	the Windows 2000 registry.
	
	For example, view the following [HANDLED] section of a Migrate.inf file:
	
	[HANDLED]
	"HKEY_LOCAL_MACHINE\Software\MyCompany\Win95Specific"=Registry
	"HKEY_LOCAL_MACHINE\Software\MyCompany\Common"=Report
	
	In this example, the Win95Specific registry key will not be migrated to the new
	Windows 2000 registry because the identifier type is "Registry". However, the
	Common registry key is copied into the new registry because the identifier type
	is "Report".
	
	For additional information about migration .dll files, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q200001 HOWTO: Test and Debug a Windows 2000 Migration DLL
	
	For more information about migration .dll files, see the following topics in the
	MSDN Library:
	
	- Platform SDK
	
	- Management Services
	
	- Setup
	
	- Migration-Extension Interface
	
	  http://msdn.microsoft.com/library
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDSupport kbGrpDSTools kbMigrationDLLFAQ 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWinAdvServSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:2000; Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
