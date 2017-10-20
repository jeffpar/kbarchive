---
layout: page
title: "Q104364: PC Forms: Message Displayed in Compose Form"
permalink: /kb/104/Q104364/
---

## Q104364: PC Forms: Message Displayed in Compose Form

{% raw %}

	Article: Q104364
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you read a message created using a version 1.0 Microsoft Electronic Forms
	Designer custom form, the message may be displayed in the Compose form, rather
	than the Read form.
	
	CAUSE
	=====
	
	This problem occurs because of a limitation in simple Messaging Application
	Programming Interface (MAPI). The MAPISaveMail() function ignores the MAPI_SENT
	flag, starting this chain of events:
	
	1. The message is opened and the header has MAPI_SENT set (gMessage.Flags =
	  MAPI_SENT).
	
	2. The message is deleted from the message list (underneath).
	
	3. When Mail tries to save the open message to its original Message ID, it fails
	  because the ID has been deleted.
	
	4. The form attempts to save again, using the same header and an empty message
	  ID (to save a "new" message).
	
	5. The MAPISaveMail() function ignores the MAPI_SENT bit and saves the message
	  as a new/unsent message.
	
	6. When the message is reopened, the form processes an Open command on a
	  new/unsent message, and concludes that the message should display the Compose
	  form.
	
	RESOLUTION
	==========
	
	To avoid this problem, close all open instances of E-forms before you delete
	mail from Microsoft Mail for Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in simple MAPI from versions 3.0
	and 3.2 of Microsoft Mail for PC Networks. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 1.00 wrong incorrect PC MAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
