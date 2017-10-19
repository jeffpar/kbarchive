---
layout: page
title: "Q234483: WD97: wdDocumentsPath Constant Returns Current Folder"
permalink: /kb/234/Q234483/
---

## Q234483: WD97: wdDocumentsPath Constant Returns Current Folder

	Article: Q234483
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Visual Basic for Applications wdDocumentsPath constant to
	return the default documents folder (on the Tools menu, click Options and then
	click the File Locations tab), the constant returns the current folder instead
	of the default document folder.
	
	
	WORKAROUND
	==========
	
	To work around this problem, you can use the Dialogs collection to return the
	default documents path.
	
	The following sample Visual Basic for Applications macro demonstrates using the
	Dialogs collection to return the default documents path:
	
	  Sub GetDefaultDocPath()
	     Dim DefDocPath As String
	     DefDocPath = Dialogs(wdDialogToolsOptionsFileLocations).Setting
	     MsgBox DefDocPath
	  End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
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
	
	REFERENCES
	==========
	
	For additional information about how to change the default file name and
	directory, please see the following article in the Microsoft Knowledge Base:
	
	  Q158348 WD97: How to Change the Default File Name and Directory
	
	Additional query words: vba
	
	======================================================================
	Keywords          : kbdta word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
