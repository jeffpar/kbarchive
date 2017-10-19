---
layout: page
title: "Q171811: FIX: Cannot See Relationship Collection on Interface with Tab"
permalink: /kb/171/Q171811/
---

## Q171811: FIX: Cannot See Relationship Collection on Interface with Tab

	Article: Q171811
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While attempting to use the allowedtypes relationship collection of the
	IVcmGroup interface in the AddDefaultData function of the Visual Component
	Manager, the relationship collection is not recognized. However, this interface
	can be seen from the Browser and is, in almost all ways, identical to all other
	interfaces in this and other types of information models. The difference is that
	when this interface was created, the TableName was set to the empty string. When
	the TableName is set to an actual table, the allowedtypes relationship
	collection becomes recognized and there is no problem.
	
	RESOLUTION
	==========
	
	A workaround to this behavior would be to apply an "explicit" TableName.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create the information model in a Repository with the UML, DTM, and CDE
	  models in it.
	
	2. Place the Repostry.mdb in the windows\msapps\repostry directory.
	
	3. Launch Visual Component Manager or a custom app that uses the allowedtypes
	  relationship collection.
	
	Expected Results:
	
	  allowedtypes is recognized.
	
	Actual Results:
	
	  Interface IVcmGroup is recognized but none of its relationship collections
	  (including allowedtypes) is recognized.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
