---
layout: page
title: "Q182573: BUG: Illegal Operation Err Using Richtext Control with Find"
permalink: kb/182/Q182573/
---

## Q182573: BUG: Illegal Operation Err Using Richtext Control with Find

	Article: Q182573
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert the Microsoft ActiveX Richtext control version 5.0 into a form,
	and you set the control to point to a text file, you can read the text file
	through the control box normally. However, if you add a command button that
	allows you to search the contents of the text box using the Olecontrol1.Find
	method, the following error message occurs:
	
	  This program has performed an illegal operation and will be shutdown.
	
	In Visual FoxPro 5.0, when you press the Details button this message appears:
	
	  VFP caused a stack fault in module OLEAUT32.DLL at <memory address>.
	
	In Visual FoxPro 5.0a, the following message appears:
	
	  VFP caused an invalid page fault in module OLEAUT32.DLL at <memory
	  address>.
	
	RESOLUTION
	==========
	
	Here is a workaround to solve the problem. This code example works like the Find
	method of the Microsoft RichText control. Place the following sample code in the
	Click event of the command button:
	
	     S=ALLTRIM(THISFORM.TEXT1.TEXT)&& Get string to find in richtext control
	     POS=AT_C(S,ThisForm.olecontrol1.TEXT) && Find the string in richtext box
	     IF (POS==0)            && not found
	        WAIT WINDOW "NOT FOUND !"
	     ELSE
	        ls=left(ThisForm.olecontrol1.TEXT,pos-1) && Select string in richtext
	        pos=lenC(ls)
	        ThisForm.olecontrol1.SelStart = pos
	        ThisForm.olecontrol1.SelLength = lenc(s)
	     ENDIF
	     ThisForm.olecontrol1.SETFOCUS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add an OLE Container Control to the form that contains a Microsoft RichText
	  Control version 5.0 or 6.0 and name it OLEcontrol1.
	
	3. Right-click OLEcontrol1 to open the RichTextCtrl Properties dialog box. Using
	  the "FileName: (load from)" combo box, change the File of Type to (*.txt) and
	  select License.txt.
	
	4. Add a command button to the form and place the following code in the Click
	  event of the command button:
	
	        =thisform.olecontrol1.find(thisform.text1.value,,,2)
	
	5. Add a text box to the form.
	
	6. Save and run the form.
	
	7. Type in a string to search for or with the text box empty, press the command
	  button and the error message appears.
	
	Additional query words: crash hang GPF
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
