---
layout: page
title: "Q318109: PRB: Changes Not Saved When You Bind Solution to Another Project"
permalink: kb/318/Q318109/
---

## Q318109: PRB: Changes Not Saved When You Bind Solution to Another Project

	Article: Q318109
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the binding information for a source control project that has
	been branched to a newly created branched location, your local files may be
	overwritten with the file version that the source code control provider stores.
	
	CAUSE
	=====
	
	Visual Studio .NET compares the files in your local working folder to those that
	your source code control provider stores. This problem occurs because Visual
	Studio .NET replaces any files that are not the same as the files that the
	source code control provider stores.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that you back up your local working folder
	before you bind to a new location.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. User 1 creates a Microsoft Visual Basic .NET project and then adds a solution
	  and a project to source code control.
	
	2. In Visual SourceSafe Explorer, someone shares and branches the project.
	
	3. User 1 edits the solution item and then checks in the solution.
	
	4. User 2 clicks Source Control on the File menu and then clicks "Create project
	  from Source Control" to enlist to the new location.
	
	5. User 2 makes conflicting edits to the solution item and then checks in the
	  solution.
	
	6. User 1 unbinds the solution from the original location, closes the dialog
	  box, clicks Source Control on the File menu, and then clicks Change Source
	  Control to rebind to the new location. User 1 receives the following error
	  message:
	
	  The following items must be modified to change the source control bindings.
	  They cannot be checked out from source control, so the items' attributes will
	  be overridden. You can use the Get Latest Version on the affected items to
	  merge your changes. However you should check with your system administrator
	  before doing so.
	
	  Some items at the new binding have different contents on your local disk than
	  in the newly bound database. You should consult your administrator. The Get
	  Latest Version command may be able to resolve these issues, but you should
	  exercise caution as this may cause you to lose any changes you have made.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q305106 HOWTO: SSAFE - Reconnect a Project to Source Control in Visual Studio
	  .NET
	
	Additional query words: changes lost deleted removed
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
