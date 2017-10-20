---
layout: page
title: "Q253298: PRB: HTML Template Items' Names Changed in WebClass Designer"
permalink: /kb/253/Q253298/
---

## Q253298: PRB: HTML Template Items' Names Changed in WebClass Designer

{% raw %}

	Article: Q253298
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbtemplate kbDesigner kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you refresh the Webclass Designer view or reopen a project in Visual Basic
	6.0, some HTML template items' names may change.
	
	For example, if a hyperlink was named "Hyperlink1" by the Webclass Designer,
	after you reopen the project, this name may change to "Hyperlink4" (the actual
	number may vary).
	
	CAUSE
	=====
	
	The HTML template item does not have the name property defined. Visual Basic 6.0
	Webclass Designer assigns names according to their availability and prior use in
	a project.
	
	RESOLUTION
	==========
	
	To avoid this problem, make sure that HTML template items have their name
	property defined. For example, a hyperlink in an HTML template should be defined
	as:
	
	  <a href="" name=link3>Link 3</a>
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new HTML template and include the following code:
	
	  <html>
	  <body>
	  <a href="">Link 1</a>
	  <a href="">Link 2</a>
	  <a href="">Link 3</a>
	  </body>
	  </html>
	
	2. Save the file as "Template1.htm" (without the quotation marks).
	
	3. Add this HTML template to your Webclass project (right-click HTML Template
	  WebItems in the Webclass Designer view and choose Add HTML Template).
	
	4. In the Webclass Designer view, three WebItems will be shown. Usually they
	  will be named as Hyperlink1, Hyperlink2, and Hyperlink3, though the names may
	  vary.
	
	5. Close the project, and then reopen it. The names of those three hyperlinks
	  may be changed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtemplate kbDesigner kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
