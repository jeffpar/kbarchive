---
layout: page
title: "Q315290: Events Do Not Fire When You Use WithEvents for a WebClass"
permalink: /kb/315/Q315290/
---

## Q315290: Events Do Not Fire When You Use WithEvents for a WebClass

{% raw %}

	Article: Q315290
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the WithEvents keyword to implement event procedures for a Visual
	Basic 6.0 WebClass, the events do not fire.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft Visual Studio 6.0 service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version     Size       File name     Platform
	  -----------------------------------------------------------------
	  18-Dec-2001 11:44   6.0.0.9444  1,693,456  VBA6.dll      x86
	  18-Dec-2001 11:47   6.0.94.48   1,884,160  VB6.exe       x86
	
	To apply this hotfix, follow these steps:
	
	1. Locate the VB6.exe and VBA6.dll files on your computer. By default, these
	  files are installed in the following folder:
	
	  <Drive>:\Program Files\Microsoft Visual Studio\VB98
	
	2. Make sure that Visual Basic 6.0 is not running.
	
	3. Make a backup copy of VB6.exe and VBA6.dll, and then replace them with the
	  files from this hotfix.
	
	NOTE: Because this is a compile-time problem, you must recompile all components
	that are affected after you apply this hotfix.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: WebClass_Start no events fails to fire
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
