---
layout: page
title: "Q279409: BUG: WebClass ProcessTag Event Fails to Execute"
permalink: /kb/279/Q279409/
---

## Q279409: BUG: WebClass ProcessTag Event Fails to Execute

	Article: Q279409
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP4
	Operating System(s): 
	Keyword(s): kbtemplate kbCOMt kbVBp600bug kbVisID600bug kbWebClasses kbGrpDSASP kbDSupport kbEvent
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a WebClass project from within Visual Basic 6.0 Service Pack 4, and
	there is more than one WebClass tag in a Web document, the WebClass ProcessTag
	events may fail to execute. This does not occur if you browse the Active Server
	Pages (ASP) page directly.
	
	CAUSE
	=====
	
	This problem occurs if the previous execution of the ProcessTag event did not
	change the value of the TagContents variable. If your ProcessTag event never
	sets or modifies the value of the TagContents variable, every other tag is
	skipped.
	
	RESOLUTION
	==========
	
	To resolve this problem, while you are developing the WebClass project from
	within Visual Basic, set or modify the value of the TagContents variable every
	time the ProcessTag event executes. To do this, add the following line at the
	beginning of your ProcessTag event:
	
	  TagContents = TagContents
	
	This line can be commented out or removed when the Web project is put into
	production, but it must be put back next time you run the WebClass project from
	within Visual Basic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the following template to create a WebClass project:
	
	  <html>
	  <head><title>ProcessTag Event Test</title></head>
	  <body>
	  <h1>ProcessTag Event Test</h1>
	  The following should show three lines:  One, abc & Three<br>
	  Instead, it shows these three lines:  One, Two & Three<br>
	  To fix this problem, uncomment the code:  TagContents = TagContents<hr>
	  <WC@ONE>One</WC@ONE><br>
	  <WC@TWO>Two</WC@TWO><br>
	  <WC@THREE>Three</WC@THREE><br>
	  </form>
	  </body>
	  </html>
	
	2. In the WebClass project, paste the following code:
	
	  Private Sub TagTemplate_ProcessTag(ByVal TagName As String, _
	          TagContents As String, SendTags As Boolean)
	      
	      'Uncomment the following line to correct the problem.
	      'TagContents = TagContents
	      
	      Select Case TagName
	      Case "WC@ONE"
	          'Do some work
	      Case "WC@TWO"
	          'Do some work
	          TagContents = "abc"
	      Case "WC@THREE"
	          'Do some work
	      Case Else
	          'Do some work
	      End Select
	  End Sub
	
	  Private Sub TagTemplate_Respond()
	      TagTemplate.WriteTemplate
	  End Sub
	
	  Private Sub WebClass_Start()
	      Set NextItem = TagTemplate
	  End Sub
	
	3. After you uncomment the following line of code:
	
	  TagContents = TagContents
	
	  you must refresh the page in the browser to see the change.
	
	For more detailed information on how to create a WebClass project in Visual
	Basic, see our sample projects at the following Microsoft Developer Network
	(MSDN) Web sites:
	
	  WCDemo Sample Project
	  http://msdn.microsoft.com/library/devprods/vs6/vbasic/vb98/vbsmpwebclassdemoapplication(wcdemovbp)professionalenterpriseedition.htm
	
	  Support1 Sample Project
	  http://msdn.microsoft.com/library/devprods/vs6/vbasic/vb98/vbsmpsupportapplicationprofessionalenterpriseeditions.htm
	
	  Support1 WebClass Tutorial
	  http://msdn.microsoft.com/library/devprods/vs6/vbasic/vbcon98/vbhowCreatingaWebclass.htm
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q192035 PRB: Do Not Use a WebClass ProcessTag Inside an HTML Tag
	
	  Q234317 FIX: HTML Page Truncated with Visual Studio SP3 WebClass Run Time
	  when Running in the VB IDE
	
	
	For more information on sample Visual Basic projects, see the following MSDN
	article:
	
	  http://msdn.microsoft.com/library/devprods/vs6/vbasic/VBRef98/vbsamppage.htm
	
	Additional query words: web class
	
	======================================================================
	Keywords          : kbtemplate kbCOMt kbVBp600bug kbVisID600bug kbWebClasses kbGrpDSASP kbDSupport kbEvent 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP4
	Version           : :6.0,6.0 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
