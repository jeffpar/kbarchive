---
layout: page
title: "Q71630: Running an Application May Change MODE Setting of 43 or 50"
permalink: /kb/071/Q71630/
---

## Q71630: Running an Application May Change MODE Setting of 43 or 50

{% raw %}

	Article: Q71630
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can set the number of lines on a display by using the following MS-DOS MODE
	command
	
	  mode con lines = <n>
	
	where <n> is the number of lines on the display. Valid n values are 25, 43,
	and 50. If this command is used with n=43 or n=50, and another application is
	started, the number of lines may default back to 25 when the application is
	terminated.
	
	NOTE: This problem does not occur with Microsoft MS-DOS version 6.0.
	
	MORE INFORMATION
	================
	
	For example, this behavior occurs with the execution of MS-DOS Shell. When
	<n> is set to 43 and Shell is started, the number of lines on the screen
	changes to 25 within Shell. After Shell is ended and control is given back to
	MS-DOS, the number of display lines remains at 25 instead of returning to 43,
	which was set by the MODE command.
	
	This behavior may occur with certain applications because the application does
	not save the video state prior to starting the application. Thus, when the
	application is terminated, the MS-DOS line display state used may be the same as
	in the application or reset back to the default line number value of 25.
	
	A simple batch file with the following command lines can correct this occurrence
	(where <x> is the MODE line setting, such as 43 or 50):
	
	  test.bat <x>
	
	  <executable program>
	  mode con lines = %1
	
	The "%1" parameter will receive the <x> value of TEST.BAT.
	
	Additional query words: 4.0 4.00 4.01 5.0 5.00 5.0a 5.00a 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
