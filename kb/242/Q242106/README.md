---
layout: page
title: "Q242106: XIMS: Chat Transcription Logs Created in Incorrect Location"
permalink: /kb/242/Q242106/
---

## Q242106: XIMS: Chat Transcription Logs Created in Incorrect Location

{% raw %}

	Article: Q242106
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you enable the transcription capabilities of the Microsoft Chat service for a
	channel, you may not be able to find the transcription logs. The Chat service
	for Exchange Server version 5.5 may write the log information to the wrong
	location.
	
	CAUSE
	=====
	
	This problem can occur because the Chat service in Exchange Server 5.5 writes
	its log information to the following folder by default
	
	  <X>:\InetPub\Chat\Transcripts\<channel_name>
	
	where <channel_name> is the name of the channel for which transcription
	capabilities are enabled.
	
	Different transcription paths are used where <X> is one of the following:
	
	- Blank. Transcription logs are created and stored in the
	  <rootdrive>\channel_name folder, where <rootdrive> is the drive
	  letter chosen as the root drive.
	
	- " \ " (without the quotation marks). Transcription logs are not created and
	  there is an approximately 2 second delay for client channel entry.
	
	- "Path" (without the quotation marks). Transcription logs are created and
	  stored in the <windir>\System32\<channel_name> folder, where
	  <windir> is the folder in which Windows is installed.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that you define the full path to the folder
	that you want to use for transcript storage. To define the transcription logging
	path on a Chat server:
	
	1. Click the Start button, point to Programs, and then click Exchange Chat
	  Manager MMC.
	
	2. On the Extensions menu, click Tscript.
	
	3. In the Default Location box, edit the path as appropriate.
	
	4. Click Apply, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
