---
layout: page
title: "Q316010: FIX: Error Message When You Build Large Visual Basic Projects"
permalink: /kb/316/Q316010/
---

## Q316010: FIX: Error Message When You Build Large Visual Basic Projects

{% raw %}

	Article: Q316010
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can build small Visual Basic projects successfully. However, if you build a
	large Visual Basic project, you may receive the following error message:
	
	  Could not execute 'C:\Program Files\Microsoft Visual Studio\VB98\Link.exe'
	
	This problem occurs more often when you build your project under nested folders.
	
	CAUSE
	=====
	
	The length of the Link.exe command line exceeds the limitation of the operating
	system because of the large number of modules that must be linked in your
	project.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Visual Studio 6.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version     Size     File name     Platform
	  --------------------------------------------------------------
	  8-Jan-2002  11:52   6.0.0.9445  1.601 KB VBA6.dll      x86
	
	To install this hotfix, rename the old VBA6.dll file, and then replace it with
	the new VBA6.dll file that is included in the fix.
	
	
	
	WORKAROUND
	==========
	
	If the number of modules in your project is not too large, you can build your
	project executable files into a folder with a short path such as C:\.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: compile compiler Make
	
	======================================================================
	Keywords          : kbCompiler 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
