---
layout: page
title: "Q78847: SHIFT+F9 Gives MS-DOS Prompt, &quot;Command Prompt&quot; Item Disabled"
permalink: /kb/078/Q78847/
---

## Q78847: SHIFT+F9 Gives MS-DOS Prompt, &quot;Command Prompt&quot; Item Disabled

{% raw %}

	Article: Q78847
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS version 5.0 or later Shell allows you to access the command prompt
	several ways without exiting Shell. For example, you can:
	
	- Execute the Command Prompt item in the main group.
	
	- Use the SHIFT+F9 key combination.
	
	- Highlight COMMAND.COM in the file list and press ENTER (or just double-click
	  on the file with a mouse)
	
	If pressing SHIFT+F9 shells to a command prompt but the Command Prompt item
	doesn't work, either change the entry in the Program Item Properties Commands
	text box from COMMAND to %COMSPEC%, or use the full drive, path, and filename of
	COMMAND.COM in the Commands text box.
	
	MORE INFORMATION
	================
	
	In Shell, SHIFT+F9 runs the copy of COMMAND.COM referenced by the COMSPEC
	environment variable. This variable is set when loading the initial copy of
	COMMAND.COM on bootup. If the Command Prompt item is changed to run %COMSPEC%
	instead of COMMAND, the Command Prompt item will also execute the COMMAND.COM
	referenced by COMSPEC.
	
	By default, the Commands text box in the Program Item Properties dialog box for
	the Command Prompt item is a single word: COMMAND. When the item is executed,
	the word gets changed to "@command", and placed into a batch file that is then
	run. If multiple releases of COMMAND.COM exist on the disk, the COMMAND.COM file
	accessed may be a non MS-DOS 5.0 release and therefore unusable. If COMMAND.COM
	is not in a directory included in the PATH environment variable, a COMMAND.COM
	file may not be found.
	
	Periodically, COMMAND.COM needs to be reloaded into memory. MS-DOS uses the
	COMSPEC variable to determine where to reload COMMAND.COM. For more information
	on this process, see the section titled "Transient and resident memory" on page
	385 of the version 5.0 "Microsoft MS-DOS 5.0 User's Guide and Reference."
	
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}
