---
layout: page
title: "Q155937: FIX: SET COMPATIBLE ON Causes Problems with Crosstab Query"
permalink: kb/155/Q155937/
---

## Q155937: FIX: SET COMPATIBLE ON Causes Problems with Crosstab Query

	Article: Q155937
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have SET COMPATIBILITY ON for dBASE when you are running a crosstab query
	programmatically, the following error occurs:
	
	  Line: 17
	  Program: Destroy
	  Error: 1924
	  Message: MYCURSOR is not an object.
	  Code: SET FIELDS TO &cTmpStr
	
	If you have SET COMPATIBILITY ON for dBASE when you are running a crosstab query
	using the Query Designer, the following error occurs:
	
	  Line: 17
	  Program: Destroy
	  Error: 13
	  Message: Alias '<computer generated name>' is not found.
	  Code: SET FIELDS TO &cTmpStr
	
	After you click the OK button, the query appears.
	
	WORKAROUND
	==========
	
	When you run a crosstab query programmatically or use the Query Designer, SET
	COMPATIBLE must be OFF to avoid these error messages. By default, SET COMPATIBLE
	is OFF.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the error programmatically, type the following code into a program
	and run it. Make sure that SET COMPATIBLE is ON. From the Tools menu, click
	Options. Click the General tab and select the "dBASE Compatibility" check box:
	
	     PUBLIC MyCursor
	     SELECT Orders.to_city, YEAR(Orders.order_date), ;
	        SUM(Orders.order_amt) ;
	        FROM TestData!Orders ;
	        GROUP BY Orders.to_city, 2 ;
	        ORDER BY Orders.to_city, 2 ;
	        INTO CURSOR MyCursor
	     DO (_GENXTAB) WITH MyCursor
	     BROWSE NOMODIFY
	
	Additional query words: kbstream VFoxWin
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
