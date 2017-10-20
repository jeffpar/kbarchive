---
layout: page
title: "Q96133: DoubleSpace Err Msg: 'Your Computer Might Be Running...'"
permalink: /kb/096/Q96133/
---

## Q96133: DoubleSpace Err Msg: 'Your Computer Might Be Running...'

{% raw %}

	Article: Q96133
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install DoubleSpace while running a version of SMARTDrive from a
	version of MS-DOS earlier than 6.0, the following dialog box appears:
	
	  Your computer might be running software that is incompatible with
	  DoubleSpace.
	
	  CAUTION: If you run DoubleSpace now, you could lose some or all of the files
	  on your computer.
	
	  Do not continue DoubleSpace until you have read the README.TXT file.
	
	WORKAROUND
	==========
	
	To install DoubleSpace and avoid this error message, make sure you are loading
	MS-DOS 6.0 SMARTDrive. The SMARTDrive command line in AUTOEXEC.BAT should look
	similar to the following:
	
	     c:\dos\smartdrv.exe
	
	Additional query words: 6.00 dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
