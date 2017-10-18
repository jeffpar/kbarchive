---
layout: page
title: "Q272535: XFOR: Notes Dirsync Does Not Work After Resetting Pcta.tbl Files"
permalink: kb/272/Q272535/
---

## Q272535: XFOR: Notes Dirsync Does Not Work After Resetting Pcta.tbl Files

	Article: Q272535
	Product(s): Microsoft Exchange
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you reset the directory synchronization numbers by using the Microsoft
	LinkAge Message Exchange 3.2 directory synchronization agent, the following
	error messages may be logged in the browser logs:
	
	  
	
	  2000/08/02 15:53:59-                DXANOTES(0342) 3 60943:Determine sequence number for partner name DXM, name LINKAGE
	>> pcta(1650) 
	  2000/08/02 15:53:59-                DXANOTES(0342) 2 01550:C Library error {CLIB:2()}: cannot convert time to seconds format
	>> tmutil(310) 
	  2000/08/02 15:53:59-                DXANOTES(0342) 3 60954:Determine last extract date
	>> pcta(2364) 
	
	  2000/08/02 15:53:59-                DXANOTES(0342) 4 64136:Looking for changes in NAMES.NSF
	>> lndxapo(955) 
	  2000/08/02 15:53:59-                DXANOTES(0342) 3 41121:Looking for changes since 00/00/00 12:00:00AM
	>> lsnabapi(1930) 
	  2000/08/02 15:53:59-                DXANOTES(0342) 1 41106:Error converting 1 to a notes Time/Date
	>> lsnabapi(1939) 
	  2000/08/02 15:53:59-                DXANOTES(0342) 1 64138:Error {Not available} detected when looking for changes in NAMES.NSF
	>> lndxapo(974)
	
	CAUSE
	=====
	
	This issue can occur if the date and time format is incorrect in the Pcta.tbl
	files.
	
	RESOLUTION
	==========
	
	To resolve this issue, be careful to format the time correctly. This issue is
	usually caused by too many, not enough, or no zeros after the last decimal point
	for the following entries:
	
	  lastextract=2000/04/25 23:30:52.03
	  updatesent=2000/04/25 23:30:52.41
	  updatereceived=1980/01/01 00:00:00.00
	  confirmreceived=1980/01/01 00:00:00.00
	  loadtimedate=1980/01/01 00:00:00.00
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320
	Version           : :3.2
	Issue type        : kbprb
	
	=============================================================================
	
