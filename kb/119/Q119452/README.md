---
layout: page
title: "Q119452: PC DirSync: No Requestor Updates to Send"
permalink: /kb/119/Q119452/
---

## Q119452: PC DirSync: No Requestor Updates to Send

{% raw %}

	Article: Q119452
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the T1 phase of directory synchronization (Dir-Sync), the requestor may
	not send any updates to the Dir-Sync server, even though address changes have
	occurred at the postoffice.
	
	The DIRSYNC.LOG file on that postoffice may contain the following status at T1
	time, indicating that all transactions at the postoffice are being ignored:
	
	  No requestor updates to send
	
	CAUSE
	=====
	
	The ReqSync number in the REQCONF.GLB file on the postoffice may be higher than
	the transaction number in the REQTRANS.GLB file. You can use the LISTQ utility
	to determine the transaction number and you can use the LISTDS utility to
	determine the ReqSync number. Both the LISTQ utility and the LISTDS utility are
	included in the "Directory Synchronization (Dir-Sync)" document.
	
	You can obtain this document from the following sources:
	
	- Microsoft's World Wide Web Site on the Internet
	
	- The Internet (Microsoft anonymous ftp server)
	
	- The Microsoft Network (MSN)
	
	- Microsoft Product Support Services
	
	The following self-extracting file is available for download from the Microsoft
	Download Center: Wa0725.exe
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Wa0725.exe now
	  (http://download.microsoft.com/download/pcmail/Utility/23/WIN/EN-US/Wa0725.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This document has also been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail public/WA0725/
	
	For more information about how to obtain this document please see the following
	article in the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	RESOLUTION
	==========
	
	Case 1: Problems with Non-Dir-Sync Server Requestors
	----------------------------------------------------
	
	If this problem occurs on a postoffice that is not the Dir-Sync server:
	
	1. Start the Mail Administrator program (ADMIN.EXE) and select Config, Dir-
	  Sync, Requestor, Export.
	
	2. Run the LISTQ utility to dump the contents of the REQTRANS.GLB file and
	  determine the transaction number (sync number) for the last transaction.
	
	3. Run the LISTDS utility to display the contents of the REQCONF.GLB file on the
	  Dir-Sync server. Determine the ReqSync number.
	
	4. Transactions in REQTRANS.GLB that have a transaction number less than the
	  ReqSync number noted in step 3 will be ignored. The transaction number in
	  REQTRANS.GLB can be increased by repeatedly performing a Config, Dir- Sync,
	  Requestor, Export. Doing repeated exports may not be feasible if the ReqSync
	  number determined in step 3 is very high. In this case, use the RESYNC.GLB as
	  follows:
	
	  a. Use the IMPORT utility with the -S option to create a RESYNC.GLB file on
	     the Dir-Sync server postoffice.
	
	  b. Copy the RESYNC.GLB file to the problem postoffice and run IMPORT with -Q
	     option. RESYNC.GLB is a generic file that can be applied to any requestor.
	
	  When you run IMPORT to process the RESYNC.GLB file, the REQSYNC, SRVSYNC, and
	  IMPORTSYNC options in the REQCONF.GLB file are updated with the sync numbers
	  in the header transaction in the RESYNC.GLB file. REQTRANS.GLB is also
	  updated with the last confirmed sync number transaction.
	
	  The administrator at the requestor postoffice should use RESYNC.GLB before
	  adding any transactions at the postoffice. If transactions have already been
	  added, they should be re-added because RESYNC.GLB will change the ReqSync
	  number in the REQCONF.GLB. As a result, transactions in REQTRANS.GLB that
	  have a lower number than ReqSync will be ignored.
	
	If using RESYNC.GLB does not resolve the problem, you can resolve the situation
	by performing a Dir-Sync reset for that requestor postoffice as follows:
	
	1. On the server postoffice, run the Mail Administrator program. Select Config,
	  Dir-Sync, Server, Requestors and delete and re-add the requestor record.
	
	2. On the requestor postoffice, run the LISTDS utility as follows: listds admin
	  -ppassword -ddrive -r -z
	
	3. Create a zero-byte REQTRANS.GLB file in the GLB subdirectory of the
	  postoffice. You can use the TYPE NUL>REQTRANS.GLB command to create a
	  zero-byte file.
	
	4. Run the Mail Administrator program. Select Config, Dir-Sync, Requestor, Types
	  and reset the types of names propagated. Select Config, Dir-Sync, Requestor,
	  Export to re-export the address list.
	
	Case 2: Problems with the Dir-Sync Server Requestor
	---------------------------------------------------
	
	When this problem occurs on the Dir-Sync server postoffice:
	
	1. From the Mail Administrator program, select Config, Dir-Sync, Requestor,
	  Export.
	
	2. Run the LISTQ utility to dump the contents of the REQTRANS.GLB file and
	  determine the transaction number (sync number) for the last transaction.
	
	3. Run the LISTDS utility to display the contents of the REQCONF.GLB file on the
	  Dir-Sync server. Determine the ReqSync number.
	
	4. Transactions in REQTRANS.GLB that have a transaction number less than the
	  ReqSync number noted in step 3 will be ignored. The transaction number in
	  REQTRANS.GLB can be increased by repeatedly performing a Config, Dir- Sync,
	  Requestor, Export.
	
	  Doing repeated exports may not be feasible if the ReqSync number determined in
	  step 3 is very high. If this is the case, you should call Microsoft Product
	  Support Services and send in you REQCONF.GLB and SRVCONF.GLB files to have
	  the files reset.
	
	
	MORE INFORMATION
	================
	
	REQTRANS.GLB is the directory synchronization transaction file that contains the
	transactions on that postoffice. Each transaction has a transaction number or
	sync number associated with it.
	
	Additional query words: 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
