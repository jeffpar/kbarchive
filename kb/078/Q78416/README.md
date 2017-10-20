---
layout: page
title: "Q78416: UNDELETE and Filename Containing a Dollar Sign (&#36;)"
permalink: /kb/078/Q78416/
---

## Q78416: UNDELETE and Filename Containing a Dollar Sign (&#36;)

{% raw %}

	Article: Q78416
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS 5 Upgrade UNDELETE command may appear to truncate the filename of a
	file being recovered at the point where a dollar sign ($) appears in the
	filename. The truncation only affects how the filename is displayed; the actual
	filename is not truncated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 5.0.
	
	MORE INFORMATION
	================
	
	When recovering a file whose name contains a dollar sign with the UNDELETE
	utility, the screen will display the number of undeleted files and how many may
	be recovered. It will also display the first filename with a question mark (?)
	substituted for the first letter. To undelete the file in question, press Y
	(yes). The next message will prompt for the first letter of the filename. It is
	here that the filename may truncate at the point where the dollar sign appears
	in the filename.
	
	When MIRROR is running, this problem will not be apparent because MIRROR will
	assign the missing first letter automatically from its log, and does not display
	the filename.
	
	Additional query words: 3rdparty 5.00 abbreviates abbreviated shortened
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	

{% endraw %}
