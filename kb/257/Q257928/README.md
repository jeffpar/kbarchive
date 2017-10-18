---
layout: page
title: "Q257928: How to Manually Remove the Cluster Service"
permalink: kb/257/Q257928/
---

## Q257928: How to Manually Remove the Cluster Service

	Article: Q257928
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to manually remove the Cluster service.
	
	You may have to manually remove the Cluster service if it is not properly
	functioning and you have to reinstall it. Attempt this removal process only if
	the Add/Remove Programs tool in Control Panel does not function. For Windows NT
	Server, Enterprise Edition version 4.0, before you attempt to manually remove
	the Cluster service, refer to the "Setup-uninstall" section of the Mscs folder
	on CD-ROM2. You may be able to remove the Cluster service if you run the program
	from this section.
	
	CAUTION: Severe problems with your computer may result from following the
	instructions in this article. The program may not function properly after you
	remove the cluster software. You must determine the potential impact on programs
	before you follow the procedures in this article. If you remove the last node of
	a cluster, the entire cluster is removed; you must reinstall the cluster to form
	the first node.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To manually remove the Cluster service:
	
	1. Log on to the local node with administrative rights.
	
	2. Stop the Cluster service; click "Control Panel Services", and then click Stop
	  on the Cluster service.
	
	3. Run Regedt32, and then locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	
	4. Click Clusnet, and then click Delete on the Edit menu.
	
	5. Click Clussvc, and then click Delete on the Edit menu.
	
	6. Click Clusdisk, and then click Delete on the Edit menu.
	
	7. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\Root
	
	8. Click Legacy_Clusdisk, click Security, and then click Permissions.
	
	9. Click the Everyone Group, click Full-Control, and then click OK.
	
	10. Under Windows 2000, click to clear the "Allow inheritable permissions from
	  parent" check box, and then click Copy when prompted.
	
	11. Click Legacy_Clusdisk, and then click Delete on the Edit menu.
	
	12. Click Legacy_Clusnet, and then click Permissions on the Security menu.
	
	13. Click the Everyone Group, click Full-Control, and then click OK.
	
	14. Under Windows 2000, click to clear the "Allow inheritable permissions from
	  parent" check box, and then click Copy when prompted.
	
	15. Click Legacy_Clusnet, and then click Delete on the Edit menu.
	
	16. Click Legacy_Clussvc, and then click Permissions on the Security menu.
	
	17. Click the Everyone Group, click Full-Control, and then click OK.
	
	18. Under Windows 2000, click to clear the "Allow inheritable permissions from
	  parent" check box, and then click Copy when prompted.
	
	19. Click Legacy_Clussvc, and then click Delete on the Edit menu.
	
	20. If you observe a key named Cluster under HKEY LOCAL MACHINE, click Cluster,
	  and then click Unload Hive on the Registry menu.
	
	21. Click Yes to confirm.
	
	22. Quit Regedt32.
	
	23. In My Computer, locate the <Windir> folder (typically C:\Winnt), and
	  then rename the folder labeled Cluster to Cluster.old.
	
	24. Locate the <Windir>\System32\Drivers folder, and then rename the
	  Clusdisk.sys file to Clusdisk.old and the Clusnet.sys file to Clusnet.old.
	
	NOTE: Under My Computer, you may need to enable Show All Files and Show Operating
	System Files.
	
	Additional query words: MSCS w2kmscs uninstall remove force
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
