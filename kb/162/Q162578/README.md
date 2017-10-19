---
layout: page
title: "Q162578: Unable to Back Up from a Windows 95 Share to Windows NT"
permalink: /kb/162/Q162578/
---

## Q162578: Unable to Back Up from a Windows 95 Share to Windows NT

	Article: Q162578
	Product(s): Microsoft Windows NT
	Version(s): 1,2,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Windows NT backup utility to back up a client
	computer running Windows 95, either the summary text box of the backup status
	dialog box or the Backup.log file created by the backup may show the following
	error message:
	
	  You do not have permission to access portions of \<directory_name>.
	  Please see the owner or administrator to get permission. Error reading
	  alternate file data.
	
	CAUSE
	=====
	
	A directory on the root of the drive being backed up has the same name as the
	volume label for that drive.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following (each option is
	explained in further detail below):
	
	- Rename the volume label for the drive being shared.
	
	  -or-
	
	- Rename the directory in the root of the drive that has the same name as the
	  volume label.
	
	To Rename the Volume Label for the Drive Being Shared
	-----------------------------------------------------
	
	1. On the desktop, double-click the My Computer icon.
	
	2. Right-click the drive icon of the drive being shared.
	
	3. On the shortcut menu, click Properties.
	
	4. On the General tab, type a name in the Label text box; then click OK.
	
	To Rename the Directory of the Drive with the Same Name as the Vol. Label
	-------------------------------------------------------------------------
	
	1. On the desktop, double-click the My Computer icon.
	
	2. Double-click the drive icon that the directory is on.
	
	3. Right-click the directory to be renamed.
	
	4. On the shortcut menu, click Rename.
	
	5. Type the new name of the directory, and then press the ENTER key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: name directory folder prodnt
	
	======================================================================
	Keywords          : kbinterop kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1
	Version           : :1,2,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
