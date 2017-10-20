---
layout: page
title: "Q72166: Mouse Inactive in MS-DOS Apps After Exiting Windows 3.0"
permalink: /kb/072/Q72166/
---

## Q72166: Mouse Inactive in MS-DOS Apps After Exiting Windows 3.0

{% raw %}

	Article: Q72166
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0a, 3.1, 3.11 
	- Microsoft Mouse driver for MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Serial Mouse may not work after you exit Microsoft Windows version
	3.0 if the mouse is connected to a dedicated mouse port. This information
	applies to all versions of the Microsoft Serial Mouse and versions 7.0 through
	8.2 of the Microsoft Mouse driver for MS-DOS.
	
	WORKAROUND
	==========
	
	If the customer is using PC Tools, try to initialize PCSHELL with a /PS2 switch
	as follows:
	
	  pcshell /ps2
	
	If this doesn't work, continue with the troubleshooting steps in this article.
	
	MORE INFORMATION
	================
	
	This problem may occur even if the MS-DOS version of the mouse driver (MOUSE.COM
	or MOUSE.SYS) is correctly loaded into memory on the machine. A designated mouse
	port is reset upon entering a MS-DOS application. Upon exit, Windows performs a
	"soft reset," but some MS-DOS applications require a "hard reset" of the port.
	Consequently, the mouse isn't active in such an application even though the
	mouse driver software was installed in memory.
	
	Possible solutions to this problem are as follows:
	
	1. If you are using the Windows mouse driver version 7.04 (MOUSE.DRV, file size
	  3699 bytes) with PC Tools, call Central Point Software at (503) 690-8080 and
	  request the files FIXWIN.BAT and FIXMOUSE.COM. These files will generate a
	  hard reset on the mouse port.
	
	  NOTE: PC Tools is manufactured by a vendor independent of Microsoft. We make
	  no warranty, implied or otherwise, regarding this product's performance or
	  reliability.
	
	2. If you plug the mouse into the COM1 or COM2 serial port and the problem
	  disappears, there may be a problem with the mouse port other than
	  specifically the need for a hard reset. If you plug the mouse into the COM1
	  or COM2 serial port and the problem persists, continue with the steps below.
	
	3. In the subdirectory that contains the mouse driver, type "mouse" (without the
	  quotation marks). The message "Existing mouse driver enabled" is displayed.
	  This causes a hard reset of the mouse port, and the mouse should then work.
	
	4. Update your Windows MOUSE.DRV file to version 8.0 (file size 9216 bytes).
	  This reportedly corrects the problem in most cases, but there are known to be
	  exceptions. This file comes on the Microsoft Mouse version 8.0 driver update
	  disk. To obtain this disk, call Microsoft Sales Information Center (MSIC) at
	  (800) 426-9400.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbMouseSearch kbWin300a kbWin310 kbWin311
	Version           : :3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
