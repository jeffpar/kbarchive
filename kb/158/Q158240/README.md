---
layout: page
title: "Q158240: BUG: Inconsistant Results with SET RELATION TO Command"
permalink: kb/158/Q158240/
---

## Q158240: BUG: Inconsistant Results with SET RELATION TO Command

	Article: Q158240
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 5.00
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the SET RELATION TO command repeated times within a program causes
	inconsistent results to appear in Browse windows and in Grids. While cycling
	through the program, some iterations do not show the proper one-to- many
	relationships between records in the Browse window or Grid object. The
	placeholder characters (asterisks) in the child record appear in different
	columns when you repeatedly executes the program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The code example below illustrates this behavior.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called Test that contains the following code:
	
	        IF !(FILE('custfree.dbf') AND FILE('ordfree.dbf');
	           AND FILE('ordifree.dbf'))
	        CLOSE ALL
	        SET DEFAULT TO c:\vfp5\samples\DATA
	        USE customer
	        COPY TO custfree
	        USE orders
	        COPY TO ordfree
	        USE orditems
	        COPY TO ordifree
	        USE ordifree
	        INDEX ON order_id TAG order_id
	        USE ordfree
	        INDEX ON cust_id TAG cust_id
	        USE custfree
	        INDEX ON cust_id TAG cust_id
	        ENDIF
	
	        CLOSE ALL
	
	        ON KEY LABEL f2 CLEAR EVENTS
	        FOR i=1 TO 10
	
	        CLOSE ALL
	
	        OPEN DATABASE testdata
	
	        USE customer
	
	        SELECT 0
	        USE ordifree
	        SET ORDER TO TAG order_id
	
	        SELECT 0
	        USE ordfree
	        SET ORDER TO TAG cust_id
	        SET RELATION TO order_id INTO ordifree
	
	        SET SKIP TO ordifree
	
	        SELECT 0
	        USE custfree
	        SET RELATION TO cust_id INTO ordfree
	
	        SET SKIP TO ordfree,ordifree
	        BROW LAST FIELDS custfree.cust_id,ordfree.order_id, ;
	           ordifree.line_no NOWAIT TITLE 'two'
	        READ EVENTS
	
	        NEXT
	        ON KEY LABEL f2
	        CLOSE ALL
	        CLEAR ALL
	
	2. Execute the program and note that asterisk characters appear in the Order_id
	  field and data appears in the Line_no field.
	
	3. Press F2 and note that the display reverses. The Line_no field now contains
	  asterisk characters and the Order_id field contains data. As you continue to
	  press F2 to reissue the SET RELATION TO command, these fields continue to
	  alternate their contents.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : 3.00 3.00b 5.00
	
	=============================================================================
	
