---
layout: page
title: "Q152932: XCON: X.400 Connector Uses Session Selector on X.400 Connections"
permalink: kb/152/Q152932/
---

## Q152932: XCON: X.400 Connector Uses Session Selector on X.400 Connections

	Article: Q152932
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Session Selector (S Sel) is defined for an X.400 connection defined with
	X.410 conformance, communication to foreign X.400 systems may not work
	properly.
	
	The Windows NT application event log may contain the following entry:
	
	  Event ID: 51
	  Source: MSExchangeMTA
	
	  Description:
	  An unknown MTA has attempted to bind. The MTA name in bind is <REMOTE MTA
	  NAME>. The MTA presentation address is
	  /t:0x44454D4F/n:0x444545392D5443504950, Association index: 2018. [MTA XFER-IN
	  35 42] (14)
	
	CAUSE
	=====
	
	Exchange Server incorrectly allows a configuration that sends and expects to
	receive a Session Selector (S Sel) on an X.410 conformant connection if defined
	to do so in the X.400 Connector Stack property pages.
	
	The following is taken from the Red Book, X.410, Page 110, Note 2:
	
	  Message handling will not use Session Layer addressing, that is, a session
	  address will not be passed in the Connect SPDU of the Session Layer.
	
	An X.410 conformant connection is configured by choosing 1984 or 1988 X.410 mode
	in the message transfer agent (MTA) conformance pane of the Advanced property
	page for the X.400 Connector.
	
	Exchange should ignore the S Selector value for X.410 conformant connections.
	
	
	RESOLUTION
	==========
	
	Exchange Server 5.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Message Transfer Agent (MTA)
	
	  File Name     Version
	  -------------------------
	  Emsmta.exe    5.0.1461.37
	  Ems_rid.dll   5.0.1461.37
	
	
	Exchange Server 5.5
	-------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, do not define X.400 systems with S Selector values
	if X.410 conformant connections will be used. By manipulating the OSI Protocol
	Information in the Stack Property Page of the X.400 Connector, you may be able
	to configure the X.400 Connector to send an S Selector (if necessary), but not
	to expect one in return.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0, 5.0, and 5.5.
	
	Additional query words: kbbug4.00 kbbug5.00 XFOR kbbug5.50 kbfix5.50.sp1 kbfix5.0.sp3
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
