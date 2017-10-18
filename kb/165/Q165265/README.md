---
layout: page
title: "Q165265: XCLN: Run-Time 53 Error When You Start Forms Designer"
permalink: kb/165/Q165265/
---

## Q165265: XCLN: Run-Time 53 Error When You Start Forms Designer

	Article: Q165265
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0;Win95:4.0,5.0;WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Electronic Forms Designer, the following
	error message appears:
	
	  Runtime error 53: File Threed.vbx not found
	
	CAUSE
	=====
	
	The file Threed.vbx is missing or incorrectly located.
	
	NOTE: This error may be caused by removing the Seven Habits Tools, which include
	the VB runtime shared component Threed.vbx.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Copy the file Threed.vbx from another computer to the local Windows/System
	  directory,
	
	  -OR-
	
	- Fully remove and reinstall Electronic Forms Designer.
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : winnt:4.0,5.0;Win95:4.0,5.0;WINDOWS:4.0,5.0
	
	=============================================================================
	
