---
layout: page
title: "Q77888: Bitstream Facelift 1.0 Hangs with MS-DOS Shell Task Swapper"
permalink: /kb/077/Q77888/
---

## Q77888: Bitstream Facelift 1.0 Hangs with MS-DOS Shell Task Swapper

{% raw %}

	Article: Q77888
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
	
	When task swapping Bitstream Facelift version 1.0 through MS-DOS Shell, the
	screen will blank and the system will hang if the Facelift advanced installation
	options are not set correctly.
	
	Use the Bitstream Facelift FLSETUP.EXE program to ensure that the advanced
	options are set correctly.
	
	This information applies to Microsoft MS-DOS version 5.0.
	
	MORE INFORMATION
	================
	
	Bitstream Facelift is a screen/printer font package designed to work with
	WordPerfect versions 5.0 and 5.1.
	
	When Facelift is executed through Shell with the Task Swapper active, it will
	work properly. When the program is swapped from memory to disk the monitor
	blanks and the system hangs.
	
	To adjust the Facelift advanced options, do the following:
	
	1. Use the FLSETUP.EXE program that comes with the Facelift package. It will be
	  in the Facelift directory or on Facelift Utility Disk 1.
	
	2. From the disk or directory containing the file FLSETUP.EXE, type the
	  following command:
	
	  " flsetup /a" (without the quotation marks)
	
	  This will execute the Advanced Installation Options for Facelift.
	
	3. The following is a list of Options/Settings that will work correctly with
	  Shell:
	
	  Field                              Setting
	  -----                              -------
	
	  Number of times fonts remade:      0
	  Maximum temporary fonts:           32
	  Point size for graphics mode:      20
	  Use EMS:                           No   (Yes if EMS is used)
	  Terminate stay resident:           No
	  Hook DOS device drivers:           No
	
	4. Exit FLSETUP.
	
	Bitstream technical support has confirmed the above settings will work with
	MS-DOS 5.0 Shell.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 5.00 3rdparty lock-up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	

{% endraw %}
