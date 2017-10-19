---
layout: page
title: "Q289863: Data May Not Be Saved to Node When Cluster Cannot Communicate"
permalink: /kb/289/Q289863/
---

## Q289863: Data May Not Be Saved to Node When Cluster Cannot Communicate

	Article: Q289863
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a cluster loses all its abilities to communicate with its nodes, the nodes
	may arbitrate as to which node is to become the owner of the quorum that owns
	all of the resources. Any physical disk resources that are on the losing (or
	halted) node may still seem to be attached to the cluster, which can lead you to
	assume that both read and write operations are enabled. However, these
	operations may not be enabled and any changes that you may make using these
	operations may not be saved to disk.
	
	CAUSE
	=====
	
	This problem can occur when a cluster uses a single network for all of its
	communications. For example, in Windows NT 4.0, node 2 owns the quorum and
	arbitrates immediately for the quorum disk. Node 1 owns data disk D. Node 2 is
	the quorum owner so the arbitration process is fast. Node 1 does not own the
	quorum so the arbitration process is much slower. Node 1 breaks the reservation
	that node 2 has on the quorum, and then gives node 2 the opportunity to
	re-establish the reservation. This process is how node 1 is able to determine
	whether node 2 is active when all of the communication links are inactive.
	
	When node 2 has performed its arbitration process, node 2 starts to bring online
	all of the groups and the resources, including disk D. Node 2 protects disk D
	with a reservation. However, until node 1 has performed its arbitration process,
	node 1 still operates as though it retains ownership of disk D and continues to
	enable input/outputs (I/Os) to the disk. The reservation that node 2 placed on
	the disk can cause the I/Os from node 1 to be unsuccessful. Node 1 operates as
	though it owns the disk and regains ownership of the disk by breaking the
	reservation, and then by retrying the I/Os. This time the I/Os work, but the
	disk is not in a state that is consistent with the in-memory state of node 1 so
	the disk becomes corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Microsoft Windows 2000 Service Pack 1
	(SP1).
	
	This problem is fixed in Windows 2000 SP1 by ensuring that all of the nodes have
	a minimum arbitration time.
	
	WORKAROUND
	==========
	
	To work around this problem, configure the cluster with multiple network
	adapters.
	
	When this problem occurs, all of the communication links between the nodes are
	broken and the quorum arbitration mechanism is the final mechanism for
	determining the nodes that are in the cluster as well as the nodes that are not
	going to be part of a split-brain cluster. By adding an additional network
	connection between the nodes, the potential single point of communication
	failure is removed and the problem cannot occur with the loss of a single
	connection or a single network adapter failure. However, a cluster with one
	network adapter for each node is not a highly available solution.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Data corruption problems can also occur in a Windows NT 4.0 cluster because of a
	known problem in Windows NT 4.0. This problem is related to the cluster regroup
	and disk arbitration mechanisms. To illustrate this problem, consider a two-node
	cluster, node 1 and node 2. Node 1 owns data disk D that is being used by client
	computers and node 2 owns quorum Q. The method whereby node 1 uses the disk is
	not relevant. Whether node 1 has either local access or remote access from a
	Windows-based client is also irrelevant.
	
	You can assume in this example that the cluster is set up to have a single
	network between the nodes (not a recommended deployment). If the network cable
	is removed, both the nodes lose all network communication to each other. In
	Windows NT 4.0, node 2 owns the quorum and arbitrates immediately for the quorum
	disk. Because node 2 is the quorum owner already, the arbitration process is
	fast. Node 1 does not own the quorum and the arbitration process is much slower.
	Node 1 breaks the reservation that node 2 has on the quorum, and then gives node
	2 the opportunity to re-establish the reservation. This process is how node 1
	determines whether node 2 is active when all of the communication links are
	inactive.
	
	When node 2 has performed its arbitration process, node 2 starts to bring online
	all of the groups and the resources, including disk D. Node 2 protects disk D
	with a reservation. However, until node 1 has completed its arbitration process,
	node 1 still operates as though it owns disk D and continues to enable I/Os to
	the disk. The reservation that node 2 put on the disk can causes I/Os from node
	1 to be unsuccessful. Because Node 1 operates as though it owns the disk, node 1
	takes the disk back by breaking the reservation, and then retrying the I/Os.
	This time the I/Os work, but the disk is not in a state that is consistent with
	the in-memory state of node 1 so the disk becomes corrupted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
