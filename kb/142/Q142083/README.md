---
layout: page
title: "Q142083: PRB: Mastering Visual FoxPro: Full-Text Search Internal Error"
permalink: /kb/142/Q142083/
---

## Q142083: PRB: Mastering Visual FoxPro: Full-Text Search Internal Error

{% raw %}

	Article: Q142083
	Product(s): Microsoft Mastering Series
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbmm
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Visual FoxPro 3.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to execute a full-text search from the Find tab on the Navigator
	results in the following error:
	
	  An internal error has occurred. If the problem persists, please restart the
	  application and try again.
	
	CAUSE
	=====
	
	The problem may be related to an invalid directory listed in the TEMP
	environment variable or listing a directory that is not on the C: drive (such as
	SET TEMP d:\temp).
	
	RESOLUTION
	==========
	
	Users have reported that removing the SET TEMP command from the Autoexec.bat
	file corrects this problem.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will report more information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00 1995multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbmm 
	Technology        : kbMSPressSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
