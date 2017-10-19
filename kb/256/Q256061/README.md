---
layout: page
title: "Q256061: Cannot Log On Using SMTP Name After Running the Exchange MA"
permalink: /kb/256/Q256061/
---

## Q256061: Cannot Log On Using SMTP Name After Running the Exchange MA

	Article: Q256061
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to log on to Microsoft Metadirectory Services (MMS) from the
	Compass client by using your Simple Mail Transfer Protocol (SMTP) name. When you
	attempt to log on with your SMTP name, the following error message may be
	displayed:
	
	  Invalid name
	
	CAUSE
	=====
	
	Running the Exchange management agent (or any other management agent that has
	the ability to update user SMTP names) can cause your SMTP name to change. The
	server no longer recognizes your previous logon name.
	
	RESOLUTION
	==========
	
	Log on with Compass to MMS by using the new SMTP name (for example,
	<MyNewUsername>@<MyDomain>.com) or your distinguished name (for
	example, cn=<MyUsername>,ou=<MyOU>,dc=<MyDomain>,dc=com).
	
	For additional information about troubleshooting 'Invalid Name' error messages,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q251245 'Invalid Name' Error Message When Logging On to MMS with Compass
	
	Additional query words: MMS Zoomit VIA Metadirectory
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
