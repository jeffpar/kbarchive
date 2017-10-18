---
layout: page
title: "Q140565: PRB: SET INDEX TO Command Causes Error When Run from a Form"
permalink: kb/140/Q140565/
---

## Q140565: PRB: SET INDEX TO Command Causes Error When Run from a Form

	Article: Q140565
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following errors occurs occur when attempting to run the SET INDEX TO
	command programmatically from a running form:
	
	- File must be opened exclusively.
	
	-or-
	
	- File is in use by another.
	
	CAUSE
	=====
	
	A table opened by the Data Environment of a form is opened shared by default.
	Therefore, when the form is running and you issue an INDEX ON command, an error
	occurs.
	
	RESOLUTION
	==========
	
	Set the Exclusive Property of the cursor to .T. at design time.
	
	NOTE: Attempting to set this property at run-time causes the following error
	message:
	
	  Property setting will not take effect until data environment reloaded
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Right-click the form, and then click Data Environment.
	
	3. Right-click the Data Environment window, and then click Add.
	
	4. Locate the Customer table in the Vfp\Samples\Data directory, and then select
	  and add it to the Data Environment of the form.
	
	5. Scroll down in the list box displaying the Customer table and note which
	  indexes which currently exist. This is so that an index that already exists
	  isn't recreated when the INDEX ON command is run in Step 7 later.
	
	6. Add a command button to the form.
	
	7. Add the following code to the Click method of the command button
	
	       SELECT CUSTOMER
	       INDEX ON <field_name> TAG <field_name>
	
	  where field_name is the name of a field in the Customer table that does not
	  already have an index tag, as noted earlier in Step 5.
	
	8. Save and run the form.
	
	9. Click the command button.
	
	Steps to Correct Form Created in Previous Example
	-------------------------------------------------
	
	1. Close, and then edit the form.
	
	2. Right-click the form, and then click Data Environment.
	
	3. Right-click the Customer table list box, and then click Properties.
	
	4. In the Properties window, click the Data tab, and then examine the Exclusive
	  property. Note that the default value is .F.
	
	5. Change the Exclusive value to .T., and then save and rerun the form.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
