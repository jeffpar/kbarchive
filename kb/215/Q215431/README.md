---
layout: page
title: "Q215431: BUG: Cannot Get TreeView Property or Method Topics from the IDE"
permalink: kb/215/Q215431/
---

## Q215431: BUG: Cannot Get TreeView Property or Method Topics from the IDE

	Article: Q215431
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to find more information about a TreeView control property or
	method by doing one of the following:
	
	- typing the property or method and then pressing the F1 key,
	
	-or-
	
	- highlighting the property or method in the Object Browser and pressing the F1
	  key,
	
	this error message appears:
	
	  No help available.
	
	The expected behavior is that the appropriate Help Topic is displayed.
	
	RESOLUTION
	==========
	
	To work around this bug, open the Windows CE Toolkit for Visual Basic Online
	Help and search for the appropriate topic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following properties and methods are inaccessible from the design
	environment or from the Object Browser:
	
	Treeview Properties and Methods
	
	- Event_Cancel Property
	- FontBold Property
	- FontItalic Property
	- FontName Property
	- FontSize Property
	- FontStrikethrough Property
	- FontUnderline Property
	- GetVisibleCount
	- HideSelection Property
	- ImageList Property
	- LabelEdit Property
	- LineStyle Property
	- NodeClick Property
	- Nodes Property
	- PathSeparator Property
	- SelectedItem Property
	- Sorted Property
	- StartLabelEdit
	- Style Property
	
	Node Members
	
	- Child Property
	- Children Property
	- EnsureVisible Method
	- Expanded Property
	- FirstSibling Property
	- Full Path Property
	- Image Property
	- Index Property
	- Key Property
	- LastSibling Property
	- Next Property
	- Parent Property
	- Parent Property
	- Previous Property
	- Root Property
	- Selected Property
	- SelectedImage Property
	- Sorted Property
	- Text Property
	
	Nodes Members
	
	- Add Method
	- Clear Property
	- Count Property
	- Items Property
	- Remove Property
	
	Additional query words: vbce vbce6 wince
	
	======================================================================
	Keywords          : kberrmsg kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
