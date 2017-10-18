---
layout: page
title: "Q176588: XWEB: Content Advisor Error Occurs When Opening OWA Logon Page"
permalink: kb/176/Q176588/
---

## Q176588: XWEB: Content Advisor Error Occurs When Opening OWA Logon Page

	Article: Q176588
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to use Microsoft Outlook Web Access (OWA) with Microsoft
	Internet Explorer (IE) version 3.x or 4.x with Content Advisor ratings enabled,
	the Logon page may not be accessed. The following error message may be
	displayed:
	
	  Sorry! Content Advisor will not allow you to see this site.
	
	  This page may contain some or all of the following:
	
	  This page does not have a rating.
	
	  If you still want to see this site, someone must type in the
	  supervisor password.
	
	CAUSE
	=====
	
	Content Advisor in Internet Explorer is intended to prevent viewing of unrated
	sites with offensive content. Since the OWA logon page is unrated, IE stops
	viewing of the page and presents the above dialog.
	
	WORKAROUND
	==========
	
	To allow access to the OWA logon page, perform the following steps:
	
	1. In IE 3.0x, open the View menu, click Options, and then click Security. In IE
	  4.0, open the View menu, click Internet Options, and then click Content.
	
	2. Select Disable Ratings and type in the password. Alternatively, you can
	  select Settings, then select the General tab and enable the following
	  option:
	
	  Users can see sites which have no rating
	
	Additional query words: secure parental controls
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : 5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
