---
layout: page
title: "Q158438: Enabling Non-Admin Users to Remotely Monitor with PERFMON"
permalink: /kb/158/Q158438/
---

## Q158438: Enabling Non-Admin Users to Remotely Monitor with PERFMON

{% raw %}

	Article: Q158438
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When trying to run Perfomance Monitor in Windows NT 4.0 as a regular user, you
	receive a "Computer name not found" error message. Also, when you run System
	Monitor in Windows 2000, you receive the following error message:
	
	  Unable to connect to machine
	
	When you log on as the Administrator or to another account with administrative
	privileges, you can monitor with no problems using Performance/System Monitor.
	
	Steps to reproduce:
	-------------------
	
	1. Log on to a computer running Windows NT or Windows 2000 as a
	  non-administrator user.
	
	2. Click on Start > Run > Perfmon , then ENTER.
	
	3. Click Edit on menu and choose Add to Chart if you are using Windows NT 4.0.
	
	4. Click on the Add icon (Plus symbol) if you are using Windows 2000.
	
	5. Type \\<Computer name> (where Computer name is a remote server).
	
	The following message will occur:
	
	  Computer name not found
	
	or,
	
	  Unable to connect to machine
	
	However, it is possible for non-administrator users to remotely monitor Windows
	NT 4.0 and Windows 2000 servers with Performance/System Monitor.
	
	
	MORE INFORMATION
	================
	
	To enable a non-administrator user to remotely monitor a computer running
	Windows NT 4.0 or Windows 2000 with Performance/System Monitor, follow the steps
	below to modify the target computer.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Using Explorer or File Manager, give the user at least READ access to
	
	  %windir%\system32\PERFCxxx.DAT
	  %windir%\system32\PERFHxxx.DAT
	
	  where xxx is the basic language ID for the system, for example, 009 for
	  English. These files may be missing or corrupt. If you suspect this; expand
	  these files off of the installation cd.
	
	2. Using REGEDT32, give the user at least READ access to
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Perflib
	
	3. Using REGEDT32, give the user at least READ access to
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\SecurePipeServers\Winreg
	
	4. With Windows 2000, in addition to the access described above, the user must
	  also have access granted by the following Group Policies:
	
	  Computer Configuration\Windows Settings\Security Settings\Local Policies\User
	  Rights Assignment
	
	  -- Profile System Performance
	  -- Profile Single Process
	
	Additional query words: prodnt perfc009.dat perfh009.dat
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
