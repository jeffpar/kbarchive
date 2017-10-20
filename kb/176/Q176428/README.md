---
layout: page
title: "Q176428: PRB: MSRDO20.OCX Not Registered When Running Application Setup"
permalink: /kb/176/Q176428/
---

## Q176428: PRB: MSRDO20.OCX Not Registered When Running Application Setup

{% raw %}

	Article: Q176428
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running an application that uses Remote Data Objects (RDO) the following
	errors may occur:
	
	  "MSRDO20.OCX Not registered."
	
	  No errors were encountered when installing the application.
	
	  -or-
	
	  An error occurred while registering the file MSRDO20.DLL MSRDC20.OCX
	
	CAUSE
	=====
	
	In order for RDO to be properly registered, ODBC must be installed prior to
	installing the Visual Basic application.
	
	RESOLUTION
	==========
	
	Install ODBC prior to installing the Visual Basic application that uses RDO. On
	the Visual Basic Product CD-ROM in the \ODBC directory is an application that
	will install ODBC. For Visual Studio, Disk One \VB\ODBC is the location. The
	ODBC installation program and it components are re-distributable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	This problem also occurs in Visual Basic 4.0 when using MSRDO32.DLL. ODBC must
	be installed first.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an application that includes MSRDO20.
	
	2. Run the application Setup Wizard to produce setup images.
	
	3. Install the application on a computer that does not have ODBC installed.
	
	4. Run the application.
	
	REFERENCES
	==========
	
	For Visual Basic 5.0, the "Programmer's Guide", Chapter 17 "Distributing
	Applications" pages 799-800.
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
