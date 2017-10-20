---
layout: page
title: "Q160162: Installing Madge Smart 16/4 PCMCIA Ringnode Under WinNT 4.0"
permalink: /kb/160/Q160162/
---

## Q160162: Installing Madge Smart 16/4 PCMCIA Ringnode Under WinNT 4.0

{% raw %}

	Article: Q160162
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The installation of the Madge 16/4 PCMCIA PC Card Ringnode in Windows NT 4.0
	shows no problems when carrying out a fresh installation. However, when
	upgrading from Windows NT 3.5 or Windows NT 3.51, the miniport driver will not
	be properly installed and will not work.
	
	CAUSE
	=====
	
	The Product Software Name (PSN) for the Madge miniport in Windows NT 4.0 is
	"MadgeMPort"; the Driver File Name (DFN) is "MdgMPort.SYS". In the case of the
	PC Card adapters, Windows NT keeps a database in the Registry that tells which
	driver to use for an adapter with the given CIS ID. The database uses the PSN to
	identify drivers. In Windows NT 4.0 the database refers to "MadgeMPort"; whereas
	in Windows NT 3.51, it referred to "MdgMPort".
	
	In a clean installation of Windows NT 4.0, the Madge miniport driver is installed
	with a PSN of "MadgeMPort", which will match the PC Card database. But during an
	upgrade of Windows NT 3.5 or 3.51 to Windows NT 4.0, the Madge miniport driver
	has already been installed with a PSN of "MdgMPort". This does not match what is
	in the PC Card database. The result is an error message during the subsequent
	log on attempt:
	
	  At least one service or driver failed during system startup.
	
	The Event Log records an error from the Service Control Manager saying:
	
	  The MdgMport service failed to start due to the following error. A device
	  attached to the system is not functioning.
	
	RESOLUTION
	==========
	
	During the upgrade to Windows NT 4.0, the user will have been asked if they want
	to upgrade the various Madge miniport files. Whether this has been chosen, the
	entry in the PC Card database must refer to "MdgMPort."
	
	Make an entry in the registry to update the database. To make this entry, perform
	the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe) and go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\PCMCIA
	  \Database\MADGE\ SMART 16/4 PCMCIA
	
	  NOTE: The above registry key is one path, it has been wrapped for readability.
	
	2. Double-click Driver:REG_SZ:madgemport, edit the string so that it reads
	  "mdgmport" (without the quotation marks).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
