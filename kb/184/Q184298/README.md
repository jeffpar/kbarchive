---
layout: page
title: "Q184298: PRB: Project Containing UserConnection &amp; WithEvents Crashes VB"
permalink: /kb/184/Q184298/
---

## Q184298: PRB: Project Containing UserConnection &amp; WithEvents Crashes VB

{% raw %}

	Article: Q184298
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating a project that uses the WITHEVENTS clause and a UserConnection object
	causes Visual Basic IDE to crash if the Object box in the Code window is
	accessed.
	
	RESOLUTION
	==========
	
	There is no known workaround.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and create a new project.
	
	2. From the Project menu choose References and select "Microsoft Remote Data
	  Objects 2.0" from the References dialog box.
	
	3. From the Project menu choose Components. In the Components dialog box click
	  the Designers tab and select "Microsoft UserConnection".
	
	4. From the Project menu choose "Add ActiveX Designer" and then select
	  "Microsoft UserConnection".
	
	5. Leave everything as default EXCEPT the Datasouce and Security information.
	  Provide whatever is needed to access your SQL Server.
	
	6. Click the Insert Query button on the UserConnection Designer and save it as
	  is. It is not necessary to change anything.
	
	7. Save the Userconnection, project, and the form.
	
	8. In the Code window in the General Declarations type the following line of
	  code:
	
	  DIM WITHEVENTS rs AS rdo.RDOconnection
	
	9. Save the Project and restart Visual Basic.
	
	10. Reopen the project.
	
	11. From the View menu, select Project Explorer.
	
	12. Select the form in the Project Explorer, and open the Code window for the
	  form.
	
	13. Now try to select an Object from the Object combo box in the upper left
	  corner of the code window.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
