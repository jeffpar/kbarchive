---
layout: page
title: "Q272490: BUG: Error &quot;Cannot Save an Uninitialized Class&quot; on VB Component"
permalink: /kb/272/Q272490/
---

## Q272490: BUG: Error &quot;Cannot Save an Uninitialized Class&quot; on VB Component

	Article: Q272490
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbASP kbCOMPlus kbIE400 kbMTS kbVBp600 kbie500 kbDSupport
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Internet Information Server versions 4.0, 5.0 
	- Microsoft Active Server Pages, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Visual Basic ActiveX dynamic-link library (DLL) from Active
	Server Pages (ASP) or from another Microsoft Transaction Server component with
	CreateInstance and call a method on it that writes to a PropertyBag object, you
	may receive the following error message when you call the WriteProperty method
	on the PropertyBag:
	
	  Error Type:
	  SomeComponent (0x800A02E0)
	  Cannot save an uninitialized class. You must use the global InitProperties
	  method to initialize the class, or load the class from a PropertyBag before
	  trying to save it.
	
	This problem does not occur when you create the component from Visual Basic with
	the New keyword.
	
	CAUSE
	=====
	
	This problem occurs because the IPersistStream::InitNew method is not called on
	the component that is saved. When the component is created from Visual Basic
	with New, the Visual Basic runtime calls InitNew for you.
	
	RESOLUTION
	==========
	
	To work around this problem, create the component through a factory component in
	Visual Basic so that Visual Basic creates the component and calls InitNew on the
	IPersistStreamInit interface.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic ActiveX DLL. Rename the project "MyBag" and the
	  class "CBag".
	
	2. Set the persistable property of CBag to "1 persistable".
	
	3. Add the following code and compile:
	
	  Private n As Long
	
	  Private Sub Class_InitProperties()
	      n = 12
	  End Sub
	
	  Private Sub Class_ReadProperties(PropBag As PropertyBag)
	      n = PropBag.ReadProperty("n")
	  End Sub
	
	  Private Sub Class_WriteProperties(PropBag As PropertyBag)
	      PropBag.WriteProperty "n", n
	  End Sub
	
	  Public Function Serialize() As Byte()
	
	     Dim pbgState As PropertyBag
	     
	     Set pbgState = New PropertyBag
	     
	     pbgState.WriteProperty "TestSerialize", Me
	     
	     Serialize = pbgState.Contents
	     
	     Set pbgState = Nothing
	    
	  End Function
	
	4. Create an ASP page named Mybag.asp, and paste the following code:
	
	  <%
	  	set bag = Server.CreateObject("Bag.CBag")
	  	bag.Serialize
	  	response.write "Done" 
	  %>
	
	5. In your browser, open the page. You receive the above-mentioned error.
	
	Workaround
	----------
	
	1. Add another class to the project named CBagFactory.
	
	2. Add a function called CreateBag as follows:
	
	  Public Function CreateBag() As CBag
	      Set CreateBag = New CBag
	  End Function
	
	3. Recompile the DLL.
	
	4. Replace the ASP code with the following code:
	
	  <%
	  	set fac = Server.CreateObject("Bag.CBagFactory")
	  	set bag = fac.CreateBag
	  	bag.Serialize
	  	response.write "Done" 
	  %>
	
	5. In your browser, run the ASP page. You do not receive the error message.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q241896 PRB: Threading Issues with Visual Basic 6.0 ActiveX Components
	
	Additional query words: 0x800A02E0
	
	======================================================================
	Keywords          : kberrmsg kbASP kbCOMPlus kbIE400 kbMTS kbVBp600 kbie500 kbDSupport 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbASPsearch kbZNotKeyword6 kbiis500 kbiis400 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
