---
layout: page
title: "Q229981: Err Msg: The Windows 95 Year 2000 Update Could Not Determine..."
permalink: /kb/229/Q229981/
---

## Q229981: Err Msg: The Windows 95 Year 2000 Update Could Not Determine...

{% raw %}

	Article: Q229981
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbYear2000 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows 95 Year 2000 Update, you may receive the following
	error message:
	
	  The Windows 95 Year 2000 Update could not determine your language settings.
	  Do you want to continue installing the Update?
	
	CAUSE
	=====
	
	This behavior can occur if the ResourceLocale information is missing in the
	registry. The Windows 95 Year 2000 Update relies on this key to determine the
	language version of Windows that is installed.
	
	RESOLUTION
	==========
	
	If you are certain that the Year 2000 Update language version you are installing
	matches your Windows language version, click Yes to continue installing.
	
	
	MORE INFORMATION
	================
	
	For more information about the Windows 95 Year 2000 Update, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q225050 Availability of the Windows 95 Year 2000 Update
	
	Additional query words: y2k
	
	======================================================================
	Keywords          : kberrmsg kbtool kbYear2000 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
