---
layout: page
title: "Q197211: WD97: Envelope Print Merge Fails to Omit Return Address"
permalink: /kb/197/Q197211/
---

## Q197211: WD97: Envelope Print Merge Fails to Omit Return Address

	Article: Q197211
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbenvelope word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Return Address Omit option is selected in the Envelopes And Labels dialog
	box, and you are performing a print merge to envelopes, the return address is
	still included. (To locate the Return Address Omit option, click Envelopes And
	Labels on the Tools menu, and select the Envelopes tab.)
	
	WORKAROUND
	==========
	
	Method 1: Remove the Return Address
	-----------------------------------
	
	To remove the return address for all subsequent envelopes, regardless of the
	creation method, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the User Information tab.
	
	3. Clear the Mailing Address box and click OK.
	
	You can now perform the print merge without printing the return address.
	
	To remove the return address for the current print merge only, follow the steps
	for setting up a print merge envelope, but before performing the print merge,
	edit the main document by selecting the return address and deleting it. Continue
	with the print merge as usual.
	
	Method 2: Change the Return Address Font Color
	----------------------------------------------
	
	Alternatively, you can set the return address font color to white without having
	to delete your Mailing Address or edit the merge document. To change the return
	address font color, follow these steps:
	
	1. On the Tools menu, click Envelopes And Labels.
	
	2. Click the Envelopes tab.
	
	3. Click Options.
	
	4. Click Return Address Font.
	
	5. Select White for the font color.
	
	6. Click OK twice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: mail merge
	
	======================================================================
	Keywords          : kbdta kbenvelope word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
