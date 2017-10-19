---
layout: page
title: "Q189789: XFOR: Linkage 3.2 PROFS Connector Repeatedly Restarts Itself"
permalink: /kb/189/Q189789/
---

## Q189789: XFOR: Linkage 3.2 PROFS Connector Repeatedly Restarts Itself

	Article: Q189789
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Linkage Message Exchange 3.2 Exchange-OfficeVision/VM Connector may
	repeatedly halt outbound (to PROFs) message processing and restart itself.
	
	Additionally, events similar to the following may be logged in the Exchange
	Connectivity Manager's Log Browser:
	
	  LME-PROFS-MEXOUT: 31200 Microsoft Exchange has returned the condition
	  80070057
	  LME-PROFS-MEXOUT: 31201 Microsoft package ID: Win32
	  LME-PROFS-MEXOUT: 31203 Extended NT Information: The parameter is
	  incorrect
	  LME-PROFS-MEXOUT: 31055 Exchange/MAPI unable to generate valid address,
	  connection may be down
	  LME-PROFS-MEXOUT: 31200 Microsoft Exchange has returned the condition
	  80070057
	  LME-PROFS-MEXOUT: 31201 Microsoft package ID: Win32
	  LME-PROFS-MEXOUT: 31203 Extended NT Information: The parameter is
	  incorrect
	  LME-PROFS-MEXOUT: 31056 Unable to create valid proxy address
	  LME-PROFS-MEXOUT: 31051 Unable to complete mapping of Exchange address
	  to proxy address
	  LME-PROFS-MEXOUT: 31013 Attempting automatic LinkAge Exchange Interface
	  restart to clear temporary resource problem
	  LME-PROFS-MEXOUT: 00514 A RESTART request has been received
	  LME-PROFS-MEXOUT: 00505 LME-PROFS-MEXOUT is ending, last return code as
	  {A shutdown request was made}
	
	CAUSE
	=====
	
	The Lsmexout.exe process of the Exchange-OfficeVision/VM Connector encounters
	only spaces (0x20) in the PR_DISPLAY_NAME property of a target recipient address
	when it attempts to send a message over to PROFS. This is interpreted as an RPC
	error, causing the process to terminate. The terminated process is automatically
	restarted and the same message is processed, resulting in this looping terminate
	and restart behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange
	Connector for PROFS version 3.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
