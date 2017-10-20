---
layout: page
title: "Q81536: Display of Multiple Instances of MS-DOS Programs in Task List"
permalink: /kb/081/Q81536/
---

## Q81536: Display of Multiple Instances of MS-DOS Programs in Task List

{% raw %}

	Article: Q81536
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows version 3.0 and 3.0a Task List displays a dot after the
	name of an application if there are multiple instances of that application
	running. The Windows 3.1 and later Task List does not display this dot; it
	displays the icon title for each instance of an application.
	
	MORE INFORMATION
	================
	
	To demonstrate this difference, perform these steps in each version of Windows:
	
	1. Choose the MS-DOS Prompt icon in Program Manager.
	
	2. Press ALT+TAB to return to Program Manager. Choose the MS-DOS Prompt icon
	  again.
	
	3. Press ALT+TAB to return to Program Manager. Open the Task List by pressing
	  CTRL+ESC.
	
	In Windows 3.0, the task list displays two MS-DOS prompts, both with the name
	"COMMAND." One of the prompts has a dot beside it, indicating there are multiple
	instances of the program running.
	
	Windows 3.1 Program Manager takes its information from the icon title. Multiple
	instances of the default "MS-DOS Prompt" appear with the title "MS- DOS Prompt"
	in the Task List. There is no dot to signify there are multiple instances; the
	Task List now displays the title under each icon.
	
	Example: Create an icon in Windows version 3.1 with the command line COMMAND.COM
	and the description Microsoft MS-DOS. If you run this program and run the
	default MS-DOS Prompt, the Task List displays "Microsoft MS-DOS" and "MS-DOS
	Prompt" as two separate programs. Windows version 3.0 displays these items as
	"COMMAND" and "COMMAND ."
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
