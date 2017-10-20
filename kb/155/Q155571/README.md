---
layout: page
title: "Q155571: Can Install Incompatible Program Using the .inf File"
permalink: /kb/155/Q155571/
---

## Q155571: Can Install Incompatible Program Using the .inf File

{% raw %}

	Article: Q155571
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible, by using the program's .inf file, to install a program that
	would not normally allow itself to be set up using its Setup program. If a
	program has been designed to be installed in Windows 95 only, the program's
	Setup program may warn you that the program is not designed to run with Windows
	NT. However, you may be able to use the right mouse button to click the
	program's .inf file and then click Install. Doing so can cause problems, as
	system files may be overwritten with incompatible versions.
	
	MORE INFORMATION
	================
	
	Check the documentation for the program regarding proper installation
	instructions.
	
	An .inf file is, in its simplest form, a Windows batch file that allows for
	customizing the Setup process. It is not uncommon for companies to distribute
	their programs with these type of files. Because .inf files include commands
	that can be executed, it is always a good idea to double- check the
	documentation for the program to see if installation using the .inf file is
	supported.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
