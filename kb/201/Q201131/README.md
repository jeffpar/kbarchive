---
layout: page
title: "Q201131: BUG: Mixed Case Option Does Not Function Properly in Beautify"
permalink: /kb/201/Q201131/
---

## Q201131: BUG: Mixed Case Option Does Not Function Properly in Beautify

{% raw %}

	Article: Q201131
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp500aBUG kbvfp600bug kbXBase
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Documenting Wizard and the Beautify command do not properly capitalize
	keywords when Mixed case is chosen as the keyword capitalization method.
	
	RESOLUTION
	==========
	
	One possible resolution is to USE the fdkeywrd.dbf file and change the
	capitalization of the keywords contained in the file. The following code
	accomplishes this:
	
	     *-- Code begins here
	     USE HOME()+"WIZARDS\FDKEYWRD"
	     REPLACE ALL Token WITH PROPER(Token)
	     USE
	     *-- Code ends here
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Enter the following into an editing window:
	
	      CLEAR
	      SET CLOCK ON
	      CLOSE DATA
	
	2. Select the code. Right-click the Editing window and click Beautify.
	
	3. Click Mixed case in the Keywords list box. Click Run.
	
	  Note that only CLEAR is changed to Mixed case capitalization.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mike A. Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp500aBUG kbvfp600bug kbXBase 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
