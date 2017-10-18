---
layout: page
title: "Q224553: IIS Server Instance Parameters Window Is Missing"
permalink: kb/224/Q224553/
---

## Q224553: IIS Server Instance Parameters Window Is Missing

	Article: Q224553
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you configure an IIS Server Instance in Microsoft Cluster Server, the
	Dependencies Page should have a Back, Next, and Cancel button. When the
	Iisclex4.dll is not properly installed during the Windows NT Option Pack (NTOP)
	installation, the Dependencies Page displays a Back, Finish, and Cancel button.
	
	CAUSE
	=====
	
	There are two conditions that can cause this problem. The first is if you
	attempt to create an IIS Server Instance using the Remote Cluster Administrator
	Utility from another system instead of physically being on the Cluster Server
	computer. The Remote Cluster Administrator cannot enumerate the metabase
	remotely, and therefore you can not create IIS Server Instances remotely.
	
	The second condition that can cause this problem is if the Iisclex4.dll does not
	get installed, registered, or added to the registry properly during the
	installation of the NTOP. To resolve the first situation, go to the Cluster
	Server computer and use the Cluster Administrator on either of the Nodes to
	create the IIS Server Instance.
	
	RESOLUTION
	==========
	
	To resolve the first situation, go to the Cluster Server computer and use the
	Cluster Administrator on either of the Nodes to create the IIS Server Instance.
	
	To resolve the second situation, perform the following steps:
	
	1. Pick one Node in the Cluster to work on the first.
	
	2. Confirm that the Iisclex4.dll file exists in the %windir%\system32\inetsrv
	  directory. If Iisclex4.dll does not exist, then extract the file from the
	  NTOP compact disc in \Ntoptpak\En\x86\Winnt.SRV\iis4_1.cab.
	
	3. Go to a command prompt, change to the %windir%\system32\inetsrv directory and
	  type the following:
	
	  regsvr32 iisclex4.dll
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	4. Start Regedt32.exe and locate the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\Cluster\Resource Types\IIS Server Instance
	
	5. Click Edit.
	
	6. Choose Add Value.
	
	7. Enter the following registry key information:
	
	  Value Name: AdminExtensions
	  Data Type: REG_MULTI_SZ
	  Date: {92BF7500-974C-11D0-A5F2-00A0C922E752}
	
	  NOTE: The brackets in the data string are required.
	
	8. Repeat steps 2 through 7 on the other Node in the Cluster.
	
	9. Close Registry Editor on both Nodes and restart each Node one at a time.
	
	After the systems have been restarted, you can create an IIS Server Instance in
	your Cluster Administrator.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
