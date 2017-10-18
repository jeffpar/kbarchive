---
layout: page
title: "Q187787: PRB: Class Builder Does Not Save the Built Class"
permalink: kb/187/Q187787/
---

## Q187787: PRB: Class Builder Does Not Save the Built Class

	Article: Q187787
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Class Builder Add-In does not save the class to the project the user is
	working in. When the Class Builder is executing and a user has entered in
	Attributes for a new event, if the user attempts to exit the Class Builder it
	does not prompt for updating the project with the class information.
	
	RESOLUTION
	==========
	
	Create the class by selecting Add Class Module on the Project menu. In the Add
	Class Module window, select Class Module, and then use the Tools menu to add the
	event by selecting Add Procedure. Once the event is added, select Procedure
	Attributes from the Tools menu to add attributes to the class.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Go to Add-Ins menu, select Add-In Manager, and choose the Class Builder
	  Utility.
	
	2. Choose Class Builder from the Add-Ins menu.
	
	3. From the Project menu, select Add Class Module and choose VB Class Builder.
	  Add a new class called Myclass by pressing the add new class button.
	
	4. Add an event named MyEvent.
	
	5. Click OK.
	
	6. Double-click the new event, and then select the Attributes tab.
	
	7. Type a description for the event, and then click OK.
	
	8. Double-click MyEvent once again, and then click OK.
	
	9. Choose File, Exit. Note that no option is given to Update the Project with
	  this class.
	
	Additional query words: kbVBp500 kbVBp kbAddIn kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
