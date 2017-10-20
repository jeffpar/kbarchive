---
layout: page
title: "Q190263: PRB: Hyperlink Object Cannot NavigateTo Name With DBCS"
permalink: /kb/190/Q190263/
---

## Q190263: PRB: Hyperlink Object Cannot NavigateTo Name With DBCS

{% raw %}

	Article: Q190263
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0, using the Hyperlink control NavigateTo method to navigate
	to a Web page, picture file (.bmp, .gif or .jpg) or Active Document that
	contains Double-Byte Character Set (DBCS) characters in the filename does not do
	anything.
	
	RESOLUTION
	==========
	
	Use the Hyperlink button found in the _hyperlink.vcx Foundation Class library.
	This foundation class supports filenames with DBCS characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro, open the Customer table in the \Samples\Vfp98\Data
	  directory.
	
	2. Browse the Customer table and save the Customer table as HTML, and provide a
	  name with DBCS characters.
	
	3. Create a form and place a command button and hyperlink control on the form.
	
	4. In the Click event of the command button, place the following code:
	
	        Thisform.Hyperlink1.NavigateTo(<HTML filename with DBCS character>)
	
	5. Save and run the form.
	
	NOTE: Click the command button, nothing happens and no error occurs.
	
	Additional query words: kbActiveDocs kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
