---
layout: page
title: "Q167147: FIX: Invalid Page Fault Occurs After Replicate of Enter Key"
permalink: /kb/167/Q167147/
---

## Q167147: FIX: Invalid Page Fault Occurs After Replicate of Enter Key

{% raw %}

	Article: Q167147
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After using the REPLICATE function on the Enter key, Visual FoxPro causes an
	Invalid Page Fault to occur. This occurs after clicking into any active window
	after the REPLICATE function has been performed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 5.0a for
	Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following lines of code into a .prg file and run it:
	
	        PUBLIC x
	        x = CREATEOBJECT( 'form1' )
	        x.Show
	
	        **************************************************
	        *-- Form:         form1 (h:\vfp5\misc\cyrus_edt2.scx)
	        *-- ParentClass:  form
	        *-- BaseClass:    form
	        *
	        DEFINE CLASS form1 AS Form
	          Top = 0
	          Left = 0
	          DoCreate = .T.
	          Caption = "Form1"
	          Name = "Form1"
	
	          ADD OBJECT edit1 AS EditBox WITH ;
	                Height = 217, ;
	                Left = 12, ;
	                Top = 12, ;
	                Width = 121, ;
	                Name = "Edit1"
	
	          PROCEDURE Click
	                KEYBOARD REPLICATE( "a{enter}", 60 ) PLAIN
	                KEYBOARD REPLICATE( "a{enter}", 60 ) PLAIN
	                KEYBOARD REPLICATE( "a{enter}", 60 ) PLAIN
	                KEYBOARD REPLICATE( "a{enter}", 60 ) PLAIN
	          ENDPROC
	
	        ENDDEFINE
	        *
	        *-- EndDefine: form1
	        **************************************************
	
	2. Click anywhere on the form outside of the Edit box region. NOTE: this
	  populates the edit region with multiple lines of the letter "a."
	
	3. Click into any active window outside of the form, such as the Command window.
	  NOTE: The error is generated.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
