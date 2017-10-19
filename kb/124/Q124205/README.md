---
layout: page
title: "Q124205: FIX: Browse Does Not Repaint Correctly"
permalink: /kb/124/Q124205/
---

## Q124205: FIX: Browse Does Not Repaint Correctly

	Article: Q124205
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a browse is in effect and the table order is changed, the current record
	may appear to change.
	
	WORKAROUND
	==========
	
	To work around the problem, use the following code:
	
	     CLOSE ALL
	     USE clients
	     SET ORDER TO Client_id
	     ON KEY LABEL F4 DO f4_key
	     ON KEY LABEL F5 DO f5_key
	     BROWSE NOEDIT
	     ON KEY
	     CLOSE ALL
	
	     PROCEDURE f4_key
	     SET ORDER TO 0
	     SHOW WINDOW clients REFRESH
	     GO RECNO()
	
	     PROCEDURE f5_key
	     SET ORDER TO 0
	     SHOW WINDOW clients REFRESH
	     GO RECNO()
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the following code to generate the BROWSE:
	
	     close all
	     use clients
	     set order to Client_id
	     on key label f4 do f4_key
	     on key label f5 do f5_key
	     browse noedit
	     on key
	     close all
	
	     procedure f4_key
	     set order to 0
	     show window clients refresh
	     *go recno()
	
	     procedure f5_key
	     set order to 0
	     show window clients refresh
	     *go recno()
	
	2. Use the arrow keys to move to the 'Advantage Computer School' record.
	
	3. Press the F4 key to see the current record change to the 'Big Masters'
	  record.
	
	NOTE: The Clients table is not included with Visual FoxPro 3.0 but the behavior
	can be reproduced and corrected using the same techniques as described above, on
	the Customer table with an index on the cust_id or customer_id field.
	
	Additional query words: VFoxWin FoxWin buglist2.60a fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.6a,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
