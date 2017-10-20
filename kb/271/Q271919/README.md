---
layout: page
title: "Q271919: Access Volation in Visual Basic Snap-In Designer Run-Time DLL"
permalink: /kb/271/Q271919/
---

## Q271919: Access Volation in Visual Basic Snap-In Designer Run-Time DLL

{% raw %}

	Article: Q271919
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbMMC kbVBp600bug kbVBp600fix kbGrpDSVB kbDSupport kbSnapIn
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Visual Basic Snap-in Designer is used to create a snap-in with ListPads
	in the Result Pane, then clicking from one node to another might result in some
	error condition. Usually, a blank or frozen result pane is displayed, and then a
	run-time error message or access violation is reported when the console in MMC
	is closed.
	
	Typically, the error message reads:
	
	  Runtime Error! Program c:\win2000\system32\mmc.exe
	  abnormal program termination.
	
	
	CAUSE
	=====
	
	This is caused by a code bug in the mssnapr.dll file.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  08/15/00  02:41a  5.1.2259.1   717,312 mssnapr.dll   (Intel)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Mssnapr
	
	======================================================================
	Keywords          : kbDesigner kbMMC kbVBp600bug kbVBp600fix kbGrpDSVB kbDSupport kbSnapIn 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
