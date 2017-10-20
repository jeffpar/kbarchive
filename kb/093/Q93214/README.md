---
layout: page
title: "Q93214: Name Property Cannot Be Set When Using Implicit Property"
permalink: /kb/093/Q93214/
---

## Q93214: Name Property Cannot Be Set When Using Implicit Property

{% raw %}

	Article: Q93214
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 2.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On Page 126 of the Visual Basic Programmer's Guide, it incorrectly states that
	all controls have an implicit property you can use for storing or retrieving
	values. Some controls supplied with the Professional Edition of Visual Basic for
	Windows use the Name property as their implicit property, which you cannot use
	at run-time.
	
	MORE INFORMATION
	================
	
	The following controls from the Visual Basic Professional Edition use the Name
	property as their implicit property:
	
	  Common dialog
	  MAPI session
	  MAPI message
	  Spin button
	
	Attempting to access the implicit property of these controls results in one of
	the following errors:
	
	  'Name' property cannot be read at run time
	  'Name' property cannot be set at run time
	
	You access the implicit property of a control (also known as the "value of a
	control" or the "default value of a control") by writing the control name with
	no property. For example, with a text box named Text1, you can write the
	following statement to assign a value to the Text property:
	
	     Text1 = "hello world"
	
	The following list shows the implicit properties for all the controls in both the
	Standard and Professional Editions:
	
	Standard Control        Implicit Property
	----------------------  ------------------
	Check box               Value
	Combo box               Text
	Command button          Value
	Directory list box      Path
	Drive list box          Drive
	File list box           FileName
	Frame                   Caption
	Grid                    Text
	Image                   Picture
	Label                   Caption
	Line                    Visible
	List box                Text
	Menu                    Enabled
	OLE client              Action
	Option button           Value
	Picture box             Picture
	Scroll bar vertical     Value
	Scroll bar horizontal   Value
	Shape                   Shape
	Text box                Text
	Timer                   Enabled
	
	Professional Control    Implicit Property
	----------------------  ------------------
	3D check box            Value
	3D command button       Value
	3D frame                Caption
	3D group push button    Value
	3D option button        Value
	3D panel                Caption
	Animated button         Value
	Common dialog           Name (not usable)
	Communications          Input
	Gauge                   Value
	Graph                   QuickData
	Key status              Value
	MAPI session            Name (not usable)
	MAPI message            Name (not usable)
	Masked edit             Text
	Multimedia MCI          Command
	Pen BEdit               Text
	Pen HEdit               Text
	Pen ink on bitmap       Picture
	Pen on-screen keyboard  Visible
	Picture clip            Picture
	Spin button             Name (not usable)
	
	Additional query words: 2.00 docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB200
	Version           : :2.0
	
	=============================================================================
	

{% endraw %}
