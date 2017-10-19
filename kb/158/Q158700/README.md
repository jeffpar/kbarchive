---
layout: page
title: "Q158700: WD97: AutoRecover Doesn't Create Recovered Document"
permalink: /kb/158/Q158700/
---

## Q158700: WD97: AutoRecover Doesn't Create Recovered Document

	Article: Q158700
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The AutoRecover feature does not create a recovered file or the progress meter
	does not appear at the designated time interval.
	
	NOTE: Because of this behavior, if you are editing a macro in the Microsoft
	Visual Basic Editor and Word fails, the macro will not be recovered.
	
	CAUSE
	=====
	
	AutoRecover only functions on a document that has been modified during the
	current session. If you are working only in the Visual Basic Editor while you
	have a document open in Word, Word is unable to recognize that the document has
	been modified.
	
	WORKAROUND
	==========
	
	To invoke automatic document recovery for both the document and the Visual Basic
	Editor, make a change to the document. For example, press ENTER one time and
	then click the Undo button.
	
	AutoRecover will now recover both the document and the macros if Word stops or if
	your computer shuts down unexpectedly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The AutoRecover feature is used in Word to recover a document if your computer
	loses power or if an application error occurs while you are working in a
	document. The AutoRecover feature does not replace a normal save of a document.
	Word does not have a feature that automatically saves your documents. You should
	save your document periodically by clicking Save on the File menu. You should
	also save your macro periodically by clicking Save <host document> on the
	File menu in the Visual Basic Editor. This will save the current project and all
	of its components including forms and modules.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q156574 What Is the AutoRecover Feature in Word?
	
	Additional query words: 8.0 word8 word97 dirty Autorecovery macro
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
