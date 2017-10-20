---
layout: page
title: "Q74734: Loading Programs Automatically into MS-DOS Shell Task List"
permalink: /kb/074/Q74734/
---

## Q74734: Loading Programs Automatically into MS-DOS Shell Task List

{% raw %}

	Article: Q74734
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
	
	You can automatically load applications into the MS-DOS Shell Active Task List
	upon starting Shell by adding the following line (exactly as shown in lowercase
	letters) to the DOSSHELL.INI file:
	
	  load=enabled
	
	This line should be inserted before the following line:
	
	  command=COMMAND
	
	MORE INFORMATION
	================
	
	The DOSSHELL.INI file includes information on each item that is created for the
	Main list in Shell.
	
	For example, to automatically load the item Command Prompt, add
	
	  load=enabled
	
	before the command line for the item
	
	  command=COMMAND
	
	in the DOSSHELL.INI file, as follows:
	
	          program =
	          {
	          load = enabled
	          command = COMMAND
	          title = Command Prompt
	          help = Starts the MS-DOS command prompt where you
	            can type any MS-DOS command.^m^mTo return to MS-DOS
	            Shell from the command line:^m^m1. Type exit^m2.
	            Press ENTER.^m^mRelated Topic^m   " More on
	            Command Prompt "~$129~
	          pause = disabled
	          shortcut = (none)
	          screenmode = text
	          alttab = enabled
	          altesc = enabled
	          ctrlesc = enabled
	          prevent = disabled
	      }
	
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
