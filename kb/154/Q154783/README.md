---
layout: page
title: "Q154783: Msg Sent from MSMail Windows NT Client Undeliverable"
permalink: /kb/154/Q154783/
---

## Q154783: Msg Sent from MSMail Windows NT Client Undeliverable

	Article: Q154783
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message from the Microsoft Mail for Windows NT Client to an
	address such as the following:
	
	  <net>/<postoffice>/<mailbox>
	
	you may receive a non-delivery message similar to the following:
	
	  From: POSTMASTER
	  To: < sender of message >
	  Subject: Mail failure
	  Date: Thursday, May 23, 1996 3:22PM
	
	  FROM: < sender of message >
	  TO: < recipient of message >                      DATE: 23-05-96
	                                                    TIME: 15:22
	
	  SUBJECT: < subject of message >
	
	 ----------------------------------------------------------------
	
	  [003] Message hop count exceeded.  Message followed the following route:
	
	     NETCAD/HBPO01
	     NETCAD/BUPO01
	     NETGRI1/RH02
	     NETGRI1/IH01
	     NETSIS/WO01
	     NETSIS/EUO01
	     NETSIS/HUB02
	     NETUFE/HUB01
	     NETUFE/HUB03
	     NETUDI/UDIPO1
	
	CAUSE
	=====
	
	The non-delivery report is generated when the number of hops reaches 10,
	regardless of the hop count setting as configured in the Administrator program.
	The Windows NT client does not pick up the administrator-set hop count from the
	postoffice. The client inserts a hop count of ten in all messages.
	
	WORKAROUND
	==========
	
	Reduce the number of mail hops (routings through postoffices) to ensure that
	mail reaches the destination postoffice in fewer than 10 hops. This is the
	preferred solution in cases where it is feasible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
