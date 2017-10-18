---
layout: page
title: "Q303694: GetLoginChallenge Does Not Pass Back AuthHeader in JavaScript"
permalink: kb/303/Q303694/
---

## Q303694: GetLoginChallenge Does Not Pass Back AuthHeader in JavaScript

	Article: Q303694
	Product(s): Microsoft Developer Network
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GetLoginChallenge method does not pass back the AuthHeader in JavaScript.
	
	CAUSE
	=====
	
	JavaScript can only pass in string variables by value, not by reference. This
	means that an Out parameter cannot be set by a function.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that your function passes back a variant
	array with both the URL and the AuthHeader. Use the AuthURL API to get the login
	URL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport200 kbPassportSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
