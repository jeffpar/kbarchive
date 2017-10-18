---
layout: page
title: "Q239048: Access Denied When Sending a Request to an Enterprise CA"
permalink: kb/239/Q239048/
---

## Q239048: Access Denied When Sending a Request to an Enterprise CA

	Article: Q239048
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new server certificate for use in Internet Information
	Services (IIS) 5.0 using the Web Site Certificate Wizard, you may receive an
	Access Denied error message when sending the request.
	
	This only happens when you request a certificate from an Enterprise Certificate
	Authority (CA).
	
	CAUSE
	=====
	
	This is typically caused by the Certificate Server service not being started on
	the computer you are sending the request to.
	
	RESOLUTION
	==========
	
	Make sure that the Certificate Server service is running on the computer that
	you are sending the request to.
	
	STATUS
	======
	
	This is a known issue with the Web Site Certificate Wizard and Microsoft
	Certificate Services (Enterprise CA).
	
	Additional query words: iis CA access denied
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
