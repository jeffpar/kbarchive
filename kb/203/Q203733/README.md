---
layout: page
title: "Q203733: Quarterdeck Cleansweep Registry Wizard Stops Working"
permalink: /kb/203/Q203733/
---

## Q203733: Quarterdeck Cleansweep Registry Wizard Stops Working

{% raw %}

	Article: Q203733
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg win95
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Quarterdeck Cleansweep version 3.0 Registry
	Wizard, you may be unable to do so, and you may receive the following error
	message:
	
	  Unable to initialize DAO/Jet db engine.
	
	CAUSE
	=====
	
	This issue can occur after you have installed the Microsoft Paint (Paint95.exe)
	update. The Paint95.exe update replaces the Mfc42.dll file in the Windows\System
	folder on your computer, and this file is not totally compatible with
	Quarterdeck Cleansweep version 3.0.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Quarterdeck to inquire about the availability of
	a fix for this issue.
	
	To work around this issue, restore the Mfc42.dll file from your Cleansweep
	installation media to the Windows\System folder on your computer. For
	information about how to do so, contact Quarterdeck.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For additional information about the Paint95.exe update, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q162500 Invalid Page Fault Opening File in Microsoft Paint
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
