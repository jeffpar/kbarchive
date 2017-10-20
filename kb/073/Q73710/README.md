---
layout: page
title: "Q73710: Multiple Instances of MS-DOS Shell Version 5.0 or Later"
permalink: /kb/073/Q73710/
---

## Q73710: Multiple Instances of MS-DOS Shell Version 5.0 or Later

{% raw %}

	Article: Q73710
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to create multiple instances of MS-DOS Shell. There are two ways
	to detect multiple instances:
	
	- Look in the temporary directory. Two files are created in this temporary
	  directory:
	
	  BBC6DOSC.BAT
	  DOSSHELL.SWP
	
	  Note: MS-DOS 6.0 creates just the DOSSHELL.SWP file.
	
	- Continue exiting until the command prompt gives another command prompt
	  immediately after you type the word EXIT.
	
	MORE INFORMATION
	================
	
	You can create multiple instances of MS-DOS Shell by using the following
	procedure:
	
	1. Start Shell by typing the following:
	
	  " DOSSHELL " (without the quotation marks)
	
	2. Execute the command prompt from the Main section of Shell.
	
	3. At the command prompt, type the following:
	
	  " DOSSHELL " (without the quotation marks)
	
	You are now in the second instance of Shell. Look in the temporary directory for
	the two above mentioned files. To exit both instances of Shell, do the
	following:
	
	1. Exit Shell by choosing Exit from the File menu.
	
	2. At the command prompt, type the following:
	
	  " EXIT " (without the quotation marks)
	
	3. Exit Shell by choosing Exit from the File menu.
	
	To verify that there are no more instances of the Shell, type the following at
	the command prompt:
	
	  " EXIT " (without the quotation marks)
	
	Additional query words: DOSSHELL 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
