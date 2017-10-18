---
layout: page
title: "Q299513: Passport Login Page Appears in the Wrong Language"
permalink: kb/299/Q299513/
---

## Q299513: Passport Login Page Appears in the Wrong Language

	Article: Q299513
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Passport Login page appears in the wrong language.
	
	CAUSE
	=====
	
	The Passport network server pages are localized to accommodate many different
	languages. The AuthURL2 and LogoTag2 methods of the Passport Manager and
	Passport FastAuth objects accept a LangID parameter, which determines the
	display language of the Passport Login page that the method output URL points
	to. See the "Resolution" section for information on how to determine the cause
	of this problem.
	
	RESOLUTION
	==========
	
	If the Passport Login page appears in the wrong language, verify the following:
	
	- Did you send the correct LangID parameter to the LoginUser, AuthURL2, or
	  LogoTag2 method?
	
	- Is the LangID parameter a valid LCID value as specified in the Passport
	  Software Development Kit (SDK), or in general Microsoft Platform SDK
	  documentation? The Passport Manager Administration utility restricts you to
	  known LCIDs when setting the method defaults, but if you specified LCID
	  directly as a method parameter it is possible to specify an invalid LCID,
	  which does not generate a run-time error in the method. For more information
	  about method defaults, see the "More Information" section.
	
	- Did you provide the value for the LangID parameter in decimal form rather
	  than the Win32 programming hexadecimal form, or as string? LangID is presumed
	  to be in decimal form, although you can specify it in hex form using
	  language-specific hex representations. For example, &H0409 in Microsoft
	  Visual Basic Scripting Edition (VBScript) is equivalent to the decimal value
	  1033.
	
	MORE INFORMATION
	================
	
	Although some parameters of Microsoft Passport methods are listed as optional,
	those methods generate URLs or results that reflect inherent default values when
	they are called. These default parameter values can be used to provide
	consistent site-wide values, such as Language ID. Use the Passport Manager
	Administration utility to set these defaults.
	
	If a certain server on your site is dedicated to a particular language or locale,
	it may be useful to set the Language ID on that server to always be a consistent
	value rather than declaring the locale identifier (LCID) in each method call.
	The Language ID declares the language that Passport service pages (such as
	sign-in and registration) render in when they are obtained with the URL results
	of the LoginUser, AuthURL2, LogoTag2, or GetDomainAttribute methods. Note that
	there may still be reasons to declare LCID by method call or user access if your
	site expects to handle multiple languages and uses either Passport profile
	information or browser sniffing to determine the user's probable language
	choice.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	
