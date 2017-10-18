---
layout: page
title: "Q259506: XWEB: Error Message Occurs When Outlook Web Access Is Installed"
permalink: kb/259/Q259506/
---

## Q259506: XWEB: Error Message Occurs When Outlook Web Access Is Installed

	Article: Q259506
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Outlook Web Access on a computer that is running Windows 2000
	Server, you may receive the following message:
	
	  Setup has detected that you are not running a set of
	  Windows NT related fixes required for Outlook Web Access.
	  Please see the Release Notes for further instructions.
	
	  Microsoft Exchange Server Setup
	  ID no: c1037997
	
	CAUSE
	=====
	
	This behavior can occur if Outlook Web Access was installed from the Microsoft
	Select November 1997 Exchange Server 5.5 CD-ROM.
	
	RESOLUTION
	==========
	
	To resolve this issue, either install the retail version of Outlook Web Access
	or install the program from the Microsoft Developer Network (MSDN) CD-ROM.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Copy the \i386 directory to a folder on the hard drive.
	
	2. Rename Srvrmax.exe or Srvrmin.exe to Setup.exe.
	
	3. Run Setup.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch
	Version           : WINDOWS:2000,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
