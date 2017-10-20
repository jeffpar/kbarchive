---
layout: page
title: "Q164486: Winlogon May Fail if the Third-Party Gina.dll File is Missing"
permalink: /kb/164/Q164486/
---

## Q164486: Winlogon May Fail if the Third-Party Gina.dll File is Missing

{% raw %}

	Article: Q164486
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Third party companies can replace the Gina.dll file that ships with Windows NT
	by editing the following registry key:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon
	Value = GinaDLL REG_SZ
	
	If the file referenced in the registry is missing or corrupted, Winlogon fails to
	start, and a blue-screen error message occurs.
	
	NOTE: Windows NT 3.51 loads Msgina.dll if the third-party Gina.dll file is not
	found.
	
	CAUSE
	=====
	
	Windows NT 4.0 is designed to not load if Gina.dll (or its replacement) is not
	present.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, replace the missing or corrupted Gina.dll with the
	version that ships with Windows NT.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	If Windows NT is installed on a FAT partition, copy the Software file that is
	located in the %SystemRoot%\System32\Config directory to a floppy disk and take
	it to another computer running Windows NT and follow these instructions:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the HKEY_LOCAL_MACHINE window.
	
	3. Select the HKEY_LOCAL_MACHINE key entry.
	
	4. From the Registry menu, click Load Hive.
	
	5. Browse and select the failed Windows NT installation path, for example,
	  Winnt.
	
	6. Go to the System32\Config directory, and select the Software file.
	
	  NOTE: Software file with no extension is the correct one.
	
	7. Click OK, and type a key name of test.
	
	8. Double-click the new test key and follow this path:
	
	  Microsoft\Windows NT\Current Version\Winlogon
	
	9. Modify the entry Ginadll:REG_SZ:MSGINA.DLL
	
	10. From the registry menu, click Unload Hive.
	
	11. Restart into the original Windows NT installation.
	
	MORE INFORMATION
	================
	
	Microsoft recommends that third-party companies use FAT volumes to test their
	versions of Gina.dll. This facilitates the replacement of the new Gina.dll
	file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
