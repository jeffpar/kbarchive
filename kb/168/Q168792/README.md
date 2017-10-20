---
layout: page
title: "Q168792: FIX: Statusbar Time Panel May Not Update Properly"
permalink: /kb/168/Q168792/
---

## Q168792: FIX: Statusbar Time Panel May Not Update Properly

{% raw %}

	Article: Q168792
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The StatusBar Time Panel may not update the time at frequent enough intervals
	when its style is set to Time.
	
	RESOLUTION
	==========
	
	You can work around this problem by setting the Panel Style of the StatusBar in
	the Timer Event of a Timer control.
	
	1. Start a new Standard EXE project in Visual Basic 5.0. Form1 is the default
	  form.
	
	2. Insert a StatusBar control on Form1. The default name is StatusBar1.
	
	  NOTE: If there is no StatusBar control icon in the toolbox, select Components
	  on the Project menu, check Microsoft Windows Common Controls 5.0, and click
	  OK.
	
	3. Insert a Timer control on Form1. Its default name is Timer1.
	
	4. Change the Interval property of Timer1 to 1000.
	
	5. In the Timer1_Timer event procedure, add the following line of code:
	
	        StatusBar1.Panels.Item(1).Style = sbrTime
	
	6. Run the program and note that the Time Panel updates properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start a new Standard EXE project in Visual Basic 5.0. Form1 is the default
	  form.
	
	2. Select the Project on the Components menu, check Microsoft Windows Common
	  Controls 5.0, and click OK.
	
	3. Add a StatusBar control to Form1. The default name is StatusBar1.
	
	4. Right-click StatusBar1 and click Properties to display the Property Pages
	  dialog box.
	
	5. Click the Panels tab, change Style to "5 [ASCII 150] sbrTime," and click OK.
	
	6. Run the project. Note that the StatusBar Time Panel doesn't update properly
	  over time.
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
