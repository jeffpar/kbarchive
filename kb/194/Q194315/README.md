---
layout: page
title: "Q194315: PRB: Query Output to Graph No Longer Saved to a General Field"
permalink: /kb/194/Q194315/
---

## Q194315: PRB: Query Output to Graph No Longer Saved to a General Field

{% raw %}

	Article: Q194315
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0, setting the Output settings of a query to a graph results
	in the graph being saved to a .scx file instead of being saved to a General
	field in a table (.dbf file). In earlier versions of FoxPro, the graph was saved
	to a General field in a table by default. Visual FoxPro 6.0 stores the graph in
	the form as an Olecontrol object that is linked to a Microsoft Graph Chart.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	There is no direct way to save the results of a query to a graph and get the
	graph stored in a General field. However, saving the results of the query to a
	cursor or table and then running the Graph Wizard on that cursor or table allows
	the graph to be saved to a General field in a table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the File menu, select New. In the New dialog box, choose Query and then
	  select the New File button.
	
	2. Add a table that has a character field and numeric field.
	
	3. In the Fields tab of the Query Designer, move the character field and numeric
	  field from the Available Fields list box to the Selected Fields list box.
	
	4. From the Query menu, select Query Destination to open the Query Destination
	  dialog box.
	
	5. Select the Graph button in the Query Destination dialog box. If it is dimmed,
	  go to the Command window and issue the following command and then repeat Step
	  4 to select the Graph button:
	
	        _GENGRAPH = HOME() + "\WIZARDS\WZGRAPH.APP"
	
	6. Click the OK button to close the Query Destination dialog box and then run
	  the query.
	
	7. In Step 2 of the Graph Wizard, drag the character field to the Axis text box,
	  and the numeric field to the Data Series list box.
	
	8. Click Finish. You now have the option to assign a title to your graph. Note
	  that there is no option to save your graph to a table or a form. Click the
	  Finish button again to see that Visual FoxPro saves the graph as a .scx file
	  only. Select the Save button to save the graph.
	
	9. To save the graph to a General field in a table, go back to the Query
	  Designer, repeat Step 4, and then select the Table button in the Query
	  Destination dialog box. Give the table a name in the Table Name text box and
	  select OK to close the window.
	
	10. Run the query and note that a table is created instead of a graph.
	
	11. From the Tools menu, point to Wizards and then select All. In the Wizard
	  Selection dialog box, choose the Graph Wizard.
	
	12. After you click the OK button, the Graph Wizard appears. In "Step 1 [ASCII
	  150] Select Fields" of the Graph Wizard, select the Databases and Tables
	  drop-down list box and choose Free Tables. Highlight the name of your table
	  in the list box, and move the character and numeric fields to the Selected
	  Fields list box.
	
	13. Select the Next button and repeat Step 7, and then select the Finish button.
	  Note that you have option buttons that allow you to save the graph to a form
	  or a table. Select the "Save Graph to a Table" option button, click the
	  Finish button and note that the graph is saved to a table.
	
	Additional query words: kbVFp600 kbDesigner kbWizard
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
