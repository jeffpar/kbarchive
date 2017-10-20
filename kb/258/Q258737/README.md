---
layout: page
title: "Q258737: FIX: DataSession Property Cannot Be Set in Session Subclass"
permalink: /kb/258/Q258737/
---

## Q258737: FIX: DataSession Property Cannot Be Set in Session Subclass

{% raw %}

	Article: Q258737
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp600 kbvfp600bug kbVS600sp3 kbVS600sp3bug kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DataSession property does not work correctly when changed in a subclass of
	the Session class. The Session class was introduced with Visual FoxPro 6.0
	Service Pack 3.
	
	RESOLUTION
	==========
	
	Upgrade to the latest service pack for Visual Studio 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From Visual FoxPro, create a program containing the following code:
	
	  *Start of Code
	  Child1 = CREATEOBJECT("SessionChild1")
	  ? Child1.DATASESSION
	
	  Child2 = CREATEOBJECT("SessionChild2")
	  ? Child2.DATASESSION
	
	  DEFINE CLASS SessionChild1 AS SESSION
	  	DATASESSION = 1
	  ENDDEFINE
	
	  DEFINE CLASS SessionChild2 AS SESSION
	  	DATASESSION = 2
	  ENDDEFINE
	  *End of Code
	
	2. Run the program created in step 1 above. The value for the DATASESSION
	  property is 2 for both classes. It should display 1 for Child1 and 2 for
	  Child2.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbOOP kbvfp600 kbvfp600bug kbVS600sp3 kbVS600sp3bug kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp4fix kbVS600sp4 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
