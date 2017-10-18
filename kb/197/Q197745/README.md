---
layout: page
title: "Q197745: WD97: Fields in Header/Footer Not Merged in E-Mail Attachment"
permalink: kb/197/Q197745/
---

## Q197745: WD97: Fields in Header/Footer Not Merged in E-Mail Attachment

	Article: Q197745
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbmerge
	Last Modified: 08-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform a mail merge and send the result as an attachment in an e-mail
	message, the merge fields contained in the header and footer of the document are
	not merged. The merge fields contained in the body of the document are merged
	correctly.
	
	  -or-
	
	When you merge a Word document with a header or footer to Electronics Fax or
	Electronics Mail as a document the header and footer are placed at the bottom of
	the document.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps to merge the document to
	e-mail without the "Send as Attachment" option:
	
	1. Open your mail merge main document.
	
	2. On the Tools menu, click Mail Merge.
	
	3. From the Mail Merge Helper, click Merge.
	
	4. In the Merge dialog box, change the Merge To box to Electronic Mail.
	
	5. Click Setup, click to clear the "Send Document as an Attachment" check box,
	  and then click OK.
	
	6. Click Merge to perform your mail merge.
	
	NOTE: The merge fields will be merged correctly in both the body and the header
	and footer area of the e-mail message; however, the text in the e- mail message
	may not be formatted the way you want it to be formatted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: printmerge mailmerge
	
	======================================================================
	Keywords          : kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
