---
layout: page
title: "Q303687: PRB: Duplicate Email When User Does Not Complete Password Change"
permalink: kb/303/Q303687/
---

## Q303687: PRB: Duplicate Email When User Does Not Complete Password Change

	Article: Q303687
	Product(s): Microsoft Developer Network
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the user does not respond to a password change e-mail message in a specific
	period of time, the user may receive redundant notification e-mail messages.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. From the Microsoft .NET Passport Web site, the user initiates a password
	  change by e-mail, and then waits for the e-mail message to be delivered.
	
	2. When the user receives the e-mail message from Passport, the user opens the
	  e-mail message, and then clicks the link to create the new password.
	
	3. The user waits for the page with the Please type in your new password dialog
	  box to open in a browser window.
	
	4. The user does not complete the password change operation, and closes the
	  browser window.
	
	5. The user waits less than 2 hours.
	
	6. A second copy of the password change e-mail message is delivered.
	
	7. The user waits 24 hours.
	
	8. Note that a third copy of the password change e-mail message is delivered to
	  the user.
	
	Expected result: No e-mail message is delivered in step 6.
	
	If the user clicks the link in the e-mail message to create a new password, one
	of two things may occur that prevents the password change: either the system had
	a problem, or the user did not complete the transaction within 120 minutes.
	
	- The system may have had a problem and did not complete processing the
	  response (or both). If the user clicks the link in the e-mail message to
	  create a new password, and the system has a problem, Passport does not detect
	  this error and does not resend the e-mail message. The resend logic detects
	  if the user has not clicked the link to create a new password, but does not
	  detect if the system has a problem. The user can use the original mail from
	  Passport to try the process again.
	
	- If the user clicks the link to create a new password and then does not
	  complete the process within 120 minutes, as is described in the "Steps to
	  Reproduce the Behavior" section of this article, the resend logic assumes
	  that you have not clicked the link to create a new password and resends the
	  e-mail message based on the resend period and retry limit that is defined in
	  the Passport template table.
	
	The daemon has no way to detect which case has actually occurred when it receives
	TransTypeID of 31 to 40. The worst case (first scenario) is assumed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport200 kbPassportSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
