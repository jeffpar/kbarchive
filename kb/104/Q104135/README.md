---
layout: page
title: "Q104135: PC Forms: Using Grid and OLE Client Controls in Routing Forms"
permalink: /kb/104/Q104135/
---

## Q104135: PC Forms: Using Grid and OLE Client Controls in Routing Forms

{% raw %}

	Article: Q104135
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you customize the Routing Form included with version 1.0 of Microsoft
	Electronic Forms Designer, grid and OLE client controls with nonempty Tag
	properties are not automatically added to the MEF package. This occurs because
	the code for these controls is missing from the ReadTaggedControls() and
	WriteTaggedControls() functions defined in EFORM.BAS.
	
	To add grid and OLE client controls to the Routing Form, you can copy the code to
	enumerate these controls from the Generic Template by performing the following
	steps:
	
	1. Open the Generic Template project in Visual Basic.
	
	2. In the Project window, select EFORM.BAS.
	
	3. In the Procedures drop-down list box, select ReadTaggedControls.
	
	4. Scroll to the section of the code that is commented "'Grid Control". Select
	  the code for the grid and OLE client controls.
	
	5. From the Edit menu, choose Copy.
	
	6. Open the Routing Form project by choosing Open Project from the File menu.
	
	7. In the Project window, select EFORM.BAS.
	
	8. In the Procedures drop-down list box, select ReadTaggedControls.
	
	9. Scroll to the "'Add other custom controls here" comment.
	
	10. Click below the comment and choose Paste from the Edit menu to add the code.
	
	11. Repeat steps 2-10 for the WriteTaggedControls() function.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
