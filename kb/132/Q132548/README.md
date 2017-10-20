---
layout: page
title: "Q132548: HOWTO: Use More Than One Table in a Combo or List Box"
permalink: /kb/132/Q132548/
---

## Q132548: HOWTO: Use More Than One Table in a Combo or List Box

{% raw %}

	Article: Q132548
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to use fields from multiple tables in a combo
	or list box by placing a SQL SELECT command in the RowSource property.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form.
	
	2. Open up the Data Environment and place the Products and Orditems tables in
	  it.
	
	3. Select the Combo box or List box tool from the form[ASCII 146]s Control
	  toolbar, and place a combo or list box on the form.
	
	4. Set the FirstElement property to 1, the NumberOfElements property to 1, and
	  the RowSourceType property to 3-SQL Statement.
	
	5. Add a SQL statement such as the following in the RowSource property:
	
	        SELECT DISTINCT(padl(alltrim(orditems.product_id),2," ")) + ;
	           "....." + products.prod_name AS prod FROM orditems, products ;
	           INTO CURSOR items ;
	           WHERE products.product_id = orditems.product_id ;
	           ORDER BY prod
	
	6. Run the form, and click the combo box down arrow to open up the list. The
	  Product_id from the Orditems table will be the first thing in each line item
	  with periods leading over to the product name (Prod_name) derived from the
	  Products table.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
