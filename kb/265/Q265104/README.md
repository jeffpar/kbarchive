---
layout: page
title: "Q265104: PRB: Document Jumps to Top When You Edit With an OleBoundControl"
permalink: /kb/265/Q265104/
---

## Q265104: PRB: Document Jumps to Top When You Edit With an OleBoundControl

{% raw %}

	Article: Q265104
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbActiveX kbAutomation kbCtrl kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 07-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an OleBoundControl to edit a Microsoft Word document that is stored
	in a General field, the active area may jump to the top of the document. After
	you scroll down in the document and make changes, the control flashes and the
	active area jumps to the top of the document. The amount of time varies for this
	to take place, but it generally happens within 5-55 seconds. Even though the
	document is at the top, the cursor remains at the position you were editing.
	
	RESOLUTION
	==========
	
	Here are two ways you can work around this problem:
	
	- Set the AutoSize property of the OleBoundBontrol to True.
	
	- Instead of using the DoVerb method with DoVerb(-1) to allow you to edit the
	  document in Visual FoxPro, use DoVerb(-2). Using DoVerb(-2) opens Microsoft
	  Word in which you can edit the document.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table named doctable and add a General field named worddoc.
	
	2. Store a Word document in the General field.
	
	3. Create a new form in Visual FoxPro 6.0 SP3 and place an OleBoundControl on
	  the form.
	
	4. Set the Control Source of the OleBoundControl to the General field in the
	  doctable table.
	
	5. Add the following code to the Init event of the form:
	
	  USE doctable IN 0 SHARED
	  SELECT doctable
	  GO TOP
	  THISFORM.oleboundcontrol1.DoVerb(-1)
	
	6. Add the following code to the Destroy event of the form:
	
	  USE IN DOCTABLE
	
	7. Run the form. Scroll down in the document, and make some changes.
	
	8. Wait 5-55 seconds. The document flashes and jumps to the top. The cursor
	  stays where the edit changes were made. If the view size was changed, it
	  changes back to the default value of 100 percent.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbActiveX kbAutomation kbCtrl kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
