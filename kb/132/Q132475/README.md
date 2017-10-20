---
layout: page
title: "Q132475: Determining If a Service Pack Has Been Installed"
permalink: /kb/132/Q132475/
---

## Q132475: Determining If a Service Pack Has Been Installed

{% raw %}

	Article: Q132475
	Product(s): Microsoft Windows NT
	Version(s): ; WINDOWS:2000; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	To determine if your Windows NT 3.x installation was updated with a service
	pack:
	
	- Type "winver" (without the quotation marks) at the MS-DOS Command Prompt.
	
	- Choose About Program Manager from the Program Manager Help menu.
	
	- Check the version displayed at System Boot during the Kernel Initialization
	  Phase (when the screen turns blue).
	
	- Start Registry Editor (REGEDT32.EXE). From the HKEY_LOCAL_MACHINE subtree,
	  view the following key:
	
	     \SOFTWARE\Microsoft\WindowsNT\CurrentVersion
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  The value under Windows NT 3.5 and 3.51 is:
	
	     CSDVersion:REG_SZ:Service Pack x
	
	
	  The value under Windows NT Advanced Server 3.1 is:
	
	     CSDVersion:REG_DWORD:0x300
	
	
	To determine which service pack is installed in Windows NT 4.0, use one of
	the following methods:
	
	Method 1
	--------
	
	During the startup process, Windows NT displays a blue screen with
	information at the top. This information includes the version of Windows NT
	being booted, as well as the build number for that version. It also
	provides the service pack number if any has been installed.
	
	Method 2
	--------
	
	From the Windows NT desktop, click Start, and then click Run. Type "winver" (without the quotation marks)
	in the Open box and click OK. An About box appears, which lists what build
	number of Windows NT you are running as well as the service pack version number.
	
	NOTE: This same dialog box can be reached by clicking the Help menu and
	then click About in Windows Explorer.
	
	To determine version information in Windows 2000:
	
	From the Windows 2000 desktop, click Start, and then click Run. Type "winver" (without the quotation marks)
	in the Open box and click OK. An About box appears, which lists what build
	number of Windows 2000 you are running as well as the service pack version number.
	
	NOTE: This same dialog box can be reached by clicking the Help menu and
	then click About in Windows Explorer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search kbWinAdvServSearch
	Version           : :; WINDOWS:2000; winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
