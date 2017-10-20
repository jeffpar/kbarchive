---
layout: page
title: "Q221682: FIX: Expanding/Collapsing Big Array in Watch/Locals Windows Slow"
permalink: /kb/221/Q221682/
---

## Q221682: FIX: Expanding/Collapsing Big Array in Watch/Locals Windows Slow

{% raw %}

	Article: Q221682
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox
	Last Modified: 17-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When expanding or collapsing the contents of a large array in either the Locals
	or the Watch windows of the Visual FoxPro Debugger, Visual FoxPro 6.0 appears to
	hang. Eventually, the contents of the array do appear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Command window, type the following lines of code:
	
	  SELECT * FROM HOME(2)+'data\orditems' INTO ARRAY atest
	  debug
	
	2. Wait a couple of seconds for the array "atest" to appear in the locals
	  window. When it does appear, click on the plus sign (+) next to the array
	  name to expand it.
	
	  Visual FoxPro 6.0 appears to hang, but the expanded array eventually appears
	  in the Locals window after several minutes. After the expanded array appears,
	  the same time delay occurs if you try to collapse the array in the Locals
	  window. The same behavior occurs with Watch window. The Windows NT Task
	  Manager will show Visual FoxPro and the Visual FoxPro Debugger as Not
	  Responding while waiting for the array to expand.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
