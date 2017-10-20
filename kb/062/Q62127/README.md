---
layout: page
title: "Q62127: Mac Hyp: Retrieving Data from a MessageList"
permalink: /kb/062/Q62127/
---

## Q62127: Mac Hyp: Retrieving Data from a MessageList

{% raw %}

	Article: Q62127
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following routine retrieves information from a messageList created by
	getMessageList or displayMessageCenter in Microsoft Mail version 2.00:
	
	     msmail(GetMessageListField, messageList, fieldName[,index])=>data
	
	What is returned depends on the value of the "fieldName" parameter:
	
	1. "messageCount" returns the number of messages in the list.
	
	2. "type" returns the 4-character message type.
	
	3. "ID" returns the message's unique ID number.
	
	4. "read" returns true if the message has already been read; otherwise, it
	  returns false.
	
	5. "enclosure" returns true if the message contains an attached file; otherwise,
	  it returns false.
	
	6. "urgent" returns true if the message is urgent; otherwise it returns false.
	
	7. "sender" returns the sender's name.
	
	8. "subject" returns the message subject.
	
	9. "receivedDate" returns the received date in seconds since 1904.
	
	MORE INFORMATION
	================
	
	If "index" is supplied, getMessageListField returns the value of that field for
	the message indicated by "index." So, to find out whether the third message has
	been read, type the following:
	
	  " put msmail(getMessageListField, messageList, "read", 3) into isRead "
	  (without the quotation marks)
	
	If "index" is not supplied, getMessageListField returns a list of values, one for
	each message in the message list, followed by a return:
	
	  put msmail(getMessageListField, messageList, "sender") into sndr
	
	If the message list has multiple messages in it, "sndr" will contain:
	
	  sender of message 1<return>
	  sender of message 2<return>
	  ...
	
	If the message list has one message in it, "sndr" will contain:
	
	  sender of message 1<return>
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200
	Version           : :2.0
	
	=============================================================================
	

{% endraw %}
