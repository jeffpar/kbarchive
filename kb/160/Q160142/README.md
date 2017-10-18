---
layout: page
title: "Q160142: Printer Operators Cannot Create DLC Ports"
permalink: kb/160/Q160142/
---

## Q160142: Printer Operators Cannot Create DLC Ports

	Article: Q160142
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While logged in as a Print Operator, a user can create a printer and seems to
	create a DLC port for that printer. The following two scenarios may happen,
	depending on the version of Windows NT that is being used and whether the
	printer driver is already loaded on the system:
	
	Windows NT 3.51
	---------------
	
	If the printer driver was on the system, the printer installs and seems to work
	until the next time the system is shut down and restarted. After restarting, the
	printer status will show as unknown. The printer properties will be unavailable
	and the printer Security Permissions and Owner options will give the following
	error:
	
	  STOP
	  Cannot retrieve the security descriptor for this printer.
	
	If the printer driver was not already loaded for another printer, the following
	error will appear while loading the driver:
	
	  Noncritical Error
	  An error has occurred.
	
	  Setup was unable to set the security information for
	  C:\WINNT35\SYSTEM32\spool\DRIVERS\W32X86\RASDDU (off the screen)
	  You may continue (ignoring the error), retry the operation, or exit Setup.
	  If you choose to ignore the error, Setup may not be able to completely and/or
	  correctly install the software. If you exit, you will have to repeat the
	  Setup process from the beginning.
	
	  Ignore Retry Exit Setup
	
	If the system is restarted, the security descriptor error will also happen as
	described above.
	
	Windows NT 4.0
	--------------
	
	The printer and port will seem to install and work fine but, as above, when the
	system is shut down and restarted, the port disappears. The printer will state
	that it "Failed to open, retrying," and the following event will be logged:
	
	  Event 1040
	  Source hpmon
	  Type Warning
	
	  Description Updating the registry failed (0x5). Make sure HP Monitor can
	  access the registry.
	
	CAUSE
	=====
	
	Printer Operators can create printers but do not have sufficient access to the
	registry to create new printer ports.
	
	Print Operators are also unable to create an LPR port. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q140084
	  TITLE : Permissions Error Creating an LPR Printer
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Have the Administrator create the port before the Printer Operator creates a
	  printer.
	
	  -or-
	
	- Use the following steps to modify the default registry permissions to give
	  Print Operators the ability to create a DLC port.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  1. Log on to the computer as an Administrator and run Regedt32.exe.
	
	  2. Go to the following registry location:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print
	
	  3. Select the Monitors key under the Print key.
	
	  4. On the Security menu, click Permissions.
	
	  5. Click Add, and then select the Print Operators group; set the Type of
	     Access to Full Control and then click OK.
	
	  6. Click the Replace Permissions on Existing Subkeys option, and then click
	     OK.
	
	  7. Stop and then restart the Spooler service.
	
	Print Operators will now be able to add a DLC Port.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
