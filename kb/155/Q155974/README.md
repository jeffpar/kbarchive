---
layout: page
title: "Q155974: Hardware Profiles Have an Empty Description Line"
permalink: kb/155/Q155974/
---

## Q155974: Hardware Profiles Have an Empty Description Line

	Article: Q155974
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to edit your hardware profiles, there is an empty line in your list
	of available profiles.
	
	To see the list of available profiles:
	
	1. Right-click the My Computer icon and click Properties.
	
	2. On the Hardware Profiles tab, there is a list of available profiles.
	
	CAUSE
	=====
	
	There may be a problem in the PreferenceOrder setting of the registry. Look in
	the Registry in the subtree HKEY_LOCAL_MACHINE at the following subkey:
	
	  \SYSTEM\CurrentControlSet\Control IDConfigDB\ 
	  Hardware Profiles\<available profiles>\PreferenceOrder
	
	The PreferenceOrder of all available Profiles should be listed in a sequence. If
	there is a missing line in your list of available Profiles, one PreferenceOrder
	may be out of sequence.
	
	WORKAROUND
	==========
	
	Change the PreferenceOrder setting so that all PreferenceOrder settings are in
	sequence.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Control\IDConfigDB\Hardware Profiles\<list of
	  available profiles 000x>
	
	2. Select the profile to edit.
	
	3. Highlight PreferenceOrder (REG_DWORD).
	
	4. On the Edit menu, click Edit - DWORD.
	
	5. Change the data so that all profiles are in sequence.
	
	6. Click OK and quit the Registry Editor.
	
	7. Shut down and restart Windows NT.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
