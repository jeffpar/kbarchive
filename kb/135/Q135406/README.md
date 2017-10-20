---
layout: page
title: "Q135406: Steps to Manually Remove and Reinstall a Printer Driver"
permalink: /kb/135/Q135406/
---

## Q135406: Steps to Manually Remove and Reinstall a Printer Driver

{% raw %}

	Article: Q135406
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrintingkbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When you remove a printer from the Printers folder or Print Manager, the printer
	driver file is not removed from the hard disk drive. This article describes a
	procedure you can use if you suspect that a printer driver file is corrupted.
	The following procedure removes and re-creates a printer so that the driver file
	is reinstalled.
	
	MORE INFORMATION
	================
	
	Windows XP
	----------
	
	Windows XP adds a user interface feature to delete driver files so the steps for
	Windows 2000 and earlier are no longer necessary. To delete printer driver files
	in Windows XP:
	
	1. Click Start, and then click "Printers and Faxes".
	
	2. On the File menu, click Server Properties.
	
	3. On the Drivers tab, click the printer driver that you want to delete, and
	  then click Remove.
	
	Windows 2000 and Earlier
	------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Remove the printer using the Printers folder in Windows NT 4.0/Windows 2000
	  or Print Manager in Windows NT 3.5x.
	
	2. In Windows NT 3.5x or 4.0, in Control Panel, double-click Services, and then
	  stop the Spooler service. In Windows 2000, in Control Panel, double-click
	  Administrative Tools, double-click Services, and then stop the Spooler
	  service.
	
	3. Run Registry Editor (Regedt32.exe) and go to the following subkey (note that
	  this is all one path, which has been wrapped for readability):
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\
	  Environments\Windows NT x86\Drivers\Version-x\<printer driver>
	
	NOTE: Version-1 is for Windows NT 3.51, Version-2 is for Windows NT 4.0,
	Version-3 is Windows 2000, and <printer driver> is the name of the printer
	you are removing.
	
	4. Note the values on the right and write down the file names.
	
	5. With the printer driver key selected, click Delete on the Edit menu.
	
	6. Go to the following directory and delete the printer driver files noted in
	  step 4:
	
	  %SystemRoot%\System32\Spool\Drivers\<Platform>
	
	NOTE: <Platform> is Intel, MIPS, Alpha, or PPC. See the following table to
	match the folder with the version of Windows for which you installed the printer
	driver:
	
	  w32x86\0 : Intel Windows NT 3.1 printer drivers
	  w32x86\1 : Intel Windows NT 3.5x printer drivers
	  w32x86\2 : Intel Windows NT 4.0 printer drivers
	  w32x86\3 : Intel Windows 2000 printer drivers
	  Win40\0 : Windows 95 printer drivers
	
	NOTE: If you are unable to delete the files and folders in the above directory
	structure after stopping the spooler service because of an error message that
	the files are in use (such as, Rasddui.dll), set the startup type for the
	Spooler service to Disabled, restart your computer, and then attempt to delete
	the files and folders again. After deleting the files, restore the Spooler
	startup to Automatic.
	
	7. In Windows NT 3.5x or 4.0, in Control Panel, double-click Services, and then
	  start the Spooler service. In Windows 2000, in Control Panel, double-click
	  Administrative Tools, double-click Services, and then start the Spooler
	  service.
	
	
	8. Shut down and restart Windows NT. Stopping and restarting the Spooler service
	  is not sufficient.
	
	9. Reinstall the printer using the Printers folder in Windows NT 4.0/Windows
	  2000 or Print Manager in Windows NT 3.5x.
	
	NOTE: In addition to the steps listed above, it may be necessary to delete the
	printer's associated unidriver (Rasdd.dll, Pscript.dll, or Plotter.dll). If
	printing has been initialized or if a process is using this file, it will be
	locked open and cannot be deleted. The file can be renamed or the system can be
	restarted to free up the driver. Refer to the Printer.inf file to see which
	unidriver is used by a particular printer.
	
	NOTE: For Windows NT on Dec Alpha platforms, follow the steps for the X86
	platform and replace all occurrences of the w32x86 directory with w32Alpha.
	
	Additional query words: uninstalling ntfaqmax win2000hotperf
	
	======================================================================
	Keywords          : kbprint kbPrinting kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinXPHome kbWinXPPro kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch
	Version           : :2000,3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
