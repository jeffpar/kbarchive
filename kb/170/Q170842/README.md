---
layout: page
title: "Q170842: Setup.exe Causes Errors When Logging on"
permalink: /kb/170/Q170842/
---

## Q170842: Setup.exe Causes Errors When Logging on

{% raw %}

	Article: Q170842
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may encounter the following application error or Dr. Watson message when you
	log on to a computer running Windows NT 4.0 Workstation or Server:
	
	  An Application error has occurred and an application error log is being
	  generated.
	
	  SETUP.EXE
	  Exception access violation (0xC0000005), Address 0x00401167
	
	This error may occur even if Setup.exe does not reside in the startup group and
	the LOAD, RUN, and RUNONCE values under the following registry keys do not
	contain entries for Setup.exe:
	
	HKEY_CURRENT_USER\Software\Microsoft\WindowsNT\CurrentVersion\Windows
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce
	
	CAUSE
	=====
	
	When a user logs on to a computer running Windows NT Workstation or Server,
	Setup.exe from the <winnt>\system32 directory is called. The above error
	may occur if the original Setup.exe is replaced by another application's version
	of Setup.exe. For example, if the Microsoft SQL Server version of Setup.exe is
	copied into the system32 directory, the above error message will occur. Other
	versions of Setup.exe may produce different errors.
	
	
	RESOLUTION
	==========
	
	As of Service Pack 3, Setup.exe has not been updated from the original release
	version of Windows NT 4.0. Check the file size and date of Setup.exe in the
	<WINNT>\System32 directory. The correct file size should be 24,848 (or 25
	KB) and dated on or about 8/1/96. If the file size or date does not match this,
	expand this file from the Windows NT CD-ROM\<platform> directory.
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
