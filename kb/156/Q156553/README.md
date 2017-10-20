---
layout: page
title: "Q156553: Upgrading WinNT 3.51 to 4.0 w/ NCR/Symbios Logic Controller"
permalink: /kb/156/Q156553/
---

## Q156553: Upgrading WinNT 3.51 to 4.0 w/ NCR/Symbios Logic Controller

{% raw %}

	Article: Q156553
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Windows NT version 3.51 to Windows NT version 4.0 with a
	NCR C810 SCSI controller, you may receive the following error message:
	
	  STOP 0X0000001E KMODE_EXCEPTION_NOT_HANDLED
	
	CAUSE
	=====
	
	The Windows NT 4.0 upgrade installs the Symc810.sys driver in place of Symbios
	Logic's Windows NT 3.51 Symc8xx.sys driver. The Windows NT 3.51 version of the
	driver is not removed during the upgrade, which causes a conflict with the new
	driver. This conflict does not occur if you install Windows NT 4.0 directly
	without upgrading.
	
	RESOLUTION
	==========
	
	Prior to upgrading, use the Windows NT Setup program to remove the Symbios Logic
	PCI (53c8XX) SCSI adapter driver and add the NCR PCI (53c810) adapter driver
	included with the Microsoft Windows NT 3.51 compact disc. This process installs
	the Microsoft Ncrc810.sys driver. Then perform the Windows NT 4.0 upgrade as
	normal.
	
	Some systems will not function with the Ncrc810.sys driver. Owners of those
	systems that can't use the Microsoft provided Ncrc810.sys driver, or users that
	have upgraded Windows NT with the Symcxx.sys driver in place, should contact
	Symbios Logic for technical support. Symbios Logic's technical support can be
	reached at (719) 533-7230.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt install Symbios NCR
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
