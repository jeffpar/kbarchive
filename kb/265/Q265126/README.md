---
layout: page
title: "Q265126: HOWTO: Print Contents of the Web Browser Control from VFP"
permalink: /kb/265/Q265126/
---

## Q265126: HOWTO: Print Contents of the Web Browser Control from VFP

	Article: Q265126
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 27-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Web Browser control does not offer a Print method. This article
	demonstrates how to print the contents of the control from Microsoft Visual
	FoxPro.
	
	MORE INFORMATION
	================
	
	Step-by-Step Instructions
	-------------------------
	
	1. Create a new form, named frmWeb in Visual FoxPro.
	
	2. Add a command button, named cmdPrint, and an OLEControl, named oleWeb to the
	  frmWeb form.
	
	3. Set the OLEControl to use the Microsoft Web Browser control.
	
	4. Add the following code to the frmWeb.Init method:
	
	  ThisForm.oleWeb.Navigate("http://msdn.microsoft.com/vfoxpro/")
	
	5. Add the following code to the oleWeb.Refresh method:
	
	  NODEFAULT   && Avoids "Unspecified error" on form startup
	
	6. Add the following code to the cmdPrint.Click method:
	
	  #DEFINE OLECMDID_PRINT 6
	  #DEFINE OLECMDEXECOPT_PROMPTUSER 1
	  #DEFINE OLECMDEXECOPT_DONTPROMPTUSER 2
	  ThisForm.oleWeb.ExecWB(OLECMDID_PRINT, OLECMDEXECOPT_DONTPROMPTUSER, 0, 0)
	
	7. Run the form.
	
	After the page loads, click the cmdPrint button, and the page prints to the
	default printer.
	
	REFERENCES
	==========
	
	For additional information about printing with the Microsoft Web Browser
	control, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q188271 HOWTO: Print Contents of the Web Browser Control From VB
	
	For more information about the Web Browser control, refer to the following:
	
	  MSDN Library, topic: "InternetExplorer object"
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Garrett Fitzgerald, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
