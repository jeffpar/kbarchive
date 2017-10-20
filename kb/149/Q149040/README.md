---
layout: page
title: "Q149040: BUG: 3426 and 3020 - Different Error Number With 16-bit/32-bit"
permalink: /kb/149/Q149040/
---

## Q149040: BUG: 3426 and 3020 - Different Error Number With 16-bit/32-bit

{% raw %}

	Article: Q149040
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Recordset.Update is issued without first issuing an AddNew or an Edit
	method, Visual Basic 4.0 correctly raises an error, because the Update method
	can only be invoked after an AddNew or an Edit method. However, the error number
	raised by the 16-bit and 32-bit editions of Visual Basic differs.
	
	The 32-bit edition of Visual Basic version 4.0 for Windows returns the following
	error:
	
	  '3020' - Update or CancelUpdate without AddNew or Edit
	
	The 16-bit edition of Visual Basic version 4.0 for Windows returns the following
	error:
	
	  '3426' - The action was cancelled by an associated object
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Start the 32-bit edition of Visual Basic version 4.0 for Windows. Form1 is
	  created by default.
	
	2. Add a single text box and data control to the form.
	
	3. Set the properties of the data control to the following:
	
	     DatabaseName:     BIBLIO.MDB
	     RecordSource:     Authors
	
	4. Set the properties of the text box to the following:
	
	     DataSource:    Data1
	     DataField:     Au_ID
	
	5. Add the following code to the Form_Click event of Form1:
	
	        Private Sub Form_Click()
	           Data1.Recordset.Update
	        End Sub
	
	6. Press F5 or click Start on the Run menu to run the application. Change the
	  text in the text box and click the form. With the 32-bit version of Visual
	  Basic version 4.0 for Windows, error '3020' is raised. If these steps are
	  repeated with the 16-bit version of Visual Basic version 4.0 for Windows, the
	  error raised is '3426'.
	
	Additional query words: 4.00 vb4win vb4all buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
