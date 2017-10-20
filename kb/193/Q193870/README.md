---
layout: page
title: "Q193870: FIX: New Version of RDO 2.0 Breaks VB5 UserConnection Designer"
permalink: /kb/193/Q193870/
---

## Q193870: FIX: New Version of RDO 2.0 Breaks VB5 UserConnection Designer

{% raw %}

	Article: Q193870
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While trying to add queries using the UserConnection Designer in Visual Basic
	5.0, you may see an error message stating:
	
	  "Unable to create the type information for this connection". Closing the
	  UserConnection Designer at this point may lead to a GPF.
	
	CAUSE
	=====
	
	This problem can be caused by installing the latest version of RDO 2.0 that
	ships with many of the Visual Studio 6.0 products without installing the latest
	version of the UserConnection Designer.
	
	This problem does not occur if the version of the UserConnection Designer that
	ships with Visual Basic 6.0 is installed.
	
	RESOLUTION
	==========
	
	For Visual Basic 5.0 customers who do not have access to Visual Basic 6.0, the
	following file updates the UserConnection Designer so that it will work properly
	with the new RDO 2.0 components:
	
	  http://msdn.microsoft.com/vbasic/downloads/updates/userconnection.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual Basic 5.0. This
	problem was corrected in version 6.0.
	
	Additional query words: kbDSupport kbdse UserConnection kbVBp500bug kbVBp kbVS600 kbRDO200 kbVBp600fix
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
