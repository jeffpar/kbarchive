---
layout: page
title: "Q216211: PRB: Extended ASCII Characters Displayed as &quot;?&quot;"
permalink: /kb/216/Q216211/
---

## Q216211: PRB: Extended ASCII Characters Displayed as &quot;?&quot;

{% raw %}

	Article: Q216211
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbString kbUnicode kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbOSWinNT400sp4 kbGrpDSV
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use extended ASCII characters in a Visual Basic project and build the
	project under Windows 95 or Windows NT (pre-SP4), some of the characters become
	"?" when the application is run under Windows 98, Windows Me, Windows NT SP4, or
	Windows 2000. The same application works correctly under Windows 95 or Windows
	NT (pre-SP4).
	
	CAUSE
	=====
	
	The problem is caused by the UNICODE to ANSI conversion. The code page 1252
	(ANSI) used by Windows 98, Windows Me, Windows NT 4.0 SP4, and Windows 2000 is
	different than the one used by Windows 95 and Windows NT 4.0 (pre-SP4), so the
	transformation for extended ASCII characters is different. For example, the
	following code will display 128 in Windows 95 but 8364 in Windows 98, Windows
	Me, and Windows 2000:
	
	  Dim str as String
	  str = Chr$(&H80)
	  MsgBox AscW(str)
	
	When you store a string containing Chr$(&H80) in a property bag, a file, or
	declare it as a const value on a Windows 95 computer, a two-byte value of 128
	will be stored for Chr$(&H80). If you then read the information on a Windows
	98, Windows Me, or Windows 2000 computer, the operating system will be unable to
	find a match between the UNICODE value 128 and an ANSI character. As a result,
	"?" will be used to represent that character.
	
	RESOLUTION
	==========
	
	Use a byte array instead of a string to store the extended ASCII characters if
	you need to use them. You can use either the CopyMemory API or the StrConv
	function to convert the string to a byte array.
	
	MORE INFORMATION
	================
	
	The following samples use a property bag to demonstrate the problem.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click Add Usercontrol. Select User Control in the Add
	  User Control dialog box and click Open.
	
	3. Paste the following code in the General Declarations section of UserControl1:
	
	  Option Explicit
	
	  Dim m_Test As String
	
	  Public Property Get Test() As String
	     Test = m_Test
	  End Property
	
	  Public Property Let Test(ByVal New_Test As String)
	     m_Test = New_Test
	     PropertyChanged "Test"
	  End Property
	
	  Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	     m_Test = PropBag.ReadProperty("Test", "")
	  End Sub
	
	  Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
	     MsgBox "Writing Test..."
	     Dim a As String
	     a = "bad" & Chr(128) & "bad"
	     Call PropBag.WriteProperty("Test", a, "")
	  End Sub
	
	4. Close the Usercontrol's design window and add a UserControl1 to Form1.
	
	5. Paste the following code in the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	     MsgBox UserControl11.Test & vbCrLf & "Asc for bad Char:" & Asc(Mid(UserControl11.Test, 4, 1))
	  End Sub
	
	6. On the File menu, click Make Project1.exe on a Windows 95 system. Save your
	  project.
	
	7. Run Project1.exe and note that it displays a message box showing that the bad
	  character's ASCII value is 128.
	
	8. Copy Project1.exe to a Windows 98 or Windows 2000 system and run it. The
	  ASCII value displayed changes to 63 (which is the "?" character).
	
	Steps To Correct the Problem in Visual Basic 6.0
	------------------------------------------------
	
	1. Use Visual Basic 6.0 to open the project you created earlier.
	
	2. Open the code window of UserControl1 and replace the code there with the
	  following:
	
	  Option Explicit
	
	  Dim m_Test() As Byte
	
	  Public Property Get Test() As String
	     Test = StrConv(m_Test, vbUnicode, 1033)
	  End Property
	
	  Public Property Let Test(ByVal New_Test As String)
	     m_Test = StrConv(New_Test, vbFromUnicode, 1033)
	     PropertyChanged "Test"
	  End Property
	
	  Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	     m_Test = PropBag.ReadProperty("Test", "")
	  End Sub
	
	  Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
	     MsgBox "Writing Test..."
	     Dim a As String
	     Dim b() As Byte
	     a = "bad" & Chr(128) & "bad"
	     b = StrConv(a, vbFromUnicode, 1033)
	     Call PropBag.WriteProperty("Test", b, "")
	  End Sub
	
	3. Select the Properties Window for UserControl11. Set the Test property to
	  "abcdefg," forcing the update of the call to the write properties.
	
	4. Build the project again under Windows 95. Run it under Windows 95 and note
	  that the correct information is displayed. Copy the EXE file to a Windows 98,
	  Windows Me, or Windows 2000 system and run it there. The correct value is
	  displayed.
	
	REFERENCES
	==========
	
	For additional information about the new code page 1252 (ANSI) and why it is
	changed, please see the following article in the Microsoft Knowledge Base:
	
	  Q197368 Code Page 1252 Includes New Characters
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbString kbUnicode kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbOSWinNT400sp4 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
