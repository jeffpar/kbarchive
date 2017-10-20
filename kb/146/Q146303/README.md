---
layout: page
title: "Q146303: How to Manipulate Unloaded Registry Hives Using RegFind"
permalink: /kb/146/Q146303/
---

## Q146303: How to Manipulate Unloaded Registry Hives Using RegFind

{% raw %}

	Article: Q146303
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT 4.0 Resource Kit RegFind utility lets you search and replace data
	values in the registry. This article complements the information provided in the
	resource kit and explains how to use this tool to manipulate unloaded registry
	hives.
	
	MORE INFORMATION
	================
	
	The syntax of the RegFind utility is:
	
	  REGFIND [-h hivefile hiveroot | -w Win95 Directory | -m \\machinename]
	     [-i n] [-o outputWidth]
	     [-p RegistryKeyPath] [-z | -t DataType] [-b | -B] [-y] [-n]
	     [searchString [-r ReplacementString]]
	
	The -h option lets you specify:
	
	- the registry hive file
	
	- the keyroot name which references that hive in both the output and the
	  command-line arguments
	
	The -p option lets you specify the registry key path where the search starts.
	
	Sample:
	
	  regfind -h "c:\winnt\Profiles\UserX\ntuser.dat" KEYR -p KEYR\Software
	  WINNT
	
	In this sample, RegFind displays all keys containing the WINNT string in the data
	value. The search will start under the Software subkey in the UserX's registry
	hive The KEYR argument specifies the registry key name for the root key of this
	hive.
	
	Additional query words: prodnt rkit
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
