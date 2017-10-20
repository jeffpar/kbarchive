---
layout: page
title: "Q229091: SMS: Remote Administrator Gets &quot;Connection Failed&quot; Error"
permalink: /kb/229/Q229091/
---

## Q229091: SMS: Remote Administrator Gets &quot;Connection Failed&quot; Error

{% raw %}

	Article: Q229091
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to remotely connect to a Systems Management Site Server that is
	fully functional from other machines with equivalent permissions in the same
	domain, you may immediately receive the following error message:
	
	  Connection Failed
	
	CAUSE
	=====
	
	Further investigation shows that using the
	<windir>\system32\wbem\wbemtest.exe utility to connect the Site Server's
	repository at \\<server>\root\default with correct permissions can give
	the following error message:
	
	  The RPC server is unavailable
	
	This is caused when the Remote Procedure Call (RPC) service is not installed and
	started. Verify this by going to Control Panel, clicking Network and selecting
	the Services tab. If installed, the RPC Configuration service is listed,
	otherwise it can be added from the dialog box by the clicking the Add button.
	
	WORKAROUND
	==========
	
	Make sure that the Remote Procedure Call (RPC) Service is installed and
	functional. Removing and reinstalling the TCP/IP protocol also reinstalls this
	service.
	
	If the issue continues to occur, you may be able to resolve the issue by
	importing the RPC key from a computer on which this problem does not occur. For
	additional information about how to do this, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q249828 Unable to Log on to Domain After Applying SP4 or Later
	
	Additional query words: prodsms sms20 RPC
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
