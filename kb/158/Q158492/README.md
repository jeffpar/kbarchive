---
layout: page
title: "Q158492: WD97: &quot;Word Cannot Obtain...&quot; Inserting Object on Banyan Vines"
permalink: kb/158/Q158492/
---

## Q158492: WD97: &quot;Word Cannot Obtain...&quot; Inserting Object on Banyan Vines

	Article: Q158492
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbole
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attempt to insert an object from a Banyan Vines server to Word document,
	if you use the Create From File tab (Insert Object dialog box), you may receive
	the following error message
	
	  Word cannot obtain the data for the <path> link.
	
	where <path> is the path to the source file.
	
	CAUSE
	=====
	
	This problem occurs when the source file on the Banyan Vines server is closed.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	Method 1. Move the object to your the local hard disk before you insert the
	object.
	
	Method 2. Open the source file on the Banyan Vines server before you insert the
	object.
	
	Note that when you use this method, the object may be inserted in a default size.
	For example, if you are inserting a Microsoft Excel object, the object will
	contain 7 columns and 10 rows, regardless of the size of the worksheet object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbole 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
