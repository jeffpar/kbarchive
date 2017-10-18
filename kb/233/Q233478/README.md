---
layout: page
title: "Q233478: FIX: VB6 Version of RDO Cannot Access Oracle Packages"
permalink: kb/233/Q233478/
---

## Q233478: FIX: VB6 Version of RDO Cannot Access Oracle Packages

	Article: Q233478
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbRDO kbVS600sp2 kbVS600sp3fix kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message will display using Visual Basic 6 and RDO 2.0:
	
	  "Object collection: couldn't find item indicated by text"
	
	This will occur if you are using the RDO 2.0 version that shipped with Visual
	Basic 6.0, and using the Microsoft Oracle ODBC Driver to pass Input or Output
	parameters to a stored procedure within an Oracle package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	MORE INFORMATION
	================
	
	After installing Visual Studio 6.0 SP3, the VB6 About screen should display
	"Microsoft Visual Studio 6.0 (SP3)" clearly. Previous Visual Basic 6 service
	pack installations didn't display service pack versions in the About Screen. The
	only way to tell if a service pack is installed was by checking some file
	versions as described in the following article:
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed.
	
	For more information on the bug, please refer to article:
	
	  Q193872 BUG: VB6 Version of RDO Cannot Access Oracle Packages
	
	For a complete sample code on how to use RDO with Oracle packages, please see
	article:
	
	  Q174981 HOWTO: Retrieve Typical Resultsets From Oracle Stored Procedures
	
	Additional query words: kbDSupport kbdse kbVBp kbVBp600 kbRDO200bug
	
	======================================================================
	Keywords          : kbservicepack kbRDO kbVS600sp2 kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
