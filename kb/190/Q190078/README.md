---
layout: page
title: "Q190078: BUG: Error &quot;&#91;&#91;BadImplementsRefInCompatLib&#93;&#93;&quot; When You Recompile"
permalink: /kb/190/Q190078/
---

## Q190078: BUG: Error &quot;&#91;&#91;BadImplementsRefInCompatLib&#93;&#93;&quot; When You Recompile

	Article: Q190078
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCompiler kbCOMt kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A binary compatible server implements an interface from a dynamic-link library
	(DLL) (which defines interfaces), and this DLL is recompiled as project
	compatible so that its interface globally unique identifier (GUID) is changed.
	However, when you recompile the server that implements this interface, you
	receive the following error message:
	
	  [[BadImplementsReflnCompatLib]]
	
	RESOLUTION
	==========
	
	Interfaces must be defined and locked before they can be implemented in other
	components. Thus, make sure that you compile the DLL that defines interfaces as
	binary compatible (to maintain the interface GUIDs) and not project compatible
	to avoid the "[[BadImplementsReflnCompatLib]]" error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This is a bug because it displays the "[[BadImplementsReflnCompatLib]]" error
	message instead of the following error message:
	
	  The binary compatibility DLL or EXE contains an implements type whose
	  definition cannot be found.
	
	If you click Help in the [[BadImplementsReflnCompatLib]] dialog box, the correct
	Help topic appears.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project. Class1 is created by default.
	
	2. From the Project menu, click Project1 Properties. Change Project Name to
	  MyServer, and then click OK.
	
	3. In Class1, paste the following code:
	
	  Public Sub Test()
	  '
	  End Sub
	
	4. From the File menu, click Make MyServer.dll to make the interface DLL.
	
	5. From the File menu, click Add Project to add another new ActiveX DLL project
	  to the current workspace.
	
	6. Change Project Name to MyNewServer.
	
	7. From the Project menu, click References, select the MyServer check box, and
	  then click OK.
	
	8. In Class1, paste the following code to implement the interface that is
	  defined in MyServer.dll:
	
	  Implements MyServer.Class1
	
	  Private Sub Class1_Test()
	  '
	  End Sub
	
	9. From the File menu, click Make MyNewServer.dll.
	
	10. From the Project menu, click MyNewServer Properties. On the Component tab,
	  set version compatibility to Binary Compatibility with MyNewServer.dll, and
	  then click OK.
	
	  NOTE: Project Compatibility is set automatically.
	
	11. Close the code window for MyNewServer, and repeat step 4 to compile MyServer
	  as MyServer.dll again. When you are prompted to replace the existing file,
	  click Yes.
	
	12. In the Project explorer window, click MyNewServer (MyNewServer) to highlight
	  it. Repeat step 9 to compile MyNewServer as MyNewServer.dll again. When you
	  are prompted to replace the existing file, click Yes. Notice that you
	  receive the above-mentioned error message.
	
	REFERENCES
	==========
	
	For additional information on compatibility, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q161137 HOWTO: Use Project and Binary Compatibility
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCompiler kbCOMt kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
