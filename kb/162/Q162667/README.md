---
layout: page
title: "Q162667: System Files on Floppy Disk May Have Incorrect Date and Time"
permalink: /kb/162/Q162667/
---

## Q162667: System Files on Floppy Disk May Have Incorrect Date and Time

{% raw %}

	Article: Q162667
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Format command in either Windows Explorer or My Computer to
	create a bootable floppy disk, the date and time stamp of all system files on
	the floppy disk reflects the date the disk was formatted.
	
	RESOLUTION
	==========
	
	To work around this behavior, format the disk by typing
	
	  " format a: /s " (without the quotation marks)
	
	from a command prompt. If the disk is already formatted and you want to transfer
	the system files (make the disk bootable), type:
	
	  " sys a: " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	When the system files are created using Windows Explorer or My Computer, some
	anti-virus programs may generate a checksum warning when these files are
	encountered.
	
	If you use a floppy disk with the incorrect date and time stamps to make the hard
	disk bootable, the incorrect date and time stamps are reflected on the system
	files copied to the hard disk.
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
