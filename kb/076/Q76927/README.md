---
layout: page
title: "Q76927: Cannot Modify Label After Using Norton Safe Format"
permalink: /kb/076/Q76927/
---

## Q76927: Cannot Modify Label After Using Norton Safe Format

{% raw %}

	Article: Q76927
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a disk is formatted with Norton Utilities Safe Format (versions 4.5 through
	6.0) with a volume label specified, you may not be able to rename the volume
	label with the Microsoft MS-DOS version 5.0 LABEL command.
	
	MORE INFORMATION
	================
	
	If you use a label with Norton Utilities Safe Format, the MS-DOS 5.0 external
	LABEL command (LABEL.COM) cannot change or delete it unless the full syntax of
	the label is typed at the prompt (for example, LABEL B:MYDISK).
	
	In other words, if you enter only the LABEL command, the label cannot be changed
	or deleted although the command prompts you for a name. If you press ENTER to to
	delete the label name, the command carries out the action, but does not change
	the name. If you type a name, the following error message is displayed:
	
	  Cannot make directory entry
	
	You can use the Norton Utilities Volume Label command to rename the volume
	label.
	
	For more information, query on the following word here in the Microsoft Knowledge
	Base:
	
	  " LABEL" (without the quotation marks)
	
	The Norton product included here are manufactured by Symantec, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.22 3.3 4.00 4.50 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
