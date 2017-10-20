---
layout: page
title: "Q166502: Win95 Workgroup Name Overwrites Static Computername in WINS DB"
permalink: /kb/166/Q166502/
---

## Q166502: Win95 Workgroup Name Overwrites Static Computername in WINS DB

{% raw %}

	Article: Q166502
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0;Win95
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to access a computer that has a static entry on a Windows NT 4.0
	Windows Internet Name Service (WINS) Server.
	
	-or-
	
	The static IP address for a 00h unique computer name entry on a Windows NT 4.0
	WINS Server is incorrect.
	
	CAUSE
	=====
	
	When a Windows 95 computer registers with a Windows NT 4.0 WINS server, and the
	workgroup name of the Windows 95 computer is the same name as a static mapping
	that exists on the WINS server, the 00h entry for the static computer mapping
	will have its IP address changed to the IP address of the Windows 95 client. The
	entry will remain registered as static.
	
	RESOLUTION
	==========
	
	Change the Workgroup name of the Windows 95 client, or change the name of the
	static unique entry in the WINS database by performing the following steps:
	
	NOTE: The following procedure is to be performed on your WINS Server.
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  WINS Manager.
	
	2. Click Static Mappings on the Mappings menu.
	
	3. Select the entry to be changed and then click Delete Mapping.
	
	4. Click Add Mappings.
	
	5. Type the new name in the Name field and the IP address in the IP address
	  field.
	
	6. Click Add, then click Close in the Add Mappings dialog box.
	
	7. Click Close in the Static Mappings dialog box.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0;Win95
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
