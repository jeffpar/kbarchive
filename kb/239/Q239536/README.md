---
layout: page
title: "Q239536: How to Load Printer Drivers from Trusted Source Only"
permalink: /kb/239/Q239536/
---

## Q239536: How to Load Printer Drivers from Trusted Source Only

{% raw %}

	Article: Q239536
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In Windows NT you can install printer drivers from a trusted share, rather than
	from the remote print server to which your print service is connected.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To install printer drivers from a trusted source:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\Servers
	
	3. On the Edit menu, click Add Value, and then add the following value:
	
	  Value Name: LoadTrustedDrivers
	  Data Type: REG_DWORD
	  Value: 1
	
	  A value of 1 indicates that drivers can be installed only from the trusted
	  print server shares specified by the TrustedDriverPath value.
	
	4. On the Edit menu, click Add Value, and then add the following value:
	
	  Value Name: TrustedDriverPath
	  Data Type: REG_SZ = \\<servername>\<sharename>
	
	  where <servername> is the name of the appropriate server and
	  <sharename> is the name of the appropriate share.
	
	  This value specifies the path to trusted print server shares from which you
	  can install printer drivers. If the LoadTrustedDrivers value is 1, you can
	  only install drivers from the server shares located in the path specified in
	  the value of this entry.
	
	5. Quit Registry Editor, and then restart your computer.
	
	To obtain a set of trusted files, you must install a driver on a computer one
	time. If you install printer drivers for a Windows NT 4.0 Intel system, the
	following structure exists:
	
	  %SystemRoot%\System32\Spool\Drivers\W32x86\2
	
	You must copy the files from this folder into the \2 subfolder of the trusted
	driver share. For example, if the share is located in the C:\Tmp folder and the
	share name is "ins," the structure is C:\Tmp\2 and you must type the following
	path into the registry:
	
	  \\<computername>\ins
	
	
	Additional query words: spooler
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
