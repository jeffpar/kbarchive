---
layout: page
title: "Q174629: Legacy PagedMemLimit Found in the Windows NT 4.0 Registry"
permalink: /kb/174/Q174629/
---

## Q174629: Legacy PagedMemLimit Found in the Windows NT 4.0 Registry

{% raw %}

	Article: Q174629
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Server 4.0 may contain a registry entry for PagedMemLimit.
	
	MORE INFORMATION
	================
	
	This setting is no longer used in Windows NT 4.0 and is considered a legacy
	entry. If this entry exists, Windows NT ignores the setting.
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MacFile\Parameters
	
	PagedMemLimit     REG_DWORD
	
	Range: 0x3e8 - 0x3e800 (1000K to 256000K)
	
	Specifies the maximum amount of page memory that the file server for Macintosh
	uses. Performance of the MacFile service increases with an increase in this
	value. However, the value should not be set lower than 1,000 KB. It is
	especially important that you are well acquainted with memory issues before
	changing this resource parameter. You cannot change this value from Server
	Manager. Default: 0x4e20 (20000 in decimal)
	
	Additional query words: PagedMemLimit NTSFM Regedt32 sfm macfile
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
