---
layout: page
title: "Q157759: FIX: Calendar Control Help File Contains an Invalid Jump"
permalink: kb/157/Q157759/
---

## Q157759: FIX: Calendar Control Help File Contains an Invalid Jump

	Article: Q157759
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbhelpfile kbActiveX kbvfp
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Calendar control is one of the ActiveX controls that comes with Visual
	FoxPro 5.0. The Help file for the Calendar control is Msacal70.hlp. Most ActiveX
	controls use the Visual Basic Help file Ctrlref.hlp. The Calendar control is a
	Microsoft Access control, and only Microsoft Access can use the ControlSource
	property. Attempting to use the ControlSource jump in the Help file results in
	the following error because it is looking for a specific Microsoft Access Help
	file:
	
	  Cannot find the Acvba80.hlp file. Do you want to try to find this file
	  yourself?
	
	CAUSE
	=====
	
	The Acvba80.hlp file did not ship with Visual FoxPro 5.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Place an OLE Container control on the form.
	
	3. In the Insert Object dialog box, click Insert Control.
	
	4. Select the Calendar control and click OK.
	
	5. With the Calendar control selected, press the F1 key.
	
	  -or-
	
	  Right-click the control, and select Help from the pop-up menu.
	
	6. In Calendar control Help, click Properties.
	
	7. From the Properties list, click the Value property.
	
	8. In the fourth paragraph under Remarks, click the underlined word
	  "ControlSource." The error message appears.
	
	Additional query words: kbVFp500bug kbVFp500abug kbDSupport kbvfp600fix
	
	======================================================================
	Keywords          : kbhelpfile kbActiveX kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
