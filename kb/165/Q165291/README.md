---
layout: page
title: "Q165291: WD97: WordBasic.MailMergeInsertFillin Fails to Prompt"
permalink: /kb/165/Q165291/
---

## Q165291: WD97: WordBasic.MailMergeInsertFillin Fails to Prompt

{% raw %}

	Article: Q165291
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbProgramming kbusage kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
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
	
	SYMPTOMS
	========
	
	In previous versions of Word, the WordBasic "MailMergeInsertFillin" command
	causes the Fillin Field to prompt the user upon execution of the command.
	
	This behavior has changed when you use this command with the Visual Basic for
	Applications WordBasic object. The "WordBasic.MailMergeInsertFillin" command
	does not automatically update the field to prompt the user.
	
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
	
	To cause the fillin field to prompt the user, use the following Visual Basic for
	Applications command:
	
	     ActiveDocument.Fields.Update
	
	Additional query words: wordcon vb vba vbe insertion
	
	======================================================================
	Keywords          : kbProgramming kbusage kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
