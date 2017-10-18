---
layout: page
title: "Q239039: CPU Usage Is Set to an Incorrect Value Using HTMLA"
permalink: kb/239/Q239039/
---

## Q239039: CPU Usage Is Set to an Incorrect Value Using HTMLA

	Article: Q239039
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
	
	Using the HTML Web Administration forms that ship with Internet Information
	Services (IIS) 5.0, you can set an incorrect value for CPU throttling. This
	should not cause problems; however, you should be sure the values are correct
	when you use this method. For example, if you set the value for "Percent CPU
	Usage" to 800 percent, the value is accepted and written to the IIS metabase.
	Note that this value leaves the site unrestricted (by default).
	
	CAUSE
	=====
	
	The HTML Web Administration forms do not properly check the values entered in
	the form.
	
	WORKAROUND
	==========
	
	Make sure the values are correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: iis HTMLA CPU Throttling
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
