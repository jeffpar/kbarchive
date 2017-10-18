---
layout: page
title: "Q192136: PRB: PDW Does Not Include MSAddndr.DLL for Add-in Projects"
permalink: kb/192/Q192136/
---

## Q192136: PRB: PDW Does Not Include MSAddndr.DLL for Add-in Projects

	Article: Q192136
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0; :
	Operating System(s): 
	Keyword(s): kbwizard kbAddIn kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installing an Add-in Project via a Package and Deployment Wizard (PDW)
	distribution package (Setup.Exe) causes the following error:
	
	  Your Add-in (<NameOfYourAddin>.DLL) could not be registered
	
	A similar error message occurs if you uninstall the Add-in via Add/Remove
	Programs in Control Panel. During the uninstall process, the following error
	occurs:
	
	  Your Add-in (<NameOfYourAddin>.DLL) could not be unregistered
	
	CAUSE
	=====
	
	If you build an Add-in Project and use the Package and Deployment Wizard to
	create a distribution set, the Package and Deployment Wizard does not
	automatically include the Add-in run-time file, MSAddndr.DLL, in the
	distribution set.
	
	RESOLUTION
	==========
	
	For most cases, the distribution set for an Add-in Project does not need to
	include the Add-in run-time MSAddndr.DLL because Visual Basic installs the
	Add-in run-time during its setup. Because Visual Basic is needed to run a Visual
	Basic Add-in, it is only necessary to include MSAddndr.DLL in the distribution
	set if the end-user of the Add-in is likely to not have Visual Basic already
	installed.
	
	To include the Add-in run-time MSAddndr.DLL to a Package and Deployment Wizard
	distribution set, add the file in the list of Included Files.
	
	Step-by-Step Example
	--------------------
	
	1. Open an existing Visual Basic project for which a Distribution set is to be
	  created.
	
	2. From the Add-In menu, select Package and Deployment Wizard. (If Package and
	  Deployment Wizard is not listed, the Package and Deployment Wizard Add-In
	  will need to be loaded first. To load the Add-In, choose Add-In Manager from
	  the Add-In menu. In the Add-In Manager dialog box, select Package and
	  Deployment Wizard, and then select the Loaded/Unloaded check box.)
	
	3. Click on the Package button.
	
	4. Choose the appropriate Packaging Script, and click Next.
	
	5. Choose the appropriate Package type, and click Next.
	
	6. Choose the appropriate Package Folder, and click Next.
	
	7. Add "MSAddndr.DLL" (without the quotation marks) to the list of Included
	  files by clicking Add and selecting MSAddndr.DLL. Assuming Visual Basic is
	  installed onto the C: Drive, MSAddndr.DLL can be found in the C:\Program
	  Files\Common Files\Designer folder.
	
	Additional query words: map point com office
	
	======================================================================
	Keywords          : kbwizard kbAddIn kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0; :
	Issue type        : kbprb
	
	=============================================================================
	
