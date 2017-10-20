---
layout: page
title: "Q102889: Mapping .INI File Entries to the Registry"
permalink: /kb/102/Q102889/
---

## Q102889: Mapping .INI File Entries to the Registry

{% raw %}

	Article: Q102889
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 24-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 
	- the operating system: Microsoft Windows 2000 
	- the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	Under Microsoft Windows NT, Windows 2000, and Windows XP, .INI file variables are mapped into the Registry as defined in the
	
	  \HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\IniFileMapping
	
	mapping key. The Win32 Profile application programming interface (API)
	functions look for a mapping by looking up the filename extension portion
	of the profile file. If a match is found, then the search continues under
	that node for the specified application name. If a match is found, then the
	search continues for the variable name. If the variable name is not found,
	the value of the (NULL) variable name is a string that points to a node in
	the Registry, whose value keys are the variable names. If a specific
	mapping is found for the variable name, then its value points to the
	Registry value that contains the variable value.
	
	The Profile API calls go to the Windows server to look for an actual .INI
	file, and read and write its contents, only if no mapping for either the
	application name or filename is found. If there is a mapping for the
	filename but not the application name, and there is a (NULL) application
	name, the value of the (NULL) variable will be used as the location in the
	Registry of the variable, after appending the application name to it.
	
	In the string that points to a Registry node, there are several
	prefixes that change the behavior of the .INI file mapping:
	
	  ! - This character forces all writes to go both to the Registry and
	      to the .INI file on disk.
	
	  # - This character causes the Registry value to be set to the value
	      in the Windows 3.1 .INI file when a new user logs in for the
	      first time after setup.
	
	  @ - This character prevents any reads from going to the .INI file
	      on disk if the requested data is not found in the Registry.
	
	  USR: - This prefix stands for HKEY_CURRENT_USER, and the text after
	         the prefix is relative to that key.
	
	  SYS: - This prefix stands for HKEY_LOCAL_MACHINE\Software, and the
	         text after the prefix is relative to that key.
	
	Additional query words: prodnt inifilemapping
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbOSWin2000 kbOSWinSearch kbOSWinXP kbOSWinNTSearch kbOSWinXPSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
