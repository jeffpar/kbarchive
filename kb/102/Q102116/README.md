---
layout: page
title: "Q102116: How to Manually Delete Print Shares or Printers"
permalink: kb/102/Q102116/
---

## Q102116: How to Manually Delete Print Shares or Printers

	Article: Q102116
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	If you are troubleshooting Windows NT or applications that are running in
	Windows NT, you may need to verify that a print share or installed printer has
	been completely deleted. The following information shows the default locations
	in the registry database for references to installed printers or print shares in
	Windows NT versions 3.1, 3.5, 3.51 and 4.0.
	
	MORE INFORMATION
	================
	
	It is rarely necessary to remove a printer by altering the registry. In most
	cases, you can remove a printer in Print Manager or the Printer folder using the
	Remove or Delete Printer option. This immediately removes the printer, but
	internally the spooler marks the printer for deletion and does not actually
	delete the printer until the next time that the Spooler Service starts.
	Therefore, you should stop and restart the Spooler Service before attempting to
	recreate a printer, or before attempting to remove a printer port that a
	recently deleted printer was using. Also, you should close Print Manager or the
	Printers folder before restarting the Spooler.
	
	In summary, if you use the Print Manager or Printers folder to remove a printer
	or printer port, then close Print Manager or the Printers folder, stop and
	restart the Spooler Service. If you reopen Print Manager or the Printers folder,
	and the printer or port is still present, then you should consider removing the
	printer or port by altering the registry.
	
	NOTE: ALL references must be deleted to ensure complete removal of the print
	share or installed printer. You must also either Stop and Start the Spooler
	Service or shutdown and restart Windows NT for these changes to take effect.
	
	Modifying the Registry
	----------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run Registry Editor (regedt32.exe).
	
	2. Go to the appropriate registry location mentioned below for your version of
	  Windows NT.
	
	3. Delete the registry information for printer(s) and/or server(s) you want to
	  remove.
	
	  NOTE: It is recommended that you first save each registry key before you
	  delete it.
	
	The following registry paths apply to Intel-based (x86) computers. If you are
	running an Alpha-, MIPS-, or PPC-based computer, substitute the x86 portion of
	the entries below with the correct processor type (Alpha_AXP, R4000, or
	PowerPC). Text enclosed in angle brackets (<>) or presented in italics
	refers to machine- specific or printer names. "\\<server name>\Printer"
	refers to the universal naming convention (UNC) path to the specific print
	share.
	
	Windows NT 4.0
	--------------
	
	If the printer is installed locally (My Computer), the printer information is
	located in the following registry keys:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Environments\Windows
	  NT x86\Drivers\Version-2\<Printer Name>
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Printers\<Printer
	  Name>
	
	If the printer is installed as a network printer (Network printer server or
	\\<server name>), the printer information is located in the following
	registry keys:
	
	  HKEY_CURRENT_USER\Printers\Connections\<server name>
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\Servers\<server name>\Printers\<Printer Name>
	
	Windows NT 3.51
	---------------
	
	If the printer is installed locally (Create Printer), the printer information
	will be located in the following registry keys:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Environments\Windows
	  NT x86\Drivers\Version-1\<Printer Name>
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Printers\<Printer
	  Name>
	
	If the printer is installed as a network printer (Connect to Printer), the
	printer information is located in the following registry keys:
	
	  HKEY_CURRENT_USER\Printers\Connections\<server name>
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\Servers\<server name>\Printers\<Printer Name>
	
	Windows NT 3.5
	--------------
	
	If the printer was installed from Print Manager using the Connect To Printer
	option, the printer information will be located in the following keys:
	
	  HKEY_USERS\S-<user id number>\Printers\Connections\<server
	  name>\<Printer Name>
	
	  HKEY_CURRENT_USER\Printers\Connections\\<server name>\<Printer
	  Name>
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT\Current Version\Devices
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT\Current Version \PrinterPorts
	
	If the printer was installed from Print Manager using the Create Printer option,
	the printer information will be located in the following keys:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\Current Version\Print
	  Manager\Printers
	
	  HKEY_USERS\<SID Number>\SOFTWARE\Microsoft\Windows NT\Current
	  Version\Print Manager\Printers
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT\Current Version\Devices
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT\Current Version\Printer Ports
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Printers
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Environments\Windows
	  NT x86\Drivers\Version-1
	
	Windows NT 3.1
	--------------
	
	If the printer was installed from Print Manager using the Connect To Printer
	option, the printer information will be located in the following keys:
	
	  HKEY_USERS\S-<user id number>\Printers\Connections\<server
	  name>\<Printer Name>
	
	  HKEY_CURRENT_USER\Printers\Connections \\<server name>\<Printer
	  Name>
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Devices
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\Current Version\PrinterPorts
	
	If the printer was installed from Print Manager using the Create Printer option,
	the printer information will be located in the following keys:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\Current Version\Print
	  Manager\Printers
	
	  HKEY_USERS\<SID Number>\SOFTWARE\Microsoft\Windows NT\Current
	  Version\Print Manager\Printers
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Devices
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\Current Version\Printer
	  Ports
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Printers
	
	There may also be references to printers in other ControlSets, such as
	ControlSet001, but because this may be the Control Set for the Last Known Good
	Configuration, it should not be modified.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q135406 Steps to Manually Remove and Reinstall a Printer Driver
	
	NOTE: If you intend to manually remove a printer driver you must do so before
	manually removing the printer and shares, because the registry entry that is
	referenced in article Q135406 is deleted when you manually remove the printer
	and shares.
	
	
	Additional query words: troubleshoot trouble shoot tshooter tshoot uninstall System error 1801 has occurred
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
