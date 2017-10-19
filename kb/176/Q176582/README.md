---
layout: page
title: "Q176582: WD97: Recording AutoMark Index Causes Word to Stop Responding"
permalink: /kb/176/Q176582/
---

## Q176582: WD97: Recording AutoMark Index Causes Word to Stop Responding

	Article: Q176582
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbdtacode kbmacroexample kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to record a macro that uses the AutoMark feature for indexing a
	document, the following error message may appear:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, the following error message appears:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 0137:30080f6c.
	
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
	
	To work around this problem, use the following sample Visual Basic for
	Applications macro, which performs the functionality of recording AutoMarking
	indexes:
	
	     Sub MarkIndex()
	        Dim sConDoc As String
	        sConDoc = "C:\My Documents\My Concordance Document.Doc"
	        ActiveDocument.Indexes.AutoMarkEntries sConDoc
	     End Sub
	
	Note that "C:\My Documents\My Concordance Document.Doc" should be your
	concordance document path and file name.
	
	For more information about concordance documents, click Contents And Index on the
	Help menu, click the Index tab in Word Help, type the following text
	
	  concordance
	
	and then double-click the selected text to go to the "Mark index entries" topic.
	If you are unable to find the information you need, ask the Office Assistant.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
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
	
	Additional query words: vb vba vbe hang hung crash crashed locks locked frozen freezes crashing quit quits stopped crashes auto lockup freeze break won't respond waiting near memory stops responding hangs lock up fail WINWORD EXE
	
	======================================================================
	Keywords          : kberrmsg kbdta kbdtacode kbmacroexample kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
