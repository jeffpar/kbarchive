---
layout: page
title: "Q290624: HOWTO: Configure MSDTC in a Windows 2000 Cluster Environment"
permalink: /kb/290/Q290624/
---

## Q290624: HOWTO: Configure MSDTC in a Windows 2000 Cluster Environment

	Article: Q290624
	Product(s): Internet Information Server
	Version(s): 2000,2000 SP1,2000 SP2,5.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Cluster Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	- Microsoft SQL Server, Enterprise Edition, version 7.0 
	- Microsoft SQL Server 2000 Enterprise Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Cluster Server on Windows 2000 Advanced Server and configure
	Internet Information Services (IIS) or SQL Server, you may need to manually
	install Microsoft Distributed Transaction Coordinator (MSDTC) as a cluster
	instance. By default, MSDTC installs into the cluster group and sets its log
	file on the Quorum disk. However, because you want MSDTC to move from node to
	node (as the IIS or SQL group moves), you should configure MSDTC in a Windows
	2000 cluster.
	
	NOTE: This article assumes that the cluster has more than one shared disk.
	
	SQL Server users should use the following SQL specific Q-article:
	
	  Q294209 INF: Rebuilding or Moving MSDTC Used with a Failover Clustered SQL
	  Server
	
	MORE INFORMATION
	================
	
	To configure MSDTC in a Windows 2000 cluster, follow these steps:
	
	1. On node A, open Cluster Administrator and select the cluster group.
	
	2. In the cluster group, create an IP resource that is dedicated to MSDTC.
	
	  NOTE: The IP resource should have no dependencies.
	
	3. Create a network name resource that is dedicated to MSDTC. The only
	  dependency for this resource is the IP resource that you created in step 2.
	
	4. Right-click the quorum disk resource, click Change Group, and then select
	  Disk Group 1. A warning dialog box appears. Click Yes to dismiss the warning,
	  then click Yes in the Move Resource dialog box.
	
	  NOTE: Make sure that you note the disk letter before you move the disk
	  resource.
	
	5. Locate the disk group that will hold your IIS or SQL resources. Right-click
	  the disk resource, click Change Group, and then select Cluster Group. A
	  warning dialog box appears. Click Yes to dismiss the warning, then click Yes
	  in the Move Resource dialog box.
	
	  NOTE: If this is Disk Group 1, be sure to right-click the IIS or SQL disk and
	  not the quorum disk that you just moved to this group.
	
	6. Close Cluster Administrator.
	
	7. On node A, at a command prompt type "comclust" (without the quotation marks)
	  and press ENTER. After Comclust completes, you are returned to the DOS
	  prompt.
	
	8. Close the DOS prompt and go to node B.
	
	9. At a command prompt, type "comclust" (without the quotation marks), and then
	  press ENTER. After Comclust completes, you are returned to the DOS prompt.
	
	10. Close the command prompt and return to node A.
	
	11. Open the Cluster Administrator and select the cluster group.
	
	12. Take the MSDTC instance offline.
	
	13. Double-click the MSDTC instance to open the Properties sheet, click the
	  Dependencies tab, and then click Modify.
	
	14. In the Modify Dependencies dialog box, remove the cluster network name and
	  add the network name that you created in step 3, and then click OK. In the
	  MSDTC Properties dialog box, click OK.
	
	15. Right-click the MSDTC instance, click Change Group, and then select your Web
	  or SQL group. A warning dialog box appears. Click Yes to dismiss the
	  warning, then click Yes in the Move Resource dialog box.
	
	16. Select the disk group that you moved the quorum disk to in step 4.
	
	17. Right-click the quorum disk resource, click Change Group, and then select
	  Cluster Group. A warning dialog box appears. Click Yes to dismiss the
	  warning, then click Yes in the Move Resource dialog box.
	
	18. Select your Web or SQL group.
	
	19. Bring the MSDTC instance online.
	
	20. Move your Web or SQL group to node B and back to test whether MSDTC is
	  configured correctly on both nodes. You should have an active MSDTC instance
	  in your Web or SQL group.
	
	Additional query words: iis 5 iis5 fail failure
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Search kbSQLServSearch kbiisSearch kbAudDeveloper kbClustServSearch kbiis500 kbSQLServ700 kbSQLServ2000Search kbWinAdvServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1
	Version           : :2000,2000 SP1,2000 SP2,5.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
