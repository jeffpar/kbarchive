---
layout: page
title: "Q108842: PC MAPI: Using Simple MAPI on Windows NT and NTAS"
permalink: kb/108/Q108842/
---

## Q108842: PC MAPI: Using Simple MAPI on Windows NT and NTAS

	Article: Q108842
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Simple Messaging Application Programming Interface (MAPI) can be used on
	Microsoft Windows NT and Microsoft Windows NT Advanced Server in the following
	configurations:
	
	CONFIGURATION 1
	---------------
	
	Simple MAPI applications written for 16-bit Windows and Windows for Workgroups
	Mail can be used with the 32-bit NT Mail client. There is a 16- bit MAPI.DLL
	that "thunks" the 16-bit calls to the 32-bit MAPI32.DLL and requires no
	additional 16-bit Mail files.
	
	Configuration 2:
	
	Windows NT includes MAPI32.DLL, a 32-bit Simple MAPI DLL for developing 32-bit
	applications for the 32-bit NT Mail client.
	
	Configuration 3:
	
	In order for 16-bit MAPI applications to work with 16-bit Microsoft Mail
	installed on Windows NT, you must copy the 16-bit MAPI.DLL that comes with
	versions 3.0, 3.0b, and 3.2 of Microsoft Mail into the WINNT\SYSTEM32 directory.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : :3.0,3.0b,3.2
	
	=============================================================================
	
