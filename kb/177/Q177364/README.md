---
layout: page
title: "Q177364: IntelliMouse Wheel Stops Working After Installing Service Pack 3"
permalink: /kb/177/Q177364/
---

## Q177364: IntelliMouse Wheel Stops Working After Installing Service Pack 3

{% raw %}

	Article: Q177364
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 3, the functionality of your
	Microsoft IntelliMouse wheel may be disabled.
	
	CAUSE
	=====
	
	This behavior occurs because the I8042prt.sys file is replaced when you install
	Service Pack 3. The I8042prt.sys file is the driver that controls the keyboard
	and PS/2 mouse port.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename the I8042prt.sys file in your
	%SystemRoot%\System32\Drivers folder, replace it with the original version, and
	then restart your computer. To replace the I8042prt.sys file, use either of the
	following methods:
	
	- If you created an uninstall folder during the installation of Service Pack 3,
	  copy the I8042prt.sys file from the %SystemRoot%\$NtServicePackUninstall$
	  folder to the %SystemRoot%\System32\Drivers folder.
	
	- If you did not create an uninstall folder during the installation of Service
	  Pack 3, expand the I8042prt.sys file from your Windows NT 4.0 CD-ROM by
	  typing the following command at a command prompt
	
	  " expand <drive>:\i386\I8042prt.sys <windows_nt>\System32\
	  drivers\I8042prt.sys " (without the quotation marks)
	
	  where <drive> is the drive letter assigned to your CD-ROM drive, and
	  <windows_nt> is the name of the folder in which Windows NT is
	  installed.
	
	MORE INFORMATION
	================
	
	For more information about the I8042prt.sys file included with Service Pack 3,
	see the following article in the Microsoft Knowledge Base:
	
	ARTICLE-ID: Q159060
	TITLE : Mouse Cursor Freezes or Fails with Microsoft IntelliMouse
	
	
	Additional query words: scroll rotate spin sp3
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	
	=============================================================================
	

{% endraw %}
