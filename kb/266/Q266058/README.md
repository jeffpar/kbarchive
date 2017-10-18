---
layout: page
title: "Q266058: How to Migrate a Printer Server to a Server Cluster"
permalink: kb/266/Q266058/
---

## Q266058: How to Migrate a Printer Server to a Server Cluster

	Article: Q266058
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you plan the installation of Windows Clustering you want to replace
	existing servers with a limited impact to the end users. This article discusses
	using two resource kit utilities to help you automate the migration of file and
	printer shares. For additional information about manually creating a Printer
	Spooler as a clustered resource, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q197046 How to Set up a Print Spooler on Microsoft Cluster Server
	
	MORE INFORMATION
	================
	
	The Print Migrator tool is available to help in migrating printers. The initial
	versions of this tool in the Microsoft Windows NT 4.0 Resource Kit, Supplement
	Four, are not cluster-aware. With the release of the Print Migrator 3.0 tool,
	cluster support has been integrated into the tool. For more information about
	Print Migrator 3.0, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/windows2000/technologies/fileandprint/print/download.asp
	
	NOTE: The following steps were tested with version 2.x of the Print Migrator
	tool. Use the documentation that is included with version 3.0 if you use that
	version.
	
	To help automate the migration of file and printer shares, follow these steps:
	
	1. Configure each node for network printing by installing Microsoft TCP/IP
	  Printing as a network service. Other port monitors and managers are not
	  supported for clustered printing.
	
	  For additional information about installing TCP/IP printing service, click the
	  article number below to view the article in the Microsoft Knowledge Base:
	
	  Q195643 How to Configure Windows NT for LPR Printing
	
	  NOTE: You must ensure that after you install any service from the original
	  Windows NT media, and before restart any such service, you reapply the latest
	  service pack.
	
	2. Create a backup of the source print server using the Printmig.exe program.
	  The program can be run remotely or on one of the nodes. The program supports
	  Windows NT 4.0 to Windows NT 4.0 migrations, and you must have administrator
	  access to the target server.
	
	  For additional information about using the Printmig.exe utility, click the
	  article number below to view the article in the Microsoft Knowledge Base:
	
	  Q214795 How to Back Up and Restore a Print Server Configuration
	
	
	  a. Start the PrintMig.exe program.
	
	  b. On the Actions menu, click Backup.
	
	  c. In the target server field, type the server name:
	
	  \\<Servername>
	
	  d. Point the Cab storage directory to a location available to both nodes.
	
	  e. Click OK to complete.
	
	     A final status message that says "Backup Complete" is displayed.
	
	3. Restore the backup to each node.
	
	  NOTE: You may need to reapply the current service pack and any hot fixes if
	  the source server is a different version.
	
	  a. Start the PrintMig.exe program.
	
	  b. On the Actions menu, click Restore.
	
	  c. In the target server field type the server name of one node, for example:
	
	  \\NodeA
	
	     NOTE: You must have administrator access to the target server.
	
	  d. Specify the location of the backup saved in the earlier steps.
	
	  e. If you did not double-click the Cab storage directory earlier, click Open.
	     A final status message is displayed: "Restore complete, Registry restored,
	     Starting Spooler... , Spooler Running."
	
	  f. Repeat this process for each node.
	
	4. Remove shared printers on each node.
	
	  Each node has the migrated printers shared out. These printers must be deleted
	  so they can be added as cluster resources. If not, the ClusTool utility fails
	  with the error message "Cannot create resource!" in the Migrate.log file.
	  This happens when you attempt to create a duplicate printer share.
	
	
	  a. Click Start, point to Settings, and then click Printers.
	
	  b. Delete the printers that were created as a result of the Print Migrator.
	     As part of a cluster, individual nodes rarely have any printers shared.
	
	5. Make the migrated printers available by means of the cluster.
	
	  The ClusTool.exe program works with a Windows 2000 or Windows 4.0 cluster, and
	  is installed from the Windows 2000 Resource Kit compact disc in the
	  Apps\ClusTool directory.
	
	  If you install the utility on a Windows NT 4.0 computer you may receive the
	  following error message:
	
	  Warning File(s) failed to self-register: %Systemroot%\Msclus.dll
	
	  If you run the Regsvr32 Msclus.dll file from the %Systemroot% directory it can
	  complete the installation process. If this file is not registered, the
	  ClusTool utility is unable to connect to a Windows NT 4.0 target cluster and
	  your attempts to browse for a cluster fail.
	
	  NOTE: The ClusTool.exe program expects the cluster to have a group with the
	  Print Spooler resource and associated resources, or at least to contain the
	  following resources: network name, Internet Protocol (IP) address and
	  physical disk. Additional information is available from the utility's Help
	  file.
	
	  a. Run ClusTool from its program group, typically Administrator Tools.
	
	  b. Click Next.
	
	  c. Select "Migrate resources from a stand-alone server to a Cluster" and
	     click Next.
	
	  d. Specify the source server. This is the original server that Print Migrator
	     backed up (for example, \\Prtserver). Click Next.
	
	  e. Specify the target cluster. This is the cluster name displayed in Cluster
	     Administrator. Click Next.
	
	  f. You are given the choice to prefix resource names with the source server
	     name. Your choice does not impact a successful printer migration. Click
	     Next.
	
	  g. Confirm the resources to migrate, and then click Next.
	
	     The Graphical User Interface (GUI) provides the option to clear (that is,
	     not select) resources from migration and has a drop-down list of groups
	     that have appropriate resources for the migrated item(s). If the group you
	     want is not on the list, you must ensure it has the appropriate resources
	     installed by referencing the ClusTool Help file.
	
	  h. On the "Finished gathering information" screen, click Next.
	
	  i. On the "Ready to Migrate!" screen, click Next.
	
	  j. The screen displays the message "Cluster Tool is performing the following
	     steps." When the operation is complete, click Next. The message "Migration
	     Complete" displays on the screen.
	
	  k. The View Log option provides a list of actions and their status. Use the
	     results displayed here if you need to troubleshoot. A common failure
	     occurs when the resource or share already exists. If you select "prefix
	     resource names with source server name" as mentioned earlier, you may
	     resolve the issue of duplicate file shares without impacting the
	     printers.
	
	     If problems occur that need to be backed out, click Undo.
	
	     If there are no problems, click Finish to complete the migration process.
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
