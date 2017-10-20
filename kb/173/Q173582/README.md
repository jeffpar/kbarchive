---
layout: page
title: "Q173582: HOWTO: Using OLE Automation to Display Outlook from VFP"
permalink: /kb/173/Q173582/
---

## Q173582: HOWTO: Using OLE Automation to Display Outlook from VFP

{% raw %}

	Article: Q173582
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,6.0,97,97sp1,97sp2
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp600
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may want to display Microsoft Outlook from Visual FoxPro to allow users to
	read or send messages or to open other folders in Outlook. This article
	demonstrates how to do this.
	
	MORE INFORMATION
	================
	
	The Outlook object provides the functionality to control data stored in the
	Outlook folders, but there is limited functionality to manipulate Outlook
	itself. Since you probably want to interact with the data stored in Outlook, you
	need to create a reference to the Messaging Application Programming Interface
	(MAPI) folders where Outlook stores all of its information. Do this by setting a
	variable to the "Namespace" object.
	
	The following code creates and displays an instance of Outlook. Visual FoxPro for
	Windows pauses execution as long as the user has the Outlook application on top
	using the GetActivewindow API function call. If the Visual FoxPro application
	window is brought on top, then the code forces Outlook to close:
	
	     oOutlookObj = CREATEOBJECT("Outlook.Application")
	     oNamespace = oOutlookObj.GetNamespace("MAPI")
	     oFolder = oNamespace.GetDefaultfolder(6)   && See below for other values
	     oFolder.Display
	
	     * Code to pause FoxPro while Outlook window is on top
	     IF NOT 'FOXTOOLS' $ SET('LIBRARY')
	        SET LIBRARY TO SYS(2004)+"FoxTools"
	     ENDIF
	     FoxWind = MAINHWND()
	     GetActive=RegFn('GetActiveWindow','','I') && Determine if FoxPro is
	                                               && on top
	     DO WHILE .T.    && Keep looping until the ActiveWindow = FoxWind
	        IF FoxWind = CallFn(GetActive)
	           EXIT
	        ENDIF
	     ENDDO
	     SET LIBRARY TO
	
	     oOutlookObj.Quit
	
	The GetDefaultfolder method has several values that open different folders in
	Outlook. The list below provides the default folder values.
	
	  Folder Name      Value
	  ----------------------
	  Deleted Items      3
	  Outbox             4
	  Sent Items         5
	  Inbox              6
	  Calendar           9
	  Contacts          10
	  Journal           11
	  Notes             12
	  Tasks             13
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Dean Christopher, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	Microsoft Outlook Visual Basic Help
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS:3.0,3.0b,6.0,97,97sp1,97sp2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
