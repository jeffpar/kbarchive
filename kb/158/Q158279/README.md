---
layout: page
title: "Q158279: XCON: Dynamic RAS Connector Cannot Deliver Mail"
permalink: /kb/158/Q158279/
---

## Q158279: XCON: Dynamic RAS Connector Cannot Deliver Mail

{% raw %}

	Article: Q158279
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs when using the Traditional Chinese version of Windows NT
	Server 3.51. If you use a message transfer agent (MTA) with a name different
	from the Microsoft Exchange Server name, when you send mail by a dynamic RAS
	connector, the modem will dial out but no mail message is transferred. Warning
	messages similar to the following appear in the application log:
	
	  Event ID 289
	  A connection to
	  /O=MSFT/OU=RANDYYEH_CC1/CN=CONFIGURATION/CN=CONNECTIONS/CN=RAS_CON_80 could
	  not be opened. [MTA XFER-IN 19 26] (12)
	
	  Event ID 1294
	  An association with entity
	  /O=MSFT/OU=RANDYYEH_CC1/CN=CONFIGURATION/CN=CONNECTIONS/CN=RAS_CON_80 ended
	  abnormally. [1 1 0 0 PLATFORM KERNEL 22 130] (10)
	
	  Event ID 9316
	  An RPC communications error occurred. No data was sent over the RPC
	  connection. Locality table (LTAB) index: 7. Windows NT error: 9301. The MTA
	  will attempt to recover the RPC connection. [BASE IL PIPE RAS 36 500] (12)
	
	  Event ID 9311
	  A RAS communications error has occurred for gateway
	  /o=msft/ou=RANDYYEH_CC1/cn=Configuration/cn=Connections/cn=RAS_CON_80. RAS
	  error code returned: 0, RAS Table index: 0. The MTA will attempt to recover
	  the RAS connection. [BASE IL PIPE RAS 36 230] (12)
	
	WORKAROUND
	==========
	
	Use the same MTA name as the Microsoft Exchange Server name.
	
	Additional query words: Tradchin
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
