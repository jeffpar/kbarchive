---
layout: page
title: "Q105958: PC Ext: Display Command Does Not Work with External 3.2"
permalink: /kb/105/Q105958/
---

## Q105958: PC Ext: Display Command Does Not Work with External 3.2

{% raw %}

	Article: Q105958
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of Microsoft Mail for PC Networks, the External Mail program
	(EXTERNAL.EXE) does not display any string associated with the Display command
	in the script file.
	
	RESOLUTION
	==========
	
	Allow the display string to be shown, add a -Q1 parameter to the command line.
	The Display command is used within the script file to display a string of
	characters on the screen and in the log file. This command performs as
	documented in Mail version 3.0.
	
	For more information on the Display command, please see page 390 of the Microsoft
	Mail 3.2 "Administrator's Guide."
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
