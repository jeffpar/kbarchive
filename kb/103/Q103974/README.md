---
layout: page
title: "Q103974: Token Ring Error Msg: Bad FC/AR flags--Probable Causes"
permalink: /kb/103/Q103974/
---

## Q103974: Token Ring Error Msg: Bad FC/AR flags--Probable Causes

	Article: Q103974
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-2002
	
	SUMMARY
	=======
	
	Several conditions can cause a token ring Sniffer to report that a frame has
	"Bad FC/AR Flags." This article discusses the most probable ones.
	
	THE FRAME STATUS (FS) FIELD
	---------------------------
	
	A token ring frame contains several fields used to control the frame itself. The
	last of these fields--the end of frame sequence (EFS)--contains two bytes, the
	second of which--the frame status (FS)--is the most probable source of the error
	message. The FS looks like this:
	
	   A C 0 0 A C 0 0
	
	where: A = 1 if the destination address was recognized
	A = 0 if the destination address was not recognized
	C = 1 if frame was copied (accepted at least at the MAC level for processing)
	C = 0 if frame was not copied
	
	TWO POSSIBLE FS FIELD ERROR CONDITIONS
	--------------------------------------
	
	ONE: The 1s and 0s don't match. For example, if the FS is:
	
	   1 0 0 0 0 1 0 0
	
	  (A C 0 0 A C 0 0)
	
	it is considered in error, because the first A (1) says the destination address
	is recognized, and the second (0) says it is not. The C's also do not match.
	
	TWO: Some of the 0's are 1's. For example, if the FS is:
	
	   1 0 1 0 1 0 0 0
	
	the third bit is a 1 and it should be a zero.
	
	If your Sniffer trace can display the FS, check it for either of these
	conditions. If you find one of them, the most probable cause is hardware,
	especially if only one machine is returning the error message. Hardware does not
	necessarily mean the network interface card (NIC), but the card is a good place
	to start. If it is connected through UTP, check the connection between the
	card's DB-9 and the UTP cable. This device sometimes causes errors, although
	when it does you normally see network problems in other parts of the frame.
	
	NON-DATA SYMBOLS
	----------------
	
	Token rings use Manchester encoding, and you may be getting a J or a K (non-data
	symbols) in the FS.
	
	MAXTU MISMATCH
	--------------
	
	If you are running across bridges, you might have a MAXTU mismatch between your
	machines and bridges.
	
	JITTER
	------
	
	Finally, you could be running into a token ring timing phenomenon called jitter,
	although it normally shows up in numerous frames, not just one. Around 1990, a
	TI chipset popular with OEMs for token ring cards was prone to jitter. The
	problems were resolved but they surface from time to time. Check the hardware.
	
	Additional query words: adapter 2.00 2.10 2.10a 2.20 2.0 2.1 2.1a 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
