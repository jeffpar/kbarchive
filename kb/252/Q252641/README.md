---
layout: page
title: "Q252641: MSDTC Conflicts During NTOP Installation on Cluster Server"
permalink: /kb/252/Q252641/
---

## Q252641: MSDTC Conflicts During NTOP Installation on Cluster Server

{% raw %}

	Article: Q252641
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Windows NT Option Pack (NTOP) on a clustered server with
	newer versions of the Microsoft Distributed Transaction Coordinator (MSDTC)
	present, the following MSDTC event may occur:
	
	  Source: Service Control Manager Event ID: 7024 Description: The MSDTC service
	  terminated with service-specific error 3221229574.
	
	CAUSE
	=====
	
	MSDTC version conflicts can occur during the NTOP installation on a clustered
	server. The NTOP installs an older version of the MSDTC. If the clustered server
	has Windows NT Service Pack 4 or later, the NTOP installation may fail and the
	MSDTC may not function correctly after the installation. When SQL Server is
	installed prior to the NTOP, similar problems with the MSDTC may occur.
	
	If one of the following situations describes your problem, use the steps in the
	"Workaround" section of this article.
	
	- The NTOP cannot be installed because Windows NT SP4 or later is installed on
	  the system.
	
	- The NTOP is installed, but the MSDTC resources fail under Cluster
	  Administrator.
	
	- SQL Server and the NTOP are both installed on a clustered server and the
	  MSDTC is the only resource failing.
	
	WORKAROUND
	==========
	
	1. Remove the MSDTC resource group from cluster server.
	
	2. Delete the following registry keys on the MSDTC:
	
	  HKLM\software\Microsoft\MSDTC
	
	  and
	
	  HKLM\SYSTEM\CurrentControlSet\Services\MSDTC
	
	3. Remove the shared MSDTCLog folder on the shared drive.
	
	4. Install the standalone version of the MSDTC from the following location:
	
	  ftp://ftp.microsoft.com/bussys/distapps/MTS/Public-Fixes/usa/DTC/SvcPack/
	
	5. Stop and restart the cluster services on both nodes in the following order:
	
	  a. Stop CLSSVC on node B
	
	  b. Stop CLSSVC on node A
	
	  c. Start CLSSVC on node A
	
	  d. Start CLSSVC on node B
	
	6. Test failover of the MSDTC group. If it works, the workaround was successful.
	
	7. If the errors persist, use the DTCremove utility (not supported), and then
	  run DTCSetup.exe again as described above.
	
	8. If SQL Server is installed, you may need to remove SQL Server first.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q192708 INF: Installation Order: Cluster Server Support for SQL or MSMQ
	
	  Q219264 INF: Order of Installation for SQL Server 7.0 Clustering Setup
	
	Note: For servers with SP5 installed prior to the NTOP installation, a fix for
	the MSDTC installation is provided. For additional information on MSDTC
	installation instructions, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q241573 How To Install IIS 4.0 onto a Single Node of MSCS 1.0
	
	
	Note: Update both nodes on the cluster.
	
	Additional query words: MSCS, cluster, MSDTC, NTOP
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
