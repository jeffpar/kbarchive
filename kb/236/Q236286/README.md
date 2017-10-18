---
layout: page
title: "Q236286: PRB: Out of Memory Error Message Using the Rich Textbox Control"
permalink: kb/236/Q236286/
---

## Q236286: PRB: Out of Memory Error Message Using the Rich Textbox Control

	Article: Q236286
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbfile kbDeployment kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 14-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running an application that uses the Microsoft Rich Textbox control, an Out
	of Memory error occurs. Another possible error is:
	
	  System Error &H80004005 (-2147467259). Unexpected Error
	
	CAUSE
	=====
	
	A version of the Riched32.dll file that is not redistributable is installed on
	the computer. Riched32.dll may not be distributed because it requires files that
	are only installed by Microsoft Exchange. Because the Riched32.dll file is a
	shared component, this problem may occur when you use an application that is
	installed correctly.
	
	RESOLUTION
	==========
	
	Microsoft has created an application that installs the correct version of the
	Riched32.dll file on the target system.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Richedfx.exe
	  (http://download.microsoft.com/download/vb60ent/Sample16/1/W9XNT4/EN-US/Richedfx.exe)
	
	Release Date: Aug-25-1999
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Download the richedfx.exe file and run the executable on the target system. The
	program verifies that the problem exists on the target system and allows you to
	confirm whether you want to replace the Riched32.dll file with the correct
	version.
	
	NOTE: This application requires that the Visual Basic 6.0 run-time file
	Msvbvm60.dll is installed on the target computer. Any Visual Basic application
	installs this file. The msvbvm60.dll file can also be downloaded from the
	following Microsoft Knowledge Base article:
	
	  Q290887 FILE: VBRun60sp5.exe Installs Visual Basic 6.0 SP5 Run-Time Files
	
	STATUS
	======
	
	This problem occurs when an application distributes the wrong version of the
	Riched32.dll file. Applications whose distributions are created using Microsoft
	tools such as the Setup Wizard or the Package and Deployment Wizard (PDW) do not
	cause this problem. Vendors of Visual Basic applications that choose to use
	third-party distribution tools should distribute a copy of the Riched32.dll file
	from the \VB98\Wizards\PDWizard\Redist directory.
	
	NOTE: Set up programs should not replace the version of Riched32.dll on systems
	running Microsoft Windows NT 4.0 or Windows 2000. See the Microsoft Knowledge
	Base article in the REFERENCES section of this article for more information.
	
	REFERENCES
	==========
	
	For specific details regarding this issue, see the following article in the
	Microsoft Knowledge Base:
	
	  Q197580 INFO: Distribution Issues with Riched32.dll
	
	Additional query words: richtx32.ocx
	
	======================================================================
	Keywords          : kberrmsg kbfile kbDeployment kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
