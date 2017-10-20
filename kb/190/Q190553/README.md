---
layout: page
title: "Q190553: INFO: Do Not Use VB Color Constants in DHTML Page Designer"
permalink: /kb/190/Q190553/
---

## Q190553: INFO: Do Not Use VB Color Constants in DHTML Page Designer

{% raw %}

	Article: Q190553
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDHTML kbInternet kbPageDesigner kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 22-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Explorer and Visual Basic use different formats for Color literals.
	Internet Explorer's Object model uses a format of RRGGBB whereas Visual Basic
	uses the format BBGGRR. When attempting to chance colors of Dynamic HTML
	elements in your DHTML Page Designer project, use the RRGGBB format. Do not use
	Visual Basic color constants such as vbRed and vbBlue.
	
	MORE INFORMATION
	================
	
	You will not be able to use Visual Basic's constants vbRed and vbBlue when
	programming for the Internet Explorer's object model. Following are examples of
	problems you will see when writing code in Visual Basic 6.0 DHTML Page Designer
	object using these constants:
	
	  
	
	  field1.style.color=vbRed    'Will cause the text to be Blue
	  field1.style.color=vbBlue   'Will cause the text to be Red
	  field1.style.color=vbGreen  'Will cause the text to be Green
	
	You will not be able to use the RGB function such as Hex(RGB(0, 0, 255)) to
	specify colors for Dynamic HTML elements.
	
	To change the color of the Dynamic HTML elements in your DHTML Page Designer
	project, use the RRGGBB (where R=Red, G=Green, and B=Blue) color constants.
	
	The same applies to creating color constants for use in WebClasses in Visual
	Basic 6.0 IIS Applications. Use the RRGGBB format color constants.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDHTML kbInternet kbPageDesigner kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
