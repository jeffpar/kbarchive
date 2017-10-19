---
layout: page
title: "Q241309: XADM: Isinteg Ends with ecNotFound - MAPI_E_NOT_FOUND"
permalink: /kb/241/Q241309/
---

## Q241309: XADM: Isinteg Ends with ecNotFound - MAPI_E_NOT_FOUND

	Article: Q241309
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Isinteg.exe tool does not end successfully and you may receive a Dr. Watson
	error message. The following stack trace is from this failure:
	
	> kb
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	0012f2dc  0041f9a4  00c95ce0 0041fa93 a6e02000 ISINTEG!FULLCHKMGR::EcTestCross+0xed
	0012f2e4  0041fa93  a6e02000 000002b8 00000000 ISINTEG!CHKMGR::CHKMGR+0x4
	a6e02000  00000000  00000000 00000000 00000000 ISINTEG!EcExecChkMgr+0xa3
	
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
	
	MORE INFORMATION
	================
	
	You may see a similar output from the utility:
	
	ISINTEG -pri -fix -test alltests -verbose -detailed
	
	Microsoft Exchange Information Store Integrity Checker v5.5.2448.0
	Copyright (c) 1986-1997 Microsoft Corp.   All rights reserved.
	Started:    05/27/99 12:43:16
	Server name: HQ1
	Store path: D:\exchsrvr\MDBDATA\PRIV.EDB
	Store size: 2799706112 bytes
	Output log: isinteg.pri
	Check mode: check and fix
	Options: -pri -fix -test alltests -verbose -detailed 
	
	The Information Store has not been shut down clean.
	Hence enabling the Row Count/Dumpster Count test.
	You may also specify -test rowcounts (or) -test dumpsterref to run these tests
	Starting test 1 of 23, 'Categorization Tables'
	Finished Categorization Tables. Time: 0h:0m:0s
	Starting test 2 of 23, 'Restriction Tables'
	Finished Restriction Tables. Time: 0h:0m:0s
	Starting test 3 of 23, 'Search Folder Links'
	Finished Search Folder Links. Time: 0h:0m:19s
	Starting test 4 of 23, 'Global'
	Finished Global, number of rows = 1. Time: 0h:0m:0s
	Starting test 5 of 23, 'Delivered To'
	Finished Delivered To, number of rows = 1. Time: 0h:0m:0s
	Starting test 6 of 23, 'Search Queue'
	Finished Search Queue. Time: 0h:0m:0s
	Starting test 7 of 23, 'Timed Events'
	Timed event are : Expiration = 2, 
	Finished Timed Events, number of rows = 2. Time: 0h:0m:0s
	Starting test 8 of 23, 'reference table construction'
	ref table construction on INID returned ecNotFound-MAPI_E_NOT_FOUND
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
