---
layout: page
title: "Q274099: PRB: Page Size of Embedded Word File Changes When Edited"
permalink: kb/274/Q274099/
---

## Q274099: PRB: Page Size of Embedded Word File Changes When Edited

	Article: Q274099
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbole kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippe
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you embed a Microsoft Word file in a general field and then edit it, the
	document may resize to fit the window.
	
	RESOLUTION
	==========
	
	To avoid this problem, use a Linked document instead of an Embedded document. To
	do so, follow the steps in the "More Information" section, but add the LINK
	keyword to the APPEND GENERAL statement.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following code into the Command window, and when prompted, choose a
	  Word document:
	
	  CREATE TABLE wordTable (gWordDoc G)
	  APPEND BLANK
	  APPEND GENERAL gWordDoc FROM GETFILE("doc") CLASS "Word.Application"
	  BROWSE
	
	2. Double-click the "Gen" record.
	
	3. Resize the window to a different width than the displayed document.
	
	4. Close the window, and then reopen it.
	
	5. Double-click the document.
	
	The document appears with new margins, matching the width of the window. If you
	are working in Visual FoxPro version 3, the size changes to a consistent value,
	instead of being dependent on the window width.
	
	If you edit the general field in an OLEBoundControl instead, and use the
	DoVerb(-2) method, it will open in Word. If you then click Page Setup from the
	File menu, you can determine whether the paper size is different from the
	original size.
	
	REFERENCES
	==========
	
	For additional information about the same problem in Word 6.0, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q121049 Wrong Page Size for Word 6.0 Document Object Opened to Edit
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
