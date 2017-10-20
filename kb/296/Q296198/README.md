---
layout: page
title: "Q296198: How to Add EMC Drives w/ Multi-Paths to a WINNT 4 Serv. Cluster"
permalink: /kb/296/Q296198/
---

## Q296198: How to Add EMC Drives w/ Multi-Paths to a WINNT 4 Serv. Cluster

{% raw %}

	Article: Q296198
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	The third-party products that are discussed in this article are manufactured by companies that are independent of Microsoft. Microsoft makes no warranty, implied or otherwise, regarding the performance or reliability of these products.
	
	SUMMARY
	=======
	
	This article describes the necessary steps to add additional drives to a
	Microsoft Windows NT 4.0 Enterprise Edition server cluster when specifically
	using an EMC array with multiple paths and PowerPath software.
	
	Additional steps are required if you are using PowerPath with multiple paths to
	the drives than are typically necessary.
	
	MORE INFORMATION
	================
	
	1. Verify that the primary node, Node A in this scenario and the node that the
	  Cluster Service was first installed on, has control over all the resources.
	
	2. On Node B, the cluster node that joined the cluster:
	
	  a. In Control Panel, double-click Devices.
	
	     Note: When changing the startup mode on the following devices you will get
	     a message "Changing the startup type for XXXXX device may leave the system
	     in an unusable state. Do you want to make the change?" Click Yes to
	     continue for all devices.
	
	  b. Scroll down the list to Cluster Disk, click Startup, change the settings
	     to Manual, and then click OK.
	
	  c. Scroll down the list to EMC PowerPath Module, click Startup, change the
	     settings to Manual, and then click OK.
	
	  d. Scroll down the list to EMC PowerPath Driver, click Startup, change the
	     settings to Manual, and then click OK.
	
	  e. In Control Panel, double-click Services.
	
	  f. Click Cluster Server, click Startup, change the settings to Manual, and
	     then click OK.
	
	  g. Scroll down to EMC PowerPath Monitor Service, change the settings to
	     Manual, and then click OK.
	
	  h. Shut down the computer, and then power off Node B.
	
	  i. Disconnect all but one connection from Node B to the Symmetrix device.
	
	3. On Node A:
	
	  a. In Control Panel, double-click Devices.
	
	  b. Scroll down the list to Cluster Disk, click Startup, change the settings
	     to Manual, and then click OK.
	
	  c. Scroll down the list to EMC PowerPath Module, click Startup, change the
	     settings to Manual, and then click OK.
	
	  d. Scroll down the list to EMC PowerPath Driver, click Startup, change the
	     settings to Manual, and then click OK.
	
	  e. In Control Panel, double-click Services.
	
	  f. Click Cluster Server, click Startup, change the settings to Manual, and
	     then click OK.
	
	  g. Scroll down to EMC PowerPath Monitor Service and change the settings to
	     Manual, and then click OK.
	
	  h. Shut down the computer and Power off Node A.
	
	  i. Disconnect all but one connection from Node A to the Symmetrix device.
	
	  j. Boot Node A and log on.
	
	  k. Click OK to the PowerPath Administrator error "Could not connect to
	     monitor service on <servername>", and then close the PowerPath
	     Administrator if it opened.
	
	     Note: These steps are necessary because the PowerPath Administrator is
	     included in the startup process.
	
	  l. Right-click the PowerPath icon, and then click Exit.
	
	  m. Open Disk Administrator: Click Start, point to Programs, and then click
	     Administrative Tools.
	
	  n. Select the additional disk, which should show up as Free Space, and then
	     click Create on the Partition menu. Confirm the creation of the partition
	     by clicking Yes and determine the partition size.
	
	  o. Click Commit Changes Now on the Partition menu and if necessary, change
	     the drive letter on the Tools menu by clicking Assign Drive Letter.
	
	  p. Click Format on the Tools menu and change the File System to NTFS in the
	     Format window. Also, name your volume in the Volume Label box and then
	     click Full Format in the Format Options section.
	
	     Note: Make sure your label of this disk will help to identify it when seen
	     on the other node.
	
	  q. Click Start to begin formatting, and then click Close when you are
	     finished.
	
	  r. Close the Disk Administrator by clicking Exit on the Partition menu and
	     save any configurations.
	
	  s. In Control Panel, double-click Devices.
	
	  t. Scroll down the list to Cluster Disk, click Startup, change the settings
	     to System, and then click OK.
	
	  u. In Control Panel, double-click Services.
	
	  v. Click Cluster Server, click Startup, change the settings to Automatic, and
	     then click OK.
	
	  w. Shut down the computer and power off Node A.
	
	4. On Node B:
	
	  a. Boot and log on to Node B.
	
	  b. Click OK to the PowerPath Administrator error "Could not connect to
	     monitor service on <servername>", and then close PowerPath
	     Administrator if it is open.
	
	  c. Right-click the PowerPath icon, and then click Exit.
	
	  d. Open Disk Administrator: Click Start, point to Programs, and then click
	     Administrative Tools.
	
	  e. Select the added disk, go to the Tools menu and choose Assign Drive Letter
	     and give it the same drive letter as that which was assigned on Node A.
	     Even if the drive letter has been assigned and is correct, you must still
	     assign the same drive letter. Close the Disk Administrator by clicking
	     Exit on the Partition menu and save any configurations.
	
	  f. In Control Panel, double-click Devices.
	
	  g. Scroll down the list to Cluster Disk, click Startup, change the settings
	     to System, and then click OK.
	
	  h. In Control Panel, double-click Services.
	
	  i. Click Cluster Server, click Startup, change the settings to Automatic, and
	     then click OK.
	
	  j. Shut down the computer and power off Node B.
	
	5. On Node A:
	
	  a. Boot and log on to Node A (the cluster service should start).
	
	  b. Click OK to the PowerPath Administrator error "Could not connect to
	     monitor service on <servername>", and then close PowerPath
	     Administrator if it is open.
	
	  c. Right-click the PowerPath icon, and then click Exit.
	
	  d. Open Cluster Administrator, and then add the new disk as a resource to an
	     existing disk group; or, create a new disk group, and then add the disk.
	
	     Note: Do not bring the resource online at this time.
	
	  e. Reboot Node A.
	
	  f. Log on to Node A (the cluster service should start).
	
	  g. Click OK to the PowerPath Administrator error "Could not connect to
	     monitor service on <servername>", and then close PowerPath
	     Administrator if it is open.
	
	  h. Right-click the PowerPath icon, and then click Exit.
	
	  i. Open Cluster Administrator and bring the disk resource online.
	
	6. On Node B:
	
	  a. Boot and log on to Node B (the server should join cluster).
	
	  b. Click OK to the PowerPath Administrator error "Could not connect to
	     monitor service on <servername>", and then close PowerPath
	     Administrator if it is open.
	
	  c. Right-click the PowerPath icon, and then click Exit.
	
	  d. Make sure the Disk Resource can fail over to either node.
	
	7. On Node A:
	
	  a. In Control Panel, double-click Devices.
	
	  b. Scroll down the list to EMC PowerPath Module, click Startup, change the
	     settings to Boot, and then click OK.
	
	  c. Scroll down the list to EMC PowerPath Driver, click Startup, change the
	     settings to Boot, and then click OK.
	
	  d. In Control Panel, double-click Services.
	
	  e. Scroll down to EMC PowerPath Monitor Service and change the settings to
	     Automatic, and then click OK.
	
	  f. Shut down the computer, and power off Node A.
	
	8. On Node B:
	
	  a. In Control Panel, double-click Devices.
	
	  b. Scroll down the list to EMC PowerPath Module, click Startup, change the
	     settings to Boot, and then click OK.
	
	  c. Scroll down the list to EMC PowerPath Driver, click Startup, change the
	     settings to Boot, and then click OK.
	
	  d. In Control Panel, double-click Services.
	
	  e. Scroll down to EMC PowerPath Monitor Service, change the settings to
	     Automatic, and then click OK.
	
	  f. Shut down the computer and power off Node B.
	
	9. On Node A:
	
	  a. Reconnect all the connections from Node A to the Symmetrix device.
	
	  b. Boot and log on to Node A (the cluster service should start).
	
	  c. Verify that PowerPath is able to see two paths to each device and that the
	     resources are online.
	
	10. On Node B:
	
	  a. Reconnect all the connections from Node B to the Symmetrix device.
	
	  b. Boot and log on to Node B (the server should join the cluster).
	
	  c. Verify that PowerPath can see two paths to each device and that the
	     resources are online.
	
	  d. Make sure Disk Resource can fail over to either node.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q175278 How to Install Additional Drives on the Shared SCSI Bus
	
	For additional help, refer to the following EMC Solution ID emc9294 on the EMC
	Web site:
	
	  http://www.emc.com
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
