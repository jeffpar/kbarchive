---
layout: page
title: "Q96958: Err Msg: Microsoft Defrag Will Not Run in Multitasking..."
permalink: /kb/096/Q96958/
---

## Q96958: Err Msg: Microsoft Defrag Will Not Run in Multitasking...

{% raw %}

	Article: Q96958
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an environment variable called WINDIR set when you run Microsoft
	MS-DOS Defragmenter (Defrag), you receive the following error message even if
	you are not running Windows:
	
	  Microsoft Defrag will not run in multitasking environments
	
	WORKAROUND
	==========
	
	If you are not running Windows, you can work around this problem by removing the
	environment variable from memory. To do this, type the following at the MS-DOS
	command prompt and then press ENTER:
	
	  " set windir= " (without the quotation marks)
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
