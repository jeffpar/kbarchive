---
layout: page
title: "Q128346: Error Messages Creating an Emergency Boot Disk"
permalink: /kb/128/Q128346/
---

## Q128346: Error Messages Creating an Emergency Boot Disk

{% raw %}

	Article: Q128346
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
	
	When you try to create a Windows 95 emergency boot disk during Windows 95 Setup,
	you receive the following error message:
	
	  Disk Initialization Error
	  Could not properly initialize the floppy disk that you inserted.
	  Error: Disk sector was not found.
	
	CAUSE
	=====
	
	The Mitsumi CD-ROM detection module in Windows 95 interferes with some floppy
	disk drives and floppy disk drive controllers.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Cold boot your computer (turn it off and on).
	
	2. Run the Setup program again.
	
	3. When you are prompted "Do you want Setup to look for all hardware?" click No,
	  then choose not to run the Mitsumi CD-ROM detection.
	
	4. After Setup is finished, use the Add New Hardware icon in Control Panel to
	  detect and install the Mitsumi CD-ROM drive.
	
	MORE INFORMATION
	================
	
	This problem has been reported to occur with the Promise 2300 EIDE controller.
	When the Mitsumi detection routine examines ports 170-177, the floppy disk drive
	fails until the computer is cold booted.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
