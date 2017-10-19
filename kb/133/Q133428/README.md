---
layout: page
title: "Q133428: PC DirSync: Information on the REQTRANS.GLB Transaction File"
permalink: /kb/133/Q133428/
---

## Q133428: PC DirSync: Information on the REQTRANS.GLB Transaction File

	Article: Q133428
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	REQTRANS.GLB is the directory synchronization (Dir-Sync) transaction file that
	contains the transactions from that postoffice. Each transaction has a
	transaction number or sync number associated with it.
	
	MORE INFORMATION
	================
	
	When you run REQMAIN -t, a requestor sends out the following:
	
	- A status message with an attachment. The header on the status line reads
	
	  Status report from NET/PO
	
	  The attachment that goes with this message is the DSSERVER.LOG from the
	  requestor postoffice. The information from this log is used to update the
	  CENTRAL.LOG on the Dir-Sync server (this is why the information in the
	  CENTRAL.LOG is always a day behind).
	
	- If there are updates, another message is sent out with an attachment. The
	  attachment contains actual transactions. The header from the message reads
	
	  REQTX R=x(was y)....z sent
	
	  The x is the sync number of the last transaction being sent (picked up from
	  REQTRANS.GLB). The y is the last acknowledged number picked up from
	  REQCONF.GLB. The z is the number of actual transactions being sent this
	  cycle, thus, x=y+z.
	
	Having transactions in the REQTRANS.GLB alone does not mean that there are
	updates to be sent.
	
	If there are transactions in the REQTRANS.GLB with transaction numbers higher
	than the last confirmed REQSYNC number (recorded in REQCONF.GLB), it means that
	there are updates to be sent.
	
	If there are transactions in the REQTRANS.GLB with transaction numbers lower than
	the last confirmed REQSYNC number (recorded in REQCONF.GLB), they are not deemed
	to be new updates because, according to the REQCONF.GLB, these transactions were
	sent and even acknowledged by the Dir- Sync server. Typically, this is when you
	would get a "No Updates to Send" message even when there are updates.
	
	Initially, there is a zero byte REQTRANS.GLB. As users are added to Dir- Sync,
	the transactions are added to REQTRANS.GLB starting with transaction numbers 1,
	2 and so on. If the updates are sent to the server and acknowledged by the
	server, the requestor processes the acknowledgment during T3, when REQMAIN -r is
	run. The REQCONF.GLB is updated, and all transactions in the REQTRANS.GLB with
	sequence numbers below the number in the acknowledgment are discarded. A 49 byte
	REQTRANS.GLB file is left, and all it contains is the last confirmed REQSYNC
	number.
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
