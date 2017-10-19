---
layout: page
title: "Q218129: &quot;Snap in Failed to Initialize&quot; Error Opening Commerce Host Admin"
permalink: /kb/218/Q218129/
---

## Q218129: &quot;Snap in Failed to Initialize&quot; Error Opening Commerce Host Admin

	Article: Q218129
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening the Commerce Host Administration folder in the Site Server Service
	Admin MMC, you may receive the following error message:
	
	  Snap in failed to initialize
	
	CAUSE
	=====
	
	The edition of Site Server 3.0 that ships with BackOffice Server 4.5 is not the
	Commerce Edition. The Commerce Host Administration folder is used to administer
	servers using Site Server, Commerce Edition.
	
	RESOLUTION
	==========
	
	To resolve this issue, you can remove this folder from the Site Server MMC
	console:
	
	1. On the Start menu, click Programs, click Microsoft Site Server, click
	  Administration, and then click Site Server Service Admin (MMC).
	
	2. Click Console, and then click Add|Remove Snap-In.
	
	3. Select the Commerce Host Administration folder, and then click Remove.
	
	4. Click OK to close the window
	
	5. Click Console, and then click Save to save the console.
	
	This folder can be re-added to the console if Commerce Edition is loaded at a
	later time.
	
	MORE INFORMATION
	================
	
	For more information on Site Server, Commerce Edition visit:
	
	  http://www.microsoft.com/siteserver/commerce/
	
	
	Additional query words: MMC site commerce
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
