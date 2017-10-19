---
layout: page
title: "Q124046: WordPerfect Always Prompts for Net Login ID in Windows 95"
permalink: /kb/124/Q124046/
---

## Q124046: WordPerfect Always Prompts for Net Login ID in Windows 95

	Article: Q124046
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a WordPerfect 6.0a or 6.1 network workstation setup, you are
	presented with a dialog box prompting you to enter the Network Login ID.
	Entering the Network Login password allows setup to be completed. Each
	subsequent attempt to start WordPerfect results in the same behavior. The
	Network Login password must be entered each time you start WordPerfect, even
	though you are already logged on to the network.
	
	CAUSE
	=====
	
	WordPerfect 6.0a or 6.1 cannot determine the "USER ID" using the standard
	Windows application programming interface (API).
	
	RESOLUTION
	==========
	
	To resolve this behavior you must add a setting to a WordPerfect ENV file. For
	information on the steps to perform, please contact WordPerfect product
	support.
	
	
	MORE INFORMATION
	================
	
	WordPerfect is manufactured by WordPerfect Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3rdparty WP network setup installation install word perfect
	
	======================================================================
	Keywords          : msnets win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
