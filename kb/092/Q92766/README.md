---
layout: page
title: "Q92766: ROM BIOS Shadowing Not an Advantage with Windows NT"
permalink: /kb/092/Q92766/
---

## Q92766: ROM BIOS Shadowing Not an Advantage with Windows NT

{% raw %}

	Article: Q92766
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some computers provide a ROM BIOS shadowing option. While this feature provides
	an advantage with Microsoft MS-DOS, it is not an advantage with Microsoft
	Windows NT.
	
	MORE INFORMATION
	================
	
	ROM BIOS shadowing is the process of copying the BIOS from ROM into RAM and
	using either hardware or 386 enhanced mode to remap the RAM into the normal
	address space of the BIOS. Because reading RAM is much faster than reading ROM,
	BIOS-intensive operations are substantially faster. For example, MS- DOS uses
	the BIOS to write to the screen; therefore, with ROM BIOS shadowing, directory
	listings run more quickly.
	
	Windows NT does not use the BIOS (except during startup); therefore, no
	performance is gained by shadowing. If ROM BIOS shadowing is not used, more RAM
	is available. With Windows NT, there is an advantage to disabling the ROM BIOS
	shadowing option.
	
	This applies to other BIOS shadowing schemes as well. Typically the CMOS settings
	allow the system to shadow any BIOS. This includes the following:
	
	  System BIOS
	  Video BIOS
	  Other adapters ROM BIOS (in a given select range)
	
	Additional query words: prodnt win32
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	

{% endraw %}
