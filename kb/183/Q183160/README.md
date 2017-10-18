---
layout: page
title: "Q183160: Outdated Country or Region Names in PbAdmin"
permalink: kb/183/Q183160/
---

## Q183160: Outdated Country or Region Names in PbAdmin

	Article: Q183160
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400bug
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create phone books using the Phone Book Administrator (PBA) on a
	computer running Internet Explorer, certain countries or regions do not appear
	in the Connection Manager list.
	
	CAUSE
	=====
	
	When you update a phone book that contains a different country/region name than
	the one included in the PBA, those countries or regions do not appear when you
	use the 32-bit version of TAPI. This problem only occurs in a minority of cases
	where the country or region name has changed recently. For example, Zaire
	recently changed its name to the Democratic Republic of the Congo. This problem
	occurs because Internet Explorer has a newer country/region file then TAPI or
	Phone Book Administrator.
	
	RESOLUTION
	==========
	
	Apply the hot fix described below or manually update the country/region codes by
	performing the following steps:
	
	Note: Updating the Country/Region List Connection Point Services included in
	Windows NT 4 Option Pack can apply to the TAPI country/region list used by
	Connection Point Services.
	
	Note: You may want to edit the country or region list to reflect changes in
	country/region names or country/region dialing codes. The TAPI dialing codes are
	updated with each release. Therefore, you may want or need to edit the
	Countries/Regions list supplied with Connection Point Services.
	
	To add or edit a country/region:
	
	1. For each country or region code you edit, change the related OP to another
	  temporary country or region. Use the Connection Point Administration tool to
	  edit each affected POP. Perform this step when you change country or region
	  codes. If you are only editing the country/region name, you can skip this
	  step.
	
	2. Open your Phone Book database with Microsoft Access 95 or Access 97. This
	  database is an Access MDB file stored in the Connection Point Admin
	  directory. The file has the same Phone Book name as displayed in the
	  Connection Point Administration tool.
	
	3. Open the Datasheet view of the Country/Region table. This table contains two
	  fields, CountryNumber and CountryName. The first is a unique integer value
	  corresponding to the TAPI code. The CountryName is a 60-character text field
	  that contains the country or region name. Values in the CountryName field are
	  localized.
	
	4. Find the country or region you want to edit, and change the value(s) of the
	  data fields.
	
	5. Close the Datasheet view of the Country/Region table and close the Phone Book
	  database window.
	
	6. Using the Connection Point Administration tool, assign each POP edited in
	  step 1 to the correct country or region. Your new phone book releases will
	  now contain the updated country/region names and country/region codes. A user
	  will receive the updated country/region information with their next phone
	  book update.
	
	Country/Region Edits:
	
	The following list of country/region entries should be updated. The current code
	and country/region name is given followed by the correct values.
	
	  Current                    Change To
	  -------                    ---------
	  3302, Monaco               377, Monaco
	  298, Faroe Islands         298, Faeroe Islands
	  853, Macao                 853, Macau SAR
	  <missing>                  800, International Freephone Service
	  <missing>                  870, INMARSAT
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. A supported fix is now available, but has not
	been fully regression-tested and should be applied only to systems experiencing
	this specific problem. Unless you are severely impacted by this specific
	problem, Microsoft recommends that you wait for the next Service Pack that
	contains this fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbiis400bug 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
