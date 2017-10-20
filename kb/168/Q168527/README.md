---
layout: page
title: "Q168527: HOWTO: Simulate a Detail Band Longer Than One Page"
permalink: /kb/168/Q168527/
---

## Q168527: HOWTO: Simulate a Detail Band Longer Than One Page

{% raw %}

	Article: Q168527
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro has a limitation on the length of report bands. The maximum length
	for a single band is the page length.
	
	It is possible to create a report that simulates a detail band with a length
	greater than the length of a single page. This requires setting up a dummy data
	grouping on RECNO(<table with records repeating in the detail band>), and
	creating what amounts to a larger "virtual" Detail Band comprised of the RECNO()
	Group Header, the actual Detail Band, and the RECNO() Group Footer. See the MORE
	INFORMATION section of this document for details.
	
	MORE INFORMATION
	================
	
	To create a sample report demonstrating this behavior, complete the following
	steps:
	
	1. Create a new report.
	
	2. Make a Quick Report using Report/Quick Report from the Visual FoxPro menu.
	
	3. Select the Customer table in the VFP\Samples\Data directory for Visual FoxPro
	  versions 3.0 and 5.0 or the home(2)+"data" directory for Visual FoxPro 6.0
	  when prompted for a table.
	
	4. From the Quick Report dialog box, select the right-most "Field layout"
	  button, and then click OK.
	
	5. In the Report Designer, set up a data grouping. This is done by selecting
	  Report/Data Grouping from the menu.
	
	6. In the "Group expressions" box, type the expression "RECNO('customer')",
	  without the outer quotes, into the top box. Optionally, you may select the
	  "Start each group on a new page" check box to start each new virtual detail
	  band on a new page. Click OK to close the dialog box.
	
	7. Double-click on the Page Header separator bar, and set the Page Header height
	  to .25", and select the "Constant band height" check box.
	
	8. Double-click on the Page Footer separator bar, and set the Page Footer height
	  to .25".
	
	9. To simulate a two-page "detail band," set the Group Header for the RECNO()
	  band height to 10 inches (for portrait page layout), and the Detail Band
	  height to 10 inches. These are accessed by double-clicking the separator bar
	  for each band. Select the "Constant band height" check box for each band as
	  well, then click OK to close the dialog box.
	
	10. To simulate a three-page "Detail Band," follow Step 9 above but also set the
	  Group Footer band height for the RECNO() band to 10 inches as well and
	  select the "Constant band height" check box, and then click OK to close the
	  dialog box.
	
	11. Place some of the fields added when the Quick report was made at the top and
	  bottom of each of the bands sized in Step 9 and optionally Step 10.
	
	12. Preview the report. Each of the 10-inch bands print on a different page, but
	  since the group breaks on RECNO() the group header and footer will also
	  print information from that detail record alone.
	
	NOTES:
	
	- It is not necessary to have the Group and Detail bands exactly 10 inches, but
	  the sum of the height of each of these individual bands plus the Page Header
	  and Page Footer heights should be around 10.5 inches.
	
	- Having report fields that print memo data or are set to stretch can cause
	  unexpected results with the above scenario.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
