---
layout: page
title: "Q64816: Mouse Hangs with Mouse Loaded in Multiple Virtual Machines"
permalink: /kb/064/Q64816/
---

## Q64816: Mouse Hangs with Mouse Loaded in Multiple Virtual Machines

{% raw %}

	Article: Q64816
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If more than one virtual machine (VM) runs the Microsoft mouse driver in 386
	enhanced mode, the mouse driver for the additional virtual machines returns
	error messages. In some cases, when you return to Windows, the mouse stops
	responding (hangs).
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Windows 3.0 in 386 enhanced mode without an MS-DOS-level driver present
	  (that is, without MOUSE.SYS or MOUSE.COM).
	
	2. In the Program Manager, start an MS-DOS command prompt. At the MS-DOS command
	  prompt, "type mouse.com" (without the quotation marks) and press ENTER. The
	  Microsoft mouse driver displays the message "Mouse driver installed."
	
	3. Type "exit" (without the quotation marks) to return to Windows. Windows then
	  sends a message to the MS-DOS screen about "Windows Pop-Up Program Support."
	
	4. In the Program Manager, start an MS-DOS command prompt again. At the MS-DOS
	  command prompt, run MOUSE.COM again (see step 2). The Microsoft Mouse driver
	  displays the message "Driver not installed -- interrupt jumper missing."
	
	5. Press ALT+TAB to return to Windows.
	
	  The mouse is frozen.
	
	6. Press ALT+TAB to return to the MS-DOS command prompt. Type "exit" (without
	  the quotation marks).
	
	  You can now use the mouse again.
	
	7. Repeat steps 4-6.
	
	  The mouse is frozen again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.0 and 3.0a.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: vm freezes 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
