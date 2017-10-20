---
layout: page
title: "Q160287: XADM: How to Embed an OLE Object in an Exchange Form"
permalink: /kb/160/Q160287/
---

## Q160287: XADM: How to Embed an OLE Object in an Exchange Form

{% raw %}

	Article: Q160287
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to embed a bitmap image in a Microsoft Exchange Forms
	Designer Form RichEdit field by extending the form with Microsoft Visual Basic
	4.0 16-bit version.
	
	NOTE: Only the bitmap image (BMP) format is supported in the Exchange Forms
	Designer RichEdit field.
	
	MORE INFORMATION
	================
	
	To embed a bitmap image in a Microsoft Exchange Forms Designer Form RichEdit
	field:
	
	1. First, the designer must create an Exchange Form using the Exchange Forms
	  Designer.
	
	2. The form must contain one RichEdit field whose reference name is:
	
	     MAPI_BODY_CUSTOM
	
	3. Install the form to the appropriate folder or registry.
	
	4. Exit the Exchange Forms Designer and load the Formname.vbp file into Visual
	  Basic 4.0 16-bit version.
	
	5. In Visual Basic, create a command button on the form panel.
	
	6. In Visual Basic, select the picture control (named Picture1 by default) and
	  place that onto the form paneling.
	
	7. In Visual Basic, place the following code behind the command button created
	  in step 5. In the first line of code, the LoadPicture method points to the
	  path and file to find the bitmap image you want to load. In this example,
	  "c:\exchange\current.bmp" is used.
	
	        Picture1.Picture = LoadPicture("c:\exchange\current.bmp")
	        Clipboard.Clear
	        Clipboard.SetData Picture1.Picture, vbCFBitmap
	        MAPI_Body_Custom_Ctrl.Action = 12  'RE_ACTION_PASTE
	
	  NOTE: For the recipient to successfully display the form bitmap image, the
	  file will need to be available at the path specified in the LoadPicture
	  method. This can be done by modifying the .CFG file, for the form project in
	  the File#= entry. This entry is used to copy files locally, along with the
	  form executable.
	
	8. Using the Exchange Client Forms Manager, install the form into the
	  appropriate folder or library.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
