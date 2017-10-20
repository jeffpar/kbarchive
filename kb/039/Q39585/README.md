---
layout: page
title: "Q39585: Correct Testing Precedence of Batch File ERRORLEVELs"
permalink: /kb/039/Q39585/
---

## Q39585: Correct Testing Precedence of Batch File ERRORLEVELs

{% raw %}

	Article: Q39585
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use multiple IF ERRORLEVEL statements in batch files, the order in
	which the ERRORLEVELs are tested numerically is important. The correct order is
	descending (highest to lowest). This ordering is from the way ERRORLEVELs are
	tested. The IF condition is set to TRUE when the ERRORLEVEL is equal to, or
	greater than, the ERRORLEVEL number.
	
	MORE INFORMATION
	================
	
	The following batch file fragment demonstrates this INCORRECT behavior:
	
	     rem (execute a program which returns an errorlevel of 0 or 1)
	     if errorlevel 0 goto ZERO
	     if errorlevel 1 goto ONE
	     goto END
	     :ZERO
	       echo a Zero was returned!
	       goto END
	     :ONE
	       echo a One was returned!
	     :END
	
	The above example always branches to the "ZERO" label, regardless of success or
	failure. This example would work correctly if the ERRORLEVEL testing was made in
	descending order.
	
	The CORRECT way to write such a batch file is as follows:
	
	     rem (execute a program which returns an errorlevel of 0 or 1)
	     if errorlevel 1 goto ONE
	     if errorlevel 0 goto ZERO
	     goto END
	     :ZERO
	       echo a Zero was returned!
	       goto END
	     :ONE
	       echo a One was returned!
	     :END
	
	Additional query words: 6.22 2.x 3.x 4.00 4.01 5.00 5.00a 6.00 6.20 \* yeswin4
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
