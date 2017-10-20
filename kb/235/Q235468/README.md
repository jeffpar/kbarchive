---
layout: page
title: "Q235468: XCLN: Wrong Language Pack Causes Error Message with OWA Calendar"
permalink: /kb/235/Q235468/
---

## Q235468: XCLN: Wrong Language Pack Causes Error Message with OWA Calendar

{% raw %}

	Article: Q235468
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the localized Outlook Web Access (OWA) template for languages other
	than English, an error message may be displayed when you access the calendar
	from the browser.
	
	For example, if you set the browser language preference to French, the following
	error message may be displayed:
	
	  Impossible de rendre cet affichage. 424Object required
	
	If you set the browser language preference to Brazil, the following error message
	may be displayed:
	
	  Nao e possivel processar este modo de exibicao. 424Object required
	
	CAUSE
	=====
	
	You need the latest version of the language pack.
	
	RESOLUTION
	==========
	
	The Exchange Server version 5.5 OWA language packs are included in Exchange
	Server 5.5 Service Pack 3, which is available on CD or from the following
	Microsoft FTP server:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes
	
	After you install a language pack, you must stop and restart the Web Publishing
	Service to make the new language scripts available.
	
	MORE INFORMATION
	================
	
	For additional information about language packs for Exchange Server 5.5, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q234751 XWEB: Installing and Using OWA Language Packs
	
	Additional query words: langpack, owa and language
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
