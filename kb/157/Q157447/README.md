---
layout: page
title: "Q157447: Cannot Display Korean Windows NT 3.5 Programs Under Windows 3.51"
permalink: /kb/157/Q157447/
---

## Q157447: Cannot Display Korean Windows NT 3.5 Programs Under Windows 3.51

	Article: Q157447
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Fixedsys font is used, some characters do not display properly under
	Korean Windows NT 3.51 for programs developed under Korean Windows NT 3.5.
	
	CAUSE
	=====
	
	This problem may be caused by the Fixedsys font change in Korean Windows NT
	3.51.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To work around the problem:
	
	1. Remove the Fixedsys font. Open Control Panel, and then double-click the Fonts
	  icon. From the Install Fonts list box, select Fixedsys, and then click
	  Remove.
	
	2. Add Fixedsys to System mapping. Go to the following Registry key:
	
	  HKEY_LOACAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\FontSubstitutes
	
	  Click Edit, and then click Add Value. Type Fixedsys in the Value Name entry,
	  select REG_SZ for Data Type, and then click OK. Type System for the String
	  entry, and click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51 Korean version.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt KBKOREA
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351
	Version           : :3.51
	
	=============================================================================
	
