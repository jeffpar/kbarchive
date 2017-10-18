---
layout: page
title: "Q121292: DoubleSpace Conversion Dialog Box Points to Non-Existent CVF"
permalink: kb/121/Q121292/
---

## Q121292: DoubleSpace Conversion Dialog Box Points to Non-Existent CVF

	Article: Q121292
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS 6.22, the DoubleSpace conversion user interface mentions a DriveSpace
	compressed volume file (CVF) named "C:DRVSPACE.000." This file may not actually
	exist on your system.
	
	MORE INFORMATION
	================
	
	The C:\DRVSPACE.000 file listed in the Convert DoubleSpace dialog box of the
	DoubleSpace conversion user interface is intended to be an example of the CVF
	filename structure, not an actual CVF on your system. Above this dialog box, you
	may see the message "No DoubleSpace volumes were found."
	
	Help does not indicate that C:\DRVSPACE.000 is an example. This issue is
	encountered when there are no drives to convert on the system with DoubleSpace
	volume names.
	
	
	Additional query words: sample
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
