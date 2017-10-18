---
layout: page
title: "Q285286: Cannot Access IIS Metabase Through IIS Admin Objects"
permalink: kb/285/Q285286/
---

## Q285286: Cannot Access IIS Metabase Through IIS Admin Objects

	Article: Q285286
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access the Internet Information Services (IIS) metabase through
	the IIS Admin objects programatically in an ASP page, IIS returns the following
	error message to the client browser:
	
	  Microsoft VBScript runtime error '800a0046'
	  Permission denied: 'GetObject'
	  /filename.asp, line xxx
	
	CAUSE
	=====
	
	For security reasons, access to the metabase (and subsequently the IIS Admin
	Objects) is restricted to members of the local Administrators group.
	
	WORKAROUND
	==========
	
	Use an authentication technique such as basic, digest, Windows, or certificate
	mapping, and make sure that the account in question has access to the metabase
	(that is, the account is a member of the local Administrators group).
	
	Under no circumstances should you add any user account to the local
	Administrator's group in an attempt to work around this issue. Doing so leads to
	major security vulnerabilities.
	
	Additional query words: iis 5 metabase admin administer 4
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
