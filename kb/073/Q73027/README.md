---
layout: page
title: "Q73027: Reading MBF Files from QBasic"
permalink: /kb/073/Q73027/
---

## Q73027: Reading MBF Files from QBasic

{% raw %}

	Article: Q73027
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
	
	GWBasic files use Microsoft Binary Format (MBF). If a GWBasic file is read from
	a QBasic program, the information may be scrambled. This is because the QBasic
	interpreter uses IEEE format by default, which is incompatible with MBF format.
	
	To correctly read files created with GWBasic, use the /MBF switch when starting
	the QBasic editor. Exit the QBasic interpreter and then enter it again by typing
	the following at the command prompt:
	
	  " QBASIC /MBF " (without the quotation marks)
	
	For more information on IEEE and MBF formats, query on the following words:
	
	  " IEEE and MBF and Basic " (without the quotation marks)
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
