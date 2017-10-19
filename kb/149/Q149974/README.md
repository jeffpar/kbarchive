---
layout: page
title: "Q149974: XADM: ISINTEG Prematurely Aborts Processing in Test 22"
permalink: /kb/149/Q149974/
---

## Q149974: XADM: ISINTEG Prematurely Aborts Processing in Test 22

	Article: Q149974
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run ISINTEG with the "-fix" option, ISINTEG prematurely aborts
	processing in test 22 of 24 when Jet_errReadVerifyFailure is returned within
	CHKCNT::ECForcedDelAttach.
	
	The screen output will look similar to the following:
	
	  Starting test 22 of 24, 'reference count verification'
	  Number of Ref Count processed = 730710, 85% percent complete. Ref check
	  on Attachment returned JET_errReadVerifyFailure
	
	  . . . . . SUMMARY . . . . .
	  Total number of tests : 24
	  Total number of warnings : 74
	  Total number of errors : 0
	  Total number of fixes : 862
	  Total time : 15h:38m:57s
	
	Additionally, ISINTEG will log something similar to the following:
	
	  Error: Attachment[0036-00000056A015].RefCt: Failed to delete attachment table
	  row (JET_errReadVerifyFailure) (Failed to decrement reference count on
	  embedded message(ecNotFound-MAPI_E_NOT_FOUND)) Ref check on Attachment
	  returned JET_errReadVerifyFailure
	
	  . . . . . SUMMARY . . . . .
	  Total number of tests : 24
	  Total number of warnings : 74
	  Total number of errors : 0
	  Total number of fixes : 862
	  Total time : 15h:38m:57s
	
	CAUSE
	=====
	
	During processing, ISINTEG inappropriately returns an error, which results in a
	process exit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	
	=============================================================================
	
