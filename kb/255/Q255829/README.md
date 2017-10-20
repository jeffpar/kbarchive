---
layout: page
title: "Q255829: PRB: PDW Includes Comsvcs.dll File with COM+ Applications"
permalink: /kb/255/Q255829/
---

## Q255829: PRB: PDW Includes Comsvcs.dll File with COM+ Applications

{% raw %}

	Article: Q255829
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbCOMPlus kbDeployment kbOSWin2000 kbVBp500 kbVBp600 kbPackage kbGrpDSVB kbDSu
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When distributing a Visual Basic application from a Windows 2000 system that
	references the COM+ Services Type Library, the Package and Deployment Wizard
	(PDW) includes the Comsvcs.dll file in the distribution package.
	
	CAUSE
	=====
	
	The Visual Basic 6.0 Package and Deployment Wizard and the Visual Basic 5.0
	Application Setup Wizard normally include all files that are referenced by the
	project being packaged and do not include any special handling code for the
	Comsvcs.dll file.
	
	RESOLUTION
	==========
	
	When you are creating the Visual Basic application package for distribution,
	deselect the Comsvcs.dll file from the files list when you are stepping into the
	Included Files dialog box of the Package portion of the Package and Deployment
	Wizard.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Comsvcs.dll file is a non-redistributable system file that already exists on
	target Windows 2000 systems.
	
	REFERENCES
	==========
	
	For a list of files that can be distributed with your applications, please check
	the Redist.txt file shipped with Visual Basic and Microsoft Visual Studio.
	
	Additional query words: COM Comsvcs Redist
	
	======================================================================
	Keywords          : kbwizard kbCOMPlus kbDeployment kbOSWin2000 kbVBp500 kbVBp600 kbPackage kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
