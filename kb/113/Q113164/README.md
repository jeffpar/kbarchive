---
layout: page
title: "Q113164: PC Win: MMF Recovery Can Cause Missing Message Body"
permalink: /kb/113/Q113164/
---

## Q113164: PC Win: MMF Recovery Can Cause Missing Message Body

{% raw %}

	Article: Q113164
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mail message file (MMF) Recovery utility built into versions 3.0b and 3.2 of
	Microsoft Mail for Windows causes messages that have been copied to multiple
	folders to lose their message bodies, including any attachments. A copy of the
	message with the text intact will be saved in the "Lost and Found" folder
	created by the recovery process; however, all attachments will be lost.
	
	CAUSE
	=====
	
	This is by design; the loss of these attachments is due to the structure of the
	.MMF file. You should only use the MMF Recovery utility if .MMF file corruption
	is evident. The utility is not designed to be used on working .MMF files that
	exhibit no signs of corruption.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q131508 Err Msg: The Message Could Not Be Fully Recovered
	
	Additional query words: 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	

{% endraw %}
