---
layout: page
title: "Q218453: FIX: Custom Expr. Builder Value Not Accepted in Report Designer"
permalink: /kb/218/Q218453/
---

## Q218453: FIX: Custom Expr. Builder Value Not Accepted in Report Designer

{% raw %}

	Article: Q218453
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDesigner kbReportWriter kbvfp600 kbXBase kbVS600sp3fix
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you define a custom expression builder with the system variable _getexpr, the
	Report Expression dialog box in the Report Designer will not accept the value
	you enter in the custom expression builder.
	
	RESOLUTION
	==========
	
	Use GETEXPR() in the Command window to obtain the expression. Run the following
	code in the Command window, and then press CTRL-V to paste the text into the
	Report Expression text box of the Report Designer:
	
	  GETEXPR() to x
	  _cliptext = x
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form. Add a text box and a command button to the form.
	
	2. Enter the following code in the command button's Click event:
	
	  gcExpr = Thisform.Text1.Text
	  Thisform.Release
	
	3. Set the following form properties:
	
	  AlwaysOnTop True (.T.)
	  Desktop True (.T.)
	  WindowType 1 ? Modal
	
	4. Save the form with the file name "MyGetExpr".
	
	5. Create a new program file and enter the following code:
	
	  PARAMETERS cExpressionType, cErrorMessageText, cDefaultExpression, cCaptionText
	  PUBLIC gcExpr
	  gcExpr = ""
	  Do Form MyGetExpr
	  Return gcExpr
	
	6. Save the program file with the file name "MyGetExpr.Prg"
	
	7. In the Command window, enter the following code:
	
	  _getexpr = "MyGetExpr"
	  CREATE REPORT
	
	8. Add a text field to the report. In the Report Expression dialog box, click
	  the ellipsis button next to the Expression field.
	
	9. When the custom expression builder is displays, enter text into the text box
	  and click the command button in the dialog box.
	
	NOTE: The Expression field in the Report Expression dialog box remains blank.
	
	REFERENCES
	==========
	
	For additional information about custom expression builders, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q218457 Custom Expression Builder Crashes Query and View Designers
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mike A. Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDesigner kbReportWriter kbvfp600 kbXBase kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
