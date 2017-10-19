---
layout: page
title: "Q268087: User Cannot Log on From Web Client"
permalink: /kb/268/Q268087/
---

## Q268087: User Cannot Log on From Web Client

	Article: Q268087
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to a Microsoft Metadirectory Services-based server by
	using a Web browser such as Microsoft Internet Explorer 5, you are prompted to
	provide your network credentials in the Enter Network Password dialog box. After
	you type your user name (logon ID) and password and click OK, this process may
	repeat twice, and you may then receive a blank page in the Web browser.
	
	CAUSE
	=====
	
	This issue can occur for any of the following reasons:
	
	- Your password has not been previously set in the metaverse by the
	  administrator.
	
	- Your password has been incorrectly set.
	
	- You have typed an incorrect user name or password.
	
	NOTE: If your password has not been set, any password that you enter is
	considered to be invalid.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that you are typing the correct user name and
	password. If this does not resolve the issue, contact the administrator to
	verify your user name or password in the metaverse.
	
	MORE INFORMATION
	================
	
	You can set a user's logon ID in the E-mail box on the General tab of the user's
	properties. You can set a user's password on the Identity tab of the user's
	properties page.
	
	A user's password must be manually set in the metaverse by the administrator
	because Microsoft Metadirectory Services (MMS) cannot discover passwords from a
	connected directory and import them into the metaverse.
	
	Additional query words: via zoomit
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
