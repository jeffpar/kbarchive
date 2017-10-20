---
layout: page
title: "Q171730: WD97: How to Retain the Template View in the New Dialog Box"
permalink: /kb/171/Q171730/
---

## Q171730: WD97: How to Retain the Template View in the New Dialog Box

{% raw %}

	Article: Q171730
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the template view (large icons, list, or details) in the New
	dialog box (on the File menu, click New), the selected view will be retained for
	the current session of Microsoft Word. When you close Word, the view reverts to
	large icons.
	
	CAUSE
	=====
	
	By default, the New dialog box for all Microsoft Office 97 programs uses the
	large icon view.
	
	WORKAROUND
	==========
	
	Microsoft provides examples of Visual Basic for Applications procedures for
	illustration only, without warranty either expressed or implied, including, but
	not limited to the implied warranties of merchantability and/or fitness for a
	particular purpose. The Visual Basic procedures in this article are provided 'as
	is' and Microsoft does not guarantee that they can be used in all situations.
	While Microsoft support professionals can help explain the functionality of a
	particular macro, they will not modify these examples to provide added
	functionality, nor will they help you construct macros to meet your specific
	needs. If you have limited programming experience, you may want to consult one
	of the Microsoft Solution Providers. Solution Providers offer a wide range of
	fee-based services, including creating custom macros. For more information about
	Microsoft Solution Providers, call Microsoft Customer Information Service at
	(800) 426-9400.
	
	The following sample Visual Basic for Applications macro provides a method you
	can use to set the view automatically each time you access the New dialog box.
	
	The example macro uses the SendKeys statement to send the required keystroke
	combination for switching views. The keystrokes for changing the view in the New
	dialog box are listed in the following table.
	
	  Press this       To display the files this way
	  -----------------------------------------------
	
	  ALT+1            Large Icons
	  ALT+2            List
	  Alt+3            Details
	
	Sample Macro
	------------
	
	     Sub FileNew()
	        SendKeys ("%3") ' To change the type of view, change this number.
	        Dialogs(wdDialogFileNew).Show
	     End Sub
	
	In this example, the New dialog box will be displayed with details (ALT+3)
	selected for the template view. To change the macro so that the dialog box
	displays the templates in list view, change the number 3 to the number 2.
	
	NOTE: The macro MUST be called FileNew for this example to work when you click
	New on the File menu.
	
	Additional query words: wordcon
	
	======================================================================
	Keywords          : kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
