---
layout: page
title: "Q130335: ADT2: &quot;There Is No Object in This Control&quot; Error Message"
permalink: /kb/130/Q130335/
---

## Q130335: ADT2: &quot;There Is No Object in This Control&quot; Error Message

{% raw %}

	Article: Q130335
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	When you insert a Calendar control into a new form and then try to print the
	form while the form is open in Design view, you may receive the following error
	message:
	
	  There is no object in this control.
	
	NOTE: The Calendar control is available only with the Microsoft Access
	Developer's Toolkit.
	
	RESOLUTION
	==========
	
	To work around this problem, choose Save or Print Preview from the File menu
	before you print the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access version 2.0.
	This problem no longer occurs in Microsoft Access for Windows 95 version 7.0.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open an existing Microsoft Access database.
	
	2. Create a blank form.
	
	3. From the Edit menu, choose Insert Object.
	
	4. In the Insert Object dialog box, select the Insert Control option button.
	
	5. In the Control Type box, select Calendar Control, and then choose the OK
	  button.
	
	6. From the File menu, choose Print.
	
	7. In the Print dialog box, choose the OK button. Note that after a few seconds,
	  you receive the error message:
	
	  There is no object in this control.
	
	REFERENCES
	==========
	
	Microsoft Access Developer's Toolkit "Advanced Topics," version 2.0, Chapter 6,
	"Using OLE Custom Controls," pages 163-175
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
