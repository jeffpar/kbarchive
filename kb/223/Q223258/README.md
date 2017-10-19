---
layout: page
title: "Q223258: How to Install the NTOP on MSCS 1.0 with SQL Server 6.5 or 7.0"
permalink: /kb/223/Q223258/
---

## Q223258: How to Install the NTOP on MSCS 1.0 with SQL Server 6.5 or 7.0

	Article: Q223258
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes new installation instructions for installing the Windows
	NT Option Pack (NTOP) on a Microsoft Cluster Server (MSCS) with SQL Server 6.5
	(with Windows NT SP4 or SQL Server SP5a) or SQL Server 7.0 installed. This
	allows for proper fail-over of the WWW and FTP services.
	
	These instructions are a supplement to the general instructions provided in the
	following Microsoft Knowledge Base article:
	
	  Q191138 How to Install Windows NT Option Pack on Microsoft Cluster Server
	
	If the Microsoft Cluster Server has had Windows NT Service Pack 4 MSDTC, SQL
	Server 6.5 SP5a, or SQL Server 7.0 installed at any time, then it is necessary
	to use a new installation sequence to successfully install the NT Option Pack on
	the cluster. After following the new installation sequence provided below, you
	can use the remainder of article Q191138 to complete the Windows NT Option Pack
	installation on Microsoft Cluster Server 1.0.
	
	A slight change to the Microsoft Distributed Transaction Coordinator (MSDTC)
	files that are upgraded by Windows NT Service Pack 4, SQL Server SP5a and SQL
	Server 7.0 prevents the Windows NT Option Pack installation documented in
	Q191138 from installing successfully on the second node of a Microsoft Cluster
	Server system. This article describes the steps necessary to get the Windows NT
	Option Pack successfully installed on both nodes of the Cluster Server with the
	updated MSDTC files.
	
	Note: This issue with the newer MSDTC components and the Windows NT Option Pack
	Setup program has added some additional complexity to the installation sequence.
	Please read this entire article and make sure that you understand the
	instructions before beginning your Windows NT Option Pack installation on the
	Cluster Server system.
	
	MORE INFORMATION
	================
	
	If you have not yet attempted to install the Windows NT Option Pack onto your
	Microsoft Cluster Server, then you can use the following steps to determine
	whether you should use the standard installation sequence from Q191138 or
	whether you will need to use the new installation sequence documented below.
	
	1. The Windows NT Option Pack setup for a cluster requires that setup is run on
	  both of the nodes in the cluster. Setup must first complete on one node
	  before setup on the second node begins. The first node that setup is run on,
	  for the purposes of this document, will be called Node A. The second node of
	  the cluster that setup is run will be called Node B.
	
	  The designation of Node A and Node B is arbitrary as long as they are used
	  consistently throughout this article and Q191138.
	
	  On whichever node that is chosen to be Node B (the last node on which you run
	  the Option Pack Setup program) check the version of the following two files:
	
	  %windir%\system32\msdtc.exe
	  %windir%\system32\msdtc.dll
	
	2. If the version of both of these two files is 1997.11.532.0, then you can use
	  the installation sequence from Q191138, as it is written.
	
	3. If the version of either of these two files is newer than version
	  1997.11.532.0, then you will need to use the new installation sequence
	  documented below.
	
	When you attempt to install the NTOP onto your Microsoft Cluster Server system
	that has the newer MSDTC files installed, the following error messages occur
	during the installation process on Node B:
	
	  The command "C:\Winnt\System32\msdtc.exe" -join failed
	  Error Code = 0xffffffff
	
	  An exception occurred while installing MSDTC service.
	  Error Code = 0x80004005
	
	  Setup of "Transaction Server Core Components" failed. The specific error code
	  is 0x748dd88.
	  Setup will continue but the component may not function properly.
	
	(You will receive eight of the following errors in a row.)
	
	  CreateIISPackage or DeleteIISPackage, 0x80040154
	  Class not registered.
	
	(If you had chosen to install Index Server you will see the following error.)
	
	  Setup could not set webhits OOP.
	
	(At the end of the NTOP installation you will see the following error.)
	
	  Microsoft Transaction Server Setup was not completed successfully.
	
	These messages mean that the installation of the NTOP on Node B has failed and
	IIS, MTS, and MSDTC will not run properly on Node B. To install the NTOP
	properly on Node B, remove the NTOP from Node B and reinstall it. Use the
	following steps to properly remove the NTOP from Node B:
	
	1. Stop the Cluster Service on Node B.
	
	2. On Node B, click the Add/Remove icon in Control Panel.
	
	3. Choose Windows NT 4.0 Option Pack from the list, and then click the
	  Add/Remove button.
	
	4. When the NTOP Setup is started, choose Remove All to uninstall the Option
	  Pack.
	
	5. Go to step 6 below and restart the installation process on Node B.
	
	To eliminate the chance of a failed installation of the NTOP on Microsoft Cluster
	Server with SQL Server, install the following products in the order they are
	listed for a fresh installation:
	
	- Windows NT Server 4.0 Enterprise Edition
	
	- Windows NT Service Pack 3
	
	- Microsoft Cluster Server 1.0
	
	- SQL Server 6.5 Enterprise Edition
	
	- SQL Server Cluster Service
	
	- Internet Explorer 4.01
	
	- Windows NT Option Pack
	
	(OPTIONAL)
	
	- Uncluster the SQL Server Service
	
	- SQL Server Service Pack 5a
	
	- Recluster the SQL Server Service
	
	(RECOMMENDED)
	
	- Windows NT Service Pack 4
	
	(If SQL Server SP5a or Windows NT SP4 is applied before the NTOP installation,
	errors will occur.)
	Use the following sequence for the Windows NT Option Pack and SQL Server 7.0 on
	Microsoft Cluster Server 1.0:
	
	- Windows NT 4.0 Server Enterprise Edition
	
	- Windows NT Service Pack 3
	
	- Microsoft Cluster Server 1.0
	
	- Internet Explorer 4.01
	
	- Windows NT Option Pack
	
	- Windows NT Service Pack 4
	
	- SQL Server 7.0 Enterprise Edition
	
	- SQL Server Cluster Service
	
	Perform the following steps for systems with newer MSDTC files:
	
	Note: Windows NT must reside in the same location on both Node A and Node B. For
	example, if you install Windows NT to C:\Winnt on Node A, then you need to have
	Windows NT installed to C:\Winnt on Node B as well. If the Windows NT
	%SystemRoot% folder is not identical on both Node A and Node B, you will not be
	able to perform fail-over of IIS.
	
	1. Move all Cluster Resource Groups to Node A.
	
	2. Start the Windows NT Option Pack installation on Node A. On the "Microsoft
	  Internet Information Server" setup screen, accept the default location for
	  the WWW, FTP, and the Application Installation Point settings. During the
	  installation of Transaction Server, on the "Microsoft Transaction Server 2.0"
	  screen, the Windows NT Option Pack Setup program attempts to locate the MSDTC
	  transaction log on a cluster disk resource in any resource groups currently
	  owned by that node. The MSDTC Resource should reside in the resource group
	  that SQL Server is currently located in. When you are prompted for the
	  resource group to install the MSDTC log to and the location for the MSDTC log
	  file, choose the SQL Server Resource Group Network Name you have created from
	  the drop-down list and place the MSDTC Log directory on the Disk Resource
	  that belongs to that SQL Server Resource Group. For example, if your SQL
	  Server Resource Group Network Name is called "SQLGroup" and the Disk Resource
	  assigned to that group is assigned drive letter S:, you would specify
	  "SQLGroup" in the Virtual Server drop-down list, and S:\MSDTCLog as the path
	  to the MSDTC Log directory.
	
	  DO NOT INSTALL ANYTHING INTO THE DEFAULT CLUSTER GROUP.
	
	3. At the end of the Windows NT Option Pack installation, a dialog box is
	  displayed that instructs you to start the installation on Node B and to click
	  OK when the setup is complete. Disregard this message and click OK on this
	  dialog box to continue running setup.
	
	4. When you are prompted to reboot on Node A, choose No. Do not restart Node A
	  at this point.
	
	5. Do not move the Resource Groups from Node A to Node B. Leave the resource
	  groups running on Node A.
	
	6. Switch to Node B and stop the Microsoft Cluster Service by opening a command
	  prompt and typing the following:
	
	  NET STOP CLUSSVC
	
	7. Start the Windows NT Option Pack installation on Node B. On the "Microsoft
	  Internet Information Server" setup screen, accept the default location for
	  the WWW, FTP, and the Application Installation Point settings. This
	  installation does not prompt for the transaction log location. When this
	  installation is complete, restart Node B.
	
	8. If Windows NT Service Pack 4 is installed on Node B, then the Cluster Server
	  service will not start after the NTOP is installed and the computer is
	  restarted. This is a known issue. Please see the following article in the
	  Microsoft Knowledge Base for details:
	
	  Q218922 Installing NTOP on Cluster Server with SP4 Causes Event IDs 1009 and
	  1058
	
	  You must re-apply SP4 on Node B and restart the computer again before the
	  Microsoft Cluster Server service will start.
	
	9. Move the Resource Groups from Node A to Node B.
	
	10. Restart Node A.
	
	11. If Windows NT Service Pack 4 is installed on Node A, then the cluster
	  service will not start after the NTOP is installed. This is a known issue.
	  Please see the following article in the Microsoft Knowledge Base for
	  details:
	
	  Q218922 Installing NTOP on Cluster Server with SP4 Causes Event IDs 1009 and
	  1058
	
	  You must re-apply SP4 on Node A and restart the computer again before the
	  Microsoft Cluster Server service will start.
	
	The following 7 steps are used to ensure that MSDTC is configured properly for
	use on a clustered system.
	
	12. Move the resource groups from Node B to Node A. Leave the resource groups
	  running on Node A.
	
	13. From a command prompt on Node A, type the following:
	
	  msdtc -remove
	
	14. From a command prompt on Node B, type the following:
	
	  msdtc -remove
	
	15. If there is an MSDTC resource in any of the Cluster Server Resource Groups,
	  please delete this resource from the group that it is in. It can be in only
	  one resource group if it is installed. If there is no MSDTC resource in any
	  resource groups, this is OK.
	
	16. From a command prompt on Node A, type the following:
	
	  msdtc -install -d %windir%\system32 -l <location of DTC log file on SQL
	  shared disk> -v <SQL Group Virtual Server Name>
	
	Note: Make sure that the directory you specify for the DTC log file exists on the
	shared disk. For example, if you entered S:\MSDTCLog for the -l variable, check
	to be sure an MSDTCLog directory exists on the root of the S drive. If it does
	not exist, create the directory before running the above command(for example,
	for SQLGroup, you would type "msdtc - install -d %windir%\system32 -l
	S:\MSDTCLog -v SQLGroup" (without the quotation marks))
	
	17. From a command prompt on Node B, type the following:
	
	  msdtc -join %windir%\system32
	
	At this point, MSDTC will be properly installed on the Cluster and an MSDTC
	Resource will now exist in the SQL Server Resource Group in Cluster
	Administrator. For fail-over of the SQL Server group to function properly, make
	sure to do step 18. Failure to perform step 18 will cause SQL Server Group
	fail-over to take up to five minutes to move from one node to the other.
	
	18. In the Cluster Administrator, highlight the MSDTC Resource in the SQL Server
	  Resource Group you specified, right-click on it and choose Properties. Click
	  the Dependencies tab and click the Modify button. In the left-hand frame of
	  the Modify Dependencies Window, highlight the SQL Server Virtual Server
	  Network Name resource and double-click on it. This should move the Virtual
	  Server Name from the left frame to the right frame and list it as a
	  "dependency." Click OK, click Apply, and then click OK.
	
	19. At this point, the Web or FTP fail-over sites need to be created. Internet
	  Information Server (IIS) virtual servers in this configuration require a
	  resource group with an IP address at minimum; however, it is recommended
	  that you also have a disk resource to store the Web pages on as well.
	
	  DO NOT USE THE DEFAULT CLUSTER GROUP.
	
	20. Move the Resource Group that you intend on creating the IIS Instance in to
	  Node A, if it is not already running on Node A. If you have not created a
	  Resource Group for your World Wide Web sites, create one now and give it a
	  disk resource and IP address resource that your WWW site will use (for
	  example, if your Resource Group for your Web Sites is called WWWGroup, move
	  the WWWGroup to Node A).
	
	21. In the Microsoft Management Console (MMC) on Node A, expand the Internet
	  Information Server tree, right-click on the computer name, and create a new
	  Web (or FTP) site.
	
	22. In the properties for this new site, set the IP address of the site to be
	  the same as the IP address resource for the resource group that this Web
	  site will reside in (for example, if you have an "IP Address" Resource in
	  your WWWGroup, and it is configured as 10.5.5.1, configure the new Web site
	  to use this address in the MMC).
	
	23. Select the directory, Universal Naming Convention (UNC) connection, or
	  redirection that the site should use as the home directory. If you are
	  selecting a drive, it should be a disk resource that is in the same Resource
	  Group that the IP address is in.
	
	24. Repeat Steps 21 through 23 for each WWW of FTP site that you want to provide
	  fail-over capabilities to.
	
	At this point in the installation process, you can refer back to Q191138 and
	proceed through the rest of that article without problems, beginning at
	"Synchronize the IIS User Accounts."
	
	For more information, please see the following Web page:
	
	  http://www.microsoft.com/ntserver/ntserverenterprise/deployment/planguide/ntoption.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
