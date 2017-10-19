---
layout: page
title: "Q172434: Manager Displays Wrong Values for 802.2 T1 and Ti Timer Ticks"
permalink: /kb/172/Q172434/
---

## Q172434: Manager Displays Wrong Values for 802.2 T1 and Ti Timer Ticks

	Article: Q172434
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbui
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In SNA Server Manager, the 802.2 DLC tab of the DLC Connection Properties dialog
	box reports incorrect values for T1 and Ti timer ticks. The drop-down list box
	should report the following:
	
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
	
	Instead of that, the following is reported:
	
	  Ticks    T1       T2      Ti
	  ------------------------------
	     1    200 ms    40 ms    1 s
	     2    400 ms    80 ms    2 s
	     3    600 ms    120 ms   3 s
	     4    800 ms    160 ms   4 s
	     5      1 s    200 ms    5 s
	     6      2 s    400 ms   10 s
	     7      3 s    800 ms   15 s
	     8      4 s   1200 ms   20 s
	     9      5 s   1600 ms   25 s
	     0            2000 ms   30 s
	
	If an SNA Server administrator wanted to set the T1 timer to 5s, he or she would
	select 9 ticks. This will be interpreted as 4s by the DLC layer, which is not
	the administrator's expectation. Also, for T2 and Ti, the Ticks value 10 appears
	as 0; the leading digit (1) is truncated.
	
	CAUSE
	=====
	
	This was due to a mismatch on the table where timer tick values were associated
	with a text string indicating the corresponding amount of time.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Use the Snacfg.exe command line tool
	
	  -OR-
	
	- Set (tick + 1) for T1 and Ti ticks greater than 5 when using SNA Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the table is updated so the text strings now indicate the
	real amount of time for each of the 10 T1, T2, and Ti timer Ticks, as shown on
	the first table above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbui 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
