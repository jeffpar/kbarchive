---
layout: page
title: "Q119014: PC DirSync: How to Recover from Missing REQTRANS.GLB File"
permalink: kb/119/Q119014/
---

## Q119014: PC DirSync: How to Recover from Missing REQTRANS.GLB File

	Article: Q119014
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	REQTRANS.GLB is the directory synchronization (Dir-Sync) transaction file that
	contains transactions created on that postoffice. Each transaction has a
	transaction number (sync number) associated with it. The REQTRANS.GLB file
	should never be deleted.
	
	Deleting the REQTRANS.GLB file may prevent transactions from being processed. If
	the file is accidentally deleted, re-creating a zero-byte REQTRANS.GLB file is
	not sufficient to ensure that future transactions will be included in the
	Dir-Sync process.
	
	CAUSE
	=====
	
	After a zero-byte REQTRANS.GLB file is created, the new transactions will begin
	at zero. If the requestor synchronization (ReqSync) number in the REQCONF.GLB
	file is greater than zero, all transactions made at the postoffice will be
	ignored until the transaction number is greater than the ReqSync number in the
	REQCONF.GLB file.
	
	RESOLUTION
	==========
	
	The correct recovery for this problem depends on whether the postoffice is a
	requestor (Case 1) or the Dir-Sync server (Case 2).
	
	Case 1: REQTRANS.GLB Has Been Deleted on a Requestor Postoffice
	---------------------------------------------------------------
	
	This situation can be resolved by creating a RESYNC file for that requestor
	postoffice as follows:
	
	1. On the server postoffice, run the Import program (IMPORT.EXE):
	
	  import admin -ppassword -s -ddriveletter
	
	2. Copy the RESYNC.GLB file from the Dir-Sync server's GLB directory to the
	  requestor's GLB directory, and delete the file from the server.
	
	3. On the requestor postoffice, run the LISTDS utility available in the
	  "Directory Synchronization (Dir-Sync)" document to reset the requestor's Dir-
	  Sync configuration:
	
	  listds admin -ppassword -ddrive -r -z
	
	  You can obtain this document from the following sources:
	
	   - Microsoft's World Wide Web Site on the Internet
	
	   - The Internet (Microsoft anonymous ftp server)
	
	   - The Microsoft Network (MSN)
	
	   - Microsoft Product Support Services
	
	  The following document has been posted to the following Internet location:
	  ftp://ftp.microsoft.com/bussys/mail/pcmail public/WA0725/ For more
	  information about how to obtain this document please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	4. Run IMPORT to process the RESYNC file:
	
	  import admin -ppassword -q -ddriveletter
	
	Case 2: REQTRANS.GLB Has Been Deleted on the Dir-Sync Server
	Postoffice
	-----------------------------------------------------------------------
	
	It is somewhat more work on the Administrator's part to recover from a missing
	REQTRANS file on the Dir-Sync server. The steps above for resetting a requestor
	will not work on the server, as IMPORT will not process the RESYNC file.
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
