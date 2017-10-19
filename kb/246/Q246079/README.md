---
layout: page
title: "Q246079: XADM: ISINTEG -PRI -FIX -TEST FOLDER Incomplete w Orphan Folders"
permalink: /kb/246/Q246079/
---

## Q246079: XADM: ISINTEG -PRI -FIX -TEST FOLDER Incomplete w Orphan Folders

	Article: Q246079
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
	
	The Isinteg utility continually loops around certain folders in the information
	store if you run it by using the following command line:
	
	  isinteg -pri -fix -detailed -verbose -l isinteg.log -test folder
	
	The following is a sample log file:
	
	  Microsoft Exchange Information Store Integrity Checker v5.5.2448.0
	  Copyright (c) 1986-1997 Microsoft Corp. All rights reserved.
	  Started: 09/15/98 14:27:46
	  Server name: SERVER1
	  Store path: e:\EXCHSRVR\MDBDATA\PRIV.EDB
	  Store size: 11795439616 bytes
	  Output log: isinteg.log
	  Check mode: check and fix
	  Options: -pri -fix -detailed -verbose -l isinteg.log -test folder
	
	  Starting test 1 of 3, 'reference table construction'
	  Finished reference table construction. Time: 0h:0m:3s
	  Starting test 2 of 3, 'Folder'
	  Warning: MsgFolder 56 (Fid=0001-00000000A333, Mid=0001-000001A156D9,
	  Inid=0001-000001BA5241): Prop ptagSiteID(67F80102) was not found in the
	  ptagMsgPropList.
	  Warning: MsgFolder 66 (Fid=0001-00000000A676, Mid=0001-0000018A9B31,
	  Inid=0035-00000228EA45): Prop ptagSiteID(67F80102) was not found in the
	  ptagMsgPropList.
	
	The log continues until it reaches the following point:
	
	  Warning: MsgFolder 128 (Fid=0001-0000000A617D, Mid=0001-0000019F533A,
	  Inid=0035-000002582304): Prop ptagSiteID(67F80102) was not found in the
	  ptagMsgPropList.
	  Warning: Folder 1317 (Fid=0001-0000000A6703) "Inbox": RootFid is corrupted
	  beyond redemption.
	  Fix: Folder 1317 (Fid=0001-0000000A6703) "Inbox": Fixed The invalid entry in
	  ptagRootFid with correct value.
	  Error: Folder 1317 (Fid=0001-0000000A6703) "Inbox": Error
	  ecNotFound-MAPI_E_NOT_FOUND processing this folder
	
	At this point, the Isinteg utility returns to the first folder and starts again.
	This looping continues until the log file consumes all of the available disk
	space, at which point the Isinteg utility finally stops.
	
	CAUSE
	=====
	
	The Isinteg utility cannot remove orphaned folders (folders that don't have a
	parent or root folder associated with them), so the utility returns to the
	beginning of the folders list. In the sample in the "Symptoms" section of this
	article, the folder with the ID of 0001-0000000A6703 does not have a parent or
	root folder associated with it, so it is orphaned, and triggers this looping
	behavior.
	
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
	
	NOTE: When you start this version of the information store, the information store
	databases are automatically upgraded to a new format. After the databases have
	been upgraded, you can restore an earlier version of the Store.exe file on the
	server, but only if it is version 5.5.2651.32 or later. If you restore a
	Store.exe file earlier than version 5.5.2651.32 after the database has been
	upgraded, you are no longer able to start the information store. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q244976 XADM: Event ID 1197 and 1005 When Starting the Information Store
	
	After the you apply the fix, if you run the new version of the Isinteg utility
	against the information store, the utility logs the following information:
	
	  Warning: Folder 1317 (Fid=0001-0000000A6703) "Inbox": RootFid is corrupted
	  beyond redemption.
	  Fix: Folder 1317 (Fid=0001-0000000A6703) "Inbox": Fixed The invalid entry in
	  ptagRootFid with correct value.
	  Fix: Folder 1317 (Fid=0001-0000000A6703) "Inbox": Removed the folder hierarchy
	  rooted at this from the database because the Root does not exist.
	
	After all of the folders have been checked, the Isinteg utility finishes
	successfully.
	
	
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
	
