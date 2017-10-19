---
layout: page
title: "Q183780: Serial, Parallel, and SDLC Cable End To End Pin Connections"
permalink: /kb/183/Q183780/
---

## Q183780: Serial, Parallel, and SDLC Cable End To End Pin Connections

	Article: Q183780
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides serial, parallel, and SDLC cable end to end pin
	configurations.
	
	MORE INFORMATION
	================
	
	Normal PC Interface Cables.
	
	9-25 Pin Serial Cable
	---------------------
	
	9 Pin End    Line Name          25 Pin End
	      1     Carrier Detect         8
	      2     Receive Data           3
	      3     Transmit Data          2
	      4     Data Terminal ready    20
	      5     Signal Ground          7  (Inner Lead Shields)
	      6     Data Set Ready         6
	      7     Request To Send        4
	      8     Clear To Send          5
	      9     Ring Indicate          22
	
	9 Pin Serial Cable
	------------------
	
	     1     Carrier Detect          1
	     2     Receive Data            2
	     3     Transmit Data           3
	     4     Data Terminal Ready     4
	     5     Signal Ground           5
	     6     Data Set Ready          6
	     7     Request to send         7
	     8     Clear to send           8
	     9     Ring Indicate           9
	
	25 Pin Serial Cable
	-------------------
	
	     2     Transmit Data           2
	     3     Receive Data            3
	     4     Request To Send         4
	     5     Clear To Send           5
	     6     Data Set Ready          6
	     7     Inner Lead Shields(Gnd) 7
	     8     Carrier Detect          8
	     20    Data Terminal Ready     20
	     22    Ring Indicate           22
	
	Parallel Printer Cable
	----------------------
	
	25 Pin End    Centronics End
	     1-14    1-14
	       15      32
	       16      31
	       17      36
	       18      33
	       19      19
	       20      21
	       21      23
	       22      25
	       23      27
	       24      29
	       25      30
	
	The following are the cables used for SDLC communications.
	
	EIA RS232D Cable
	----------------
	
	Adapter End Pin   Name Of Line       Modem Emd Pin
	
	            1    Shields             1   The cable shields are connected
	                                         to pin 1 at the modem end and to
	                                         the shell at the adapter end.
	            2    Transmit Data       2
	            3    Receive Data        3
	            4    Request To Send     4
	            5    Clear to send       5
	            6    Data Set Ready      6
	            7    Signal Ground       7
	            8    Carrier Detect      8
	            11   Select Standby      11
	            15   Transmit Clock      15
	            17   Receive Clock       17
	            18   Test                18
	            20   Data Terminal Ready 20
	            22   Ring Indicate       22
	            23   Data Rate Select    23
	
	NOTE: Transmit Clock (15) and Receive Clock (17) lines are used to provide
	clocking of the data in and out of the adaptor. The clocks are usually provided
	by the modem.
	
	V.35 Cable
	----------
	
	25 Pin End    Lead Name           34 Pin END
	      1      Shield                 A
	      20     +Data Terminal Ready   H
	      6      +Data Set Ready        E
	      8      +Carrier Detect        F
	      10     -Transmit Data A       P
	      9      +Transmit Data B       S
	      21     -Transmit Clock A      Y
	      19     +Transmit Clock B      a
	      12     -Receive Data A        R
	      13     +Receive Data B        T
	      25     -Receive Clock A       V
	      7       Signal Ground         B
	      24     +Receive Clock B       X
	      5      +Clear To Send         D
	      4      +Request To Send       C
	
	NOTE: This cable uses double clock and data leads.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
