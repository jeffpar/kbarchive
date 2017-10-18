---
layout: page
title: "Q221715: FIX: Class Browser HTML Export Code Gives Invalid HTML 3.2 Code"
permalink: kb/221/Q221715/
---

## Q221715: FIX: Class Browser HTML Export Code Gives Invalid HTML 3.2 Code

	Article: Q221715
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When exporting class code using the Class Browser's View Class Code feature, you
	can right-click on the toolbar button to view the generated class code in HTML
	format. The generated HTML source may contain invalid HTML syntax. There may be
	several HTML tags that have not been properly closed.
	
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
	
	1. Execute the following command in the Visual FoxPro Command window:
	
	  DO (_BROWSER) WITH HOME() + "wizards\wizstyle.vcx"
	
	2. Right-click the View Class Code button on the Class Browser toolbar.
	
	3. Right-click the code window and choose View Source.
	
	You will see several <A> tags without a corresponding </A> tag.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
