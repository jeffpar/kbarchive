---
layout: page
title: "Q259487: XADM: Isinteg Loops If Folder's Parent Doesn't Exist in Store"
permalink: /kb/259/Q259487/
---

## Q259487: XADM: Isinteg Loops If Folder's Parent Doesn't Exist in Store

	Article: Q259487
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Isinteg utility may not finish if a folder does not have a parent folder in
	the information store. For example, if you run the following command
	
	  isinteg -pub -fix -verbose -detailed -l c:\isinteg.log -test folder
	
	you receive results similar to the following:
	
	  
	
	  Starting test 1 of 3, 'reference table construction'
	  Finished reference table construction. Time: 0h:0m:5s
	  Starting test 2 of 3, 'Folder'
	  Error: Folder 303 (Fid=0004-00000025C919) "Documentation": Error ecNotFound-MAPI_E_NOT_FOUND processing this folder
	  Error: Folder 337 (Fid=0004-00000025C919) "Documentation": Error ecNotFound-MAPI_E_NOT_FOUND processing this folder
	  Error: Folder 371 (Fid=0004-00000025C919) "Documentation": Error ecNotFound-MAPI_E_NOT_FOUND processing this folder
	  Error: Folder 405 (Fid=0004-00000025C919) "Documentation": Error ecNotFound-MAPI_E_NOT_FOUND processing this folder
	  Error: Folder 439 (Fid=0004-00000025C919) "Documentation": Error ecNotFound-MAPI_E_NOT_FOUND processing this folder
	  Error: Folder 473 (Fid=0004-00000025C919) "Documentation": Error ecNotFound-MAPI_E_NOT_FOUND processing this folder
	
	This error message continues until the log file consumes all available disk
	space.
	
	CAUSE
	=====
	
	An issue in Isinteg causes this behavior, where it does not properly continue
	running after you attempt to correct the issue.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191914 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q248838engi.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25443)
	  Alpha: DownloadDownload Q248838enga.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25444)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
