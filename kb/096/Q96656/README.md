---
layout: page
title: "Q96656: 3COM: Starting Gateway with PO1/NET1 Documented Incorrectly"
permalink: /kb/096/Q96656/
---

## Q96656: 3COM: Starting Gateway with PO1/NET1 Documented Incorrectly

	Article: Q96656
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the Microsoft Mail Gateway to 3Com, version 1.0, contains
	an error that might make installing the product more difficult.
	
	On page 38, in the Preliminary Steps, the example for Step 2 is as follows:
	
	  LOGON_GATEWAY:PO1/NET1 /3P.
	
	The domain and organization are incorrectly listed as PO1/NET1. A more likely
	domain and organization are MSMAIL:MS, which would use the new domain MSMAIL and
	the original organization MS. The computer would log into the 3Com XNS Name/Mail
	service as _GATEWAY:MSMAIL:MS.
	
	The example is not correct even if you want to use domain PO1 in the NET1
	organization because the 3Com XNS Name service does not support the slash (/)
	character as a delimiter. You must use the colon (:) character.
	
	Page 40 correctly demonstrates using the colon as a delimiter, but, as stated
	above, you are more likely to use MSMAIL:MS rather than PO1:NET1 as indicated in
	the documentation.
	
	
	Additional query words: 1.00 slash colon SMTP error docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	
