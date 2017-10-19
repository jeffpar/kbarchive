---
layout: page
title: "Q299422: No Check Mark Next to Site Name When User Signs Out"
permalink: /kb/299/Q299422/
---

## Q299422: No Check Mark Next to Site Name When User Signs Out

	Article: Q299422
	Product(s): Microsoft Developer Network
	Version(s): 1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, version 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A check mark does not appear next to my site's name when a user signs out of my
	site.
	
	CAUSE
	=====
	
	This problem occurs when the expire-cookie page does not specify the content
	type correctly or there is a problem deleting the Passport cookies.
	
	MORE INFORMATION
	================
	
	Cookies may not be deleted from a site for one of several reasons. Test the
	following items to isolate the cause of the issue:
	
	- Does your cookie-delete page actually return an image?
	
	- Does your cookie-delete page attempt to send any content other than the image
	  to the client browser?
	
	- Is the content type in the header being set to something other than
	  "image/gif" or "image/jpeg"?
	
	Your cookie-delete page should always return an image unless there is some reason
	why the cookie-delete operation has failed or should fail. Your cookie-delete
	page is called as an image source (not as a file include) when it is integrated
	into the Passport network-wide sign-out page that is actually connected to when
	a user clicks a Sign Out link. This page deletes cookies as served by all
	Passport participant sites that the user signed in to during that session.
	
	If you believe the problem is caused by a failure to delete the Passport cookies,
	see the following article in the Microsoft Knowledge Base:
	
	  Q299353 Passport Cookies Are Not Deleted When a User Signs Out
	
	REFERENCES
	==========
	
	For more information on Passport sign-out problems, see the following Microsoft
	Passport Software Development Kit (SDK) Web site:
	
	  Passport Sign-Out Problems
	  http://www.passport.com/sdkdocuments/sdk14/tshoot/tshoot5.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassportSearch
	Version           : :1.4
	Issue type        : kbprb
	
	=============================================================================
	
