---
layout: page
title: "Q129426: RAS Error 652 Using MultiTech MT2834 Modem"
permalink: /kb/129/Q129426/
---

## Q129426: RAS Error 652 Using MultiTech MT2834 Modem

{% raw %}

	Article: Q129426
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following error messages appears when you use a MultiTech MT2834
	modem with the Windows for Workgroups 3.11 Remote Access Service (RAS)
	software:
	
	  Error 652 Unrecognized Text Response: <h86><h9E>]<h86>
	
	  -or-
	
	  Error 652 Unrecognized Text Response:
	  <h1C><h00><h00><h00><h00>...
	
	NOTE: You may see a different response string other than the two noted above.
	
	This error message appears if you have enabled callback for the account used to
	dial-in to the RAS server. If you connect to the RAS server without callback
	enabled, no error messages appear.
	
	Increasing the CALLBACKTIME parameter in MODEM.INF does not solve the problem.
	
	WORKAROUND
	==========
	
	To work around this problem, do not enable callback for your RAS account if you
	are using a MultiTech MT2834 modem. If you need to have callback enabled, use a
	different modem, or use Windows NT 3.5 RAS as your RAS client software.
	
	Additional query words: 3.11 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
