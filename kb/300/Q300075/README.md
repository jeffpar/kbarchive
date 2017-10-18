---
layout: page
title: "Q300075: Changes Not Saved When Users Edit Passport Core Profile Data"
permalink: kb/300/Q300075/
---

## Q300075: Changes Not Saved When Users Edit Passport Core Profile Data

	Article: Q300075
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users edit Passport core profile data on a site, the changes are not saved.
	
	RESOLUTION
	==========
	
	If Passport users have difficulty saving changes to their profile, review the
	following items:
	
	1. Is your site currently in test mode (Site ID=1)? A test mode site can change
	  the values of a core profile locally in order to demonstrate the use of the
	  Profile property and Commit method, but the changes are not uploaded to the
	  Passport profile data server.
	
	2. Have you fully completed the registration process, including installation of
	  your site's encryption keys and Site ID? Updates from an unknown Site ID or
	  from a URL that does not fall within the RootURL domain for a known Site ID
	  are rejected.
	
	3. Does your code validate changes to a user's core profile data against the
	  rules as listed in the Core Profile Table? The Passport update code
	  individually isolates the updates rather than summarily rejecting them all if
	  a single one fails, but you should still attempt to validate all input.
	
	4. Does the code on your Passport pages call both the Commit and LogoTag2
	  methods of the Passport Manager object to commit the changes to the Passport
	  Update server? A new Passport Manager object created on another page that
	  calls the LogoTag2 method does not have the values from the previous
	  instance's Commit method that are needed to save to the Passport Update
	  server.
	
	5. Does your code call both the Commit method and the LogoTag2 method of
	  Passport Manager on the same page before writing any headers, cookies, HTML,
	  or HTML-generating script to the browser? This usually requires that data be
	  collected on one page of your site, then posted (using the HTTP POST method)
	  to another page on your site. The second page does nothing but handle the
	  form input, set that input to the Profile property, call Commit, and then
	  call LogoTag2 before any other Passport Manager method or HTML output. When
	  exchanging Passport data updates, use a POST for the form's method; do not
	  exchange this information between your pages as a GET query string.
	
	6. Does your code call the HasProfile, HasTicket, or IsAuthenticated methods of
	  Passport Manager before writing to the Profile property for the user? An
	  attempt to write profile data to the Passport server for a user who has not
	  signed in and who does not have valid Ticket data in the query string or
	  cookie does not give any results. An error does not result and your script
	  does not receive any indication that the write operation did not succeed.
	
	7. Are you attempting to set a read-only attribute?
	
	For more information, see the Core Profile Table of the Passport Software
	Development Kit (SDK) at the following Passport Web site:
	
	  http://www.passport.com/sdkdocuments/sdk14/reference/miscref/r_profilecoretable.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	
