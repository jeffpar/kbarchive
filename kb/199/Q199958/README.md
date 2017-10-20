---
layout: page
title: "Q199958: XCON: Configuring the Exchange PROFS Connector Option Tab"
permalink: /kb/199/Q199958/
---

## Q199958: XCON: Configuring the Exchange PROFS Connector Option Tab

{% raw %}

	Article: Q199958
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure the Options tab in the Exchange PROFS
	Connector in the Microsoft Exchange Server Administrator program. Please read
	the documents on the Exchange Server CD for information on configuring the other
	tabs of the Exchange PROFS Connector.
	
	MORE INFORMATION
	================
	
	To configure the Options tab of the Exchange PROFS Connector:
	
	1. In the Administrator window, choose the Connections container for the site.
	
	2. Double-click Connector for OfficeVision/VM, and then select the Options tab.
	
	The following information describes the information that you need to fill in this
	tab.
	
	LOCALLU = _________
	
	  The logical unit name for the connector LU 0 connection. Must match the LU
	  name used in the VTAM LU macro for the connector, and the LU name defined in
	  the RSCS link statement.
	
	LOCALNODE = __________
	
	  RSCS node ID assigned to the connector. Must match the LINKID parameter in
	  the RSCS LINK or the LINKDEF statement in the RSCS CONFIG file.
	
	PARTNERLU = _________
	
	  Partner logical unit name. Must match the RSCS APPL name in the VTAM
	  definition of RSCS.
	
	PARTNERNODE = ________
	
	  The host RSCS node ID. Must match the LOCALID parameter in the RSCS LOCAL
	  statement in the RSCS CONFIG file.
	
	MODENAME = _____________
	
	  VTAM logon table entry for the connector. Must match the logon mode table
	  entry for the session between the connector and the OV/VM partner.
	
	LOCID = _ _ _
	
	  Three-character location ID assigned to the connector. Should be unique
	  within the host environment.
	
	RID is part of the NJE/SNA protocol element. It appears that the NJE Server
	process encounters an NJE record from the RSCS system that it does not expect.
	
	Additional query words: LOCID, LOCALLU, PARTNERLU, LOCALNODE
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
