---
layout: page
title: "Q145986: XCON: Illegal Country Code in X400 Address Causes MTA to Hang"
permalink: /kb/145/Q145986/
---

## Q145986: XCON: Illegal Country Code in X400 Address Causes MTA to Hang

{% raw %}

	Article: Q145986
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) may stop responding after
	logging content conversion error messages similar to the following:
	
	  message NMI0210: X.400 Service Event, severity 14
	
	  (MTA DISP:FANOUT(15) Proc 112) 05-14-97 08:21:37pm
	  Content conversion failed
	  Object at fault 06006364
	  Conversion error 1029
	  MTS Identifier C=US;A=ABC;P=ABCMAIL;L=ABC+A85E08EENDSCA.TEW.55
	  Old content type 56010A00
	  New content type 2A864886F7140501
	
	  message NMI0062: X.400 Service Event, severity 12
	
	  (MTA DISP:FANOUT(15) Proc 112) 05-14-97 08:21:37pm
	  Delivery failure
	  X.400 reason code unable-to-transfer
	  X.400 diagnostic code content-type-not-supported
	  Internal qualifier 0
	  MTS Identifier C=US;A=ABC;P=ABCMAIL;L=ABC+A85E08EENDSCA.TEW.55
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This problem occurs when the Exchange MTA receives a message from a foreign MTA
	that has an illegally formed X400 address containing a country code with a
	single character. All X400 country codes must be either two or three characters
	long.
	
	The MTA hangs when it attempts to perform content conversion on the message
	containing the invalid address. The Microsoft Exchange version 4.0 SP1, SP2,
	SP3, and SP4 MTA will not log content conversion failures to the BF0.LOG files
	if APDU logging is enabled. However, the Microsoft Exchange version 5.0 MTA will
	log content conversion errors to the BF0.LOG files if APDU logging has been
	enabled. This functionality has also been added for all 4.0 MTAs starting with
	build 996.18 which is a post SP4 build. This feature is extremely desirable
	since it allows messages that fail content conversion to be logged to the APDU
	logs in order to determine the cause of the failure. APDU logging is enabled by
	setting APDU logging to maximum and X.400 Service logging to minimum.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
