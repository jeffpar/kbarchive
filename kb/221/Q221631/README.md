---
layout: page
title: "Q221631: FIX: Component Gallery Find/Cancel Leaves &quot;Unknown&quot; Data Session"
permalink: /kb/221/Q221631/
---

## Q221631: FIX: Component Gallery Find/Cancel Leaves &quot;Unknown&quot; Data Session

{% raw %}

	Article: Q221631
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbMiscTools kbVS600sp3fix kbvfp600 kbvfp600bug
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Canceling the Find dialog in the Component Gallery leaves an Unknown data
	session after closing the Component Gallery.
	
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
	
	1. Start the Component Gallery.
	
	2. Click the Find button on the Component Gallery toolbar.
	
	3. Click Cancel in the Find dialog.
	
	4. Close the Class Browser.
	
	5. Open the Data Session window.
	
	Note that an Unknown data session remains open in the Data Session window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSFox kbMiscTools kbVS600sp3fix kbvfp600 kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
