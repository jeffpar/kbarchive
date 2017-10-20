---
layout: page
title: "Q163327: How to Use the Rregchg.exe Tool"
permalink: /kb/163/Q163327/
---

## Q163327: How to Use the Rregchg.exe Tool

{% raw %}

	Article: Q163327
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Rregchg.exe tool included with the Windows NT 4.0 Resource Kit
	to remotely create or change a registry data value. This tool can modify only
	the HKEY_LOCAL_MACHINE portion of the registry.
	
	MORE INFORMATION
	================
	
	
	The RREGCHG command uses the following syntax:
	
	  RREGCHG \\<computer> KeyName ValueName Type Value
	
	For example, to change the data value for the ClassesBuild value in the following
	registry key:
	
	  Key:     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\JavaVM
	  Value:   ClassesBuild = 1100
	  Type:    REG_SZ
	
	You would type
	
	  RREGCHG \\<computer> SOFTWARE\Microsoft\JavaVM ClassesBuild REG_SZ 1200
	
	where <computer> is the computer name of the remote computer. The data
	value for the ClassesBuild value changes to 1200.
	
	
	Additional query words: 4.00 hive
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
