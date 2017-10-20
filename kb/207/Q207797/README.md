---
layout: page
title: "Q207797: BUG: Cursor Jumps Around when Typing in Edit Box"
permalink: /kb/207/Q207797/
---

## Q207797: BUG: Cursor Jumps Around when Typing in Edit Box

{% raw %}

	Article: Q207797
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600bug kbVS600sp3 kbGrpDSFox kbDSupport kbCo
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are inserting text in an edit box that already has data in it, the
	insertion point jumps through the existing data in an apparently random manner
	on each press of a key.
	
	CAUSE
	=====
	
	This is caused by referencing the Value property of the edit box during the
	InteractiveChange event when there are carriage return and line feed characters
	in the edit box data. Carriage return and line feed characters can get in the
	edit box when the ENTER key is pressed when typing in data.
	
	RESOLUTION
	==========
	
	Use the Text property rather than the Value property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The code below creates a form with an edit box on it. The Init method of the
	edit box assigns some text to the Value property, including carriage return and
	line feed characters.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code into a new program file:
	
	  PUBLIC oform1
	
	  oform1=CREATEOBJECT("form1")
	  oform1.Show
	  RETURN
	
	  	**************************************************
	  *-- Form:         form1
	  *-- ParentClass:  form
	  *-- BaseClass:    form
	  *
	  DEFINE CLASS form1 AS form
	
	          DoCreate = .T.
	          Caption = "Form1"
	          Name = "FORM1"
	
	          ADD OBJECT edit1 AS editbox WITH ;
	                  Height = 169, ;
	                  Left = 120, ;
	                  Top = 24, ;
	                  Width = 145, ;
	                  Name = "Edit1"
	
	          PROCEDURE edit1.InteractiveChange
	                  x=This.Value
	                  *x=this.Text
	          ENDPROC
	
	          PROCEDURE edit1.Init
	                  This.Value=""
	                  FOR i=1 TO 8
	                     This.Value=This.Value+"Line "+ALLTRIM(STR(i))+CHR(13)+CHR(10)
	                  ENDFOR
	          ENDPROC
	
	  ENDDEFINE
	  *
	  *-- EndDefine: form1
	  **************************************************
	
	2. Save and run the code.
	
	3. On line 4 of the edit box, click between the "e" in "Line 4" and the number
	  4. The insertion point should now be on line 4.
	
	4. Start typing the word "Hello" (without the quotation marks) and watch where
	  the letters end up.
	
	5. In Procedure Init in the code above, remove the asterisk (*) in front of the
	  x=This.Text line and place it before the x=This.Value line.
	
	6. Save and rerun the program. Repeat step 4 and note that the cursor no longer
	  jumps around.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600bug kbVS600sp3 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
