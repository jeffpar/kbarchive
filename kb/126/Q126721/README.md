---
layout: page
title: "Q126721: WTBackup Fails to Create Complete System Backup"
permalink: /kb/126/Q126721/
---

## Q126721: WTBackup Fails to Create Complete System Backup

{% raw %}

	Article: Q126721
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The WTBackup (version 1.13) tool that is shipped with the Corel SCSI package
	cannot perform a complete system backup of Windows 95 systems. WTBackup reports
	that it is unable to back up certain files that are busy. The following files
	are examples of files that may be listed as being busy:
	
	- CAB32.EXE
	
	- ADVAPI32.DLL
	
	- COMCTL32.DLL
	
	- GDI32.DLL
	
	- ICM32.DLL
	
	- KERNEL32.DLL
	
	- LINKINFO.DLL
	
	- MPR.DLL
	
	- MSNET32.DLL
	
	- LANGEXC.NLS
	
	CAUSE
	=====
	
	These are 32-bit files. Windows 95 opens many 32-bit files using extended file
	handles. Files opened in this manner cannot be recognized in the MS- DOS file
	system, which WTBackup uses to identify all open files. WTBackup displays the
	warning because it is unable to access those files opened with extended file
	handles.
	
	STATUS
	======
	
	This behavior is caused by new features included with Windows 95. Contact Corel
	about possible upgrades to the WTBackup tool.
	
	MORE INFORMATION
	================
	
	WTBackup is manufactured by Corel Systems Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: tape full
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
