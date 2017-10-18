---
layout: page
title: "Q198496: How to Configure WLBS Port Rules"
permalink: kb/198/Q198496/
---

## Q198496: How to Configure WLBS Port Rules

	Article: Q198496
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, all cluster network traffic is handled by the host with the highest
	host priority (lowest numeric value) among the current members of the cluster.
	This host handles all of the cluster network traffic. If the highest-priority
	host fails or goes offline, the host with the next highest priority will take
	over the traffic. This default behavior ensures that Windows NT Load Balancing
	Service (WLBS) does not affect cluster network traffic for ports that you do not
	specifically manage with the WLBS load-balancing mechanisms. It also provides
	high availability in the handling of your cluster network traffic.
	
	To maximize control of various types of TCP/IP traffic, you can configure how
	each port's cluster network traffic is handled.
	
	MORE INFORMATION
	================
	
	The method by which a port's network traffic is handled is called its filtering
	mode. There are three possible filtering modes:
	
	Multiple Hosts Filtering Mode:
	
	This mode automatically distributes the port's network traffic to multiple hosts
	within the cluster, according to a load percentage that you specify. This load
	balances the network load among the hosts within the cluster and scales the
	performance of the Internet server programs. Network traffic is distributed
	among the hosts on a per-connection basis for TCP (or on a per-datagram basis
	for UDP), where the combination of source and destination IP address and port
	numbers determines a unique client request. If the host fails, WLBS
	automatically redistributes network traffic among the remaining hosts.
	
	You can control the precise load-balancing behavior of this filtering mode by
	indicating that all hosts should maintain an equal load distribution or by
	setting the load percentage for each host. When you specify load percentages,
	WLBS adds up the load percentages for all participating cluster hosts and
	directs the proportional amounts to each host. The total load percentage for the
	cluster need not add up to 100 percent. For example, if the cluster has two
	hosts with load percentages of 30 and 60 percent, WLBS will direct one-third
	(30/90) of the traffic to one host and two-thirds (60/90) to the other host.
	
	In addition, you can select one of three options for client affinity. This is
	used in handling client sessions to ensure that all network traffic from a
	particular client be directed to the same cluster host. When you select None,
	WLBS load balances all network requests across the cluster without respect to
	their source to maximize the scaled performance achieved by load balancing. You
	can select Single affinity to direct all client requests from the same IP
	address to the same cluster host. You can also select Class C affinity to direct
	all client requests from the same class C address range to the same cluster
	host. Increased affinity enhances the cluster's ability to support client
	sessions, although it may somewhat reduce scaled performance.
	
	Single Host Filtering Mode:
	
	This mode directs all of the port's network traffic to the host with the highest
	handling priority. In this mode, you specify a set of priorities for handling
	the port's network traffic in the event of a host failure. This lets you assign
	the network traffic for different host ports to different hosts in the cluster
	and customize the failover policy for each port.
	
	Disabled Filtering Mode:
	
	This mode blocks all traffic to a port to provide a firewall against unwanted
	network access to your cluster.
	
	For your convenience, you can specify that a filtering mode apply to a numerical
	range of ports. You do this by defining a port rule with a set of configuration
	parameters that define the filtering mode. Each rule consists of the following
	configuration parameters:
	
	- The TCP or UDP port range for which this rule should be applied.
	
	- The protocols for which this rule should apply, including TCP, UDP, or both.
	
	- The filtering mode that specifies how the cluster handles traffic described
	  by the port range and protocols.
	
	NOTE: Rules for a single port are encoded as a range having the same starting and
	ending port numbers.
	
	To create a new port rule and add it to the list of rules:
	
	1. Specify values for the port range, protocols, and filtering mode parameters.
	
	2. Click Add.
	
	NOTE: The number and type of rules must be exactly the same for each host in the
	cluster.
	
	To edit an existing rule:
	
	1. Click the rule within the list of rules to display the rule's parameters.
	
	2. Modify the port range, protocols, and filtering mode parameters as required.
	
	3. Click Modify.
	
	To remove a rule:
	
	1. Click the rule within the list of rules to display the rule's parameters.
	
	2. Click Remove.
	
	If a host attempts to join the cluster with a different number of rules from the
	other hosts, it is not accepted as part of the cluster and the rest of the
	cluster continues to handle the traffic as before. At the same time, a message
	is entered into the Windows NT System Event Log. When this happens, consult the
	System Event Log to determine which host has a conflicting number of rules, fix
	the problem, and restart WLBS on this host.
	
	The rules entered on each host in the cluster must have matching port ranges,
	protocol types, and filtering modes. If WLBS detects an inconsistent rule among
	the hosts in the cluster, it records a message in the Windows NT System Event
	Log. When this happens, consult the System Event Log to determine the host in
	question and which rule was disabled; fix it, and restart WLBS on this host.
	
	Additional query words: Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbWinNTLBSSearch kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
