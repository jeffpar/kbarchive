---
layout: page
title: "Q156667: INFO: Limitations of View Designer vs. CREATE SQL VIEW Command"
permalink: kb/156/Q156667/
---

## Q156667: INFO: Limitations of View Designer vs. CREATE SQL VIEW Command

	Article: Q156667
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp600 KbDBFDBC
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The View Designer in Visual FoxPro is a useful tool for creating views. This
	article discusses a couple of limitations on creating views with the View
	Designer versus creating views programmatically using the CREATE SQL VIEW
	command.
	
	MORE INFORMATION
	================
	
	The following limitations exist when creating views with the View Designer:
	
	1. The View Designer is unable to load any views that have a sub-select in the
	  filter.
	
	  Example:
	
	     CREATE VIEW view1 AS SELECT order_id FROM orders ;
	          WHERE order_id IN (SELECT order_id FROM order_line_items)
	
	2. With the new JOIN feature, views that are built with joins in the View
	  Designer must be built in a specific manner:
	
	  Example 1: 3 tables: tableA, tableB, tableC
	              CORRECT: tableA -> tableB -> tableC
	
	     CREATE VIEW view1 AS SELECT * FROM tableA ;
	       INNER JOIN tableB INNER JOIN tableC ON ;
	       tableB.linkcol = tableC.linkcol ON ;
	       tableA.linkcol = tableB.linkcol
	
	  Example 2: 3 tables: tableA, tableB, tableC
	              INCORRECT : tableA -> tableB,  tableA -> tableC
	
	     CREATE VIEW view1 AS SELECT * FROM tableA ;
	       INNER JOIN tableB INNER JOIN tableC ON ;
	       ON tableA.linkcol = tableC.linkcol ON ;
	       tableA.linkcol = tableB.linkcol
	
	Example 2 will cause an error when you try to load it into the View Designer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp600 KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	
