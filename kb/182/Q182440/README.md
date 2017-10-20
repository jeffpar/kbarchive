---
layout: page
title: "Q182440: XWEB: Korean - Unable to Render This View424Object Required"
permalink: /kb/182/Q182440/
---

## Q182440: XWEB: Korean - Unable to Render This View424Object Required

{% raw %}

	Article: Q182440
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade a computer running Exchange Server 5.0 SP1 to version 5.5 and
	apply Amkor000.exe (shipped with the Korean Outlook client version 8.03 CD-ROM)
	for Korean Outlook Web Access (OWA), you cannot view a Calendar through OWA. The
	following error message may appear in Korean:
	
	  Unable to render this view424Object required
	
	CAUSE
	=====
	
	The file Amlkor.dll in the %EXCHSRVR%\RES directory was not updated to version
	5.5.1960.0.
	
	WORKAROUND
	==========
	
	To work around this problem, manually replace the Amlkor.dll file with the
	version 5.5.1960.0 by performing the following procedure:
	
	1. On a separate Windows NT computer, install Korean Windows NT 4.0 plus SP3,
	  install Exchange Server 5.5, and apply Amkor000.exe (from the Korean Outlook
	  client 8.03 CD-ROM). Notice the Amlkor.dll file version (5.5.1960.0) and
	  date-stamp (97-10-29).
	
	2. On the upgraded Exchange Server computer, manually replace Amlkor.dll
	  (5.0.1458.58) in the %EXCHSRVR%\RES directory with version 5.5.1960.0.
	
	3. You should now be able to view the Calendar through OWA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
