---
layout: page
title: "Q156672: PRB: &quot;Variable &lt;variable&gt; is not found&quot; Using #INCLUDE Files"
permalink: /kb/156/Q156672/
---

## Q156672: PRB: &quot;Variable &lt;variable&gt; is not found&quot; Using #INCLUDE Files

{% raw %}

	Article: Q156672
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 5.00
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a predefined constant is referenced in a class or form, the following error
	message may be displayed:
	
	  Variable "<variable>" is not found..
	  <Cancel> <Suspend> <Ignore> <Help>
	
	CAUSE
	=====
	
	The header file of predefined compile-time constants has not been properly
	included in the class or form.
	
	WORKAROUND
	==========
	
	Method 1
	--------
	
	Include the header file in class or form using the following steps:
	
	1. Open the class or form.
	
	2. From the Class or Form menu, choose Include File.
	
	3. In the Include File dialog box, specify the header file in the Include File
	  text box or choose the three-dot button to open the Include dialog box and
	  choose the file.
	
	Method 2
	--------
	
	Insert the #INCLUDE in the application menu's general options, in the menu setup
	snippet.
	
	Method 3
	--------
	
	In every event or method on the class or form that references the predefined
	constant, reissue the #INCLUDE "<filename>".
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Predefined constants are defined by the #DEFINE directive. Generally, a series
	of #DEFINEs is included in a header file. In turn, this header file is
	referenced by a #INCLUDE in the class or form. This error usually occurs because
	the #INCLUDE is issued in the Load event of the class or form. By the time the
	event or method is called on the class or form that references the predefined
	constants, the constant is out of scope.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. In the Load event of the form, enter the following code:
	
	     #INCLUDE C:\VFP\SAMPLES\MAINSAMP\INCLUDE\TASTRADE.H
	
	3. Add a Command button to the form. In the Click event of the Command button,
	  add the following MessageBox that references a constant in the Tastrade.H
	  file:
	
	     =MessageBox(inifile)
	
	4. Run the form, and click the Command button.
	
	REFERENCES
	==========
	
	Developer's Guide, page 228.
	
	Visual FoxPro Help file: search on: "#INCLUDE preprocessor directive" and
	"#DEFINE ... #UNDEF preprocessor directive."
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : 3.00 3.00b 5.00
	
	=============================================================================
	

{% endraw %}
