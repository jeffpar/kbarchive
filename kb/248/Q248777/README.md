---
layout: page
title: "Q248777: Streets and Trips 2000: Error When Selecting a Different Printer"
permalink: kb/248/Q248777/
---

## Q248777: Streets and Trips 2000: Error When Selecting a Different Printer

	Article: Q248777
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbimu
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print from Microsoft Expedia Streets and Trips 2000, you may
	receive the following error message:
	
	  Runtime Error: Abnormal Program Termination
	
	If you click Details, you receive the following error message:
	
	  Autmap71.exe caused an invalid page fault in module Mfc42.dll.
	
	CAUSE
	=====
	
	This behavior can occur if you select a printer other than the default printer
	in the Print dialog box.
	
	RESOLUTION
	==========
	
	To work around this issue, set the printer that you want to use as the default
	printer before you attempt to print from Expedia Streets and Trips 2000:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. In the Printers window, right-click the printer that you want to use, and
	  then click Default.
	
	3. Close the Printers window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Expedia Streets and
	Trips 2000.
	
	Additional query words: multi multi-media media auto-map amap
	
	======================================================================
	Keywords          : kberrmsg kbprint kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2000
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
