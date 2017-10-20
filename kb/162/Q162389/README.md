---
layout: page
title: "Q162389: WD97: &quot;This file could not be found&quot; Error with Open Method"
permalink: /kb/162/Q162389/
---

## Q162389: WD97: &quot;This file could not be found&quot; Error with Open Method

{% raw %}

	Article: Q162389
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Visual Basic for Applications Open method to open a file, you
	may receive the following error message:
	
	  Run-time error '5174: This file could not be found.
	
	CAUSE
	=====
	
	This problem occurs when the following conditions are true:
	
	- The file name extension is not included as part of the FileName argument (for
	  example: Documents.Open FileName:="mydocument")
	
	-and-
	
	- The file name extension of the file you want to open is something other than
	  ".doc."
	
	This error will occur regardless of whether the default file format has been
	specified, as in the following example:
	
	  Documents.Open FileName:="mydocument", Format:=wdOpenFormatRTF
	
	  -or-
	
	  Application.Options.DefaultOpenFormat = wdOpenFormatRTF
	  Documents.Open FileName:="mydocument"
	
	NOTE: This error will also occur if the document you are attempting to open does
	not exist.
	
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
	
	To work around this issue, specify the file name extension as part of the
	FileName argument. The following example opens a Rich Text Format (.rtf)
	document that exists in the default document directory:
	
	  Documents.Open FileName:="mydocument.rtf"
	
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
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
