---
layout: page
title: "Q254230: XADM: Running Isinteg in Fix Mode Affects Appointments"
permalink: /kb/254/Q254230/
---

## Q254230: XADM: Running Isinteg in Fix Mode Affects Appointments

	Article: Q254230
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain circumstances, when you are running Isinteg in Fix mode against an
	information store, appointments may become unusable for users. The appointments
	either are still there but become unusable because of randomly modified start
	and end times or they are deleted from the user's calendar. A typical command
	line which may cause this issue is the following one:
	
	  isinteg -pri -fix -detailed -verbose -test message
	
	CAUSE
	=====
	
	When you are running Isinteg against an information store in Fix mode, it can
	remove MAPI properties from the JET property tag arrays of appointments without
	further checking if these properties are still required for proper appointment
	access. As a result, the affected appointments become unusable because of
	randomly modified start and end times or they can even be deleted from the
	user's calendar.
	
	Typically, these remove operations are logged in the Isinteg.pri or Isinteg.pub
	file in the following way:
	
	Microsoft Exchange Information Store Integrity Checker v5.5.2448.8
	Copyright (c) 1986-1997 Microsoft Corp.    All rights reserved.
	Started:    02/11/00 08:15:32
	Server name: garfield.pss.microsoft,de
	Store path: C:\exchsrvr\MDBDATA\PRIV.EDB
	Store size: 3153920 bytes
	Output log: d:\isinteg\isinteg-priv.log
	Check mode: check and fix
	Options: -pri -fix -detailed -verbose -l d:\isinteg\isinteg-priv.log -test message 
	
	No reference count tests
	Starting test 1 of 1, 'Message'
	Warning: Message 13 (Inid=00BB-000000000349): Prop count does not match between ptagMsgPropTagArray(67B20102) and JET columns
	Warning: 		Prop 806A0040 is in ptagArray but not in a JET column.
	Fix: Message 13 (Inid=00BB-000000000349): Fixed the ptagMsgPropTagArray(67B20102) with correct props.
	Warning: Message 14 (Inid=00BB-00000000054D): Prop count does not match between ptagMsgPropTagArray(67B20102) and JET columns
	Warning: 		Prop 806A0040 is in ptagArray but not in a JET column.
	Fix: Message 14 (Inid=00BB-00000000054D): Fixed the ptagMsgPropTagArray(67B20102) with correct props.
	Warning: Message 15 (Inid=00BB-000000000551): Prop count does not match between ptagMsgPropTagArray(67B20102) and JET columns
	Warning: 		Prop 806A0040 is in ptagArray but not in a JET column.
	Fix: Message 15 (Inid=00BB-000000000551): Fixed the ptagMsgPropTagArray(67B20102) with correct props.
	Finished Message, number of rows = 16. Time: 0h:1m:20s, number of warnings = 6, number of fixes = 3
	
	. . . . . SUMMARY . . . . .
	Total number of tests : 1
	Total number of warnings : 6
	Total number of errors : 0
	Total number of fixes : 3
	Total time : 0h:1m:20s
	
	In this scenario, the named property, 806A0040, where 806A represents the
	property's ID while 0040 represents the property's type (which is PT_SYSTIME
	here), is removed from the affected appointments. The ID 806A may differ for
	other stores because it's a named property. In terms of MAPI, named properties
	may be uniquely referenced either by a name or by an ID. This issue causes
	Isinteg to delete every appointment's named property that maps to the ID 33293,
	which is the ID that maps to the appointment's start time.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
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
	version 5.5 SP2 and 5.5 SP3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	To work properly, the Isinteg fix also requires a store fix with a build number
	of 5.5.2651.85 or later.
	
	NOTE: When you start this version of the information store, the information store
	databases are automatically upgraded to a new format. After the databases have
	been upgraded, you can restore an earlier version of the Store.exe file on the
	server, but only if it is version 5.5.2651.32 or later. If you restore a
	Store.exe file earlier than version 5.5.2651.32 after the database has been
	upgraded, you are no longer able to start the information store. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q244976 XADM: Event ID 1197 and 1005 When Starting the Information Store
	
	To go to a previous build of the Store.exe file:
	
	1. Stop the information store.
	
	2. Replace the current build of the Store.exe file with a build prior to
	  5.5.2651.32.
	
	3. Restore from an online backup of a database before you install the hotfix on
	  server.
	
	4. Restart the services and allow transaction logs to be replayed against the
	  older database.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
