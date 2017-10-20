---
layout: page
title: "Q177714: WD97: Recorded Macro Switching to Outline View Causes Error"
permalink: /kb/177/Q177714/
---

## Q177714: WD97: Recorded Macro Switching to Outline View Causes Error

{% raw %}

	Article: Q177714
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbmacro kbProgramming kbdta word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a recorded macro that performs the following actions:
	
	- Changes to Outline View
	
	- Saves the file
	
	- Closes the document
	
	- Opens the document
	
	the following error message appears:
	
	  Run-time error '4248':
	
	  This command is not available because no document is open.
	
	CAUSE
	=====
	
	The "ActiveWindow.ActivePane.View.Type=wdOutlineView" statement is recorded a
	second time in the macro when the document is closed.
	
	WORKAROUND
	==========
	
	Comment or delete the second occurrence of the following statement in the
	recorded macro:
	
	     ActiveWindow.ActivePane.View.Type = wdOutlineView
	
	NOTE: The second occurrence of this statement in the sample macro in the "More
	Information" section of this article immediately follows the
	"ActiveDocument.Close" statement.
	
	To Comment the Problematic Line of Code
	---------------------------------------
	
	Visual Basic ignores comments when it runs your procedures. Comment lines begin
	with an apostrophe (') or with Rem followed by a space, and can be added
	anywhere in a procedure. Follow these steps to convert the problematic line of
	code to a comment:
	
	1. In the open document, point to Macro on the Tools menu, and then click
	  Macros.
	
	2. Select the recorded macro, and then click Edit.
	
	3. In the Visual Basic Editor, select the line of macro code that you want to
	  convert to a comment.
	
	4. On the View menu, point to Toolbars, and then click Edit.
	
	5. On the Edit toolbar, click the Comment Block button. The line of macro code
	  should now look similar to the following:
	
	     ' ActiveWindow.ActivePane.View.Type = wdOutlineView
	
	  Note the apostrophe at the beginning of the line.
	
	6. On the File menu, click Close and Return to Microsoft Word.
	
	To Delete the Problematic Line of Code
	--------------------------------------
	
	1. In the open document, point to Macro on the Tools menu, and then click
	  Macros.
	
	2. Select the recorded macro, and then click Edit.
	
	3. In the Visual Basic Editor, select the line of macro code you want to delete.
	
	4. On the Edit menu, click Cut.
	
	5. On the File menu, click Close and Return to Microsoft Word.
	
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
	
	When you record the macro as described in the "Symptoms" section of this article,
	the recorded macro may look similar to the following:
	
	  Sub Test()
	     ActiveDocument.SaveAs FileName:="test.doc",FileFormat:= _
	        wdFormatDocument, LockComments:=False, Password:="", _
	        AddToRecentFiles:=True, WritePassword:="", _
	        ReadOnlyRecommended:=False, EmbedTrueTypeFonts:=False, _
	        SaveNativePictureFormat:=False, SaveFormsData:=False, _
	        SaveAsAOCELetter:=False
	     ActiveWindow.ActivePane.View.Type = wdOutlineView
	     ActiveDocument.Save
	     ActiveDocument.Close
	     ActiveWindow.ActivePane.View.Type = wdOutlineView
	     Documents.Open FileName:="test.doc", ConfirmConversions:=False, _
	        ReadOnly:= False, AddToRecentFiles:=False, PasswordDocument:="", _
	        PasswordTemplate:= "", Revert:=False, WritePasswordDocument:="", _
	        WritePasswordTemplate:="", Format:=wdOpenFormatAuto
	  End Sub
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
