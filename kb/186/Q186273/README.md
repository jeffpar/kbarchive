---
layout: page
title: "Q186273: BUG: AV Running VB-Built Component in Multithreaded Environment"
permalink: kb/186/Q186273/
---

## Q186273: BUG: AV Running VB-Built Component in Multithreaded Environment

	Article: Q186273
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,97,97 SP1,97 SP2,97 SP3
	Operating System(s): 
	Keyword(s): kbtophit kbVBp500bug kbVS97bug kbVS97sp1bug kbVS97sp2bug kbGrpDSVB kbDSupport
	Last Modified: 05-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Studio versions 97, 97 SP1, 97 SP2, 97 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running an apartment model ActiveX DLL that is created in Visual Basic in a
	multithreaded environment such as Microsoft Internet Information Server (IIS) or
	Microsoft Transaction Server (MTS), COM+, Internet Explorer, ActiveX EXEs, and
	so on, the DLL fails periodically with an access violation (AV).
	
	RESOLUTION
	==========
	
	The following steps may be used to change the DLL to avoid the problem. This may
	not resolve the issue in all cases.
	
	Step-by-Step Example
	--------------------
	
	1. Add a class module to the project.
	
	2. Set the name of the class to clsEmpty.
	
	3. Set the Instancing property of the class to 2-PublicNotCreatable.
	
	4. In Project Properties, set the Start Up Object to Sub Main.
	
	5. Add a BAS module, or put the following in an existing BAS module in the
	  project:
	
	        Public gEmpty As clsEmpty
	        Public Sub main()
	           Set gEmpty = New clsEmpty
	        End Sub
	
	6. Save the project and recompile.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	
	REFERENCES
	==========
	
	For additional information on errors when using an ActiveX DLL created in Visual
	Basic 5.0 that contains a For... Each loop that iterates through a Visual Basic
	collection, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q183164 FIX: For..Each Loop in ActiveX Component Causes Errors
	
	For additional information on threading issues with DLLs created in Visual Basic
	6.0, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q264957 PRB: Visual Basic DLL Has Memory Leaks and Crashes in COM+ If 'Retain
	  In Memory' Is Not Set
	
	Additional query words: MTS IIS crash gpf ipf
	
	======================================================================
	Keywords          : kbtophit kbVBp500bug kbVS97bug kbVS97sp1bug kbVS97sp2bug kbGrpDSVB kbDSupport 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVS97 kbVS97SP1 kbVS97SP2 kbVS97SP3 kbVS97Search
	Version           : :5.0,97,97 SP1,97 SP2,97 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
