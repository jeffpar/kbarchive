---
layout: page
title: "Q103031: PRB: &quot;SQL Expression Too Complex&quot; with Long IN Clause"
permalink: /kb/103/Q103031/
---

## Q103031: PRB: &quot;SQL Expression Too Complex&quot; with Long IN Clause

{% raw %}

	Article: Q103031
	Product(s): Microsoft FoxPro
	Version(s): 2.0,2.5,2.5a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "SQL expression too complex" error message appears if you have used 25 or
	more values in the IN clause of the SQL SELECT command.
	
	CAUSE
	=====
	
	The maximum number of values you may include in the IN clause is 24.
	
	RESOLUTION
	==========
	
	See the "More Information" section for an example of the problem and a
	workaround.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	FoxPro 2.0, 2.5, or 2.6
	
	1. Use the Customer.dbf table in the Tutorial directory.
	
	2. Issue the following SQL SELECT command:
	
	  Select * from customer where cno in;
	  ('1','2','3','4','5','6','7','8','9','10','11','12','13','14','15',;
	  '16','17','18','19','20','21','22','23','24','25')
	
	The "SQL expression too complex" error message appears.
	Visual FoxPro 3.0, 5.0, 6.0
	
	1. Use the Customer.dbf table. In Visual FoxPro 3.0 and 5.0, Customer.dbf is
	  located in the Samples\Data folder. In Visual FoxPro 6.0 and later, use this
	  command:
	
	  USE HOME(2)+"data\customer.dbf"
	
	2. Issue the following SQL SELECT command:
	
	  Select * from customer where cust_id in;
	  ('ALFKI','ANATR','ANTON','AROUT','BERGS','BLAUS','BLONP','BOLID','BONAP','BOTTM',;
	     'BSBEV','CACTU','CENTC','CHOPS','COMMI','CONSH','DRACD','DUMON','EASTC','ERNSH',;
	     'FAMIA','FISSA','FOLIG','FOLKO','FRANK')
	
	The "SQL expression too complex" error message appears.
	
	Workaround
	----------
	
	1. In FoxPro 2.x, create a temporary table with one field in it called CNO. In
	  Visual FoxPro, name the field Cust_id. The Temp table should contain the
	  values in the CNO or Cust_id field that you want to find in the Customer
	  table.
	
	2. Issue one of the following SQL SELECT commands depending on your version of
	  FoxPro:
	
	  ** For FoxPro 2.x use this line
	  Select * from customer where cno in (select cno from temp)
	
	  ** For Visual FoxPro, use this line
	  Select * from customer where cust_id in (select cust_id from temp)
	
	Additional query words: FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :2.0,2.5,2.5a,3.0,3.0b,5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}
