---
layout: page
title: "Q221714: BUG: FFCs - _Hyperlink Classes Builder Doesn't Allow Long URL"
permalink: /kb/221/Q221714/
---

## Q221714: BUG: FFCs - _Hyperlink Classes Builder Doesn't Allow Long URL

{% raw %}

	Article: Q221714
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbInternet kbvfp600 kbvfp600bug kbFFC kbVS600sp3 kbGrpDSFox kbDSupport
	Last Modified: 01-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Target URL combobox in the _Hyperlinklabel Builder does not allow any URL
	longer than 34 characters.
	
	RESOLUTION
	==========
	
	You can type in any long URL directly to the cTarget property instead of using
	the combobox in the builder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	The Visual Studio 6.0 Service Pack 3 readme erroneously lists this bug as being
	fixed. Service Pack 3 did not fix this bug.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Launch Component Gallery.
	
	2. Create a new form.
	
	3. Expand the Foundation Classes folder in Component Gallery and select
	  Internet.
	
	4. Drag and drop the Hyperlink label class to the form.
	
	5. In the Hyperlink builder, type in the following URL into the Target URL combo
	  box.
	
	  http://msdn.microsoft.com/vfoxpro/technical/articles.asp    
	   
	
	In Visual FoxPro 6.0, you are unable to finish typing the entire URL. In Visual
	Studio 6.0 SP3 for FoxPro, you can continue typing the long address, but the
	data truncates.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbvfp600 kbvfp600bug kbFFC kbVS600sp3 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
