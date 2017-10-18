---
layout: page
title: "Q128893: PRB: Editing Embedded OLE Object in Place Does Not Save Change"
permalink: kb/128/Q128893/
---

## Q128893: PRB: Editing Embedded OLE Object in Place Does Not Save Change

	Article: Q128893
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changes made to an OLE object in an OLE Container control on a form do not
	appear after the form has been closed and re-run.
	
	CAUSE
	=====
	
	Because the form is an object, it is being run rather than defined and each
	'run' calls the original object definition. Changes made to an OLE object remain
	for the duration of the current session, but the changes are not made to the
	object definition itself. Because no form event saved the modified contents of
	the OLE object, the changes disappear when the form is re-run.
	
	RESOLUTION
	==========
	
	Use a linked object in the container, or use a bound control. With either
	solution the data within the object is data external to the definition of the
	control.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add an OLE Container Control in which you create a new Microsoft Word 6
	  object. (An embedded object from any other OLE server will demonstrate this
	  equally well.)
	
	3. Insert some text into it. Then click on the form outside the OLE control.
	
	4. Save and run the form.
	
	5. Double-click the OLE Control to activate it in-place.
	
	6. Make some changes.
	
	7. Click the form outside of the OLE control to return to FoxPro.
	
	8. Close the form.
	
	9. Run the form again.
	
	Additional query words: VFoxWin OLE object control
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
