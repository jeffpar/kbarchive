---
layout: page
title: "Q84718: Redirecting a TSR May Leave File Handle Open"
permalink: /kb/084/Q84718/
---

## Q84718: Redirecting a TSR May Leave File Handle Open

{% raw %}

	Article: Q84718
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run a terminate-and-stay-resident (TSR) program and redirect the output
	to a file using a command similar to
	
	  TSR > file
	
	the file handle of the redirected file is not closed automatically by MS-DOS. In
	this case, you can run out of file handles if the TSR reinstalls itself each
	time it is invoked.
	
	MORE INFORMATION
	================
	
	When a program is executed, it inherits all the files its "parent" (usually
	COMMAND.COM) had open. At a minimum, this usually includes the file handles for
	the standard devices: STDIN, STDOUT, STDAUX, STDERR, and STDPRN.
	
	If the input or output of a program is redirected, MS-DOS opens the specified
	file(s) and redirects STDIN or STDOUT to the file specified before executing the
	program. The program will input and output information as normal, but anything
	read from STDIN or written to STDOUT will actually go to the specified file
	instead. The program is not aware of this redirection (and if the program does
	not use STDIN or STDOUT, the redirection will appear "fail").
	
	When the program exits, MS-DOS automatically closes the handles that were opened
	due to redirection. TSR programs stay resident instead of exiting, thus the
	redirected files are not closed automatically by MS-DOS. If MS-DOS closed file
	handles when a program terminates but stays resident, problems could occur if
	the TSR tried to use the file(s) at a later time.
	
	TSR programs can avoid this problem by closing file handle(s) when the TSR
	program is finished using them. For example, if the program has sent all its
	startup information to STDOUT and will not be using STDOUT in the future, the
	program can close STDOUT before terminating. If the program has read all
	necessary input from STDIN, close STDIN.
	
	Additional query words: 6.22 2.00 2.10 2.11 3.00 3.10 3.20 3.21 3.30 3.30a 4.00 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
