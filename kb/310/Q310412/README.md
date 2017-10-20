---
layout: page
title: "Q310412: Corrupt COM+ Catalog Prevents Iissync.exe from Running Properly"
permalink: /kb/310/Q310412/
---

## Q310412: Corrupt COM+ Catalog Prevents Iissync.exe from Running Properly

{% raw %}

	Article: Q310412
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Iissync.exe on an IIS cluster that is running on two Windows 2000
	Advanced Server computers, you may receive the following error message:
	
	  Source : 133, scanned, Targets : (133,5), Error replicating to target (Target
	  Name): Server Execution Failed error code 2148007941 ( 800800005 )
	
	If you expand Component Services and then expand My Computer in the Microsoft
	Management Console (MMC), you may receive the following error message:
	
	  Source : 167, scanned, Targets : (167,0), Error replicating to target (Target
	  Name): Class not registered error code 2147746132 ( 80040154 )
	
	Failing over nodes in Cluster Administrator works without error, and you see no
	indication of metabase corruption.
	
	CAUSE
	=====
	
	A COM+ catalog that is running on the active node of the cluster may be
	corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, repair the COM+ catalog.
	
	For additional information on how to repair the COM+ catalog, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q301919 PRB: Cannot Expand My Computer in Component Services MMC
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this issue, you need a corrupt COM+ catalog. To create a corrupt
	COM+ catalog, do either of the following:
	
	Method 1:
	
	1. On the cluster active node, unregister the COM+ catalog. To do this, click
	  Start, click Run, type "regsvr32 -u %windir%\system32\regsvr32 -u
	  clbcatq.dll" (without the quotation marks), and click OK.
	
	2. Click Start, point to Run, type "C:\Winnt\System32\Inetsrv\Iissync.exe target
	  node name" (without the quotation marks), and then click OK.
	
	3. In Component Services, expand Component Services, and then expand My
	  Computer.
	
	Method 2:
	
	1. On the cluster active node, create a text file and name it ~clbcatq.dll.
	
	2. Click Start, point to Run, type "C:\Winnt\System32\Inetsrv\Iissync.exe target
	  node name" (without the quotation marks), and then click OK.
	
	3. In Component Services, expand Component Services, and then expand My
	  Computer.
	
	Additional query words: iis 5 cluster COM+ iissync
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
