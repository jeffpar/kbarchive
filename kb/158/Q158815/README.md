---
layout: page
title: "Q158815: FP: Custom Confirmation Page Returns Field Name Adjacent to Data"
permalink: kb/158/Q158815/
---

## Q158815: FP: Custom Confirmation Page Returns Field Name Adjacent to Data

	Article: Q158815
	Product(s): Word Front Page
	Version(s): ; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a custom confirmation page with the Registration WebBot Component,
	the field name appears in bold next to the data that was entered.
	
	For other form WebBot components, you will see this problem if the following
	conditions are true:
	
	- You use the Advanced tab of the Form Settings dialog box and you set an
	  additional field selection.
	
	  -and-
	
	- You use a custom confirmation page.
	
	The form WebBot components are Discussion, Registration, and Save Results.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	97 for Windows with Bonus Pack.
	
	MORE INFORMATION
	================
	
	When a form that has been assigned a custom confirmation page is submitted, the
	WebBot Confirmation component should be replaced by the form contents on the
	confirmation page.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : :; WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
