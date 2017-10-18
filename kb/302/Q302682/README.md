---
layout: page
title: "Q302682: Passport Cobranding Troubleshooting Tips"
permalink: kb/302/Q302682/
---

## Q302682: Passport Cobranding Troubleshooting Tips

	Article: Q302682
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
	
	In order to customize the cobranding experience for your Passport users, your
	site must be fully registered. If you need to troubleshoot Passport single
	sign-in (SSI) cobranding template issues, begin by verifying information that
	you provided when you registered your site, and then verify that the cobranding
	template file was constructed correctly.
	
	MORE INFORMATION
	================
	
	If you are having difficulty with Passport cobranding, check the following
	items:
	
	- Is your site fully registered as a Passport participant site?
	
	To register your Passport site, see the following Web site:
	
	  Participant Services
	  http://siteservices.passport.com
	
	- On requests to the Passport network, are you passing the Site ID that you
	  were given when you registered your site?
	
	- Did you supply the file location for a JavaScript cobranding template file
	  (CoBrandURL) when your site was registered?
	
	- Does your cobranding template output create the proper cobranding variables
	  at a global scope? Information on these cobranding variables is included in
	  Passport Cobranding Overview. For more information, see the following
	  Passport Software Development Kit (SDK) Web site:
	
	  Passport Cobranding Overview
	  http://www.passport.com/sdkdocuments/sdk14/cobrand/cobrandtemplate.htm
	
	- When you assign string values to your cobranding variables in JavaScript,
	  single quotes must be used to enclose the string, rather than double quotes,
	  to avoid problems when writing the strings to the Passport network pages. In
	  general, make sure that your quotes nest and balance.
	
	- HTML tags are allowed in the CBSigninTxt1 variable, but are not recommended
	  due to size restrictions. The entire string should be less than 200
	  characters long, including the tags themselves; characters beyond the
	  200-character limit are truncated, and this may cause imbalance of tags.
	
	- Test any HTML tags provided as cobranding values for cross-browser issues
	  before you use them in your cobranding template. If you break cobranding, you
	  may be preventing your users from signing in to your site.
	
	- Verify that your site does not return <SCRIPT> tags in your cobranding
	  template output. Cobranding is already enclosed by network-generated
	  <SCRIPT> tags. Inserting another level of script causes namespace and
	  execution problems.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	
