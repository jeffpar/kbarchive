---
layout: page
title: "Q264405: PRB: Out of Memory Error Adding GIF Files to RichTextBox Control"
permalink: /kb/264/Q264405/
---

## Q264405: PRB: Out of Memory Error Adding GIF Files to RichTextBox Control

	Article: Q264405
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbCodeSnippet kbOSWin
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Microsoft Windows 2000, when you add a Graphics Interchange Format (GIF) file
	to a RichTextBox control followed by the addition of another GIF, you get the
	following error message:
	
	  Runtime Error 7: Out of Memory
	
	Under Microsoft Windows 9x or Microsoft NT 4.0, the error message appears when
	you add the first GIF to the RichTextBox.
	
	CAUSE
	=====
	
	The addition of the first GIF file spawns the Photo Editor, which causes an
	error message under Windows 9x or NT 4.0. Under Windows 2000, when the second
	GIF file is added, the error occurs because Photo Editor is already open. So
	under Windows 2000, if you close the Photo Editor manually before executing the
	line of code that adds the second GIF, the error does not occur.
	
	RESOLUTION
	==========
	
	The workaround is to convert the GIF files into bitmaps (BMP) by saving them
	from a PictureBox control. Adding a BMP to a RichTextBox invokes the in-place
	activated Paint Editor instead of the Photo Editor.
	
	In the following sample, you need to change the GIF file names to match the files
	that you are using on your system.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a PictureBox control to Form1 and set its Visible property to False.
	
	3. Add the RichTextBox control to the Toolbox.
	
	4. On the Project menu, click to select Components, select the Microsoft Rich
	  Textbox Control , and then click OK.
	
	5. Add a RichTextBox control to Form1.
	
	6. Place two GIF files in the application folder. This is the folder that
	  contains the project file (.vbp) or executable file (.exe). For new (unsaved)
	  projects, this is the ...\vb98 folder by default. Make sure that the actual
	  file names are used in the following code or an else an error occurs.
	
	7. Add the following code to Form1:
	
	  Private Sub Form_Click()
	      RichTextBox1.Text = ""
	      Picture1.Picture = LoadPicture(App.Path & "\c663dn5a.gif")
	      DoEvents
	      SavePicture Picture1.Picture, App.Path & "\c663dn5a.bmp"
	      DoEvents
	      RichTextBox1.OLEObjects.Add , , App.Path & "\c663dn5a.bmp"
	      DoEvents
	      
	      RichTextBox1.SelStart = 1
	      
	      Picture1.Picture = LoadPicture(App.Path & "\c663dn5b.gif")
	      DoEvents
	      SavePicture Picture1.Picture, App.Path & "\c663dn5b.bmp"
	      DoEvents
	      RichTextBox1.OLEObjects.Add , , App.Path & "\c663dn5b.bmp"
	      
	      RichTextBox1.SelStart = Len(RichTextBox1.Text)
	  End Sub
	
	  Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
	      RichTextBox1.OLEObjects.Clear
	  End Sub
	
	8. Run the project, and note that both images are loaded into the RichTextBox.
	
	MORE INFORMATION
	================
	
	The Photo Editor, which ships with Microsoft Office, is not an in-place
	activated application. Other OLE Servers for GIF files may or may not experience
	a similar problem. Note that if you do not have Photo Editor (or some other OLE
	Server for GIF files) on your system, the GIF files are loaded as icons only, so
	the error does not occur.
	
	Steps to Reproduce Behavior
	---------------------------
	
	You need to change the following code sample to use GIF files from your system.
	Otherwise you receive an error message indicating that the file was not found.
	
	1. On a system where Photo Editor is installed, start a new Standard EXE project
	  in Visual Basic. Form1 is created by default.
	
	2. Add the RichTextBox control to the Toolbox.
	
	3. On the Project menu, click to select Components, select Microsoft Rich
	  Textbox Control, and then click OK.
	
	4. Add a RichTextBox control to Form1.
	
	5. Add the following code to the code window of Form1:
	
	  Private Sub Form_Load()<BR/>
	     ' Use a path and file names for GIF files on your system
	     RichTextBox1.OLEObjects.Add , , App.Path & "\c663dn5a.gif"
	     RichTextBox1.OLEObjects.Add , , App.Path & "\c663dn5b.gif"
	  End Sub
	
	6. Press the F5 key to run the project, and note that you get the out of memory
	  error message referenced in the "Symptoms" section of this article. The Photo
	  Editor is started when you run the project.
	
	Additional query words: richtextbox activation
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbCodeSnippet kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
