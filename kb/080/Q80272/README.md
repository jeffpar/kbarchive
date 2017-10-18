---
layout: page
title: "Q80272: PC Ext: Diagnostics Produced by the -Q2z Parameter on External"
permalink: kb/080/Q80272/
---

## Q80272: PC Ext: Diagnostics Produced by the -Q2z Parameter on External

	Article: Q80272
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1b,2.1c,2.1d,2.1e,3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1b, 2.1c, 2.1d, 2.1e, 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the -Q2z parameter is added on the External.exe command line, additional
	information that is useful when troubleshooting modem problems will be listed.
	
	When External.exe is invoked as follows
	
	  external -q2z
	
	information that is sent or received from the modem will appear on the screen.
	This can help isolate the cause of errors and attribute them to one of the
	following:
	
	- Flow control
	
	- Bad cabling
	
	- Bad phone lines
	
	- Slow network
	
	The Diagnostics categories are Bad STX, Bad Type, Bad Seq, Bad CRC1, Bad CRC2,
	Timeouts, and Rejects, and are described below.
	
	Bad STX
	-------
	
	This error diagnostic occurs if the protocol is looking for a "2" to indicate the
	start of a message block. The protocol scans the input stream until it finds a
	"2". Occurrences of this error diagnostic do not indicate severe problems. For
	example, this problem could be caused by a bad CRC1 occurring, forcing the
	protocol to scan all subsequent packet data bytes for a valid packet header that
	is looking for a "2", followed by the proper packet type, sequence number, etc.
	
	Bad Type
	--------
	
	This error diagnostic occurs if a packet type indicator was received that is not
	recognized by the protocol. The only reason that this problem can currently
	occur is because a "2" is found and assumed to be the start of a packet (STX),
	when it is not.
	
	Bad Seq
	-------
	
	This error diagnostic occurs when a packet is received out of sequence. All
	packets in the protocol are assigned a sequence number and must be sent in the
	proper order. If the previous packet was lost during the transmission, then the
	subsequent packet will be interpreted as being out of sequence.
	
	Bad CRC1 (Cyclic Redundancy Check)
	----------------------------------
	
	This error diagnostic indicates that the packet header was corrupt and rejected;
	that is, characters were lost during the transmission, which can be caused by
	line noise or some other problem.
	
	Bad CRC2
	--------
	
	This error diagnostic is a secondary Cyclic Redundancy Check and also indicates
	that the packet data was corrupt and rejected.
	
	Timeouts
	--------
	
	This error diagnostic occurs when a packet was sent and an acknowledgment was not
	received within the allotted time. The default allotted time is 60 seconds; this
	default can be set by using the -Exxx parameter on the External or Remote
	command line.
	
	This error diagnostic occurs when slow response is encountered on the receiving
	end or if the other end is dead. This problem can also occur when using
	error-correcting modems (Microcom Networking Protocol [MNP]) and the modems are
	taking an unusual amount of time to send valid data between each other. This is
	not a severe problem, but it can cause External to abort the communication link
	if many Timeouts occur.
	
	Rejects
	-------
	
	All of the above error diagnostics will occur only on the receiving end of the
	communications link. Whenever an error is detected on the receiving end, the
	protocol sends a reject packet to the sender. The sender then keeps track of the
	number of reject packets received. The reject count is an indication of the
	number of failures (CRCs, etc.) encountered by the receiver.
	
	Summary of Diagnostics
	----------------------
	
	In any session that has errors, the receiver will get a combination of Bad STXs,
	Bad Types, Bad Seqs, Bad CRCs, and so on, but no Rejects. The sender will get
	Rejects but none of the other diagnostics. In twoway communication sessions, the
	diagnostic counts are cumulative.
	
	Clients generally assume that when they have error-correcting modems (that is,
	Microcom Networking Protocol [MNP] modems) they should not get any detected
	errors. MNP modems do not detect errors that occur between the serial port and
	the modem; they only detect errors that occur between modems.
	
	The communication errors that are detected by our protocol occur between serial
	ports and our External/Remote programs recover from them.
	
	Additional query words: 2.10b 2.10c 2.10d 2.10e 2.10x 2.1x 3.00 debugxcsi q2
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350 kbMailPCN210b kbMailPCN210c kbMailPCN210d kbMailPCN210e
	Version           : WINDOWS:2.1b,2.1c,2.1d,2.1e,3.0,3.2,3.5
	
	=============================================================================
	
