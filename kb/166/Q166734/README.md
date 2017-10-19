---
layout: page
title: "Q166734: XFOR: Messages Missing Subject Line"
permalink: /kb/166/Q166734/
---

## Q166734: XFOR: Messages Missing Subject Line

	Article: Q166734
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs when you apply Microsoft Exchange Server Service Pack 4
	(SP4) to the Exchange Server computer that contains the Internet Mail Connector
	(IMC) for other sites in the organization. Messages originating in connected
	sites may lose their subject lines. Messages originating from within the IMC
	site do not lose their subject lines.
	
	CAUSE
	=====
	
	This is an interoperability issue between Microsoft Exchange Server SP3 and SP4.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Upgrade the servers in other sites to Exchange Server SP4.
	
	MORE INFORMATION
	================
	
	There may also be an error in the application event viewer similar to the
	following:
	
	  Event ID 171  Source MSExchangeMTA
	  The message C=USA;A= ;P=MyOrganization;L=SiteName1970409144321ADBTM3
	  contained too much global trace. The message was not delivered
	  with X.400 reason code unable-to-transfer and X.400 diagnostic code
	  size-constraint-violation. [MTA DISP:RESULT22 436] (14)
	
	However, all messages are getting delivered and no non-delivery reports (NDRs)
	are being generated.
	
	Additional query words: gone
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WinNT:4.0
	
	=============================================================================
	
