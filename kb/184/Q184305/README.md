---
layout: page
title: "Q184305: How to Install and Remove Hotfixes with HOTFIX.EXE"
permalink: /kb/184/Q184305/
---

## Q184305: How to Install and Remove Hotfixes with HOTFIX.EXE

{% raw %}

	Article: Q184305
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Hotfix.exe is a utility used in the installation of Windows NT hotfixes. A
	hotfix is a collection of one or more files that can be applied to a system in
	order to correct a problem.
	
	Hotfix.exe supports the following switches:
	
	HOTFIX [-y] [-f] [-n] [-z] [-q] [-m] [-l]
	
	  -y Perform uninstall (only with -m or -q)
	  -f Force apps closed at shutdown
	  -n Do not create uninstall directory
	  -z Do not reboot when update completes
	  -q Quiet or Unattended mode with no user interface
	  (this switch is a superset of -m)
	  -m Unattended mode with user interface
	  -l List installed hotfixes
	
	To view the available switches, type one of the following at a command prompt:
	
	     hotfix /?
	     hotfix /help
	     hotfix /h
	
	MORE INFORMATION
	================
	
	When you install a Windows NT hotfix, information about the hotfix is stored in
	the registry in the following key:
	
	  
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Hotfix\<KBArticleNumber>
	
	  where <KBArticleNumber> is the Q number of a Microsoft Knowledge Base
	  article associated with a particular hotfix.
	
	IMPORTANT: At the end of the installation process, you may be prompted to restart
	your computer.
	
	The installation of a hotfix also stores uninstall information in a hidden folder
	called %SystemRoot%\$NtUninstall<KBArticleNumber>$.
	
	Perform the following steps to uninstall a Windows NT hotfix:
	
	1. Extract the files within the hotfix. To do this, copy the original file to a
	  temporary folder and type the name of the hotfix with the "/x" switch. For
	  example, to extract a hotfix called HotfixA without installing the files,
	  type the following at a command prompt: hotfixa /x
	
	2. Type the following at a command prompt: hotfix -y
	
	If multiple hotfixes replace the same file, you must remove the most recently
	installed hotfix first in order to successfully return your system to its
	original state. For example, assume HotfixA and HotfixB replace the same file
	and that you install HotfixA before you install HotfixB. If you want to return
	your system to the state prior to the installation of HotfixA, you must
	uninstall HotfixB before you uninstall HotfixA.
	
	NOTE: Chaining multiple hotfixes together for installation at the same time is
	not supported. Dependencies and timing issues can result in the hotfixes not
	being installed correctly.
	
	Hotfix.exe is included with each hotfix you download from the Microsoft ftp site
	(ftp.microsoft.com). You can also obtain the latest version of Hotfix.exe from
	the following location:
	
	  ftp://ftp.microsoft.com/bussys/utilities/hotfix/
	
	You can find more information about specific hotfixes on the following Microsoft
	sites:
	
	  http://support.microsoft.com/Support/NTServer/Hotfixes.asp
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/
	
	For more information, see:
	
	  Q262841 Windows 2000 Hotfix.exe Description and Command-Line Switches
	
	Additional query words: sp lifo last in first out hotfix.inf hotfix.ini
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
