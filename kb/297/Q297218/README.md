---
layout: page
title: "Q297218: PRB: PDW Err &quot;Object Invoked Has Disconnected from Its Clients&quot;"
permalink: /kb/297/Q297218/
---

## Q297218: PRB: PDW Err &quot;Object Invoked Has Disconnected from Its Clients&quot;

{% raw %}

	Article: Q297218
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbwizard kbAppSetup kbDeployment kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Package and Deployment Wizard (PDW) to package a Visual Basic 6.0
	application, when you click Finish button to try to create the package, you
	receive the following error message:
	
	  Error 80010108 Automation Error.
	  The object invoked has disconnected from its clients
	
	CAUSE
	=====
	
	This problem occurs because there is a circular dependency in the Crystal
	Reports dependency file. This applies to Seagate Crystal Reports version 8.5.
	
	RESOLUTION
	==========
	
	The Crystal Decisions Web site at
	http://support.crystaldecisions.net/library/kbase/articles/c2009024.asp states:
	
	  To resolve this error, open Crystl32.dep in Notepad or a similar text editor
	  and modify the section:
	
	  [CRPE32.DLL]
	  Dest=$(WinSysPath)
	  Uses1=CRPE32.DLL
	  Uses2=
	
	  So that it reads:
	
	  ;[CRPE32.DLL]
	  ;Dest=$(WinSysPath)
	  ;Uses1=CRPE32.DLL
	  ;Uses2=
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	STATUS
	======
	
	For information about the status of this problem, see the following Crystal
	Decisions Web site:
	
	  http://support.crystaldecisions.net/library/kbase/articles/c2009024.asp
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	REFERENCES
	==========
	
	The following Microsoft Knowledge Base article describes a different error that
	is caused by the same problem:
	
	  Q305558 PRB: Package and Deployment Wizard Raises Error 28 When You Click
	  Finish
	
	Additional query words: 80010108
	
	======================================================================
	Keywords          : kb3rdparty kbwizard kbAppSetup kbDeployment kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
