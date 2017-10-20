---
layout: page
title: "Q114363: Tools Group Contains Invalid Icon After Installing MS-DOS 6.21"
permalink: /kb/114/Q114363/
---

## Q114363: Tools Group Contains Invalid Icon After Installing MS-DOS 6.21

{% raw %}

	Article: Q114363
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install MS-DOS 6.21 Upgrade, you may have incorrect icons in the
	Microsoft Tools group in Windows or Windows for Workgroups.
	
	CAUSE
	=====
	
	Setup does not correctly create the Microsoft Tools group if the MS-DOS system
	that you are upgrading contains Microsoft Anti-Virus for Windows, Microsoft
	Backup, and Microsoft Backup for Windows, and you select the following options
	in MS-DOS 6.21 Upgrade:
	
	- No Anti-virus
	
	- No Undelete
	
	- Keep Existing Backup
	
	After Setup is complete, the Microsoft Tools group contains icons for both
	Microsoft Anti-Virus for Windows and Microsoft Backup for Windows even though
	Setup removed the Microsoft Anti-Virus for Windows program files.
	
	RESOLUTION
	==========
	
	To correct this problem, delete the Microsoft Anti-Virus for Windows icon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS Upgrade Setup version
	6.21. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: ms-dos-based windows-based mwav mwbackup msbackup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : MS-DOS:6.21
	
	=============================================================================
	

{% endraw %}
