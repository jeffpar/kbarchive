---
layout: page
title: "Q100082: Change Icon Title Fonts in Program Manager"
permalink: kb/100/Q100082/
---

## Q100082: Change Icon Title Fonts in Program Manager

	Article: Q100082
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	You can change the size and name of the font used by Program Manager for
	icon titles. To do so, go to one of the following Registry subkeys:
	
	  HKEY_USERS\Default\Control Panel\Desktop HKEY_CURRENT_USER\Control
	  Panel\Desktop
	
	Change the following two values
	
	  IconTitleSize IconTitleFaceName
	
	to the size and name (respectively) of the font you want. For example,
	the default values are:
	
	  IconTitleSize : REG_SZ : 9 IconTitleFaceName : REG_SZ : Helv
	
	The value
	
	  IconTitleStyle
	
	which can currently be implemented in Windows 3.1 to change the Program
	Manager font to bold, cannot be used to change the font in Windows NT 3.1.
	While the value is documented, changing it from the default of "0" to "1"
	in the Registry does not work. However, in Windows NT 3.5 this entry works
	as expected.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
