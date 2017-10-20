---
layout: page
title: "Q151637: PRB: Visual FoxPro Mac Cannot Understand Apple Object Types"
permalink: /kb/151/Q151637/
---

## Q151637: PRB: Visual FoxPro Mac Cannot Understand Apple Object Types

{% raw %}

	Article: Q151637
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Visual FoxPro for Power Macintosh does not support the Apple Object
	Model. Apple Objects such as "paragraph" , "word", "range", etc., cannot be
	passed directly or indirectly to Visual FoxPro for Power Macintosh.
	
	WORKAROUND
	==========
	
	You can cast or change the object, or a property of the object, into a simple
	data type that Visual FoxPro understands.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following examples illustrate the problem and the workaround:
	
	Enter the script:
	
	     -- Save this script as "Excel2VFP"
	     tell application "Microsoft Excel"
	        Activate
	        set Range "R1C1" to "Data to go to Visual FoxPro"
	        get Range "R1C1"
	        --get Value of Range "R1C1"
	        set myVar to the result
	     end tell
	
	     tell application "Microsoft Visual FoxPro"
	        Activate
	        Do Script "SET DEFAULT TO HOME()"
	        Do Script "DO TEST WITH '"& myVar &"'"
	     end tell
	
	Enter the Visual FoxPro program:
	
	     * Save this program as "Test" in the Visual FoxPro folder
	     PARAMETER MyVar
	
	     LenMyVar = LEN(MyVar)
	     =MessageBox("The length of the data from Excel is ";
	      +LEFT(STR(LenMyVar)))
	
	Run the script and note that you get the following error message:
	
	  Can't make {...} into a string
	
	What you attempted to do was try to pass an Excel "Range" to Visual FoxPro, which
	does not understand what a range of cells is. To work around this behavior,
	comment out the line [get Range "R1C1"] and uncomment the line [--get Value of
	Range "R1C1"].
	
	Save the script, run it, and note that the process works properly because Visual
	FoxPro understands the "Value of" simple string type that is passed.
	
	Following is another example of an attempt to pass data to Visual FoxPro. This
	example also fails initially, but returns a different error message.
	
	Enter the script:
	
	     -- Save this script as "STE2VFP"
	     tell application "Scriptable Text Editor"
	        activate
	        open file "Macintosh HD:TestText"
	        get contents of document 1
	        -- get contents of document 1 as string
	        set myVar to the result
	        quit
	     end tell
	
	     tell application "Microsoft Visual FoxPro"
	        Activate
	        Do Script "SET DEFAULT TO HOME()"
	        Do Script "DO TEST2 WITH '"& myVar &"'"
	     end tell
	
	Enter the Visual FoxPro program:
	
	     * Save this program as "Test2" in the Visual FoxPro folder
	     PARAMETER MyVar
	
	     LenMyVar = LEN(MyVar)
	     =MessageBox("The length of the data from Scriptable Text Editor is ";
	      +LEFT(STR(LenMyVar)))
	
	Enter the Scriptable Text Editor file 'TestText':
	
	  This is a test of VFP and AppleScript.
	
	After you create the files and you run the script, STE2VFP, you will get the
	following error message:
	
	  Microsoft Visual FoxPro got an error: "do test2 with 'This is a test of VFP
	  and AppleScript.' doesn't understand the Do Script message.
	
	Once you have cleared the error message, edit the script STE2VFP. Comment out the
	line [get contents of document 1] and uncomment the line [-- get contents of
	document 1 as string]. Save the script and run it. You will get a dialog window
	from Visual FoxPro displaying the number of characters in the string that was
	passed.
	
	NOTE: You cannot pass a string longer than 255 characters to Visual FoxPro in
	this manner. If you attempt to pass a longer string, Visual FoxPro appears to
	hang on the Do Script command used to pass the variable to Visual FoxPro. To
	pass strings longer than 255 characters, use an ASCII text file that Visual
	FoxPro can append into a memo field or that can be read using low-level file
	I/O.
	
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
