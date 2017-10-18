---
layout: page
title: "Q168711: How To Move a DHCP DB from WinNT 3.51 to new WinNT 4.0 Computer"
permalink: kb/168/Q168711/
---

## Q168711: How To Move a DHCP DB from WinNT 3.51 to new WinNT 4.0 Computer

	Article: Q168711
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to move a Dynamic Host Configuration Protocol (DHCP)
	database from a Windows NT 3.51 server computer to a new Windows NT 4.0 server
	computer.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	From the Windows NT 3.51 source server:
	
	1. In Control Panel, double-click the Services icon. On the Services tab, select
	  the Microsoft DHCP Server, and then click Stop. This stops the DHCP Server
	  service.
	
	2. Select the Microsoft DHCP Server, and then click Startup. Change the value to
	  Disabled, and then click OK. This prevents the DHCP Server service from
	  running after you restart the computer.
	
	3. Copy the DHCP directory tree (%SystemRoot%\System32\Dhcp) to a temporary
	  location on the new (destination) Windows NT 4.0 DHCP server computer. For
	  example, copy the directory tree to C:\Temp\System32\Dhcp.
	
	  NOTE: The following two steps are optional on the source server. You may want
	  to wait until the new Windows NT 4.0 DHCP server is functional before
	  completing these steps.
	
	4. Remove the DHCP directory (%SystemRoot%\System32\Dhcp).
	
	5. In Control Panel, double-click the Network icon, and then click the Services
	  tab. Remove the DHCP Server service.
	
	On the new Windows NT 4.0 DHCP server computer:
	
	1. In Control Panel, double-click the Network icon. Click the Services tab, and
	  add the Microsoft DHCP server. Click OK, and then restart the computer when
	  prompted.
	
	2. Once you have restarted, open Control Panel, and then double-click on the
	  Services icon. Stop the DHCP Server service.
	
	3. Rename the %SystemRoot%\System32\Dhcp directory to
	  %SystemRoot%\System32\Dhcporiginal. (once the below steps are completed, and
	  the DHCP server is running, this directory may be deleted)
	
	4. Create a new DHCP directory on the Windows NT 4.0 DHCP server computer, and
	  then copy the DHCP directory tree from the temporary directory to
	  %SystemRoot%\System32\Dhcp (to replace the DHCP directory that was renamed in
	  the previous step).
	
	5. Delete the System.mdb file.
	
	6. Start Windows NT Registry Editor (Regedt32.exe).
	
	7. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     SYSTEM\CurrentControlSet\Services\DHCPServer
	
	8. Click Configuration.
	
	9. From the Registry menu, click Restore.
	
	10. Select %SystemRoot%\System32\Dhcp\Backup\Dhcpcfg.
	
	11. When the warning appears, click Yes.
	
	12. Exit Registry Editor.
	
	13. Start the DHCP service.
	
	14. Start the DHCP Manager.
	
	NOTE: After you restart the DHCP server computer you will receive a message that
	the database needs to be updated. You will then be asked if you want to update.
	Once the update is complete you will not be able to use this database file on
	the Windows NT 3.51 computer again.
	
	Additional query words: update upgrading migrate ntdhcp
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	
