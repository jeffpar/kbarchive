---
layout: page
title: "Q168303: Masking IRQ's for PCMCIA Devices"
permalink: kb/168/Q168303/
---

## Q168303: Masking IRQ's for PCMCIA Devices

	Article: Q168303
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message in the system log of Event Viewer
	when you use a PC Card:
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Description: A device attached to the system is not functioning
	
	CAUSE
	=====
	
	This problem occurs when the PC Card attempts to use an IRQ that is already in
	use.
	
	RESOLUTION
	==========
	
	Windows NT does not provide a user interface to set a PC Card to a specific IRQ.
	Therefore, you must edit the registry to resolve this problem.
	
	NOTE: For these steps to work, you must already have Windows NT installed on the
	computer that has the PC Card connected to it.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Use Registry Editor to perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Pcmcia
	
	2. On the Edit menu, click Add Value.
	
	3. Add the following values:
	
	     Value Name:  InterruptMask
	     Data Type:   REG_DWORD
	     Data:        see note below
	     RADIX:       HEX
	
	  NOTE: The Data field will actually be a four digit hexadecimal number. To
	  determine the value of the data field you must know which IRQ's you are
	  trying to mask or hide. You must also know what the valid IRQ's are for this
	  card. You can use the Pcmcmd.exe command from the Support\Debug\i386
	  directory on the Windows NT 4.0 CD. Look for the IRQ Level Mask to get the
	  valid IRQ's for the card.
	
	  Each IRQ is represented by it's associated binary place holder 0 - 15. Each of
	  the four hexadecimal numbers in the Data field represent 4 binary digits of
	  the Interrupt Mask. So if we had a PCMCIA card that could take IRQ 11, 10, 9,
	  7, 5, and 3, the default InterruptMask would be f157. Also, if you wanted to
	  mask IRQ 5, you would set the 5th digit to 1 which could be achieved with a
	  DATA value of f177. This would look similar to the following table:
	
	  IRQ's:  15 14 13 12   11 10  9  8    7  6  5  4    3  2  1  0
	  VALUE:   1  1  1  1    0  0  0  1    0  1  1  1    0  1  1  1 = f177
	
	  A value of 1 in the mask makes the IRQ unavailable. A value of 0 leaves it
	  available. With the preceding example, the f of f177 masks IRQ's 12- 15, the
	  1 of f177 leaves IRQ 9, 10, 11, but masks 8. The middle 7 of f177 mask IRQ
	  4-6 and leaves 7 available, and the last 7 of f177 mask 0- 2 and leaves 3
	  available.
	
	4. Click OK, and then exit Regedt32.
	
	5. Restart the computer and the PC Card should no longer select IRQ 5.
	
	Additional query words: prodnt pccard hardware conflict
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
