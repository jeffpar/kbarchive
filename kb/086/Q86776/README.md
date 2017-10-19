---
layout: page
title: "Q86776: How to Use a Linked Paintbrush Object with OLECLIEN.VBX"
permalink: /kb/086/Q86776/
---

## Q86776: How to Use a Linked Paintbrush Object with OLECLIEN.VBX

	Article: Q86776
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 2.0 
	- Microsoft Professional Toolkit for Microsoft Visual Basic programming system for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following example program demonstrates how to use the Visual Basic OLE
	Client (OLECLIEN.VBX) custom control to create a linked Paintbrush object.
	
	The following OLEClient property settings are required to create a Paintbrush
	Object Linking and Embedding (OLE) object:
	
	  Class      - "PBrush"
	
	  SourceDoc  - The full path of a bitmap file to use (for example,
	               c:\windows\arches.bmp).
	
	  SourceItem - A string containing the pixel coordinates of the part
	               of the bitmap to display. These coordinates should be
	               in the format "x1 y1 x2 y2".
	
	This information applies to the OLECLIEN.VBX custom control in Visual Basic.
	
	Note that Windows version 3.0 Paintbrush does not support OLE; you must have
	Windows version 3.1 in order to use this example.
	
	MORE INFORMATION
	================
	
	The following program demonstrates how to create a linked Paintbrush object in
	Visual Basic using the OLECLIEN.VBX custom control.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. From the File menu, choose Add File. In the Files box, select the
	  OLECLIEN.VBX custom control file. The OLE Client tool appears in the Toolbox.
	
	3. Place a command button and an OLEClient control on Form1.
	
	4. Enter the following code:
	
	     Sub Command1_Click()
	        OLEClient1.Class = "PBrush"
	        OLEClient1.Protocol = "StdFileEditing"
	        OLEClient1.SourceDoc = "c:\windows\arches.bmp"
	
	        '  The SourceItem for Paintbrush is the coordinates of
	        '  of an object image in bitmap - "x1 y1 x2 y2".
	        OLEClient1.SourceItem = "0 0 121 159"
	
	        OLEClient1.ServerType = 0  ' Linked.
	        OLEClient1.Action = 1      ' CreateFromFile.
	        Command1.Enabled = 0
	     End Sub
	
	     Sub OleClient1_DblClick ()
	        OLEClient1.Action = 7  ' Activate (open for editing).
	     End Sub
	
	     Sub Form_Unload (Cancel As Integer)
	        OLEClient1.Action = 9  ' Close (terminate connection).
	     End Sub
	
	5. Press F5 to run the program. Click the command button to create the OLE
	  object. Double-clicking the OLEClient control will start Paintbrush for you
	  to edit the OLE object.
	
	REFERENCES
	==========
	
	"Microsoft Professional Toolkit for Visual Basic: Custom Control Reference"
	Pages 196-232
	
	Additional query words: 1.00 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB200
	Version           : :2.0
	
	=============================================================================
	
