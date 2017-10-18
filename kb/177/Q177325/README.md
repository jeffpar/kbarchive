---
layout: page
title: "Q177325: XFOR: LME-PROFS-MEXIN Returns Error Code 80070057 and Exits"
permalink: kb/177/Q177325/
---

## Q177325: XFOR: LME-PROFS-MEXIN Returns Error Code 80070057 and Exits

	Article: Q177325
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Inbound mail from OV/VM (PROFS) to Microsoft Exchange via the Linkage 3.2 OV/VM
	connector may back up and the Transfer to Exchange for OV/VM process
	(LME-PROFS-MEXIN) may terminate unexpectedly. The Linkage Administrator browse
	log may have the following warning/errors logged:
	
	  LME-PROFS-MEXIN    31200   Microsoft Exchange has returned the
	                             condition: 80070057
	  LME-PROFS-MEXIN    31201   Microsoft Package ID: Win32
	  LME-PROFS-MEXIN    31203   Extended NT Information:  The parameter is
	                             incorrect.
	  LME-PROFS-MEXIN    31042   Cannot save updated (mapped) message
	                             addresses: IPM  Content List
	
	This has also occured with the Linkage SNADS Connector.
	
	CAUSE
	=====
	
	A Non-Delivery Report (NDR) coming from the OV/VM host contained retired
	recipients, the call to resolve the OV/VM recipients failed with and the error
	code was incorrectly interpreted as a mail system failure which caused the
	process to terminate and the message to be left in the READY-IN queue.
	
	
	WORKAROUND
	==========
	
	Manually delete the message using the Queue Viewer extension of the Linkage
	Exchange - Office Vision/VM Connector. The message will be the first in the
	Inbound from Connector queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange,
	version 3.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: LME PROFS hang crash stuck
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
