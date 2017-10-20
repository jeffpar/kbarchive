---
layout: page
title: "Q171545: FIX: Error 438 Using CreateInterface's Optional Default Flag"
permalink: /kb/171/Q171545/
---

## Q171545: FIX: Error 438 Using CreateInterface's Optional Default Flag

{% raw %}

	Article: Q171545
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp3fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the CreateInterface's optional "Default" flag results in it not making an
	interface the default interface for its class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 3, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q175450 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 3
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new transaction in Visual Basic.
	
	2. Create a new TIM class.
	
	3. Create an interface off the new TIM class using "IClassDef::CreateInterface".
	  Set the interface to be the default interface for this class by passing in
	  "Default" as the value of the optional parameter.
	
	4. Create at least one property and attach it to the new interface.
	
	5. Commit the transaction to save the new TIM.
	
	6. Create an object instance based on the newly-defined class.
	
	7. Try to access the property off the default interface using the following
	  format: "Value = Object.Property."
	
	  EXPECTED:
	
	  No error.
	
	  RESULTS:
	
	  Error number: 438
	  Error description: Object doesn't support this property or method.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
