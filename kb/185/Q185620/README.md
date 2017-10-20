---
layout: page
title: "Q185620: XCLN: Exchange Setup Appears To Hang Indefinitely With SQL"
permalink: /kb/185/Q185620/
---

## Q185620: XCLN: Exchange Setup Appears To Hang Indefinitely With SQL

{% raw %}

	Article: Q185620
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program for Microsoft Exchange Client or Microsoft
	Outlook Client, the system may appear to hang indefinitely with no error message
	displayed. The Setup program appears to have almost completed.
	
	CAUSE
	=====
	
	SQL services are running and not allowing Mapi DLLs to be updated correctly.
	
	WORKAROUND
	==========
	
	Stop all SQL services in Control Panel Services before you begin installation of
	the client.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
