---
layout: page
title: "Q166157: ERD Err: &quot;The following value in the setup information file&quot;"
permalink: /kb/166/Q166157/
---

## Q166157: ERD Err: &quot;The following value in the setup information file&quot;

{% raw %}

	Article: Q166157
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbother kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Windows NT Emergency Repair Disk (ERD), you may receive the
	following error message:
	
	  The Following value in the setup information file is corrupt or missing:
	
	  Value 0 on the line in section [Paths]
	  With key "systemPartition"
	
	NOTE: The above message may vary depending on which value is incorrect. Other
	value names may also include: TargetDirectory, TargetDevice, or
	SystemPartitionDirectory.
	
	CAUSE
	=====
	
	The message may be caused by incorrect entries in the Setup.log file on the ERD.
	Someone who has changed their system configuration, modified the Setup.log file,
	or is trying to use an ERD from another system can see the same error.
	
	RESOLUTION
	==========
	
	To resolve the problem, take the ERD to another computer and perform the
	following steps:
	
	1. Use File Manager, Explorer, or Attrib, and remove the Read-only attribute
	  from the file.
	
	2. Using any text editor, open the Setup.log file and look at the following
	  section:
	
	     [Paths]
	     TargetDirectory = "\WINNT"
	     TargetDevice = "\Device\Harddisk0\partition1"
	     SystemPartitionDirectory = "\"
	     SystemPartition = "\Device\Harddisk0\partition1"
	
	3. From the error message above, determine which line is causing the error
	  message, then edit that line using the information in step 2.
	
	4. Save the file back to the floppy disk and reflag it with the read-only
	  attribute. You can now continue with your repair process.
	
	-or-
	
	If you are not sure what the correct entries should be changed to on the ERD
	disk, try pressing ESC when prompted for an ERD disk and the system will search
	for the repair directory on the system drive. If the repair directory contains a
	valid Setup.log file, the repair process will continue without errors.
	
	Additional query words: ERD Emergency Repair
	======================================================================
	Keywords          : kbother kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
