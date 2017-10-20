---
layout: page
title: "Q191281: WD97: DocProperty Field Truncated After 127 Characters"
permalink: /kb/191/Q191281/
---

## Q191281: WD97: DocProperty Field Truncated After 127 Characters

{% raw %}

	Article: Q191281
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert the contents of a document property into a Word document, the
	contents of the field may be truncated after 127 characters.
	
	NOTE: This problem occurs when you use a property listed on the Custom tab. To
	view the custom tab, click Properties on the File menu.
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Field codes: DocProperty field
	
	  {DOCPROPERTY "Name "}
	
	Inserts the indicated document information that is currently entered in the
	Properties dialog box (on the File menu).
	
	  Instruction     Explanation
	  -----------------------------------------------------------------------
	
	  "Name"          The property that appears in the Properties dialog box.
	                  To select a property, click Options in the Field dialog
	                  box (Insert menu).
	
	Example:
	
	  Field                                Displays
	  ----------------------------------------------------------
	
	  Contact: { DOCPROPERTY Manager }     Contact: Anna Gerrard
	
	To Set a Custom Document Property
	---------------------------------
	
	1. In a saved Word document, click Properties on the File menu.
	
	2. On the Custom tab, type (or select) a property name.
	
	3. In the Value box, type the text for the custom property, and then click OK.
	
	To Retrieve a Custom Document Property
	--------------------------------------
	
	1. In a saved Word document, click Field on the Insert menu.
	
	2. Under Categories, select Document Information.
	
	3. Under "Field names", select DocProperty, and then click Options.
	
	4. On the Options tab, select the custom property you set in steps 2-3 of the
	  "To Set a Custom Document Property" section of this article.
	
	5. Click Add to Field.
	
	6. Click OK to close the Field Options dialog box.
	
	7. Click OK to close the Field dialog box.
	
	Additional query words: cutoff dropped chopped cropped missing gone
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
