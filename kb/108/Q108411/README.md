---
layout: page
title: "Q108411: Configuring IRQ of Future Domain 8xx SCSI Controller"
permalink: /kb/108/Q108411/
---

## Q108411: Configuring IRQ of Future Domain 8xx SCSI Controller

{% raw %}

	Article: Q108411
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the Future Domain 8xx SCSI controller operates with IRQ set to 1. If
	the adapter is configured to use a different interrupt, the corresponding
	registry entry needs to be changed manually.
	
	MORE INFORMATION
	================
	
	The Setup applet of the Future Domain SCSI adapter does not have a dialog box
	that you can use to change any settings for the adapter. All settings in the
	registry are automatically set to their default values. As a result of this, if
	the IRQ level of the adapter is set to a non-default value (such as any number
	other than five), the system will not start properly.
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Modify the value "DriverParameter:REG_SZ:IRQ=5" in the following way:
	
	1. Start Registry Editor (REGEDT32.EXE) and select the following subkey:
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Fd8xx
	  \Parameters\Device0
	
	2. Double-click the value DriverParameter:REG_SZ:IRQ=5.
	
	3. Enter the following string
	
	  IRQ=<value_nr>
	
	  where "<value_nr>" is the new value on which the controller operates
	
	4. Quit Registry Editor and restart Windows NT (or Windows NT Advanced Server).
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
