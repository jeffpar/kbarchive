---
layout: page
title: "Q282047: PRB: Printing Reports Causes Exception C0000005 Error"
permalink: /kb/282/Q282047/
---

## Q282047: PRB: Printing Reports Causes Exception C0000005 Error

{% raw %}

	Article: Q282047
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSuppo
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a report, you may receive the following error message:
	
	  Fatal Error: Exception C0000005
	
	CAUSE
	=====
	
	This problem can occur if the Tag and Tag2 fields of the report have printer
	code for a printer that is not currently being used.
	
	RESOLUTION
	==========
	
	As a workaround to the problem, delete the contents of the Tag and Tag2 fields.
	The following code shows how to do this:
	
	   *!* Q282047: PRB: Printing Reports Causes Exception Error C0000005
	   *!* Replace MyReport with the name of your report.
	   USE MyReport.FRX
	   BLANK FIELDS Tag, Tag2
	   USE
	
	REFERENCES
	==========
	
	For additional information on the Tag and Tag2 fields in reports, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q257624 Clear Report TAG, TAG2, and EXPR Fields Using .pjx Hooks
	
	  Q138396 HOWTO: Use the Default Windows Printer in Visual FoxPro
	
	  Q136620 Benefit of Storing Printer Info in a Report Table (.FRX File)
	
	  Q133163 HOWTO: Control Printer Attributes for a Report at Run Time
	
	  Q191588 BUG: Create Report w/ SYS(1037) Saves Old Printer Information
	
	Additional query words:
	
	======================================================================
	Keywords          : kbReportWriter kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
