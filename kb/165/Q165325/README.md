---
layout: page
title: "Q165325: Cybex Switch Boxes Fails to Recognize Mouse After Upgrade"
permalink: /kb/165/Q165325/
---

## Q165325: Cybex Switch Boxes Fails to Recognize Mouse After Upgrade

{% raw %}

	Article: Q165325
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you upgrade Windows NT 4.0, the mouse which used to work in Windows NT
	3.51 no longer is recognized. The problem, according to CYBEX, is that Microsoft
	added a new parameter to the mouse detection.
	
	CAUSE
	=====
	
	Windows NT 4.0 and Windows95 loads (with the IntelliMouse mouse driver), a
	problem has been discovered on the XPAC and XPAB cards that are used within a 4x
	Peripheral configuration. The problem occurs on cards having a firmware revision
	earlier than C04. The PS/2 mouse attached to the 4xP may not operate properly
	with any of the attached computers running these new operating systems. When the
	IntelliMouse mouse driver is loaded in these systems they attempt to detect the
	new Microsoft IntelliMouse through a series of commands and parameters, one of
	which causes the XPAC/XPAB card to operate erratically.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	For systems running Windows NT 4.0: disable the support for the IntelliMouse
	wheel in the computer's registry:
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services
	  /i8042prt/Parameters/
	
	2. Select EnableWheelDetection, and from the Edit menu, click DWORD.
	
	3. Change the value to 0, and then click OK.
	
	4. Quit Registry Editor and restart your computer for this change to take
	  effect.
	
	MORE INFORMATION
	================
	
	For systems running Win95 (with IntelliMouse mouse driver) or for a permanent
	solution for Windows NT 4.0, you can contact Cybex technical support department
	at (205)430-4000 in order to instructions on how to upgrade the firmware on the
	XPAC or XPAB card in your 4xP.This is information is available for download at:
	
	  http://www.cybex.com
	
	NOTE: If you want to connect a Microsoft IntelliMouse to the 4xP, and be able to
	use the wheel button, you must use XPLU/LCI firmware revision C02 (or higher),
	and XPAC/XPAB firmware revision C04 (or higher).
	
	Additional query words: Cybex Mouse Intellimouse wheel
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
