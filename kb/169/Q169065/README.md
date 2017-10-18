---
layout: page
title: "Q169065: FIX: RichText Control Displays Line Draw Characters Incorrectly"
permalink: kb/169/Q169065/
---

## Q169065: FIX: RichText Control Displays Line Draw Characters Incorrectly

	Article: Q169065
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bug
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions of the RichText control earlier than 5.00.3714 (dated January 14, 1997)
	do not display line draw characters correctly.
	
	STATUS
	======
	
	This functionality did not work correctly in earlier versions of the RichText
	control, but it works correctly in version 5.00.3714, which ships with Visual
	FoxPro 5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	There are two parts in setting up this example: Part 1 is to create a simple text
	file that contains line draw characters. Part 2 is to create the Visual FoxPro
	sample form.
	
	Part 1-Create a text file that contains line draw characters:
	
	1. Using a simple text editor such as "Edit," create a new file; for example,
	  type the following from the command prompt:
	
	        EDIT C:\RICHTEXT.TXT
	
	2. Create an ASCII-drawn plus sign by following these keystrokes:
	
	   - Hold down the Alt key, type the numbers 205 (using the numeric keypad),
	     and let go of the Alt key.
	
	   - Hold down the Alt key, type the numbers 206 (using the numeric keypad),
	     and let go of the Alt key.
	
	   - Hold down the Alt key, type the numbers 205 (using the numeric keypad),
	     and let go of the Alt key.
	
	NOTE: The resulting displayed characters should appear as an ASCII-drawn plus
	sign.
	
	1. Save the file.
	
	Part 2 - Create the sample form:
	
	1. Create a new form in Visual FoxPro by typing the following in the Command
	  window:
	
	        CREATE FORM richtext
	
	2. Change the FontName property of the form to "Terminal."
	
	3. From the Forms Control Toolbar, click the OLE Container Control button and
	  add it to the form.
	
	4. Select Insert Control on the displayed Insert Object dialog box.
	
	5. Select Microsoft RichText Control from the list of controls, and click OK.
	
	6. Click the RichText Control on the form, and right-click to bring up the
	  Shortcut menu for the control.
	
	7. Select the last option on the menu (RichtextCtrl Properties) to bring up the
	  RichtextCtrl Properties dialog box.
	
	8. Type "C:\Richtext.txt" (without the quotation marks) in the FileName box, and
	  click OK.
	
	9. Save and Run the form.
	
	NOTE: If the RichText Control is a version earlier than 5.00.3714, the characters
	displayed may not be in the image of an ASCII-drawn plus sign.
	
	Additional query words: weird foreign
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : WINDOWS:3.0,3.0b,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
