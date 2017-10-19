---
layout: page
title: "Q245135: Error Occurs While Windows NT Server 4.0 Setup Copies Files."
permalink: /kb/245/Q245135/
---

## Q245135: Error Occurs While Windows NT Server 4.0 Setup Copies Files.

	Article: Q245135
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Microsoft Windows NT Server 4.0 on your computer, you
	may receive the following error message during the text-based portion of the
	setup process:
	
	  Setup cannot set required Windows NT configuration information. This
	  indicates an internal setup error. Please contact your group or system
	  administrator.
	
	NOTE: This may occur after the Setup program has copied about 98 percent of the
	files to your hard disk.
	
	CAUSE
	=====
	
	This behavior can occur because of either a hardware defect or a virus.
	
	RESOLUTION
	==========
	
	To resolve this behavior, run some hardware diagnostic programs:
	
	1. Run the Chkdsk utility using the appropriate method:
	
	   - If Windows NT Server 4.0 is the only operating system installed on the
	     computer, run the Chkdsk utility from an MS-DOS startup disk.
	
	   - If the computer also has one or more different operating systems
	     installed, type the following command at a command prompt, and then press
	     ENTER:
	
	  chkdsk /f /r
	
	  NOTE: The /f option fixes any errors that the Chkdsk utility finds; the /r
	  option conducts a surface scan of the hard disk.
	
	2. Use a third-party hardware diagnostic program to check for any malfunctions
	  with the hard disk.
	
	3. Use a virus-scanning program to scan the hard disk for possible viruses.
	
	4. If applicable and possible, restore Windows NT Server 4.0 from a backup
	  copy.
	
	  NOTE: If this behavior persists after you run the diagnostic programs and
	  allow the programs to repair what they can, you may need to replace the hard
	  disk.
	
	Additional query words: chkdsk hardware
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
