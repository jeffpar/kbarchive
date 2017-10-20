---
layout: page
title: "Q103545: Cannot Choose Create New for Removable Media"
permalink: /kb/103/Q103545/
---

## Q103545: Cannot Choose Create New for Removable Media

{% raw %}

	Article: Q103545
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for
	commands and file names.
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	Due to the design of DoubleSpace, you cannot create new compressed
	drives on removable media such as floppy disks, optical drives with
	removable disks (called floptical drives), and Bernoulli disks.
	
	If you try to create a new compressed drive on a removable medium, you
	receive the following error message:
	
	  Drive <drive letter> is removable, so you cannot create a compressed
	  drive on it.
	
	You can, however, compress the existing data by running the
	DoubleSpace maintenance program and choosing Existing Drive from the
	Compress menu. You can also type "dblspace /compress <drive letter>" (without the quotation marks)
	at the MS-DOS command prompt and then
	press ENTER.
	
	MS-DOS 6.0 DoubleSpace incorrectly allows you to create new compressed
	drives on Bernoulli disks. This problem was corrected in MS-DOS 6.2.
	
	Additional query words: 6.20 6.2 6.22 diskette iomega
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
