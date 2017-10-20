---
layout: page
title: "Q161191: TN3270 Client Cannot Get Past the USSTAB Screen Using ENTER"
permalink: /kb/161/Q161191/
---

## Q161191: TN3270 Client Cannot Get Past the USSTAB Screen Using ENTER

{% raw %}

	Article: Q161191
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	TN3270 clients cannot proceed past the USSTAB screen (also known as a msg- 10
	screen) by pressing the ENTER key. In this configuration, the clients receive
	the USSTAB screen from the host when the notify is sent. At the site where this
	problem was raised, the USSTAB screen prompted the user to press ENTER to
	continue. It actually accepts any keystroke, but has been written to prompt for
	ENTER.
	
	CAUSE
	=====
	
	The TN3270 server receives the ENTER keystroke from the client (AID key x'7D'),
	but sends the host a frame with no data (a frame with a TH, RH, but no RU).
	
	  DLC    ---------------------------------------------- 13:53:33.04
	  DLC    01020101->05160000 DLC DATA
	  DLC                       DAF:00 OAF:05 ODAI:off Normal
	  DLC                       RQD FMD BC EC DR1
	  DLC
	  DLC    ---- Header  at address 00CC4210, 1 elements ----
	  DLC    01020040 00012C00 0005006A 01009A00     <...@..,....j....>
	  DLC
	  DLC    ---- Element at address 011BB36C, start 10, end 12 ----
	  DLC    038000                                  <...             >
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11. This problem was corrected in the latest Microsoft SNA Server
	2.11 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: SP1 prodsna message-10
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
