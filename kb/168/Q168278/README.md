---
layout: page
title: "Q168278: INFO: Cannot Access UserConnection Properties from Add-In"
permalink: kb/168/Q168278/
---

## Q168278: INFO: Cannot Access UserConnection Properties from Add-In

	Article: Q168278
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not possible to obtain property information for the UserConnection object
	from a Visual Basic Add-In. The one exception is the name property. All other
	property values are not available.
	
	MORE INFORMATION
	================
	
	This situation is the result of the current implementation of the UserConnection
	ActiveX Designer. Object models are optional for ActiveX Designers and may or
	may not be implemented by the developer. In the absence of the relevant object
	model, as is the case with the UserConnection, the only property values
	available to an Add-In are those that appear in the properties window. Microsoft
	is currently reviewing this issue with regard to the UserConnection and will
	post additional information here when it becomes available.
	
	
	Additional query words: user connection
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbinfo
	
	=============================================================================
	
