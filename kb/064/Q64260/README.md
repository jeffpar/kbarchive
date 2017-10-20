---
layout: page
title: "Q64260: Retaining an MS-DOS Prompt When Running a Batch File"
permalink: /kb/064/Q64260/
---

## Q64260: Retaining an MS-DOS Prompt When Running a Batch File

{% raw %}

	Article: Q64260
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run a batch file from the Microsoft Windows File Run command in Program
	Manager, you are returned to Windows after completion of the batch file. This
	happens whether you start the batch file from an icon or a PIF file. To remain
	at an MS-DOS prompt after the batch file has been executed, include COMMAND.COM
	as the last command in the batch file.
	
	MORE INFORMATION
	================
	
	Windows automatically closes the window upon exiting any program running under
	it. When you run a batch file from Windows, no matter how it is evoked, Windows
	considers it a program that is closed upon completion of the steps in the batch
	file. The only way to avoid returning to the Program Manager screen is to have
	the last command in the batch file start another copy of COMMAND.COM; then the
	virtual machine is maintained until that COMMAND.COM is exited.
	
	You do not have to type "EXIT" (without the quotation marks) twice to quit this
	virtual machine and return to the Program Manager. The first instance of
	COMMAND.COM is terminated upon completion of the batch file. Only the second
	instance of COMMAND.COM, the one started as the last command within the batch
	file, remains open until you type "EXIT" to return to Program Manager.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.11 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
