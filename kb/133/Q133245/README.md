---
layout: page
title: "Q133245: BUG: One-to-Many Report Wizard Doesn't Sort in Correct Order"
permalink: /kb/133/Q133245/
---

## Q133245: BUG: One-to-Many Report Wizard Doesn't Sort in Correct Order

{% raw %}

	Article: Q133245
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The sort order selected in Step 4 of the One-to-Many Report Wizard is not
	applied correctly in some cases.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code to create the databases and tables needed. This
	  example uses the existing sample database (Testdata.dbc), so you need to have
	  the samples installed for this example to work.
	
	        *
	        * REPTSET.PRG: Setup code for duplicating problem
	        *
	        CLOSE ALL
	        CREATE DATABASE CUSTVW
	        CREATE SQL VIEW CUSTVW1 AS SELECT CUST_ID,COMPANY,MAXORDAMT;
	           FROM C:\VFP\SAMPLES\DATA\TESTDATA!CUSTOMER
	        OPEN DATABASE C:\VFP\SAMPLES\DATA\TESTDATA
	        USE ORDERS
	        COPY TO ORDER.DBF
	        CLOSE ALL
	        CREATE DATABASE CUSTOMER
	        ADD TABLE ORDER
	        USE ORDER
	        INDEX ON CUST_ID TAG CUST_ID DESCENDING
	        CLOSE ALL
	
	2. Open the new databases Custvw and Customer.
	
	3. Run the One-to-Many Report Wizard. (On the Tools menu, click Wizards, and
	  then click Report.
	
	4. From Custvw.dbc database, choose the Custvw1 view for the parent table and
	  add all the fields.
	
	5. From the Customer.dbc database, choose the Order table and several fields
	  including Cust_Id. For example, choose Order_Id, Cust_Id and Order_Amt. Set
	  Cust_Id is as the matching field for both tables in step 3.
	
	6. Under Sort Order (step 4 of the Report Wizard), choose Cust_Id - descending.
	
	7. Choose finish and preview. You will see that the report is in Cust_Id
	  ascending order even though you specified descending order.
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
