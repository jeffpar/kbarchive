---
layout: page
title: "Q197434: WD97: Cannot Mark Citation That Does Not Include Short Citation"
permalink: kb/197/Q197434/
---

## Q197434: WD97: Cannot Mark Citation That Does Not Include Short Citation

	Article: Q197434
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Mark button is unavailable (dimmed) in the Mark Citation dialog box until
	you type some text in the Short Citation box. This means you cannot create a TA
	(Table of Authorities Entry) field in Word using only the long citation. (To
	locate the Mark Citation dialog box, click Indexes And Tables on the Insert
	menu, select the Table Of Authorities tab, and then click Mark Citation.)
	
	WORKAROUND
	==========
	
	If you want to create a table of authorities entry that does not include a short
	citation, follow these steps:
	
	1. On the Insert menu, click Index And Tables, and then select the Table of
	  Authorities tab.
	
	2. Click OK.
	
	3. Turn the Field Codes on by pressing ALT+F9.
	
	4. Modify the TA field manually.
	
	For example, to remove the short citation from the following TA field, delete "
	\s "Short Citation"":
	
	  { TA \l "This is the long version of the citation." \s "Short Citation" \c 3 }
	
	The following is the modified TA field, which no longer contains a short
	citation:
	
	  { TA \l "This is the long version of the citation." \c 3 }
	
	IMPORTANT: You should not use this workaround for documents that you plan to open
	in WordPerfect. Table of authorities entries that do not contain a short
	citation may cause a general protection (GP) fault error in WordPerfect.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
