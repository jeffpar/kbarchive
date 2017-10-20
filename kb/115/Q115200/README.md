---
layout: page
title: "Q115200: MS-DOS-Based Apps May Not Time-Slice Well Under WFWG 3.11"
permalink: /kb/115/Q115200/
---

## Q115200: MS-DOS-Based Apps May Not Time-Slice Well Under WFWG 3.11

{% raw %}

	Article: Q115200
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When 32-bit file access is enabled and 32-bit disk access is not, your computer
	does not accept keyboard input and then appears to stop responding (hang) in
	either an MS-DOS Prompt session or in an MS-DOS-based application. After you
	type a few characters, the machine appears to hang, and then the buffer empties,
	effectively pasting your text into the application very quickly.
	
	NOTE: Many machines are configured to behave this way (for example, those with
	disk drive controllers that are not Western Digital (WD) 1003 compatible and
	those using disk-compression schemes other than MS-DOS 6.2 DoubleSpace).
	
	CAUSE
	=====
	
	When 32-bit file access is enabled without 32-bit disk access being enabled,
	Windows for Workgroups 3.11 uses the real-mode mapper. Since the real-mode
	mapper presents a synchronous interface to 32-bit file access, it prevents other
	system events from occurring simultaneously with disk access. This problem
	occurs when a large amount of data has accumulated in the cache and must be
	flushed immediately because of a disk reset (CTRL+C) or critical error. During
	the time that the data is being written to the drive, other system events are
	ignored.
	
	Additional query words: dblspace 3.11 key board delay wait hang hung freeze frozen dump flush buffer virtual machine machines develop time-slice problems rmm
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
