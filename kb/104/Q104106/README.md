---
layout: page
title: "Q104106: PC Win: GP Fault During Setup When Installing Only Spelling"
permalink: /kb/104/Q104106/
---

## Q104106: PC Win: GP Fault During Setup When Installing Only Spelling

	Article: Q104106
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you specify the Custom Install option during the Setup process of version 3.0
	or 3.0b of Microsoft Mail for Windows, and you choose to install only the
	spelling drivers, the following error occurs:
	
	  Could not open the file named: C:\WINDOWS\SYSTEM\TRNSCHED.DLL
	
	  Choose Abort and click Yes to exit. Re-run SETUP.EXE.
	
	  Result: GP Fault in MSCOMSTF.DLL @002D:001A.
	
	CAUSE
	=====
	
	This error occurs only if your current transport is not the PC Mail Transport;
	for example, if you are running Microsoft Mail Remote for Windows or if you do
	not have an existing installation of Mail.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.0b of
	Microsoft Mail for Windows. This problem was corrected in version 3.2 of
	Microsoft Mail for Windows.
	
	
	Additional query words: 3.00 3.00b general protection fault gpfault gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
