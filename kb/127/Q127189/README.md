---
layout: page
title: "Q127189: DOCERR: Additional SourceSafe INI Settings"
permalink: /kb/127/Q127189/
---

## Q127189: DOCERR: Additional SourceSafe INI Settings

{% raw %}

	Article: Q127189
	Product(s): Microsoft SourceSafe
	Version(s): 3.04 3.10 | 3.04 3.10 | 3.04 3.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 15-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	- Microsoft SourceSafe for UNIX, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists INI settings and color strings that were not documented in
	the SourceSafe documentation.
	
	MORE INFORMATION
	================
	
	SourceSafe 3.0 INI Settings
	---------------------------
	
	The following INI settings were not documented in the SourceSafe version 3.0
	Concepts and Configuration Manual:
	
	Diff_Context - Indicates how many lines to show before and after a difference:
	
	  Syntax: Diff_Context = <n1>
	  Example: Diff_Context = 3
	
	Indicate_Expandable - Controls whether SourceSafe will put a + or - character in
	the folders (Inteface Only):
	
	  Syntax: Indicate_Expandable = <Yes|No>
	  Example: Indicate_Expandable = Yes
	
	Store_Deltas - Indicates whether changes are stored or not:
	
	  Syntax: Store_Deltas = <Yes|No>
	  Example: Store_Deltas = Yes
	
	Update_No_Conflicts - Indicates to SourceSafe to merge with no conflicts:
	
	  Syntax: Update_No_Conflicts = <Yes|No>
	  Example: Update_No_Conflicts = No
	
	Viewer_Font - Sets font attributes for any SourceSafe viewer window:
	
	  Syntax: Viewer_Font = <Font face>, <Font size>, <Font
	  weight>, <[Bold|Underline|Strikeout|Italic]>
	  Example: Viewer_Font = arial, 10
	
	SourceSafe 3.02 INI Settings
	----------------------------
	
	The following INI settings were new to version 3.02:
	
	Hist_Rect - Sets coordinates of the History window:
	
	  Syntax: Hist_Rect = <x1, y1, x2, y2>
	  Example: Hist_Rect = 65,61,966,665
	
	Preview_Rect - Sets coordinates of the Preview window:
	
	  Syntax: Preview_Rect = <x1, y1, x2, y2>
	  Example: Preview_Rect = 65,61,966,665
	
	Visual_Diff_ChangeClr - Sets color of Visual Difference Change text:
	
	  Syntax: Visual_Diff_ChangeClr = <color string| RGB value>
	  Example: Visual_Diff_ChangeClr = Green
	
	Visual_Diff_DeleteClr - Sets color of Visual Difference Delete text:
	
	  Syntax: Visual_Diff_DeleteClr = <color string| RGB value>
	  Example: Visual_Diff_DeleteClr = Green
	
	Visual_Diff_InsertClr - Sets color of Visual Difference Insert text:
	
	  Syntax: Visual_Diff_InsertClr = <color string| RGB value>
	  Example: Visual_Diff_InsertClr = Green
	
	Visual_Diff_Rect - Coordinates of a Visual Difference Window:
	
	  Syntax: Visual_Diff_Rect = <x1,y1,x2,y2>
	  Example: Visual_Diff_Rect = 65,61,966,665
	
	Color String Values
	-------------------
	
	The following color-string values were not documented in the SourceSafe 3.0
	Concepts and Configuration Manual:
	
	  Black
	  Blue
	  Green
	  Cyan
	  Red
	  Magenta
	  Yellow
	  White
	  Gray
	  Light Blue
	  Light Green
	  Light Cyan
	  Light Red
	  Light Magenta
	  Light Yellow
	
	Additional query words: ss3 vbwin 3.10
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe304Mac kbSSafe310Mac kbSSafe304UNIX kbSSafe310UNIX kbSSafe304NT kbSSafe310NT
	Version           : 3.04 3.10 | 3.04 3.10 | 3.04 3.1
	
	=============================================================================
	

{% endraw %}
