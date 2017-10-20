---
layout: page
title: "Q178766: XWEB: Error Message: Failed to Open this Message"
permalink: /kb/178/Q178766/
---

## Q178766: XWEB: Error Message: Failed to Open this Message

{% raw %}

	Article: Q178766
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive one of the following error messages in the Microsoft Outlook Web
	Access (OWA) client when you attempt to open a message:
	
	  Failed to open this message.
	  Your message does not exist in this folder. It may have been deleted.
	
	  -or-
	
	  Failed to open this item.
	  Your item does not exist in this folder. It may have been deleted.
	
	CAUSE
	=====
	
	There are two known causes of this problem:
	
	1. The Microsoft Exchange Information Store service may not be started.
	
	  -OR-
	
	2. Outlook97 was installed on the Exchange Server computer after Exchange Server
	  was installed.
	
	WORKAROUND
	==========
	
	To workaround the first cause, start the Microsoft Exchange Information Store
	service on the Microsoft Exchange Server computer where your mailbox is located.
	To workaround the second cause, register the updated Cdo.dll using Regsvr32.exe
	or re-install Exchange Server 5.5. For more inforation about registering
	Cdo.dll, please refer to the following article in the Microsoft Knowledge Base:
	
	  Q176744 XCLN: Installing Outlook on OWA Server Causes Access Failure
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
