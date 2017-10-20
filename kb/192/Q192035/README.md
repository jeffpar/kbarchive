---
layout: page
title: "Q192035: PRB: Do Not Use a WebClass ProcessTag Inside an HTML Tag"
permalink: /kb/192/Q192035/
---

## Q192035: PRB: Do Not Use a WebClass ProcessTag Inside an HTML Tag

{% raw %}

	Article: Q192035
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbInternet kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A WebClass page does not display in the browser or is not displayed as expected.
	
	CAUSE
	=====
	
	You cannot use WebClass ProcessTags within an HTML tag because the design- time
	parser does not interpret it correctly.
	
	
	RESOLUTION
	==========
	
	The workaround is to use a WebClass ProcessTag for the entire HTML tag or do not
	put ProcessTags inside HTML tags.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Notice in the code below from a HTML page that there is a WebClass ProcessTag
	called <WC@Replace> with an ending </WC@Replace> located within an
	HTML INPUT tag. This will not work because you have WebClass ProcessTag inside a
	HTML tag.
	
	     <INPUT id="ReplaceField" NAME="ReplaceField" SIZE=39 MAXLENGTH=50 value=
	     "<WC@Replace>sss</WC@Replace>">
	
	Workaround
	----------
	
	1. Place your WebClass ProcessTag within the HTML page, but not inside of a HTML
	  Tag. For example:
	
	        <HTML>
	        <BODY>
	        <WC@Replace>sss</WC@Replace>
	        </BODY>
	        <HTML>
	
	2. Write code to process the ProcessTag in your WebClass ProcessTag procedure.
	  Here is some sample code:
	
	        Private Sub Template3_ProcessTag(ByVal TagName As String, _
	                                 TagContents As String, SendTags As Boolean)
	          TagContents = "<INPUT id=ReplaceField NAME=ReplaceField SIZE=39 _
	                                 MAXLENGTH=50 value=sss>"
	        End Sub
	
	REFERENCES
	==========
	
	For additional information on WebClasses, see the following article in the
	Microsoft Knowledge Base:
	
	  Q189539 INFO: VB 6.0 Readme - Part 8 - WebClass Designer Issues
	
	A WebClass sample will be located at the following location when you install the
	MSDN samples:
	
	  Microsoft Visual Studio\MSDN98\98VS\1033\Samples\VB98\WcDemo\WcDemo.vbp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
