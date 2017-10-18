---
layout: page
title: "Q85579: Pen Err Msg: Cannot Load Dictionary XXX.DLL..."
permalink: kb/085/Q85579/
---

## Q85579: Pen Err Msg: Cannot Load Dictionary XXX.DLL...

	Article: Q85579
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When starting Microsoft Windows for Pen Computing, you may receive the following
	error message:
	
	  Cannot load dictionary C:\Windows\xxxxxxx.DLL
	
	Verify that the dictionary .DLL file specified in the PENWIN.INI sections below
	contains the correct path and filename. By default Windows for Pen Computing
	will place the MAINDICT.DLL in the WINDOWS\SYSTEM directory. A full and complete
	path must be specified if this file or any custom .DLL is not in the
	WINDOWS\SYSTEM directory.
	
	MORE INFORMATION
	================
	
	The dictionary .DLL module provides post processing on a recognition result. The
	RC_Result is checked against a set of words in an .LEX file. Multiple dictionary
	.DLLs may be used. Each user may have a unique set of dictionaries. The
	PENWIN.INI contains four sections that reference which dictionary is to be
	used.
	
	The following section contains a list of all dictionaries available on the
	system. Each entry specifies the path and filename of a .DLL. Note: Nothing
	should follow the equal sign.
	
	     [Dictionary List]
	     C:\Windows\MAINDICT.DLL=
	
	The following section contains a list of dictionaries to be used by USER X. There
	will be a section for each user found in the [User List]. Each entry specifies
	the users ID number as well as the path and filename of a .DLL.
	
	     [*User 1.Dictionary List]
	     0=C:\Windows\MAINDICT.DLL
	
	The following section contains the name of the MAIN and OTHER dictionaries. The
	.DLL listed in [User 1.Dictionary List] searches for the keyword xxxMAIN= and
	loads the file specified. Note: This line loads the default English American
	lexicon provided with Microsoft applications.
	
	     [MsMainDict]
	     enuMAIN=C:\Windows\Msapps\Proof\MSSP_AM.LEX
	
	The following section contains user-specific word lists that the Microsoft User
	Dictionary .DLL will search in addition to the default xxxMAIN listed above.
	Note: This line loads the custom dictionary created by the Microsoft Word for
	Windows spell checker.
	
	     [MsUserDict]
	     C:\Windows\Msapps\Proof\CUSTOM.DIC
	
	For additional information about the PENWIN.INI file, query on:
	
	  PENWIN and WIN31
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100 kbWinPen100a
	Version           : :1.0,1.0a
	
	=============================================================================
	
