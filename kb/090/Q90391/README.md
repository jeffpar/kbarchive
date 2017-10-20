---
layout: page
title: "Q90391: Cannot Redirect LPT4 or Greater with Basic Redirector, Novell"
permalink: /kb/090/Q90391/
---

## Q90391: Cannot Redirect LPT4 or Greater with Basic Redirector, Novell

{% raw %}

	Article: Q90391
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the NetBEUI and Novell NetWare protocols are loaded, and you run the basic
	redirector, you get the following error if you attempt to redirect any port
	greater than LPT3.
	
	  Error 11: An attempt was made to load a program with an incorrect format.
	
	When the full redirector is running, you can redirect up to LPT9.
	
	WORKAROUND
	==========
	
	To work around this problem on a 386 machine or above, unload the basic
	redirector and load the full redirector.
	
	There is no workaround to this problem on a 286 machine. You must use LPT1, LPT2,
	or LPT3.
	
	
	The NetWare product included here is manufactured by Novell, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	KBCategory: kbnetwork kb3rdparty kbprb
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 3rdparty net ware
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
