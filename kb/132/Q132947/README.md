---
layout: page
title: "Q132947: HOWTO: Suppress the Initial Dialog Box in a Parameterized View"
permalink: kb/132/Q132947/
---

## Q132947: HOWTO: Suppress the Initial Dialog Box in a Parameterized View

	Article: Q132947
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A dialog box prompts the user to enter a value for the parameter if you use a
	parameterized view stored in the data environment of a form and the parameter
	wasn't initialized before the form was opened. The dialog box pops up when the
	view opens. To prevent this from happening, you must specify an initial value
	for the parameter.
	
	MORE INFORMATION
	================
	
	You can set the initial value of the parameter, and prevent the dialog box from
	appearing. In the BeforeOpenTables event of the data environment, declare the
	parameter as Public, and give it an initial value. For example:
	
	     Public Myparam
	     Myparam = "Initial Value"
	
	Using this method ensures that there is an initial value for the parameter as the
	view is opened, so the dialog box doesn't appear.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	
