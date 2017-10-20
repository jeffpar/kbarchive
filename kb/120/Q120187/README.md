---
layout: page
title: "Q120187: PRB: Query to a Report Causes an Inaccurate Sum or Count"
permalink: /kb/120/Q120187/
---

## Q120187: PRB: Query to a Report Causes an Inaccurate Sum or Count

{% raw %}

	Article: Q120187
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6; MS-DOS:2.0,2.5x,2.6,2.6a; UNIX:2.6; WINDOWS:2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running a query to a report using two or more databases with a
	one-to-many relationship and the report is counting or performing other math
	functions on fields from the parent database, the count or value from the math
	functions is inaccurate.
	
	RESOLUTION
	==========
	
	To get an accurate count, you need to create a user-defined function (UDF). For
	an example of a UDF that produces the correct count, see "Workaround" in the
	"More Information" section below.
	
	MORE INFORMATION
	================
	
	When the report performs a count or any math function, it looks to the source
	database for its information. If the data comes from a query, the source is a
	temporary table called QUERY. If the query had two or more tables in it with a
	one-to-many relationship, there will be a matching parent field for each child
	field.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Use the CUSTOMER.DBF and INVOICES.DBF tables that are found in the
	  <FoxPro_directory>\TUTORIAL subdirectory.
	
	2. Create a report that contains the CUSTOMER.CNO, CUSTOMER.STATE, INVOICES.INO,
	  and INVOICES.ITOTAL fields. Just put the field names in the report and mark
	  the fields coming from CUSTOMER so they don't print repeated values.
	
	3. Group the report by state.
	
	4. In the group footer band, place the CNO field and select Calculate and then
	  Count.
	
	5. Save the report.
	
	6. Open a query and add the CUSTOMER and INVOICES tables.
	
	7. Add the fields listed above to the fields list in the query.
	
	8. Order the query by state.
	
	9. Output the query to the report saved in step 5 above.
	
	If you look at the group from the state of "GA", you will see that the count is 7
	but that there are only four different companies.
	
	WORKAROUND
	==========
	
	To obtain the correct count, you can use the following UDF.
	
	
	     FUNCTION mycount
	     PARAMETERS x
	     recnum = RECNO()
	     mygroup = state
	     SELECT DISTINCT customer.cno, customer.state;
	       FROM customer, invoices;
	       WHERE invoices.cno = customer.cno;
	       AND customer.state = mygroup;
	       INTO CURSOR counter
	     COUNT TO x
	     SELECT QUERY
	     GO recnum
	     RETURN x
	
	
	REFERENCES
	==========
	
	FoxPro for Windows "Getting Started," Chapter 9
	FoxPro for Windows and MS-DOS "Language Reference," page L3-1114
	
	Additional query words: VFoxWin FoxUnix FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5x,2.6; MS-DOS:2.0,2.5x,2.6,2.6a; UNIX:2.6; WINDOWS:2.5x,2.6,2.6a,3.0
	
	=============================================================================
	

{% endraw %}
