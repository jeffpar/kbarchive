---
layout: page
title: "Q150814: Creating Audited Software Report with Crystal Reports"
permalink: kb/150/Q150814/
---

## Q150814: Creating Audited Software Report with Crystal Reports

	Article: Q150814
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup smshowto
	Last Modified: 27-JUL-2001
	
	1.00 1.10 1.20
	WINDOWS
	kbnetwork kbusage kbhowto
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives a brief description of how to set up a report in Crystal
	Reports for Audited Software.
	
	Crystal Reports is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	MORE INFORMATION
	================
	
	To set up a report in Crystal Reports for Audited Software, complete the
	following steps:
	
	1. From the toolbar, select the New Report button.
	
	2. From the SQL Table, select Report.
	
	3. Use the ODBC connection to the SMS database for "SQL Types."
	
	  NOTE: This option will not appear if you have already run a report for SMS.
	
	4. In the Choose SQL Table dialog box, select SMS.dbo.vAudited_Software from the
	  SQL Tables list box. Click OK.
	
	5. When the report window comes up, choose Database|Add Database to Report from
	  the menu bar.
	
	6. From the SQL Tables list box, select SMS.dbo.vIdentification. Click OK.
	
	7. In the Define Link dialog box, click OK.
	
	8. In the Links dialog box, click Done.
	
	9. Drag Name0 from the Insert Database Field dialog box to the Details section
	  of the report.
	
	10. Drag Package_Name0 from the Insert Database Field dialog box to the Details
	  section of the report.
	
	11. From the menu bar, choose Report|Refresh Report Data.
	
	12. Make formatting changes as necessary.
	
	13. Save the new report.
	
	NOTE: Microsoft is unable to provide support for Crystal Reports. Crystal Reports
	is supported by Crystal Services at (604) 669-8379.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup smshowto 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
