---
layout: page
title: "Q159287: XCLN: MAPIFindNext Fails to Retrieve Message Identifiers"
permalink: /kb/159/Q159287/
---

## Q159287: XCLN: MAPIFindNext Fails to Retrieve Message Identifiers

{% raw %}

	Article: Q159287
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the simple MAPI function MAPIFindNext in MAPI version 1.0 may fail to
	retrieve the next (or first) message identifier of a specified type of incoming
	message. The following is the resulting return code of the MAPIFindNext call:
	
	     MAPI_E_NO_MESSAGES
	
	CAUSE
	=====
	
	When you use MAPI version 1.0, choosing the value "IPM." for parameter
	lpszMessageType in the MAPIFindNext function call does not retrieve the next
	message identifier of the specified type (IPM) of incoming message. This value
	has been used successfully in previous versions of simple MAPI to enumerate all
	messages of a given message type.
	
	WORKAROUND
	==========
	
	Instead of using "IPM." as value to enumerate messages of an IPM message type,
	specify "NULL" (without the quotation marks) in the lpszMessageType parameter of
	the MAPIFindNext function call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The MAPI SDK online documentation states the following regarding the
	lpszMessageType parameter of the MAPIFindNext function:
	
	  When the lpszSeedMessageID parameter is NULL or points to an empty string,
	  MAPIFindNext returns the message identifier for the first message of the type
	  specified by the lpszMessageType parameter. When lpszSeedMessageID contains a
	  valid identifier, the function returns the next matching message of the type
	  specified by lpszMessageType. Repeated calls to MAPIFindNext ultimately
	  result in a return of the MAPI_E_NO_MESSAGES value, which means the
	  enumeration is complete. Message type matching is done against message class
	  strings. All message types whose names match (up to the length specified in
	  lpszMessageType) are returned.
	
	The last sentence implies that a message type string portion such as "IPM." or
	"IPC." can be used with wildcard functionality to enumerate all messages of the
	given message type. As a result, there are two methods for successfully
	enumerating IPM type messages using simple MAPI:
	
	- 
	
	  ulResult = (*lpfnMAPIFindNext)(hMAPISession, hWnd, "IPM.",
	     lpszSeedMessageID, flFlag, 0L, lpszMessageID);
	
	- 
	
	  ulResult = (*lpfnMAPIFindNext)(hMAPISession, hWnd, NULL,
	     lpszSeedMessageID, flFlag, 0L, lpszMessageID);
	
	Using MAPI version 1.0, only the second method successfully retrieves the next
	(or first) message identifier of a specified type of incoming message. This
	behavior would require changing the source codes for all applications using the
	first method to enumerate IPM type messages, and recompiling them.
	
	
	Installation
	------------
	
	This description uses the Microsoft Exchange Windows NT client, version 4.0 as an
	example.
	
	1. Close all applications that use Mapi32.dll
	
	2. Back up Mapi32.dll from the <Winntroot>\System32 directory.
	
	3. Copy the extracted version of Mapi32.dll to the <Winntroot>\System32
	  directory.
	
	4. Restart any applications that were stopped in step 1.
	
	Additional query words: WIN32 SDK Simple Messaging 5.00
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
