---
layout: page
title: "Q97977: RAS and Telebit PEP"
permalink: kb/097/Q97977/
---

## Q97977: RAS and Telebit PEP

	Article: Q97977
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	It is recommended that you do not use Telebit's proprietary PEP compression
	method with Microsoft Remote Access Service (RAS). It will actually slow down
	data throughput rates with RAS.
	
	MORE INFORMATION
	================
	
	PEP is a method implemented in some Telebit modems to get higher data throughput
	over slower DCE rate. Using a normal terminal for file transfer over a 9600 bps
	PEP connection, you may actually get DTE throughput closer to 19,200 bps. RAS is
	more of an interactive application that both sends and receives smaller packets
	of data. A PEP connection with RAS is actually much slower than a non-PEP
	connection at the same DCE bps. The reason is that PEP holds back small packets
	of data to compress them when more packets of data come from the system. This
	has the effect of holding back NBFs\AsyBEUIs acknowledgment frames. Hence,
	frames are resent, timeouts occur, and in general things slow down. A straight
	9600 bps connection without PEP is actually faster for RAS.
	
	Additional query words: 2.20 v.42bis mnp 5 1.1 1.0 3.1 error correction data compression.
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
