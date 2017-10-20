---
layout: page
title: "Q165634: PRB: View Wizard Loses Relations When Removing Field"
permalink: /kb/165/Q165634/
---

## Q165634: PRB: View Wizard Loses Relations When Removing Field

{% raw %}

	Article: Q165634
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a Local View with the View Wizard, there is an issue with
	relationships when two tables are used and a relation is created. If the user
	returns to Step 1 in the Wizard and removes a field or fields from the selected
	fields, the relationship is removed.
	
	RESOLUTION
	==========
	
	The user must simply re-add the relationship once returning to Step 2.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window issue the following command:
	
	        MODIFY DATA HOME()+"samples\data\testdata"
	
	2. From the File menu, click New. Click View and select Wizard from the New File
	  dialog box.
	
	3. In Step 1 of Local View Wizard, add all fields from Customer and Orders.
	  Click NEXT to move to Step 2.
	
	4. Since Orders.Cust_ID and Customer.Cust_ID should be in the pop-up menus,
	  click the Add button to set the relationship between the two tables.
	
	5. Click Back to go back to Step 1.
	
	6. In Step 1, remove a field or fields from the Selected Fields.
	
	7. Click Next to return to Step 2. (NOTE: the relationship is gone and must be
	  added again.)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
