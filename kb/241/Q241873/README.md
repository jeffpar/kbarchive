---
layout: page
title: "Q241873: WD97: Canceling Hyperlink Allows Linked Executable File to Run"
permalink: /kb/241/Q241873/
---

## Q241873: WD97: Canceling Hyperlink Allows Linked Executable File to Run

	Article: Q241873
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97 kbwdinternet kbofficeupdate
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a document that was saved as Hypertext Markup Language (HTML), if you click a
	hyperlink to an executable file (*.exe), you receive a message similar to the
	following:
	
	  Opening <path/filename>
	
	  Some files can contain viruses or otherwise be harmful to your computer. It is
	  important to be certain that this file is from a trustworthy source.
	
	  Would you like to open this file?
	
	If you click Cancel to this message, the executable program is run anyway.
	
	CAUSE
	=====
	
	This is a problem with the Hlink.dll file that ships with Word 97.
	
	RESOLUTION
	==========
	
	To resolve this problem, download and install the Microsoft Word 97 Hyperlinks
	Update. For more information about this update and how to install it, please
	visit the following Microsoft Web address:
	
	  http://office.microsoft.com/downloads/9798/Offhlink.aspx
	
	NOTE: When installing the Hyperlinks update, you may receive the following
	message when you attempt to install the Hyperlink update more than once, or you
	have previously updated Microsoft Internet Explorer:
	
	  Microsoft Office has already been patched.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.<A0>This problem was corrected in
	Microsoft Word 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 kbwdinternet kbofficeupdate 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
