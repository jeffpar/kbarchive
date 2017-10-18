---
layout: page
title: "Q239124: Time Stamp Errors Running Windows NT on an AS/400-Based Computer"
permalink: kb/239/Q239124/
---

## Q239124: Time Stamp Errors Running Windows NT on an AS/400-Based Computer

	Article: Q239124
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbinterop kbui exc5 exc55
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view documents or e-mail messages created on Microsoft Windows 98/95
	client computers and stored on an IBM AS/400-based computer that is using an
	Integrated PC Server (IPCS) adapter to run Windows NT, your documents or e-mail
	messages may have time discrepancies of 1-2 hours between the document creation
	or modification time on a client workstation and the same time values recorded
	on the server.
	
	CAUSE
	=====
	
	This behavior can occur if Daylight Savings Time has altered the time. IPCS
	adapters do not contain a system clock, but instead depend on time information
	provided by the AS/400-based computer. AS/400-based computers and the OS/400
	operating system do not automatically adjust for Daylight Savings Time.
	
	RESOLUTION
	==========
	
	To work around this behavior, at the beginning and ending of Daylight Savings
	Time reset the AS/400 Local Time Offset from Greenwich Mean Time (GMT) by
	modifying the value of the "QUTCOFFSET" registry setting on the AS/400-based
	computer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The system administrator of the AS/400-based computer must manually adjust the
	System Registry to reset the current "Time Offset" on the computer from GMT.
	Note that GMT is also known as Universal Time Code (UTC). For example, during
	Eastern Standard Time (EST), local clocks are set 5 hours earlier than GMT.
	However, because GMT is not adjusted for Daylight Savings Time, servers in the
	Eastern time zone must be adjusted by an additional hour during the period known
	as Eastern Daylight Time. Because of this, the "normal" offset of minus 5 hours
	for the Eastern Time Zone should be adjusted to minus 6 hours during Daylight
	Savings Time.
	
	This adjustment is processed automatically at the beginning and end of Daylight
	Savings Time with Windows 98/95-based workstations and Windows NT-based
	workstations and servers. However, on AS/400-based computers, the system
	administrator must modify the AS/400 "QUTCOFFSET" registry setting at the
	beginning and end of Daylight Savings Time. If the administrator does not make
	these adjustments on the AS/400-based computer, date and time stamps on
	documents and e-mail messages are displayed with different values, depending on
	whether they are viewed from the server or the workstation. For information
	about how to modify this registry setting, please contact IBM technical
	support.
	
	If the "Adjust For Daylight Savings" feature is not enabled on the Windows
	98/95-based or Windows NT-based computer, the time variance is 1 hour. If the
	"Adjust For Daylight Savings" feature is enabled on the Windows 98/95-based or
	Windows NT-based computer, the time variance is 2 hours.
	
	For IBM AS/400 technical information, please see the following IBM Web site:
	
	  http://AS400Service.Rochester.IBM.Com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: 2850 2854 2857 2865 2866 2868 6617 6618 zone stamp
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbinterop kbui exc5 exc55 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:4.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
