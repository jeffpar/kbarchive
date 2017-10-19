---
layout: page
title: "Q159192: XCON: MTA Shows High CPU Usage and Messages Not Delivered"
permalink: /kb/159/Q159192/
---

## Q159192: XCON: MTA Shows High CPU Usage and Messages Not Delivered

	Article: Q159192
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) shows very high CPU usage
	and messages do not move from their queues. This high CPU usage (near 100
	percent) persists for extended periods of time and is viewable using Performance
	Monitor. The computer running Windows NT Server and Microsoft Exchange Server
	may perform slowly.
	
	To observe the MTA CPU Usage using Performance Monitor:
	
	1. Start Performance Monitor
	
	2. On the Edit menu, click Add to Chart.
	
	3. For the Object, select Process.
	
	4. For the Instance, select emsmta.
	
	5. For the Counter, select "% Processor Time."
	
	6. Click Add.
	
	You should view the CPU usage over time to see if it persists at a high value
	(close to 100 percent). It can be quite normal for the MTA to run with high CPU
	usage, but it should not persist indefinitely. (You should analyze your systems
	using this technique to establish a baseline for comparison purposes.)
	
	CAUSE
	=====
	
	In rare cases of message corruption, the Microsoft MTA can incur high CPU
	overhead while processing messages with Distribution Lists. The most likely
	cause of this corruption is improper shutdown of the computer running Microsoft
	Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: hung cpu bound pegging 100% percent
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
