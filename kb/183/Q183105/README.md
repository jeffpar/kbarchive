---
layout: page
title: "Q183105: XADM: Dr. Watson While Upgrading from 4.0 SP4 to 5.5"
permalink: /kb/183/Q183105/
---

## Q183105: XADM: Dr. Watson While Upgrading from 4.0 SP4 to 5.5

	Article: Q183105
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are upgrading from Exchange Server 4.0 SP4 to Exchange Server version
	5.5, the upgrade fails with the following Dr. Watson Error Access violation when
	it scans the Priv.edb file for the second time:
	
	  The application, exe\srvrmax.dbg, generated ....
	  c0000005 _ at address 6fef7bec (JetDetachDatabase)
	
	NOTE: This can happen only on a bridgehead server.
	
	CAUSE
	=====
	
	The Dr. Watson error message appears while you are upgrading the Priv.edb file,
	even though it can be upgraded from the command line. The manual upgrade of the
	directory ends around 40 percent with the error -1026 JET_errRecordTooBig. The
	overflowed attribute is Reps-To-Ext in the Site Object, which corresponds to the
	number of directory replication connectors.
	
	WORKAROUND
	==========
	
	There are two possible workarounds:
	
	- First workaround:
	
	  1. In the Administrator window, choose Directory Replication. Double-click
	     the directory replication connector you want to use.
	
	  2. Select the General tab.
	
	  3. In the Local bridgehead server box, select the local server that will
	     process incoming and outgoing requests for updated directory information.
	     The default server is the server you are currently logged on to.
	
	  NOTE: You can change the local bridgehead server for a directory replication
	  connector. However, to reflect this change in the remote server, you must
	  update the remote bridgehead server in the General property page of the
	  corresponding directory replication connector. Changing the bridgehead server
	  causes all replication information to be rewritten and re-replicated.
	
	  -OR-
	
	- Second workaround:
	  Perform the two-step upgrade from a command line:
	
	  1. Copy the Dir.edb file to a temporary directory.
	
	  2. Copy the Edb.dll file from the Exchange Server 4.0 computer that was
	     running (SP2, SP3, or SP4) and rename it Edb40.dll. Then copy the Edb.dll
	     and the Edbutil.exe files from the 5.0 SP2 version to this directory.
	
	  3. Run EDBUTIL /u dir.edb /dedb40.dll (with Edb.dll from 5.0 SP2. The
	     Edb40.dll file is Edb.dll from the 4.0 SP in use).
	
	  4. Run ESEUTIL /u dir.edb /dedb55.dll. (Edb55.dll is the Edb.dll file found
	     on the version 5.5 CD-ROM.)
	
	  5. Copy the resulting Dir.edb file back.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information about obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
