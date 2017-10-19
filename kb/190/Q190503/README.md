---
layout: page
title: "Q190503: PRB: Multi-Disk Package Too Large for Targeted Disk Size"
permalink: /kb/190/Q190503/
---

## Q190503: PRB: Multi-Disk Package Too Large for Targeted Disk Size

	Article: Q190503
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When deploying a multi-disk package with the Package and Deployment Wizard
	(PDW), the following error message is received:
	
	  Error: "Drive A:\ is too small for this package."
	
	CAUSE
	=====
	
	The package created is too large for the designated disk size (1.44MB, etc.).
	This is caused by modifying the Setup.lst file after the PDW has created the
	distribution set. If additional information is added to the Setup.lst file, then
	it is possible that the sum of the sizes for Setup.lst, Setup.exe, and the first
	.CAB file will exceed the capacity of the diskette.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	There are two ways to work around this behavior:
	
	- There are extra lines near the bottom of Setup.lst that look like the
	  following:
	
	        ; The following lines may be deleted in order to obtain extra
	        ; space for customizing this file on a full installation diskette.
	        ;
	        ; XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	        ; XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	
	  Remove as many lines beginning with "; XXX" as necessary to compensate for the
	  file size of Setup.lst.
	
	-or-
	
	- The PDW creates a .bat file for each distribution set, it places this file in
	  a "Support" folder with the remainder of the distribution set. Run the .bat
	  file after modifications to the Setup.lst file have been made, the CAB files
	  will be re-constructed to compensate for any file size differences.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
