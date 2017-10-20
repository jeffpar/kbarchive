---
layout: page
title: "Q112739: Error Renaming Expanded Directory When Running NetWare 3.x"
permalink: /kb/112/Q112739/
---

## Q112739: Error Renaming Expanded Directory When Running NetWare 3.x

{% raw %}

	Article: Q112739
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have Microsoft Windows set up to run with Novell NetWare or if Microsoft
	Windows for Workgroups is configured for additional network support with Novell
	NetWare (Workstation Shell 3.X), you cannot rename directories on the network in
	File Manager when any of the folders on the network drive are expanded to show
	subdirectories. If you try to do so, you receive the following error message
	(even if you have the correct access permissions):
	
	  File Manager cannot rename <directory name>. Access is denied.
	
	WORKAROUND
	==========
	
	To work around this problem, collapse all the folders on the network drive
	before renaming directories. If the directory you want to rename is not viewable
	when all directories are collapsed and you are running MS-DOS 6.0 or later,
	choose the MS-DOS Prompt icon and use the MOVE command to rename the
	directories.
	
	NOTE: Make sure the disk is not write-protected or full.
	
	STATUS
	======
	
	This problem does not occur when Windows or Windows for Workgroups is configured
	for Novell NetWare (Workstation Shell 4.0 and Above).
	
	Microsoft has confirmed this to be a problem in Microsoft Windows versions 3.1
	and 3.11 and Microsoft Windows for Workgroups version 3.11. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: 3.11 win 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
