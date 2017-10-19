---
layout: page
title: "Q217906: Foreign Language Error Messages on Intranet Starter Site"
permalink: /kb/217/Q217906/
---

## Q217906: Foreign Language Error Messages on Intranet Starter Site

	Article: Q217906
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbui
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click "Submit a Helpdesk Ticket" or "Browse current help tickets" from
	the Intranet Starter Site, you may receive the following error message:
	
	  Fehler 'ASP 0113'
	  Zeitlimit fur Skript wurde erreicht
	
	  /inetkit/helpdesk/posthelp.asp
	
	  Das Zeitlimit zum Ausfuhren eines Skripts wurde uberschritten. Sie konnen das
	  Zeitlimit andern, indem Sie einen neuen Wert fur die Eigenschaft
	  Server.ScriptTimeOut festlegen oder den Wert fur ScriptTimeout im
	  Verwaltungsprogramm von IIS andern.
	
	CAUSE
	=====
	
	This issue can occur if you try to use these features with a localized (German
	language) version of BackOffice Server for the Alpha platform when you do not
	have a localized e-mail client that works on the Alpha platform.
	
	RESOLUTION
	==========
	
	To work around this issue, obtain and install a localized e-mail client that
	works on the Alpha platform, or use these features with the English language
	version of BackOffice Server.
	
	Additional query words: 4.50
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbui 
	Technology        : kbAudDeveloper kbBackOfficeSearch
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
