---
layout: page
title: "Q155000: Error Message: Sage Cannot Be Removed"
permalink: /kb/155/Q155000/
---

## Q155000: Error Message: Sage Cannot Be Removed

{% raw %}

	Article: Q155000
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you attempt to remove Microsoft Plus! for Windows 95, you may receive the
	following error message:
	
	  Sage cannot be removed because backups are missing or the wrong version.
	
	This error message may be followed by:
	
	  Microsoft Plus! for Windows 95 Setup was not completed successfully.
	
	CAUSE
	=====
	
	You are attempting to uninstall System Agent from a Windows 95 OEM Service
	Release 2 (OSR2) Installation.
	
	Microsoft Plus! Setup does not remove System Agent from Windows 95 OSR2
	installations.
	
	RESOLUTION
	==========
	
	Microsoft Plus! Setup uninstalls System Agent if the backup files are copied
	from a retail Windows 95 installation. If you have access to a retail Windows 95
	system, use the following steps to remove System Agent.
	
	NOTE: The following files are required. If Microsoft Plus! is installed on the
	retail Windows 95 system, the following files' extension will be .w95. File
	sizes are listed in bytes.
	
	  Windows\Scandskw.exe           4,608
	  Windows\System\Dskmaint.dll  189,456
	  Windows\Command\Scandisk.exe 134,738
	
	If you need to extract these files from the retail Windows 95 disks, they are
	located as follows:
	
	  File name      DMF disks      Non-DMF disks   CD-ROM
	  ----------------------------------------------------------
	  Scandskw.exe   Win95_09.cab   Win95_14.cab    Win95_09.cab
	  Dskmaint.dll   Precopy2.cab   Precopy2.cab    Precopy2.cab
	  Scandisk.exe   Disk 1         Disk 1          Win95 folder
	
	1. Rename the corresponding files in the Windows 95 OSR2 installation to a
	  different file extension (such as .old).
	
	2. Copy the retail Windows 95 files to the Windows 95 OSR2 installation with the
	  extension .w95.
	
	3. Run Microsoft Plus! Setup and remove System Agent.
	
	4. Rename the original Windows 95 OSR2 system files to their original file
	  extensions.
	
	NOTE: Failure to restore the original files may render ScanDisk unusable. For
	more information, please see the following Microsoft Knowledge Base article:
	
	  Q154998 Error Message: ScanDisk Cannot Check Drive
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	If a retail Windows 95 system is unavailable, you can prevent System Agent from
	loading by removing the SystemAgent string from the following registry key
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
	
	and the Plus! key from the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\ 
	  Uninstall\Plus!
	
	To reclaim disk space, delete the following System Agent files:
	
	  Windows\System folder: Sage.exe, Sage.vxd, Sage.dll.
	  Program Files\Plus! folder: Sagelog.txt, Sysagent.exe
	  Program Files\Plus!\System folder: Sage.dat, Sage.def
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! for Windows 95
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Microsoft Plus! Setup updates several system files, as well as ScanDisk, for
	DriveSpace 3. Setup does not overwrite these files but rather renames them with
	.w95 extensions so they can be restored.
	
	When you install Microsoft Plus! in Windows 95 OSR2, Setup does not replace
	Windows 95 OSR2 system files because they are more recent. Consequently, backups
	that would be generated for the files are not created.
	
	The uninstall process for System Agent includes restoring the original ScanDisk
	files, but the uninstall process does not work with OSR2 because the backup
	files were not created.
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbOPKSearch kbWin95 kbPlus95
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
