---
layout: page
title: "Q115321: File Manager Err Msg: The Destination Drive Is Full"
permalink: /kb/115/Q115321/
---

## Q115321: File Manager Err Msg: The Destination Drive Is Full

{% raw %}

	Article: Q115321
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy files to a floppy disk using File Manager, you receive the
	following error message:
	
	  The destination drive is full.
	  Insert a new disk to continue
	
	CAUSE
	=====
	
	Windows for Workgroups 3.1 and 3.11
	-----------------------------------
	
	This problem occurs under Windows for Workgroups 3.1 and 3.11 when the total file
	size exceeds the available space on the destination disk (so that a second disk
	is required to complete the copy procedure).
	
	When you check the files on the first disk, you find that the date and time
	stamps of all the files copied have been changed to reflect the current system
	date and time. Even if you cancel this procedure, the date and time stamps of
	those files copied to the first disk are modified.
	
	Windows 3.1 and 3.11
	--------------------
	
	This problem occurs under Windows 3.1 and 3.11 when the destination floppy disks
	contain the same directory name as the source directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.1 and 3.11
	and Windows for Workgroups versions 3.1 and 3.11. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: 3.10 3.11 retry cancel
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
