---
layout: page
title: "Q305189: Preproduction Passport Registration Page Does Not Work Correctly"
permalink: /kb/305/Q305189/
---

## Q305189: Preproduction Passport Registration Page Does Not Work Correctly

	Article: Q305189
	Product(s): Microsoft Developer Network
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select Passport sign in from the Preproduction Passport Registration
	page that is accessed through the partner site, you are not returned to the
	partner site after you log in.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	1. Go to any Preproduction Passport-enabled site.
	
	2. On the sign-in user interface, click the sign-in scarab.
	
	3. Select Get One Now.
	
	4. On the registration page, select Passport sign in, but do not register.
	
	5. Sign in with Preproduction Passport.
	
	6. You are returned to the following page for the test environment (instead of
	  to the partner site in the return URL):
	
	  Passport Member Services
	  http://current-memserv.passporttest.com/memberservice.srf
	
	The site ID parameter on the query string shows ID=7, which is the
	current-memserv site ID.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport200 kbPassportSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
