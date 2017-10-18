---
layout: page
title: "Q124250: ScanDisk Incorrectly Displays &quot;[&quot; as a Drive Letter in Err Msg"
permalink: kb/124/Q124250/
---

## Q124250: ScanDisk Incorrectly Displays &quot;[&quot; as a Drive Letter in Err Msg

	Article: Q124250
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ScanDisk displays the following error message:
	
	  There is not enough free space on drive [ to make any more repairs. Quit
	  ScanDisk, free some space on drive [, and then run ScanDisk again.
	
	MORE INFORMATION
	================
	
	The version of ScanDisk included with MS-DOS versions 6.2 and 6.22 does not
	correctly report the drive letter designation of an unmounted drive when
	attempting to make repairs on the drive if the drive has no free space. ScanDisk
	instead reports the drive letter as an opening bracket ([). If the drive is
	mounted, the drive letter is correctly stated in the error dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.2 and 6.22. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.20 6.22 left square bracket
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
