---
layout: page
title: "Q131582: ThinkPad with PCMCIA Adapter Hangs in Protected Mode"
permalink: /kb/131/Q131582/
---

## Q131582: ThinkPad with PCMCIA Adapter Hangs in Protected Mode

	Article: Q131582
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you boot to a real-mode MS-DOS command prompt and install Windows 95 over
	an existing Windows 95 installation on an IBM ThinkPad computer, the computer
	stops responding (hangs) when you try to start Windows 95. This problem occurs
	only if you install Windows 95 from a network server and you are using a PCMCIA
	network adapter to access the network.
	
	CAUSE
	=====
	
	Accessing the network with a PCMCIA network adapter after booting to a MS- DOS
	command prompt will require real mode Card and Socket service drivers. When
	installing Windows95 over a previous installation, it will preserve the existing
	driver configuration.
	
	If the previous installation of Windows95 includes 32 bit PCMCIA card and socket
	services, and the computer is currently running real mode card and socket
	services, The setup program may hang during 1st boot due to a conflict between
	the real mode and 32 bit Card and Socket Services.
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, use either of the following methods:
	
	- Run Windows 95 Setup from the graphical user interface (GUI) rather than from
	  a real-mode MS-DOS command prompt.
	
	- Disable protected-mode PCMCIA support before installing Windows 95. To do so,
	  follow these steps:
	
	  1. Use the right mouse button to click My Computer, then click Properties on
	     the menu that appears.
	
	  2. Click the Device Manager tab.
	
	  3. Click the PCMCIA socket, then click Properties. Note that you may need to
	     expand a branch of the hardware tree by double-clicking the branch, or by
	     clicking the plus sign (+) to the left of the branch, before you can click
	     the PCMCIA socket.
	
	  4. Click the Original Configuration (Current) check box to clear it.
	
	  5. Click OK.
	
	If you have already installed Windows 95 over an existing Windows 95
	installation, use either of the following methods to resolve the problem:
	
	- Boot to an MS-DOS command prompt and disable the real-mode drivers for the
	  PCMCIA socket and network adapter. To do so, follow these steps:
	
	  1. Restart the computer. When you see the "Starting Windows 95" message,
	     press the F8 key. Then, choose Command Prompt Only from the Startup menu.
	
	  2. Remove all real-mode drivers and memory-resident programs for the PCMCIA
	     socket and network adapter from the CONFIG.SYS and AUTOEXEC.BAT files.
	
	  3. Restart the computer normally.
	
	- Start Windows 95 in Safe mode, and then disable protected-mode PCMCIA support
	  in Device Manager. To do so, follow these steps:
	
	  1. Restart the computer. When you see the "Starting Windows 95" message,
	     press the F5 key.
	
	  2. Use the right mouse button to click My Computer, then click Properties on
	     the menu that appears.
	
	  3. Click the Device Manager tab.
	
	  4. Click the PCMCIA socket, then click Properties. Note that you may need to
	     expand a branch of the hardware tree by double-clicking the branch, or by
	     clicking the plus sign (+) to the left of the branch, before you can click
	     the PCMCIA socket.
	
	  5. Click the Original Configuration (Current) check box to clear it.
	
	  6. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
