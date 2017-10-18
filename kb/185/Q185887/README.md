---
layout: page
title: "Q185887: DOC: Incomplete Documentation for SelPrint Method"
permalink: kb/185/Q185887/
---

## Q185887: DOC: Incomplete Documentation for SelPrint Method

	Article: Q185887
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SelPrint Function of the RichTextBox Control now has an optional second
	parameter that is not documented in the Online Help. The information below can
	also be found in the Readmevb.htm on the Visual Basic 6.0 CD.
	
	MORE INFORMATION
	================
	
	RichTextBox Control: SelPrint Method Has New Argument
	-----------------------------------------------------
	
	The SelPrint method now features a second, optional argument. The syntax and part
	descriptions are shown below:
	
	Syntax object.SelPrint(lHDC As Long, [vStartDoc])
	
	The SelPrint method syntax has these parts:
	
	Part          Description
	---------------------------------------------------------------------------
	object        An object expression that evaluates to a RichTextbox control.
	
	lHDC          Long. The device context of the device you plan to use to
	             print the contents of the control.
	
	vStartDoc     Boolean. Specifies the behavior of the control regarding
	             startdoc and enddoc printer control operations, as shown in
	             settings.
	
	Settings
	
	The settings for vStartDoc are:
	
	Constant        Value           Description
	-----------------------------------------------------------------------------
	True            -1              (Default) The control retains its original
	                               behavior and sends startdoc and enddoc
	                               commands to the printer.
	
	False            0              The control does not send startdoc and
	                               Enddoc commands, but sends only startpage
	                               and endpage commands to the printer.
	
	Remarks:
	
	The argument was added to remedy situations when printers do not print with the
	default behavior. When the SelPrint method is invoked, both Visual Basic and the
	RichTextBox control send startdoc and enddoc commands to the printer resulting
	in a nested pair of startdoc/enddoc commands. Some printers respond only to the
	first pair of commands and thereby become disabled when the RichTextbox control
	sends the second pair. In that case, setting the vStartDoc argument to False
	prevents the second pair of commands from being sent.
	
	REFERENCES
	==========
	
	Readmevb.htm, Visual Basic 5.0, Visual Basic CD
	
	If you execute an EndDoc after a SelPrint method, you may receive the run- time
	error 482 'Printer Error'. For more information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q184899 : PRB: SelPrint Method Issues an EndDoc When Printing
	
	Additional query words: kbDSupport kbDSD kbCtrl kbPrinting kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	
	=============================================================================
	
