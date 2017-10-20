---
layout: page
title: "Q114397: Setup Error Message Incorrectly Refers to IOSYS.HDR"
permalink: /kb/114/Q114397/
---

## Q114397: Setup Error Message Incorrectly Refers to IOSYS.HDR

{% raw %}

	Article: Q114397
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If MS-DOS 6.21 or 6.22 Upgrade Setup cannot find the files IOSYSA.HDR or
	IOSYSB.HDR, Setup displays the following error message:
	
	  Setup cannot continue because it cannot read the IOSYS.HDR file. (This file
	  should be located in the same directory as SETUP.EXE.)
	
	Although the error message is correct in that Setup cannot find a required file,
	it refers to a nonexistent file (IOSYS.HDR). The actual file Setup cannot find
	is either IOSYSA.HDR or IOSYSB.HDR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS 6.21 and 6.22 Setup. We
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	RESOLUTION
	==========
	
	To correct this problem, ensure IOSYSA.HDR and IOSYSB.HDR are in the same
	directory as SETUP.EXE.
	
	MORE INFORMATION
	================
	
	IOSYSA.HDR and IOSYSB.HDR contain the checksum and size information for the
	existing IO.SYS file. It provides a means for MS-DOS Setup to verify the version
	and integrity of the existing IO.SYS file.
	
	Each .HDR file can hold two different checksum/size pairs. IOSYS.HDR (from MS-DOS
	6.2 Step-Up) contains this information for the MS-DOS 6.0 and the MS- DOS 6.2
	IO.SYS files. MS-DOS 6.21 has to store information for more IO.SYS files so both
	IOSYSA.HDR and IOSYSB.HDR are used. IOSYSA.HDR holds information for the MS-DOS
	6.0 and 6.2 IO.SYS files and IOSYSB.HDR holds information for the MS-DOS 6.21
	IO.SYS files. MS-DOS 6.22 IOSYSB.HDR holds information for the MS-DOS 6.21 and
	6.22 IO.SYS files.
	
	Additional query words: stepup 6.22 6.20 verification
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622
	Version           : MS-DOS:6.21,6.22
	
	=============================================================================
	

{% endraw %}
