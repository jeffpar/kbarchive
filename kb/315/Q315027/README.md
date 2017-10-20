---
layout: page
title: "Q315027: Windows NT 4.0 May Hang After Applying the SRP"
permalink: /kb/315/Q315027/
---

## Q315027: Windows NT 4.0 May Hang After Applying the SRP

{% raw %}

	Article: Q315027
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbhw
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use a Windows NT 4.0-based computer, the computer may stop responding
	(hang) and you may receive the following error message on a blue screen after
	you apply the Security Rollup Package (SRP) if you have the driver for Fujitsu
	Siemens Smart Card Reader Keyboard K290 installed on the computer (device
	S26381-K290-Lxxx: PS/2 keyboard with an attached Smart Card reader):
	
	  Stop 0x0000000a (0xF40142D2, 0x00000002, 0x00000000, 0x8010A890) in
	  ntoskrnl.exe
	
	Note that the parameters in the stop code of the error message may vary.
	
	For additional information about the SRP, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	CAUSE
	=====
	
	This behavior occurs because there is a problem with the some versions of the
	Fujitsu Siemens Smart Card reader drivers.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use one of the following methods.
	
	Method 1
	--------
	
	To resolve this behavior, view the following Fujitsu Web site for information
	about an updated driver:
	
	  http://www.fujitsu.com
	
	Method 2
	--------
	
	If the Windows files are on a file allocation table (FAT) partition, start your
	computer with a bootable floppy disk or an Emergency Repair Disk (ERD), rename
	the I8042scr.sys file to I8042scr.old, and then rename the I8042prt.sys file to
	I8042scr.sys. For information about how to change the name of a file, view the
	Help files in Windows NT 4.0.
	
	If the Windows files are on an NTFS file system (NTFS) partition, install a
	parallel copy of Windows NT 4.0, rename the I8042scr.sys file to I8042scr.old,
	and then rename the I8042prt.sys file to I8042scr.sys.
	
	For additional information about how to perform a parallel installation of
	Windows NT 4.0, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q259003 How and Why to Perform a Parallel Installation of Windows NT 4.0
	
	Method 3
	--------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following steps require a parallel installation of Windows NT 4.0. For
	additional information about how to perform a parallel installation of Windows
	NT 4.0, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q259003 How and Why to Perform a Parallel Installation of Windows NT 4.0
	
	To resolve this behavior:
	
	1. Click Start, click Run, type "regedit32" (without the quotation marks) in the
	  Open box, and then press ENTER.
	
	2. Click HKEY_LOCAL_MACHINE on the Windows menu.
	
	3. Click Load Hive on the Registry menu, and then type
	  "c:\winnt\system32\config\system" (without the quotation marks) in the box.
	
	4. When you are prompted to type a key name, type "SYS" (without the quotation
	  marks).
	
	5. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYS\System\ControlSet01\Services\I8042prt\ImagePath
	
	6. Rename System32\Drivers\I8042scr.sys to System32\Drivers\I8042prt.sys.
	
	7. Locate and click the following registry key, and then click Unload Hive on
	  the Registry menu:
	
	  HKEY_LOCAL_MACHINE\SYS
	
	8. Click OK.
	
	9. Quit Registry Editor.
	
	10. Restart your computer to the original installation of Windows.
	
	REFERENCES
	==========
	
	For additional information about parallel installations, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q244378 System Cleanup After a Parallel Installation of Windows NT 4.0
	
	  Q259003 How and Why to Perform a Parallel Installation of Windows NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbhw 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
