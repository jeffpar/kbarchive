---
layout: page
title: "Q128187: Err Msg: Error 171 Could Not Access Schedule Information"
permalink: kb/128/Q128187/
---

## Q128187: Err Msg: Error 171 Could Not Access Schedule Information

	Article: Q128187
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message while you are running Microsoft
	Exchange:
	
	  Error 171 could not access schedule information
	
	CAUSE
	=====
	
	This error can occur if a virus-checking program is run on the postoffice and is
	protecting the MAILDATA share. The virus-checking program can prevent the MS-DOS
	ADMIN program from manipulating the message files it needs.
	
	RESOLUTION
	==========
	
	Disable the network virus-checking program, or set it to not protect the
	MAILDATA share.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
