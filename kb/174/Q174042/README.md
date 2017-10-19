---
layout: page
title: "Q174042: XADM: Standard Edition should not be Installed on Cluster System"
permalink: /kb/174/Q174042/
---

## Q174042: XADM: Standard Edition should not be Installed on Cluster System

	Article: Q174042
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbinterop kbsetup
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Microsoft Exchange Server Standard Edition Setup program will allow you to
	point to a shared cluster drive on a Windows NT Enterprise Server running
	Microsoft Cluster Services. It will only install on the local node, but if the
	Server fails over, the information will be pulled to the other node and the
	Exchange Server installation will be destroyed.
	
	CAUSE
	=====
	
	The Microsoft Exchange Server Standard Edition is not a cluster aware
	application but the Server setup portion does not have the ability to prevent
	you from installing the software on the shared cluster drive.
	
	Microsoft will not support any installation of the Exchange Server Standard
	Edition on a cluster aware system.
	
	RESOLUTION
	==========
	
	The Enterprise Edition of Exchange Server must be installed on the cluster aware
	system to take advantage of the Microsoft Cluster Services and prevent possible
	data corruption.
	
	Additional query words: wolfpack std
	
	======================================================================
	Keywords          : kbinterop kbsetup 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
