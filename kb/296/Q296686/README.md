---
layout: page
title: "Q296686: IIS May Not Send an Entire Redirect Message Using an ISAPI Exten"
permalink: kb/296/Q296686/
---

## Q296686: IIS May Not Send an Entire Redirect Message Using an ISAPI Exten

	Article: Q296686
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a long URL in an ISAPI extension is redirected, IIS may not send an entire
	redirect message.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows 2000 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version       Size    File name
	  -------------------------------------------------
	  11-MAY-2001 18:12 5.0.2195.3584 357,648 W3svc.dll
	                               
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0.
	
	Additional query words: redirect iis hang
	
	======================================================================
	Keywords          :  
	Component         : InternetServices
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
