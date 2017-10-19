---
layout: page
title: "Q254319: Index Server Fails When it Is Installed on Cluster Server"
permalink: /kb/254/Q254319/
---

## Q254319: Index Server Fails When it Is Installed on Cluster Server

	Article: Q254319
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT version 4.0 Option Pack 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Windows NT 4.0 Option pack on a Cluster Server (MSCS), you
	must de-select Index Server as an installed component. Although Index Server can
	install correctly on MSCS, it does not failover or function properly.
	
	CAUSE
	=====
	
	This issue occurs because Index Server is not a cluster-aware component and is
	not intended to run on a Cluster Server. If you attempt to install Index Server
	as a generic program, the catalog almost always become damaged when the service
	fails over. If you instead attempt to run Index Server locally on each node of
	the cluster, the catalog on the computer that owns the Web resources works and
	has data in it, but the catalog on the other computer will be empty. When the
	node that currently owns the Web site fails, the surviving node brings the Web
	site online and then begins to build the catalog. This causes a large amount of
	unnecessary disk activity and system resource usage to generate the catalog.
	
	RESOLUTION
	==========
	
	To resolve this issue if it is necessary to implement a searching solution for
	Web sites on a Cluster Server, configure Index Server on a third computer, and
	then have it build a catalog of the clustered Web sites.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch kbWinDataServSearch kbWinNTSEnt400SP6a kbWinNT400OptionPack
	Version           : :2000,4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
