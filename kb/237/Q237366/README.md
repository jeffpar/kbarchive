---
layout: page
title: "Q237366: SMS: Microsoft SMS and Clustered Server Environments"
permalink: /kb/237/Q237366/
---

## Q237366: SMS: Microsoft SMS and Clustered Server Environments

	Article: Q237366
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2,2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles provides information on Microsoft Systems Management Server (SMS)
	and Clustered Server Environments.
	
	MORE INFORMATION
	================
	
	The SMS initial design did not include support for any form of clustered server;
	therefore services such as the SMS_Executive service were not written to handle
	the failure of a clustered system. For this reason, Microsoft does not support
	any version of SMS in a cluster server environment.
	
	In SMS versions 1.x, clustered drives caused problems to several services on a
	site server, many of which were sub-threads of the SMS_Executive service. For
	this reason, SMS version 1.x was not supported on clustered servers. SMS version
	1.x was designed to be able to recover on its own from certain failures. Among
	these are failures in communication with logon servers, clients, Intra-site, and
	so forth. Because SMS is also capable of using multiple Domain Controllers in a
	domain, logon server justification for clustering is not a valid option. SMS
	version 1.2 has many other redundancies built into the system that negate the
	use of a cluster system.
	
	If SMS is using a Microsoft SQL Server Enterprise Edition server as a Logon
	Point, you may see failures to the Vsrvsvc.exe. If you are using SMS version
	1.x, open the Administrator Console and confirm that "Automatically Detect All
	Logon Servers" is not selected. Maintenance Manager installs logon server
	components on the drive with the largest amount of free space, usually the
	clustered drive.
	
	In SMS version 2.0, site system components such as site servers, Database,
	Distribution Points, Logon Points, and so forth, may not install successfully
	due to the presence of cluster server components on the system. If cluster
	server components are detected on the system, installation of these site systems
	will likely fail. The cluster server components merely need to be present and do
	not have to be implemented or operational in order for this to be true.
	
	Chapter six of the SMS Administrator's Guide for version 2.0, titled "Installing
	Systems Management Server 2.0 Sites," only references Microsoft Windows NT
	Server version 4.0. If a cluster server component is detected during an
	installation, the installation will likely fail. If the installation is
	successful, site stability problems may begin to occur at any point.
	
	There are problems between the cluster server services and the SMS services
	beyond the support of the Microsoft Product Support Services group. If two
	domain controllers are part of a server cluster, enabling either Windows
	Networking Logon Discovery or Windows Networking Logon Client Installation, this
	results in a system error on the site server. Because SMS detects the NTFS drive
	with the most free space, and this is likely to be the clustered drive, creation
	of the SMSLOGON share structure will likely fail. This could potentially cause
	site-wide problems.
	
	The database for an SMS version 2.0 site, cannot be installed on a Microsoft SQL
	Server that is running either Microsoft Windows NT Enterprise Edition or
	Microsoft SQL Server Enterprise Edition with the cluster services enabled. Also,
	the SQL_Monitor_Agent will likely not install to a functional state if the
	cluster services are installed or enabled.
	
	Windows NT Server 4.0 Enterprise Edition, Microsoft SQL Server 6.5, and
	Enterprise Editions 7.0 are not supported if the Cluster Services are installed
	or enabled. Microsoft SMS can install and configure these systems as client,
	distribution points, CAPs, site servers etc., if the cluster components have not
	been installed on the machine.
	
	The SMS client components may be installed on one node of a cluster, as long as
	there is no attempt to utilize the shared drive space. If during troubleshooting
	of a client issue it is determined that the clustering services are causing or
	contributing to the failure, it will be recommended that the SMS client be
	removed from the system.
	
	Some client installations fail on cluster nodes with the installation of the
	Web-Based Enterprise Management (WBEM) components. This is also because the WBEM
	components included in this version of SMS were not written to be cluster aware,
	and fail when they encounter the services.
	
	Until the SMS components become cluster aware, support for this will begin with
	the elimination of the clustering services. This is an undesirable state that
	renders the cluster inoperable, therefore the SMS components are removed from
	the systems in the cluster.
	
	See also the SMS version 2.0 Administrator's Guide, Appendix A, page 672.
	
	
	REFERENCES
	==========
	
	SMS version 2.0 Administrator's Guide
	
	Additional query words: prodsms vinca octopus mscs cluster
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120 kbSMS200
	Version           : :1.0,1.1,1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
