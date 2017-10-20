---
layout: page
title: "Q178167: FIX: GeoFacts Sample Causes Automation Error on NT"
permalink: /kb/178/Q178167/
---

## Q178167: FIX: GeoFacts Sample Causes Automation Error on NT

{% raw %}

	Article: Q178167
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbAutomation kbVBp kbVBp400bug kbVBp500bug kbVBp600fix kbOSWin95 kbOSWin98 kbGrpDSVB kb
	Last Modified: 26-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GeoFacts.vbp sample project fails with the following run-time error when run
	on a Windows NT or Windows 2000 machine:
	
	  Run-time error '-2147467259 (80004005)':
	  Automation error
	
	This error does not occur on a Windows 95, Windows 98, or Windows Me machine.
	
	CAUSE
	=====
	
	The run-time error occurs on the following line of code:
	
	     Set shtWorld = GetObject("world.xls")
	
	The GetObject function fails because the full path to world.xls is not specified
	in the argument.
	
	RESOLUTION
	==========
	
	When using the GetObject function, make sure that the full path to the file name
	is specified. To correct the code in the GeoFacts.vbp sample, change the
	following line of code (located in the Setup procedure in Module1):
	
	     Set shtWorld = GetObject("world.xls")
	
	to:
	
	     Set shtWorld = GetObject(app.path & "\world.xls")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q143461 XL97: CreateObject and GetObject Work Differently
	
	  Q178166 PRB: GeoFacts Sample Causes Type Mismatch Error with Excel 97
	
	Additional query words: 'world.xls'
	
	======================================================================
	Keywords          : kbAutomation kbVBp kbVBp400bug kbVBp500bug kbVBp600fix kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
