---
layout: page
title: "Q216866: WD97: Summary Information Under Properties Is Not Encrypted"
permalink: /kb/216/Q216866/
---

## Q216866: WD97: Summary Information Under Properties Is Not Encrypted

	Article: Q216866
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Information from the properties of a Word document (on the File menu, click
	Properties) is not encrypted and can be read if a password-protected file is
	opened using a text editor (for example, Notepad).
	The contents of the following fields of the document properties are included in
	the file data stream and are not encrypted with the document text:
	
	Summary Tab:
	
	  Title
	  Subject
	  Author
	  Manager
	  Company
	  Category
	  Keywords
	  Comments
	  Hyperlink base
	  Template
	
	Custom Tab:
	
	  Checked by
	  Client
	  Date completed
	  Department
	  Destination
	  Disposition
	  Division
	  Document number
	  Editor
	  Forward to
	  Group
	  Language
	  Mailstop
	  Matter
	  Office
	  Owner
	  Project
	  Publisher
	  Purpose
	  Received from
	  Recorded by
	  Recorded date
	  Reference
	  Source
	  Status
	  Telephone number
	  Typist
	  or any other custom field and value you add to the Custom tab.
	
	Any text, value, or path information that is entered into any of the above listed
	fields appears when a password-protected file is opened in a text editor.
	
	The most severe security issues are the result of Word automatically populating
	three of these fields without user intervention.
	
	- The first 125 characters of the first paragraph are automatically included as
	  the title if no information has been manually entered.
	
	- The author's name is entered from the User Information tab (on the Tools
	  menu, click Options).
	
	- The company name from the installation is automatically entered.
	
	WORKAROUND
	==========
	
	On the File menu, point to Properties and click the Summary tab. Clear any
	fields that would cause security concerns for the document. Repeat these steps
	for the Custom tab.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: text editor security
	
	======================================================================
	Keywords          : kbfield 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
