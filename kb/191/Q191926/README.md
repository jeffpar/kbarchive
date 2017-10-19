---
layout: page
title: "Q191926: FIX: VFP ODBC Driver Problem w/ {d 'yyyymmdd'} and Year &gt; 1999"
permalink: /kb/191/Q191926/
---

## Q191926: FIX: VFP ODBC Driver Problem w/ {d 'yyyymmdd'} and Year &gt; 1999

	Article: Q191926
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbODBC kbvfp500aBUG kbvfp600fix
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No records will be returned to a calling application if it passes date criteria
	using the following syntax:
	
	  {d '2000-01-01'}
	
	RESOLUTION
	==========
	
	Download the current Visual FoxPro ODBC driver from the Microsoft Data Access
	Components available from the following URL: http://www.microsoft.com/data/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual
	FoxPro ODBC Driver, version 6.00.8167. The ODBC driver ships with the Microsoft
	Data Access Components version 2.0, Microsoft Visual Studio 6.0, and Microsoft
	Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a data source on the Tastrade database.
	
	2. In a product, like MSQuery, create and run the following query:
	
	  Select * from Orders
	           where Order_Date between {d '1997-01-01'} and {d '2000-01-01'}
	
	This query fails to return records that match the criteria.
	
	Depending on the version of TasTrade being used, the OrderDate field name could
	differ. Please check this and change the name in the SQL statement as necessary.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 kbODBC kbvfp500aBUG kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
