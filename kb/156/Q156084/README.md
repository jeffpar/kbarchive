---
layout: page
title: "Q156084: Windows NT 3.51 Does Not Have Updated Daylight Saving Time"
permalink: /kb/156/Q156084/
---

## Q156084: Windows NT 3.51 Does Not Have Updated Daylight Saving Time

	Article: Q156084
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Many European countries have changed the date on which they switch from daylight
	savings time to standard time; it was the last Sunday in September and is now
	the last Sunday in October. Windows NT 3.51 is currently configured to switch in
	September.
	
	RESOLUTION
	==========
	
	Follow these instructions to manually change from daylight saving time:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	1. Locate the time zone used in the registry:
	
	  a. Start Regedt32.exe.
	
	  b. In the HKEY_LOCAL_MACHINE subtree find the subkey:
	
	     SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones
	
	  c. In the list of time zones locate the one you are using by finding the one
	     that the value "Display" that matches the setting in Control
	     Panel/Date/Time.
	
	2. Modify the Time Zone Information:
	
	  a. Open the value TZI in your time zone key to get into the binary editor.
	
	  b. You should see binary information like this:
	
	     C4FFFFFF00000000C4FFFFFF000009000000050003000000000000000000030000000500020
	     0000000000000
	
	     The values "C4FFFFFF" are dependent on the offset from Greenwich time, so
	     you may see different values than those shown above.
	
	  c. On the first line, move the cursor to the vertical line between c and 10.
	     Change the character "9" right next to it to the character "A".
	
	  d. Click OK.
	
	3. To make the change effective, start the Date/Time tool in Control Panel,
	  change to a different time zone, click OK, and change back to your original
	  time zone.
	
	4. Verify that the change worked by examining the following registry value:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneinformation
	  StandardStart = REG_BINARY 00000A00050003000000000000000000
	
	  It is important that the third byte is an A.
	
	MORE INFORMATION
	================
	
	Below is a script for the Windows NT Resource Kit tool REGINI, which can help
	you automate this process. You have to customize the key name and values for
	your installation. Please note that the bytes in the REGINI script are ordered
	differently than showed by registry editor. After running the script you need to
	either go through step 3 above or reboot the computer.
	
	This sample is for the English version of Windows NT 3.51 running in the
	following time zone:
	
	(GMT+01:00) Berlin, Stockholm, Rome, Bern, Brussels, Vienna
	
	\Registry\Machine
	  Software
	     Microsoft
	        Windows NT
	           CurrentVersion
	              Time Zones
	                 W. Europe Standard Time
	                    TZI = REG_BINARY 0x2c
	
	0xFFFFFFC4                       0x00000000
	0xFFFFFFC4                       0x000A0000
	0x00050000                       0x00000003
	0x00000000                       0x00030000
	0x00050000                       0x00000002
	0x00000000
	
	\Registry\Machine
	  SYSTEM
	     CurrentControlSet
	        Control
	           TimeZoneinformation
	              StandardStart = REG_BINARY 0x10
	
	0x000A0000                       0x00030005
	0x00000000                       0x00000000
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
