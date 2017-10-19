---
layout: page
title: "Q222893: XFOR: Troubleshooting Calendar Connector for Lotus Notes"
permalink: /kb/222/Q222893/
---

## Q222893: XFOR: Troubleshooting Calendar Connector for Lotus Notes

	Article: Q222893
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some of the steps that can be used to troubleshoot the
	Calendar Connector for Lotus Notes.
	
	MORE INFORMATION
	================
	
	The Free/Busy (F/B) process between Lotus Notes and Exchange Server is very
	different depending on the direction of the F/B request. This does mean that
	although an F/B transaction is successful in one direction, it does not
	correlate to the same result in the other direction.
	
	General Troubleshooting Steps
	-----------------------------
	
	- Run the Calendar Connector in console mode. For additional information, refer
	  to the following article in the Microsoft Knowledge Base:
	
	  Q197372 XFOR: How to Run Calendar Connector in Console Mode
	
	- Enable debug-level calendaring transactions on the Notes server. For
	  additional information, refer to the following article in the Microsoft
	  Knowledge Base:
	
	  Q199705 XFOR: How to Enable Detailed Logging for the Excalcon Task on Lotus
	  Notes
	
	F/B Query from Exchange Server to Lotus Notes
	---------------------------------------------
	
	- Ensure that the Lotus Notes client can successfully open a connection to the
	  Notes server. A good test is to start up the Notes client, and attempt to
	  open the Name and Address book on the Notes server. If there are more than
	  one Notes client workspaces on the server, make sure that the correct
	  Notes.ini file is being used for the test.
	
	- Make sure that Notes users do not explicitly exclude the user ID used by the
	  Calendar Connector. This can be ascertained by opening each person's Calendar
	  profile, and checking the Calendar Access option. Note that in some cases,
	  this user ID will be the same one used by the Microsoft Exchange Lotus Notes
	  Connector.
	
	- If Notes users have not modified their Calendar profile or entered any
	  Calendar data, there will be no F/B information returned by the Notes server.
	
	F/B Query from Lotus Notes to Exchange Server
	---------------------------------------------
	
	- Several changes have to be made to the mapping files used in directory
	  synchronization (dirsync) between Exchange Server and Lotus Notes. The
	  Amap.tbl file specifies which directory attributes of Exchange Server are
	  synchronized with the Lotus Notes directory. The Amap.tbl is located in the
	  Exchsrvr\Connect\Exchconn\Dxanotes directory.
	
	  1. Open the file with a text editor such as Notepad, and replace the tab stop
	     between CALDOM and 32 with a space.
	
	  2. Add the MailServer attribute to the end of the Amap.tbl file, and ensure
	     that only spaces are used to separate words. The resulting Amap.tbl should
	     look similar to the following:
	
	     FULLNAME    220 FullName 1
	     MAILDOMAIN  31  MailDomain 2
	     COMPANY     64  CompanyName NULL
	     DEPARTMENT  64  Department NULL
	     FIRSTNAME   64  FirstName NULL
	     LASTNAME    64  LastName NULL
	     LOCATION    128 Location NULL
	     SHORTNAME   64  ShortName NULL
	     UNID        64  $$UNID NULL
	     DN          256 $$DN NULL
	     USNCreated  16  $$USN
	     Initials    6   MiddleInitial NULL
	     Title       32  JobTitle NULL
	     Phone       20  OfficePhoneNumber
	     MobilePhn   20  CellPhoneNumber
	     Fax         20  OfficeFAXPhoneNumber
	     Resource    20  ResourceFlag
	     CALDOM      32  CalendarDomain
	     MAILSRV     32  MailServer
	
	     There will be a delay after dirsync from Exchange Server to Notes while the
	     Notes server reindexes some of the calendar information for Exchange
	     Server users. An immediate Free/Busy query might still fail until this
	     reindex process has completed.
	
	- The Calendar Connector for Lotus Notes also requires that the Exchange
	  Calendar Connector task be added to the Notes server. In general, this add-in
	  server task should be included in the Notes server's Notes.ini file,
	  otherwise this task will have to be started manually after a restart of the
	  Notes server.
	
	  You can check to see that the add-in has loaded properly by typing "show task"
	  (without the quotation marks) in the Notes Server Console. The task name is
	  Excalcon, and the status line will provide the information in the following
	  syntax:
	
	  Exchange Cal conn <status> to <exchange server name> for
	  <calendar system name>. Stats=<a> <b/c> <d>
	
	  +------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | Status Line Field      | Contents                                                                                                                          | 
	  +------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | <status>               | Connected or Not Connected, depending on whether or not the task is currently connected to the Calendar Connector.                | 
	  +------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | <exchange server name> | The name of the Exchange Server computer on which the Calendar Connector that this task is communicating with is installed.       | 
	  +------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | <calendar system name> | The name of the Calendar System, in most cases, Exchange.box.                                                                     | 
	  +------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | <a>                    | Total number of Exchange Server calendar requests made from Notes.                                                                | 
	  +------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | <b/c>                  | Average number of invitees over the average response time, in seconds, for each Exchange Server calendar request made from Notes. | 
	  +------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | <d>                    | Maximum response time for all calendar requests.                                                                                  | 
	  +------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	  Communication between this add-on task and Exchange Server is remote procedure
	  call (RPC)-based. If there are network communication problems, this would
	  also prevent the F/B information from reaching the Exchange Server computer.
	  For more information on testing RPC connectivity, refer to the following
	  article in the Microsoft Knowledge Base:
	
	  Q167260 XCLN: How to Use RPCPing to Test RPC Communication
	
	- Make sure that the Calendar fields in the Notes document for the "Foreign
	  Domain for Exchange" has been updated as well. In general, the information
	  for the Calendar fields should match up with the existing information in the
	  Mail fields.
	
	- When performing an F/B query for an Exchange Server user, do not include the
	  @EXCHANGE at the end of the address. This is contrary to how messaging works
	  between Lotus Notes and Exchange Server. For example, the following might be
	  used as a typical address for an Exchange Server user:
	
	  John Smith/Central/Microsoft@EXCHANGE
	
	  When entering the list of users to find F/B time, the address will be:
	
	  John Smith/Central/Microsoft
	
	- If multiple Notes users simultaneously request F/B information for Exchange
	  Server users, it may cause corruption to the Exchange.box file.
	
	- Notes users may also notice timeouts when attempting to query F/B information
	  for Exchange Server users. Further investigation might show that the F/B
	  transaction was sent successfully from Notes using the Exchange Calendar
	  Connector Add-on task to the Calendar Connector, but the response will fail
	  to come back to Notes. This might be due to a misconfiguration in the
	  Calendar Connector for the Lotus Notes connection.
	
	
	Additional query words: calcon; RTDS; notes calendar connection; tips; help
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
