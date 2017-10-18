---
layout: page
title: "Q143356: XCLN: Err Msg: The Logon Attempt Timed Out While Waiting"
permalink: kb/143/Q143356/
---

## Q143356: XCLN: Err Msg: The Logon Attempt Timed Out While Waiting

	Article: Q143356
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select the Delivery tab in the Property dialog box for a Microsoft
	Exchange 16-bit Windows client, the following error can occur:
	
	  The logon attempt timed out while waiting for resources to become available
	  Mapi 1.0 [00000a02]
	
	WORKAROUND
	==========
	
	- Open Control Panel and select the Mail And Fax icon. Click Show Profiles,
	  then click Properties. Then, without logging on, double-click the Microsoft
	  Exchange icon to bring up the Choose Profile dialog box.
	
	  -or-
	
	- Complete the logon process held by the Choose Profile dialog box.
	
	  -or-
	
	- Cancel the Choose Profile dialog box to free the logon mutex.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange version
	4.0 16-bit Windows client.
	
	MORE INFORMATION
	================
	
	The error message occurs because of the action that selecting the Delivery tab
	employs. "Delivery" is trying to log on while a logon mutex is held. A mutex is
	a type of lock that prohibits other threads from attempting to execute the same
	process. In the reverse case, the logon is completed before you attempt to do a
	second logon so no error is generated.
	
	For additional information on "mutex," please see the following article in the
	Microsoft Knowledge Base:
	
	  Q125867 Understanding Win16Mutex
	
	
	
	
	Additional query words: lock winnt win95 wfw
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : :4.0,5.0
	
	=============================================================================
	
