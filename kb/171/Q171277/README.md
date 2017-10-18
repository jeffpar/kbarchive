---
layout: page
title: "Q171277: Microsoft Cluster Server Cluster Resource Failover Time"
permalink: kb/171/Q171277/
---

## Q171277: Microsoft Cluster Server Cluster Resource Failover Time

	Article: Q171277
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 19-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If a failover condition occurs within Microsoft Cluster Server (MSCS), resources
	within the failing group will transition to another node within the cluster. The
	time required to bring resources online may vary based on resource types and
	other factors.
	
	MORE INFORMATION
	================
	
	Microsoft Cluster Server allows for resources to be members of a group of like
	resources. Resources may run on only one node at a time. Groups are the basic
	failover units within a cluster and may be owned by only one system at a time.
	If a resource failure occurs within a group, the resource manager may try to
	bring the resource online or failover the entire group to another node in the
	cluster. During failover, clients using cluster resources may experience little
	or no change in activity, or else may need to reconnect. Client impact depends
	greatly on the type of resources they use and other resource factors.
	
	The time required to bring a resource online may depend on the following
	factors:
	
	- Type of resource
	
	- Resource properties
	
	- Group properties
	
	- Dependent resources
	
	Some resources may reach an online state very quickly whereas others take several
	seconds to go online. The amount of time required depends on the type of
	resource. For example, an IP address may go online very quickly, but a database
	server service may take several seconds. The database may check integrity of
	data files while an IP address does not require the same initialization
	procedures. A network name may take time to be registered on the network and to
	check for duplicate network names.
	
	Resources may be configured to stay offline after a specified number of failures.
	They may also be restricted from running on specific nodes within the cluster.
	Use Cluster Administrator to modify these properties.
	
	Groups may have a preferred owner and may be configured to failback automatically
	if the preferred owner node is available. Groups may be configured not to
	failback to another node or to failback only during a specific time window.
	
	Resources may also be dependent on other resources within their group. As a
	result, the dependent resources will not come online until the resources they
	depend upon are online.
	
	Additionally, if a node fails, surviving cluster nodes must arbitrate for access
	to the quorum disk resource. Quorum disk arbitration may occur within seconds.
	However, the performance of hardware and attached devices on the shared SCSI bus
	may influence the speed of this process.
	
	All of these factors and many others may influence resource startup or failover
	time requirements. Hardware and network performance may also impact cluster
	resources.
	
	Additional query words: cluster resource failover MSCS
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbAudDeveloper kbClustServSearch kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
