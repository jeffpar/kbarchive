---
layout: page
title: "Q135120: Configuration Backup Tool for Backing Up the Registry"
permalink: kb/135/Q135120/
---

## Q135120: Configuration Backup Tool for Backing Up the Registry

	Article: Q135120
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 95 CD-ROM contains a tool for making backups of the registry. This
	tool makes it easy to save up to nine backups of the registry. This article
	describes how to use this tool.
	
	MORE INFORMATION
	================
	
	The Configuration Backup tool (Cfgback.exe) and its Help file (Cfgback.hlp) are
	in the Other\Misc\Cfgback folder on the Windows 95 CD-ROM.
	
	You can run Configuration Backup directly from the CD-ROM, or you can copy the
	Cfgback.exe file to a folder on your hard disk. You must copy the Cfgback.hlp
	file to the Windows\Help folder on the hard disk to access Help.
	
	For instructions on running the Configuration Backup tool, please view the
	Creating A Backup, Restoring A Backup, and Deleting A Backup topics in the
	Configuration Backup online Help.
	
	Notes
	-----
	
	- The Configuration Backup tool does not run in Safe mode.
	
	- The Configuration Backup tool backs up the information stored in the
	  HKEY_LOCAL_MACHINE and HKEY_USERS trees in the registry. The other root keys
	  are not backed up because they are dynamic and can change even during a
	  single session.
	
	  This information is stored in files in the Windows folder. The files are named
	  Regback<x>.rbk, where the <x> is a number between 1 and 9. To see
	  which file is associated with a particular backup, look in the Regback.ini
	  file.
	
	- If you select the "Do not display this page in the future" check box, and you
	  later decide you want this screen back, edit the Regback.ini file and change
	
	  [StartWizard]
	  Show=0
	
	  to:
	
	  [StartWizard]
	  Show=1
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
