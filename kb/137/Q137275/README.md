---
layout: page
title: "Q137275: Policy Editor Adds Incorrect Value Enabling LFNs on NetWare"
permalink: /kb/137/Q137275/
---

## Q137275: Policy Editor Adds Incorrect Value Enabling LFNs on NetWare

	Article: Q137275
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you use Policy Editor to enable support for long filenames on Novell
	NetWare servers, a key relating to long filename support is added to the
	registry, but long filename support is not enabled.
	
	CAUSE
	=====
	
	When you use Policy Editor to enable support for long filenames on NetWare
	servers, Policy Editor creates a new DWORD value called SupportLFN under the
	following registry key:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Nwredir
	
	This registry value is given a value of 2, which normally enables long filename
	support for all NetWare servers that support long filenames. However, for
	Windows 95 to properly enable long filename support for NetWare servers, the
	SupportLFN value must be a binary value, not a DWORD value.
	
	RESOLUTION
	==========
	
	To enable long filename support on NetWare servers in Windows 95, use either of
	the following methods:
	
	- Edit the System.ini file located in the Windows directory. Add the following
	  line to the [Nwredir] section of the file
	
	  SupportLFN=<n>
	
	  where <n> is one of the following values:
	
	     Value   Description
	     -------------------------------------------------------------------
	     1       Enables long filename support for NetWare servers version
	             3.12 and later
	     2       Enables long filename support for all NetWare servers
	             that support long filenames, including NetWare 3.11 servers
	             on which the OS/2 name space patch has been applied
	
	  After you make this change to the System.ini file, save and then close the
	  file, and then restart your computer.
	
	- Use Registry Editor to delete the existing SupportLFN value under the
	  following registry key:
	
	     Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Nwredir
	
	  After you delete this value, create a new binary value with the same name, and
	  assign it a value of 2.
	
	  For information about how to edit the registry, view the Changing Keys And
	  Values online Help topic in Registry Editor (Regedit.exe). Note that you
	  should make a backup copy of the registry files (System.dat and User.dat)
	  before you edit the registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	  resulting from the incorrect use of Registry Editor can be solved. Use
	  Registry Editor at your own risk.
	
	Additional query words: poledit
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
