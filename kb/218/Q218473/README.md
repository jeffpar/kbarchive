---
layout: page
title: "Q218473: Restricting Changes to Base System Objects"
permalink: /kb/218/Q218473/
---

## Q218473: Restricting Changes to Base System Objects

	Article: Q218473
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix _IK
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If a non-administrative level user logs on interactively to your computer, it
	may be possible for the user to gain local administrative privileges. A user may
	load a non-Microsoft dynamic-link library (DLL) into memory having the same name
	as a core operating system DLL and then programmatically change the entry in the
	KnownDLLs list to point to the malicious copy. Programs then requesting the
	system DLL will instead be directed to the malicious copy. When called by a
	program with sufficiently high security privileges, it may be possible to bypass
	typical security related activities such as adding a user to the Local
	Administrators group. A remote user may also submit an arbitrary program to run
	on your computer to exploit this vulnerability.
	
	CAUSE
	=====
	
	In Windows NT, core operating system DLLs are kept in virtual memory and shared
	between programs. This prevents redundant copies of the DLL in memory, and
	improves memory usage and system performance. When a program calls a function
	provided by one of these DLLs, the operating system refers to a data structure
	called the KnownDLLs list to determine the location of the DLL in virtual
	memory. The Windows NT security architecture protects in-memory DLLs against
	modification, but by default it allows all users to read/write access to the
	KnownDLLs list.
	
	This vulnerability is only local to the computer where a malicious user is logged
	on interactively. For example, a workstation user could exploit this
	vulnerability to become a local administrator, but cannot use it directly to
	become a domain administrator. This restricts the impact of this issue as
	non-administrative users are not granted the ability to interactively log on to
	servers (following recommended Microsoft security practices).
	
	RESOLUTION
	==========
	
	NOTE: You should apply this fix to all systems that allow non-privileged users
	to log in to them.
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This hotfix has been posted to the following Internet location as Smssfixi.exe
	(x86) and Smssfixa.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/Smss-fix/
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	This hotfix has been posted to the following Internet location as Smssfixi.exe
	(x86) and Smssfixa.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40TSE/hotfixes-postSP3/Smss-fix/
	
	
	Windows NT 3.51
	---------------
	
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
	  03/24/99  09:56p                37,328 Smss.exe      (x86)
	  03/24/99  09:59p                54,544 Smss.exe      (Alpha)
	
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, enable stronger protection on system base objects such
	as the KnownDLLs list by doing the following:
	
	1. Click Start, click Run, type "regedt32" (without the quotation marks), and
	  then click OK.
	
	2. On the Windows menu, click "HKEY_LOCAL_ MACHINE on Local Machine".
	
	3. Double-click the \System\CurrentControlSet\Control\Session Manager folder.
	
	4. On the Edit menu, click Add Value, type "ProtectionMode" (without the
	  quotation marks), click REG_DWORD in the Data Type box, and then click OK.
	
	5. Type "1" (without the quotation marks) in the Data box, and then click OK.
	
	6. Quit Registry Editor, and then restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in the Microsoft products listed at the beginning of this
	article.
	
	This problem was first corrected in Windows NT Server 4.0, Terminal Server
	Edition Service Pack 4. This problem was first corrected in Windows NT version
	4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	For additional security related information about Microsoft products, please
	visit the Web site at:
	
	  http://www.microsoft.com/security/
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix _IK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
