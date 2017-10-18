---
layout: page
title: "Q303766: Passport Custom Setup Components Disk Allocation Does Not Add Up"
permalink: kb/303/Q303766/
---

## Q303766: Passport Custom Setup Components Disk Allocation Does Not Add Up

	Article: Q303766
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4,1.99
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4, 1.99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Passport with the Custom option, the number of bits between the
	Passport Manager configuration options and the subconfigurations do not add up
	to over 19 MB.
	
	CAUSE
	=====
	
	The dictionary files in Setup.rtf are a hidden part of the install, and cannot
	be addressed until all of the components that Passport installs are actually
	called out and suppressable through the user interface.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassport199 kbPassportSearch
	Version           : :1.3,1.4,1.99
	Issue type        : kbprb
	
	=============================================================================
	
