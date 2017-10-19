---
layout: page
title: "Q189324: SNA Server Manager Shows Incorrect DLC t1 Timer Value"
permalink: /kb/189/Q189324/
---

## Q189324: SNA Server Manager Shows Incorrect DLC t1 Timer Value

	Article: Q189324
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In SNA Server Manager, the 802.2 DLC tab of the DLC Connection Properties dialog
	box reports incorrect values for T1 timer ticks.
	
	The drop-down list box reports the following:
	
	  Ticks    T1       T2      Ti
	  ------------------------------
	     1    200 ms    40 ms    1 s
	     2    400 ms    80 ms    2 s
	     3    600 ms    120 ms   3 s
	     4    800 ms    160 ms   4 s
	     5      1 s     200 ms   5 s
	     6      1 s     400 ms   5 s
	     7      2 s     800 ms  10 s
	     8      3 s    1200 ms  15 s
	     9      4 s    1600 ms  20 s
	    10   2000 ms   2000 ms  25 s
	
	The drop-down list box should report the following:
	
	  Ticks    T1       T2      Ti
	  ------------------------------
	    1    200 ms     40 ms    1 s
	    2    400 ms     80 ms    2 s
	    3    600 ms    120 ms    3 s
	    4    800 ms    160 ms    4 s
	    5      1 s     200 ms    5 s
	    6      1 s     400 ms    5 s
	    7      2 s     800 ms   10 s
	    8      3 s    1200 ms   15 s
	    9      4 s    1600 ms   20 s
	   10      5 s    2000 ms   25 s
	
	(T1 timer 10 should be "5 s" instead of "2000 ms").
	
	CAUSE
	=====
	
	This error happens because of a mismatch on the table where timer tick values
	are associated with a text string indicating the corresponding amount of time.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP3,
	4.0, and 4.0 SP1. We are researching this problem in SNA Server version 3.0 and
	will post more information here in the Knowledge Base as it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	NOTE: A similar problem existed in SNA Server 3.0 and 3.0 SP1. It was corrected
	in SNA Server 3.0 SP2.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Use the Snacfg.exe command line tool
	
	MORE INFORMATION
	================
	
	With the fix applied, the table is updated so the text strings now indicate the
	real amount of time for each of the 10 T1, T2, and Ti timer Ticks, as shown on
	the second table above.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q172434 Manager Displays Wrong Values for 802.2 T1 and Ti Timer Ticks
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1
	Version           : WINDOWS:3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
