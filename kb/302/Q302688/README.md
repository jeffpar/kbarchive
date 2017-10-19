---
layout: page
title: "Q302688: Troubleshooting Context-Sensitive Cobranding"
permalink: /kb/302/Q302688/
---

## Q302688: Troubleshooting Context-Sensitive Cobranding

	Article: Q302688
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Changing the look and feel of your cobranding based on a particular context
	substantially increases the versatility of Passport cobranding. For example,
	imagine that your site has a "Preferred Customer" section and a regular section.
	You can use existing contextual information about your site (the originating
	URL, for example) to pass a query string variable on to your cobranding template
	code. Your cobranding template in turn contains branching code based on this
	variable, and produces cobranded HTML content for a preferred customer that is
	entirely different from what it produces for a regular user. See the "More
	Information" section for some general troubleshooting steps for
	context-sensitive cobranding.
	
	MORE INFORMATION
	================
	
	- Verify that calls to the AuthURL2 and LogoTag2 methods of the Passport
	  Manager object include the optional coBrandArgs parameters. This is how
	  context is passed to your cobranding template's query string.
	
	- Make certain that the cobranding template that you have written will accept
	  the GET query string and return different cobranding information as
	  JavaScript variables through branching based on values that are passed with
	  the coBrandArgs parameter.
	
	- Verify that coBrandArgs query string variables are reasonably short.
	
	- Make sure that coBrandArgs are URL encoded.
	
	- Work backwards: What happens if no coBrandArgs is specified? Does the
	  cobranding template give the expected results?
	
	- Hit your cobranding template URL directly by using a browser rather than by
	  relying on the network pages to load them. Try this with different query
	  string values that you expect your file to handle and save the results as
	  text files. Make sure the resulting text files use valid JavaScript syntax
	  and would not produce syntax errors if given verbatim as a script SRC.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	
