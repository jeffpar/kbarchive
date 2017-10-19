---
layout: page
title: "Q146183: XADM: Optimizer Deletes Edb&#42;.log Files When Given Invalid Path"
permalink: /kb/146/Q146183/
---

## Q146183: XADM: Optimizer Deletes Edb&#42;.log Files When Given Invalid Path

	Article: Q146183
	Product(s): Microsoft Exchange
	Version(s): 4.0 SP2
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Optimizer to move the Information Store or
	Directory Service transaction logs from one drive to another (for example,
	d:\exchsrvr\mdbdata to c:\exchsrvr\mdbdata), and you specify an invalid path in
	the directory box (for example, d:MDBDATA.LOG ), the Edb.log file and any
	corresponding E Bxxxxx.log files will be deleted.
	
	When the Exchange Optimizer tries to restart either the Directory Service or
	Information Store service, it will take a long time to time out and finally
	respond with the following error message:
	
	  The service could not be started. It did not respond to in a timely manner.
	  -[800FF351]
	
	CAUSE
	=====
	
	The Microsoft Exchange Optimizer goes into an unstable state when a invalid path
	is entered into the transaction log file path dialog. This is an error condition
	that is not checked.
	
	RESOLUTION
	==========
	
	The Microsoft Exchange Optimizer was fixed to validate the path entered in the
	file dialog box for the transaction logs and will generate a pop-up error dialog
	box if the path entered fails this validation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 SP2
	
	=============================================================================
	
