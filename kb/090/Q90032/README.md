---
layout: page
title: "Q90032: PRB: COPY FILE Command Gives &quot;File Access Denied&quot; Error"
permalink: /kb/090/Q90032/
---

## Q90032: PRB: COPY FILE Command Gives &quot;File Access Denied&quot; Error

{% raw %}

	Article: Q90032
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.5x 2.6x | 2.5x 2.6x 3.00
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the COPY FILE command is used to copy a file, a "File access denied" error
	occurs.
	
	CAUSE
	=====
	
	The destination filename is not specified in the COPY FILE command.
	
	RESOLUTION
	==========
	
	Specify the fully qualified pathname for the destination file.
	
	MORE INFORMATION
	================
	
	To copy the TEST.PRG file from the C:\FOXPRO2 directory to the C:\PROGRAM
	directory, enter the following command in the Command window:
	
	     COPY FILE C:\FOXPRO2\TEST.PRG TO C:\PROGRAM\TEST.PRG
	
	Omitting the filename, as follows
	
	     COPY FILE C:\FOXPRO2\TEST.PRG TO C:\PROGRAM
	
	causes a "File access denied" error message to appear. FoxPro interprets the
	PROGRAM directory as the name of a file and it is unable to open that directory
	as a file.
	
	Additional query words: VFoxWin FoxDos FoxWin 2.50 2.50a errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300
	Version           : 2.00 2.5x 2.6x | 2.5x 2.6x 3.00
	
	=============================================================================
	

{% endraw %}
