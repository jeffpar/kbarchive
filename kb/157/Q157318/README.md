---
layout: page
title: "Q157318: DOCERR: Function Key Information Incorrect in VFP 5.0 Help"
permalink: /kb/157/Q157318/
---

## Q157318: DOCERR: Function Key Information Incorrect in VFP 5.0 Help

{% raw %}

	Article: Q157318
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is incorrect information for the function keys F2 to F9, in the "Keyboard
	differences between dBASE and Visual FoxPro" Help topic in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	The topic "Keyboard differences between dBASE and Visual FoxPro" in the Visual
	FoxPro Help file shows the following actions associated with the F2 through F9
	function keys in the section titled "Visual FoxPro and dBASE Function Key
	Assignments":
	
	  F2   Set (displays the View window)
	  F3   List
	  F4   Dir(ectory)
	  F5   Display Structure
	  F6   Display Status
	  F7   Display Memory
	  F8   Display
	  F9   Append
	
	This information is incorrect. The function keys F2 to F9 are ignored by default
	and do not perform the actions described in the Help topic. This functionality
	is provided by a Default.fky macro file, which is no longer provided. This
	functionality was removed because some of these keys are now used by the FoxPro
	Debugger, as shown in the list below:
	
	  F5         Resume
	  F6         Step Over
	  F7         Run to Cursor
	  Shift+F7   Step Out
	  F8         Step Into
	
	For more information about keyboard shortcuts in the Debugger, search for
	"Debugger Keyboard Shortcuts" in the Visual FoxPro Help file.
	
	You can assign expressions to the functions keys F2 to F9, in the configuration
	file (Config.fpw) so that they perform the actions described in the Help topic.
	
	REFERENCES
	==========
	
	For more information about setting up the Configuration file with this
	functionality, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q97052 Redefining the Function Keys in FoxPro Config File
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	

{% endraw %}
