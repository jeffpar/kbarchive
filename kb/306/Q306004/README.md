---
layout: page
title: "Q306004: get_Option(&quot;iMode&quot;) Returns an Empty Variant"
permalink: kb/306/Q306004/
---

## Q306004: get_Option(&quot;iMode&quot;) Returns an Empty Variant

	Article: Q306004
	Product(s): Microsoft Developer Network
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a new instance of Passport Manager is created and initialized,
	m_iModeOption is equal to VT_EMPTY.
	
	CAUSE
	=====
	
	iMode is set to FALSE by default. As a result, when get_Option("iMode") is
	called, an empty variant is returned.
	
	RESOLUTION
	==========
	
	To resolve this issue, participating sites that implement Mobile Passport for
	iMode browsers must issue the following command before AuthURL or LogoTag2 are
	called:
	
	  PPM.Option("iMode") = TRUE;
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	get_Option is a generic application programming interface (API). Before the
	option is set, you do not have it and the VT_EMPTY return variant is expected.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport200 kbPassportSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
