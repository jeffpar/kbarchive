---
layout: page
title: "Q117561: CONN: Two or More Attachments Not Transferred via PC Mail"
permalink: /kb/117/Q117561/
---

## Q117561: CONN: Two or More Attachments Not Transferred via PC Mail

	Article: Q117561
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail containing multiple file attachments sent from one Microsoft Mail for
	AppleTalk Networks server to another through the Mail Connection Gateway and a
	PC-only backbone arrives with only the first file attachment intact. The other
	attachments appear to be included in the message but actually are copies of the
	first attachment.
	
	CAUSE
	=====
	
	For example, the problem occurs in a configuration such as:
	
	   AppleTalk                        AppleTalk
	  Mail Server                      Mail Server
	
	      One                              Two
	       ^                                ^
	       |                                |
	       v                                v
	   Connection                       Connection
	   Gateway 3.2                      Gateway 3.2
	       ^                                ^
	       |                                |
	       v                                v
	    PC Mail                          PC Mail
	   Postoffice   <--> External <-->  Postoffice
	      One              MTA             Two
	
	In this configuration, the two Microsoft Mail for AppleTalk Networks servers do
	not, in any manner, transmit mail to each other through the AppleTalk network.
	
	For this case, when two dissimilar file attachments (for example, a TeachText
	document and a Microsoft Excel document) are sent from one Macintosh server to
	the other, the second file attachment is only a copy of the first file
	attachment. In this example, the recipient would receive two copies of the
	TeachText document and the Excel document would be lost.
	
	WORKAROUND
	==========
	
	Send only one attachment with each mail message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Connection for PC and AppleTalk Networks. This problem was corrected in version
	3.2.5 of the Mail Connection GW file. If you do not have version 3.2.5 (or
	later), you can download GWUPD.HQX or GWUPD.SEA (self-extracting files). The
	following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Gwupd.hqx now
	  (http://download.microsoft.com/download/pcmail/update/7/macos/en-us/Gwupd.hqx)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: 3.20 3.10d
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
