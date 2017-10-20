---
layout: page
title: "Q151540: Cannot Change Host Drive Letter in Windows 95"
permalink: /kb/151/Q151540/
---

## Q151540: Cannot Change Host Drive Letter in Windows 95

{% raw %}

	Article: Q151540
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change a host drive letter in DriveSpace or DriveSpace 3,
	the host drive may not change. There is no error message, and the change seems
	to work until after the computer restarts. This occurs after adding a hard disk
	or repartitioning existing hard disks so that the drive letter originally
	assigned to the host drive is now a physical drive.
	
	CAUSE
	=====
	
	DriveSpace is not correctly modifying the Drvspace.ini or Dblspace.ini file.
	
	RESOLUTION
	==========
	
	To correct this behavior, manually update the Drvspace.ini or Dblspace.ini file.
	To do so, follow these steps:
	
	1. Start an MS-DOS session. At the command prompt, change to the root directory
	  of the host drive (typically drive H).
	
	2. Type the following command, and then press ENTER:
	
	  " attrib -r -s -h *.ini " (without the quotation marks)
	
	3. Type the following command, and then press ENTER:
	
	  " dir d*.ini " (without the quotation marks)
	
	4. Edit either the Dblspace.ini or the Drvspace.ini file located in step 3.
	
	5. Locate the line that reads
	
	  ActivateDrive=<drive>,<cvf information>
	
	  where <drive> is the drive letter that requires changing, and <cvf
	  information> is typically C0.
	
	6. Change the <drive> letter in this line to the appropriate letter for
	  the host drive.
	
	7. Save and the close the file.
	
	8. Shut down and restart Windows 95.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
