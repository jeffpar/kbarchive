---
layout: page
title: "Q145726: BUG: Setting FontTransparent Has No Effect on Windows 95/98/Me"
permalink: /kb/145/Q145726/
---

## Q145726: BUG: Setting FontTransparent Has No Effect on Windows 95/98/Me

{% raw %}

	Article: Q145726
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing under Windows 95, Windows 98, and Windows Me, the FontTransparent
	property of the Printer object fails to change the way that the text is printed
	on the background. The FontTransparent property determines whether background
	text and graphics are displayed in the spaces around and within characters. The
	Visual Basic default for this property is True, meaning that the background will
	display in the spaces around the text. Under Windows 95, Windows 98, and Windows
	Me, the text will print as if FontTransparent is set to False, even though it is
	set to True.
	
	Additionally, whenever a NewPage method is issued, all text on the new page will
	print as if FontTransparent is set to False even if it was printing correctly on
	the previous page.
	
	CAUSE
	=====
	
	The background mix mode, which directly relates to the Visual Basic
	FontTransparent property, and several other attributes of the printer device
	context, are modified at the start of a page by Windows 95, Windows 98, and
	Windows Me. This is a change in behavior from Windows NT and previous versions
	of Windows that is not addressed properly by the Visual Basic Printer Object.
	The problem should only affect the 32-bit version of Visual Basic, although some
	cases of the 16-bit version exhibiting this behavior have been reported. For
	more information on the cause, please see the following article in the Microsoft
	Windows SDK Knowledge Base:
	
	  Q125696 : StartPage/EndPage Resets Printer DC Attributes in Windows 95
	
	RESOLUTION
	==========
	
	To work around the problem, call the SetBKMode Windows API function to set the
	background mix mode. An example is shown in the More Information section below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem is printer driver-specific, meaning that the exact symptoms can
	vary from driver to driver. Some drivers do not experience this problem at all,
	while others reset the background mix mode to Opaque when any Printer object
	property is changed. This article describes the most common scenario. To make
	sure that you cover the worst possible case, you should call the SetBkMode
	function just before your Printer.Print calls. Then if you change any property
	of the Printer object, call SetBkMode again.
	
	The code to duplicate the problem is as follows:
	
	1. Start Visual Basic. From the File menu, choose New Project (ALT, F, N). Form1
	  is created by default.
	
	2. In the click event of the form, add the following code:
	
	     Private Sub Form_Click()
	
	        Printer.Line (0,0)-(10000, 2000), &HC0C0C0, BF
	        Printer.CurrentX = 0
	        Printer.CurrentY = 0
	        Printer.FontTransparent = True
	        Printer.Print "Printer.FontTransparent = " & Printer.FontTransparent
	        Printer.FontTransparent = False
	        Printer.Print "Printer.FontTransparent = " & Printer.FontTransparent
	        Printer.EndDoc
	
	     End Sub
	
	3. From the Run menu, choose start (ALT, R, S), or press the F5 key to run the
	  program.
	
	4. Click the form. The result should be a gray page with one line of black text
	  in the upper left corner and another line of black text in a white box
	  beneath the first. On Windows 95, Windows 98, and Windows Me, this will yield
	  a gray page with a white box and black text for both lines.
	
	The following steps correct the problem in the previous example:
	
	1. Add the following declarations to the General section of the form:
	
	     #If Win32 Then
	
	        Private Declare Function SetBkMode Lib "gdi32"  _
	        (ByVal hdc As Long, ByVal nBkMode As Long) As Long
	
	        Private iBKMode as Long
	
	     #Else
	
	        Private Declare Function SetBkMode Lib "GDI" (ByVal hDC As Integer _
	         , ByVal nBkMode As Integer) As Integer
	
	        Private iBKMode as Integer
	
	     #End If
	
	        Private Const TRANSPARENT = 1
	        Private Const OPAQUE = 2
	
	2. Correct the code in the click event of the form as such:
	
	      Private Sub Form_Click()
	
	         Printer.Print ""
	         Printer.Line (0,0)-(10000, 2000), &HC0C0C0, BF
	         Printer.CurrentX = 0
	         Printer.CurrentY = 0
	         Printer.FontTransparent = True
	         'Correctly sets the background mix mode to transparent
	         iBKMode = SetBKMode(Printer.Hdc, TRANSPARENT)
	         Printer.Print "Printer.FontTransparent = " & Printer.FontTransparent
	         Printer.FontTransparent = False
	         'Correctly sets the background mix mode to opaque
	         iBKMode = SetBKMode(Printer.Hdc, OPAQUE)
	         Printer.Print "Printer.FontTransparent = " & Printer.FontTransparent
	         Printer.EndDoc
	
	      End Sub
	
	3. From the Run menu, choose start (ALT, R, S), or press the F5 key to run the
	  program.
	
	4. Click the form. The text should now print as expected.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q183163 BUG: Setting Orientation Changes Background Mix Mode for Printer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
