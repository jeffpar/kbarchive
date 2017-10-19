---
layout: page
title: "Q174709: XWEB: Err Msg: Exchange Server Down or HTTP Service Disabled"
permalink: /kb/174/Q174709/
---

## Q174709: XWEB: Err Msg: Exchange Server Down or HTTP Service Disabled

	Article: Q174709
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to log on to a Microsoft Exchange Server computer using the
	Outlook Web Access client, the following error message may appear:
	
	  Sorry! The Exchange Server is down or the HTTP Service has been disabled by
	  an administrator.
	
	CAUSE
	=====
	
	The HTTP protocol may be disabled and/or Anonymous Access may be disabled in the
	LDAP protocol.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that HTTP and Anonymous Access are
	enabled.
	
	To ensure that HTTP is enabled:
	
	1. In the Exchange Server Administrator program, click the Configuration
	  container, click the Protocols object, and in the right pane, double-click
	  HTTP.
	
	2. Make sure the Enable Protocol object check box is selected.
	
	To ensure that Anonymous Access is not disabled in LDAP:
	
	1. In the Exchange Server Administrator program, click the Configuration
	  container, click the Protocols object, and in the right pane, double-click
	  LDAP.
	
	2. Click the Anonymous tab, and click to select the Enable Anonymous check box.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
