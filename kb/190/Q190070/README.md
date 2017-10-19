---
layout: page
title: "Q190070: PRB: Old ACCESS/ASSIGN Refs Remain on Property Name Change"
permalink: /kb/190/Q190070/
---

## Q190070: PRB: Old ACCESS/ASSIGN Refs Remain on Property Name Change

	Article: Q190070
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The code in renamed ACCESS and ASSIGN methods still references the original
	property name.
	
	RESOLUTION
	==========
	
	The references must be changed manually by performing a REPLACE on all objects
	of "THIS.old" (where "old" is the original property name), with "THIS.new"
	(where "new" is the revised property name).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add a new property called "OLD" with ACCESS and ASSIGN
	  methods. Close the New Property dialog box.
	
	2. Change the "Old" property name to "New" via the Edit Property/Method dialog
	  box ([Form][Edit Property/Method]). When prompted, change the "old_access"
	  and "old_assign" method names, as well.
	
	3. Close the Edit Property/Method dialog box and modify the "new_access" and
	  "new_assign" methods.
	
	In the "new_access" method, the original code remains "RETURN THIS.old"; in the
	"new_assign" method the following code remains "THIS.old = m.vNewVal".
	
	For the ACCESS and ASSIGN methods to affect the new property name, the old
	property reference must be updated. As indicated in the RESOLUTION section
	above, the best way of ensuring that all property references are changed is to
	use the Editor and search through all objects.
	
	
	Additional query words: kbDSupport kbDSE kbVFp600 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
