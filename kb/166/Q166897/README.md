---
layout: page
title: "Q166897: Windows NT 3.51 Regedt32 Fails to Load a Hive from WinNT 4.0"
permalink: /kb/166/Q166897/
---

## Q166897: Windows NT 3.51 Regedt32 Fails to Load a Hive from WinNT 4.0

{% raw %}

	Article: Q166897
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you use Registry Editor to load a registry hive from a later version of
	Microsoft Windows NT than you are currently using, the following error message
	may appear:
	
	  Registry Editor could not load the key
	
	CAUSE
	=====
	
	The registry format supported by the older Registry Editor may not be compatible
	with registry files from newer releases of Windows NT. As a result, registry
	files from newer releases of the operating system may not be edited with older
	versions.
	
	However, newer versions of Windows NT and Registry Editor are compatible with
	older versions of Windows NT registry files.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. While logged on as an administrator, copy the registry file to a floppy
	  disk.
	
	  Note: This will only work if the file is small enough to fit on the floppy
	  disk.
	
	  For Example, COPY %Winnt%\System32\Config\System to a floppy disk.
	
	2. Take the floppy disk to another computer running the same or higher version
	  of Windows NT.
	
	3. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE/
	
	4. Click Load Hive from the Registry menu.
	
	5. Type a temporary name for the hive you are loading.
	
	6. Make the necessary changes to the registry hive.
	
	7. Select the temporary name of the registry hive and click Unload Hive from the
	  Registry menu.
	
	8. Rename the existing registry file on the source system to a different name.
	
	9. Copy the edited version of the registry file to the source system's original
	  directory and filename.
	
	For additional information, please consult the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q165748
	  TITLE : How to Disable a Service or Device that Prevents NT from Booting
	
	Additional query words: nt registry
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
