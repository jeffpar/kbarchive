---
layout: page
title: "Q177113: Incomplete Print Jobs Using JetDirect over SPX"
permalink: kb/177/Q177113/
---

## Q177113: Incomplete Print Jobs Using JetDirect over SPX

	Article: Q177113
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have a computer running Windows NT Service Pack 2 or 3 and have the HP
	JetAdmin utility installed on your computer, you may see only partial print jobs
	during periods of intense printer usage. You must be configured to print to an
	HP printer through an HP JetDirect card over the NWLink SPX protocol to
	experience this problem.
	
	NOTE: JetDirect is no longer supported by HP. They now use SDI (Simple Device
	Installation) to install network printers. For more information on this, see:
	
	http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj05973
	or
	http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX Based). For further
	information see:
	
	http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06723
	or
	http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06724
	
	CAUSE
	=====
	
	Using the NWLink SPX protocol, the printer will signal the client computer that
	the printer is ready for more information by incrementing the allocation number.
	If the allocation number increments, then the client is free to send another
	packet of printing data over SPX.
	
	If the printer fails to increment the allocation number in the next packet of a
	printing sequence, then this should signal to the client that the printer
	buffers are full. The client should respond appropriately by refraining to send
	any further data packets until the printer signals its buffers are clear and it
	is ready to receive more data.
	
	This printing sequence was broken by a bug introduced beginning with Service Pack
	2 for Windows NT 4.0. After applying either Service Pack 2 or 3, NWLink SPX no
	longer looks at the allocation number in the packet received from the printer.
	Instead it ignores the allocation number and continues to send data.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	The following lines from a Network Monitor trace illustrate the problem. The
	first sequence illustrates the failure.
	
	5    CLIENT   PRINTER   0x99E4 -> 0xFFFF, Seq = 0, Ack = 0, Alloc = 3
	6    PRINTER  CLIENT    0x3C8E -> 0x99E4, Seq = 0, Ack = 0, Alloc = 0
	7    PRINTER  CLIENT    0x3C8E -> 0x99E4, Seq = 0, Ack = 0, Alloc = 0
	8    CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 0, Ack = 1, Alloc = 4
	9    CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 0, Ack = 1, Alloc = 4
	10   PRINTER  CLIENT    0x3C8E -> 0x99E4, Seq = 1, Ack = 1, Alloc = 1
	11   PRINTER  CLIENT    0x3C8E -> 0x99E4, Seq = 1, Ack = 1, Alloc = 1
	12   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 1, Ack = 2, Alloc = 5
	13   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 1, Ack = 2, Alloc = 5
	14   PRINTER  CLIENT    0x3C8E -> 0x99E4, Seq = 2, Ack = 2, Alloc = 2
	15   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 2, Ack = 2, Alloc = 5
	16   PRINTER  CLIENT    0x3C8E -> 0x99E4, Seq = 2, Ack = 3, Alloc = 3
	17   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 3, Ack = 2, Alloc = 5
	18   PRINTER  CLIENT    0x3C8E -> 0x99E4, Seq = 2, Ack = 4, Alloc = 3
	19   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 4, Ack = 2, Alloc = 5
	20   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 4, Ack = 2, Alloc = 5
	21   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 4, Ack = 2, Alloc = 5
	22   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 4, Ack = 2, Alloc = 5
	23   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 4, Ack = 2, Alloc = 5
	24   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 4, Ack = 2, Alloc = 5
	25   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 4, Ack = 2, Alloc = 5
	26   CLIENT   PRINTER   0x99E4 -> 0x3C8E, Seq = 4, Ack = 2, Alloc = 5
	.
	.
	.
	51    CLIENT   PRINTER  Diag Request: Exclude 0 Addresses
	52    PRINTER  CLIENT   Diag Resp: Ver 1.0, SPX Socket = 0x4801, 2 Components
	53    CLIENT   PRINTER  Diag Request: Exclude 0 Addresses
	54    PRINTER  CLIENT   Diag Resp: Ver 1.0, SPX Socket = 0x4801, 2 Components
	55    CLIENT   PRINTER  0x99E5 -> 0xFFFF, Seq = 0, Ack = 0, Alloc = 3
	56    PRINTER  CLIENT   0xBA22 -> 0x99E5, Seq = 0, Ack = 0, Alloc = 0
	
	Notice that in frame 18 the Printer increments the ACK to 4, but the allocation
	number remains at 3. The client should stop sending at this point, but in frames
	19 through 26 the client continues to send data.
	
	After a short time, in frame 51, the client begins negotiating a new session, but
	as long as there is a "buffer full" situation, the new session will also
	terminate. This process continues until the print sequence completes without
	encountering the "buffer full" signal from the printer.
	
	The second trace sequence below illustrates the correct behavior.
	
	131   CLIENT    PRINTER    0x1870 -> 0xFFFF, Seq = 0, Ack = 0, Alloc = 3
	132   PRINTER   CLIENT     0x3CBA -> 0x1870, Seq = 0, Ack = 0, Alloc = 0
	133   PRINTER   CLIENT     0x3CBA -> 0x1870, Seq = 0, Ack = 0, Alloc = 0
	134   CLIENT    PRINTER    0x1870 -> 0x3CBA, Seq = 0, Ack = 1, Alloc = 4
	135   CLIENT    PRINTER    0x1870 -> 0x3CBA, Seq = 0, Ack = 1, Alloc = 4
	136   PRINTER   CLIENT     0x3CBA -> 0x1870, Seq = 1, Ack = 1, Alloc = 1
	137   PRINTER   CLIENT     0x3CBA -> 0x1870, Seq = 1, Ack = 1, Alloc = 1
	138   CLIENT    PRINTER    0x1870 -> 0x3CBA, Seq = 1, Ack = 2, Alloc = 5
	.
	.
	.
	141   CLIENT    PRINTER    0x1870 -> 0x3CBA, Seq = 1, Ack = 2, Alloc = 5
	142   PRINTER   CLIENT     0x3CBA -> 0x1870, Seq = 2, Ack = 2, Alloc = 2
	143   CLIENT    PRINTER    0x1870 -> 0x3CBA, Seq = 2, Ack = 2, Alloc = 5
	144   PRINTER   CLIENT     0x3CBA -> 0x1870, Seq = 2, Ack = 3, Alloc = 3
	145   CLIENT    PRINTER    0x1870 -> 0x3CBA, Seq = 3, Ack = 2, Alloc = 5
	146   PRINTER   CLIENT     0x3CBA -> 0x1870, Seq = 2, Ack = 4, Alloc = 3
	
	The printer increments the allocation numbers as expected up frame 146. After
	this frame, the client temporarily discontinues sending data until it gets the
	buffers clear signal from the printer. This occurs in the sequence below:
	
	316   PRINTER   CLIENT     0x3CBA -> 0x1870, Seq = 2, Ack = 4, Alloc = 4
	317   CLIENT    PRINTER    0x1870 -> 0x3CBA, Seq = 4, Ack = 2, Alloc = 5
	.
	.
	.
	
	In frame 316, the printer finally increments the allocation number, and the
	client immediately responds in frame 317 with more data. At that point, the
	print job continues uninterrupted until its completion.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q151677
	TITLE : NWLink SPX Ignores Allocation Number Sent By Peer
	
	The Hewlett-Packard products discussed here are manufactured by Hewlett- Packard,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding the products' performance or reliability.
	
	Additional query words: novell ipx/spx failure partial output
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
