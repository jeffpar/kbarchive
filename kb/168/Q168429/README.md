---
layout: page
title: "Q168429: PRB: Component Download Fails for DCOM Projects"
permalink: kb/168/Q168429/
---

## Q168429: PRB: Component Download Fails for DCOM Projects

	Article: Q168429
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbDownload kbVBp500 kbCodeDownload kbFAQ kbDSupport kbieFAQ
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Component Download Fails for DCOM Projects when using Setup Wizard to create
	download files. If you have included a Remote Object in an ActiveX Document
	setup, you could see the following error on code download:
	
	  "Internet Explorer is opening file of unknown type:
	  <Name of Document>.VBD from"
	
	CAUSE
	=====
	
	The MySamp.cab download will not work if the Msracli.cab is located in a
	different folder than RemoteReg.cab.
	
	RESOLUTION
	==========
	
	MySamp should be the name of your project. The workaround for the download
	problem is below:
	
	1. Run the Setup Wizard from Visual Basic 5.0 and select "Add Remote." The Setup
	  Wizard will create the download files for your MySamp project.
	
	2. Make sure Msracli.cab is located in the same folder as RemoteReg.cab.
	  RemoteReg.cab is put in the download directory created by Setup Wizard.
	  Msracli.cab is shipped on the Visual Basic 5.0 CD-ROM and is located in
	  VB5/tools/cabinets/Msracli.cab.
	
	3. Modify the MySamp.inf file created by Setup Wizard:
	
	  Code in MySamp.inf:
	
	        [MSRACli.cab_Installer]
	        file-win32-x86=http://activex.microsoft.com/controls/vb5/MSRACli.cab
	        InfFile=MSRACli.inf
	
	  Replace with:
	
	        [MSRACli.cab_Installer]
	        file-win32-x86=MSRACli.cab
	        InfFile=MSRACli.inf
	
	4. Run Makecab.exe on MySamp.inf file. Makecab.exe is provided by Visual Basic
	  5.0 in the \vb5\setupkit\kitfil32\makecab.exe.
	
	5. Run the following line of code using the MySamp.ddf created by the Setup
	  Wizard:
	
	     makecab.exe /F MySamp.ddf
	
	6. This will create a MySamp.cab in the same directory as MySamp.ddf and
	  MySamp.inf. Copy MySamp.cab to the correct directory and your download should
	  work correctly.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For more information, see the following Webcast:
	
	  How Does Internet Component Download Work?
	
	======================================================================
	Keywords          : kbcode kberrmsg kbDownload kbVBp500 kbCodeDownload kbFAQ kbDSupport kbieFAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	
