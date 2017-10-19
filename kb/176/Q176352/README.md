---
layout: page
title: "Q176352: FIX: VSSItem Does Not Handle Strings Greater Than 128 Bytes"
permalink: /kb/176/Q176352/
---

## Q176352: FIX: VSSItem Does Not Handle Strings Greater Than 128 Bytes

	Article: Q176352
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbole kbSSafe500bug kbSSafe600fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use ActiveX automation to programmatically control Visual SourceSafe,
	the VSSItem object does not handle strings longer than 128 characters. When you
	try to specify a Visual SourceSafe path greater than 128 characters, an error
	occurs.
	
	RESOLUTION
	==========
	
	It is possible to work around this problem by programmatically performing a
	recursion through the Visual SourceSafe tree and moving down to the specific
	item you want.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual SourceSafe
	version 6.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic project.
	
	2. Add a reference to the Microsoft Visual SourceSafe automation component.
	
	3. Add a button to Form1.
	
	4. Enter the following code into the click method of the button:
	
	       Dim VssDb as VSSDatabase
	       Dim SC_Item as VSSItem
	       Set VssDb = New VSSDatabase
	       VssDb.Open "C:\VSSPath\SrcSafe.ini","UserName","Password"
	       Set SC_Item = VssDb.VSSItem("SourceSafe path > 128 Characters ",False)
	
	5. Run the program and click the button you just created.
	
	6. A runtime error occurs with the explanation "Invalid Access Code (Bad
	  Parameter)"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbSSafe500bug kbSSafe600fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
