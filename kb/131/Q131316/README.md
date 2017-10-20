---
layout: page
title: "Q131316: ErrMsg:&quot;Cannot Find VBRUN300.DLL&quot; on Installing Moving Wizard"
permalink: /kb/131/Q131316/
---

## Q131316: ErrMsg:&quot;Cannot Find VBRUN300.DLL&quot; on Installing Moving Wizard

{% raw %}

	Article: Q131316
	Product(s): Microsoft Product Support Information
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	The Microsoft Business Source Program includes distribution of the Moving
	Wizard, a tool that creates a customized moving guide for switching to Microsoft
	products. However, when you install the Moving Wizard you may receive the
	following error message:
	
	  Cannot Find VBRUN300.DLL
	
	CAUSE
	=====
	
	Because VBRUN300.DLL is required for the Moving Wizard Setup program to run
	successfully, this problem will occur if you do not have the file VBRUN300.DLL
	installed in your WINDOWS\SYSTEM directory.
	
	RESOLUTION
	==========
	
	The VBRUN300.DLL file is compressed on the Moving Wizard disk. You can use the
	file EXPAND.EXE, which is installed in the WINDOWS directory, to decompress
	VBRUN300.DLL from the Moving Wizard disk and to place it in the WINDOWS\SYSTEM
	directory.
	
	To do this, use the following steps:
	
	1. Insert the Moving Wizard disk in your floppy disk drive.
	
	2. At the MS-DOS command prompt, switch to your WINDOWS directory and type the
	  following command and press ENTER:
	
	  " expand <drive>:\vbrun300.dl_ c:\windows\system\vbrun300.dll "
	  (without the quotation marks)
	
	  where <drive> is the floppy disk drive containing the Moving Wizard disk
	  and where Windows is installed on your C drive and where the Windows System
	  directory is called WINDOWS\SYSTEM.
	
	This procedure will expand the file and copy it to the WINDOWS\SYSTEM directory.
	You can now install the Moving Wizard.
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	MORE INFORMATION
	================
	
	To find out more about the Microsoft Business Source Program, call (800)
	607-6872 (or 800-60SOURCE).
	
	Additional query words: error message errmsg
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
