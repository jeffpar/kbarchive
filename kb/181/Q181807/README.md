---
layout: page
title: "Q181807: WD97: OLE Objects Appear Distorted When Saved as HTML"
permalink: /kb/181/Q181807/
---

## Q181807: WD97: OLE Objects Appear Distorted When Saved as HTML

{% raw %}

	Article: Q181807
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbole kbweb
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a Word document in HTML format that contains an OLE object, such
	as an equation or chart, the image is converted to graphics interchange format
	(GIF) format (unless the object was originally in JPEG format) and it appears to
	be distorted.
	
	CAUSE
	=====
	
	Converting an OLE object to a GIF file will maintain the basic display quality
	only with its original size. The display quality may be poor for an enlarged
	image.
	
	MORE INFORMATION
	================
	
	Before you save a Word document in HTML format, convert OLE objects to picture
	objects. This will preserve the display quality of an enlarged OLE object.
	
	NOTE: Converting an OLE object to a picture object is an irreversible action. You
	may want to perform this action on a copy of your document so that you will not
	lose the OLE Object.
	
	To convert an OLE object to a picture object, follow these steps:
	
	1. Create a backup document by clicking Save As on the File menu, change the
	  name of the file, and then click Save.
	
	2. In the copy of the file, select the inserted object.
	
	3. On the Edit menu, click Cut.
	
	4. On the Edit menu, click Paste Special.
	
	5. Under As, select Picture.
	
	6. Click to select the Float Over Text check box, and then click OK.
	
	7. On the File menu, click Save as HTML.
	
	8. Click OK.
	
	9. Click Yes when you are prompted with the following message:
	
	  This document may contain formatting which will be lost upon conversion to
	  HTML Document format. To preserve the initial document, click No to exit this
	  dialog, then save the document in Word format before converting. Continue
	  with save?
	
	For additional information about saving objects in HTML, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q157086 WD97: Limitations of Converting from Word Format to HTML
	
	  Q162756 WD97: Drawing Objects Lost During Save to HTML
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraphic kbole kbweb 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
