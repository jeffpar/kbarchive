---
layout: page
title: "Q239042: Invalid IP Address Entered Using HTML Web Administration Forms"
permalink: /kb/239/Q239042/
---

## Q239042: Invalid IP Address Entered Using HTML Web Administration Forms

	Article: Q239042
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up or edit a Web site using the HTML Web Administration Forms that
	come with Internet Information Services 5.0, an incorrect IP address may be
	entered for the Web site's binding.
	
	For example, if you are editing the properties of a Web site (or creating a new
	one) and you set the IP address, you may enter a value like "1.1..1.1," which is
	saved to the metabase. Note that you cannot enter an incorrect value in the
	Internet Services Manager.
	
	CAUSE
	=====
	
	This is due to a lack of validation in this Web form.
	
	RESOLUTION
	==========
	
	To avoid this situation, always double-check the values you enter into this
	field.
	
	STATUS
	======
	
	This is a known issue in the HTML Web Administration Forms that ship with
	Internet Information Services 5.0.
	
	Additional query words: iis HTMLA IP
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
