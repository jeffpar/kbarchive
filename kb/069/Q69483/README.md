---
layout: page
title: "Q69483: Running SMARTDrive with Windows and Future Domain's LDRIVE.SYS"
permalink: /kb/069/Q69483/
---

## Q69483: Running SMARTDrive with Windows and Future Domain's LDRIVE.SYS

{% raw %}

	Article: Q69483
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Future Domain, SMARTDrive may be run with Future Domain's
	LDRIVE.SYS driver for its SCSI drive without risk of data loss if LDRIVE.SYS is
	loaded after SMARTDrive in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	LDRIVE.SYS is a third-party disk partitioning driver that addresses partitions
	larger than 32 MB. Microsoft generally recommends that SMARTDrive not be used
	when using third-party disk partitioning drivers that create a nonstandard
	MS-DOS environment. However, for bus mastering disk controllers such as SCSI
	drives, SMARTDrive provides double buffering of data that is important for
	Windows operation.
	
	Future Domain has tested this configuration extensively and supports running both
	these drivers concurrently, as long as the device line for SMARTDrive comes
	before LDRIVE.SYS in the CONFIG.SYS file. An alternative is to reformat and
	partition the hard drive with the MS-DOS FDISK program if this configuration is
	incompatible.
	
	This information has been supplied by Future Domain and has not yet been fully
	researched or tested by Microsoft. For more information, contact Future Domain
	technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding the products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty winmem smart drive disk-partitioning
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
