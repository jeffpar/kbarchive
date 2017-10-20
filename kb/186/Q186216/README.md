---
layout: page
title: "Q186216: XFOR: Date Appended to Attached Files Sent to cc:Mail List"
permalink: /kb/186/Q186216/
---

## Q186216: XFOR: Date Appended to Attached Files Sent to cc:Mail List

{% raw %}

	Article: Q186216
	Product(s): Microsoft Exchange
	Version(s): 5.0 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Exchange user sends a message with an attachment to a Lotus cc:Mail
	mailing list that includes Exchange recipients, the date is appended to the end
	of the attachment name when the message arrives in the Exchange recipients'
	mailboxes.
	
	CAUSE
	=====
	
	This is a problem in the hrParseFileName() function. This function assumes that
	the date following the file name is always in MM/DD/YY format. However, for
	dates such as 1/1/98, the format is actually M/D/YY. The parsing algorithm does
	not handle these correctly and fails for all dates with a single-digit month or
	day with the symptom listed above.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Exchange
	service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This hotfix has been posted to the following Internet location as Psp2ccma.exe
	and Psp2ccmi.exe:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-CCM
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
