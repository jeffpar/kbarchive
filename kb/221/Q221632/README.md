---
layout: page
title: "Q221632: FIX: Web Publishing Wizard Gives RunCode Runtime Error"
permalink: /kb/221/Q221632/
---

## Q221632: FIX: Web Publishing Wizard Gives RunCode Runtime Error

{% raw %}

	Article: Q221632
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Web Publishing Wizard, you may see one of the following
	errors:
	
	  RunCode Runtime Error
	
	  Error: 1923
	  Object OHTMLTAG2 is not found.
	
	  Method: RUNCODE
	  Line 0
	
	  -or-
	
	  RunCode Runtime Error
	
	  Error: 36
	  Command Contains unrecognized phrase/keyword.
	
	  Method: RunCode
	  Line 0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in Visual Studio 6.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	RunCode Error No. 1923:
	
	1. Under the Tools menu, select Wizards, and then Web Publishing.
	
	2. In Step 1 of the Web Publishing Wizard, select Free Tables from the Databases
	  and tables dropdown list. Click the ellipsis button (...), and then select
	  Labels.dbf from the VFP98 directory.
	
	3. Click the >> button to select all fields, and then click Next.
	
	4. In Step 2 of the Wizard, accept the defaults and click Next.
	
	5. In Step 3, select Tabular Hierarchical from the Data layouts list. Click
	  Advanced.
	
	6. In the Advanced dialog box, click Add.
	
	7. In the HTML Item dialog box, select Horizontal Rule from the Type dropdown
	  list.
	
	8. Select Insert After Data from the Location dropdown list. Click OK.
	
	9. In the Advanced dialog box, click Done.
	
	10. With the FoxPro window maximized, click Preview in the Web Publishing
	  Wizard.
	
	The page will appear in Internet Explorer. But before it does, a wait window with
	error message 1923 will appear in Visual FoxPro.
	
	Runcode Error No. 36:
	
	1. From the Tools menu, select Wizards, and then select Web Publishing.
	
	2. In Step 1 of the Web Publishing Wizard, select Free Tables from the Databases
	  and tables dropdown list. Click the ellipsis button (...), and then select
	  Labels.dbf from the VFP98 directory.
	
	3. Click the >> button to select all fields, and then click Next.
	
	4. In Step 2 of the Wizard, accept the defaults and click Next.
	
	5. In Step 3, click Advanced.
	
	6. In the Advanced dialog box, click Add.
	
	7. In the HTML Item dialog box, select Marquee from the Type dropdown list.
	
	8. From the Heading dropdown list in the Text formatting section, select H2.
	
	9. Click OK.
	
	10. In the Advanced dialog box, click Done.
	
	11. With the FoxPro window maximized, click Preview in the Web Publishing
	  Wizard.
	
	The page will appear in Internet Explorer. Before it does, however, a wait window
	with error message No. 36 will appear in Visual FoxPro.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
