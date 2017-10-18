---
layout: page
title: "Q193540: HOWTO: Read and Display UNICODE String on Visual Basic Form"
permalink: kb/193/Q193540/
---

## Q193540: HOWTO: Read and Display UNICODE String on Visual Basic Form

	Article: Q193540
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbUnicode kbVBp kbVBp500 kbVBp600 kbGrpDSO kbDSupport
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to read a Unicode string from a Unicode text file
	and display the string on a Visual Basic form.
	
	MORE INFORMATION
	================
	
	Visual Basic is based internally on the double-byte Unicode standard. However,
	most of the world outside of Visual Basic still uses the single- byte ANSI
	model. For this reason, Visual Basic provides two sets of form controls and uses
	the ANSI set as the default control. Any strings passed to the ANSI set of form
	controls will be converted from their internal Unicode representation to an ANSI
	representation and will not display the UNICODE strings correctly. To be able to
	display the UNICODE string on a Visual Basic form, the UNICODE (Forms 2.0)
	controls must be used. The following example shows how to use the Forms 2.0
	controls to display UNICODE strings read from a Unicode text file. Because this
	behavior requires UNICODE language package support, it currently supported only
	in Windows NT.
	
	NOTE: The Forms 2.0 controls used in this article were not designed for use on
	Visual Basic forms and have not been formally tested in the environment. This
	article documents their use only in this very limited context to work around a
	limitation to the Visual Basic Intrinsic controls. Using other features of these
	controls on Visual Basic forms is not supported.
	
	Furthermore, Forms 2.0 is part of Microsoft Office and is not redistributable.
	Therefore, you cannot distribute Forms 2.0 (fm20.dll) with your application. It
	must already be on the target machines.
	
	For additional information on distributing fm20.dll, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q224305 INFO: Usage and Redistribution of FM20.DLL [OffDev]
	
	Step-by-Step Guide to Build Sample
	----------------------------------
	
	1. Install the Chinese language package on your Windows NT computer. See the
	  REFERENCES section below for installation instructions. The MingLiu font will
	  be installed automatically during this step. You can also install other
	  language packages if you want to use other UNICODE language support.
	
	2. Create a standard EXE project. Form1 is created by default.
	
	3. Select Components from the Project menu and check Microsoft Forms 2.0 Object
	  Library. Several new controls are added to the toolbox, including UNICODE
	  versions of the text box, label, and so forth.
	
	4. Add a Forms 2.0 TextBox to Form1 and keep its default name: TextBox1. Set the
	  font of the text box to be MingLiu.
	
	5. Add two CommandButtons to Form1.
	
	6. Add the following code to the code window of Form1:
	
	        Private Sub Command1_Click()
	          ' create a Unicode text file with Chinese character
	          ' Dan1 and English character D.
	          Dim a(0 To 5) As Byte
	          a(0) = &HFF
	          a(1) = &HFE
	          a(2) = &H39
	          a(3) = &H4E
	          a(4) = &H44
	          a(5) = &H0
	          Open "unicode.txt" For Binary As #1
	          Put #1, , a
	          Close #1
	        End Sub
	
	        Private Sub Command2_Click()
	          Dim txtline As String
	
	          ' you may need to change the path of the file
	          Open "unicode.txt" For Binary As #1
	
	          txtline = InputB(2, #1)  ' always FF FE, skip them
	          txtline = InputB(4, #1)
	
	          Close #1
	
	          TextBox1.Text = txtline  ' display the string
	        End Sub
	
	  Note that the UNICODE text file always begins with the Bytes FF FE, which is
	  why you need to skip these two bytes. Also note that to read UNICODE strings
	  from a file, the file needs to be opened as binary and read using InputB.
	
	7. Run the application. Click Command1 to create the Unicode text file.
	
	8. Click Command2. The Chinese character Dan1 and the English character D are
	  displayed correctly in the text box. You can also check the unicode.txt file
	  by using notepad with MingLiu font.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q177561 HOWTO: Add and Enable Additional Languages in Windows NT
	
	  Q224305 INFO: Usage and Redistribution of FM20.DLL [OffDev]
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbUnicode kbVBp kbVBp500 kbVBp600 kbGrpDSO kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
