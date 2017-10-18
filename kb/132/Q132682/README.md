---
layout: page
title: "Q132682: PC Win: How to Hide the Microsoft Mail Spooler Icon"
permalink: kb/132/Q132682/
---

## Q132682: PC Win: How to Hide the Microsoft Mail Spooler Icon

	Article: Q132682
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail spooler icon is displayed on the desktop whenever a Messaging
	Application Program Interface (MAPI) application initiates a Mail session.
	Simple MAPI does not have a method to hide or remove this icon.
	
	MORE INFORMATION
	================
	
	However, you can hide the mail spooler icon by invoking Microsoft Windows
	Application Programming Interface (API) calls. The following Microsoft Visual
	Basic version 3.0 code fragment illustrates how these calls can be used to hide
	the Mail spooler after a successful Mail session has been established using
	MAPILogon:
	
	     ' Start routine to hide the mail spooler
	     Handle% = FindWindow(0&, "MS Mail Spooler (auto)")
	     If Handle% <> 0 Then
	        Status = ShowWindow(Handle%, SW_HIDE)
	     End If
	     ' End routine
	
	NOTE: On slower machines, the Mail spooler icon may flash when the above calls
	are implemented.
	
	REFERENCES
	==========
	
	- Microsoft Windows SDK "Programmer's Reference"
	
	Additional query words: 3.00 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail320a
	Version           : WINDOWS:3.0,3.2,3.2a
	
	=============================================================================
	
