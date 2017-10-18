---
layout: page
title: "Q167102: Cannot Open Devices or Modem Tool in Control Panel"
permalink: kb/167/Q167102/
---

## Q167102: Cannot Open Devices or Modem Tool in Control Panel

	Article: Q167102
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the Devices icon in Control Panel, you may receive the
	following error message:
	
	  Configuration Manager: This routine is not implemented in this version of the
	  operating system.
	
	Also, when you double-click the Modem icon in Control Panel, Modems Properties
	may not open.
	
	CAUSE
	=====
	
	This error can occur if the following Windows NT files have been replaced by
	Microsoft Windows 95 versions of the same files:
	
	  %systemroot%\system32\Cfgmgr32.dll
	  %systemroot%\system32\Setupapi.dll
	
	These files may have been replaced by the installation of a program. If you
	receive the error message listed above, check these files to make sure they are
	the Windows NT versions.
	
	RESOLUTION
	==========
	
	Delete the existing files, and replace them with files from the Windows NT
	CD-ROM.
	
	NOTE: Both files on the Windows NT CD-ROM are compressed and must be expanded.
	You can expand the files by typing the following commands at a command prompt
	(assuming that the CD-ROM drive is drive D, you are using the Intel platform,
	and the Windows NT installation folder is C:\Winnt):
	
	  expand d:\i386\cfgmgr32.dl_ c:\winnt\system32\cfgmgr32.dll
	  expand d:\i386\setupapi.dl_ c:\winnt\system32\setupapi.dll
	
	
	Additional query words: office
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
