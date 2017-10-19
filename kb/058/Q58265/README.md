---
layout: page
title: "Q58265: Windows 3.0 Standard/386 Enhanced Fatal Error Definition"
permalink: /kb/058/Q58265/
---

## Q58265: Windows 3.0 Standard/386 Enhanced Fatal Error Definition

	Article: Q58265
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article explains the difference between the following two Microsoft Windows
	version 3.0 standard/enhanced mode fatal application errors:
	
	  Unrecoverable Application Error
	
	-and-
	
	  This application has violated system integrity
	
	MORE INFORMATION
	================
	
	These are two entirely different errors. Be sure to specify the exact error when
	dealing with problems under Windows 3.0.
	
	"Unrecoverable Application Error" means that a Windows application (not an MS-DOS
	application) has caused a fatal problem in protected mode (usually a general
	protection violation), causing the application to be terminated.
	
	"This application has violated system integrity" indicates that an MS-DOS
	application (not a Windows application) has caused a fatal problem while being
	run under Windows, causing the application to be terminated. This is also
	usually a general protection violation, but it can be any unpreventable memory
	overwrite problem.
	
	Additional query words: gpf UAE 3.00a err msg 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
