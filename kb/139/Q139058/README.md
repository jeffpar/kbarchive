---
layout: page
title: "Q139058: Battery Shutdown Signal Delayed Using Windows NT UPS Service"
permalink: kb/139/Q139058/
---

## Q139058: Battery Shutdown Signal Delayed Using Windows NT UPS Service

	Article: Q139058
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbenv kbhw kbui kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer runs Windows NT with an uninterruptable power supply (UPS) and
	the Windows NT UPS service installed and a power failure occurs, the UPS service
	initiates the Windows NT shutdown. One of the following symptoms occur when the
	battery shutdown signal is sent to the battery and the battery shuts down and
	turns off the computer:
	
	- Windows NT shuts down and then restarts or has already rebooted again before
	  the UPS turns off the computer.
	
	  -or-
	
	- Windows NT shuts down just in time when the computer turns off.
	
	  NOTE: This is not a problem.
	
	  -or-
	
	- Windows NT is still in the process of shutting down when the computer turns
	  off.
	
	CAUSE
	=====
	
	The length of time the UPS waits before turning off the computer, also called
	the Shutdown Wait, is hard coded to two minutes.
	
	The UPS service has no way of knowing exactly when the shut down of Windows NT is
	complete, because the UPS service runs in User Mode.
	
	WORKAROUND
	==========
	
	To customize the Shutdown Wait period to your computer, install the fix
	mentioned below and change your registry as follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Ensure that you have the following three options enabled in Control Panel UPS
	  and that the UPS device has the capability to perform these options:
	
	  - Power Fail Signal
	  - Low Battery Signal
	  - Remote UPS Shutdown
	
	2. Run Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\UPS
	
	4. From the Edit menu, choose Add Value.
	
	5. Add the following:
	
	  Value Name: ShutdownWait
	  Data Type: REG_DWORD
	  Data: <0 to 600 seconds>
	
	  NOTE: The default wait time is still two minutes.
	
	6. Choose OK and quit Registry Editor.
	
	7. Shut down and restart Windows NT.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbhw kbui kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
