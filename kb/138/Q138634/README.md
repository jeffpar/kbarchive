---
layout: page
title: "Q138634: Error Message: Modem is Busy or Not Responding"
permalink: kb/138/Q138634/
---

## Q138634: Error Message: Modem is Busy or Not Responding

	Article: Q138634
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you try to dial by using Online Registration, HyperTerminal, or MSN, The
	Microsoft Network, you may receive the following error message:
	
	  Modem is busy or not responding.
	
	CAUSE
	=====
	
	You may receive the error message if any of the following conditions are true:
	
	- The port is being controlled by another communications program.
	
	- The port settings are in conflict with another device.
	
	- The registry contains incorrect or damaged communications settings.
	
	RESOLUTION
	==========
	
	If the port is being controlled by another communications program, close the
	other communications program.
	
	This situation usually occurs when a 16-bit program is open (possibly minimized).
	The only way that multiple programs can use the port is for the controlling
	program and the requesting program to be TAPI aware. The TAPI specification
	allows for the controlling program to relinquish control of the port to the
	requesting program.
	
	If the port settings are in conflict with another device, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel on
	  the menu that appears.
	
	2. In Control Panel, double-click the Systems icon.
	
	3. In Systems Properties, click the Performance tab, and then click Graphics.
	
	4. In Advanced Graphics Settings, move the Hardware acceleration slider to None.
	
	By default, COM1 and COM3 use IRQ4, while COM2 and COM4 use IRQ3. If another
	device is sharing the IRQ of the port, you need to change the IRQ of the
	conflicting device. Hardware conflicts can also occur with the I/O address of
	the COM port. The 8514a video chip or its clones (S3 chip set) on some video
	cards create a conflict with COM4 because they use the same address of 02E8.
	
	If the Windows 95 Registry contains incorrect or corrupt communications settings,
	follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel on
	  the menu that appears.
	
	2. In Control Panel, double-click the Modems icon.
	
	3. In Modems properties, click the modem, and then click Properties.
	
	4. Click the General tab, and then click the Only Connect At This Speed check
	  box to clear it.
	
	5. Click the Connection tab, and then click the Disconnect A Call If Idle check
	  box to clear it.
	
	6. Click Advanced, and then click the Use Flow Control check box to clear it.
	
	7. Click OK or Close until you return to Control Panel.
	
	If you are having problems with a Compaq modem, contact Compaq to inquire about
	obtaining a file that may correct this problem. Follow the instructions in the
	Readme.txt file included in this file.
	
	If you still receive the "Modem is busy or not responding" error message after
	you complete these troubleshooting tips, follow these steps.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Make a copy of your registry by typing the following command at an MS-DOS
	  prompt:
	
	  " CD\<windows folder> (where <windows folder> is the name of your
	  Windows folder)
	  ATTRIB -R -A -S -H System.dat
	  COPY System.dat SYSTEM.PSS
	  ATTRIB +R +A +S +H System.dat " (without the quotation marks)
	
	2. On the Desktop, click the Start button, and then click Run.
	
	3. In the Open box, type "Regedit" (without the quotation marks).
	
	4. In Registry Editor, double-click each of the following items:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Class\Modem\ 
	     0000\Settings
	
	5. Under Name, using the right mouse button, click FlowControl_Hard, and then
	  click Modify on the menu that appears. In Edit String, delete the data under
	  Value data.
	
	6. Under Name, using the right mouse button, click InactivityTimeout, and then
	  click Modify on the menu that appears. In Edit String, delete the data under
	  Value data.
	
	7. Under Name, using the right mouse button, click SpeedNegotiation_On, and then
	  click Modify on the menu that appears. In Edit String, delete the data under
	  Value data.
	
	  NOTE: Do not delete the Value name; delete only the Value data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: win95 wincomm awfax ras wintapi rna modem dun
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
