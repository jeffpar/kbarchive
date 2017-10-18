---
layout: page
title: "Q257641: FIX: DataSource Drop-Down Loads Slowly in Large Project"
permalink: kb/257/Q257641/
---

## Q257641: FIX: DataSource Drop-Down Loads Slowly in Large Project

	Article: Q257641
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a large project with many forms, when you click on the DataSource property of
	a databound control in the Properties window, it takes a very long time before
	the list appears.
	
	CAUSE
	=====
	
	When a user clicks the DataSource drop-down list box of a databound control in
	the Properties window, Visual Basic loads all of the forms in the project to
	look for designers that are DataSources. Because Visual Basic does not know in
	advance which forms it needs to load in order to retrieve this information, it
	must load all of them. This procedure may take a long time if it occurs in a
	large project that has many forms. The size at which the project exhibits this
	behavior depends on available system resources.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	As of Visual Studio 6.0 Service Pack 4, Visual Basic no longer needs to load
	forms to look for designers that are DataSources.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
