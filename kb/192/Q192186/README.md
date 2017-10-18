---
layout: page
title: "Q192186: XADM: Troubleshooting Dr. Watson in Store.exe Because of IMC"
permalink: kb/192/Q192186/
---

## Q192186: XADM: Troubleshooting Dr. Watson in Store.exe Because of IMC

	Article: Q192186
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists steps used to troubleshoot Dr. Watson errors in Store.exe,
	caused by the Microsoft Exchange Server Internet Mail Service. The problem is
	caused by a "bad" message coming into the MSExchangeIMS. The Exchange Server
	information store will return a Dr. Watson error while trying to convert the
	content of the "bad" message. The following events will usually be found in the
	application event log:
	
	  Event ID: 4116
	  Source: MSExchangeIMC
	  Description: An error was returned from the messaging software the
	  Internet Mail Service uses to process messages on the Microsoft Exchange
	  Server. It is possible that the piece of mail being processed at the
	  time will not be delivered. The message that was being processed has
	  been moved to the "BAD" folder. Use the appropriate utilities found in
	  the SUPPORT directory of your Exchange CD to view and manipulate these
	  messages.
	
	  Event ID: 4117
	  Source: MSExchangeIMC
	  Description: An error was returned from the messaging software the
	  Internet Mail Service uses to process messages on the Microsoft Exchange
	  Server. As a result, the message in spool file XXXXXXXX failed to be
	  delivered. The message has been moved to the Imcdata\In\Archive
	  directory.
	
	MORE INFORMATION
	================
	
	The following steps should be used to resolve the issue. If there is not a
	current fix for the problem, the steps included will help you gather the
	necessary data for a prompt resolution:
	
	1. Make sure the proper symbols are loaded on the Exchange Server computer. For
	  information about the steps needed to load Exchange Server symbols for Dr.
	  Watson, please see the following article in the Microsoft Knowledge Base:
	
	  Q150564 XADM: How to load Exchange Symbols for DR. Watson
	
	2. Set Diagnostics Logging of MSExchangeIMC\Message Archival to Maximum. This
	  can be set from the Diagnostics Logging tab on the server's Properties page.
	
	3. Gather information leading up to the reproduction of the error. For example,
	  starting the MSExchangeIMC service may result in the Dr. Watson error with
	  Store.exe.
	
	  NOTE: This may take time if a particular type of message causes the crash.
	
	4. After reproducing the Dr. Watson in Store.exe, open the Drwtsn32.log file
	  using Notepad. Find the function name where the fault occurred. The easiest
	  way to do this is by scrolling to the bottom of the Drwtsn32.log file and
	  searching "up" for the word 'Fault.' This will place you in the dump of the
	  last Dr. Watson error encountered. Make a note of the function name, and
	  search the Knowledge Base for related Dr. Watson erroring in that function.
	
	5. Depending on the cause of the problem, the following events may or may not
	  appear in the application event log:
	
	     Event ID: 4116
	     Source: MSExchangeIMC
	     Description: An error was returned from the messaging software the
	     Internet Mail Service uses to process messages on the Microsoft
	     Exchange Server. It is possible that the piece of mail being
	     processed at the time will not be delivered. The message that was
	     being processed has been moved to the "BAD" folder. Use the
	     appropriate utilities found in the SUPPORT directory of your Exchange
	     CD to view and manipulate these messages.
	
	     Event ID: 4117
	     Source: MSExchangeIMC
	     Description: An error was returned from the messaging software the
	     Internet Mail Service uses to process messages on the Microsoft
	     Exchange Server. As a result, the message in spool file XXXXXXXX
	     failed to be delivered. The message has been moved to the
	     Imcdata\In\Archive directory.
	
	
	  If these events appear, search the \Exchsrvr\Imcdata\In\Archive folder for the
	  spool file mentioned above (for example, XXXXXXXX). This is, most likely, the
	  "bad" message that caused the information store to crash.
	
	
	6. If a resolution still has not been reached, a case should be opened with the
	  Exchange Server support group. The following information will need to be
	  gathered. This information should be zipped up and sent to Microsoft using
	  FTP, or any other form of file transfer:
	
	   - User.dmp
	
	   - Drwtsn32.log
	
	   - Application event log
	
	   - <bad message> from \Exchsrvr\Imcdata\In\Archive folder
	
	
	
	
	Additional query words: DrWatson Dr-Watson debug store.dbg
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
