---
layout: page
title: "Q138928: FIX: Custom Key Assignments May Not Work as Expected"
permalink: /kb/138/Q138928/
---

## Q138928: FIX: Custom Key Assignments May Not Work as Expected

{% raw %}

	Article: Q138928
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 2.20 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC600fix kbGrpDSToo
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual C++ 4.x Help file gives the following incorrect information:
	
	  If you define a keyboard shortcut for the Main editor, the shortcut will work
	  no matter which editor you're using.
	
	NOTE: To view this information, choose Finding Information, select Special
	Features, and then select Customizing the Keyboard and Toolbars from Infoview.
	
	NOTE: This line no longer appears in Visual C++ 6.0. However, the information
	about keyboard shortcuts is still useful in Visual C++ 6.o.
	
	When making custom key assignments, you should make sure the editor you're making
	changes to has precedence. The editors (Main, InfoViewer, Text, Dialog, or
	Image) are layered in two tiers. The Main editor has the lowest priority, and
	all other editors share a higher priority. These editors are mutually exclusive
	so only one editor other than Main is active at any one time.
	
	MORE INFORMATION
	================
	
	With Visual C++ 4.x, in the Customize dialog box, which is reached by clicking
	Customize menu on the Tools menu, each editor in the list provides default
	settings. For the editor you designate, the command shortcut key you specify
	overrides any previous assignment for that key in that editor. It also overrides
	any default shortcut key specified in the Main editor for that command.
	
	For example, assign F2 to a command in the Text editor and assign F2 to a
	different command in the Main editor. When the Text editor has the focus, the
	Text editor functionality will be called rather than the Main editor function.
	
	If you observe that a custom key assignment to the Main editor is failing, this
	is most likely the reason. You should look in the other editors for a key
	assignment using the same keys. With Visual C++ 4.0, you can view a list of all
	the key assignments by clicking Keyboard on the Help menu. In Visual C++ 5.0,
	click Keyboard Map from the Help menu.
	
	The primary purpose of each editor is:
	
	  Text         Manages, edits, and prints source files.
	  Dialog       Creates or edits dialog box templates or resources
	  Image        Edits bitmaps, icons, and cursors
	  InfoViewer   Displays infoViewer topics such as help
	  Main         Provides defaults settings that can be overridden
	
	NOTE: The InfoViewer editor no longer exists in Visual C++ 6.0, which uses HTML
	Help instead for its help system.
	
	REFERENCES
	==========
	
	For more information and an example of this functionality, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q138136 How to Assign the F8 Key to DebugStepInto in Visual C++ 4.x
	
	  Q120918 Visual C++ Vers 2.0 README.WRI, Part 2 Development Environment
	
	Additional query words: kbVC400bug kbinf 2.00 2.10 2.20 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC200 kbVC210 kbVC32bitSearch
	Version           : 2.00 2.10 2.20 4.00 4.10 4.20
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
