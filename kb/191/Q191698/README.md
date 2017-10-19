---
layout: page
title: "Q191698: BUG: View Parameter Cannot Be Removed From Parameters List"
permalink: /kb/191/Q191698/
---

## Q191698: BUG: View Parameter Cannot Be Removed From Parameters List

	Article: Q191698
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a SQL View that has only one parameter, deleting the parameter through the
	Parameter's list in the View Designer does not delete the parameter.
	
	RESOLUTION
	==========
	
	Delete the parameter using the following code:
	
	     DBSETPROP('testview','view','parameterlist','')
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code in the Command window, or a program file:
	
	        CREATE DATA test1
	        CREATE TABLE tbl1 (fld1 c(10),fld2 c(10))
	        CREATE SQL VIEW testview AS SELECT * FROM tbl1 WHERE fld1 = ?Param1
	        DBSETPROP("testview","view","parameterlist","Param1,'C'")
	
	2. Modify the View "testview" in the View Designer.
	
	3. From the Query menu, choose View Parameters.
	
	4. Click the button to the left of the parameter to select the parameter.
	
	5. Click the Delete button.
	
	6. Close the View Parameters dialog box.
	
	7. Save and close the view.
	
	8. Modify the view in the View Designer.
	
	9. Look at the parameters list in the View Parameters dialog box.
	
	Note that the parameter is listed when it should not be.
	
	Additional query words: kbVFp600bug kbDesigner kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
