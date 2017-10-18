---
layout: page
title: "Q158477: WD97: Object Deleted When You Run Letter Wizard"
permalink: kb/158/Q158477/
---

## Q158477: WD97: Object Deleted When You Run Letter Wizard

	Article: Q158477
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbtemplate
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you add an object or WordArt text effects to your document and then run the
	Letter Wizard (Tools menu), the object may be deleted.
	
	CAUSE
	=====
	
	This problem occurs when the object is anchored to a paragraph that was modified
	when you ran the Letter Wizard. For example, if a WordArt object is anchored to
	a paragraph that is formatted with the Date style, and you change the Date Line
	on the Letter Format tab in the Letter Wizard, the WordArt object is removed.
	
	WORKAROUND
	==========
	
	If you have already run the wizard and your object has been deleted, click the
	Undo button until your object appears. Attach the object to a paragraph that is
	not a Letter Wizard element--for example, attach the object to a paragraph
	formatted with the body text or Normal style and then rerun the Letter Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	
	MORE INFORMATION
	================
	
	If an object is anchored to a paragraph formatted with one of the following
	styles, the object will be deleted when you run the Letter Wizard:
	
	  Attention Line
	  CC List
	  Closing
	  Company Name
	  Date
	  Enclosure
	  Inside Address
	  Inside Address Name
	  Mailing Instructions
	  Reference Initials
	  Reference Line
	  Return Address
	  Salutation
	  Signature
	  Signature Company
	  Signature Job Title
	  Slogan
	  Subject Line
	
	Additional query words: 8.0 word8 word97 graph chart org organization word art draw equation
	
	======================================================================
	Keywords          : kbualink97 kbtemplate 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
