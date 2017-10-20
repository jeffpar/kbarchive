---
layout: page
title: "Q276271: SMS: Using the SMS Extract Utility for SMS Reporting"
permalink: /kb/276/Q276271/
---

## Q276271: SMS: Using the SMS Extract Utility for SMS Reporting

{% raw %}

	Article: Q276271
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Microsoft BackOffice Resource Kit SMS Extract utility to produce
	reports in Microsoft Excel. You cannot produce new queries with this tool,
	however, you can find the results of any existing query.
	
	MORE INFORMATION
	================
	
	To import the results of an existing SMS query into an Excel workbook, follow
	these steps:
	
	1. In Excel<A0>97, on the File menu, click New.
	
	2. Click the Smsextract.xlt template on which to base the new workbook.
	
	3. Depending on your Excel settings, when you create the new workbook, a dialog
	  box may appear that states that the workbook, which you are opening, contains
	  macros. If you want to use this tool, click Enable Macros. If you do not want
	  to run the macros immediately, you can run the ThisWorkbook.Workbook_Open
	  macro at a later time. When the ThisWorkbook.Workbook_Open macro runs, the
	  SMS Login dialog box opens.
	
	4. In the SMS Login dialog box, type the name of the site system that is acting
	  as your site server (do not use leading slashes), your user name (in
	  domain\user syntax), and password. Click OK.
	
	  The first time you run this tool, you will see a period (.) as the server name
	  value, and SMSDEMO as the user name value. Replace these values by entering
	  your own values for server, and user name. The values that you supply are
	  saved in the registry of the computer that you are using when you run this
	  tool. The next time you use this tool, it obtains the appropriate server, and
	  user name from the registry. Even if you create a new workbook from the
	  template, the server, and user name are read from the registry values of the
	  computer on which you are working.
	
	  Note: The SMS site administrator must grant WMI permissions to your user
	  account, either by membership in a group that has been granted rights, or
	  individually.
	
	5. The "Select Site Query to Import" dialog box opens. This dialog box displays
	  all the SMS queries that are found on the specified site server. Choose one
	  or more queries to import. By using the CTRL key, you can choose multiple
	  queries. When you have finished choosing the queries that you want to import,
	  click OK. The workbook imports the results returned by each selected query.
	  The result set of each query is displayed in an individual worksheet within
	  the workbook. The columns display the class attribute that are being queried;
	  for each row, there is an instance of data that is returned by the query for
	  that attribute, as shown in the following figure. If a query, such as the
	  "All Systems with Specified Software File Name and File Size" query, requires
	  input, a dialog box appears so that you can type in the necessary value. You
	  are notified when any query returns an empty result, and the tool skips the
	  display of that query.
	
	6. Save the workbook by either accepting the default file name, or by specifying
	  a new file name. You can open, and run a previously saved Query Extract
	  workbook. When you do so, you are prompted to choose whether to resave, or
	  discard the previous data. If you save the data, new spreadsheets are added
	  to the workbook to hold additional result sets. If you choose to discard the
	  data, the old data is removed, and the new workbook will contain only the
	  newly-imported query results.
	
	REFERENCES
	==========
	
	For information about granting rights to WMI data, and the SMS Provider, see
	Chapter 19, "Creating Administrative Reports," in the Microsoft Systems
	Management Server 2.0 Administrator's Guide.
	
	Additional query words: prodsms extract report reporting
	
	======================================================================
	Keywords          : kbsms200 
	Component         : ResKit-SupportTool SystemManagement
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
