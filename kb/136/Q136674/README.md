---
layout: page
title: "Q136674: PRB: Can't Print GrandChild Records in One-to-Many Relation"
permalink: kb/136/Q136674/
---

## Q136674: PRB: Can't Print GrandChild Records in One-to-Many Relation

	Article: Q136674
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300 kbvfp500 kbvfp500a kbvfp600
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A report for three tables, where the tables have a parent, child, and grandchild
	one-to-many relation, does not display all the related records in the grandchild
	table for each of the records in the child table. Only the first related
	grandchild record prints.
	
	RESOLUTION
	==========
	
	To list all the related records in the grandchild table for each of the records
	in the child table:
	
	- Use the SET SKIP command. Place it in the Init event of the report's data
	  environment to set the one-to-many relation from child and grandchild into
	  the parent.
	
	-or-
	
	- Set the IntitialSelectedAlias property of the report's data environment to
	  the child table.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Testdata Database that should be in the \Samples\Data directory
	  under the Main Visual FoxPro directory.
	
	2. Create a new report, and call it Test.
	
	3. Open the data environment of the report and add the Customer, Orders, and
	  OrdItems tables to it. Make sure the relation is set among these tables so
	  that the Orders table is a child of the Customer table, and the OrdItems
	  table is a child of the Orders table. The OrdItems table is the grandchild of
	  Customer table.
	
	4. Set the OneToMany property of both the relations in the report data
	  environment to true (.T.-True).
	
	5. Set the Order property of the Customer table to Cust_Id and the Order
	  property of the Orders table to Order_Id.
	
	6. Set the InitialSelectedAlias property of the report data environment to the
	  Customer table.
	
	7. Create a report group for Customer.Cust_Id and another report group for
	  Orders.Order_Id.
	
	8. Place the Cust_Id and Company fields of the Customer table in the first group
	  header (Customer.Cust_Id).
	
	9. Place the Order_Id and Order_Amt fields of the Orders table in the second
	  group header (Orders.Order_Id).
	
	10. Place the Line_No,Product_ID, and Unit_Price fields of the OrdItems table in
	  the Detail band.
	
	11. Add whatever titles you think are necessary to each of the Bands.
	
	12. Preview the Report. Only one OrdItems record related to each of the Orders
	  record appears.
	
	Example Resolution
	------------------
	
	Set the InitialSelectedAlias of the report data environment to Orders.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300 kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
