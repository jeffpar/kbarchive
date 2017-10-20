---
layout: page
title: "Q131508: PC Win: Err Msg: The Message Could Not Be Fully Recovered"
permalink: /kb/131/Q131508/
---

## Q131508: PC Win: Err Msg: The Message Could Not Be Fully Recovered

{% raw %}

	Article: Q131508
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a mail message in versions 3.2 and 3.2a of Microsoft Mail for
	Windows, you may see the following error as the body of the message instead of
	the message:
	
	  This message could not be fully recovered.
	
	CAUSE
	=====
	
	If there are multiple copies of a message in a single Mail Message File (MMF),
	and the CHKMMF utility has been run against the MMF, all iterations of the
	message will display this error instead of the message body.
	
	There will be a copy of the message in the Lost and Found folder that is created
	by the CHKMMF utility.
	
	If, however, there are attachments with the messages, the attachments will be
	lost.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q113164 PC Win: MMF Recovery Can Cause Missing Message Body
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	

{% endraw %}
