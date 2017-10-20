---
layout: page
title: "Q71161: Appending Binary Files Using the COPY Command"
permalink: /kb/071/Q71161/
---

## Q71161: Appending Binary Files Using the COPY Command

{% raw %}

	Article: Q71161
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS allows you to append several binary files together using the COPY
	command. However, the target file that results is smaller than the sum of the
	source files.
	
	MORE INFORMATION
	================
	
	To append binary files, use the COPY command with the /b switch. The syntax is
	as follows:
	
	  copy <source1> /b + <source2> /b [....] <targetfile>
	
	  -or-
	
	  copy /b <source1> + <source2> [....] <targetfile>
	
	You can also combine several files into one by using wildcards. For example:
	
	  copy /b *.exe combin.exe
	
	Note: The /b switch is also useful when combining or appending ASCII files that
	contain embedded control characters.
	
	For more information, query on the following words:
	
	  " COPY and strip and EOF
	  COPY and concatenate
	  COPY and XCOPY and merge " (without the quotation marks)
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
