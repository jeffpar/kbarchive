---
layout: page
title: "Q257523: BUG: Resource Leak When Displaying WMF Files in PictureBox"
permalink: kb/257/Q257523/
---

## Q257523: BUG: Resource Leak When Displaying WMF Files in PictureBox

	Article: Q257523
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbBrush kbVBp500 kbVBp500bug kbVBp600 kbVBp600bug kbDSupport
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	System and Graphical Device Interface (GDI) resources are not freed when you use
	a PictureBox control in Visual Basic to view multiple Windows MetaFile (WMF)
	images. Other image formats, such as BMP, JPG, and GIF, do not experience any
	resource leaks.
	
	CAUSE
	=====
	
	The resource leak is actually caused by a problem in the operating system. The
	operating system fails to destroy brushes that it creates to "play" a metafile
	image. Therefore, any application that uses the same operating system
	functionality to draw metafiles will experience the same loss in resources.
	
	RESOLUTION
	==========
	
	Currently, there is no known fix for this problem. One potential workaround,
	however, is to avoid the WMF file format and instead use another picture format,
	such as BMP, JPG, or GIF.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This resource leak only affects WMF files displayed on a Windows 95 or 98
	operating system. Files in other formats, such as BMP, JPG, and GIF, are not
	affected. In addition, resources are only leaked once for each WMF file. For
	example, if you load one WMF file into a PictureBox 10 times resources leak only
	once, but if you load 10 unique WMF files one time each this results in a loss
	of 10 times as many resources.
	
	Upon termination of the application, all leaked resources are released and
	available to the system.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new standard EXE project. Form1 is created by default.
	
	2. Add a PictureBox control to Form1.
	
	3. Add a command button to Form1.
	
	4. Add a reference to "Microsoft Scripting Runtime".
	
	5. Paste the following code into the Form1 code window:
	
	  Private Sub Command1_Click()
	     Dim fso As FileSystemObject
	     Dim fld As Folder
	     Dim fl As File
	
	     Set fso = New FileSystemObject
	     Set fld = fso.GetFolder(App.Path & "\wmf")
	
	     For Each fl In fld.Files
	        Picture1.Picture = LoadPicture(fl)
	     Next fl
	
	     Set fld = Nothing
	     Set fso = Nothing
	  End Sub
	
	6. Save the project.
	
	7. In the project directory, create a subfolder called "WMF".
	
	8. Copy some WMF files (preferably at least 200) to the folder that you just
	  created.
	
	9. Start the Resource Meter (or any tool that can measure free resources).
	
	10. Run the sample program.
	
	11. Click the command button. As the images are displayed, you can see that the
	  resources available begin to dwindle.
	
	12. When all images have been processed, close the application. You should see
	  the resources returned to the system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBrush kbVBp500 kbVBp500bug kbVBp600 kbVBp600bug kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
