---
layout: page
title: "Q178878: WD97: Error 5152 Running Macro To Insert Graphic w/URL Address"
permalink: kb/178/Q178878/
---

## Q178878: WD97: Error 5152 Running Macro To Insert Graphic w/URL Address

	Article: Q178878
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbwordvba word97 kbwdinternet
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you record a Visual Basic for Applications macro that inserts a graphic
	using a URL address, the following error occurs when you playback the recorded
	macro:
	
	  Run-time error '5152': This is not a valid file name
	
	
	WORKAROUND
	==========
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	To work around this problem, use the following example Visual Basic for
	Applications macro in place of the recorded command to insert the URL
	address-based graphic:
	
	     Sub InsertURLGraphic()
	        With Dialogs(wdDialogInsertPicture)
	           .Name =  "<Replace this with URLAddress of graphic>"
	           .Execute
	        End With
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbwordvba word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
