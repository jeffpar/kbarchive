---
layout: page
title: "Q222173: XADM: Event ID 42, &quot;The database engine found a bad page&quot;"
permalink: kb/222/Q222173/
---

## Q222173: XADM: Event ID 42, &quot;The database engine found a bad page&quot;

	Article: Q222173
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server version 5.0, the server may receive the
	following event in the Windows NT Application Log of Event Viewer:
	
	Event ID: 42
	Source: EDB
	Type: Warning
	Category: General
	Description:
	MSExchangeIS ((###) ) The database engine found a bad page.
	
	This event indicates that the internal structure of the database has been
	comprimised, as the database's internal references (pointers) are mis-aligned
	and/or corrupted. The server may become unusually slow, sluggish, or
	unresponsive.
	
	CAUSE
	=====
	
	This can result from replaying the incorrect transaction log files after a
	restore operation.
	
	A JET_errBadPageLink error, or "bad page link," indicates logical corruption, not
	physical corruption. For further information regarding physical corruption in an
	Exchange Server Database, please refer to the following Microsoft Knowledge Base
	article:
	
	  Q151789 XADM: Error -1018 (JET_errReadVerifyFailure)
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Restore the Exchange Server Database from most recent Full Online Backup:
	
	   - Restore the Exchange Server Database from the most recent Full Online
	     Backup BEFORE the Event ID 42 started appearing in the Application Log of
	     Event Viewer. NOTE: It is crucial that only the log files that are
	     restored from tape get replayed, NOT any existing log files that may exist
	     on the Exchange Server's hard drive.
	
	   - After that is done, the customer can use the Microsoft Exchange Mailbox
	     Merge (exmerge.exe) utility to export the users' data, then import it back
	     into a new priv.edb file. This utility is included in the Microsoft
	     BackOffice Resource Kit version 3.0
	
	2. Use the "Move Mailbox" feature in the Exchange Administrator program to move
	  users from the corrupt Exchange Server to another. Recreate the priv.edb file
	  on the original server, then move the users back to the original server.
	
	  CAUTION: The next series of steps contain information about using the
	  Microsoft Exchange Database utility (edbutil.exe). Using it incorrectly can
	  cause catastrophic problems. Before you run this utility, you should first
	  make a backup copy of the database files. Microsoft cannot guarantee that
	  problems resulting from the use of the utility can be solved. Use this tool
	  at your own risk.
	
	3. Attempt to run EDBUTIL /D (Offline Defrag)
	
	  This may remove the bad page link (if the bad page link resides in an unused
	  portion of the database). Make sure you have a backup of the Exchange Server
	  Database before you begin.
	
	4. Attempt to run EDBUTIL /D /R (Repair)
	
	   - This will forcefully remove the bad page link from the Exchange Server
	     Database. Make sure you have a backup of the Exchange Server Database
	     before you begin.
	
	   - After EDBUTIL /D /R has finished successfully, try restarting the
	     Information Store. If the Information Store starts, Microsoft highly
	     recommends that Isinteg -fix be run against both the Private and Public
	     Information Stores to resolve any inconsistencies that may have arisen as
	     a result of running EDBUTIL /D /R.
	
	     For additional information about Isinteg utility, please refer to the
	     Troubleshooting section in Volume 2 of the Microsoft Exchange
	     Administrator's Guide, or you can refer to Microsoft Knowledge Base
	     article Q182081, "XADM: Description of ISINTEG Utility."
	
	Additional query words: JET Corrupt Fix Hung Unresponsive
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
