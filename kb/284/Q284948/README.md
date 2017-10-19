---
layout: page
title: "Q284948: BUG: Text Containing Single LF or CR Becomes CR/LF on Win2000"
permalink: /kb/284/Q284948/
---

## Q284948: BUG: Text Containing Single LF or CR Becomes CR/LF on Win2000

	Article: Q284948
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbother kbOSWin2000 kbVBp kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet kbWin2000PreSP3Fi
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you assign text that contains a single line feed character (LF, which is
	ASCII Character 10) or a single carriage return character (CR, which is ASCII
	Character 13) to the RichTextBox control, the text is modified when Riched20.dll
	processes the EM_STREAMIN and EM_STREAMOUT messages to include both a carriage
	return and line feed character (CR/LF).
	
	This behavior only occurs on Windows 2000 and has changed (and thus regressed)
	since Microsoft Windows NT 4.0 Service Pack 6 (SP6). In Windows NT 4.0 SP6, the
	text remains unmodified.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time    Version        Size     File name
	  -------------------------------------------------------
	  4/16/2001  04:31p   5.30.23.1207   412,432  Riched20.dll 
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Steps to Reproduce Behavior
	---------------------------
	
	Scenario 1:
	
	1. On a Windows 2000-based computer, open Visual Basic 6.0.
	
	2. Create a new Standard EXE project with the sample code that is provided in
	  the following Microsoft Knowledge Base article:
	
	  Q146022 HOWTO: Set Up the RichTextBox Control for WYSIWYG Printing
	
	3. Run the project, and load a Unix-formatted TextFile, which uses LF characters
	  only. Under Windows 2000, an infinite loop occurs in the following section of
	  code:
	
	      ' Get length of text in RTF.
	      TextLength = Len(RTF.Text)
	      
	      ' Loop printing each page until done.
	      Do
	          ' Print the page by sending EM_FORMATRANGE message.
	          NextCharPosition = SendMessage(RTF.hWnd, EM_FORMATRANGE, True, fr)
	          If NextCharPosition >= TextLength Then
	              Exit Do 'If done then exit
	          End If
	          fr.chrg.cpMin = NextCharPosition ' Starting position for next page
	          fr.hdc = Printer.hdc
	          fr.hdcTarget = Printer.hdc
	      Loop
	
	  SendMessage seems to be operating on the original, unconverted data, while the
	  Len function returns results based on the CR/LF pairs.
	
	Scenario 2:
	
	1. On a Windows 2000-based computer, open Visual Basic 6.0.
	
	2. Create a new Standard EXE project. Form1 is created by default.
	
	3. From the Project menu, select Components. In the resultant dialog box, select
	  the "Microsoft RichTextBox Control" check box, and then click OK. A
	  RichTextBox icon appears on the controls Toolbox on the left.
	
	4. Place a RichTextBox control on Form1.
	
	5. Double-click on Form1 to bring up the code window. Add the following code to
	  Sub Form_Load:
	
	  Dim str As String
	  Dim strLastChar As String
	  Dim strSecondToLastChar As String
	
	  RichTextBox1.Text = "Item" & Chr(10)
	
	  ' Cache the richtext string.
	  '
	  str = RichTextBox1.Text
	
	  ' Pull the last and second to last characters.
	  '
	  strLastChar = Right(str, 1)
	  strSecondToLastChar = Mid(str, Len(str) - 1, 1)
	
	  ' Display the string length and ASCII.
	  '
	  MsgBox Len(RichTextBox1.Text) & " " & Asc(strSecondToLastChar) _
	     & " " & Asc(strLastChar)
	
	6. Press the F5 key to run the project. The message box displays "6 13 10". The
	  string is 6 characters long and ends in an ASCII 13 (carriage return) and
	  ASCII 10 (line feed) combination. This means that an ASCII 13 character
	  (carriage return) is inserted into the string either at the time the text is
	  set or before it is returned by Riched20.dll.
	
	On Windows NT 4.0 SP6, the string "5 109 10" is returned. The string is 5
	characters long and ends in an ASCII 109 "m" and ASCII 10 (line feed) character
	combination.
	
	Scenario 2 becomes more problematic in the following case:
	
	1. Close Form1 to stop the project.
	
	2. Replace the Form_Load code with the following code:
	
	  RichTextBox1.Text = "Item" & Chr(10)
	  RichTextBox1.Span Chr(10), , True
	  MsgBox Len(RichTextBox1.SelText)	
	
	3. Press F5 to run the project. SelText has a length of 6 characters: the "Item"
	  string, followed by a carriage return and line feed. On Windows NT 4.0 SP6,
	  the return string contains the 4 characters, "Item", as expected.
	
	Additional query words: kbOther RichEdit Riched20
	
	======================================================================
	Keywords          : kbother kbOSWin2000 kbVBp kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
