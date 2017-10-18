---
layout: page
title: "Q169421: Mastering: Setup: Oleaut32.dll Installs to a Random File Name"
permalink: kb/169/Q169421/
---

## Q169421: Mastering: Setup: Oleaut32.dll Installs to a Random File Name

	Article: Q169421
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 4.0 1.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Mastering Microsoft Visual Basic 5 Fundamentals, version 1.0 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Mastering Visual Basic 5.0 Fundamentals on a computer running
	Windows NT Workstation 4.0, you may receive the following error message
	
	  A random file will be placed in the Winnt\System32 directory, named
	  <nnnnnnnn>.Dll
	
	where <nnnnnnnn> is 8 random, hexadecimal digits.
	
	RESOLUTION
	==========
	
	To correct this problem, install Internet Explorer from the Mastering CD, or any
	of the Microsoft programming tools used by the labs. This will allow the file to
	be properly replaced and registered.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mastering Visual Basic
	5.0 Fundamentals version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The random file is a copy of System\Oleaut32.dll from the Mastering Visual Basic
	5.0 Fundamentals CD. Although the existing version of Oleaut32.dll should be
	replaced during setup, it remains unchanged even after restarting the computer.
	
	Additional query words: multi multi-media mm media
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbMSPressSearch kbOSWinSearch kbOSWinNT400 kbOSWinNTSearch
	Version           : 4.0 1.0
	Issue type        : kbbug
	
	=============================================================================
	
