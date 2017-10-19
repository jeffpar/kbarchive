---
layout: page
title: "Q136901: How to Determine the Firing Order of Form and Object Events"
permalink: /kb/136/Q136901/
---

## Q136901: How to Determine the Firing Order of Form and Object Events

	Article: Q136901
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to determine the order in which events and methods
	are processed for any form.
	
	MORE INFORMATION
	================
	
	Understanding the order in which events and methods are processed can help you
	place event and method code properly.
	
	Step-by-Step Demonstration
	--------------------------
	
	1. Create a free table that has a single 20-character field. From the Command
	  window, type: CREATE TABLE myorder (event c (20)), or follow these steps:
	
	  a. On the File menu, click New. In the New dialog box, click Table, and then
	     click the New File button.
	
	  b. Name the table Myorder.
	
	  c. Create the single field. Name it Even, and give it a Character data type
	     with a length of 20 characters.
	
	  d. Click OK to save it. Don't enter any records.
	
	2. Create or open a form for which you want to determine the firing order for
	  the methods and events.
	
	3. Place the following code in all the event procedures and methods of the form
	  and the objects it contains:
	
	        ccur_alias=ALIAS()      && Capture the form's table name, if any
	        SELECT myorder          && The table recording the order
	        APPEND BLANK
	        =MESSAGEBOX(PROGRAM())      && Optional for visual effect
	        REPLACE event WITH PROGRAM()
	        SELECT (ccur_alias)         && Returns to the form's table name
	
	  To speed up this process, type the code once, copy it, and then paste it into
	  each event procedure.
	
	  When determining which events to include, consider including the Destroy event
	  for each object, so you can see the order in which objects are destroyed.
	  Basically, Visual FoxPro uses the LIFO method (last in, first out) for
	  destroying objects.
	
	4. Open the table (Myorder), and run the form. After exiting the form, browse
	  the Myorder table.
	
	The Myorder table will contain a record for each event or method as it was
	processed; this is the flow chart for the form.
	
	There are a number of events that occur in any form, in the same order each time.
	The principal variation will be in the objects and the types of objects. For
	example, a single command button will differ from a command group where each
	button within the command group has its own individual Init and Destroy events,
	among others.
	
	The order in which objects are loaded depends on the order in which they were
	created in the Form Designer. This also dictates the order in which they will be
	destroyed; they are destroyed in the reverse order of their creation.
	
	Additional query words: VFoxWin debugging fire
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
