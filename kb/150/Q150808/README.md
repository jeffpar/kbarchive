---
layout: page
title: "Q150808: Disabling Support for Unimodem Modems in Remote Access"
permalink: kb/150/Q150808/
---

## Q150808: Disabling Support for Unimodem Modems in Remote Access

	Article: Q150808
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Remote Access Service (RAS) includes support for Unimodem modems.
	If you attempt to use a device with RAS that is not supported by Unimodem, you
	may need to configure RAS to use the Modem.inf file instead of using Unimodem.
	
	MORE INFORMATION
	================
	
	To use the Modem.inf file instead of Unimodem in RAS, perform the following
	steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\RAS\Protocols
	
	2. On the Edit menu, click Add Value.
	
	3. Type the following values:
	
	  Value Name: EnableUnimodem
	  Data Type: REG_DWORD
	  Value: 0
	
	4. Quit Registry Editor and restart Windows NT.
	
	  NOTE: Once EnableUnimodem=0 is set in the registry, you have only the option
	  to select from the list of modems (Modem.inf) in RAS properties. You do not
	  have the Have Disk or Install Modem option. This behavior is by design.
	
	  If your modem does not appear in the list of modems, download the modem
	  manufacturer's latest .inf file to Modem.inf and place it in the
	  Winnt\System32\Ras folder, or add the settings to the existing Modem.inf
	  included with Windows NT. In either case, be sure to back up the original
	  Modem.inf file before making changes.
	
	5. Run the Network applet in Control Panel and choose the Services tab.
	
	6. Select Remote Access Service from the list of installed services and click
	  the Properties button.
	
	7. Remove any ports currently defined in the RAS Setup dialog box.
	
	8. Click the Add button and re-add the ports. RAS will now use the Modem.inf
	  file to retrieve initialization information for the devices you add.
	
	Additional query words: prodnt DISABLE
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
