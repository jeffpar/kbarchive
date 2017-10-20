---
layout: page
title: "Q88375: Testing Serial Plotter Connections"
permalink: /kb/088/Q88375/
---

## Q88375: Testing Serial Plotter Connections

{% raw %}

	Article: Q88375
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print from Microsoft Windows using serial communications (COM) ports,
	Windows does not detect error conditions on the printer. The communication
	process is one way.
	
	Steps to Test a Serial Plotter Connection
	-----------------------------------------
	
	To test whether a plotter is properly connected to a computer running Microsoft
	Windows, type the following at the MS-DOS command prompt:
	
	  echo sp1 ;pd 1000,1000 ;pu > comX:
	
	In the above command, "x" is the number of the serial port being used (for
	example, COM1).
	
	This test will activate the plotter, select pen 1, and draw a line down the
	length of the page.
	
	If this test does not work correctly, contact your dealer or hardware
	manufacturer for assistance. The following is a list of possible problems that
	will cause the plotter to not function properly:
	
	- Incorrect switch settings on plotter
	
	- Incorrect MS-DOS-mode settings
	
	- Interrupt conflict with another hardware device
	
	- Bad printer cable
	
	- Bad serial connection
	
	Additional query words: 3.00 3.10 3.11 tshoot dos mode comm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.1,3.11
	
	=============================================================================
	

{% endraw %}
