---
layout: page
title: "Q242958: BETA-HOWTO: Forcing Display of Migration DLL's Incompatible Mess"
permalink: /kb/242/Q242958/
---

## Q242958: BETA-HOWTO: Forcing Display of Migration DLL's Incompatible Mess

{% raw %}

	Article: Q242958
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDS
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Windows 2000 Migration DLL displays messages in a user's Upgrade Report by
	writing to an [INCOMPATIBLE MESSAGES] section of its Migrate.inf file. However,
	these messages can be removed from the Upgrade Report by similar entries in the
	[HANDLED] section. This article describes how to force an incompatible message
	to display despite the conflict with the [HANDLED] section.
	
	MORE INFORMATION
	================
	
	Typically, if you place a file, directory, or registry entry in the [HANDLED]
	section, Windows 2000 Setup assumes that you are going to fix any problems
	associated with that object. It uses this logic to ignore any entries in the
	[INCOMPATIBLE MESSAGES] section that are dependent on the same objects.
	
	In some cases, the object being [HANDLED] also needs a message to be displayed in
	the Upgrade Report. For example, if your application did not have an equivalent
	Windows 2000 version, the Migration DLL may decide to remove the application
	completely. In this case, all directories and registry entries for the
	application should be placed in the [HANDLED] section, but you also want to warn
	the user that the application will be removed during the upgrade.
	
	The solution involves modifying the condition that triggers the incompatible
	message in the [<Message Object Section>] of the Migrate.inf file. The
	three documented identifier types are "File," "Registry," and "Directory." A
	fourth option is to use the Migration DLL's ProductId as the Message Object and
	set it to "ProductId" as the Identifier Type. This will create a message that
	will always be displayed. This allows you to "handle" all files and registry
	entries associated with your product without suppressing the message in the
	Upgrade Report.
	
	REFERENCES
	==========
	
	For more information on Migration DLLs, see following in the MSDN Library:
	
	  Platform SDK; Management Services; Setup; Migration-Extension Interface
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDSupport kbGrpDSTools kbMigrationDLLFAQ 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWinAdvServSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
