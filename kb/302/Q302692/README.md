---
layout: page
title: "Q302692: Troubleshooting CSS Style Sheet Cobranding"
permalink: kb/302/Q302692/
---

## Q302692: Troubleshooting CSS Style Sheet Cobranding

	Article: Q302692
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Troubleshooting Cascading Style Sheet (CSS) cobranding features is relatively
	simple. When you begin troubleshooting CSS cobranding issues, first make sure
	that style sheets are supported in the browser that your user is using. Some
	targeted browsers do not support all aspects of style sheet cobranding. For more
	information on known CSS cobranding browser-specific issues, see the following
	Passport Software Development Kit (SDK) Web site:
	
	  Passport Cobranding Style Sheets
	  http://www.passport.com/sdkdocuments/sdk14/cobrand/cobrandtemplate_css.htm
	
	If you still have not solved your problem, review the tips that are listed in the
	"More Information" section.
	
	MORE INFORMATION
	================
	
	- Make sure that your CSS style sheet is at the URL that is specified by the
	  CoBrandCSSURL that you provided at registration time.
	
	- Many sites that use style sheets also "sniff" for browser capability. If
	  browser-sniffing capability is required, build the sniffing code into the
	  CoBrandCSSURL file as a script, so that different CSS-formatted text is
	  returned for the style sheet based on the result of the sniffing. This
	  requires that the CoBrandCSSURL actually point to an Active Server Pages
	  (ASP) file or an equivalent server-side solution rather than to a fixed,
	  text-only CSS file.
	
	- Debugging style sheets that check for the lid and cb parameters being passed
	  is somewhat more complex. For more information, see the following Passport
	  SDK Web site:
	
	  Query Strings on the Style Sheet URL
	  http://www.passport.com/sdkdocuments/sdk14/cobrand/querystringcss.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	
