---
layout: page
title: "Q154117: No Drive Letter When Using PC-Card Type III Slot"
permalink: kb/154/Q154117/
---

## Q154117: No Drive Letter When Using PC-Card Type III Slot

	Article: Q154117
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you have a computer with a PC Card type III slot and you start Windows NT
	3.51, there may not be a new drive letter and the hard disk does not appear in
	Disk Manager.
	
	When you start the PC Card tool that comes with the Windows NT Resource Kit and
	try to view the configuration of the PC Card, the following pop-up dialog box
	appears:
	
	  PCMCIA.SYS returned invalid configuration information.
	
	CAUSE
	=====
	
	The PCMCIA driver in Windows NT has no information on how to deal with a
	tertiary IDE channel and thus does not configure it for use by a driver.
	
	RESOLUTION
	==========
	
	Upgrade to Windows NT 4.0.
	
	-or-
	
	Obtain Service Pack 5 for Windows NT 3.51 (referenced below under STATUS) and
	then take the following steps:
	
	After you apply Service Pack 5, PCMCIA.SYS reports the device correctly and you
	can configure the settings for the use of ATDISK manually. Now that you have
	replaced the driver you should be able to see the configuration of the PC Card
	hard disk after reboot. It should have an I/O base of 0x160 and an available
	interrupt.
	
	WARNING: Using Registry Editor can cause serious, system-wide errors that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Open the Registry Editor (Regedt32.exe).
	
	2. Go to the following path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Atdisk
	
	3. On the Edit menu, click Add Key to create the following entry:
	
	  Key Name: PARAMETERS
	  Class: <blank>
	
	4. Open the PARAMETERS key that you created in Step 3.
	
	5. On the Edit menu, click Add Key to create the following entries
	
	  Key Name: X
	  Class: <blank>
	
	  where X is the number of the additional drive, such as 2 for the third drive.
	  For each additional drive, increment the Key Name by 1. Generally, you MUST
	  specify the starting parameter as 2 or higher. This is so that you do not
	  interfere with the primary or secondary controller that most BIOSes support.
	
	6. Select the key that you created in step 5; it should be named 2. Using the
	  Add Value option on the Edit menu, add the following three values:
	
	     Value Name   BaseAddress
	     Data Type    REG_DWORD
	     String       0x160
	
	     Value Name   DriveControl
	     Data Type    REG_DWORD
	     String       0x16E
	
	     Value Name   Interrupt
	     Data Type    REG_DWORD
	     String       <interrupt from the PCMCIA applet>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest Microsoft Windows NT U.S. Service Pack.
	For information on obtaining the Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 correctly configures a PC Card hard disk as a third IDE channel.
	Once you update your computer to Windows NT 4.0, you should remove the registry
	keys created in the steps above.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
