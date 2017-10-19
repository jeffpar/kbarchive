---
layout: page
title: "Q223397: Event Log Error 3221229574 from Service Control Manager"
permalink: /kb/223/Q223397/
---

## Q223397: Event Log Error 3221229574 from Service Control Manager

	Article: Q223397
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to bring the Microsoft Distributed Transaction Coordinator online
	on one of the nodes in Microsoft Cluster Server, the following error messages
	may occur:
	
	  Source: Service Control Manager
	  Event ID: 7024
	  Description: The MSDTC service terminated with service-specific error
	  3221229574.
	
	  Source: MSDTC
	  Event ID: 53313
	  Description: XATM log object failed to set log encryption key:
	  File=d:\viper\src\dtc\xatm\src\xatmlog.cpp Line=793.
	
	  Source: MSDTC
	  Event ID: 4195
	  Description: Could not initialize the MS DTC XA transaction manager.
	
	CAUSE
	=====
	
	The Microsoft Distributed Transaction Coordinator (MSDTC) is not properly
	installed or is malfunctioning on one or both nodes on the Cluster Server
	computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, proceed through the following checklist of items on the
	Cluster Node that the MSDTC fails to start on. If none of the items in the
	checklist help resolve the issue, then you will have to remove and reinstall the
	MSDTC on the Cluster Server computer.
	
	Before performing the following steps, take the MSDTC service offline if it is
	not already. It is also advisable to set the Advanced Properties of the MSDTC
	Cluster Resource to "Do Not Restart," and then move the Resource Group with the
	MSDTC Resource in it to the Node on which the MSDTC Resource fails to start.
	
	1. From a command line, type the following:
	
	  DAC
	
	  This should launch the MSDTC Admin Console. From the Admin Console, click the
	  Advanced Tab. Verify that the Drive and Location for the MSDTC log is
	  correct.
	
	  If the MSDTC Admin Console does not run, then proceed directly to Removing the
	  MSDTC.
	
	2. Make sure the Msdtc.log file exists in the MSDTC Log directory location
	  determined from Item 1. If this directory does not exist, then create it
	  manually.
	
	3. Check permissions to the MSDTC LOG directory and files (Everyone Full
	  Control).
	
	4. Delete the Dtcxatm.log file..
	
	5. If the MSDTC Admin Console is still open, close it. From a command line, type
	  the following:
	
	  DAC
	
	  This should launch the MSDTC Admin Console. From the Admin Console, click the
	  Advanced Tab, and then click the "Reset Log" button. If a log file already
	  exists, and you are asked if you want to delete it, choose "YES."
	
	  If the MSDTC Admin Console will not run, then proceed directly to removing the
	  MSDTC.
	
	If the above steps did not resolve the problem and the MSDTC will still not come
	online, then you must remove and reinstall the MSDTC on the Cluster Server
	computer. Use the following steps to remove the MSDTC from both nodes on the
	Cluster Server computer, and then reinstall the MSDTC.
	
	To remove the MSDTC, do the following:
	
	1. Move the Cluster Resource Group to Node A where you want to install the MSDTC
	  Resource onto. If SQL Server is installed and clustered on the system, it is
	  recommended that you install the MSDTC into the SQL Server Cluster Group.
	
	  DO NOT INSTALL THE MSDTC INTO THE DEFAULT CLUSTER GROUP!
	
	2. On Node A, go to a command prompt and type the following:
	
	  msdtc -remove
	
	3. On Node B, go to a command prompt and type the following:
	
	  msdtc -remove
	
	4. Remove the MSDTC instance from the Cluster Resource Group.
	
	To reinstall the MSDTC, do the following:
	
	1. From a command prompt on node A type the following:
	
	  msdtc -install -d %windir%\system32 -l <location of MSDTC log file on
	  shared disk> -v <Name of virtual server in the resource group you wish
	  to install the MSDTC instance into.>
	
	  NOTE: If the incorrect path is used on the "-d" switch, an Event 7000 with
	  source of Service Control Manager will be logged in the System Event Log. It
	  will have the following Description:
	
	  The MSDTC service failed to start due to the following error: The filename,
	  directory name, or volume label syntax is incorrect.
	
	
	2. If the version of either the Msdtc.exe or the Msdtc.dll file on Node B is
	  newer than 1997.11.532.0, then from a command prompt on Node B type the
	  following:
	
	  msdtc -join %windir%\system32
	
	  -or-
	
	  msdtc -join
	
	Note: If you are installing or reinstalling the MSDTC Resource into a SQL Server
	Cluster Group, you must add the SQL Server resource into the MSDTC dependency
	list. If this is not performed, then the SQL Server group may take up to five
	minutes to failover.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	
	=============================================================================
	
