---
layout: page
title: "Q237421: XCON: Euro Sent Through X.400 Connector Displayed Incorrectly"
permalink: /kb/237/Q237421/
---

## Q237421: XCON: Euro Sent Through X.400 Connector Displayed Incorrectly

	Article: Q237421
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you compose a message with the euro currency symbol (a "C" with two
	horizontal lines through the center) on the Subject line or in the body of the
	message, and then send the message through an X.400 Connector, the euro currency
	symbol may be displayed as a question mark (?) when you open the message in an
	e-mail client.
	
	Note that this problem only occurs if the "Remote clients support MAPI" check box
	on the General tab and the "Allow MS Exchange contents" check box on the
	Advanced tab are not selected in the properties for the X.400 Connector.
	Clearing these check boxes prevents the server from sending content formatted in
	transport-neutral encapsulation format (TNEF) or message database encoding
	format (MDBEF).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	After you apply the fix, you must configure the X.400 Connector to use the
	Latin-9 (ISO-8859-15) character set during message conversion. To do so, use the
	following steps.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Exchange Server Administrator program in raw mode by typing the
	  following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. In the left pane, click the Connections object under the appropriate site. In
	  the right pane, click the X.400 Connector, and then on the File menu, click
	  Raw Properties. Note that the Connections object appears under the
	  Configuration object.
	
	3. In the list of object attributes, select Translation-Table-Used, and then in
	  the "Edit value" box, type "10" (without the quotation marks). If
	  Translation-Table-Used does not appear in the list of object attributes,
	  select All in the "List attributes of type" box.
	
	4. Click Set, and then click OK.
	
	
	MORE INFORMATION
	================
	
	For information about the availability of the euro currency symbol in Microsoft
	Windows NT character sets, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q182005 Euro Currency Not Available in Windows NT Character Sets
	
	  Q235445 Seven Fonts Not Supporting the Euro Currency Symbol
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
