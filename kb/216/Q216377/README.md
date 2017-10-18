---
layout: page
title: "Q216377: XWEB: Exchange Server is Down When Using Address Book Views"
permalink: kb/216/Q216377/
---

## Q216377: XWEB: Exchange Server is Down When Using Address Book Views

	Article: Q216377
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on to Outlook Web Access Server (OWA), the following error message
	may be displayed:
	
	  Sorry! The Microsoft Exchange Server is down or the HTTP service has been
	  disabled by an administrator. Please try your request again later.
	
	CAUSE
	=====
	
	This is caused by using Address Book Views with the Service account having
	search rights at the Organization level.
	
	WORKAROUND
	==========
	
	To work around this problem, remove Address Book views from the Exchange
	Organization, or enable a valid anonymous account in the DS Site Configuration
	object. This would normally be the IUSR account created by the Microsoft
	Internet Information Service (IIS). Verify that the password set in the DS Site
	Configuration object matches the password for this account in User Manager. This
	allows the user to log on correctly and see the Address Book view that he or she
	belongs to. If the passwords do not match, the above listed errors may occur.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
