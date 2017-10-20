---
layout: page
title: "Q237789: INFO: Windows 2000 Registry Entries Are Not Expanded"
permalink: /kb/237/Q237789/
---

## Q237789: INFO: Windows 2000 Registry Entries Are Not Expanded

{% raw %}

	Article: Q237789
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Before Windows 2000, most in-process applications were placed in the registry
	with a complete, hard-coded path. In Windows 2000, many of the earlier,
	absolute, hard-coded paths have been replaced with the appropriate %environment%
	variable.
	
	MORE INFORMATION
	================
	
	In-process applications are applications that are registered as handlers for a
	particular file extension (for example, Filename.wri is started by Wordpad,
	Filename.doc is started by Microsoft Word, and so on).
	
	For instance, in the registry under HKLM/Software/Microsoft/Windows/Current
	version/App paths, the entry for Wordpad, which was C:\Program Files\Windows
	NT\Accessories\Wordpad.exe, has become %Program Files%\Windows
	NT\Accessories\Wordpad.exe.
	
	When an application calls the RegQueryValueEx function to retrieve a string, it
	should check to see whether lpType==REG_EXPAND_SZ, which means that the
	application should call the ExpandEnvironmentStrings function, just in case the
	string returned really does need to be expanded.
	
	These registry values have been REG_EXPAND_SZ for quite some time, but
	applications expected that these strings were already expanded for them. There
	are several applications that try to call WinExec with the parameter (%Program
	Files%\Windows NT\Accessories\Wordpad.exe, and so on) with incorrect results.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
