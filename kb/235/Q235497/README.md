---
layout: page
title: "Q235497: XFOR: False GroupWise CR Created Manually Causes Errors in GW"
permalink: kb/235/Q235497/
---

## Q235497: XFOR: False GroupWise CR Created Manually Causes Errors in GW

	Article: Q235497
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a GroupWise custom recipient (CR) with an invalid address is manually created
	in Exchange Server and included as part of the Export process, the
	Administration Agent (ADA) process in a GroupWise 4.x system may log an error
	indicating that the domain specified is invalid. In addition, the API gateway
	logs the following error message:
	
	  There are no objects that match the query criteria.
	
	CAUSE
	=====
	
	The GroupWise directory synchronization process normally sends a LIST request
	for users who belong to the Exchange domain only. However, by including a
	GroupWise CR that contains a different domain than Exchange, the connector sends
	a LIST request for that invalid domain. This results in errors logged in the
	GroupWise system. If this domain matches a valid GroupWise domain, other
	problems occur.
	
	
	RESOLUTION
	==========
	
	Do not manually create GroupWise custom recipients, or do not include the CR as
	part of the dirsync export process.
	
	MORE INFORMATION
	================
	
	The GroupWise connector maintains a dynamic list of the domains that it is
	responsible for; in most cases, the domain is "Exchange" and the PO information
	should correlate to different Exchange sites.
	
	This list is kept in the Gwpcta.tbl file located in the
	Exchsrvr\Connect\Exchconn\Dxagwise folder. The following is an example:
	
	  
	
	  [cfgeditor]
	  pcta.ctf=PCTA
	
	  [PCTA]
	  version=PCT Version 2.0
	  inboundseq=0
	  outboundseq=0
	  partition=0
	  confirmed=TRUE
	  controlflag=0
	  sendenabled=TRUE
	  receiveenabled=TRUE
	  loadstate=FALSE
	  lastextract=1980/01/01 00:00:00.00
	  updatesent=1980/01/01 00:00:00.00
	  updatereceived=1980/01/01 00:00:00.00
	  confirmreceived=1980/01/01 00:00:00.00
	  loadtimedate=1980/01/01 00:00:00.00
	  sendcount=0
	  responsecount=0
	  agentkey=0
	  codepage=850
	  processnow=FALSE
	  [TARGETS]
	  EXCHANGE.BETA
	
	The GroupWise 5.x ADA systems do not report an error; however, the API Gateway
	does log an error.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
