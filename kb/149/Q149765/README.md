---
layout: page
title: "Q149765: BUG:Wrong Default Value in Remote Data Object MaxRows Property"
permalink: kb/149/Q149765/
---

## Q149765: BUG:Wrong Default Value in Remote Data Object MaxRows Property

	Article: Q149765
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbDatabase kbODBCkbbuglist
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some ODBC drivers require the MaxRows property of the Remote Data Object to be
	set to 0. The default value for this property is -1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The ODBC specification for the MaxRows property is 0. Some drivers that detect a
	MaxRows property set to -1 automatically change this property to 0. However,
	other drivers require the property to be 0 and may return an error if the
	property is set to another value.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start 32-bit Visual Basic 4.0. If it is already running, on the File menu,
	  click New Project.
	
	2. Add a Remote Data Control to the Form1 form.
	
	3. In the Properties window for the Remote Data Control, check the MaxRows
	  property. The default property is -1 instead of 0.
	
	Additional query words: 4.00 vb4win vb432 RDO RDC
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	
