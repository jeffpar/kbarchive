---
layout: page
title: "Q76977: Plus Passport Hard Drive Appears As Two Drives to FDISK"
permalink: /kb/076/Q76977/
---

## Q76977: Plus Passport Hard Drive Appears As Two Drives to FDISK

{% raw %}

	Article: Q76977
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Plus Development Passport hard drive will appear as two physical hard drives
	when partitioned with the MS-DOS 5.0 FDISK command. However, you can use the
	entire drive as one partition under Microsoft MS-DOS version 5.0.
	
	MORE INFORMATION
	================
	
	The 40 MB Passport removable hard drive was developed before MS-DOS allowed for
	an extended DOS partition. At that time, users were limited to one 32 MB primary
	DOS partition and the Passport hard drive was incompatible with drivers such as
	Disk Manager. To allow you to use the entire 40 MB available on your drive, the
	Passport has the ability to appear as two physical drives. The drive controller
	then provides the translation.
	
	According to Plus Development technical support, the MS-DOS 5.0 FDISK command can
	create a 40 MB primary DOS partition on the first of the two physical drives
	reported by the Passport controller. The second drive will then appear as a disk
	of size 0. Note that FDISK will still report the extra physical drive; this is
	perfectly normal and has no ill effects.
	
	If you have a second drive of size 0, you can use the /1 switch on your Passport
	driver to eliminate the second drive. For more information on the /1 switch,
	contact Plus Development technical support.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 5.00 noupd 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
