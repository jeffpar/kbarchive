---
layout: page
title: "Q190114: FIX: SET PATH of &gt; 255 Characters Causes Settings to Be Ignored"
permalink: kb/190/Q190114/
---

## Q190114: FIX: SET PATH of &gt; 255 Characters Causes Settings to Be Ignored

	Article: Q190114
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a.6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You make settings in the Visual FoxPro Options dialog box, and use the Set as
	Default button to save the settings; however, when you restart Visual FoxPro,
	some of the settings are ignored.
	
	CAUSE
	=====
	
	You did a Set as Default after issuing a SET PATH TO with a path of over 255
	characters in length.
	
	RESOLUTION
	==========
	
	Reduce the length of you SET PATH TO statement to a length of less than 255
	characters and select Set as Default in the Options dialog.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available. This
	problem is fixed in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Restart Visual FoxPro.
	
	2. On the Tools menu, click Options; click the Syntax Coloring tab.
	
	3. Set some nondefault color, such as Comment Foreground, to bright red.
	
	4. Click Set As Default, then close the Options dialog box.
	
	5. Exit and restart Visual FoxPro.
	
	6. Run the following code from the Command Window:
	
	        SET PATH TO C:\DEVAPPS\VFP98\UTILS,C:\DEVELOP\COMMON98\CDBK98\libs, ;
	        C:\DEVELOP\COMMON98\CDBK98\progs, C:\DEVELOP\COMMON98\CDBK98\utils, ;
	        C:\DEVELOP\COMMON98\RDI98\LIBS, C:\DEVELOP\COMMON98\RDI98\PROGS, ;
	        C:\DEVELOP\COMMON98\RDI98\INCLUDE,..\LIBS, ..\PROGS, ..\INCLUDE, ;
	        data, libs, progs, include, graphics, metadata, reports
	
	7. On the Tools menu, click Options and click Set As Default, then click OK to
	  close the Options dialog box.
	
	8. Exit and restart Visual FoxPro.
	
	9. Open a new Program (.PRG) file and type in the following:
	
	        * test
	
	10. On the Tools menu, click Options, then click the Syntax Coloring tab.
	
	RESULTS:
	
	- After step 9, the comment is the default Forecolor of green, not red as set
	  in step 3.
	
	- The Comment Foreground color setting in the Syntax Coloring dialog back is
	  green again.
	
	- The Comment Forecolor is red, as expected, if the SET PATH TO string is less
	  than 255 characters in length and the Syntax Coloring is reset to red.
	
	- Settings from other pages in the Options dialog box may not be correctly
	  used.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbDSupport KBDSE kbVFp500abug kbVFp500bug kbVFp600fix kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a.6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
