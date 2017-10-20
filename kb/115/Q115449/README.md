---
layout: page
title: "Q115449: X400: Default Bodypart Parameter Applies to Message Body Only"
permalink: /kb/115/Q115449/
---

## Q115449: X400: Default Bodypart Parameter Applies to Message Body Only

{% raw %}

	Article: Q115449
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you compose and send an X.400 message that has ASCII text and one ASCII
	attachment, using this procedure:
	
	- include at the originator's postoffice no BODYPART.CFG file
	
	- set the default bodypart to T.61
	
	- run the gateway to translate the message into X.400 format
	
	- use a parsing program for X400 messages
	
	
	  the message text is encoded as T.61 and the attachment is encoded as BIL. This
	  is because the default bodypart parameter applies to the message body only.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
