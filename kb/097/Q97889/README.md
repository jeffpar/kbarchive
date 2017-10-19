---
layout: page
title: "Q97889: PC WRmt: Duplicate Mail Messages Download"
permalink: /kb/097/Q97889/
---

## Q97889: PC WRmt: Duplicate Mail Messages Download

	Article: Q97889
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are retrieving mail with version 3.2 of Microsoft Mail Remote for Windows
	and you are disconnected before all of your mail has been downloaded, you may
	receive duplicate messages the next time you retrieve mail. Messages that have
	already been received may download again.
	
	CAUSE
	=====
	
	EXTERNAL.EXE from version 3.0, 3.0a, or 3.2 of Microsoft Mail for PC Networks
	only marks mail delivered when all messages have been downloaded. Being
	disconnected causes EXTERNAL.EXE not to have a complete list of messages to
	download. As a result, it downloads the entire list, even though some messages
	might have been already downloaded.
	
	WORKAROUND
	==========
	
	The only workaround is to use the Session Setup command to retrieve only
	selected message headers instead of all unread messages. Follow these steps:
	
	1. From the View menu, choose Headers.
	
	2. Select the messages you want to retrieve. Select the messages that you know
	  you do not already have.
	
	3. Choose the Retrieve button.
	
	  If you mark a message by mistake, select the message and choose the Retrieve
	  button again. This returns the message to its original status.
	
	4. To download the mail immediately, choose the Connect Now button. Otherwise it
	  will be delivered the next time Mail Remote connects with the postoffice.
	
	5. Choose the OK button.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0, 3.0a, and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
