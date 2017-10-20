---
layout: page
title: "Q163234: PRB: User-defined Formats in OLE Drag-Drop Require Byte Arrays"
permalink: /kb/163/Q163234/
---

## Q163234: PRB: User-defined Formats in OLE Drag-Drop Require Byte Arrays

{% raw %}

	Article: Q163234
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
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SetData method for OLE Drag/Drop functionality, data in a
	user-defined format will cause the following message to be displayed at run-
	time:
	
	  "Non-intrinsic OLE drag-and-drop formats used with SetData require Byte array
	  data. GetData may return more bytes than were given to SetData."
	
	RESOLUTION
	==========
	
	To work around this behavior, make sure that the data being dragged is placed
	into a byte array. Decoding the byte array using the GetData is then dependent
	upon the methods by which this array was created.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following formats are known formats when using SetData and GetData:
	
	  Name       Constant
	  ---------  ------------
	  Text       vbCFText
	  Metafile   vbCFMetafile
	  DIB        vbCFDIB
	  Bitmap     vbCFBitmap
	  Palette    vbCFPalette
	  Rich Text  vbCFRTF
	  DDE Link   vbCFLink
	
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbOLE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
