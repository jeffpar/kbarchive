---
layout: page
title: "Q130110: DriveSpace May Not Mount Removable Media Automatically"
permalink: /kb/130/Q130110/
---

## Q130110: DriveSpace May Not Mount Removable Media Automatically

{% raw %}

	Article: Q130110
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to access the DriveSpace volume on a compressed PCMCIA hard
	disk, compressed floppy disk, or other compressed removable media. Windows
	Explorer (or My Computer) may display only the host drive on a recently inserted
	media device.
	
	CAUSE
	=====
	
	DriveSpace does not automatically mount compressed removable media devices
	unless a compression driver is loaded in memory. If there are no compressed
	drives in your computer, the DriveSpace driver is not loaded until you run
	DriveSpace.
	
	RESOLUTION
	==========
	
	To mount the compressed volume on a removable media device, follow these steps:
	
	1. Start DriveSpace.
	
	2. Click the drive that contains the compressed volume.
	
	3. On the Advanced menu, click Mount.
	
	
	Additional query words: doublespace dblspace cvf automount
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
