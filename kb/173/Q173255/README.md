---
layout: page
title: "Q173255: VB5 Step By Step: Page 141 Code Returns Error"
permalink: /kb/173/Q173255/
---

## Q173255: VB5 Step By Step: Page 141 Code Returns Error

{% raw %}

	Article: Q173255
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Visual Basic 5.0 Step by Step ISBN 1-57231-435-4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the code on page 141 of "Microsoft Visual Basic 5.0 Step by Step,"
	you may receive the following error on the first line of code:
	
	  Variable not defined.
	
	CAUSE
	=====
	
	Visual Basic provides the option to add "Option Explicit" to all projects
	created in the Visual Basic environment. With this line added to the project,
	you must explicitly declare every variable used in the code.
	
	RESOLUTION
	==========
	
	Add the following line of code after the Command1_Click() declaration and before
	the first line of code in the procedure:
	
	    Dim UserName As String
	
	  -or-
	
	1. Click Tools, and then click Options.
	
	2. Click the Editor tab.
	
	3. Click to clear the Require Variable Declaration check box, and then click OK.
	
	Additional query words: mspress ms_press press bookbug 1-57231-435-4
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
