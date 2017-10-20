---
layout: page
title: "Q288930: PRB: PDW Raises Error &quot;Filename Must Contain Text&quot;"
permalink: /kb/288/Q288930/
---

## Q288930: PRB: PDW Raises Error &quot;Filename Must Contain Text&quot;

{% raw %}

	Article: Q288930
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAddin kbwizard kbAppSetup kbDeployment kbVBp kbVBp600 kbIDEProject kbGrpDSVB kbDSuppo
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Package and Deployment Wizard (PDW) to generate a setup
	package, you may receive the following error message:
	
	  Filename must contain text
	
	CAUSE
	=====
	
	This problem can occur when a semicolon (;) is missing at the end of the Object
	lines in the project (.vbp) file.
	
	RESOLUTION
	==========
	
	To resolve this problem, open the project file in a text editor such as Notepad,
	manually add a semicolon to the end of the Object line, and save the file.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click Components. On the Insertable Objects tab,
	  select the "Microsoft Clip Gallery" check box, and then click OK.
	
	3. Save the project, and then exit Visual Basic. (Note: You must exit Visual
	  Basic to reproduce the problem.)
	
	4. Open the project again.
	
	5. From the Project menu, click Components. On the Insertable Objects tab,
	  select the "Microsoft Word Document" check box, and then click OK.
	
	6. From the File menu, click Make Project1.exe.
	
	7. From the File menu, save the project, and then close Visual Basic.
	
	8. Open the project again.
	
	9. Click the Add-Ins menu. If the Package and Deployment Wizard is not listed,
	  click Add-In Manager, click "Package and Deployment Wizard", select the
	  "Loaded/Unloaded" check box, and then click OK.
	
	10. From the Add-Ins menu, click "Package and Deployment Wizard", and then click
	  Package. Notice that you receive the above-mentioned error message.
	
	Steps to Resolve Problem
	------------------------
	
	1. In Notepad, open the .vbp file. Locate the following line:
	
	  
	
	  Object=MS_ClipArt_Gallery.5
	
	2. Add a semicolon (;) to the end of the line as follows:
	
	  
	
	  Object=MS_ClipArt_Gallery.5;
	
	3. Save the file.
	
	4. Run the PDW, and click Package. Notice that you no longer receive the error
	  message.
	
	REFERENCES
	==========
	
	For additional information about another cause for this error, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q193174 PRB: Filename Must Contain Text Error Message When Packaging Project
	
	Additional query words: PDW
	
	======================================================================
	Keywords          : kbAddin kbwizard kbAppSetup kbDeployment kbVBp kbVBp600 kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
