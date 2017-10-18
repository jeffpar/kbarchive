---
layout: page
title: "Q220954: Event ID:20073 Attempting RADIUS Authentication on RRAS Server"
permalink: kb/220/Q220954/
---

## Q220954: Event ID:20073 Attempting RADIUS Authentication on RRAS Server

	Article: Q220954
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, used with:
	   - Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you dial into a computer running Windows NT Server and Routing and Remote
	Access Service (RRAS), the following error message may be displayed on your RAS
	client computer:
	
	  Error 629: You have been disconnected from the computer you dialed.
	
	Additionally, the following error is logged in the Event Viewer of the Windows NT
	4.0 RRAS server (after every attempted incoming call):
	
	  Event ID: 20073
	  Source: Router
	  Type: Error
	  Description: The following error occurred in the Point to Point Protocol
	  module on port %port%. There are no authentication protocols available for
	  use.
	
	Incoming calls to the Windows NT RRAS server are not able to connect.
	
	CAUSE
	=====
	
	This problem occurs because your Windows NT RRAS server's authentication and
	encryption settings are set to require Microsoft encrypted authentication and
	you are using Remote Authentication Dial-In User Service (RADIUS) as your
	authentication provider.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following:
	
	- Set Authentication and Encryption settings to Require encrypted
	  authentication or Allow any authentication including clear text.
	
	  -or-
	
	- Leave Authentication and Encryption settings set to Require Microsoft
	  encrypted authentication and set OfferMSCHAP to 1 in the registry. For
	  additional information, click the article number below to view the article in
	  the Microsoft Knowledge Base:
	
	  Q219283 How to enable MS-CHAP with Radius authentication
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server
	version 4.0 with Routing and Remote Access Update.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : :4.0,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
