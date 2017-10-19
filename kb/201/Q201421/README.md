---
layout: page
title: "Q201421: XCLN: Migrated Calendar Information Message"
permalink: /kb/201/Q201421/
---

## Q201421: XCLN: Migrated Calendar Information Message

	Article: Q201421
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following message appears in any client (Exchange 4.0, 5.0, Outlook) used
	after you use the Microsoft Exchange Migration wizard for Microsoft Mail for PC
	Networks with Microsoft Exchange Server version 5.5 and choose to migrate the
	schedule information:
	
	  From: Postoffice User1
	  Sent: Thursday, July 23, 1998 11:22 AM
	  To: Postoffice User1
	  Subject: Migrated Calendar Information
	
	The attached file is your calendar information. You can import all your calendar
	information by following the steps in the "More Information" section for your
	client platform.
	
	MORE INFORMATION
	================
	
	Microsoft Outlook Client for Windows 95 and Windows NT
	------------------------------------------------------
	
	1. On the File menu in Microsoft Outlook, choose Save Attachments.
	
	2. Type the location and filename for the .cal or .scd file to be saved as, and
	  click Save.
	
	3. On the File menu, click Import and Export.
	
	4. Click "Import from Schedule+ or another program", and click Next.
	
	5. Click Schedule+ 1.0 if you have a .cal file or Schedule+ 7.0 if you have an
	  .scd file.
	
	6. Select the file to be imported by entering the path and filename that you
	  specified in step 2.
	
	7. Type the password for the calendar file, and click OK.
	
	8. Click Finish, and the calendar information is migrated.
	
	Microsoft Outlook Calendar for Windows for Workgroups v3.11 and Windows v3.1
	----------------------------------------------------------------------------
	
	If your messages have been migrated to the Exchange Server information store,
	your calendar information is automatically migrated for you. After you confirm
	that your calendar information has been correctly migrated, you can delete the
	message containing a backup copy of your calendar information.
	
	If your messages have been migrated to a personal store file (.pst), you will
	need to import your calendar information using the following steps:
	
	1. On the File menu on the calendar message, click Save As.
	
	2. Click Attachments, indicate the location and filename to be saved, and click
	  OK.
	
	3. Start Microsoft Outlook Calendar by clicking the Show Calendar toolbar button
	  in Microsoft Outlook, or running Microsoft Outlook Calendar from the group
	  where it was originally installed.
	
	4. On the main Microsoft Outlook Calendar menu, click File, click Open, and then
	  click Archive or Project Schedule.
	
	5. Select the file to be opened by entering the path and filename that you
	  specified in step 2, and click OK.
	
	6. In this new Microsoft Outlook Calendar window, click File, click Export, and
	  then click Outlook Calendar Interchange.
	
	7. Select a location and file name for the export file (.sc2), click OK, and
	  then close this Outlook Calendar window.
	
	8. On the main Microsoft Outlook Calendar menu, click File, click Import, and
	  then click Outlook Calendar Interchange.
	
	9. Select the file to be imported by entering the path and filename that you
	  specified in step 7, and click OK. At this point, the calendar data from the
	  intermediate export file is imported into your Microsoft Outlook Calendar:
	
	  <File: 00000000.scd>
	
	Exchange Server version 5.5 generates the message listed in the "Symptoms"
	section for use or future use with Outlook. If Schedule+ is still being used for
	calendaring, this message can be saved for future use. The calendar information
	from the MS Mail migration has been placed on the Exchange Server computer; the
	attached file is for use or future use with Outlook only.
	
	To view the migrated Schedule+ information follow the steps below:
	
	1. Run the Schedule+ program installed on the workstation. Schedule+ should
	  display a Welcome to Schedule+ dialog box requesting information regarding
	  usage.
	
	2. Click "I want to use an existing schedule file", and click OK. The Select
	  Local Schedule dialog box is displayed.
	
	  Creating a new Schedule+ file synchronizes with the information already
	  imported on the Exchange Server computer. You may instead click "I do not
	  want a schedule file on this machine". This prevents an .scd file from being
	  created, and allows you to work directly from the server where the Schedule+
	  information has been imported to.
	
	When you use the Microsoft Exchange Server version 5.0 Migration wizard for MS
	Mail PC Networks, the end user does not receive this message nor an attached
	.scd file in the Exchange 5.0 Client; the Schedule+ information is automatically
	placed on the server and can be accessed same as above.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
