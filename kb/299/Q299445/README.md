---
layout: page
title: "Q299445: Core Profile Attributes Return Empty Values or Unexpected Result"
permalink: kb/299/Q299445/
---

## Q299445: Core Profile Attributes Return Empty Values or Unexpected Result

	Article: Q299445
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
	
	Attempts to access user core profile attributes return either empty values or
	unexpected results.
	
	CAUSE
	=====
	
	An attempt to retrieve an attribute of a user's core profile may return an empty
	string for several reasons. See the "More Information" section for details.
	
	If the field attribute exists but the data is missing or not specified for that
	user, or that user does not have a current Ticket or is not signed in, an empty
	string is returned. Any non-string attribute that returns an empty value returns
	a variant of type VT_EMPTY rather than a zero or a missing value. In Microsoft
	Visual Basic Scripting Edition (VBScript), the IsEmpty function returns True for
	that attribute. For a string attribute, an empty value returns a zero-length
	string, but IsEmpty actually returns False.
	
	MORE INFORMATION
	================
	
	To isolate the cause of the issue, check the following items:
	
	- Is your site in test mode?
	
	Test mode sites do not have access to full user core profile data, so some
	attributes return default values rather than the actual attribute values.
	
	For more information on test mode, see following Microsoft Passport Software
	Development Kit (SDK) Web site:
	
	  Test Mode
	  http://www.passport.com/sdkdocuments/sdk14/Reference/Operations/testmode.htm
	
	- Have you fully completed the registration process, including installation of
	  your site's encryption key and Site ID?
	
	For access to user core profile data, your Site ID, as set in the Passport
	Manager Administration utility, must match the Site ID that you were provided
	with when you registered your site. If it does not, the Profile (and Ticket)
	cookies cannot be read or even written.
	
	- Does your site's code use the HasProfile method of the Passport Manager
	  object to make sure that the current Passport user has a core profile?
	
	This is a good practice before you attempt to access any specific profile item.
	
	- Does your code check to make sure that non-empty data exists for that
	  attribute in the Passport user's core profile before attempting to read it?
	
	Another good practice is to determine whether the string length is greater than
	zero.
	
	Only MemberIDHigh, MemberIDLow, BDay_Precision, ProfileVersion and the boolean
	user-preference attributes (Wallet, Accessibility) are guaranteed to contain
	non-null, non-empty, useful values. Attributes such as Nickname can be blank
	because that user does not choose to share a nickname in their core profile.
	Very few attributes of a Passport profile are always guaranteed to contain data.
	For more information, see following Passport SDK Web site:
	
	  Core Profile Schema
	  http://www.passport.com/sdkdocuments/sdk14/reference/miscref/r_profilecore.htm
	
	- Is your code attempting to access an attribute using the correct attribute
	  name?
	
	Incorrectly referenced attribute names may result in a run-time error when either
	reading or writing a profile.
	
	- Does your code verify that the user has a current Ticket and is signed in?
	
	To be sure, always call HasProfile, which returns True only if the Profile cookie
	exists for this user.
	- Is your site using Kids Passport?
	
	Profiles for users who are under the age of 13 and subject to consent are not
	given if the child user does not have consent at the Passport domain authority.
	For more information, see following Passport SDK Web site:
	
	  Kids Passport Overview
	  http://www.passport.com/sdkdocuments/sdk14/KIDS/overview.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	
