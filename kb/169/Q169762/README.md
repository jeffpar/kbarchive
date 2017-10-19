---
layout: page
title: "Q169762: XADM: Import Fails with Event ID 13 and ID 235"
permalink: /kb/169/Q169762/
---

## Q169762: XADM: Import Fails with Event ID 13 and ID 235

	Article: Q169762
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import a .csv file, the import command may fail and the event viewer
	application log may report errors similar to the following:
	
	  Event ID: 13
	  Source: X400Proxy
	  Type: Warning
	  Category: None
	  Description: Unable to process custom recipient Arcand, Lyne: BLUEMOON
	  because the target
	  address is not valid.
	  X400:/C[ASCII 202]/A=TEL.CAN/G=Lyne/S=Arcand/O=BLUEMOON/OU1=CISTI.NRC.OTT/ 
	  DDA:ID=ILL.CISTI
	
	  Event ID: 235
	  Source: MSExchangeDSImp
	  Type: Error
	  Category: None
	  Description: X400 address failure. An illegal type name was specified at
	  character position
	  87 of 'X400:/C[ASCII 202]/A=TEL.CAN/G=Lyne/S=Arcand/O=BLUEMOON/OU1=CISTI.NRC.OTT/ 
	  DDA:ID=ILL.CISTI'.
	
	CAUSE
	=====
	
	The .csv file may contain Domain Defined Attributes (DDA) values. DDA is the
	format used for custom recipients such as Microsoft Mail users or SMTP users.
	The Exchange Server import function does not properly handle incoming X.400
	addresses that contain a forward slash (or solidus) as part of a DDA Value. When
	Exchange Server encounters a forward slash as part of a DDA value, it reports an
	error. The X.400 custom recipient is not created in Exchange Server.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Edit the .csv file and globally replace /DDA with ;DDA.
	
	2. Save and close the .csv file and re-import it into Exchange Server by
	  clicking Import on the Tools menu.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	
