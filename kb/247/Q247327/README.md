---
layout: page
title: "Q247327: Cannot Start Cluster Administrator After Adding Resources"
permalink: /kb/247/Q247327/
---

## Q247327: Cannot Start Cluster Administrator After Adding Resources

{% raw %}

	Article: Q247327
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add resources to a cluster server with many resources (close to 1,600
	or more), the Cluster service may start and appear to function but you may be
	unable to start Cluster Administrator. You may still be able to ping cluster IP
	addresses, connect to some virtual servers, and so on. Virtual servers other
	than the server with the cluster name may be available to connect to by using
	UNC paths, but not the cluster name itself. Attempting to connect to Cluster
	Administrator by using the "." option may or may not start Cluster
	administrator. If Cluster Administrator does start this way, it will likely stop
	responding (hang).
	
	CAUSE
	=====
	
	There is a "functional" limitation to the number of resources Cluster Server can
	support. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q185212 Cluster Server Does Not Support More than 900 Shares
	
	Cluster Server can only support 1,600 resources. However, it does not prevent you
	from adding more resources when you reach the resource limit. By adding more
	resources, you run the risk of unpredictable behavior, including but not limited
	to: resources stopping and coming back online for no reason, virtual servers
	suddenly not starting, virtual servers stopping for no reason, and the inability
	to administer the cluster by using Cluster Administrator.
	
	RESOLUTION
	==========
	
	There are two methods to work around this behavior.
	
	Method 1
	--------
	
	Shut down one node and stop the Cluster service on the other (running) node.
	Then, recover the Clusdb file from a tape backup that was created when you were
	able to use Cluster Administrator. Note that all changes to the cluster that
	have been made since that point are lost. You should restart the Cluster service
	with the -fixquorum option or rename the current Chkpoint files from the MSCS
	folder on the quorum drive.
	
	Method 2
	--------
	
	Manually remove resources until you can once again administer the cluster by
	using Cluster Administrator. This may require a few deletions or several
	hundred. To manually remove resources from the command line, you need to first
	stop the resource and then delete it. There is no wildcard for deleting
	resources; you must delete them one at a time. The commands to stop and delete
	resources are:
	
	  cluster [<cluster_name>] res [<resource_name>] /off
	
	  cluster [<cluster_name>] res [<resource_name>] /del
	
	STATUS
	======
	
	This behavior is a side-effect of putting too many resources on a cluster
	server. There is no resolution other than to stay below the 1,600-resource
	limit.
	
	MORE INFORMATION
	================
	
	This behavior is a direct result of having a functional limit to the maximum
	possible resources instead of a physical limit. The most common occurrence of
	this behavior occurs on cluster servers that have many file shares (possibly for
	user home folders and roaming profiles). Instead of having hundreds or thousands
	of individual resources for all the file shares, use the advanced sharing option
	that was introduced in Service Pack 4. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q194831 SP4 Cluster Shares Must Be Reset to Recognize Added Subdirectories
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
