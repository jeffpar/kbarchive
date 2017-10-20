---
layout: page
title: "Q141116: Windows 3.1 Program Groups Do Not Migrate to Windows NT 4.0"
permalink: /kb/141/Q141116/
---

## Q141116: Windows 3.1 Program Groups Do Not Migrate to Windows NT 4.0

{% raw %}

	Article: Q141116
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you upgrade Microsoft Windows version 3.1 or Windows for Workgroups version
	3.1x to Windows NT, some of your Program Manager groups may not be migrated.
	
	When you log on to the computer running Windows NT, the migration dialog box
	appears, giving you the option of migrating portions of the Windows or Windows
	for Workgroups environment to the newly installed Windows NT system. The
	Programs selection off the Start menu should display most of the Windows 3.1
	.grp files after migration. However, after choosing to migrate the settings,
	none of the program files appear on the Start menu.
	
	
	RESOLUTION
	==========
	
	To successfully convert your existing groups to Windows NT, click Start, click
	Run, and then type "grpconv -p" (without the quotation marks) in the Open dialog
	box.
	
	More detailed information regarding the Migration feature can be found in chapter
	5 of the Windows NT Deployment Guide.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: wfwg prodnt
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
