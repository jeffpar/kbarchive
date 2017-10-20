---
layout: page
title: "Q241573: How to Install IIS 4.0 onto a Single Node of MSCS 1.0"
permalink: /kb/241/Q241573/
---

## Q241573: How to Install IIS 4.0 onto a Single Node of MSCS 1.0

{% raw %}

	Article: Q241573
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During the initial installation of Internet Information Server 4.0 (IIS) onto a
	Microsoft Cluster Server, you normally begin installing IIS onto the first Node
	of the Cluster. Then you completely install IIS onto the second Node of the
	Cluster when prompted, and then you complete the installation of IIS back on the
	first Node of the Cluster.
	
	For additional information, please click the article number(s) below to view the
	article(s) in the Microsoft Knowledge Base:
	
	  Q191138 How To Install the NTOP on Cluster Server
	
	This technique works fine initially but is not the method one would want to use
	if only one Node is lost in the cluster due to a disk failure or other failure
	of a Node. If the cluster is working properly the functioning Node should have
	taken ownership of the cluster and is continuing to service your system needs
	while the non-functioning Node is down.
	
	This article contains a list of steps that can be followed to reinstall Windows
	NT Option Pack onto a non-functioning Node once it has been repaired. This will
	preserve your existing build of IIS on the functioning Node so that you can use
	it as a template to reconfigure the Web and FTP information on the
	non-functioning Node.
	
	There is an alternative reason why you might need to install IIS 4.0 onto a
	single node in a Cluster. It is possible to corrupt IIS on one node of a cluster
	without corrupting IIS on the other node of the cluster. If you feel that it is
	necessary to install IIS 4.0 onto a single node in a cluster because of
	corruption of IIS on that node, then some critical steps which are different
	than a full rebuild must be performed on that node prior to you reinstalling IIS
	back onto the node.
	
	Both a full rebuild and an uninstall and reinstall of IIS are covered in this
	document.
	
	MORE INFORMATION
	================
	
	It is important that you follow these instructions exactly with regard to
	installing IIS 4.0 back onto the single Node of the cluster. Failure to do so
	could result in problems with IIS cluster resources being corrupted, which would
	require a rebuild of IIS 4.0 on both Nodes of the Cluster. This problem will not
	occur as long as you follow the steps exactly as written.
	
	Installing IIS onto a Newly Rebuilt Cluster Node:
	
	The proceeding steps assume that you had to rebuild one of the Nodes of your
	cluster, due to a catastrophic failure of the Node. Since that failure you have
	repaired the problem, reinstalled Windows NT 4.0 Enterprise Edition onto the
	system, applied the same Windows NT 4.0 Service Pack currently installed on the
	functioning node and have rejoined the rebuilt Node back into the original
	Cluster that it belonged to. If this is indeed the case then you can proceed to
	the "Steps to Reinstall IIS 4.0 onto a Single Node of a Cluster" section and
	begin installing IIS 4.0 back onto the new Node.
	
	Removing and Reinstalling a Corrupted version of IIS on a Single Cluster Node:
	
	To reinstall IIS 4.0 onto a single node in a cluster it is necessary to uninstall
	it first. Use the following steps to uninstall IIS4 from the cluster node.
	
	1. Stop the Cluster Server Service on the Node that you want to uninstall IIS4.
	  This can be done by stopping the Cluster Server Service from the Services
	  Applet in Control Panel. After you Stop the Cluster Server Service, set the
	  Startup Type for the Cluster Server Service to manual.
	
	  IT IS EXTREMELY IMPORTANT YOU DO NOT PROCEED UNTIL YOU ARE CERTAIN THAT THE
	  CLUSTER SERVICE IS STOPPED ON THE CLUSTER NODE YOU INTEND ON UNINSTALLING IIS
	  4.0 FROM.
	
	2. From the Control Panel Add/Remove Programs Applet chose Windows NT 4.0 Option
	  Pack and then click Add/Remove. In the Windows NT Option Pack Setup Program
	  Window choose Remove All. Because the IIS build is corrupted you may see some
	  errors pointed out during the uninstall process. These errors can be ignored.
	
	3. After IIS has been removed you should restart the Cluster Node. If Service
	  Pack 4 or greater is on the Node, then you should re-apply the Service Pack
	  before proceeding.
	
	After you have uninstalled IIS 4.0 from the single cluster node you can follow
	the steps below to reinstall IIS 4.0 back onto the single node and re-cluster
	IIS.
	
	Steps to Reinstall IIS 4.0 onto a Single Node of a Cluster:
	
	1. Make certain that the Cluster Server Service is STOPPED and set to Manual
	  Startup before you proceed. You can stop the Cluster Server Service through
	  the Services Applet in Control panel. You should also set the Startup Type
	  for the Cluster Server Service to Manual.
	
	2. Run the Windows NT Option Pack Setup.
	
	3. It is important that during the setup of the Windows NT Option Pack you
	  choose the exact same installation method, Minimal, Typical or Custom that
	  was used during the original installation of IIS onto the Cluster Server. For
	  example, if you did a Custom install of IIS on the Cluster originally and
	  unchecked Index Server and SMTP, then you want to also perform a Custom
	  Install of IIS on the single Node choosing to uncheck the Index Server and
	  SMTP.
	
	4. Once the installation of the Windows NT Option Pack is completed you should
	  restart the node you just installed onto.
	
	5. If you have Windows NT Service Pack 4 or greater on the system then you
	  should reapply that Service Pack at this time and restart the Node again.
	
	6. You can now re-enable clustering on this Node. In the Services Applet in
	  Control Panel chose the Cluster Server Service and click Start. Then change
	  the Startup Type back to automatic.
	
	This completes the re-installation of IIS 4.0 back onto the single node of the
	cluster server. Perform the remaining steps to re-cluster the node you just
	installed and resynchronize the IIS 4.0 settings on this node with the settings
	currently running on the good node.
	
	Reclustering IIS 4.0:
	
	This section discusses the method used to recluster IIS 4.0 after performing a
	standalone installation of IIS 4.0 onto a single node of a Microsoft Cluster
	Server. When you discuss reclustering IIS what you are referring to is
	reclustering the MSDTC Service and re-synchronizing the metabase settings
	between the two nodes. If you had to completely rebuild the cluster node, then
	when you installed IIS onto the node with the Cluster Service stopped, the MSDTC
	service was installed as a standalone version and both nodes will need to have
	the MSDTC service re-configured. Because of this, you will have to remove the
	MSDTC service and reinstall it in a clustered configuration on both Nodes. This
	is a fairly simple process.
	
	If you have uninstalled IIS 4.0 from a single node and then reinstalled IIS 4.0
	back onto that node, then you may be able to skip this section. Normally, an
	uninstall of IIS will not remove the MSDTC components on the Node. To test this
	you should move the resource group that contains the MSDTC resource over to the
	second node and make sure that the MSDTC resource comes online. Before you
	attempt to move your IIS and MSDTC resources, make sure you configure each of
	the IIS Server Instances and the MSDTC resource to NOT "AFFECT THE GROUP". To do
	this in the Cluster Administrator, right-click on the Resource and choose
	properties. Click on the Advanced Tab and take the check mark out of the box to
	the left of the "Affect the Group" item. Do this for each IIS Server Instance
	and the MSDTC resource. Do not expect any WEB or FTP Instances to come online
	yet because we have not synchronized the metabase settings between the two
	nodes. If the MSDTC resource does come online on the second Node, then you can
	move the resource group back over to the node it came from and skip down to the
	section on "Configuring IIS after Installation". If the MSDTC resource does not
	come online then look for the appropriate installation instructions later to
	uninstall and reinstall MSDTC onto the cluster.
	
	Reinstalling MSDTC onto the Cluster Server:
	
	There are two techniques that can be used to install MSDTC onto a cluster, the
	manual way and by running dtcsetup.exe. If you're running a Windows NT Service
	Pack 3 and do not have SQL 7.0 or SQL 6.5 with Service Pack 5a on the Cluster,
	then you will need to follow the manual installation instructions. Otherwise you
	can use the Dtcsetup.exe method.
	
	a. Installing Clustered MSDTC using Dtcsetup:
	
	  The first step in running Dtcsetup is to obtain the appropriate Dtcsetup file
	  for the version of MSDTC already installed on the cluster. Use the following
	  guide to determine which Dtcsetup you need and the method used to obtain the
	  appropriate version of the file.
	
	  If you have Windows NT Service Pack 4, SQL 6.5 with SQL Service Pack 5a or SQL
	  7.0 installed on the cluster then you can download Dtcsetup.exe from:
	
	  ftp://ftp.microsoft.com/bussys/distapps/mts/public-fixes/usa/dtc/svcpack
	
	  Both Alpha and Intel versions of the Dtcsetup.exe can be found here.
	
	  If you have Windows NT Service Pack 5 installed on the Cluster Servers then
	  you will need to Contact Microsoft Technical Support to obtain Dtcsetup.exe.
	  Request the hotfix appropriate for your platform from Knowledge Base Article
	  Q234673.
	
	  (THIS VERSION OF DTCSETUP.EXE SHOULD ONLY BE INSTALLED
	  ON SYSTEMS RUNNING WINDOWS NT 4.0 SERVICE PACK 5)
	
	  For a complete list of Microsoft Product Support Services
	  phone numbers and information on support costs, please go to the following
	  address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	  Once you have obtained the Dtcsetup.exe appropriate for the version that is
	  currently installed on the Cluster Server, you can follow the following steps
	  to reinstall a clustered version of MSDTC back onto both nodes of the
	  cluster.
	
	  1. Create an empty temporary directory on both nodes of the cluster.
	
	  2. Place the Dtcsetup.exe file in the temporary directory on both nodes of
	     the cluster.
	
	  3. Use the MSCS Cluster Administrator to stop the Microsoft DTC cluster
	     resource, if it is running. Stop all services that depend on Microsoft
	     DTC.
	
	     (including Internet Information Server, Microsoft Transaction Server,
	     Microsoft SQL Server, Microsoft Message Queue, and Microsoft COMTI).
	
	  4. Close Windows NT Control Panel on all systems in the cluster.
	
	  5. Run Dtcsetup.exe on the node that owns the Microsoft DTC cluster resource.
	     When you are prompted to install Microsoft DTC on the other nodes in the
	     cluster, run Dtcsetup.exe on that node.
	
	  6. Confirm that the MSDTC resource can be brought online in the Cluster
	     Administrator and can also be brought online on the second node.
	
	  7. Restart all services that depend on Microsoft DTC.
	
	  Once you have MSDTC properly functioning on both nodes of the cluster you can
	  proceed to the section "Configuring IIS after Installation".
	
	b. How to install MSDTC on a Cluster using the Manual Method:
	
	  1. If there is an MSDTC resource in any of the Cluster Server Resource
	     Groups, please delete this resource from the group that it is in. It can
	     be in only one resource group if it is installed. If there is no MSDTC
	     resource in any resource groups, this is OK.
	
	  2. Close the Cluster Administrator on both nodes.
	
	  3. From a command prompt on the working node, type the following:
	
	     " msdtc -remove " (without the quotation marks)
	
	  4. From a command prompt on the node you are reinstalling, type the
	     following:
	
	     " msdtc -remove " (without the quotation marks)
	
	  5. From a command prompt on the working node, type the following:
	
	     " msdtc -install -d %windir%\system32 -l <location of DTC log file on
	     cluster shared disk> -v <Resource Group Virtual Server Name> "
	     (without the quotation marks)NOTE: Make sure that the directory you
	     specify for the DTC log file exists on the shared disk. For example, if
	     you entered S:\MSDTCLog for the -l variable, check to be sure an MSDTCLog
	     directory exists on the root of the S drive. If it does not exist, create
	     the directory before running the earlier command. The <Resource Group
	     Virtual Server Name> refers to the value you set for the Network Name
	     Resource in the Cluster Resource group you want to install the MSDTC
	     resource into. For example, if you have a resource group and the network
	     name resource has a setting of SQLVServer, you would type:
	
	     " msdtc - install -d %windir%\system32 -l S:\MSDTCLog -v SQLVServer "
	     (without the quotation marks)
	
	  6. From a command prompt on the node you re-installed, type the following: "
	     msdtc -join " (without the quotation marks)
	
	  7. Before you attempt to bring the MSDTC resources online, set the MSDTC
	     resource to NOT "AFFECT THE GROUP". To do this, Open the Cluster
	     Administrator, right-click on the Resource and choose properties. Click on
	     the Advanced tab and take the unselect the box to the left of the "Affect
	     the Group" item.
	
	  8. In the Cluster Administrator, bring the MSDTC resource online. Then move
	     the MSDTC resource to the other node to make sure it comes online there as
	     well. Move the MSDTC resource back to the first node.
	
	  9. If the MSDTC resource does not come online, check the event viewer on both
	     nodes for errors.
	
	  Once you have MSDTC properly functioning on both nodes of the cluster you can
	  proceed to the "Configuring IIS after Installation".
	
	Configuring IIS after Installation:
	
	It is necessary to set certain IIS parameters when installing IIS onto a cluster.
	This section addresses each of those parameters. Perform each item in the list
	to ensure that you're IIS installation on this node in the cluster is properly
	configured to handle fail-over of you're Web instances.
	
	- Make sure that the primary copy of IIS is properly configured for MTS
	  Replication. Perform the following steps on the active cluster server node.
	
	  1. Open the Internet Service Manager.
	
	  2. Double-click on Microsoft Transaction Server.
	
	  3. Double-click on the Computers Folder.
	
	  4. Right-click on My Computer.
	
	  5. Choose Properties.
	
	  6. Click on the Options tab.
	
	  7. In the Replication Share box, place the administrative share where the
	     \Program Files\MTS directory resides on the target server. For example: If
	     Transaction Server was installed to the C:\Program Files\MTS directory
	     then you would put C$ in the Replication Share box on the Options Page. In
	     the Remote Server Name box, place the NetBIOS name of the other node in
	     the cluster. (For example, On Node1, put the name of Node2. On Node2, put
	     the name of Node1).
	
	- Once you are certain that MTS Replication is properly configured on the
	  Primary working cluster server node then you can open a command prompt on
	  this same Primary working cluster server node. Be certain to use cmd and not
	  command to open the command prompt with. Change directory to
	  \winnt\system32\inetsrv.
	  Then type the following command:
	
	  " IISSYNC <Netbios Name of the cluster node you just rebuilt> " (without
	  the quotation marks) IISSYNC will replicate the IIS and MTS settings from the
	  currently running good copy of IIS to the new installation of IIS you just
	  installed.
	
	  DO NOT RUN IISSYNC FROM THE NEW INSTALLATION OF IIS YOU JUST INSTALLED. MAKE
	  CERTAIN THAT IISSYNC IS ONLY RUN FROM THE WORKING IIS NODE IN THE CLUSTER.
	
	  After IISSYNC completes, it should quit with a status code of zero. If you do
	  not get a status code of zero, then you did not get a successful replication
	  of your IIS and MTS settings. Refer to the following article for common
	  IISSYNC status codes to correct the problem and run IISSYNC again.
	
	  Q224801 Deciphering IISSYNC Status Codes
	
	- After IISSYNC has replicated the IIS and MTS information, you should check
	  the following items to make sure that permissions for the IUSR and IWAM
	  accounts are properly configured on the new installation. When you first
	  installed IIS onto the cluster you should have created a Domain account
	  called IUSR_CLUSTER and IWAM_CLUSTER (you may have chosen different names).
	  These accounts should be used instead of the default local accounts
	  IUSR_<MACHINE NAME> and IWAM_<MACHINE NAME> that get created
	  during an IIS install. The following steps will assist in confirming these
	  Domain Cluster accounts are properly configured on the newly installed IIS
	  cluster node.
	
	  a. Perform these steps on the node you just re-installed IIS.
	
	  b. In User Manager go to Policies / User Rights, select the "Log On Locally"
	     and "Access this computer from network" Policy and make sure that the
	     Domain IUSR and IWAM accounts are there. If they are not, add them.
	
	  c. Check that both the IWAM and IUSR Cluster Domain accounts are in the
	     Guests Local Group. If they are not, add them.
	
	  d. Check that the IWAM Cluster Domain account is in the MTS Trusted
	     Impersonators (or it may be named MTS Impersonators) Local Group on the
	     Node. If it is not, add it.
	
	  e. Check that both the IWAM and IUSR Cluster Domain accounts are in the Dcom
	     Default Access group with Allow Access Permission and the Dcom Default
	     Launch Group with Allow Launch Permission. If they are not, add them. To
	     check Dcom settings launch the Dcom Configuration Window by clicking on
	     Start / Run and type dcomcnfg. When the Distributed COM Configuration
	     Properties window opens click on the Default Security tab. To confirm
	     settings, click on the Edit Default button in the Default Access
	     Permissions and the Default Launch Permissions area of the window.
	
	At this point your installation of IIS onto the single node in the cluster is
	complete. You should finish up by scheduling a time, off hours, in which you can
	move over all IIS Server Instances in the cluster from the current active node
	to the backup node. Test all your Web sites to confirm they are working properly
	and then you can move your IIS Server Instances to which ever node you wish to
	use as the primary node. After you have tested your system then you should
	re-enable the "Affect the Group" settings you disabled earlier so that if a
	failure occurs your groups will be moved to the backup node.
	
	For more information, please see the following Web page:
	
	  http://www.microsoft.com/ntserver/ntserverenterprise/deployment/planguide/ntoption.asp
	
	Additional query words: IIS 4.0 Cluster MSCS 1.0 MSDTC
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
