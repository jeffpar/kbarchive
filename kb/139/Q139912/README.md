---
layout: page
title: "Q139912: Saving Programmatically-Created Form &amp; Data Environment to SCX"
permalink: /kb/139/Q139912/
---

## Q139912: Saving Programmatically-Created Form &amp; Data Environment to SCX

{% raw %}

	Article: Q139912
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating a form programmatically, you may want to add a data environment to
	the form. This article illustrates one method you can use to create a form and
	add a data environment to that form programmatically.
	
	MORE INFORMATION
	================
	
	When you create a form programmatically, the DataEnvironment property cannot be
	used to pass a table to the form because it is a read-only property. Therefore,
	to add a data environment to a form programmatically, you must create the data
	environment object separately during the creation of the form. Then, you must
	use the SaveAs method to save both the form and the data environment in the new
	form (.scx) file. The following code illustrates this technique.
	
	Code Sample
	-----------
	
	  *-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	       BEGIN CODE SEGMENT
	  *-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	
	  SET DEFAULT TO C:\VFP\SAMPLES\DATA
	
	  oMyForm1=CREATEOBJECT('Form')
	  oMyDE1  =CREATEOBJECT('DataEnvironment')
	
	  oMyDE1.ADDOBJECT('Curs1', 'Cursor')
	  oMyDE1.Curs1.DataBase='TESTDATA.DBC'
	  oMyDE1.Curs1.CursorSource='Customer'
	
	  oMyForm1.ADDOBJECT('Txt1', 'TextBox')
	  oMyForm1.Txt1.ControlSource='Customer_ID'
	  oMyForm1.Txt1.Visible=.T.
	
	  *-- You can add as many objects as you want.
	  *-- Use the form's SaveAs method to save everything
	  *-- to an .scx File. This is actually how the DE
	  *-- is associated to the form.
	
	  oMyForm1.SaveAs('MyForm2', oMyDE1)
	
	  *-- Note that the second parameter specifies the
	  *-- associated Data Environment
	
	  RELEASE oMyForm1
	
	  DO FORM MyForm2
	
	  *-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	       END CODE SEGMENT
	  *-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	
	You can also use the following command to open the form in design mode:
	
	     MODIFY FORM MyForm2
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
