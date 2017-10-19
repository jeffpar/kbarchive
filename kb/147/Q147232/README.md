---
layout: page
title: "Q147232: Route Change Command Does Not Indicate Error"
permalink: /kb/147/Q147232/
---

## Q147232: Route Change Command Does Not Indicate Error

	Article: Q147232
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use ROUTE CHANGE and enter a non-existent route, no error message
	appears to indicate that the route does not exist.
	
	For example, if you enter the following:
	
	  route change 199.199.24.0 mask 255.255.255.0 157.57.8.1 metric 1
	
	and your Route table looks like the table below, no error message appears that
	indicates you have an incorrect route:
	
	Active Routes:
	
	Network Address     Netmask        Gateway Address  Interface     Metric
	------------------------------------------------------------------------
	  0.0.0.0          0.0.0.0        157.57.8.1       157.57.8.214    1
	127.0.0.0        255.0.0.0        127.0.0.1        127.0.0.1       1
	157.57.8.0       255.255.248.0    157.57.8.214     157.57.8.214    1
	157.57.8.214     255.255.255.255  127.0.0.1        127.0.0.1       1
	157.57.255.255   255.255.255.255  157.57.8.214     157.57.8.214    1
	224.0.0.0        224.0.0.0        157.57.8.214     157.57.8.214    1
	255.255.255.255  255.255.255.255  157.57.8.214     157.57.8.214    1
	
	CAUSE
	=====
	
	The ROUTE CHANGE command does not check the validity of the network address that
	you enter.
	
	RESOLUTION
	==========
	
	To work around this problem, use ROUTE PRINT to make sure that the change to the
	route has been done correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
