---
layout: page
title: "Q174162: WD97: Windows NT 4.0: Saving the AutoRecovery File Is Postponed"
permalink: kb/174/Q174162/
---

## Q174162: WD97: Windows NT 4.0: Saving the AutoRecovery File Is Postponed

	Article: Q174162
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you turn on the "Save AutoRecovery info every" option (on the Tools menu,
	click Options, and then click the Save tab), the following error message may be
	displayed when Word tries to do an AutoRecovery save:
	
	  Saving the AutoRecovery file is postponed for <filename.doc>
	
	NOTE: The "Save AutoRecovery info every" option is turned on by default.
	
	This error message will occur when all of the following conditions are true:
	
	- The Word document has previously been saved to a share on a Microsoft Windows
	  NT 4.0 primary domain controller (PDC), and the share is on a New Technology
	  File System (NTFS) partition.
	
	  -and-
	
	- Share permissions are set to User (Full Control), and NTFS permissions for
	  the share are set to Administrator (Full Control) and <local group
	  name> (Full Control).
	
	  -and-
	
	- You are logged onto a Windows NT 4.0 client machine, and you are a member of
	  either the local shared group or a global shared group which is a member of
	  the local shared group.
	
	  -and-
	
	- The "AutoRecover files" path points to a folder in a NTFS partition on the
	  client machine.
	
	CAUSE
	=====
	
	Word copied the security attributes of the saved document and applied them to
	the temporary file that is to become the latest AutoRecovery file. Word then
	attempts to rename the temporary file to:
	
	  AutoRecovery save of <filename>.asd
	
	The rename fails because the necessary permissions to rename the file are derived
	from the PDC local group, which is unknown on the client machine. The Save As
	command fails because a similar rename operation fails.
	
	For additional information about security permissions on an NTFS partition,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q169387 OFF97: Security Requirements When Using NTFS Partitions
	
	  Q178565 OFF97: Troubleshooting Office Programs Under Windows NT 4.0
	
	
	  Q100108 Overview of FAT, HPFS, and NTFS File Systems
	
	
	RESOLUTION
	==========
	
	To resolve this problem, install Microsoft Office 97 for Windows Service Release
	2 (SR2).
	
	To temporarily work around this problem, do one or more of the following:
	
	- Change the AutoRecovery path to a FAT partition.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q77535 WD: Setting the AutoSave-Path in Word
	
	  -or-
	
	- Make the user a member of Workstation\Administrators.
	
	  -or-
	
	- Add domain users to the directory permissions on the server, and give Domain
	  Users full access to the share.
	
	  -or-
	
	- Give existing global groups permissions for the directory.
	
	NOTE: For technical assistance in adding a member to a group or changing
	permissions for users, please contact Microsoft Technical Support for Windows NT
	4.0. For additional information on how to contact Microsoft Technical Support,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q102344 Microsoft Product Support Options Q&A
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Microsoft
	Office 97 for Windows Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	MORE INFORMATION
	================
	
	After you close Word, a temporary file may remain in the "AutoRecovery files"
	location specified on the File Locations tab (click Options on the Tools menu).
	Since Word copied the security attributes of the saved document and applied them
	to the temporary file, you may not have the necessary permissions to delete the
	temporary file.
	
	In addition, if you open a file from a shared folder on a Windows NT server (NTFS
	partition), you may be unable to save the file to your local folder on your
	client machine (NTFS partition). This problem may occur if either of the
	settings of Allow Fast Saves or Allow Background Saves (click Options on the
	Tools menu and then click the Save tab) are turned off. When you try to do this,
	you may receive the following error message:
	
	  Word cannot complete the save due to a file permissions error.
	
	Additional query words: qfe odma hang
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
