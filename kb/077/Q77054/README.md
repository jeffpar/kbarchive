---
layout: page
title: "Q77054: Printing from an Invisible Network"
permalink: /kb/077/Q77054/
---

## Q77054: Printing from an Invisible Network

{% raw %}

	Article: Q77054
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:3.x,4.x,5.x,6.0; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are experiencing problems printing to to a network printer using an
	Invisible Network, the TRUNCATE command may help solve those problems.
	
	MORE INFORMATION
	================
	
	When you print to a network printer over the Invisible Network, print jobs are
	automatically queued in the network print spooler. These print jobs are handled
	in a "first-in first-out" method and will not print until the print spooler
	receives the entire job.
	
	The problem arises when the print job is large, or there is much activity on the
	network, and the print spooler does not know when the end-of-file is reached for
	that particular job. In this situation, the print spooler waits until it thinks
	it has the whole job or until the application is closed before the print process
	is carried out. With the TRUNCATE parameter set too low, the spooler may start
	printing the job before the entire job is received, resulting in scrambled
	output with another print job.
	
	With an Invisible Network, the wait period can be modified by using the following
	statement in the the AUTOEXEC.BAT file:
	
	  truncate xxx
	
	For example, TRUNCATE 10 cuts off the print stream after waiting 10 seconds to
	receive the entire print job. The value xxx can range from 1-250 seconds of
	waiting before the printer will start printing. The default for the TRUNCATE
	command is no print truncation at all; it will not cut off the print stream.
	
	According to Invisible Software technical support, a value of 10 is usually
	adequate for the print spooler to receive the job and continue the printing
	process. For word processing print jobs where the entire job is sent to the
	printer at once, TRUNCATE 1 is suggested. However, database print jobs should
	use a higher number for the TRUNCATE parameter because a database application
	may send some information to the printer, then search the data base for more
	information, send more data to the printer, and continue this process until the
	database criteria has fully been met.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 3.00 3.00a 3.10 3.11 3.x 4.x 5.00 6.00 6.20 6.21 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
