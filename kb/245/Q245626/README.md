---
layout: page
title: "Q245626: INFO: Use &quot;-localquorum&quot; Switch Install Single-Node MSCS Cluster"
permalink: kb/245/Q245626/
---

## Q245626: INFO: Use &quot;-localquorum&quot; Switch Install Single-Node MSCS Cluster

	Article: Q245626
	Product(s): Microsoft Windows NT
	Version(s): 1.1,2000,4.0
	Operating System(s): 
	Keyword(s): kbClustServSearch kbClustServ100 kbClustServ110
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server, version 1.1 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you specify the "-localquorum" parameter when starting the Microsoft Cluster
	Server setup program you can obtain a Local Quorum Cluster.
	
	MORE INFORMATION
	================
	
	The preceding procedure foregoes the need of having a shared SCSI disk and thus
	you can install a Cluster on a regular workstation running Microsoft Windows NT
	4.0 Server Enterprise Edition or Microsoft Windows 2000 Advanced Server or Data
	Center. This setup is ideal for developing and testing custom resource DLL's and
	Cluster-aware programs. However, you are unable to test failover capabilities
	nor properly test a resource that has a dependency on a disk resource.
	Additionally, you are only able to install Cluster Service on one node
	(computer) when using this switch. It is not possible to form a multi-node
	cluster when the cluster has been set up using this switch.
	
	
	This option is available only for development purposes and is not supported for
	production systems.
	
	To install a Windows NT 4.0 Local Quorum Cluster:
	
	1. Insert the Windows NT Server Enterprise Edition Component CD-ROM.
	
	2. Run "setup -localquorum" from the \MSCS\Cluster\I386 (or alpha) directory.
	  This starts the Microsoft Cluster Server Setup wizard.
	
	To install a Windows 2000 Local Quorum Cluster:
	
	1. From the Control Panel, click Add/Remove Programs.
	
	2. Click Add/Remove Windows Components.
	
	3. Click Cluster Service, and then click Next. Finish the setup.
	
	4. The Cluster Configuration Wizard is displayed. Click Cancel to cancel out of
	  the Wizard, and then click Next to acknowledge the informational message
	  about the need to run the cluster configuration later on.
	
	5. From %Systemroot%\Cluster, run "cluscfg -localquorum". This starts the
	  Cluster Service Configuration wizard.
	
	From this point follow the wizard's instructions just as if you were setting up a
	regular Cluster. The only difference is that you are not prompted to select the
	Quorum disk.
	
	Additional query words: local quorum localquorum cluscfg
	
	======================================================================
	Keywords          : kbClustServSearch kbClustServ100 kbClustServ110 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbAudDeveloper kbClustServSearch kbWinAdvServSearch kbWinDataServSearch kbClustServ110
	Version           : :1.1,2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
