---
layout: page
title: "Q172349: PRB: Error Type 11 when Creating New Query While Modifying Form"
permalink: /kb/172/Q172349/
---

## Q172349: PRB: Error Type 11 when Creating New Query While Modifying Form

{% raw %}

	Article: Q172349
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbHWMAC kbvfp
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Macintosh PowerPC and creating a new query, under certain
	conditions, the following error occurs:
	
	  Sorry, a system error occurred. "Microsoft Visual FoxPro" error type 11.
	
	You then have to click Restart or press the reset button to regain control of the
	computer.
	
	The conditions that cause this error are an open form in design mode with the
	form property sheet set to "Always on Top" at the same time a query is being
	created using the Query Designer.
	
	Specific steps to create these conditions follow in this document.
	
	CAUSE
	=====
	
	Properties sheet pushpin to select Always On Top.
	
	RESOLUTION
	==========
	
	Select the pushpin on the form properties sheet so that it is not selected prior
	to creating the new query.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: Save and Close any other application or document prior to following these
	steps.
	
	1. Open an existing form such as the Category.scx, which is located in the
	  FoxPro folder \Samples\Mainsamp\Forms.
	
	2. Hold the Control key while clicking on the form and select Properties.
	
	3. On the Properties sheet select the pushpin button such that "Always On Top"
	  is selected.
	
	4. From the File menu, select New.
	
	5. Select File Type Query and select New File.
	
	6. On the Add Table or View dialog box, select Other.
	
	7. Open an existing table such as the Orders.dbf located in the FoxPro folder
	  named Samples\Mainsamp\Data.
	
	8. In the Query Designer, select the tab named Fields.
	
	9. Notice that the list of Available Fields is empty. This is necessary in order
	  to reproduce the problem. If the list of Available Fields is not empty then
	  the problem does not occur.
	
	10. Selecting the Functions/Expressions drop-down while the list of Available
	  Fields is empty generates the type 11 error message.
	
	NOTE: At times, selection of all fields (*) from the data environment area of the
	Query Designer also causes the error.
	
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300Mac
	Version           : MACINTOSH:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
