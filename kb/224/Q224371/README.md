---
layout: page
title: "Q224371: IIS Error: The RPC Server is Unavailable"
permalink: /kb/224/Q224371/
---

## Q224371: IIS Error: The RPC Server is Unavailable

{% raw %}

	Article: Q224371
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Internet Services Manager and you refresh the MMC interface,
	the following error message may occur:
	
	  The RPC Server is Unavailable
	
	CAUSE
	=====
	
	This error is usually caused by the IISADMIN service being stopped.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that this IISADMIN service is running. To
	do this, perform the following steps:
	
	1. Open a command prompt (Cmd.exe).
	
	2. At the prompt, type "net start iisadmin" (without the quotation marks)
	
	3. Press Enter.
	
	Note: The IISADMIN service should restart once you click OK on the message box.
	This means that you may receive the message "The IISADMIN service has already
	been started" when performing the steps above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
