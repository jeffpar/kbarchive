---
layout: page
title: "Q110094: PC Forms: Errors When Opening E-Forms Under Windows NT"
permalink: /kb/110/Q110094/
---

## Q110094: PC Forms: Errors When Opening E-Forms Under Windows NT

	Article: Q110094
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose an E-form that was created using version 1.0 of the Microsoft
	Electronic Forms Designer from the Browser application, you may receive one of
	the following error messages:
	
	  Another machine is already signed in with the username you have entered. Sign
	  out from the other machine and try again.
	
	  -or-
	
	  MAPI_FAILURE
	
	CAUSE
	=====
	
	The above errors may appear if you open the custom form from version 3.0 or 3.2
	of the 16-bit Microsoft Mail for Windows client running under the Microsoft
	Windows NT operating system. If the 16-bit MAPI.DLL file is not located in the
	WINNT\SYSTEM32 directory, the search path will find the 32-bit MAPI.DLL file in
	that directory and will attempt to open a second MAPI session.
	
	RESOLUTION
	==========
	
	To resolve this problem, copy the MAPI.DLL file from the WINNT\SYSTEM directory
	to the WINNT\SYSTEM32 directory. When an E-form is launched, it will find the
	16-bit version of MAPI.DLL, which is the one that is used by the 16-bit Mail
	client.
	
	Additional query words: 1.00 eform
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
