---
layout: page
title: "Q173853: PRB: Error 32002 &quot;Unspecified Error&quot; When Adding an Attachment"
permalink: /kb/173/Q173853/
---

## Q173853: PRB: Error 32002 &quot;Unspecified Error&quot; When Adding an Attachment

{% raw %}

	Article: Q173853
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Visual Basic MAPI controls, you may get the following error message
	trying to add an attachment to a message:
	
	  Error 32002: Unspecified Error
	
	CAUSE
	=====
	
	When using the Visual Basic MAPI controls, you will receive this error if you
	are attempting to add an attachment(s) to a message while its MsgNoteText
	Property is a zero-length string.
	
	RESOLUTION
	==========
	
	If you want the body of the message to appear blank except for any attachments,
	add a space to the MsgNoteText Property for each attachment to be added.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbVBp500 kbVBp400 kbMapi kbVBp kbVBp600 kbdse kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
