---
layout: page
title: "Q255674: Drwtsn32 Does Not Work If User Does Not Have Write Rights"
permalink: kb/255/Q255674/
---

## Q255674: Drwtsn32 Does Not Work If User Does Not Have Write Rights

	Article: Q255674
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbWin2000sp1Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the access rights to the HKEY_LOCAL_MACHINE\Software\Microsoft registry key
	are reduced so that the logged-on user no longer has the access rights to create
	subkeys in the registry, Drwtsn32 does not work correctly and does not update
	the Drwtsn32.log file or generate a User.dmp file.
	
	CAUSE
	=====
	
	When Drwtsn32.exe runs, it requests KEY_CREATE_SUB_KEY privileges when it opens
	its registry key to determine what configuration to use. If the logged-on user
	does not have these privileges, Drwtsn32 does not run correctly and no log file
	or user dump file is generated.
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	Windows NT 4.0
	--------------
	
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
	
	  Date        Time    Size    File name     Platform
	  --------------------------------------------------
	  05/26/2000  05:46p  66,832  Drwtsn32.exe  x86
	  05/26/2000  05:45p  90,384  Drwtsn32.exe  Alpha
	
	
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Windows 2000. This problem was
	first corrected in Windows 2000 Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbWin2000sp1Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
