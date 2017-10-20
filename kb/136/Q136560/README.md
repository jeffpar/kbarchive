---
layout: page
title: "Q136560: FIX: RI Fails with 'Trigger Failed' if dBASE Compatibility ON"
permalink: /kb/136/Q136560/
---

## Q136560: FIX: RI Fails with 'Trigger Failed' if dBASE Compatibility ON

{% raw %}

	Article: Q136560
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running the Referential Integrity (RI) Builder and selecting Cascade in
	the "Rules for Deleting" tab, you may receive a 'Trigger Failed' error message
	when you attempt to delete a record.
	
	CAUSE
	=====
	
	The current Visual FoxPro configuration has dBASE Compatibility set to ON.
	
	RESOLUTION
	==========
	
	Compatibility must be set OFF for the deletes to work with the RI Builder. You
	can either type SET COMPATIBILITY OFF in the Command window, or you can click
	Options on the Tools menu, click the General tab in the Options dialog box, and
	clear the dBase Compatibility check box.
	
	There is currently no way to have dBASE compatibility ON and make deletes with
	referential integrity.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On the Tools menu, click Options, and then click the General tab.
	
	2. Select the dBase Compatibility check box, and click OK.
	
	3. Type the following command in the Command window:
	
	     MODIFY DATA samples\data\testdata
	
	4. Using the right mouse button, click the relationship line between Customer
	  and Orders, and select Referential Integrity.
	
	5. Under Rules for Deleting, click Cascade, and then click OK. Answer Yes to all
	  further questions.
	
	6. Browse the Customer table and delete the record where cust_id = BONAP.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
