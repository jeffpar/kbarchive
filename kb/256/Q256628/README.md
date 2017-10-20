---
layout: page
title: "Q256628: How to Install Clustering on a SCSI IBM Server"
permalink: /kb/256/Q256628/
---

## Q256628: How to Install Clustering on a SCSI IBM Server

{% raw %}

	Article: Q256628
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IBM Netfinity Cluster solution using the IBM ServeRAID-3H, IBM ServeRaid
	3HB, IBM ServeRaid-3L, IBM ServeRaid 4H, IBM ServeRaid 4L, IBM ServeRaid 4LX,
	and IBM ServeRaid 4MX SCSI Adapters use existing technology and proprietary
	software to implement Microsoft Cluster Server using IBM ServeRAID controllers
	and the IBM ServeRAID NT Cluster Solution utility. Standard installation
	procedures for Microsoft Cluster Server do not apply to these configurations.
	
	You must configure the cables to the arrays and the controllers according to IBM
	documentation. Before you perform the steps in this article, contact IBM support
	and refer to the following document: ServeRAID - IBM Netfinity High Availability
	Cluster Solutions For IBM ServeRAID-3H and ServeRAID-3HB Installation and User's
	Guide.
	
	This article describes how to install Microsoft Cluster Server on a SCSI IBM
	server using a ServeRAID controller. Although this article contains
	configuration suggestions, you may need to contact IBM support for further
	assistance.
	
	MORE INFORMATION
	================
	
	Before you perform the installation, refer to IBM support for the location and
	most recent version of the ServeRAID controllers and the IBM ServeRAID NT
	Cluster Solution utility, and make sure that your hardware is configured
	correctly:
	
	- Check the computer's BIOS and ensure that it is the latest by booting to the
	  latest ServeRaid support CD. The CD will always check the current level and
	  ask to perform an upgrade if needed.
	
	- Verify in the ServeRAID adapters that the host IDs, partner IDs, and merge
	  groups are all set up correctly using the ServeRaid Support CD. To do this,
	  boot to the CD and then right click the controller. Select Clustering Actions
	  and then configure for clustering. The controller name and partner name will
	  then be listed.
	
	- Obtain the latest installation software for the IBM ServeRAID NT Cluster
	  Solutions utility off of the ServeRaid support CD. The diskette can be made
	  by booting into Windows NT 4.0 Enterprise Edition and running "<CD-Rom
	  Drive>:\diskette\tools <CD-Rom Drive>:\diskette\clusnt.img" (without
	  the quotation marks).
	
	- Make sure that you are using the most recent ServeRAID device drivers, bios
	  and firmware. They may be created using the same process as the IBM ServeRAID
	  NT Cluster Solution diskette.
	
	Installation Procedure
	----------------------
	
	1. Install Enterprise Edition, and then update both servers to Service Pack 3.
	
	  NOTE: Do not install Cluster Server at this time.
	
	2. Format all shared logical drives and assign drive letters to them by using
	  the following steps:
	
	  a. On Node1, run the Ipshahto.exe tool to make all the shared logical drives
	     accessible by Node1. From the IBM ServeRAID NT Cluster Solutions utility,
	     run Ipshahto.exe by typing the following command at a command prompt:
	
	  a:\support\ipshahto
	
	NOTE: Before you use the Ipshahto.exe tool, perform the following tasks:
	
	      - Use the Administration and Monitoring utility to scan for new devices.
	
	      - Check to see if the synchronization of RAID 5 logical drives is
	        finished. You can use the ServeRAID Administration and Monitoring
	        utility to see if any synchronization is running. The status bar will
	        be listed on the bottom of the screen.
	
	  b. Use Disk Administrator (Windisk.exe) to format all shared logical drives
	     as NTFS, assign volume labels, and specify drive letters.
	
	  c. On Node2, run Ipshahto.exe to make all shared logical drives accessible by
	     Node2.
	
	  d. Use Disk Administrator to assign Node2 with the same drive letters that
	     you assigned to each drive on Node1.
	
	     NOTE: The volume label is used as a guide to make sure the same letters you
	     assigned on Node1 are assigned on Node2. It is helpful if part of the
	     volume label that you specify contains the drive letter that is assigned
	     to a drive (for example, drive_E).
	
	  e. Run Ipshahto.exe from Node1 again to regain control of all shared logical
	     drives to that server.
	
	3. Install Cluster Server:
	
	  a. Insert Enterprise Edition CD-ROM 2 in Node1.
	
	  b. At a command prompt, type the following command:
	
	  <cdromdrive>\mscs\cluster\i386\setup /localquorum
	
	NOTE: You must use the localquorum command-line option when you install
	clustering software with an IBM ServeRAID adapter.
	
	A local quorum drive will be used on the server's %SystemRoot% folder. Later in
	this procedure, the local quorum drive must be moved to a ServeRAID logical
	array resource.
	
	  c. When the installation is finished, restart Node1.
	
	4. Join Node2 to the cluster:
	
	  a. Insert Enterprise Edition CD-ROM 2 in Node2.
	
	  b. At a command prompt, type the following command:
	
	  <cdromdrive>\mscs\cluster\i386\setup
	
	  c. When the installation is finished, restart Node2.
	
	5. Install the IBM ServeRAID NT Cluster Solution utility:
	
	  a. On Node1, from the IBM ServeRAID NT Cluster Solution utility, run the
	     Setup.exe program and follow the instructions that appear on the screen.
	
	  b. When you are finished with step a, repeat the procedure on Node2.
	
	  c. After you install the utility on both servers, all shared ServeRAID groups
	     and disk resources are automatically created by the IBM Cluster Solution
	     Setup program and started.
	
	     Note: The IBM ServeRAID Cluster Solution diskette must be run first on the
	     node that owns the drives or the resources will not be created.
	
	6. Move the quorum resource from local quorum to a ServeRAID disk resource:
	
	  a. From Cluster Administrator, click the cluster you are using.
	
	  b. Right-click the cluster, and then click Properties.
	
	  c. Click the Quorum tab.
	
	  d. In the Quorum Resource area, select a ServeRAID shared disk that you want
	     to use as the shared disk, and then click OK.
	
	     NOTE: You need to ensure that the same server (for example, Node1) owns the
	     ServeRAID disk resources and the local quorum resource, and that the
	     quorum resource is moved to a RAID 1 logical drive.
	
	Shared disk resources now appear as "IBM ServeRAID Logical Disk" instead of the
	default Microsoft physical disk. You can now manually move these resources by
	using Cluster Administrator or automatically during failover.
	
	REFERENCES
	==========
	
	For additional information, refer to "Installing the IBM ServeRaid Cluster
	Solution" (4Cluster.pdf on the ServeRaid 4.80 Support CD in the <CD-Rom
	Drive>:\books directory).
	
	NOTE: This directory is different from previous versions of the ServeRaid Support
	CD.
	
	To obtain the latest device drivers, firmware/BIOS, and software updates for the
	IBM ServeRAID controller, refer to the following IBM Web site:
	
	  http://www.pc.ibm.com/support?lang=en_US&page=brand&brand=IBM+PC+Server
	
	The IBM ServeRAID NT Cluster Solution utility is also located in IBM ServeRAID
	Configuration and Management CD-ROM in the \winnt\cluster.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: mscs tool
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
