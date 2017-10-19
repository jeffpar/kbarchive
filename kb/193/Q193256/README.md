---
layout: page
title: "Q193256: XADM: Euro Displayed Incorrectly After MIME Conversion"
permalink: /kb/193/Q193256/
---

## Q193256: XADM: Euro Displayed Incorrectly After MIME Conversion

	Article: Q193256
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2fix exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 EXC55SP3Fix kbExchange500preSP
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message with the Euro currency symbol (a "C" with two horizontal
	lines through the center) on the To, Cc, or Subject line, the symbol may be
	displayed as a question mark (?) when you open the message in an e-mail client,
	or when you view the message in the preview pane. This problem also occurs when
	you view the Subject line in the Inbox, on the taskbar, or on the title bar of
	the message window. However, Euro currency symbols in the body of the message
	are displayed properly.
	
	Note that this problem only occurs when the following conditions are met:
	
	- The message's character set is Western European (ISO-8859-1).
	
	- The message is sent using Post Office Protocol version 3 (POP3) and received
	  using Internet Mail Access Protocol (IMAP) or POP3.
	
	In addition, note that this problem is not dependent on the e-mail client or
	operating system you are using. The problem can occur even if your e-mail
	client, the operating system on which the e-mail client is running, and the
	Microsoft Exchange Server computer all support the euro currency symbol.
	
	CAUSE
	=====
	
	This problem occurs because the Western European character set does not support
	the Euro currency symbol. Therefore, the Euro currency symbol is not converted
	properly when the information store converts the message from Multipurpose
	Internet Mail Extensions (MIME) format so that it can be viewed in a Messaging
	Application Programming Interface (MAPI) or POP3 e-mail client.
	
	RESOLUTION
	==========
	
	Exchange Server 5.0
	-------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.0 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+--------------------------+
	| File name  | Version     | 
	+--------------------------+
	| Mdbmsg.dll | 5.0.1461.85 | 
	+--------------------------+
	| Store.exe  | 5.0.1461.85 | 
	+--------------------------+
	
	After you apply the fix, if you are sending a message from a POP3 e-mail client
	to a MAPI e-mail client, you must select the Allow 8-Bit Characters In Headers
	check box in the POP3 e-mail client. If you are sending a message from a POP3
	e-mail client to another POP3 e-mail client, you do not need to select this
	check box, but the euro currency symbol is still displayed correctly if you do.
	
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2539.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2539.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2539.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5. This problem was corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	After you apply the fix, messages that are labeled with the ISO-8859-1 character
	set are labeled with the Windows-1252 character set instead. This allows the
	Euro currency symbol to be converted properly by the information store. However,
	if your e-mail client, the operating system on which the e-mail client is
	running, or the Microsoft Exchange Server computer do not support the Euro
	currency symbol, the symbol may still be displayed incorrectly when you view the
	To, Cc, or Subject line in an e-mail client.
	
	
	For information about the availability of the euro currency symbol in Microsoft
	Windows NT character sets, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q182005 Euro Currency Not Available in Windows NT Character Sets
	
	Additional query words: imail
	
	======================================================================
	Keywords          : exc55sp2fix exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 EXC55SP3Fix kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
