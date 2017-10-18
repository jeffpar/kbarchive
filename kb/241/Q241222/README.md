---
layout: page
title: "Q241222: PRB: Debugging WebClass Returns &quot;Page Cannot Be Found&quot; Error"
permalink: kb/241/Q241222/
---

## Q241222: PRB: Debugging WebClass Returns &quot;Page Cannot Be Found&quot; Error

	Article: Q241222
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a WebClass from within the Visual Basic Integrated Development
	Environment (IDE) to debug or test, the browser window opens with the standard
	error:
	
	  HTTP / 404: "The page cannot be found"
	
	Additionally, every time you run the project, you are prompted with the following
	dialog box
	
	  The following virtual root will be associated with your project directory
	
	and the proposed name increments as in the following:
	
	  ProjectName-0<BR/>
	  ProjectName-1<BR/>
	  etc...
	
	If you choose the previous name for the virtual root, you are re-prompted with
	the following text:
	
	  The specified virtual root is already in use.
	
	CAUSE
	=====
	
	These errors occur if both of the following are true:
	
	- The WebClass project is a member project of a group (VBG).
	
	- You are opening Visual Basic by double-clicking the .vbg file.
	
	The cause of the problem is that Visual Basic automatically creates a virtual
	root in Internet Information Server (IIS) that points to the project directory
	using a short 8.3 path name. You can see this by going into the Internet Service
	Manager (ISM), pulling up the Properties window for the virtual root, and
	viewing the Local Path text field. For example, if the project directory for the
	WebClass is as follows
	
	  
	
	  D:\EMI Web Site
	
	the virtual root in the ISM sets the Local Path text box to the following:
	
	  
	
	  D:\EMIWEB~1
	
	The process of creating the virtual root does not complete successfully when
	using the short file name format.
	
	RESOLUTION
	==========
	
	There are several workarounds.
	
	- To open the group file in the Visual Basic IDE, select the File menu and
	  click Open Project.
	
	- To open the group from a file, create a shortcut to the Vb6.exe file and
	  change the Target field in the shortcut's properties to include the group
	  file as an argument:
	
	  C:\Program Files\Microsoft Visual Studio\VB98\VB6.EXE
	  C:\Program Files\Microsoft Visual Studio\VB98\Group1.vbg
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
