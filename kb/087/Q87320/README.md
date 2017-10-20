---
layout: page
title: "Q87320: Program Manager Limit on the Number of Items and Groups"
permalink: /kb/087/Q87320/
---

## Q87320: Program Manager Limit on the Number of Items and Groups

{% raw %}

	Article: Q87320
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11; winnt:3.1,3.5,3.51; :3.1
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows allows a maximum of 50 program items in a program group. In
	addition, Windows 3.1 allows a maximum of 40 program groups in Program Manager.
	In Windows 3.0 and 3.0a, there is no program group limit, other than the one
	imposed by the amount of available system resources. System resources can be
	determined by choosing About Program Manager from the Help menu in Program
	Manager.
	
	MORE INFORMATION
	================
	
	If a program group contains 50 items and you try to create an additional item,
	Windows generates the following group file error message:
	
	  This program group already contains the maximum number of items.
	
	The only options are to remove an item from the affected program group to make
	room for the additional item or to place the new item in another program group.
	
	If 40 groups already exist in Windows 3.1 and you try to create another group,
	you will receive the following group file error message:
	
	  You have created the maximum number of groups possible in Program Manager. To
	  create a new group you must first delete a group to make room.
	
	Or, Windows may put the new icons in the Main group, providing there are not 50
	items in the Main group already.
	
	Additional query words: 3.00 3.00a 3.10 3.11 limitation winnt
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWin3xSearch kbWinNT310Search kbWinNTW310Search kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11; winnt:3.1,3.5,3.51; :3.1
	
	=============================================================================
	

{% endraw %}
