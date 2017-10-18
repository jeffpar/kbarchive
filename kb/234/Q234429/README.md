---
layout: page
title: "Q234429: How to Manually Restore the Metabase When No Backup Exists"
permalink: kb/234/Q234429/
---

## Q234429: How to Manually Restore the Metabase When No Backup Exists

	Article: Q234429
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To restore the metabase, it is recommended that you use the Restore action in
	the Microsoft Management Console (MMC). However, if no backup of the metabase
	was ever created by the MMC, or if the MMC cannot be started because the
	metabase has been corrupted too badly, you can attempt to manually restore the
	metabase by using one of the methods described in the MORE INFORMATION section
	of this article.
	
	MORE INFORMATION
	================
	
	Note: You should back up the metabase regularly using the Backup action in the
	MMC.
	
	For information on how to back up and restore the metabase by using the MMC, see
	the IIS Readme file, located at
	http://localhost/iishelp/iis/htm/core/iisread.htm#general (assuming that the
	product documentation is installed on the local computer).
	
	If a Backup File Created by the MMC is Available
	------------------------------------------------
	
	If the Backup action in the MMC was used to create a backup file
	(<FileName>.md<BackupNumber>), but the MMC cannot be opened because
	the current metabase is corrupted, perform the following steps to manually
	restore the metabase from the <FileName>.md<BackupNumber> file.
	
	1. Stop all IIS services, and other services that rely on IIS (such as
	  third-party applications or Microsoft Site Server).
	
	  Note: To stop IIS and its dependent services, use the "NET STOP IISADMIN /Y"
	  (without the quotation marks) command. For additional information, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q236166 Using Net Stop and Net Start Commands to Force IIS Services to
	  Re-Read the Registry
	
	2. Rename the corrupted metabase file, Metabase.bin, to a new name such as
	  Metabase.bad. The Metabase.bin file is located in the
	  %SystemRoot%\System32\Inetsrv folder.
	
	3. Copy the MMC backup metabase file, <FileName>.md<BackupNumber>,
	  which is located in the %SystemRoot%\System32\Inetsrv\Metaback folder, to the
	  %SystemRoot%\System32\Inetsrv folder. Rename it to Metabase.bin.
	
	4. Restart the computer.
	
	If an Older Copy of the Metabase.bin File Exists
	------------------------------------------------
	
	If no backup file created by the MMC is available, but an older copy of the
	Metabase.bin file exists elsewhere (typically on a system tape backup), perform
	the following steps:
	
	1. Stop all IIS services, and other services that rely on IIS (such as
	  third-party applications or Microsoft Site Server).
	
	  Note: To stop IIS and its dependent services, use the "NET STOP IISADMIN /Y"
	  (without the quotation marks) command. For additional information, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q236166 Using Net Stop and Net Start Commands to Force IIS Services to
	  Re-Read the Registry
	
	2. Rename the corrupted metabase file, Metabase.bin, to a new name such as
	  Metabase.bad. The Metabase.bin file is located in the
	  %SystemRoot%\System32\Inetsrv folder.
	
	3. Copy the older copy of Metabase.bin file to the %SystemRoot%\System32\Inetsrv
	  folder.
	
	4. Restart the computer.
	
	If No MMC Backup or Older Copy of the Metabase.bin File Exists
	--------------------------------------------------------------
	
	If no backup file created by the MMC is available, and no older copy of the
	Metabase.bin file exists, a temporary backup of the metabase may still exist.
	
	When the metabase is updated through the MMC or another process, a temporary
	backup of the metabase may be created. If the update was interrupted (which is
	possibly the cause of the corruption in the first place), there is a chance that
	this temporary file may still exist.
	
	This temporary file is named either Metabase.bak or Metabase.bin.bak, and is
	located in the %SystemRoot%\System32\Inetsrv folder. If this temporary file
	exists, perform the following steps to attempt to restore the metabase:
	
	1. Stop all IIS services, and other services that rely on IIS (such as
	  third-party applications or Microsoft Site Server).
	
	  Note: To stop IIS and its dependent services, use the "NET STOP IISADMIN /Y"
	  (without the quotation marks) command. For additional information, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q236166 Using Net Stop and Net Start Commands to Force IIS Services to
	  Re-Read the Registry
	
	2. Rename the corrupted metabase file, Metabase.bin, to a new name such as
	  Metabase.bad. The Metabase.bin file is located in the
	  %SystemRoot%\System32\Inetsrv folder.
	
	3. Rename the temporary backup file (Metabase.bak or Metabase.bin.bak) to
	  Metabase.bin.
	
	4. Restart the computer.
	
	If No Metabase Backup File Exists
	---------------------------------
	
	If there are no backup files available of the metabase, the only way to restore
	IIS functionality is to do the following. Please note that all IIS settings
	stored in the metabase are lost, however.
	
	1. Uninstall the Windows NT Option Pack. For additional information, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q187870 How to Remove and Reinstall the Windows NT 4.0 Option Pack
	
	2. Uninstall Internet Explorer.
	
	3. Delete the Metabase.bin file from the %SystemRoot\System32\Inetsrv\ folder.
	
	4. Install Internet Explorer.
	
	5. Install the Windows NT Option Pack.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: meta base back up registry corruption hose hosed hung hangs freezes frozen Internet Service Manager ISM akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	Solution Type     : kbpending
	
	=============================================================================
	
