---
layout: page
title: "Q64510: Windows Err Msg: System Error, Cannot Read from Drive A:"
permalink: /kb/064/Q64510/
---

## Q64510: Windows Err Msg: System Error, Cannot Read from Drive A:

{% raw %}

	Article: Q64510
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you print to a port such as LPT1.OS2 or LPT2.OS2, you may receive the error
	message "Cannot Create File" in Microsoft Windows if the last drive accessed is
	no longer available. If the last drive accessed was a floppy disk drive, then
	you may receive the message "System Error, Cannot Read From Drive X:," where X
	is the name of the drive.
	
	For example, if the last drive that was accessed in Windows was drive A and there
	is currently no disk in drive A (or if the drive door is not shut) and you
	attempt to print to a file, you will receive the message "System Error, Cannot
	Read From Drive A:."
	
	It is necessary to access a valid drive before you print to a file or insert a
	disk (with enough disk space) into the drive in question before you select a
	print option.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
