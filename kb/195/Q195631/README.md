---
layout: page
title: "Q195631: PRB: Effects of Operating System Version On TextBox Alignment"
permalink: kb/195/Q195631/
---

## Q195631: PRB: Effects of Operating System Version On TextBox Alignment

	Article: Q195631
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbEditCtrl kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The value of the "Alignment" property of a TextBox control is ignored and the
	default of "left aligned" is applied on some systems. The same application
	installed on other systems does not exhibit this behavior.
	
	CAUSE
	=====
	
	Visual Basic derives its TextBox control from a proprietary class called
	"ThunderTextBox," which in turn is based on the "Edit" class provided by the
	operating system. Because the operating system defines the "Edit" class, some of
	the properties and functionality of a TextBox may change depending upon the
	version of the operating system where the application is executed. This is the
	case with the TextBox's Alignment property. In earlier versions of Windows,
	changes to the "Alignment" property would not take effect unless the "MultiLine"
	property of the TextBox was set to "True." The latest versions of the Windows
	operating system no longer have this limitation.
	
	Any control from any development environment that is derived from the "Edit"
	class will demonstrate the same change in behavior.
	
	Versions of Windows that require the "MultiLine" property to be set to "True" in
	order for the "Alignment" property to take effect include:
	
	  Windows 95 (regardless of service packs)
	  Windows NT 3.51 (regardless of service packs)
	  Windows NT 4.0
	  Windows NT 4.0 with Service Packs 1 or 2
	
	Versions of Windows that do not have this requirement include:
	
	  Windows 98
	  Windows Me
	  Windows NT 4.0 with Service Pack 3 or higher
	
	RESOLUTION
	==========
	
	There are two approaches for working around this inconsistency:
	
	- Assume the older operating system limitation is being enforced and set the
	  TextBox control's "MultiLine" property to "True."
	
	- Use multiple overlapping TextBox controls and vary which one is visible
	  depending on the operating system in use (checked via API) and the alignment
	  desired.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q189249 HOWTO: Determine Which 32-Bit Windows Version Is Being Used
	
	  Q111952 HOWTO: Right Justify/Center Text in Single-Line Text Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbEditCtrl kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
