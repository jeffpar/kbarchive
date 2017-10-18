---
layout: page
title: "Q197046: How to Set up a Print Spooler on Microsoft Cluster Server"
permalink: kb/197/Q197046/
---

## Q197046: How to Set up a Print Spooler on Microsoft Cluster Server

	Article: Q197046
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Cluster Server has the ability to create and host print server
	functionality. The following article documents the procedure for correctly
	setting up a print spooler on a cluster.
	
	MORE INFORMATION
	================
	
	Install the TCP/IP Printing Service
	-----------------------------------
	
	To run a print spooler on the Cluster Server computer, a printer port monitor
	must be established from each node of the Cluster server to the remote printer
	or remote print server. Not all port monitors are cluster server capable. Using
	a third-party port monitor is not supported by Microsoft.
	
	The Line Printer Remote (LPR) port monitor is a supported port monitor and is
	installed with the Microsoft TCP/IP printing service.
	
	For example: A connection can be established to a TCP/IP Line Printer Daemon
	(LPD) or another computer running Microsoft Windows NT Server and the Microsoft
	TCP/IP printing service. A printer port defined through a UNC connection such as
	\\Prn_server1\Printer1 may also be used as long as the share allows null
	sessions.
	
	CAUTION: Creating ports and installing printer drivers must be performed on both
	nodes. If these steps are performed on only one node, the printer group starts
	on the other node but jobs to the printer accumulate in the queue. Clients are
	able to send print jobs to the Cluster server, but the server does not have the
	appropriate resources on the failover node to process the job out of the
	logically defined printer. Also, for failover of the printer to work, it is not
	possible to use a physical local port, such as a LPT1, because if the node does
	not work, the connection to that particular node's LPT1 port would also be
	lost.
	
	To install the TCP/IP printing service, follow the instructions as documented in
	the "To Install LPR Printing" section of the following Microsoft Knowledge Base
	article:
	
	  Q195643 How to Configure Windows NT for LPR Printing
	
	NOTE: Please make sure that after you install any service from the original
	Windows NT media (and prior to restarting), you reapply the latest service
	pack.
	
	If the remote port created is to connect to another Windows NT Print Server
	through a UNC, follow the instructions in the following Microsoft Knowledge Base
	article:
	
	  Q121853 Downlevel Print Jobs Not Redirected Correctly
	
	Create a Group for the Print Spooler
	------------------------------------
	
	To set up the Spooler service on a Cluster server, the appropriate resources need
	to be made available to the Spooler service. To accomplish this, group the
	resources in the Cluster Administrator program. This group is used to contain
	all of the resources necessary to create a printer share.
	
	1. Start the Cluster Administrator program, and create a group for the spooler.
	  To create this group, right-click in the left pane of the File New Group
	  section.
	
	2. Type in the name and description of the group, and then click Next.
	
	3. Add the nodes that are the preferred owners, and then click Finish.
	
	4. Add an Internet Protocol (IP) address for the group. An IP address resource
	  must be added to the group because the network name resource that is created
	  next depends on an IP address resource. If the nodes of the cluster have the
	  TCP/IP Print Service installed and running, clients with the LPR utility can
	  also use this IP address. These client can use this address when they try to
	  gain access to the printer.
	
	  a. Select the Groups folder, and find the group created above.
	
	  b. Right-click the group, click New, and then click Resource.
	
	  c. Type a name for the resource, select IP Address as the resource type, and
	     then click Next.
	
	  d. Add the nodes that will be the possible owners, and then click Next.
	
	  e. Click Next again, as no resources need to brought online before the IP
	     address starts.
	
	  f. Type the IP address and subnet mask of the connection that is available to
	     users. Also, specify the network to use, and then click Finish.
	
	5. Add a network name resource to the group. This is the name of the print
	  server that is used by clients when connecting to the printer share.
	
	  a. Select the Groups folder, and find the group created above.
	
	  b. Right-click the group, click New, and then click Resource.
	
	  c. Type a name for the resource, select Network Name as the resource type,
	     and then click Next.
	
	  d. Add the nodes that will be the possible owners, and then click Next.
	
	  e. Add the IP Address resource as a resource dependency, and then click Next.
	
	  f. Add the Spooler server name. That is, the server that is used by clients
	     to access the spooled printers.
	
	6. Add a disk resource to the group. The disk resource is where the Spooler
	  files for the printer shares are stored.
	
	  a. Select the Groups folder, and then find the group created above.
	
	  b. Right-click the group, click New, and then click Resource.
	
	  c. Type a name for the resource, click Physical Disk as the resource type,
	     and then click Next.
	
	  d. Add the nodes that will be the possible owners, and then click Next.
	
	  e. Click Next again, as no resources need to brought online before the
	     Physical Disk resource starts.
	
	  f. Select the Physical Disk, and then click Finish.
	
	7. Add a print spooler resource in the group. This is the spooler for any
	  printer shares. The folder specified must be reside on the disk specified in
	  the previous step.
	
	  a. Select the Groups folder, and then find the group created above.
	
	  b. Right-click the group, click New, and then click Resource.
	
	  c. Type a name for the resource, click Print Spooler as the resource type,
	     and then click Next.
	
	  d. Add the nodes that will be the possible owners, and then click Next.
	
	  e. Add the Physical Disk created above as a resource dependency, and then
	     click Next.
	
	  f. Add the Network Name created in step 5 above as a resource dependency, and
	     then click Next.
	
	  g. Type the path and folder name for the spooler files location. This is
	     where the SHD and SPL files are created when the Spooler service runs.
	
	     For example: If the physical disk resource created in step 6 above was
	     drive E, you may want to type in a spool folder called Spool such that the
	     entry would look like E:\Spool. Unless necessary, leave the Job completion
	     timeout as 160 seconds.
	
	Create and Install the Necessary Printer Ports
	----------------------------------------------
	
	NOTE: Perform this procedure on both nodes of the cluster. After creating the
	group and resources that are required to make the cluster a print server, it is
	then necessary to perform the following steps on both nodes of the cluster. The
	following steps set up LPR ports as the port monitor. This is the most common
	and efficient way of setting up a Windows NT 4.0 print server.
	
	NOTE: Some instructions differ from those in Microsoft Knowledge Base article
	Q195643 listed above because the following setup example uses the Ports tab to
	set up the ports independent of adding the printer.
	
	1. Create the ports for the printers. To create LPR ports, go to the printer
	  folder of each node, and then click Server Properties from the File menu.
	
	  a. Click the Ports tab, and then click Add Port.
	
	  b. Select LPR port by double-clicking the entry or highlighting the entry,
	     and then clicking the New Port button.
	
	  c. Type in the appropriate information about the port.
	
	  NOTE: By default, TCP/IP printing only uses 11 TCP/IP ports. If your LPD
	  device can handle receiving print jobs over ports 1024+, please see the
	  following Microsoft Knowledge Base articles:
	
	  Q141708 Printing to LPD Printer Is Slow or Fails with Windows NT
	
	  Q179156 Updated TCP/IP Printing Options for Windows NT 4.0 SP3 and Later
	
	  The settings in the above articles must be applied consistently to all nodes
	  of the cluster to avoid inconsistent behavior when moving the Spooler
	  resource to another node. Also, note that to allow the changes to take
	  effect, the Spooler service has to be restarted. If the Microsoft TCP/IP
	  printing service is also running, that service needs to be stopped before
	  stopping the Spooler service on the node. For additional information about
	  TCP/IP Printing, click the article number below to view the article in the
	  Microsoft Knowledge Base:
	
	  Q189224 TCP/IP Printing Service Hangs If Started Before Spooler Service
	
	  To set the LPR ports to use ports greater than 1024:
	
	   - Move the spooler group temporarily to the other node.
	
	   - Stop the spooler service on the node.
	
	   - Make the appropriate registry entry per the above articles.
	
	   - Restart the spooler service.
	
	   - Move the spooler group back to the node you just made changes on.
	
	2. Install the printer drivers for the printer.
	
	  This step is also not performed in the Cluster Administrator program. Instead,
	  this is performed using the Add Printer Wizard, which is available in the
	  Printers folder (on the Start menu, point tor Settings, and then click
	  Printers). This is the same tool and process used to create the print server
	  on a computer not using Cluster Server.
	
	  NOTE: The printer created on each node need only be created to install the
	  printer driver to that node.
	
	  For example, a clustered Spooler was set up to have 50 logical printers on it
	  all using the same printer driver (for example, HP LaserJet 4). In that case,
	  the Cluster nodes need only have the HP LaserJet 4 driver on them.
	
	  a. Click Start, point to Settings, click Control Panel, double-click
	     Printers, and then click Add Printer.
	
	  b. When you are prompted to select where the printer is managed from, select
	     My Computer, and then click Next.
	
	  c. Select a port.
	
	  d. Select a printer driver and click next.
	
	  e. Click the sharing radio button, and also select the operating systems for
	     which you want to share a driver for. For additional information about
	     installing cross-platform drivers on both nodes, click the article number
	     below to view the article in the Microsoft Knowledge Base:
	
	  Q154291 Installing Cross Platform Print Drivers in Windows NT 4.0
	
	     You only need to perform this procedure once on each node for each printer
	     model.
	
	  f. Insert the appropriate media or type the location of the correct printer
	     drivers when prompted.
	
	  g. Select whether or not you would like to print a test page, and then click
	     Next.
	
	Add a Printer to the Cluster Spooler
	------------------------------------
	
	
	To create a printer share on a local cluster node (start with the one that
	currently owns the printer cluster resources (Network Name, IP Address, Print
	Spooler, Physical Disk. It automatically shows up on the other since it is a
	cluster registry key entry):
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the network name that was added to the printer group on
	  the cluster. For example, "\\Prn_server" (without the quotation marks).
	
	3. A Windows Explorer window is displayed listing any shares and the Printers
	  folders. Double-click the Printers folder.
	
	4. To add the printer shares, in the Printers folder, double-click the Add
	  Printer Wizard.
	
	  NOTE: The options available in the Add Printer Wizard are limited:
	
	   - In the Add Printer Wizard dialog box, the only option is to add a printer
	     to the remote print server.
	
	   - In the Add Printer Wizard dialog box, the Add Port and Configure Port
	     buttons are unavailable.
	
	REFERENCES
	==========
	
	For additional information on resources and groups, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q169017 Information on Groups and Resources Using Cluster Server
	
	Additional query words: mscs printing clustering
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
