---
layout: page
title: "Q130892: File Auditing Error in Windows NT 3.5"
permalink: /kb/130/Q130892/
---

## Q130892: File Auditing Error in Windows NT 3.5

	Article: Q130892
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting file auditing fails in Windows NT when you:
	
	1. Run User Manager and turn on auditing.
	
	2. Create a directory on a Windows NT file system (NTFS) partition.
	
	3. Create four or more subdirectories underneath the original directory.
	
	4. Select the third directory and deny access to everyone.
	
	5. Select the original directory and choose Auditing from the Security menu.
	
	6. Select Replace Auditing on Subdirectories, select Replace Auditing on
	  Existing Files, and select any events to audit.
	
	7. Choose the Add button and then add Administrator.
	
	8. Choose OK to begin auditing the directories.
	
	9. You choose Yes when the "Access denied. Do you wish to continue?" error
	  message appears.
	
	If you select any directory past the third directory to see if auditing has been
	turned on, you see that it has not.
	
	CAUSE
	=====
	
	There is a problem in ACLEDIT.DLL that causes auditing to STOP when access is
	denied while setting auditing on directories.
	
	WORKAROUND
	==========
	
	To work around this problem, manually choose the directories to be audited.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server version 3.5. This problem has been corrected in Windows NT Workstation
	and Windows NT Server version 3.51.
	
	Additional query words: prodnt auditing
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
