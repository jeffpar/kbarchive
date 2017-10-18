---
layout: page
title: "Q254576: XADM: Isinteg Reports ecCorruptData-MAPI_E_CORRUPT_DATA"
permalink: kb/254/Q254576/
---

## Q254576: XADM: Isinteg Reports ecCorruptData-MAPI_E_CORRUPT_DATA

	Article: Q254576
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run the isinteg -pri -test alltests -verbose command, the results may
	indicate corruption in the information store. The output is similar to the
	following:
	
	  Starting test 1 of 20, 'Search Folder Links'
	  Finished Search Folder Links. Time: 0h:3m:46s, number of errors = 1
	  Test returned ecCorruptData-MAPI_E_CORRUPT_DATA
	
	However, when you use the -fix switch to attempt to fix this issue, the
	corruption remains in the information store. The summary output of the Isinteg
	utility does not show that any fixes have been made.
	
	CAUSE
	=====
	
	This issue can occur if the Isinteg utility encounters a folder that does not
	have a folder ID (FID).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q248838engi.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25443)
	  Alpha: DownloadDownload Q248838enga.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25444)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
