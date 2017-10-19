---
layout: page
title: "Q316427: Computer Hangs During Startup If DMA Mode Is Set for IDE Devices"
permalink: /kb/316/Q316427/
---

## Q316427: Computer Hangs During Startup If DMA Mode Is Set for IDE Devices

	Article: Q316427
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer may stop responding (hang) while the boot screen is displayed if
	DMA mode is set for IDE devices in an IBM ThinkPad docking station.
	
	CAUSE
	=====
	
	This problem is caused by the CMD PCI-648 IDE controller that is built into the
	docking station. This device raises an interrupt but does not set its status
	accordingly. After you install this hotfix, the interrupt is ignored.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size    File name
	  ----------------------------------------------------
	  19-Jan-2002  00:37  4.0.1381.7123  27,728  Atapi.sys
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Component         : Drivers,Disk
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP6a
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
