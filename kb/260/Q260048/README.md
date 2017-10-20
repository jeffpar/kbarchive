---
layout: page
title: "Q260048: PRB: Grid Becomes Empty When Changing DataSession"
permalink: /kb/260/Q260048/
---

## Q260048: PRB: Grid Becomes Empty When Changing DataSession

{% raw %}

	Article: Q260048
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 06-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When programmatically changing the DataSession property of a form, all rows of
	the grid become empty and appear deleted. This behavior can occur with a Private
	or Default data session form.
	
	CAUSE
	=====
	
	When programmatically changing a DataSession property on a form containing a
	grid, the grid loses its RecordSource property.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	While it is not necessary that the form have a Private data session, multiple
	data sessions must exist so that the change can occur. For example, if there are
	two forms, Form1 (Private data session) and Form2 (Default data session), and
	the code on Form2 switches to the data session of Form1, the RecordSource
	property of the Form2 is reset to an empty string.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create new a form and set the DataSession property to 2 - Private Data
	  Session.
	
	2. Add a table to the data environment of the form.
	
	3. Drag the table from the data environment to the form to create a grid.
	
	4. In the Properties window, make sure that the Name property for the grid is
	  grid1.
	
	5. Add a command button, Command1, and place the following code in the click
	  event:
	
	  LOCAL nDataSession, cRecordSource
	  *!*	Uncomment the following line to view the workaround
	  *!*	cRecordSource = THISFORM.grid1.RECORDSOURCE
	  nDataSession = SET('datasession')
	  SET DATASESSION TO 1
	  SET DATASESSION TO (nDataSession)
	  *!*	Uncomment the following line to view the workaround
	  *!*	THISFORM.grid1.RECORDSOURCE = cRecordSource
	
	6. Save the form as Form1.
	
	7. Run Form1 and click Command1. Note that all rows of the grid become empty and
	  appear deleted.
	
	NOTE: To view the workaround, uncomment the two designated lines of code from
	"Steps to Reproduce Behavior" and re-run the the program. Note that the grid
	retains the RecordSource property and the data.
	
	REFERENCES
	==========
	
	For additional information on problems with grids, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q131836 PRB: Grid Not Refreshing Displaying a Cursor from Query
	
	  Q140653 PRB: Cursor-Based Grid Goes Blank If SQL SELECT Resets Cursor
	
	  Q140306 HOWTO: Change a Grid's RecordSource Property Programmatically
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
