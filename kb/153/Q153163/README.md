---
layout: page
title: "Q153163: Using MS-DOS Environment Variable as Command-Line Option"
permalink: /kb/153/Q153163/
---

## Q153163: Using MS-DOS Environment Variable as Command-Line Option

{% raw %}

	Article: Q153163
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an MS-DOS environment variable (such as %VARIABLE%) as a
	command-line option when you run a program (such as Notepad), you may receive
	the following message:
	
	  Cannot find the %VARIABLE%.txt file.
	
	  Do you want to create a new file?
	
	CAUSE
	=====
	
	Windows 95 interprets the environment variable as a file name because the
	percent (%) character is a valid character in a long file name in Windows 95.
	
	RESOLUTION
	==========
	
	To work around this behavior, use any of the following methods:
	
	- Use the following method to start the program:
	
	  1. Click the Start button, and then click Run.
	
	  2. Type the following command in the Open box
	
	  command.com /c <program.exe> %<variable>%
	
	     where <program.exe> is the program you want to run and
	     <variable> is the environment variable you want to use.
	
	- Create an MS-DOS batch file that starts the program with the command- line
	  variable set to the appropriate MS-DOS environment variable. Then, create a
	  shortcut to the batch file and use the shortcut to start the program.
	
	- Start an MS-DOS session and type the command at the command prompt.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
