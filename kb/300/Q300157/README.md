---
layout: page
title: "Q300157: One Customer's Profile Apparently Viewable by Another Customer"
permalink: kb/300/Q300157/
---

## Q300157: One Customer's Profile Apparently Viewable by Another Customer

	Article: Q300157
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible for one customer's profile data to be viewed by another customer.
	
	CAUSE
	=====
	
	This is usually the result of an improperly configured proxy server and is not a
	Passport problem. This may occur if two users within the same proxy view pages
	that contain Passport or other private data without the server properly causing
	the content to expire or qualifying the Cache-control or Pragma: no-cache
	directives that are sent to a proxy server in the header. For more details and
	ways to fix this problem, see the following Passport Software Development Kit
	(SDK) Web site:
	
	  Caching and Personal Data
	  http://www.passport.com/sdkdocuments/sdk14/Implementation/caching.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	
