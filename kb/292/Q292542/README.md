---
layout: page
title: "Q292542: HOWTO: IIS5: Setting Up Index Server 2.0 as a Generic Clustered"
permalink: kb/292/Q292542/
---

## Q292542: HOWTO: IIS5: Setting Up Index Server 2.0 as a Generic Clustered

	Article: Q292542
	Product(s): Internet Information Server
	Version(s): 2000,2000 SP1,2000 SP2,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUN-2001
	
	This article provides information about a configuration that 
	is not supported by Microsoft Technical Support. This article 
	is provided for informational purposes only; Microsoft makes 
	no guarantee that this configuration will function properly.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	- Indexing Service 
	-------------------------------------------------------------------------------
	
	CAUTION: This is not a Microsoft Approved Configuration.
	This configuration is an optional workaround to overcome known limitations with Indexing Service and Window 2000 Cluster Services.
	Configuring Indexing Service in this manner is done at your own risk.
	These configurations are not supported beyond Best Efforts.
	
	SUMMARY
	=======
	
	After you start Indexing Service and begin creating a Custom Catalog for your
	Web site, when you move the Web Instance and Disk Resource to the second node,
	the Custom Web Site Catalog has been stopped. This is by design. To move the
	Disk Resource from Node A to Node B, the file locks that are caused by indexing
	the disk must be released. This is done by stopping the catalog. However, after
	you move the IIS server instance and Disk Resource back to Node A, the catalog
	remains offline until you manually start it.
	
	The Index Server Catalogs are not dynamic and do not automatically restart when
	the cluster instances return. There are three methods to configure Indexing
	Service to dynamically restart the catalogs in a clustered environment. This
	article describes all three configurations.
	
	NOTE: The steps in this article should only be performed after you have
	successfully clustered IIS and are able to move your IIS Resource Group between
	nodes without errors.
	
	MORE INFORMATION
	================
	
	Configuration One: Using a Batch File to Restart Indexing Service:
	
	To configure a batch file (that runs a command to restart the Index Service) as a
	Generic Application in Cluster Administrator, do the following:
	
	1. Create the batch file to stop and restart Indexing Service as follows:
	
	  a. Right-click your Desktop, click New, and then click Text Document.
	
	  b. Name the document Index.Bat.
	
	  c. Right-click Index.Bat, and then choose Edit.
	
	  d. Type "net stop cisvc net start cisvc" (without the quotation marks).
	
	  e. Save and close Index.Bat.
	
	  f. Move Index.Bat to the Inetpub directory.
	
	2. Open the Cluster Administrator.
	
	3. Right-click the Web Resource Group, click New, and then click Resource.
	
	4. Name the new resource Index Batch.
	
	5. Select Generic Application as the resource type, and then click Next.
	
	6. Select both Nodes as Possible Owners, and then click Next.
	
	7. In Dependencies, select Disk, Network Name, and IIS Server Instance, and then
	  click Next.
	
	8. In Parameters, enter the following:
	
	  a. In Command Line:, type "cmd /k <Drive>:\inetpub\index.bat" (without
	     the quotation marks).
	
	  b. In Current Directory:, type <Drive>:\inetpub\.
	
	  c. Click to clear the Allow application to interact with desktop check box.
	
	  d. Click to select the Use Network Name for Computer Name check box.
	
	  e. Click Finish.
	
	9. Open the Index Server snap-in.
	
	10. Click the Index Server snap-in, so you can see the catalog status in the
	  right-hand pane.
	
	11. In the Cluster Administrator, bring the new Index.bat Instance online. Note
	  that Index Server will stop and restart.
	
	12. Right-click the Web Resource Group and move it to the opposite node. (Note
	  that the Customer Web Catalog has stopped.)
	
	13. Move the group back. (Note that the services are restarted and the catalog
	  is online.)
	
	Configuration Two: Using a Cluster Generic Service to Allow the Cluster Service to Control the Indexing Service:
	
	In this configuration, set up Indexing Service as a Generic Cluster Service in
	Cluster Administrator. The Indexing Service will be configured with two
	independent local catalogs, which means that you will need to allow Indexing
	Service to index the Web site content on Node A, and then move the IIS Resources
	to Node 2, and let the Indexing Service on Node B index the Web site content.
	
	To set up Indexing Service as a Generic Cluster Service with two independent
	catalogs, do the following:
	
	1. On node A, open the Cluster Administrator and verify that the IIS Cluster
	  Instances are owned by Node A. If not, move the IIS Cluster Group to Node A.
	  (Minimize the Cluster Administrator.)
	
	2. Open the Indexing Service MMC snap-in on Node A (or the Computer Management
	  MMC snap-in in the Administrative Tools).
	
	3. Create a new catalog:
	
	  a. Right-click the Indexing Service snap-in, click to expand New, and then
	     click Catalog. (The Add Catalog dialog box will be displayed.)
	
	  b. Give the catalog a name and choose the path (a local path) where the
	     catalog will reside. Click OK.
	
	  c. You will receive a Warning that states:
	
	  The catalog will remain off-line until Indexing Service is restarted.
	
	  d. Right-click the New Catalog, and then click Properties.
	
	  e. In the <your catalog name> properties, click the Tracking tab.
	
	  f. In the WWW Server drop-down list, select the site that you want this
	     catalog to index, and then click OK.
	
	  g. Stop and restart the Indexing Service by right-clicking the Indexing
	     Service snap-in, clicking Stop, and then clicking Start.
	
	  h. Wait for the Indexing Service to index the Web site, and then stop the
	     Indexing Service.
	
	4. Open the Cluster Administrator and move the Web Group to Node B.
	
	5. Repeat step 3 on Node B. (When the catalog has completed indexing the site
	  and you have stopped the Indexing Service, move to the next step.)
	
	6. Open the Cluster Administrator.
	
	7. Right-click the Web Resource Group, click New, and then click Resource.
	
	8. Name the New Resource "Indexing Service" (without the quotation marks).
	
	9. Select Generic Service as the Resource Type, and then click Next.
	
	10. Select both Nodes as Possible Owners, and then click Next.
	
	11. In Dependencies, click Disk, click Network Name, click IIS Server Instance,
	  and then click Next.
	
	12. In Generic Service Parameters, type "CISVC" (without the quotation marks) in
	  the Service Name field, leave the Start Parameter blank, click to check the
	  Use Network Name for Computer Name check box, and then click Next.
	
	13. Leave the Registry Replication dialog box blank, and then click Finish.
	
	14. Bring the new Indexing Cluster Service online.
	
	15. Test fail over by moving the Web Group between both nodes and verify that
	  the Indexing Service is coming online and the catalog is functioning
	  correctly:
	
	  a. Open Indexing Service on the node that does not own the Web Group, and
	     where the Indexing Service is stopped.
	
	  b. Open the Cluster Administrator, right-click the Web Group, and then click
	     Move Group.
	
	  c. In the Indexing Services snap-in, verify that it comes online when the
	     Indexing Cluster Service comes online in the Cluster Administrator.
	     (Repeat these steps on the opposite node.)
	
	You now have a Clustered Indexing Service Instance with two independent catalogs
	that are indexing the same Web site content.
	
	Configuration Three: Using a Cluster Generic Service to Allow the Cluster Service to Control the Indexing Service with a Shared Catalog:
	
	In this configuration, set up Indexing Service as a Generic Cluster Service in
	the Cluster Administrator. The Indexing Service will be configured with one
	shared catalog (on the same shared disk that the IIS Instance content resides
	on). This means you will only need to allow Indexing Services to index the Web
	site content on Node A. When the Index Server Instance moves to Node B, the
	catalog from Node 1 will be available and a re-index will not be needed. This
	makes for fast recovery when a Cluster Member fails. However, there is a risk of
	catalog corruption that would then affect both Indexing Services.
	
	NOTE: To reduce the chance of catalog corruption, you must have the catalog
	content on the Web Groups Shared Disk and the Indexing Service Instance in the
	Web Group. Also, the Indexing Service Cluster Instance must be dependent on all
	three: The Disk Resource, Network Name, and IIS Server Instance.
	
	To set up Indexing Service as a Generic Cluster Service with a single shared
	catalog, do the following:
	
	1. On Node A, open the Cluster Administrator and verify that the IIS Cluster
	  Instances are owned by Node A. If not, move the IIS Cluster Group to Node A.
	  (Minimize the Cluster Administrator.)
	
	2. Open the Indexing Service MMC snap-in on Node A (or the Computer Management
	  MMC snap-in in Administrative Tools).
	
	3. Create a new catalog:
	
	  a. Right-click the Indexing Service snap-in, click to expand New, and then
	     click Catalog. (The Add Catalog dialog box will be displayed.)
	
	  b. Give the catalog a name and choose the path (a local path) where the
	     catalog will reside (the Shared Disk Resource where your IIS Web Content
	     Resides). Click OK.
	
	  c. You will receive a Warning that states:
	
	  The catalog will remain off-line until Indexing Service is restarted.
	
	  d. Right-click the New Catalog, and then click Properties.
	
	  e. In the <your catalog name> properties, click the Tracking tab.
	
	  f. In the WWW Server drop-down list, select the site that you want this
	     catalog to index, and then click OK.
	
	  g. Stop and restart the Indexing Service by right-clicking the Indexing
	     Service snap-in, clicking Stop, and then clicking Start.
	
	  h. Wait for the Indexing Service to index the Web site, and then stop the
	     Indexing Service.
	
	4. Open the Cluster Administrator and move the Web Group to Node B. (This will
	  allow Node B to connect to the Disk Resource when setting up the catalog on
	  this node.)
	
	5. Repeat step 3 on Node B. (When the catalog has completed indexing the site
	  and you have stopped the Indexing Service, move to the next step.)
	
	6. Open the Cluster Administrator.
	
	7. Right-click the Web Resource Group, click New, and then click Resource.
	
	8. Name the New Resource "Indexing Service" (without the quotation marks).
	
	9. Select Generic Service as the Resource Type, and then click Next.
	
	10. Select both Nodes as Possible Owners, and then click Next.
	
	11. In Dependencies, click Disk, click Network Name, click IIS Server Instance,
	  and then click Next.
	
	12. In Generic Service Parameters, type "CISVC" (without the quotation marks) in
	  the Service Name field, leave the Start Parameter blank, click to check the
	  Use Network Name for Computer Name check box, and then click Next.
	
	13. Leave the Registry Replication dialog box blank, and then click Finish.
	
	14. Bring the new Indexing Cluster Service online.
	
	15. Test fail over by moving the Web Group between both nodes and verify that
	  the Indexing Service is coming online and the catalog is functioning
	  correctly:
	
	  a. Open Indexing Service on the node that does not own the Web Group, and
	     stop the Indexing Service.
	
	  b. Open the Cluster Administrator, right-click the Web Group, and then click
	     Move Group.
	
	  c. In the Indexing Services snap-in, verify that it comes online when the
	     Indexing Cluster Service comes online in the Cluster Administrator.
	     (Repeat these steps on the opposite node.)
	
	You now have a Clustered Indexing Service Instance with a single shared catalog
	indexing the Web Site content.
	
	Additional query words: iis5 failover offline random
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServSearch kbwin2000ServSearch kbwin2000Search kbiisSearch
	Version           : :2000,2000 SP1,2000 SP2,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
