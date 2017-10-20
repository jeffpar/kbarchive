---
layout: page
title: "Q171403: CardWizard May Cause Startup Hangs after Windows NT 4.0 SP"
permalink: /kb/171/Q171403/
---

## Q171403: CardWizard May Cause Startup Hangs after Windows NT 4.0 SP

{% raw %}

	Article: Q171403
	Product(s): Microsoft Windows NT
	Version(s): Windows4.0
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
	
	After you install Windows NT 4.0 Service Pack 2 (SP2) or later on a system using
	CardWizard for Windows NT version 2.0 or earlier, your system may stop
	responding (hang) during restart.
	
	CAUSE
	=====
	
	This problem exists because Windows NT Service Packs reinstall the Microsoft
	native Pcmcia.sys driver over the custom Pcmcia.sys driver provided in The
	CardWizard product.
	
	The Windows NT Service Pack 3 Readme.txt file warns of this:
	
	  If you are running SystemSoft's CardWizard for Windows NT (support for
	  PCMCIA) or PowerProfiler for Windows NT (support for Advanced Power
	  Management), you must complete critical pre-installation procedures prior to
	  installing this Service Pack. Otherwise, your computer may no longer boot
	  after installation of Service Pack 3. These procedures can be found in the
	  product section at http://www.systemsoft.com.
	
	WORKAROUND
	==========
	
	To get back into the system, rename the Pcmcia.sys file found in the
	%SystemRoot%\System32\Drivers directory to something else.
	
	For example: Pcmcia.old
	
	On a FAT file system, start your computer from a MS-DOS disk and rename the
	file.
	
	On a NTFS file system, you will need to perform a parallel installation Of
	Windows NT or follow the steps found in the following Microsoft Knowledge Base
	article:
	
	  Q164471 Replacing System Files Using a Modified Emergency Repair Disk.
	
	After you are back in Windows NT 4.0, uninstall CardWizard by running the Card
	Wizard setup. Then reinstall CardWizard for Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	SystemSoft has worked with Microsoft to provide a patch for this problem for
	Windows NT 4.0 Service Pack 3.
	
	Unfortunately, this patch is not available for SP2 upgrades.
	
	Instructions for installing this patch are on SystemSoft's Web site.
	
	CardWizard is manufactured by SystemSoft, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: PCMCIA HANG sp2 sp3
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : Windows4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
