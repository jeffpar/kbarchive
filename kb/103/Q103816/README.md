---
layout: page
title: "Q103816: Err Msg Swapping Disk on Floptical Drive: Invalid Disk..."
permalink: /kb/103/Q103816/
---

## Q103816: Err Msg Swapping Disk on Floptical Drive: Invalid Disk...

{% raw %}

	Article: Q103816
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change media on a Bernoulli SCSI floptical drive, you may receive the
	following error message:
	
	  Invalid disk change reading <letter>
	  Please insert volume <XXXXXXXX> serial 0070-06f4
	  Abort, Retry, Fail?
	
	where <XXXXXXX> contains random characters (if the disk has no label) or
	the label of the previous disk that was read.
	
	This problem can occur on floptical drives that support several different media
	(such as drives that support 21 MB, 1.44 MB, and 720K). If you alternate between
	uncompressed and compressed and 1.44-MB and 21-MB disks, you may receive the
	error message noted above.
	
	CAUSE
	=====
	
	This situation occurs because of a problem in the floptical device driver. The
	driver does not detect media changes when the disk does not have a volume serial
	number.
	
	RESOLUTION
	==========
	
	To work around this problem, ensure each disk has a volume serial number.
	
	All disks formatted with MS-DOS version 4.0 or later have a serial number;
	however, many pre-formatted disks do not.
	
	Additional query words: 6.22 6.20 floppy
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21
	
	=============================================================================
	

{% endraw %}
