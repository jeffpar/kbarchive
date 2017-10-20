---
layout: page
title: "Q136048: PC Gen: Running GIMPORT.EXE on Windows NT"
permalink: /kb/136/Q136048/
---

## Q136048: PC Gen: Running GIMPORT.EXE on Windows NT

{% raw %}

	Article: Q136048
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run GIMPORT.EXE in a Microsoft Windows NT MS-DOS command prompt, the
	program may display the following error message and then quit:
	
	  Error Adding .NME record. Out of Memory!
	
	CAUSE
	=====
	
	GIMPORT.EXE needs expanded and/or extended memory to run. The default MS-DOS
	Command prompt in Windows NT does not provide the required expanded or extended
	memory.
	
	RESOLUTION
	==========
	
	To create a MS-DOS Command prompt with available expanded or extended memory, a
	new .PIF file needs to be created. This can be done using the PIF Editor Applet
	in the Main group of Windows NT.
	
	To create a PIF file, follow the steps below:
	
	1. Open the PIF Editor from the Main group of Windows NT.
	
	2. Type in "CMD.EXE" (without the quotation marks) as the Program Filename.
	
	3. Type in "GIMPORT DOS prompt" (without the quotation marks) as the Window
	  Title.
	
	4. Save this file.
	
	5. Create an icon for this new PIF file in the Main Group.
	
	Use the icon you created in step 5 to open a command prompt to run GIMPORT.EXE.
	It should run normally in the new command prompt.
	
	MORE INFORMATION
	================
	
	For more information about the GIMPORT.EXE utility and how to obtain it, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
