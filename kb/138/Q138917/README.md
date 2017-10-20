---
layout: page
title: "Q138917: How to Use the Query Designer to Send Output to a Text File"
permalink: /kb/138/Q138917/
---

## Q138917: How to Use the Query Designer to Send Output to a Text File

{% raw %}

	Article: Q138917
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By using the Query Designer in Visual FoxPro, you can direct the output of the
	query to an ASCII text file. This article will outline the steps necessary to
	accomplish this.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Set up a query in the Query Designer.
	
	2. On the Query menu, click Query Destination, and then click the Screen button.
	  Click To Text File, and specify the output file name.
	
	3. Clear the Pause Between Screens check box, and click OK.
	
	4, Save and run the query. The output should be sent to the file specified in
	step 2. Note that the output is also echoed to the screen. The following code
	example can be used to suppress the output to the screen:
	
	     DEFINE WINDOW win1 FROM 1,1 TO 5,5
	     ACTIVATE WINDOW win1
	     HIDE WINDOW win1
	     DO QUERY1.QPR  &&replace QUERY1.QPR with your query name
	     RELEASE WINDOW win1
	
	When this code is run, the output of the query will be sent to the file specified
	in step 2, and no output will be displayed on the screen.
	
	REFERENCES
	==========
	
	For more information on creating queries using the Query Designer, please see
	Chapter 6 in the "Visual FoxPro User's Guide."
	
	Additional query words: VFoxWin ASCII TEXT RQBE
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
