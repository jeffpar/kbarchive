---
layout: page
title: "Q223087: FIX: Accelerator keys Not Handled in ActiveX Control"
permalink: /kb/223/Q223087/
---

## Q223087: FIX: Accelerator keys Not Handled in ActiveX Control

{% raw %}

	Article: Q223087
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,4.01,4.01 SP1,4.01 SP2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveX kbInternet kbVBp600 kbGrpDSInet kbVS600sp2 kbVS600SP1 kbVS600sp
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Internet Explorer (Programming) versions 4.0, 4.01, 4.01 SP1, 4.01 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ActiveX Control does not respond to Accelerator Keys, such as END, when
	hosted in Internet Explorer.
	
	CAUSE
	=====
	
	This is a known bug.
	
	RESOLUTION
	==========
	
	This has been fixed in the Visual Studio Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The special navigation and selection accelerator keys do not work in the
	standard Visual Basic controls in an ActiveX control in the browser.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start an ActiveX Control project in Visual Basic 6.0.
	
	2. Place a textbox on the control.
	
	3. Save the project.
	
	4. From the Visual Basic Add-Ins menu, select the Add-In Manager.
	
	5. Make sure the Packaging and Deployment Wizard (PDW) is loaded and close that
	  dialog box.
	
	6. Select the PDW from the Add-Ins menu.
	
	7. Allow PDW to save and compile the control, then select Internet packaging.
	
	8. Accept the rest of the default options for the PDW.
	
	9. Open the .htm file created in the previous step with Internet Explorer.
	
	10. Click in the textbox on the control to give it focus and press HOME or END.
	
	If you built the control without Visual Basic 6.0 Service Pack 3 installed,
	nothing will happen.
	
	REFERENCES
	==========
	
	For further information on building ActiveX controls see the Component
	Development section of the MSDN Web Workshop
	(http://msdn.microsoft.com/workshop)
	
	For related Knowledge Base articles and FAQs refer to the Technical Assistance
	option of that section.
	
	Additional query words: KEY CONTROL
	
	======================================================================
	Keywords          : kbservicepack kbActiveX kbInternet kbVBp600 kbGrpDSInet kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbInetDev kbfixlist
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSDKIE400 kbSDKIE401 kbSDKIE401SP1 kbSDKIE401SP2
	Version           : WINDOWS:4.0,4.01,4.01 SP1,4.01 SP2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
