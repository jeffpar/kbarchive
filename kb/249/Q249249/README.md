---
layout: page
title: "Q249249: How to Migrate from an Alpha Computer to an Intel Computer"
permalink: /kb/249/Q249249/
---

## Q249249: How to Migrate from an Alpha Computer to an Intel Computer

{% raw %}

	Article: Q249249
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article is an overview of how to migrate an Alpha-based primary domain
	controller (PDC) to an Intel-based PDC, including information on how to migrate
	the WINS and DHCP database like the existing shares and Access Control lists
	(ACLs). A prerequisite is the use of a backup domain controller (BDC).
	
	This article contains no information on how to migrate programs. Programs use a
	different native code for Alpha processors than for Intel processors, and you
	must install new versions.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: Windows 2000 does not run on an Alpha system.
	
	There are many registry settings that affect the security of a Windows NT-based
	computer. These registry settings configure options such as whether or not to
	send your down-level LAN Manager-compatible password, or to disable use of the
	floppy disk drive.
	
	Backup Steps on the Alpha PDC
	-----------------------------
	
	1. Export the registry hive (for example, called Shares.reg) for the shares. The
	  hive is under:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer\Parameters
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q125996 Saving and Restoring Existing Windows NT Shares
	
	2. Use Robocopy from the Microsoft Windows NT 4.0 Resource Kit to copy all
	  wanted files to a shared folder on the BDC (for example, called Shares). To
	  list the possible options, start Robocopy in an MS-DOS session with the /?
	  parameter.
	
	3. Use Scopy from the Windows NT Resource Kit to copy all the files that are to
	  be secured with ACLs, to a shared folder on the BDC (for example, called
	  ACLCOPY). To list the possible options, start Scopy in an MS-DOS session with
	  the /? parameter.
	
	4. Copy the Logon Scripts from %SystemRoot%\System32\Repl\Import\Scripts to a
	  shared folder (for example, called Logon) on the BDC with Robocopy.
	
	5. Stop every service on the PDC that is not needed anymore, especially the WINS
	  and DCHP services.
	
	6. On the PDC, copy the content of %SystemRoot%\System32\Wins to a shared folder
	  (for example, called Wins) on the BDC with Robocopy.
	
	7. On the PDC, copy the content of %SystemRoot%\System32\Dhcp to a shared folder
	  (for example, called Dhcp) on the BDC with Robocopy.
	
	8. Optional: On the PDC, copy the content of %SystemRoot%\profiles to a shared
	  folder (for example, called Profiles) on the BDC with Robocopy.
	
	Turn Off the Alpha PDC
	----------------------
	
	1. Promote the Alpha BDC to a PDC in Server Manager. This demotes the "old" PDC.
	  Optional, but recommended: Use Server Manager on the PDC, not the BDC.
	
	2. In Server Manager on the "new" PDC, click Synchronize With Primary Domain
	  Controller.
	
	3. Click Remove From Domain in Server Manager on the PDC to remove the "old"
	  PDC. Wait until the entry for the BDC is removed.
	
	4. In Server Manager on the "new" PDC, click Synchronize With Primary Domain
	  Controller. This is optional, but recommended.
	
	5. Restart the PDC.
	
	6. Remove the "old" BDC from the network.
	
	Install the New Intel-Based PDC
	-------------------------------
	
	1. Install the new computer as a BDC, not as a PDC. Choose the appropriate
	  domain.
	
	2. The new server must have the same partition scheme as the old server. Note:
	  There can be more partitions, but not less.
	
	3. Install Windows NT in the same folder as on the old Alpha-based computer.
	
	4. Use the same IP address and the same computer name as before.
	
	5. Install the standard services, WINS, and DHCP.
	
	6. Obtain the latest Service Pack for Windows NT and install it.
	
	7. In Server Manager on the PDC, click Synchronize With Primary Domain
	  Controller. This is optional, but recommended.
	
	8. Promote the new Intel-based BDC to a PDC in Server Manager on the PDC. This
	  demotes the old PDC.
	
	9. In Server Manager on the new Intel-based PDC, click Synchronize With Primary
	  Domain Controller. This is optional, but recommended.
	
	Update the New Configuration
	----------------------------
	
	1. On the new Intel-based computer, stop the DHCP and WINS services.
	
	2. On the PDC, copy the contents of the shared WINS folder on the BDC to
	  %SystemRoot%\System32\Wins with Robocopy.
	
	3. On the PDC, copy the content of the shared Dhcp folder on the BDC to
	  %SystemRoot%\System32\Dhcp with Robocopy.
	
	4. On the PDC, copy the content of the shared Logon folder on the BDC to
	  %SystemRoot%\System32\Repl\Import\Scripts with Robocopy.
	
	5. On the PDC, copy all files from the shared Shared folder on the BDC to its
	  original place with Robocopy.
	
	6. Optional: On the PDC, copy the content of the shared Profiles folder on the
	  BDC to %SystemRoot%\Profiles with Robocopy.
	
	7. On the PDC, restore all files that are to be secured with ACLs from the
	  shared ACLCOPY folder on the BDC by using Scopy.
	
	8. Import the Shares.reg registry hive in the registry of the PDC.
	
	9. Stop the Server service and start it again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
