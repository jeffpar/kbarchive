---
layout: page
title: "Q160982: Files Installed with Microsoft NetWare Directory Services"
permalink: kb/160/Q160982/
---

## Q160982: Files Installed with Microsoft NetWare Directory Services

	Article: Q160982
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup 3rdpartynet osr2 win95 kb3rdPartyNetClient
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the files that are installed when you add the Microsoft
	NetWare Directory Services service to the installed network components.
	
	MORE INFORMATION
	================
	
	The following files are installed:
	
	  File name         Size   Time/Date         Location
	  ---------------------------------------------------------
	  IFSMGR.VXD     165,057   10/13/95 12:00p   Windows\System
	  NDSCLI.INF      12,137   10/13/95 12:00p   Windows\Inf
	  NDSNP.HLP       17,357   10/13/95 12:00p   Windows\Help
	  NWNDS.DLL        7,424   10/13/95 12:00p   Windows\System
	  _NWNDS.BAT         366   10/13/95 12:00p   Windows\System
	  NDSPP.DLL       41,984   10/13/95 12:00p   Windows\System
	  NWAPI32.DLL     31,744   10/13/95 12:00p   Windows\System
	  NWLSPROC.EXE    84,480   10/13/95 12:00p   Windows\System
	  NWNP32.DLL     136,704   10/13/95 12:00p   Windows\System
	  NWREDIR.VXD    174,594   10/13/95 12:00p   Windows\System
	
	NOTE: The _Nwnds.bat file is used during Setup for the Service for NDS. Its
	contents are deleted after the first restart, leaving a blank batch (.bat)
	file.
	
	
	The following files are located in the install folder and are used during
	installation:
	
	  File name         Size   Time/Date
	  ----------------------------------------
	  MSNDS.EXE      379,308   10/13/95 12:00p
	  MAPLE.ADM        4,222   10/13/95 12:00p
	  MSNDS.CNT        1,188   10/13/95 12:00p
	  MSNDS.HLP       45,001   10/13/95 12:00p
	  NDSBATCH.TXT     1,630   10/13/95 12:00p
	  NDSCLI.SBS      12,349   10/13/95 12:00p
	  NDSPP.NW4       41,984   10/13/95 12:00p
	  NETWARE.NW4      3,216   10/13/95 12:00p
	  NWAPI32.NW4     31,744   10/13/95 12:00p
	  NWLSPROC.NW4    84,480   10/13/95 12:00p
	  NWNP32.NW4     136,704   10/13/95 12:00p
	  NWREDIR.NW4    174,594   10/13/95 12:00p
	  README.TXT       8,014   10/13/95 12:00p
	
	Additional query words: novell msnds
	
	======================================================================
	Keywords          : kbnetwork kbsetup 3rdpartynet osr2 win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
