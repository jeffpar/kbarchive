---
layout: page
title: "Q191119: FIX: VB Classes Can Cause IIS to Have Access Violations"
permalink: /kb/191/Q191119/
---

## Q191119: FIX: VB Classes Can Cause IIS to Have Access Violations

{% raw %}

	Article: Q191119
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbInternet kbVBp kbVBp600bug kbWebClasses kbVS600sp3fix kbWinDNA kbDSupport
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) could have an access violation when shutting
	down.
	
	CAUSE
	=====
	
	The IIS environment at termination does not guarantee the order of DLL unloads.
	As a result the Visual Basic runtime is sometimes unloaded before it can be
	cleanly shut down. This results in the access violation. This can happen
	sporadically but only if you have the Visual Basic project option Retain in
	Memory set On. However, not setting Retain in Memory can cause more serious
	issues.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q264957 BUG: VB DLL Has Memory Leaks and Crashes in COM+ if 'Retain In
	  Memory' Not Set
	
	RESOLUTION
	==========
	
	To resolve this problem, install Visual Studio 6.0 Service Pack 3. To obtain
	this service pack, see the following Microsoft Web site:
	
	  http://msdn.microsoft.com/vstudio/sp/vs6sp3/default.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Visual Studio 6.0, Service Pack 3.
	
	REFERENCES
	==========
	
	For additional information on WebClasses, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q189539 INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	
	Additional query words: AV
	
	======================================================================
	Keywords          : kbInternet kbVBp kbVBp600bug kbWebClasses kbVS600sp3fix kbWinDNA kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
