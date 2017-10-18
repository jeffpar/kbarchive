---
layout: page
title: "Q235496: Enabling a Memory.dmp File Capture Using the GUI or the Registry"
permalink: kb/235/Q235496/
---

## Q235496: Enabling a Memory.dmp File Capture Using the GUI or the Registry

	Article: Q235496
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to enable a Memory.dmp file capture using the
	graphical user interface (GUI) of Windows NT or by making changes to the
	registry.
	
	MORE INFORMATION
	================
	
	To enable Windows NT to capture a Memory.dmp file, you must be able to gain
	access to the GUI or the registry file. Use the appropriate method to enable
	Windows NT to capture a Memory.dmp file.
	
	Method 1: Enabling a Memory.dmp File Capture Using the GUI
	----------------------------------------------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  System.
	
	2. On the Startup/Shutdown tab in the Recovery section, you can choose from the
	  following options:
	
	   - Write an event to the system log
	     This option is enabled by default in Windows NT Server 4.0 Service Pack 4
	     or later. If the computer stops responding, an event is written to the
	     system log, which you can view using Event Viewer. For example:
	
	  Event ID: 1001
	  Source: Save Dump
	  Description: The computer has rebooted from a bugcheck. The bugcheck was:
	  0xc000021a (0xe1270188, 0x00000001, 0x00000000, 0x00000000). Microsoft
	  Windows NT (v15.1381). A dump was saved in: C:\Winnt\Memory.dmp.
	
	   - Send an administrative alert
	     This option performs a net send command and sends an alert over the network
	     to the administrator.
	
	   - Write debugging information to
	     This option enables the capture of a dump file. It also specifies the
	     location to store the dump file (the default location is the
	     %SystemRoot%\Memory.dmp folder).
	
	     NOTE: Although you can redirect the Memory.dmp file to another drive or
	     partition, you must have sufficient space on the partition. When a save
	     dump operation is performed, the contents of kernel mode address space are
	     temporarily stored in the page file on the system partition and are then
	     moved to the alternate location when the computer is restarted. For
	     Windows NT to write a memory dump, the paging file on the system drive
	     must be large enough to hold all of physical RAM plus 1 megabyte (MB).
	
	   - Overwrite an existing file
	     If you choose this option, a new Memory.dmp file overwrites a previous
	     Memory.dmp file (which conserves disk space).
	
	   - Automatically reboot
	     If you choose this option, the computer is restarted after a bugcheck
	     occurs.
	
	Method 2: Enabling a Memory.dmp File Capture Using the Registry
	---------------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You may encounter situations when you cannot gain access to the GUI of Windows
	NT. Use the appropriate method to capture a Memory.dmp file using the registry.
	
	For Computers Using the FAT File System:
	
	1. Boot from an MS-DOS disk.
	
	2. Locate the %SystemRoot%\System32\Config folder (%SystemRoot% is the name of
	  the folder in which you installed Windows NT).
	
	3. Locate the System file (without any extension) and copy it to a disk.
	
	4. Insert the disk into the drive of another Windows NT-based computer, and then
	  start Registry Editor (Regedt32.exe).
	
	5. Ensure the HKEY_LOCAL_MACHINE hive is selected.
	
	6. On the Registry menu, click Load Hive.
	
	7. Locate the System file, and then click Open.
	
	8. The Load Hive dialog box appears. In the Key Name box, type a temporary name
	  (for example, "test" (without the quotation marks)), and then click OK.
	
	9. A key named Test appears. This is a copy of your System hive from the other
	  Windows NT-based computer.
	
	10. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\TEST\ControlSet001\Control\Crash Control
	
	11. On the right-hand side of the screen, the following values that correspond
	  to the GUI interface are displayed:
	
	  Value Name: AutoReboot
	  Data Type: REG_DWORD
	  Data: 0|1 (Disabled|Enabled)
	
	  Value Name: CrashDumpEnabled
	  Data Type: REG_DWORD
	  Data: 0|1 (Disabled|Enabled)
	
	  Value Name: DumpFile
	  Data Type: REG_EXPAND_SZ
	  Data: %SystemRoot%\Memory.dmp (location to save the dump file)
	
	  Value Name: LogEvent
	  Data Type: REG_DWORD
	  Data: 0|1 (Disabled|Enabled) Logs an event to the System log when a crash
	  occurs
	
	  Value Name: Overwrite
	  Data Type: REG_DWORD
	  Data: 0|1 (Disabled|Enabled) Overwrites an existing dump file
	
	  Value Name: SendAlert
	  Data Type: REG_DWORD
	  Data: (Disabled|Enabled) Sends an administrative alert
	
	12. After you make the appropriate changes, copy the updated System file back to
	  the %SystemRoot%\System32\Config folder on the original computer.
	
	For Computers Using the NTFS File System:
	
	Because of the security features in the file system, you cannot simply copy the
	file, make changes, and then copy the file back to the computer. To gain access
	to the file system, you must perform a parallel installation of Windows NT. A
	parallel installation puts another copy of the operating system in another
	folder, which allows you to gain access to the file system. After the parallel
	installation is finished, use the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Ensure the HKEY_LOCAL_MACHINE hive is selected.
	
	3. On the Registry menu, click Load Hive.
	
	4. Locate the %SystemRoot%\System32\Config folder on the original installation
	  of Windows NT, click the System file, and then click Open.
	
	5. The Load Hive dialog box appears. In the Key Name box, type an appropriate
	  temporary name (for example, "test" (without the quotation marks)). A key
	  named Test appears. This is the System hive from the other installation of
	  Windows NT.
	
	6. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\TEST\ControlSet001\Control\Crash Control
	
	7. On the right-hand side of the page, the values that correspond to the GUI
	  interface are displayed. Make and save the appropriate changes.
	
	8. Restart your original installation of Windows NT.
	
	For Remote Computers:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. On the Registry menu, click Select Computer, and then type the name of the
	  remote computer.
	
	3. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\CrashControl
	
	4. On the right-hand side of the page, the values that correspond to the GUI
	  interface are displayed. Make and save the appropriate changes.
	
	5. Quit Registry Editor, and then restart the computer.
	
	REFERENCES
	==========
	
	For additional information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	Q130536 Windows NT Does Not Save Memory Dump File After a Crash
	
	Q141468 Additional Pagefile Created Setting Up Memory Dump
	
	Q174630 Windows NT Restarts Continuously with Blue Screen
	
	Q244139 Windows 2000 Feature Allows a Memory.dmp File to Be Generated
	[ntrelease]
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
