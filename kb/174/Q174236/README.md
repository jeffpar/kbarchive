---
layout: page
title: "Q174236: XGEN: MBCLEAN Deletes Messages with Blank Received Times"
permalink: kb/174/Q174236/
---

## Q174236: XGEN: MBCLEAN Deletes Messages with Blank Received Times

	Article: Q174236
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Mailbox Cleanup Agent deletes messages that have a blank Received Time.
	
	MORE INFORMATION
	================
	
	Mailbox Cleanup Agent is a server-based Exchange Utility in the "Microsoft
	BackOffice Resource Kit" and the "Microsoft Exchange Resource Kit" that can be
	used to delete older e-mail messages. It uses the MAPI property
	PR_MESSAGE_DELIVERY_TIME or "Received Time" to determine whether a message meets
	the criteria for deletion. Messages that do not contain this property or have an
	invalid value for this property are deleted.
	
	Note that Microsoft Exchange Client and Microsoft Outlook assign a blank Received
	Time to mail messages in the Sent Items folder that are composed while you are
	working offline.
	
	STATUS
	======
	
	This has been fixed in Mailbox Cleanup Agent, Mbclean.exe, version 1.8. It has
	been updated so that messages which have a blank or invalid Received Time are
	not deleted. The latest versions of the "Microsoft Exchange Resource Kit"
	Utilities can be downloaded from the following Microsoft Web site:
	
	  http://www.microsoft.com/exchange/reskit.htm
	
	Additional query words: MCA
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
