---
layout: page
title: "Q214779: BUG: Uninstallation of Visual Basic 5 .0 Removes Shared VBA File"
permalink: /kb/214/Q214779/
---

## Q214779: BUG: Uninstallation of Visual Basic 5 .0 Removes Shared VBA File

{% raw %}

	Article: Q214779
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbsetup KbVBA kbVBp kbVBp500bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a machine with Visual Basic 5.0 and Office 97 installed, uninstalling Visual
	Basic 5.0 through the "Add/Remove Programs" applet in the Control Panel will
	delete the following files from the \Program Files\Common Files\Microsoft
	Shared\VBAfolder:
	
	  Mrt7enu.dll
	  Mso97rt.dll
	  Msqry32.cnt
	  Msqry32.exe
	  Msqry32.hlp
	  Qryint32.dll
	  Vba332.dll
	  Vbacv10.dll
	  Vbacv20.dll
	  Vbacv20.dll
	  Vbe.dll
	
	RESOLUTION
	==========
	
	Reinstall Office 97 to restore the deleted files in the above folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup KbVBA kbVBp kbVBp500bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
