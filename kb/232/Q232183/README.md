---
layout: page
title: "Q232183: SMS: How to Export SMS 2.0 Status Messages for Analysis"
permalink: /kb/232/Q232183/
---

## Q232183: SMS: How to Export SMS 2.0 Status Messages for Analysis

{% raw %}

	Article: Q232183
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server version 2.0 offers a status reporting system that
	helps you to identify components, site systems, packages or advertisements that
	may be problematic. By default, a variety of Status Message Queries are provided
	for items such as the following:
	
	- Clients that were unable to install Software Inventory Agent.
	
	- Remote tools activity for a specific site.
	
	- Security rights created, deleted or modified.
	
	While the Status Message viewer simplifies looking at messages related to a
	specific problem or area of the system, it is sometimes necessary or beneficial
	to get a more complete picture of the health of the system by looking at all of
	the status messages. To obtain a complete picture of the site and its child
	sites, it may be useful to export all of the status messages in the system for
	analysis with a tool like Microsoft Excel. This article describes how to export
	these status messages to a text-delimited file for analysis with Microsoft
	Excel.
	
	MORE INFORMATION
	================
	
	To export all of the status messages in the system for analysis:
	
	1. In the Admin console System Status Node, view the Site Status and the site
	  code and name of any of the sites listed.
	
	2. Right-click the site name, and then click Show Messages\All.
	
	3. The Status Message Viewer opens. Wait for it to load all of the status
	  messages. On the toolbar, change "Original Query" to "All Status Messages".
	
	4. The All Status Messages dialog box prompts you for the conditions of the
	  query. If you are only interested in a specific date, click "Specify Date and
	  Time" and provide the date or date range you want. If you want a general date
	  range, click "Date and Time", and then choose the time integral you would
	  like to look at. For example, "All Status Messages since 2 Weeks Ago".
	
	5. Click OK.
	
	6. Wait for the status messages to populate and then click Save As on the File
	  menu.
	
	7. Choose a file name with a .xls file extension.
	
	8. In Status Viewer Options, click "All possible Columns" and "All messages".
	
	  NOTE: The file can then be opened in Microsoft Excel and saved in Excel
	  format. The first time you open the file, it starts the Text Import Wizard.
	  Click the "Finish" button and Excel is able to import the file correctly.
	
	  Once in Microsoft Excel, it is possible to sort messages by any category, such
	  as component or site. This sorting lets you identify trends in failures or
	  activities that may be affecting the health of your site. Using the Microsoft
	  Excel "AutoFilter" feature makes it very easy to sort columns and quickly
	  identify problem areas.
	
	  To use the Microsoft Excel AutoFilter, highlight all of the rows and columns
	  you have data in (including the first row). On the Data menu, point to
	  Filter, and then click AutoFilter. Drop down lists appear on the column
	  headings. You can then use these lists to set your filter and sorting
	  criteria. While more than one sort can be set, remember that if multiple sort
	  options are selected, it is possible that no messages will appear because
	  there may not be a message that meets all of your sort criteria. If you want
	  to save the file for later analysis, be sure to choose Save As and save it in
	  Microsoft Excel format.
	
	  For more information about using the Systems Management Server 2.0 Status
	  System, please refer to the Systems Management Server Administrator's Guide
	  Chapter 20: Understand the SMS Status System.
	
	Additional query words: prodsms tshoot sms2 sms20 isolate troubleshooting
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
