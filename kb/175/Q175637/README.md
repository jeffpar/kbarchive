---
layout: page
title: "Q175637: Poor Print Quality with Epson Stylus Pro XL ESC/P 2"
permalink: /kb/175/Q175637/
---

## Q175637: Poor Print Quality with Epson Stylus Pro XL ESC/P 2

{% raw %}

	Article: Q175637
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print color documents from a computer running Windows NT 4.0 Service
	Pack 3 to an Epson Stylus Pro XL printer, you may experience print defects. You
	may notice horizontal white lines going through the entire page of color
	documents.
	
	CAUSE
	=====
	
	This problem occurs when you set the document default graphic resolution to 720
	dpi and the print processor to "Always Spool RAW DATA Type."
	
	This problem does not occur when you use 360 dpi or the default EMF spooling.
	Epson monolithic printer drivers always use banding. The above problem is
	related to whether the driver performs banding.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After applying the hotfix, it may be necessary to manually remove the Epson
	printer and drivers and then re-create the printer before the fix takes effect.
	For more information, please see the following Microsoft Knowledge Base
	article:
	
	ARTICLE-ID: Q135406
	TITLE : Steps to Manually Remove and Reinstall a Printer Driver
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
