---
layout: page
title: "Q223092: FIX: Using VB with Modal Form Fails in Internet Explorer"
permalink: /kb/223/Q223092/
---

## Q223092: FIX: Using VB with Modal Form Fails in Internet Explorer

{% raw %}

	Article: Q223092
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.01 SP1,4.01 SP2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveX kbInternet kbVBp kbVBp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix k
	Last Modified: 21-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Internet Explorer (Programming) versions 4.01 SP1, 4.01 SP2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you shut down Internet Explorer, the following error message appears:
	
	  This browser window (or ActiveX control in this page) is busy.
	  Closing this window may cause some problems.
	
	  Do you want to close it anyway?
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This situation occurs when an ActiveX Document DLL project runs at the Visual
	Basic Integrated Development Environment (IDE) or an ActiveX Document EXE
	project runs either at design time or at runtime in Internet Explorer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Document EXE project with Visual Basic.
	
	2. Create a Command Button on the User Document.
	
	3. Write the following code to User Document:
	
	  Private Sub Command1_Click()
	        Dim frm1 As New Form1
	        frm1.Show vbModal, Me
	        Unload frm1
	        Set frm1 = Nothing
	  End Sub
	
	4. Add a new form called form1 in the project.
	
	5. Create a Command Button on this form.
	
	6. Put the following code to the form:
	
	  Private Sub Command1_Click()
	       Dim frm1 As New Form1
	       frm1.Show vbModal, Me
	       Unload frm1
	       Set frm1 = Nothing
	  End Sub
	
	7. Run the project.
	
	8. Click the Command1 button. Form1 appears.
	
	9. Click the button on Form1. Another instance of the Form appears.
	
	10. Close all the forms.
	
	11. Close the Internet Explorer window.
	
	The following error message appears:
	
	  This browser window (or ActiveX control in this page) is busy.
	  Closing this window may cause some problems.
	
	  Do you want to close it anyway?
	
	REFERENCES
	==========
	
	For additional information related to ActiveX Documents and Internet Explorer,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q171825 FIX: Tabbing Problems Using ActiveX Document in a Frame
	
	  Q200027 HOWTO: Tell if Internet Explorer is Offline from an ActiveX Doc
	
	  Q168428 HOWTO: Test Your ActiveX Documents (.VBD)
	
	  Q167380 PRB: IE Reports Unknown Type .VBD for ActiveX Document
	
	  Q176468 INFO: Behavior of Forms in an ActiveX Document
	
	
	For more information on developing Web-based solutions for Internet Explorer,
	please see the following Web sites:
	
	  http://msdn.microsoft.com/workshop/default.asp
	
	  http://msdn.microsoft.com/ie/
	
	  http://support.microsoft.com/highlights/iep.asp?FR=0&SD=MSDN
	
	Additional query words: VBD BUSY BROWSER
	
	======================================================================
	Keywords          : kbservicepack kbActiveX kbInternet kbVBp kbVBp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbInetDev 
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbSDKIE401SP1 kbSDKIE401SP2
	Version           : WINDOWS:4.01 SP1,4.01 SP2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
