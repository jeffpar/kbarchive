---
layout: page
title: "Q165683: INFO: Visual C++ 5.0 Readme, ActiveX Control Issues"
permalink: kb/165/Q165683/
---

## Q165683: INFO: Visual C++ 5.0 Readme, ActiveX Control Issues

	Article: Q165683
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ActiveX Control Issues
	----------------------
	
	Visual C++ Support for Authenticode Some ActiveX Controls Created with Visual
	Basic Generate Error in ActiveX Test Container on Resize Oracle Joins and
	MSRDC20.OCX (Remote Data Control V2) Current, Localized ActiveX Redistributable
	Components
	
	MORE INFORMATION
	================
	
	Visual C++ Support for Authenticode
	-----------------------------------
	
	To find the tools necessary for packaging your ATL and MFC controls into cabinet
	(.cab) files and signing the resulting .cab files, look in the CAB&Sign
	directory. This directory is on the disc that includes "Microsoft Visual C++" on
	the label. (Disc 1 if you purchased Visual C++; Disc 3 if you purchased Visual
	Studio.)
	
	Some ActiveX Controls Created with Visual Basic Generate Error in ActiveX
	
	Test Container on Resize
	------------------------
	
	Microsoft Visual Basic 5.0 supports the creation of ActiveX Controls (OCX's).
	Some controls that are created with Visual Basic set the OLEMISC_NOUIACTIVATE
	bit. If the control is inserted into the ActiveX Test Container and then is
	resized, the ActiveX Test Container attempts a DoVerb (OLEIVERB_UIACTIVATE) call
	that results in the following error:
	
	  Failed to connect. Link may be broken.
	
	This problem is being investigated. This does not impede hosting the control in
	Visual C++.
	
	Oracle Joins and MSRDC20.OCX (Remote Data Control V2)
	-----------------------------------------------------
	
	If you use the Microsoft ODBC Driver for Oracle with the Microsoft Remote Data
	Control (MRDC20.OCX) and your SQL statement contains a join (or includes a
	reference to a view that contains a join), you may encounter the following
	driver error: "SC100: [Microsoft][ODBC Driver for Oracle]Driver not capable"
	
	Workaround
	
	Change the CursorDriver, LockType, and ResultsetType properties. The following
	settings will work:
	
	     CursorDriver = 'ODBC Cursor'
	
	     LockType = ' Optimistic Concurrency'
	
	     ResultsetType = 'Create a Static Cursor'
	
	Current, Localized ActiveX Redistributable Components
	-----------------------------------------------------
	
	The ActiveX redistributable components that ship with Visual C++ 5.0 were current
	when the product was released to manufacturing. You can always check the
	following Web site for the most current components:
	
	  http://www.microsoft.com/workshop/default.asp
	
	NOTE: If your Internet application will be used in an Internet Explorer localized
	environment, your application should use the localized ActiveX components that
	are available from this site, otherwise the components contained on this CD may
	overwrite Internet
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	
	=============================================================================
	
