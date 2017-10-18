---
layout: page
title: "Q267925: PRB: Opening Binary File for Input Returns Only One Character"
permalink: kb/267/Q267925/
---

## Q267925: PRB: Opening Binary File for Input Returns Only One Character

	Article: Q267925
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbOSWinCEsearch kbGrpDSVB kbDSupport kbVBM300
	Last Modified: 17-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an eMbedded Visual Basic application, if you open a file in Binary mode and
	use the Input function to read the file, only one character is returned,
	regardless of how many characters you specified.
	
	CAUSE
	=====
	
	When you use the Put method to write data to a file, the data is implicitly
	written as Variant data. Because it is Variant data and must be able to be read
	back in from the file, the Put method parses the Variant data to determine what
	kind of data it is and how big it is. This information is written out to the
	file along with the data; thus, according to the illustration in the "More
	Information" section, the type of data is VT_BSTR (0800) and the length is 5
	bytes (0005).
	
	If you use the Input method to read the data back in, when you specify the number
	of bytes to read, and you get whatever is there. According to the scenario in
	the "More Information" section, you read 5 bytes, which consist of the 4 byte
	header in the BSTR structure and the letter "T." The Input method does not allow
	you to specify the number of bytes to read; instead, you provide a list of
	Variant variables, and it decodes for you.
	
	RESOLUTION
	==========
	
	To read what you just wrote out, use the Get method instead of the Input method.
	To do this, replace the following line in the "More Information" section
	
	  result = File1.Input(5)
	
	with this line:
	
	  File1.Get result
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE project in eMbedded Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click Components, and then select the "Microsoft CE
	  File System Control" check box.
	
	3. Place a list box, a command button, a file system control, and a file control
	  on Form1.
	
	4. Paste the following code into Form1:
	
	  Private Sub Command1_Click()
	    Dim result
	    File1.Open "Binary.txt", fsModeBinary
	    File1.Put "Test1"
	    File1.Put "Test2"
	    File1.Close
	    File1.Open "Binary.txt", fsModeBinary
	    result = File1.Input(5)
	    File1.Close
	    List1.AddItem result
	    FileSystem1.Kill "Binary.txt"
	  End Sub
	
	5. Click the command button. All that is returned to the ListBox is a small
	  white box.
	
	Additional query words: evb fso filesystemobject
	
	======================================================================
	Keywords          : kbOSWinCEsearch kbGrpDSVB kbDSupport kbVBM300 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
