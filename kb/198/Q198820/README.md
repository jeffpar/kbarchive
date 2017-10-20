---
layout: page
title: "Q198820: XIMS: Incorrectly Formatted Channel Names Will Not Be Transcribe"
permalink: /kb/198/Q198820/
---

## Q198820: XIMS: Incorrectly Formatted Channel Names Will Not Be Transcribe

{% raw %}

	Article: Q198820
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When attempting to transcribe new dynamic channels in the Microsoft Chat Service
	MMC, the users who join channels with the incorrectly formatted names (%#[ASCII
	255], %#[ASCII 251]) see abnormal behavior. When the user sends private
	messages, the first channel will create a transcript file with the name %#, and
	the first user will receive a message indicating the channel message is being
	transcribed.
	
	No other log files will be created for the channels, and any private messages
	will be placed in the log files.
	
	RESOLUTION
	==========
	
	If a channel with a normal name is created, it will transcribe normally while
	these two channels will not be transcribed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Chat Service included
	with Exchange Server 5.5 Service Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
