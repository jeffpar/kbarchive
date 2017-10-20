---
layout: page
title: "Q77216: Unable to Edit Shell Program with 23 Character Title"
permalink: /kb/077/Q77216/
---

## Q77216: Unable to Edit Shell Program with 23 Character Title

{% raw %}

	Article: Q77216
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
	
	When entering program information in the Microsoft MS-DOS 5.0 or later Shell Add
	Program box, entering more than 23 characters in the Program Title box will
	cause the computer to beep. You can save the program title, but when you later
	try to edit the program with a 23 character title, you will not be able to.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 5.0 and 6.0
	Shell. We are researching this problem and will post new information in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you choose Properties from the File menu, the program title is highlighted.
	You should be able to replace the highlighted title. However, when the title is
	23 characters long, you get a beep whenever you press a key (except for DELETE,
	BACKSPACE, INSERT, HOME, and END). When you press DELETE or BACKSPACE, you get a
	clear workspace, but pressing any key after that will cause a beep.
	
	Two workarounds for this problem are as follows:
	
	- Delete the program item in Shell that refers to the entry causing the problem
	  and create a new program item with a title less than 23 characters in length.
	
	- Delete any letter of the program title by pressing the HOME, END, or LEFT
	  ARROW key, then press DELETE. Choose OK to exit the Program Items Properties
	  dialog box and to save changes. From the File menu, choose Properties. You
	  can now edit the program item title.
	
	Additional query words: 5.00 5.00a 6.00 dos shell dosshell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
