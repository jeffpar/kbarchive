---
layout: page
title: "Q179553: Access Violation in PolEdit When Defining Allowed Windows Apps"
permalink: /kb/179/Q179553/
---

## Q179553: Access Violation in PolEdit When Defining Allowed Windows Apps

{% raw %}

	Article: Q179553
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix kbWinNT400sp5fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT System Policy Editor allows administrators to restrict the
	applications executable names that can be run by users. Defining an excessive
	number of applications will cause an access violation in System Policy Editor.
	
	The error that is recorded in the application log is:
	
	  Event ID 4097
	  Dr Watson Error
	  An application error has occurred and an application error log is being
	  generated.
	  Poledit.exe
	  Exception:access violation (0xc000005), address 0x77c01329
	
	
	CAUSE
	=====
	
	A display problem in Poledit.exe passes invalid flags into the Treeview context.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	The option to run only allowed applications can be turned on or off in System
	Policy Editor.
	
	1. Run System Policy Editor (Poledit.exe).
	
	2. On the File menu, click Open Registry.
	
	3. Double-click Local User, double-click System, and then double-click
	  Restrictions.
	
	4. Click "Run only allowed Windows applications" to select or clear the check
	  box.
	
	5. Click OK, and then quit System Policy Editor.
	
	Additional query words: poledit user.dmp drwtsn32.log ntconfig.pol dr. watson error policies run application error policies
	======================================================================
	Keywords          : kbWinNT400sp4fix kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
