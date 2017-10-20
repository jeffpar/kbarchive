---
layout: page
title: "Q194364: Timezone.exe Application Not Included with Resource Kit"
permalink: /kb/194/Q194364/
---

## Q194364: Timezone.exe Application Not Included with Resource Kit

{% raw %}

	Article: Q194364
	Product(s): Microsoft Windows NT
	Version(s): Windows:95;WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Resource Kit application Timezone.exe was left out of the
	resource kit even though the documentation for it was included.
	
	MORE INFORMATION
	================
	
	Timezone.exe is a command-line utility that updates the daylight savings
	information for a time zone in the registry. The start and end of daylight
	savings time in some countries is not static -- it changes from year to year.
	
	This tool works on computers running Windows NT 3.51, Windows NT 4.0, and Windows
	95. (The Msvcrt.dll file must be installed in the Winnt35\system32 directory
	under Windows NT 3.51 for the utility to function in that operating system.)
	
	The TIMEZONE application may be found at:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/i386/
	
	Download the Timezon1.exe file to your resource kit directory and run it either
	by either double-clicking it or from the command line. The executable is
	self-extracting and contains two files: timezone.exe and readme.txt.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351xsearch kbWinNT400xsearch kbWinNTW351xsearch kbWinNTW351 kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400 kbWinNTS351 kbWinNTS351xsearch kbWin95search kbZNotKeyword3
	Version           : Windows:95;WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
