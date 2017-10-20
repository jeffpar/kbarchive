---
layout: page
title: "Q176989: Stop: C0000143 Caused by PCAnywhere"
permalink: /kb/176/Q176989/
---

## Q176989: Stop: C0000143 Caused by PCAnywhere

{% raw %}

	Article: Q176989
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After installing the product "PC Anywhere" and restarting, the following STOP
	blue screen error message is displayed:
	
	  STOP: c0000143
	  The required system file Display_driver.dll is bad or missing.
	
	CAUSE
	=====
	
	The AW_Host.sys file continually adds one or two AW_HOST key(s) to the registry
	when you restart the computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, first read and follow the steps from the following
	Microsoft Knowledge Base articles:
	
	  Q170397 STOP: 0XC0000143 Missing System File. Display_Driver.dll
	
	  Q162577 STOP: C0000143 Missing Display_Driver.dll
	
	If neither of these articles apply, you can try the following:
	
	- Install Windows NT Server 4.0 into a parallel installation. Delete the
	  AW_Host.sys file from the %systemroot% directory.
	
	For information on how to modify the registry of a secondary installation and
	disable services, refer to the following Microsoft Knowledge Base article:
	
	  Q165748 How to Disable a Service or Device that Prevents NT from Booting
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Use Regedt32 to change the following registry entries in the failing Windows NT
	%systemroot%\system32\config\system hive by following these steps:
	
	1. Run Regedt32 and load the System hive from the failing Windows NT
	  installation.
	
	  NOTE: This key will be called Your_name in the steps below. Substitute the
	  correct name for your computer. ControlsetXXX represents the controlset that
	  your machine boots from.
	
	  If this is an upgrade from Windows NT 3.51 to Windows NT 4.0, you need to load
	  the System.sav hive for editing. This is the hive file that is loaded during
	  the upgrade and then saved to System.
	
	  a. In the HKEY_LOCAL_MACHINE\Your_name\controlsetXXX\services\AW_HOST key,
	     change the value of Start:REG_DWORD: to 0x4.
	
	  b. In the HKEY_LOCAL_MACHINE\Your_name\controlsetXXX\services\awhost32 key,
	     change the value of Start:REG_DWORD: to 0x4.
	
	  c. In HKEY_LOCAL_MACHINE\Your_name\controlsetXXX\services\vgasave key, change
	     ImagePath to systemroot\system32\drivers\vga.sys.
	
	  d. In the HKEY_LOCAL_MACHINE\Your_name\controlsetXXX\services\vgasave\device0
	     key, change InstalledDisplayDrivers to vga.
	
	     NOTE: The above registry key is one path; it has been wrapped for
	     readability.
	
	  e. In the HKEY_LOCAL_MACHINE\Your_name\controlsetXXX\services\vgastart key,
	     change ImagePath to \systemroot\system32\drivers\vga.sys.
	
	  f. In the
	     HKEY_LOCAL_MACHINE\Your_name\controlsetXXX\services\vgastart\device0 key,
	     change InstalledDisplayDrivers to vga.
	
	     NOTE: The above registry key is one path; it has been wrapped for
	     readability.
	
	2. Select the Your_name hive, click Unload Hive from the Registry menu, and then
	  exit Regedt32.
	
	3. Copy the Vga.sys (%systemroot%\system32\drivers) from your parallel
	  installation to the original installation of Windows NT.
	
	4. Copy the Msgina.dll and Vga.dll (%systemroot%\system32) from the parallel
	  installation to the original installation of Windows NT.
	
	5. Shut down and restart your computer in your original Windows NT installation.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q229033 Programs That Replace Msgina.dll May Cause 'STOP 0x0000001E' Error
	  Message
	
	Additional query words: c143 Pcanywhere pcany
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
