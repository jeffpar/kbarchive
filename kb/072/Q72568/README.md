---
layout: page
title: "Q72568: Using Third Party Disk Partitioning Software with MS-DOS 5.0"
permalink: /kb/072/Q72568/
---

## Q72568: Using Third Party Disk Partitioning Software with MS-DOS 5.0

{% raw %}

	Article: Q72568
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS 5 Upgrade has the ability to directly upgrade partitions
	created by many third-party disk utilities. If Setup is unable to upgrade your
	partition, first look in the README.TXT file under "Disk Partitioning Software"
	for specific information. The message
	
	  Incompatible partition detected
	
	appears if the Setup program detects an incompatible partition.
	
	MORE INFORMATION
	================
	
	The following is information specific to using Disk Manager or Speedstor to
	access the hard drive:
	
	Disk Manager Device Drive DMDRVR.BIN
	------------------------------------
	
	You need a new version of DMDRVR.BIN if the Setup program detects and reports an
	incompatible partition. The Microsoft MS-DOS 5 Upgrade includes an updated
	version of this driver. If the Setup program is unable to upgrade your
	partition, look at the README.TXT file under the section titled "Incompatible
	hard-disk partitions" for instructions to install the new driver.
	
	Speedstor Device Driver SSTOR.SYS
	---------------------------------
	
	If the Setup program detects and reports an incompatible partition, you must use
	the updated Speedstor device driver included with the MS-DOS 5 Upgrade. However,
	if your system has Micro Channel architecture such as found in IBM PS/2
	machines, contact your vendor for an updated driver. For instructions on
	installing the updated device driver, look in the README.TXT file under the
	section titled "Incompatible hard-disk partitions."
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
