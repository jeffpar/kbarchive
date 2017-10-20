---
layout: page
title: "Q172253: FIX: VB 5.0 DBCombo May Display Wrong Column for RDC 1.0"
permalink: /kb/172/Q172253/
---

## Q172253: FIX: VB 5.0 DBCombo May Display Wrong Column for RDC 1.0

{% raw %}

	Article: Q172253
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbVBp500bug kbVS97sp2fix kbGrpDSVBDB kbvbp500sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the DBCombo that ships with Visual Basic 5.0 is used in conjunction with
	the RemoteData control that ships with Visual Basic 4.0 Enterprise Edition, the
	DBCombo may not display the correct column.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug has been fixed in Visual Studio 97 Service Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	The problem occurs when the ListField and BoundColumn properties of the DBCombo
	differ. This bug may cause problems in Visual Basic 4.0 applications because the
	DBCombo that ships with Visual Basic 5.0 has the same filename. The problem does
	not occur when the DBCombo that ships with Visual Basic 5.0 is used in
	conjunction with the RemoteData control that ships with Visual Basic 5.0
	Enterprise Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500bug kbVS97sp2fix kbGrpDSVBDB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
