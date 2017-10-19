---
layout: page
title: "Q97879: RAS and US Robotics HST"
permalink: /kb/097/Q97879/
---

## Q97879: RAS and US Robotics HST

	Article: Q97879
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Do not use US Robotics HST (High Speed Technology) mode on USR Dual Standard or
	USR HST modems with Microsoft Remote Access Service (RAS). It will actually slow
	down data communication rates.
	
	MORE INFORMATION
	================
	
	HST is a proprietary high speed modulation scheme owned by US Robotics. With
	HST, data flow is asymmetrical - 14,400 bps high band width in one direction and
	450 bps low band width in the return direction. This seems like a reasonable
	thing to do for most typical terminal type applications where most work is done
	in one direction only. HST modems will automatically switch the high\low speed
	lines based on which direction has the heaviest traffic.
	
	However, RAS extends a fully bi-directional network across the asynchronous
	connection. For a 14.4 kbps connection, AsyBeui [or NBF] adjusts its timing
	parameters [T1, T2, TI, and so on] based on the assumption that data frame
	acknowledgments [ACKs] will be returning faster on a high speed connection. LAN
	Manager may pause until it receives this ACK. If the returning line is very slow
	compared to the send line, this will cause unnecessary delays. If LAN Manager
	does not get an ACK with a given period of time it will automatically timeout
	and possibly retransmit. These return delays and retransmissions on a 14.4 kbps
	RAS "connection" with the HST modem will actually get closer to 2400 bps
	throughput. In fact, a standard v.22bis 2400 bps connection is faster than HST
	with RAS.
	
	USR even recommends in their manuals that you use v.32bis for interactive
	applications, which is essentially what RAS is.
	
	To explicitly specify V.32bis mode [14.4 kbps in both directions] on USR HST Dual
	Standard modems, add "B0" to COMMAND= the in the Init string in the MODEMS.INF
	file. See the "RAS Administrator's Guide" for more information on editing the
	MODEMS.INF file.
	
	Additional query words: 2.20 compression correction tuning baud
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
