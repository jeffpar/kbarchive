---
layout: page
title: "Q200972: SMS: Custom Collection Examples"
permalink: /kb/200/Q200972/
---

## Q200972: SMS: Custom Collection Examples

	Article: Q200972
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbCollections kbQuery
	Last Modified: 22-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server version 2.0, you can build collections based on the
	resource class. This article describes how to create two sample queries to:
	
	- Find domain controllers
	
	- Find all computers in a particular subnet
	
	MORE INFORMATION
	================
	
	Steps to Create a Query to Find All Domain Controllers at a Site
	----------------------------------------------------------------
	
	NOTE: This procedure assumes the domain controller is a client and hardware
	inventory is turned on.
	
	1. In the SMS Administrator console, right-click Queries, point to New, and
	  click Query on the shortcut menu.
	
	2. Type TEST1 for the Name.
	
	3. In the Object Type box, enter System Resource if it is not already entered.
	
	4. Click Edit Query Statement, then click the icon with the yellow rays.
	
	5. Click the Select button on the Result Properties page.
	
	6. Select Computer System in the Attribute class box and select Name in the
	  Attribute box. Then click OK.
	
	7. On the Result Properties page, select Ascending in the Sort box. Click OK.
	
	8. Click the icon with the yellow rays. Repeat steps 5 through 7 but replace
	  Name with Roles in the Attribute box (step 6) and replace Ascending with
	  Unsorted in the Sort box (step 7).
	
	9. Select the Criteria tab under TEST1 Query Statement Properties. Click the
	  icon with the yellow rays. On the Criterion Properties page, enter the
	  following:
	
	   - Criterion Type: simple value
	
	   - Where: Choose Select...
	
	      - Attribute class: Computer System
	
	      - Attribute: Roles
	
	   - Operator: is like
	
	   - Value: %Domain_Controller%
	
	Click OK.
	
	10. Click OK. On the Query Properties page, limit the collection to All Windows
	  NT Server Systems.
	
	11. Click OK to save the query.
	
	Steps to Create a Query to Find All Computers in a Subnet
	---------------------------------------------------------
	
	1. In the SMS Administrator console, right-click the Queries node, point to New,
	  and click Query on the shortcut menu.
	
	2. Type TEST2 in the Name box.
	
	3. In the Object Type box, enter System Resource if it is not already entered.
	
	4. Click Edit Query Statement and then click the icon with the yellow rays.
	
	5. On the Result Properties page, click the Select button.
	
	6. Select System Resource in the Attribute class box and select Name in the
	  Attribute box. Then click OK.
	
	7. On the Result Properties page, select Ascending in the Sort box. Click OK.
	
	8. Click the icon with the yellow rays. Repeat steps 5 through 7 but replace
	  Name with IP Addresses in the Attribute box (step 6) and replace Ascending
	  with Unsorted in the Sort box (step 7).
	
	9. Repeat step 8 but replace Name with IP Subnets.
	
	10. Select the Criteria tab under TEST2 Query Statement Properties. Click the
	  icon with the yellow rays. On the Criterion Properties page, select the
	  following:
	
	   - Criterion Type: simple value
	
	   - Where: Choose Select...
	
	      - Attribute class: System Resources
	
	      - Attribute: IP Subnets
	
	   - Operator: is equal to
	
	   - Value: click the Value button and select the subnet you want.
	
	Click OK
	
	11. Click OK. On the TEST2 Query Properties page, select Not Collection Limited
	  (or choose a selection that will further limit the search, such as Win98 on
	  subnet x).
	
	12. Click OK to save the query.
	
	Collections can be created based on the queries noted earlier: Collections/New
	<enter name>/Membership Rules/Query Rule properties/Name (TEST1 or TEST2
	in the example above).
	
	Additional query words: prodsms sms20 Query Collections smsui
	
	======================================================================
	Keywords          : kbsms200 kbCollections kbQuery 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
