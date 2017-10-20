---
layout: page
title: "Q110406: MS-DOS 6.2 Step-Up Fails with McAfee V-Scan"
permalink: /kb/110/Q110406/
---

## Q110406: MS-DOS 6.2 Step-Up Fails with McAfee V-Scan

{% raw %}

	Article: Q110406
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS 6.2 Step-Up may generate one of the following messages and fail if you
	try to run it on a system on which the McAfee V-Scan Checksum option /ag or /av
	has been used:
	
	  In order to run the MS-DOS 6.2 single-disk upgrade, you must already have
	  MS-DOS 6.0 installed on your system.
	
	  -or-
	
	  Cannot Update File. Setup could not update the following file to MS-DOS 6.2:
	
	  <filename>
	
	CAUSE
	=====
	
	The Checksum feature adds either 10 or 52 extra bytes to the size of executable
	files. The /ag switch adds 52 bytes to executable files and allows validation
	and recovery of infected files. The /av switch adds 10 bytes to the files and
	allows a validation check only. Either Checksum option may cause MS-DOS 6.2
	Step-Up to fail because Step-Up does not recognize the system and executable
	files it attempts to update.
	
	RESOLUTION
	==========
	
	The /ag option can be reversed by running the following command:
	
	  scan /rg
	
	The /av option can be reversed by running the following command:
	
	  scan /rv
	
	Disabling Checksum by using the above switches should return the files to their
	original sizes and allow MS-DOS Step-Up to upgrade the necessary files. If
	MS-DOS Step-Up still fails, recopy the MS-DOS 6.0 system files from the original
	MS-DOS 6.0 disks to the bootable partition of the hard disk drive. If this is
	not successful, a reinstallation of MS-DOS 6.0 may be necessary.
	
	MORE INFORMATION
	================
	
	For more information, contact McAfee Associates.
	
	The McAfee V-Scan is manufactured by McAfee Associates, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance and reliability.
	
	Additional query words: 6.20 Macafee mcaffee v-shield
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

{% endraw %}
