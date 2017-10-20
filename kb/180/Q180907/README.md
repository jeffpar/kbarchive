---
layout: page
title: "Q180907: XFOR: Unable to Send Bitmap in Body of Message"
permalink: /kb/180/Q180907/
---

## Q180907: XFOR: Unable to Send Bitmap in Body of Message

{% raw %}

	Article: Q180907
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message with a large bitmap in the body of the message from
	Exchange Server 5.5 to Lotus Notes 4.5, using the Exchange Notes Connector, when
	the message reaches the Notes user, the pasted bitmap is missing from the body
	of the message. In the Notes Inbox, the message shows a paper clip indicating an
	attachment, but the attachment is nowhere to be found.
	
	The following eight errors are logged in the Browse Log of the Exchange
	Connectivity Administrator:
	
	  Message Number: 31500
	  Message: Sender: Test User - Exchange, size 160152, Message ID: c=US; a=
	  ;p=Microsoft;l=PIANO-980115190234Z-410 1998/01/15 14:02:34 NOTES
	  Transform
	
	  Message Number: 41301
	  Message:  Notes returned code: 13b (hex)
	
	  Message Number 41300
	  Message: Notes Package ID: Operating System (OS); Extended Reason
	  String:
	  Memory allocation request exceeded 65,000 bytes.
	
	  Message Number: 41412
	  Message: Unable to create OLE2 object in Notes. Please verify version of
	  Notes Client used by NMC.  Downgrading object to OLE1.
	
	  Message Number 41301
	  Message: Notes returned code 109 (hex)
	
	  Message Number: 41300
	  Message: Notes Package ID: Operating System (OS); Extended Reason
	  String: File Truncated - file may have been damaged.
	
	  Message Number: 41360
	  Message: Error {Invalid syntax}; adding COMPOSITE BODY item to Notes
	  message failed.
	
	  Message Number 41360
	  Message: Error {Invalid syntax}; adding COMPOSITE BODY item to Notes
	  Message failed.
	
	CAUSE
	=====
	
	The problem is the result of a previous version of Lotus Notes API being exposed
	to a store OLE2 object that was less than 64 KB. If you attach small bitmaps in
	the body of the message, then you will not experience the problem.
	
	This problem is fixed in the Lotus Notes Client version 4.5.2 and later.
	
	
	WORKAROUND
	==========
	
	To work around this problem, upgrade the Lotus Notes client on the Exchange
	Connector server to version 4.5.2 or later. It is also recommended that you
	upgrade the workstation Notes client to version 4.5.2 or later.
	
	
	Additional query words: XFOR NOTES bitmap
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
