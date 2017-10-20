---
layout: page
title: "Q218613: FIX: /DELAYLOAD Linker Option Generates Bad Image On Alpha"
permalink: /kb/218/Q218613/
---

## Q218613: FIX: /DELAYLOAD Linker Option Generates Bad Image On Alpha

{% raw %}

	Article: Q218613
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the Alpha platform, the /delayload linker option may generate invalid fixups
	that result in a bad executable image.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This problem is applicable to the Alpha platform only.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
