---
layout: page
title: "Q119449: PC DirSync: Description of RESYNC.GLB"
permalink: kb/119/Q119449/
---

## Q119449: PC DirSync: Description of RESYNC.GLB

	Article: Q119449
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RESYNC.GLB is the file created on the directory synchronization (Dir-Sync)
	server when the Mail administrator does an Import with the -s option. This file
	contains the addresses that exist in the database of the Dir-Sync server
	postoffice.
	
	The header transaction in RESYNC.GLB contains the Import Synchronization number
	IMPSEQ, the requestor synchronization number REQSEQ, and the Server
	synchronization number SRVSEQ. Because the RESYNC.GLB is a generic extraction
	that can be applied to any requestor registered with the DirSync server, the
	sync numbers in the header are determined as follows:
	
	The reqsync for each record in the SRVCONF.GLB is scanned, and REQSEQ is assigned
	the largest reqsync number. The SRVSEQ is the srvsync number corresponding to
	the server postoffice record in SRVCONF.GLB.
	
	RESYNC.GLB is copied from the directory server postoffice to the GLB subdirectory
	of the requestor postoffice. When Import is used with the -q option on the
	requestor postoffice, RESYNC.GLB is copied to SRVTRANS.GLB, and the transactions
	are processed.
	
	MORE INFORMATION
	================
	
	RESYNC.GLB is not a text file. To dump the contents of RESYNC.GLB, you can copy
	the RESYNC.GLB to SRVTRANS.GLB, and use the LISTQ utility provided in the
	"Directory Synchronization (Dir-Sync)" document.
	
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
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : :3.2
	
	=============================================================================
	
