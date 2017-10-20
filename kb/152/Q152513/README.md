---
layout: page
title: "Q152513: Troubleshooting Performance Monitor Counter Problems"
permalink: /kb/152/Q152513/
---

## Q152513: Troubleshooting Performance Monitor Counter Problems

{% raw %}

	Article: Q152513
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The Performance Monitor utility Perfmon.exe may not display valid counter
	objects. Below are some troubleshooting methods that can be used to resolve the
	issue.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You could check the strings in the 009 key under the key described below and look
	for any garbled entries, entries that have two numbers, or entries that have two
	strings in succession (you should see ### string ### string, and so on in the
	multi-sz editor). This may not explain the different behavior between the local
	and remote cases because they both access the same registry values.
	
	Perfmon does the following with the registry:
	
	- Reads the perfmon configuration from the following registry subkey. Entries
	  not found will revert to the default values:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Perfmon
	
	- Opens the performance registry key, which does the following (on the computer
	  that you are trying to connect to):
	
	   - Opens the following registry subkey to read the name strings and explain
	     text strings. If this fails, the computer connection fails:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Perflib\009
	
	     (009 assumes English)
	
	   - Opens the following registry subkey to read any configuration information.
	     If this fails, the default settings are used:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Perflib
	
	   - Enumerates the following registry subkey to find services that have
	     registered extensible performance counter DLLs. If this fails, or any of
	     the DLLs found fail, then the failed DLLs will not be loaded and the
	     extensible counters provided by the DLLs will be returned. The connection
	     to the computer (local or remote) will succeed with at least the standard
	     counters:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	The biggest difference between monitoring a local computer and a remote computer
	is that the performance counters are queried within the context of the Perfmon
	process when monitoring local computer counters, while remote performance
	counters are monitored within a thread of the Winlogon process on the remote
	computer.
	
	Usually this type of failure is the result of one of the network related
	extensible counter DLLs. Another possibility could be the permissions enabled on
	the local machine are insufficient to allow the remote account access to the
	performance counter registry keys. The minimum permissions needed for each
	instance of the following registry subtree
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\<service
	  name>\Performance
	
	is:
	
	Everyone - Read (Query Value, Enumerate Subkeys, Notify, Read Control).
	System - Full Control
	Administrators - Full Control
	
	As always check the security, application or system event logs for any
	"interesting" entries. To try and narrow it down you could try to disable the
	extensible counter DLLs to prevent them from being loaded. If this solves the
	problem, enable the extensible counter DLLs one at a time to see when it breaks
	again.
	
	To disable one or more extensible counter DLL(s):
	
	1. Start the Registry Editor (RegEdt32.exe).
	
	2. Navigate to the following registry subtree:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	3. Click Find Key on the View menu.
	
	4. Type "Performance" (without the quotation marks) as the search string, then
	  search down from there.
	
	5. At each Performance entry you find, select the Library value and modify the
	  library name by prefixing it with two x's: for example, change OrigLib.dll to
	  xxOrigLib.dll
	
	6. When you have done each Performance entry under the
	  CurrentControlSet\Services key, restart Perfmon to see whether it works. If
	  it does, then repeat the above two steps, only restoring the original library
	  name and trying Perfmon after each change to see which library causes the
	  fault.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q164018 Controlling Remote Performance Monitor Access to Windows NT Servers
	
	Additional query words: troubleshoot
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search kbWinAdvServSearch
	Version           : :2000,3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
