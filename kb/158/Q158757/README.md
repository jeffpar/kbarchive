---
layout: page
title: "Q158757: FIX: TabPicture Property of SSTab Control Gives an OLE Error"
permalink: /kb/158/Q158757/
---

## Q158757: FIX: TabPicture Property of SSTab Control Gives an OLE Error

{% raw %}

	Article: Q158757
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbActiveX kbvfp500bug kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the TabPicture property of the SSTab control, the following error
	message appears:
	
	  OLE error code 0x8002000e: Invalid number of parameters
	
	The TabPicture property set the bitmap or icon so that it appears on the
	specified tab of an SSTab control.
	
	WORKAROUND
	==========
	
	Use the Tab property to set the current tab. Use the Picture property to set the
	graphic you want to display:
	
	  ThisForm.Olecontrol1.Object.Tab = 1
	     ThisForm.Olecontrol1.Object.Picture = LoadPicture(Home()+"fox.bmp")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in FoxPro 5.0a and 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Place an OLE Container Control on the form.
	
	3. From the Insert Object dialog box, click Insert Control.
	
	4. From the Object Type list, select SSTab Object. (If you have Visual Basic
	  installed, you may see it listed as Sheridan Tabbed Dialog Control.)
	
	5. Place a command button on the form.
	
	6. Add the following code to the click event of the command button:
	
	  ThisForm.Olecontrol1.Object.TabPicture(1) = ;
	           LoadPicture(Home()+"fox.bmp")
	
	7. Save and run the form.
	
	8. Click the command button.
	
	  If you want to use the workaround, replace the code in step 6 with the example
	  code in the WORKAROUND section.
	
	REFERENCES
	==========
	
	Visual FoxPro 5.0 Help file, version 4.005.000; Search on: "SSTab Control,"
	Topic: "ActiveX Controls Overview."
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbActiveX kbvfp500bug kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
