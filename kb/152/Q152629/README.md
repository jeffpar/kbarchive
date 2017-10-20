---
layout: page
title: "Q152629: Setup Requires Unusually Large Amount of Disk Space"
permalink: /kb/152/Q152629/
---

## Q152629: Setup Requires Unusually Large Amount of Disk Space

{% raw %}

	Article: Q152629
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
	
	Installing Windows 95 on a compressed hard disk may require an unusually large
	amount of disk space. Instead of the 40-90 MB that Setup usually requires, it
	may require up to 256 MB of free space.
	
	CAUSE
	=====
	
	This behavior can occur if the compressed hard disk has an estimated compression
	ratio (ECR) that is much higher than the actual compression ratio (ACR). Setup
	calculates the free disk space manually and converts its result to match the
	amount needed given the current ECR.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either or both of the following methods:
	
	- Free the amount of hard disk space Setup requests.
	
	- Change the ECR to match the ACR. For MS-DOS 6.0 and 6.2, use MS-DOS
	  DoubleSpace (Dblspace.exe). For MS-DOS 6.22, use MS-DOS DriveSpace
	  (Drvspace.exe).
	
	MORE INFORMATION
	================
	
	Windows 95 Setup does not use the free space information provided by DoubleSpace
	or DriveSpace. Instead, it determines the actual amount of free space on the
	hard disk and then applies a calculated compression ratio to the Windows 95
	files. The amount of hard disk space requested is the amount actually required
	adjusted to match the ECR.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
