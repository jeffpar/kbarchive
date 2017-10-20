---
layout: page
title: "Q199701: Encarta 99 Err Msg: A Printer Error Has Occured"
permalink: /kb/199/Q199701/
---

## Q199701: Encarta 99 Err Msg: A Printer Error Has Occured

{% raw %}

	Article: Q199701
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbprint kbimu
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print a fully expanded image from Microsoft Encarta
	Encyclopedia 99, you may receive one of the following error messages:
	
	  A printer error has occured.
	
	  Printer error.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- A Lexmark printer is configured as your default printer.
	
	- PM Journal is configured as the spool data format for the printer.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the icon for the default printer, and then click Properties.
	
	3. On the Details tab, and click Spool Settings.
	
	4. In the Spool Data Format box, click RAW or EMF.
	
	5. Click OK, and then click OK again.
	
	6. Close the Printers window.
	
	MORE INFORMATION
	================
	
	This error only occurs when you attempt to print an expanded image from Encarta
	Encyclopedia 99. The smaller thumbnail pictures are printed correctly.
	
	The PM Journal spool data format displays a print progress report when you send a
	print job to a Lexmark printer.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: multi multi-media media mm enc99
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbprint kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1999
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
