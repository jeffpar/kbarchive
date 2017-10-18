---
layout: page
title: "Q249799: Slow Network Performance with Service Pack 4, 5, 6, or 6a"
permalink: kb/249/Q249799/
---

## Q249799: Slow Network Performance with Service Pack 4, 5, 6, or 6a

	Article: Q249799
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Network performance may be sluggish after you apply Windows NT 4.0 Service Pack
	4, 5, 6, or 6a.
	
	CAUSE
	=====
	
	A change was made to the Rdr.sys file in Windows NT 4.0 Service Pack 4 to fix an
	issue with a handle being invalidated when a dismount occurs. This may cause
	additional network traffic, which may degrade performance.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  12/23/1999  04:25p             265,104 rdr.sys       Intel
	  12/23/1999  04:24p             509,392 rdr.sys       Alpha 
	
	
	NOTE: You must install the latest Windows NT Service Pack (SP6a) to use this
	hotfix. Windows NT SP6 is required by Rdr.sys dependencies on SP6, which means
	that Rdr.sys cannot be fixed for any previous Service Pack version.
	
	Using the hotfixed version of Rdr.sys that resolves this problem with any other
	service pack is not supported.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Packs 4
	and 5. This problem was first corrected in Windows NT Server 4.0, Terminal
	Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Dismounting is something we do at the file system level after we've performed
	direct input and output operations on, or retrieve information about, a floppy
	disk drive, hard disk drive, tape drive, or CD-ROM drive.
	
	The default behavior has been changed to the behavior that existed before Windows
	NT 4.0 Service Pack 4 for network activity. If this fix causes an issue, you can
	change the new default behavior by following these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Rdr\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: FileSystemControlFilter
	  Data Type: REG_DWORD
	  Value: 0 or 1
	
	Note that a setting of 0 disables the filter, which is the old behavior. A
	setting of 1 filters FSCTL_IS_VOLUME_MOUNTED, which is the new behavior and is
	the default.
	
	4. Quit Registry Editor.
	
	
	Additional query words: rdr.sys
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServSearch kbWinNTW400sp6
	Version           : :4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
